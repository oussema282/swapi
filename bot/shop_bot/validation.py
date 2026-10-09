from __future__ import annotations

import re
from decimal import Decimal, InvalidOperation


class ValidationError(ValueError):
    """A value supplied by a Telegram user is not valid."""


def validate_game_username(value: str, pattern: str) -> str:
    username = value.strip()
    if not re.fullmatch(pattern, username):
        raise ValidationError(
            "Use 3–20 characters. Start with a letter and use only letters, numbers, or _."
        )
    return username


def parse_amount(value: str, minimum: Decimal, maximum: Decimal) -> Decimal:
    raw = value.strip()
    if not raw or "," in raw:
        raise ValidationError(
            "Enter an amount like 25 or 25.50 (use a dot, not a comma)."
        )

    try:
        amount = Decimal(raw)
    except InvalidOperation as exc:
        raise ValidationError("Enter a valid number, for example 25 or 25.50.") from exc

    if not amount.is_finite():
        raise ValidationError("Enter a finite amount.")
    if amount.as_tuple().exponent < -2:
        raise ValidationError("Use no more than two decimal places.")
    if amount < minimum or amount > maximum:
        raise ValidationError(f"Amount must be between {minimum} and {maximum}.")

    return amount.quantize(Decimal("0.01"))


def format_amount(amount: Decimal) -> str:
    return format(amount, ".2f")
