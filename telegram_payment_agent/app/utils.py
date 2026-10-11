from __future__ import annotations

import json
import re
import secrets
import string
from decimal import Decimal, InvalidOperation
from typing import Any

MILLI = Decimal("0.001")


def json_dumps(value: Any) -> str:
    return json.dumps(value, ensure_ascii=False, separators=(",", ":"))


def json_loads(value: str | None, default: Any = None) -> Any:
    if not value:
        return default
    try:
        return json.loads(value)
    except (json.JSONDecodeError, TypeError):
        return default


def normalize_phone(value: str | None) -> str:
    digits = re.sub(r"\D", "", value or "")
    # Tunisian international format: +216 followed by an eight-digit local number.
    if digits.startswith("216") and len(digits) == 11:
        digits = digits[3:]
    return digits


def valid_phone(value: str | None) -> bool:
    digits = normalize_phone(value)
    return 8 <= len(digits) <= 15


def normalize_reference(value: str | None) -> str:
    return re.sub(r"[^A-Za-z0-9_-]", "", value or "").upper()


def normalize_status(value: str | None) -> str:
    return re.sub(r"\s+", " ", (value or "").strip()).upper()


def classify_status(raw: str | None, success_values: tuple[str, ...], failure_values: tuple[str, ...]) -> str:
    """Classify only exact normalized status values; never use substring matches."""
    status = normalize_status(raw)
    failures = {normalize_status(value) for value in failure_values if value.strip()}
    successes = {normalize_status(value) for value in success_values if value.strip()}
    if status in failures:
        return "FAILED"
    if status in successes:
        return "SUCCESS"
    return "UNKNOWN"


def parse_amount(value: str | float | Decimal | None) -> Decimal | None:
    """Parse a decimal amount, accepting comma or dot decimal separators.

    The result is quantized to TND's three decimal places. Non-finite values,
    malformed strings, and negative values are rejected.
    """
    if value is None:
        return None
    if isinstance(value, Decimal):
        amount = value
    else:
        text = str(value).strip().replace("DT", "").replace("TND", "").replace(" ", "")
        text = text.replace("\u00a0", "")
        if not text:
            return None
        # If both punctuation marks occur, the last one is treated as decimal;
        # the other is treated as a thousands separator.
        if "," in text and "." in text:
            if text.rfind(",") > text.rfind("."):
                text = text.replace(".", "").replace(",", ".")
            else:
                text = text.replace(",", "")
        elif "," in text:
            text = text.replace(",", ".")
        # Reject unexpected characters rather than silently extracting a number.
        if not re.fullmatch(r"\+?\d+(?:\.\d+)?", text):
            return None
        try:
            amount = Decimal(text)
        except InvalidOperation:
            return None
    if not amount.is_finite() or amount < 0:
        return None
    try:
        return amount.quantize(MILLI)
    except InvalidOperation:
        return None


def amount_equal(left: Decimal | None, right: Decimal | None) -> bool:
    return left is not None and right is not None and left.is_finite() and right.is_finite() and left == right


def generate_password(length: int = 16) -> str:
    if length < 12:
        raise ValueError("Generated passwords must be at least 12 characters")
    alphabet = string.ascii_letters + string.digits + "!@#$%_-"
    return "".join(secrets.choice(alphabet) for _ in range(length))


def generate_username(telegram_id: int) -> str:
    return f"tg{telegram_id}_{secrets.token_hex(4)}"
