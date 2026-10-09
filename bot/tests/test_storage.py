from pathlib import Path
from tempfile import TemporaryDirectory
import unittest

from shop_bot.storage import DoodyStore


class StorageTests(unittest.IsolatedAsyncioTestCase):
    async def asyncSetUp(self) -> None:
        self.temp_dir = TemporaryDirectory()
        self.store = DoodyStore(Path(self.temp_dir.name))
        await self.store.initialize()

    async def asyncTearDown(self) -> None:
        self.temp_dir.cleanup()

    async def test_account_lifecycle_and_totals(self) -> None:
        await self.store.reserve_account(
            telegram_user_id=123,
            telegram_username="tester",
            telegram_display_name="Test User",
            game_username="Player_1",
            game_password="123456",
        )
        pending = await self.store.get_account(123, include_inactive=True)
        self.assertIsNotNone(pending)
        self.assertEqual(pending["status"], "pending")

        await self.store.activate_account(123)
        await self.store.add_account_total(123, field="deposits_total", amount="12.50")
        account = await self.store.get_account(123)
        self.assertIsNotNone(account)
        self.assertEqual(account["deposits_total"], "12.50")

    async def test_failed_account_can_be_retried(self) -> None:
        values = {
            "telegram_user_id": 123,
            "telegram_username": "tester",
            "telegram_display_name": "Test User",
            "game_username": "Player_1",
            "game_password": "123456",
        }
        await self.store.reserve_account(**values)
        await self.store.fail_account(123, "not confirmed")
        values["game_username"] = "Player_2"
        values["game_password"] = "654321"
        await self.store.reserve_account(**values)
        account = await self.store.get_account(123, include_inactive=True)
        self.assertEqual(account["game_username"], "Player_2")
        self.assertEqual(account["status"], "pending")

    async def test_transaction_lifecycle(self) -> None:
        transaction_id = await self.store.record_transaction(
            telegram_user_id=123,
            game_username="Player_1",
            action="deposit",
            amount="10.00",
        )
        await self.store.finish_transaction(transaction_id, success=True)
        stats = await self.store.stats()
        self.assertEqual(stats["successful_transactions"], 1)
        self.assertEqual(stats["pending_transactions"], 0)


if __name__ == "__main__":
    unittest.main()
