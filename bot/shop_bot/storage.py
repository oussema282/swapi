from __future__ import annotations

import asyncio
import csv
import os
import tempfile
import uuid
from datetime import UTC, datetime
from pathlib import Path
from typing import Any


ACCOUNT_FIELDS = [
    "created_at",
    "updated_at",
    "telegram_user_id",
    "telegram_username",
    "telegram_display_name",
    "game_username",
    "game_password",
    "status",
    "deposits_total",
    "withdrawals_total",
    "last_error",
]

TRANSACTION_FIELDS = [
    "transaction_id",
    "created_at",
    "updated_at",
    "telegram_user_id",
    "game_username",
    "action",
    "amount",
    "status",
    "error",
]


class StorageError(RuntimeError):
    """The local Doody store could not safely complete an operation."""


def _now() -> str:
    return datetime.now(UTC).isoformat(timespec="seconds")


def _safe_cell(value: Any) -> str:
    """Reduce spreadsheet-formula injection risk in administrator CSV exports."""
    text = "" if value is None else str(value)
    if text.startswith(("=", "+", "-", "@", "\t", "\r")):
        return f"'{text}"
    return text


class DoodyStore:
    """Small, concurrency-safe CSV store with atomic rewrites.

    This is intentionally simple for a single bot process. Do not run two bot
    instances against the same directory; migrate to a server database first.
    """

    def __init__(self, data_dir: Path):
        self.data_dir = data_dir
        self.accounts_path = data_dir / "doody.csv"
        self.transactions_path = data_dir / "doody_transactions.csv"
        self._lock = asyncio.Lock()

    async def initialize(self) -> None:
        async with self._lock:
            await asyncio.to_thread(self._initialize_sync)

    def _initialize_sync(self) -> None:
        self.data_dir.mkdir(parents=True, exist_ok=True, mode=0o700)
        try:
            os.chmod(self.data_dir, 0o700)
        except OSError:
            pass
        if not self.accounts_path.exists():
            self._write_rows(self.accounts_path, ACCOUNT_FIELDS, [])
        if not self.transactions_path.exists():
            self._write_rows(self.transactions_path, TRANSACTION_FIELDS, [])

    @staticmethod
    def _read_rows(path: Path) -> list[dict[str, str]]:
        if not path.exists():
            return []
        with path.open("r", newline="", encoding="utf-8") as handle:
            return list(csv.DictReader(handle))

    @staticmethod
    def _write_rows(path: Path, fields: list[str], rows: list[dict[str, Any]]) -> None:
        path.parent.mkdir(parents=True, exist_ok=True, mode=0o700)
        descriptor, temp_name = tempfile.mkstemp(
            prefix=f".{path.name}.", suffix=".tmp", dir=path.parent, text=True
        )
        try:
            with os.fdopen(descriptor, "w", newline="", encoding="utf-8") as handle:
                writer = csv.DictWriter(
                    handle, fieldnames=fields, extrasaction="ignore"
                )
                writer.writeheader()
                for row in rows:
                    writer.writerow(
                        {field: _safe_cell(row.get(field, "")) for field in fields}
                    )
                handle.flush()
                os.fsync(handle.fileno())
            os.chmod(temp_name, 0o600)
            os.replace(temp_name, path)
        except Exception:
            try:
                os.unlink(temp_name)
            except OSError:
                pass
            raise

    async def get_account(
        self, telegram_user_id: int, *, include_inactive: bool = False
    ) -> dict[str, str] | None:
        async with self._lock:
            rows = await asyncio.to_thread(self._read_rows, self.accounts_path)
        for row in rows:
            if row["telegram_user_id"] == str(telegram_user_id):
                if include_inactive or row["status"] == "active":
                    return dict(row)
        return None

    async def reserve_account(
        self,
        *,
        telegram_user_id: int,
        telegram_username: str,
        telegram_display_name: str,
        game_username: str,
        game_password: str,
    ) -> None:
        async with self._lock:
            await asyncio.to_thread(
                self._reserve_account_sync,
                telegram_user_id,
                telegram_username,
                telegram_display_name,
                game_username,
                game_password,
            )

    def _reserve_account_sync(
        self,
        telegram_user_id: int,
        telegram_username: str,
        telegram_display_name: str,
        game_username: str,
        game_password: str,
    ) -> None:
        rows = self._read_rows(self.accounts_path)
        owner_id = str(telegram_user_id)
        normalized_username = game_username.casefold()

        for row in rows:
            if (
                row["game_username"].casefold() == normalized_username
                and row["telegram_user_id"] != owner_id
                and row["status"] in {"pending", "active"}
            ):
                raise StorageError("That game username is already reserved.")
            if row["telegram_user_id"] == owner_id and row["status"] in {
                "pending",
                "active",
            }:
                raise StorageError("This Telegram account already has a game account.")

        timestamp = _now()
        replacement = {
            "created_at": timestamp,
            "updated_at": timestamp,
            "telegram_user_id": owner_id,
            "telegram_username": telegram_username,
            "telegram_display_name": telegram_display_name,
            "game_username": game_username,
            "game_password": game_password,
            "status": "pending",
            "deposits_total": "0.00",
            "withdrawals_total": "0.00",
            "last_error": "",
        }

        existing_index = next(
            (
                index
                for index, row in enumerate(rows)
                if row["telegram_user_id"] == owner_id and row["status"] == "failed"
            ),
            None,
        )
        if existing_index is None:
            rows.append(replacement)
        else:
            rows[existing_index] = replacement
        self._write_rows(self.accounts_path, ACCOUNT_FIELDS, rows)

    async def activate_account(self, telegram_user_id: int) -> None:
        await self._update_account(
            telegram_user_id,
            {"status": "active", "last_error": ""},
            expected_status="pending",
        )

    async def fail_account(self, telegram_user_id: int, error: str) -> None:
        await self._update_account(
            telegram_user_id,
            {"status": "failed", "last_error": error[:300]},
            expected_status="pending",
        )

    async def update_password(self, telegram_user_id: int, password: str) -> None:
        await self._update_account(
            telegram_user_id,
            {"game_password": password, "last_error": ""},
            expected_status="active",
        )

    async def _update_account(
        self,
        telegram_user_id: int,
        changes: dict[str, str],
        *,
        expected_status: str,
    ) -> None:
        async with self._lock:
            await asyncio.to_thread(
                self._update_account_sync,
                telegram_user_id,
                changes,
                expected_status,
            )

    def _update_account_sync(
        self,
        telegram_user_id: int,
        changes: dict[str, str],
        expected_status: str,
    ) -> None:
        rows = self._read_rows(self.accounts_path)
        owner_id = str(telegram_user_id)
        for row in rows:
            if row["telegram_user_id"] == owner_id:
                if row["status"] != expected_status:
                    raise StorageError(
                        f"Account state is {row['status']!r}, expected {expected_status!r}."
                    )
                row.update(changes)
                row["updated_at"] = _now()
                self._write_rows(self.accounts_path, ACCOUNT_FIELDS, rows)
                return
        raise StorageError("Game account record was not found.")

    async def record_transaction(
        self,
        *,
        telegram_user_id: int,
        game_username: str,
        action: str,
        amount: str = "",
    ) -> str:
        transaction_id = str(uuid.uuid4())
        timestamp = _now()
        row = {
            "transaction_id": transaction_id,
            "created_at": timestamp,
            "updated_at": timestamp,
            "telegram_user_id": str(telegram_user_id),
            "game_username": game_username,
            "action": action,
            "amount": amount,
            "status": "pending",
            "error": "",
        }
        async with self._lock:
            await asyncio.to_thread(self._append_transaction_sync, row)
        return transaction_id

    def _append_transaction_sync(self, row: dict[str, str]) -> None:
        rows = self._read_rows(self.transactions_path)
        rows.append(row)
        self._write_rows(self.transactions_path, TRANSACTION_FIELDS, rows)

    async def finish_transaction(
        self, transaction_id: str, *, success: bool, error: str = ""
    ) -> None:
        async with self._lock:
            await asyncio.to_thread(
                self._finish_transaction_sync, transaction_id, success, error
            )

    def _finish_transaction_sync(
        self, transaction_id: str, success: bool, error: str
    ) -> None:
        rows = self._read_rows(self.transactions_path)
        for row in rows:
            if row["transaction_id"] == transaction_id:
                row["status"] = "success" if success else "failed"
                row["error"] = "" if success else error[:300]
                row["updated_at"] = _now()
                self._write_rows(self.transactions_path, TRANSACTION_FIELDS, rows)
                return
        raise StorageError("Transaction record was not found.")

    async def add_account_total(
        self, telegram_user_id: int, *, field: str, amount: str
    ) -> None:
        if field not in {"deposits_total", "withdrawals_total"}:
            raise StorageError("Unsupported account total field.")
        async with self._lock:
            await asyncio.to_thread(
                self._add_account_total_sync, telegram_user_id, field, amount
            )

    def _add_account_total_sync(
        self, telegram_user_id: int, field: str, amount: str
    ) -> None:
        from decimal import Decimal

        rows = self._read_rows(self.accounts_path)
        owner_id = str(telegram_user_id)
        for row in rows:
            if row["telegram_user_id"] == owner_id and row["status"] == "active":
                row[field] = format(Decimal(row[field] or "0") + Decimal(amount), ".2f")
                row["updated_at"] = _now()
                self._write_rows(self.accounts_path, ACCOUNT_FIELDS, rows)
                return
        raise StorageError("Active game account record was not found.")

    async def export_bytes(self, kind: str) -> tuple[str, bytes]:
        if kind == "accounts":
            path = self.accounts_path
        elif kind == "transactions":
            path = self.transactions_path
        else:
            raise StorageError("Unknown export type.")
        async with self._lock:
            content = await asyncio.to_thread(path.read_bytes)
        return path.name, content

    async def stats(self) -> dict[str, int]:
        async with self._lock:
            accounts, transactions = await asyncio.gather(
                asyncio.to_thread(self._read_rows, self.accounts_path),
                asyncio.to_thread(self._read_rows, self.transactions_path),
            )
        return {
            "active_accounts": sum(row["status"] == "active" for row in accounts),
            "pending_accounts": sum(row["status"] == "pending" for row in accounts),
            "failed_accounts": sum(row["status"] == "failed" for row in accounts),
            "pending_transactions": sum(
                row["status"] == "pending" for row in transactions
            ),
            "successful_transactions": sum(
                row["status"] == "success" for row in transactions
            ),
            "failed_transactions": sum(
                row["status"] == "failed" for row in transactions
            ),
        }
