from __future__ import annotations

import asyncio
import sqlite3
from collections.abc import AsyncIterator
from contextlib import asynccontextmanager
from datetime import UTC, datetime, timedelta
from pathlib import Path
from typing import Any

import aiosqlite

from .utils import json_dumps, json_loads


class ActiveRequestError(RuntimeError):
    pass


class DuplicateReferenceError(RuntimeError):
    pass


def now_iso() -> str:
    return datetime.now(UTC).isoformat()


_DEPOSIT_TRANSITIONS: dict[str, set[str]] = {
    "WAITING_VERIFICATION": {"VERIFYING", "MANUAL_REVIEW"},
    "VERIFYING": {"VERIFYING", "VERIFICATION_FAILED", "VERIFIED_SUCCESS", "MANUAL_REVIEW"},
    "VERIFIED_SUCCESS": {"DEPOSITING", "DRY_RUN_SUCCESS", "MANUAL_REVIEW"},
    "DEPOSITING": {"DEPOSITED", "MANUAL_REVIEW"},
    "MANUAL_REVIEW": {"MANUAL_REVIEW"},
    "VERIFICATION_FAILED": {"VERIFICATION_FAILED"},
    "DRY_RUN_SUCCESS": {"DRY_RUN_SUCCESS"},
    "DEPOSITED": {"DEPOSITED"},
}


