from __future__ import annotations

import os
import re
from dataclasses import dataclass
from decimal import Decimal, InvalidOperation
from pathlib import Path
from urllib.parse import urlparse

from dotenv import load_dotenv


BOT_ROOT = Path(__file__).resolve().parents[1]


class ConfigError(RuntimeError):
    """Raised when required configuration is missing or unsafe."""


def _required(name: str) -> str:
    value = os.getenv(name, "").strip()
    if not value:
        raise ConfigError(f"Missing required environment variable: {name}")
    return value


def _optional(name: str, default: str = "") -> str:
    return os.getenv(name, default).strip()


def _boolean(name: str, default: bool) -> bool:
    value = _optional(name)
    if not value:
        return default
    normalized = value.lower()
    if normalized in {"1", "true", "yes", "on"}:
        return True
    if normalized in {"0", "false", "no", "off"}:
        return False
    raise ConfigError(f"{name} must be true or false")


def _integer(name: str, default: int, minimum: int = 0) -> int:
    value = _optional(name)
    if not value:
        return default
    try:
        parsed = int(value)
    except ValueError as exc:
        raise ConfigError(f"{name} must be an integer") from exc
    if parsed < minimum:
        raise ConfigError(f"{name} must be at least {minimum}")
    return parsed


def _decimal(name: str, default: str) -> Decimal:
    value = _optional(name, default)
    try:
        parsed = Decimal(value)
    except InvalidOperation as exc:
        raise ConfigError(f"{name} must be a valid decimal number") from exc
    if not parsed.is_finite():
        raise ConfigError(f"{name} must be finite")
    return parsed


def _path(name: str, default: Path) -> Path:
    raw = _optional(name)
    path = Path(raw).expanduser() if raw else default
    return path.resolve()


def _url(name: str, default: str = "") -> str:
    value = _optional(name, default)
    if not value:
        raise ConfigError(f"Missing required environment variable: {name}")
    parsed = urlparse(value)
    if parsed.scheme not in {"http", "https"} or not parsed.netloc:
        raise ConfigError(f"{name} must be a complete http(s) URL")
    return value


@dataclass(frozen=True)
class GameSelectors:
    login_username: str
    login_password: str
    login_submit: str
    login_success: str
    cash_register: str
    create_user: str
    create_username: str
    create_password: str
    create_confirm_password: str
    create_submit: str
    create_success: str
    deposit: str
    deposit_username: str
    deposit_amount: str
    deposit_submit: str
    deposit_success: str
    withdraw: str
    withdraw_username: str
    withdraw_amount: str
    withdraw_submit: str
    withdraw_success: str
    change_password: str
    change_password_username: str
    change_password_new: str
    change_password_confirm: str
    change_password_submit: str
    change_password_success: str

    @classmethod
    def from_env(cls) -> "GameSelectors":
        return cls(
            login_username=_required("GAME_LOGIN_USERNAME_SELECTOR"),
            login_password=_required("GAME_LOGIN_PASSWORD_SELECTOR"),
            login_submit=_required("GAME_LOGIN_SUBMIT_SELECTOR"),
            login_success=_required("GAME_LOGIN_SUCCESS_SELECTOR"),
            cash_register=_required("GAME_CASH_REGISTER_SELECTOR"),
            create_user=_required("GAME_CREATE_USER_SELECTOR"),
            create_username=_required("GAME_CREATE_USERNAME_SELECTOR"),
            create_password=_required("GAME_CREATE_PASSWORD_SELECTOR"),
            create_confirm_password=_optional("GAME_CREATE_CONFIRM_PASSWORD_SELECTOR"),
            create_submit=_required("GAME_CREATE_SUBMIT_SELECTOR"),
            create_success=_required("GAME_CREATE_SUCCESS_SELECTOR"),
            deposit=_required("GAME_DEPOSIT_SELECTOR"),
            deposit_username=_required("GAME_DEPOSIT_USERNAME_SELECTOR"),
            deposit_amount=_required("GAME_DEPOSIT_AMOUNT_SELECTOR"),
            deposit_submit=_required("GAME_DEPOSIT_SUBMIT_SELECTOR"),
            deposit_success=_required("GAME_DEPOSIT_SUCCESS_SELECTOR"),
            withdraw=_required("GAME_WITHDRAW_SELECTOR"),
            withdraw_username=_required("GAME_WITHDRAW_USERNAME_SELECTOR"),
            withdraw_amount=_required("GAME_WITHDRAW_AMOUNT_SELECTOR"),
            withdraw_submit=_required("GAME_WITHDRAW_SUBMIT_SELECTOR"),
            withdraw_success=_required("GAME_WITHDRAW_SUCCESS_SELECTOR"),
            change_password=_required("GAME_CHANGE_PASSWORD_SELECTOR"),
            change_password_username=_required(
                "GAME_CHANGE_PASSWORD_USERNAME_SELECTOR"
            ),
            change_password_new=_required("GAME_CHANGE_PASSWORD_NEW_SELECTOR"),
            change_password_confirm=_optional("GAME_CHANGE_PASSWORD_CONFIRM_SELECTOR"),
            change_password_submit=_required("GAME_CHANGE_PASSWORD_SUBMIT_SELECTOR"),
            change_password_success=_required("GAME_CHANGE_PASSWORD_SUCCESS_SELECTOR"),
        )


