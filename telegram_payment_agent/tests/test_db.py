from __future__ import annotations

import tempfile
import unittest
from pathlib import Path

from app.db import ActiveRequestError, Database, DuplicateReferenceError


class DatabaseTests(unittest.IsolatedAsyncioTestCase):
    async def asyncSetUp(self) -> None:
        self.temp_dir = tempfile.TemporaryDirectory()
        self.db = Database(Path(self.temp_dir.name) / "test.sqlite3")
        await self.db.init()
        self.user_id = await self.db.upsert_user(123456, "tester", "12345678")
        request_id = await self.db.create_account_request(
            self.user_id,
            "tg123456_deadbeef",
            "encrypted-placeholder",
            "12345678",
        )
        await self.db.update_account_status(request_id, "RUNNING")
        await self.db.complete_account_request(request_id)

    async def asyncTearDown(self) -> None:
        self.temp_dir.cleanup()

    async def test_account_request_blocks_duplicate_pending_account(self) -> None:
        second_user_id = await self.db.upsert_user(123457, "tester2")
        await self.db.create_account_request(second_user_id, "tg123457_deadbeef", "enc", "12345678")
        with self.assertRaises(ActiveRequestError):
            await self.db.create_account_request(second_user_id, "tg123457_cafebabe", "enc", "12345678")

    async def test_deposit_state_is_monotonic_and_reference_is_unique(self) -> None:
        deposit_id = await self.db.create_deposit(
            self.user_id, "1.000", "d17", "/tmp/screenshot.jpg", "12345678", "REF-123"
        )
        await self.db.update_deposit_status(deposit_id, "VERIFYING")
        await self.db.update_deposit_status(deposit_id, "VERIFIED_SUCCESS")
        await self.db.update_deposit_status(deposit_id, "DEPOSITING")
        await self.db.update_deposit_status(deposit_id, "DEPOSITED", admin_confirmation="test")
        with self.assertRaises(RuntimeError):
            await self.db.update_deposit_status(deposit_id, "MANUAL_REVIEW", error="should not downgrade")

        await self.db.update_deposit_status(deposit_id, "DEPOSITED")
        # Final references remain reserved even after a job completes.
        other_user_id = await self.db.upsert_user(123458, "tester3")
        account_id = await self.db.create_account_request(other_user_id, "tg123458_deadbeef", "enc", "12345678")
        await self.db.update_account_status(account_id, "RUNNING")
        await self.db.complete_account_request(account_id)
        with self.assertRaises(DuplicateReferenceError):
            await self.db.create_deposit(
                other_user_id, "1.000", "d17", "/tmp/other.jpg", "12345678", "REF-123"
            )

    async def test_claim_is_atomic_and_returns_queued_job(self) -> None:
        job = await self.db.claim_job()
        self.assertIsNotNone(job)
        self.assertEqual(job["type"], "CREATE_ACCOUNT")
        self.assertEqual(job["status"], "RUNNING")
        self.assertIsNone(await self.db.claim_job())


if __name__ == "__main__":
    unittest.main()
