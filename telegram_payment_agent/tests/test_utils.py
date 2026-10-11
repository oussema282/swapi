from __future__ import annotations

import unittest
from decimal import Decimal

from app.utils import (
    amount_equal,
    classify_status,
    normalize_phone,
    normalize_reference,
    parse_amount,
    valid_phone,
)


class AmountTests(unittest.TestCase):
    def test_locale_amounts(self) -> None:
        self.assertEqual(parse_amount("20.500 TND"), Decimal("20.500"))
        self.assertEqual(parse_amount("20,500"), Decimal("20.500"))
        self.assertEqual(parse_amount("1.234,500"), Decimal("1234.500"))

    def test_rejects_non_finite_and_malformed(self) -> None:
        self.assertIsNone(parse_amount("NaN"))
        self.assertIsNone(parse_amount("Infinity"))
        self.assertIsNone(parse_amount("5abc"))
        self.assertIsNone(parse_amount("-1"))

    def test_amount_equality_is_exact_at_millime_precision(self) -> None:
        self.assertTrue(amount_equal(Decimal("1.000"), Decimal("1.000")))
        self.assertFalse(amount_equal(Decimal("1.001"), Decimal("1.000")))


class InputNormalizationTests(unittest.TestCase):
    def test_tunisian_phone_normalization(self) -> None:
        self.assertEqual(normalize_phone("+216 12 345 678"), "12345678")
        self.assertTrue(valid_phone("12 345 678"))
        self.assertFalse(valid_phone("123"))

    def test_reference_normalization(self) -> None:
        self.assertEqual(normalize_reference(" ab-12 34/xy "), "AB-1234XY")


class StatusClassificationTests(unittest.TestCase):
    SUCCESS = ("SUCCESS", "APPROVED", "VERIFIED")
    FAILURE = ("FAILED", "REJECTED", "DECLINED", "NOT SUCCESSFUL", "NOT APPROVED", "NOT VERIFIED")

    def test_exact_success(self) -> None:
        self.assertEqual(classify_status(" approved ", self.SUCCESS, self.FAILURE), "SUCCESS")

    def test_negative_phrases_never_match_success_substrings(self) -> None:
        self.assertEqual(classify_status("NOT SUCCESSFUL", self.SUCCESS, self.FAILURE), "FAILED")
        self.assertEqual(classify_status("NOT APPROVED", self.SUCCESS, self.FAILURE), "FAILED")
        self.assertEqual(classify_status("NOT VERIFIED", self.SUCCESS, self.FAILURE), "FAILED")

    def test_unrecognized_status_fails_closed(self) -> None:
        self.assertEqual(classify_status("SUCCESSFUL", self.SUCCESS, self.FAILURE), "UNKNOWN")
        self.assertEqual(classify_status("PROCESSING", self.SUCCESS, self.FAILURE), "UNKNOWN")


if __name__ == "__main__":
    unittest.main()