class Database:
    def __init__(self, path: Path):
        self.path = Path(path)
        self._init_lock = asyncio.Lock()
        self._initialized = False

    async def init(self) -> None:
        if self._initialized:
            return
        async with self._init_lock:
            if self._initialized:
                return
            self.path.parent.mkdir(parents=True, exist_ok=True)
            async with aiosqlite.connect(self.path, timeout=30) as db:
                await db.execute("PRAGMA journal_mode=WAL")
                await db.execute("PRAGMA foreign_keys=ON")
                await db.execute("PRAGMA busy_timeout=30000")
                await db.executescript(
                    """
                    CREATE TABLE IF NOT EXISTS users (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        telegram_id INTEGER NOT NULL UNIQUE,
                        telegram_username TEXT,
                        website_username TEXT UNIQUE,
                        phone TEXT,
                        created_at TEXT NOT NULL,
                        updated_at TEXT NOT NULL
                    );

                    CREATE TABLE IF NOT EXISTS account_requests (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        user_id INTEGER NOT NULL,
                        website_username TEXT NOT NULL UNIQUE,
                        encrypted_password TEXT NOT NULL,
                        phone TEXT NOT NULL,
                        status TEXT NOT NULL DEFAULT 'WAITING',
                        error TEXT,
                        created_at TEXT NOT NULL,
                        updated_at TEXT NOT NULL,
                        FOREIGN KEY(user_id) REFERENCES users(id)
                    );
                    CREATE INDEX IF NOT EXISTS idx_account_requests_status
                        ON account_requests(status, id);
                    CREATE UNIQUE INDEX IF NOT EXISTS idx_one_open_account_request
                        ON account_requests(user_id)
                        WHERE status IN ('WAITING', 'RUNNING', 'MANUAL_REVIEW');

                    CREATE TABLE IF NOT EXISTS deposits (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        user_id INTEGER NOT NULL,
                        amount TEXT NOT NULL,
                        method TEXT NOT NULL,
                        sender_phone TEXT NOT NULL,
                        reference_number TEXT NOT NULL,
                        screenshot_path TEXT NOT NULL,
                        status TEXT NOT NULL DEFAULT 'WAITING_VERIFICATION',
                        verification_status TEXT,
                        verification_amount TEXT,
                        verification_phone TEXT,
                        verification_reference TEXT,
                        verifier_transaction_id TEXT,
                        admin_confirmation TEXT,
                        error TEXT,
                        created_at TEXT NOT NULL,
                        updated_at TEXT NOT NULL,
                        FOREIGN KEY(user_id) REFERENCES users(id),
                        UNIQUE(method, reference_number)
                    );
                    CREATE INDEX IF NOT EXISTS idx_deposits_status ON deposits(status, id);
                    CREATE INDEX IF NOT EXISTS idx_deposits_user_status ON deposits(user_id, status);

                    CREATE TABLE IF NOT EXISTS jobs (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        type TEXT NOT NULL,
                        status TEXT NOT NULL DEFAULT 'QUEUED',
                        payload_json TEXT NOT NULL,
                        result_json TEXT,
                        error TEXT,
                        created_at TEXT NOT NULL,
                        started_at TEXT,
                        finished_at TEXT
                    );
                    CREATE INDEX IF NOT EXISTS idx_jobs_queue ON jobs(status, id);
                    """
                )
                await db.commit()
            self._initialized = True

    @asynccontextmanager
    async def _connection(self) -> AsyncIterator[aiosqlite.Connection]:
        await self.init()
        db = await aiosqlite.connect(self.path, timeout=30)
        db.row_factory = sqlite3.Row
        await db.execute("PRAGMA foreign_keys=ON")
        await db.execute("PRAGMA busy_timeout=30000")
        try:
            yield db
        finally:
            await db.close()

    async def upsert_user(self, telegram_id: int, telegram_username: str | None, phone: str | None = None) -> int:
        ts = now_iso()
        async with self._connection() as db:
            await db.execute(
                """
                INSERT INTO users (telegram_id, telegram_username, phone, created_at, updated_at)
                VALUES (?, ?, ?, ?, ?)
                ON CONFLICT(telegram_id) DO UPDATE SET
                    telegram_username=excluded.telegram_username,
                    phone=COALESCE(excluded.phone, users.phone),
                    updated_at=excluded.updated_at
                """,
                (telegram_id, telegram_username, phone, ts, ts),
            )
            await db.commit()
            cur = await db.execute("SELECT id FROM users WHERE telegram_id=?", (telegram_id,))
            row = await cur.fetchone()
            if row is None:
                raise RuntimeError("User upsert did not return a user row")
            return int(row[0])

    async def get_user(self, telegram_id: int) -> dict[str, Any] | None:
        async with self._connection() as db:
            cur = await db.execute("SELECT * FROM users WHERE telegram_id=?", (telegram_id,))
            row = await cur.fetchone()
            return dict(row) if row else None

    async def create_account_request(
        self,
        user_id: int,
        website_username: str,
        encrypted_password: str,
        phone: str,
    ) -> int:
        ts = now_iso()
        async with self._connection() as db:
            await db.execute("BEGIN IMMEDIATE")
            cur = await db.execute("SELECT website_username FROM users WHERE id=?", (user_id,))
            user = await cur.fetchone()
            if user is None:
                await db.rollback()
                raise ActiveRequestError("Telegram user record was not found")
            if user["website_username"]:
                await db.rollback()
                raise ActiveRequestError("This Telegram user already has a website account")
            cur = await db.execute(
                "SELECT id FROM account_requests WHERE user_id=? AND status IN ('WAITING','RUNNING','MANUAL_REVIEW') LIMIT 1",
                (user_id,),
            )
            if await cur.fetchone():
                await db.rollback()
                raise ActiveRequestError("An account request is already pending or needs manual review")
            try:
                cur = await db.execute(
                    """
                    INSERT INTO account_requests
                    (user_id, website_username, encrypted_password, phone, status, created_at, updated_at)
                    VALUES (?, ?, ?, ?, 'WAITING', ?, ?)
                    """,
                    (user_id, website_username, encrypted_password, phone, ts, ts),
                )
                request_id = int(cur.lastrowid)
                await db.execute(
                    "INSERT INTO jobs (type,status,payload_json,created_at) VALUES ('CREATE_ACCOUNT','QUEUED',?,?)",
                    (json_dumps({"account_request_id": request_id}), ts),
                )
                await db.commit()
                return request_id
            except sqlite3.IntegrityError as exc:
                await db.rollback()
                raise ActiveRequestError("Could not create the account request; check for an existing request") from exc

    async def get_account_request(self, request_id: int) -> dict[str, Any] | None:
        async with self._connection() as db:
            cur = await db.execute(
                """
                SELECT ar.*, u.telegram_id, u.telegram_username
                FROM account_requests ar JOIN users u ON u.id=ar.user_id
                WHERE ar.id=?
                """,
                (request_id,),
            )
            row = await cur.fetchone()
            return dict(row) if row else None

    async def update_account_status(self, request_id: int, status: str, error: str | None = None) -> None:
        async with self._connection() as db:
            await db.execute(
                "UPDATE account_requests SET status=?, error=?, updated_at=? WHERE id=?",
                (status, error, now_iso(), request_id),
            )
            await db.commit()

    async def complete_account_request(self, request_id: int) -> None:
        ts = now_iso()
        async with self._connection() as db:
            await db.execute("BEGIN IMMEDIATE")
            cur = await db.execute(
                "SELECT user_id, website_username, status FROM account_requests WHERE id=?",
                (request_id,),
            )
            row = await cur.fetchone()
            if row is None:
                await db.rollback()
                raise RuntimeError(f"Account request {request_id} not found")
            if row["status"] not in {"RUNNING", "COMPLETED"}:
                await db.rollback()
                raise RuntimeError(f"Account request {request_id} is not in a completable state")
            await db.execute(
                "UPDATE users SET website_username=?, updated_at=? WHERE id=?",
                (row["website_username"], ts, row["user_id"]),
            )
            await db.execute(
                "UPDATE account_requests SET status='COMPLETED', error=NULL, updated_at=? WHERE id=?",
                (ts, request_id),
            )
            await db.commit()

    async def create_deposit(
        self,
        user_id: int,
        amount: str,
        method: str,
        screenshot_path: str,
        sender_phone: str,
        reference_number: str,
    ) -> int:
        ts = now_iso()
        async with self._connection() as db:
            await db.execute("BEGIN IMMEDIATE")
            cur = await db.execute("SELECT website_username FROM users WHERE id=?", (user_id,))
            user = await cur.fetchone()
            if user is None or not user["website_username"]:
                await db.rollback()
                raise ActiveRequestError("Create and confirm the website account before requesting a deposit")
            cur = await db.execute(
                """
                SELECT id FROM deposits
                WHERE user_id=? AND status IN
                ('WAITING_VERIFICATION','VERIFYING','VERIFIED_SUCCESS','DEPOSITING','MANUAL_REVIEW')
                LIMIT 1
                """,
                (user_id,),
            )
            if await cur.fetchone():
                await db.rollback()
                raise ActiveRequestError("A deposit is already pending or needs manual review")
            cur = await db.execute(
                "SELECT id FROM deposits WHERE method=? AND reference_number=? LIMIT 1",
                (method, reference_number),
            )
            if await cur.fetchone():
                await db.rollback()
                raise DuplicateReferenceError("This reference was already submitted for this payment method")
            try:
                cur = await db.execute(
                    """
                    INSERT INTO deposits
                    (user_id, amount, method, screenshot_path, sender_phone, reference_number,
                     status, created_at, updated_at)
                    VALUES (?, ?, ?, ?, ?, ?, 'WAITING_VERIFICATION', ?, ?)
                    """,
                    (user_id, amount, method, screenshot_path, sender_phone, reference_number, ts, ts),
                )
                deposit_id = int(cur.lastrowid)
                await db.execute(
                    "INSERT INTO jobs (type,status,payload_json,created_at) VALUES ('VERIFY_DEPOSIT','QUEUED',?,?)",
                    (json_dumps({"deposit_id": deposit_id}), ts),
                )
                await db.commit()
                return deposit_id
            except sqlite3.IntegrityError as exc:
                await db.rollback()
                raise DuplicateReferenceError("This reference was already submitted") from exc

    async def get_deposit(self, deposit_id: int) -> dict[str, Any] | None:
        async with self._connection() as db:
            cur = await db.execute(
                """
                SELECT d.*, u.telegram_id, u.telegram_username, u.website_username
                FROM deposits d JOIN users u ON u.id=d.user_id
                WHERE d.id=?
                """,
                (deposit_id,),
            )
            row = await cur.fetchone()
            return dict(row) if row else None

    async def update_deposit_status(self, deposit_id: int, status: str, **fields: Any) -> None:
        allowed = {
            "verification_status",
            "verification_amount",
            "verification_phone",
            "verification_reference",
            "verifier_transaction_id",
            "admin_confirmation",
            "error",
        }
        fields = {key: value for key, value in fields.items() if key in allowed}
        async with self._connection() as db:
            await db.execute("BEGIN IMMEDIATE")
            cur = await db.execute("SELECT status FROM deposits WHERE id=?", (deposit_id,))
            row = await cur.fetchone()
            if row is None:
                await db.rollback()
                raise RuntimeError(f"Deposit {deposit_id} not found")
            current = str(row["status"])
            if status not in _DEPOSIT_TRANSITIONS.get(current, set()):
                await db.rollback()
                raise RuntimeError(f"Invalid deposit status transition: {current} -> {status}")
            assignments = ["status=?", "updated_at=?"]
            values: list[Any] = [status, now_iso()]
            for key, value in fields.items():
                assignments.append(f"{key}=?")
                values.append(value)
            values.append(deposit_id)
            await db.execute(f"UPDATE deposits SET {', '.join(assignments)} WHERE id=?", values)
            await db.commit()

    async def reference_processed(self, method: str, reference_number: str, current_id: int | None = None) -> bool:
        async with self._connection() as db:
            if current_id is None:
                cur = await db.execute(
                    "SELECT id FROM deposits WHERE method=? AND reference_number=? LIMIT 1",
                    (method, reference_number),
                )
            else:
                cur = await db.execute(
                    "SELECT id FROM deposits WHERE method=? AND reference_number=? AND id<>? LIMIT 1",
                    (method, reference_number, current_id),
                )
            return await cur.fetchone() is not None

    async def claim_job(self) -> dict[str, Any] | None:
        async with self._connection() as db:
            await db.execute("BEGIN IMMEDIATE")
            cur = await db.execute("SELECT * FROM jobs WHERE status='QUEUED' ORDER BY id LIMIT 1")
            row = await cur.fetchone()
            if row is None:
                await db.commit()
                return None
            job_id = int(row["id"])
            ts = now_iso()
            await db.execute(
                "UPDATE jobs SET status='RUNNING', started_at=? WHERE id=? AND status='QUEUED'",
                (ts, job_id),
            )
            await db.commit()
            claimed = dict(row)
            claimed.update({"status": "RUNNING", "started_at": ts})
            return claimed

    async def finish_job(
        self,
        job_id: int,
        status: str,
        result: Any = None,
        error: str | None = None,
    ) -> None:
        if status not in {"DONE", "MANUAL_REVIEW", "ERROR"}:
            raise ValueError("Unsupported terminal job status")
        async with self._connection() as db:
            await db.execute(
                "UPDATE jobs SET status=?, result_json=?, error=?, finished_at=? WHERE id=?",
                (status, json_dumps(result) if result is not None else None, error, now_iso(), job_id),
            )
            await db.commit()

    async def recover_stale_jobs(self, stale_after_seconds: int = 3600) -> list[dict[str, Any]]:
        cutoff = (datetime.now(UTC) - timedelta(seconds=stale_after_seconds)).isoformat()
        recovered: list[dict[str, Any]] = []
        async with self._connection() as db:
            await db.execute("BEGIN IMMEDIATE")
            cur = await db.execute(
                "SELECT * FROM jobs WHERE status='RUNNING' AND started_at < ? ORDER BY id",
                (cutoff,),
            )
            rows = await cur.fetchall()
            for row in rows:
                job = dict(row)
                payload = json_loads(job.get("payload_json"), {}) or {}
                now = now_iso()
                if job["type"] == "VERIFY_DEPOSIT" and payload.get("deposit_id"):
                    dep_cur = await db.execute(
                        "SELECT status FROM deposits WHERE id=?",
                        (int(payload["deposit_id"]),),
                    )
                    dep = await dep_cur.fetchone()
                    if dep and dep["status"] not in {"DEPOSITED", "DRY_RUN_SUCCESS", "VERIFICATION_FAILED"}:
                        await db.execute(
                            "UPDATE deposits SET status='MANUAL_REVIEW', error=?, updated_at=? WHERE id=?",
                            ("Worker stopped while this job was running; reconcile before retrying.", now, int(payload["deposit_id"])),
                        )
                elif job["type"] == "CREATE_ACCOUNT" and payload.get("account_request_id"):
                    await db.execute(
                        "UPDATE account_requests SET status='MANUAL_REVIEW', error=?, updated_at=? WHERE id=? AND status!='COMPLETED'",
                        ("Worker stopped while this job was running; verify account creation before retrying.", now, int(payload["account_request_id"])),
                    )
                await db.execute(
                    "UPDATE jobs SET status='MANUAL_REVIEW',error=?,finished_at=? WHERE id=?",
                    ("Worker stopped during processing; reconcile the external site before retrying.", now, int(job["id"])),
                )
                recovered.append(job)
            await db.commit()
        return recovered

    async def queued_count(self) -> int:
        async with self._connection() as db:
            cur = await db.execute("SELECT COUNT(*) FROM jobs WHERE status='QUEUED'")
            row = await cur.fetchone()
            return int(row[0]) if row else 0