@dataclass(frozen=True)
class Settings:
    telegram_bot_token: str
    telegram_admin_ids: frozenset[int]
    game_base_url: str
    game_login_url: str
    game_admin_username: str
    game_admin_password: str
    selectors: GameSelectors
    browser_headless: bool
    browser_slow_mo_ms: int
    browser_timeout_ms: int
    save_failure_screenshots: bool
    data_dir: Path
    artifact_dir: Path
    minimum_amount: Decimal
    maximum_amount: Decimal
    game_username_pattern: str

    @classmethod
    def load(cls) -> "Settings":
        env_path = Path(os.getenv("BOT_ENV_FILE", BOT_ROOT / ".env")).expanduser()
        load_dotenv(env_path, override=False)

        admin_values = _required("TELEGRAM_ADMIN_IDS").split(",")
        try:
            admin_ids = frozenset(
                int(value.strip()) for value in admin_values if value.strip()
            )
        except ValueError as exc:
            raise ConfigError(
                "TELEGRAM_ADMIN_IDS must be comma-separated numeric IDs"
            ) from exc
        if not admin_ids or any(admin_id <= 0 for admin_id in admin_ids):
            raise ConfigError(
                "TELEGRAM_ADMIN_IDS must contain at least one positive numeric user ID"
            )

        base_url = _url("GAME_BASE_URL")
        minimum = _decimal("MIN_TRANSACTION_AMOUNT", "0.01")
        maximum = _decimal("MAX_TRANSACTION_AMOUNT", "100000.00")
        if minimum <= 0 or maximum < minimum:
            raise ConfigError("Transaction amount limits are invalid")

        username_pattern = _optional(
            "GAME_USERNAME_PATTERN", r"[A-Za-z][A-Za-z0-9_]{2,19}"
        )
        try:
            re.compile(username_pattern)
        except re.error as exc:
            raise ConfigError(
                "GAME_USERNAME_PATTERN is not a valid regular expression"
            ) from exc

        settings = cls(
            telegram_bot_token=_required("TELEGRAM_BOT_TOKEN"),
            telegram_admin_ids=admin_ids,
            game_base_url=base_url,
            game_login_url=_url("GAME_LOGIN_URL", base_url),
            game_admin_username=_required("GAME_ADMIN_USERNAME"),
            game_admin_password=_required("GAME_ADMIN_PASSWORD"),
            selectors=GameSelectors.from_env(),
            browser_headless=_boolean("BROWSER_HEADLESS", True),
            browser_slow_mo_ms=_integer("BROWSER_SLOW_MO_MS", 0),
            browser_timeout_ms=_integer("BROWSER_TIMEOUT_MS", 30_000, minimum=1_000),
            save_failure_screenshots=_boolean("SAVE_FAILURE_SCREENSHOTS", False),
            data_dir=_path("DOODY_DATA_DIR", BOT_ROOT / "data"),
            artifact_dir=_path("BOT_ARTIFACT_DIR", BOT_ROOT / "artifacts"),
            minimum_amount=minimum,
            maximum_amount=maximum,
            game_username_pattern=username_pattern,
        )
        return settings
