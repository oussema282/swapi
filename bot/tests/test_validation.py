from decimal import Decimal
import unittest

from shop_bot.validation import ValidationError, parse_amount, validate_game_username


class ValidationTests(unittest.TestCase):
    def test_valid_username(self) -> None:
        self.assertEqual(
            validate_game_username("  Player_12 ", r"[A-Za-z][A-Za-z0-9_]{2,19}"),
            "Player_12",
        )

    def test_invalid_username(self) -> None:
        with self.assertRaises(ValidationError):
            validate_game_username("=bad", r"[A-Za-z][A-Za-z0-9_]{2,19}")

    def test_valid_amount(self) -> None:
        amount = parse_amount("25.5", Decimal("0.01"), Decimal("100.00"))
        self.assertEqual(amount, Decimal("25.50"))

    def test_amount_rejects_too_many_decimals(self) -> None:
        with self.assertRaises(ValidationError):
            parse_amount("1.001", Decimal("0.01"), Decimal("100.00"))

    def test_amount_rejects_non_finite_values(self) -> None:
        with self.assertRaises(ValidationError):
            parse_amount("NaN", Decimal("0.01"), Decimal("100.00"))


if __name__ == "__main__":
    unittest.main()
