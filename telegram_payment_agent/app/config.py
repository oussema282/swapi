from __future__ import annotations

import os
import re
from dataclasses import dataclass
from decimal import Decimal, InvalidOperation
from pathlib import Path
from urllib.parse import urlparse

from dotenv import load_dotenv

BASE_DIR = Path(__file__).resolve().parent.parent
load_dotenv(BASE_DIR / ".env", override=False)

_TRUE = {"1", "true", "yes", "on"}
_FALSE = {"0", "false", "no", "off"}


def env_bool(name: str, default: bool) -> bool:
    raw = os.getenv(name)
    if raw is None or raw.strip() == "":
        return default
    value = raw.strip().lower()
    if value in _TRUE:
        return True
    if value in _FALSE:
        return False
    raise ValueError(f"{name} must be one of true/false, 1/0, yes/no, or on/off")


def env_int(name: str, default: int) -> int:
    raw = os.getenv(name)
    if raw is None or not raw.strip():
        return default
    try:
        return int(raw.strip())
    except ValueError as exc:
        raise ValueError(f"{name} must be an integer") from exc


def env_decimal(name: str, default: str) -> Decimal:
    raw = os.getenv(name, default).strip()
    try:
        value = Decimal(raw)
    except InvalidOperation as exc:
        raise ValueError(f"{name} must be a decimal amount") from exc
    if not value.is_finite():
        raise ValueError(f"{name} must be finite")
    return value


def env_path(name: str, default: str) -> Path:
    path = Path(os.getenv(name, default)).expanduser()
    return path if path.is_absolute() else (BASE_DIR / path).resolve()


def _split_values(name: str, default: str = "") -> tuple[str, ...]:
    return tuple(part.strip() for part in os.getenv(name, default).split(",") if part.strip())


@dataclass(frozen=True)
class Settings:
    bot_token: str
    fernet_key: str
    admin_chat_ids: tuple[int, ...]
    d17_destination: str
    edinar_destination: str
    bank_destination: str

    admin_base_url: str
    admin_username: str
    admin_password: str
    admin_login_url: str
    admin_create_user_url: str
    admin_users_list_url: str
    admin_timeout_ms: int
    admin_login_user_selector: str
    admin_login_password_selector: str
    admin_login_submit_selector: str
    admin_create_username_selector: str
    admin_create_password_selector: str
    admin_create_phone_selector: str
    admin_create_submit_selector: str
    admin_create_success_text: str
    admin_user_search_selector: str
    admin_user_link_selector: str
    admin_balance_selector: str
    admin_topup_amount_selector: str
    admin_topup_submit_selector: str

    verifier_base_url: str
    verifier_login_url: str
    verifier_form_url: str
    verifier_username: str
    verifier_password: str
    verifier_timeout_ms: int
    verifier_login_user_selector: str
    verifier_login_password_selector: str
    verifier_login_submit_selector: str
    verifier_logged_in_selector: str
    verifier_file_input_selector: str
    verifier_phone_input_selector: str
    verifier_reference_input_selector: str
    verifier_submit_selector: str
    verifier_status_selector: str
    verifier_amount_selector: str
    verifier_result_phone_selector: str
    verifier_result_reference_selector: str
    verifier_transaction_id_selector: str
    verifier_success_texts: tuple[str, ...]
    verifier_failure_texts: tuple[str, ...]

    dry_run: bool
    min_deposit: Decimal
    max_deposit: Decimal
    max_upload_mb: int
    db_path: Path
    upload_dir: Path
    headless: bool

    @classmethod
    def from_env(cls) -> Settings:
        admin_base = os.getenv("ADMIN_BASE_URL", "https://mycard.doblobet.com").strip().rstrip("/")
        verifier_base = os.getenv("VERIFIER_BASE_URL", "").strip().rstrip("/")
        admin_login = os.getenv("ADMIN_LOGIN_URL", f"{admin_base}/login").strip()
        admin_create = os.getenv("ADMIN_CREATE_USER_URL", f"{admin_base}/user-create").strip()
        admin_users = os.getenv("ADMIN_USERS_LIST_URL", f"{admin_base}/users-list").strip()

        chat_ids: list[int] = []
        for value in _split_values("ADMIN_CHAT_IDS"):
            try:
                chat_ids.append(int(value))
            except ValueError as exc:
                raise ValueError("ADMIN_CHAT_IDS must be comma-separated Telegram integer IDs") from exc

        return cls(
            bot_token=os.getenv("BOT_TOKEN", "").strip(),
            fernet_key=os.getenv("FERNET_KEY", "").strip(),
            admin_chat_ids=tuple(chat_ids),
            d17_destination=os.getenv("D17_DESTINATION", "").strip(),
            edinar_destination=os.getenv("EDINAR_DESTINATION", "").strip(),
            bank_destination=os.getenv("BANK_DESTINATION", "").strip(),
            admin_base_url=admin_base,
            admin_username=os.getenv("ADMIN_USERNAME", "").strip(),
            admin_password=os.getenv("ADMIN_PASSWORD", ""),
            admin_login_url=admin_login,
            admin_create_user_url=admin_create,
            admin_users_list_url=admin_users,
            admin_timeout_ms=env_int("ADMIN_TIMEOUT_MS", 15000),
            admin_login_user_selector=os.getenv("ADMIN_LOGIN_USER_SELECTOR", 'input[type="text"]').strip(),
            admin_login_password_selector=os.getenv("ADMIN_LOGIN_PASSWORD_SELECTOR", 'input[type="password"]').strip(),
            admin_login_submit_selector=os.getenv(
                "ADMIN_LOGIN_SUBMIT_SELECTOR", "#root > div > section > div.auth__bottom > div"
            ).strip(),
            admin_create_username_selector=os.getenv(
                "ADMIN_CREATE_USERNAME_SELECTOR", 'input[placeholder="Username"]'
            ).strip(),
            admin_create_password_selector=os.getenv(
                "ADMIN_CREATE_PASSWORD_SELECTOR", 'input[placeholder="Password"]'
            ).strip(),
            admin_create_phone_selector=os.getenv("ADMIN_CREATE_PHONE_SELECTOR", "").strip(),
            admin_create_submit_selector=os.getenv("ADMIN_CREATE_SUBMIT_SELECTOR", ".create-user__button").strip(),
            admin_create_success_text=os.getenv("ADMIN_CREATE_SUCCESS_TEXT", "Create success").strip(),
            admin_user_search_selector=os.getenv("ADMIN_USER_SEARCH_SELECTOR", 'input[type="text"]').strip(),
            admin_user_link_selector=os.getenv(
                "ADMIN_USER_LINK_SELECTOR",
                "#root > div > div.users-list > div.users-list__list > a",
            ).strip(),
            admin_balance_selector=os.getenv(
                "ADMIN_BALANCE_SELECTOR",
                "#root > div > div.user-edit > div.user-edit__info > div:nth-child(3) > div.user-edit__value",
            ).strip(),
            admin_topup_amount_selector=os.getenv(
                "ADMIN_TOPUP_AMOUNT_SELECTOR",
                "#root > div > div.user-edit > div.user-edit__payment-block > div:nth-child(1) > input",
            ).strip(),
            admin_topup_submit_selector=os.getenv(
                "ADMIN_TOPUP_SUBMIT_SELECTOR",
                "#root > div > div.user-edit > div.user-edit__payment-block > div.user-edit__payment-button",
            ).strip(),
            verifier_base_url=verifier_base,
            verifier_login_url=os.getenv("VERIFIER_LOGIN_URL", "").strip() or verifier_base,
            verifier_form_url=os.getenv("VERIFIER_FORM_URL", "").strip() or verifier_base,
            verifier_username=os.getenv("VERIFIER_USERNAME", "").strip(),
            verifier_password=os.getenv("VERIFIER_PASSWORD", ""),
            verifier_timeout_ms=env_int("VERIFIER_TIMEOUT_MS", 30000),
            verifier_login_user_selector=os.getenv("VERIFIER_LOGIN_USER_SELECTOR", "").strip(),
            verifier_login_password_selector=os.getenv("VERIFIER_LOGIN_PASSWORD_SELECTOR", "").strip(),
            verifier_login_submit_selector=os.getenv("VERIFIER_LOGIN_SUBMIT_SELECTOR", "").strip(),
            verifier_logged_in_selector=os.getenv("VERIFIER_LOGGED_IN_SELECTOR", "").strip(),
            verifier_file_input_selector=os.getenv("VERIFIER_FILE_INPUT_SELECTOR", "").strip(),
            verifier_phone_input_selector=os.getenv("VERIFIER_PHONE_INPUT_SELECTOR", "").strip(),
            verifier_reference_input_selector=os.getenv("VERIFIER_REFERENCE_INPUT_SELECTOR", "").strip(),
            verifier_submit_selector=os.getenv("VERIFIER_SUBMIT_SELECTOR", "").strip(),
            verifier_status_selector=os.getenv("VERIFIER_STATUS_SELECTOR", "").strip(),
            verifier_amount_selector=os.getenv("VERIFIER_AMOUNT_SELECTOR", "").strip(),
            verifier_result_phone_selector=os.getenv("VERIFIER_RESULT_PHONE_SELECTOR", "").strip(),
            verifier_result_reference_selector=os.getenv("VERIFIER_RESULT_REFERENCE_SELECTOR", "").strip(),
            verifier_transaction_id_selector=os.getenv("VERIFIER_TRANSACTION_ID_SELECTOR", "").strip(),
            verifier_success_texts=tuple(x.upper() for x in _split_values("VERIFIER_SUCCESS_TEXTS", "SUCCESS,APPROVED,VERIFIED")),
            verifier_failure_texts=tuple(
                x.upper()
                for x in _split_values(
                    "VERIFIER_FAILURE_TEXTS",
                    "FAILED,FAIL,REJECTED,DECLINED,INVALID,NOT FOUND,NOT SUCCESSFUL,NOT APPROVED,UNSUCCESSFUL,NOT VERIFIED",
                )
            ),
            dry_run=env_bool("DRY_RUN", False),
            min_deposit=env_decimal("MIN_DEPOSIT", "1"),
            max_deposit=env_decimal("MAX_DEPOSIT", "1"),
            max_upload_mb=env_int("MAX_UPLOAD_MB", 10),
            db_path=env_path("DB_PATH", "./data/agent.db"),
            upload_dir=env_path("UPLOAD_DIR", "./data/uploads"),
            headless=env_bool("HEADLESS", True),
        )

    def validate(self, *, require_verifier: bool = True) -> list[str]:
        errors: list[str] = []
        for key, value in (
            ("BOT_TOKEN", self.bot_token),
            ("FERNET_KEY", self.fernet_key),
            ("ADMIN_USERNAME", self.admin_username),
            ("ADMIN_PASSWORD", self.admin_password),
            ("ADMIN_BASE_URL", self.admin_base_url),
            ("ADMIN_LOGIN_URL", self.admin_login_url),
            ("ADMIN_CREATE_USER_URL", self.admin_create_user_url),
            ("ADMIN_USERS_LIST_URL", self.admin_users_list_url),
            ("ADMIN_BALANCE_SELECTOR", self.admin_balance_selector),
            ("ADMIN_TOPUP_AMOUNT_SELECTOR", self.admin_topup_amount_selector),
            ("ADMIN_TOPUP_SUBMIT_SELECTOR", self.admin_topup_submit_selector),
        ):
            if not value:
                errors.append(f"Missing {key}")

        if self.bot_token and not re.fullmatch(r"\d{5,12}:[A-Za-z0-9_-]{20,}", self.bot_token):
            errors.append("BOT_TOKEN does not have the expected Telegram token format")
        if not any((self.d17_destination, self.edinar_destination, self.bank_destination)):
            errors.append("Configure at least one payment destination")
        admin_origin = urlparse(self.admin_base_url)
        if admin_origin.scheme != "https" or not admin_origin.netloc:
            errors.append("ADMIN_BASE_URL must use HTTPS")
        for key, value in (
            ("ADMIN_LOGIN_URL", self.admin_login_url),
            ("ADMIN_CREATE_USER_URL", self.admin_create_user_url),
            ("ADMIN_USERS_LIST_URL", self.admin_users_list_url),
        ):
            parsed = urlparse(value)
            if parsed.scheme != "https" or parsed.netloc != admin_origin.netloc:
                errors.append(f"{key} must use HTTPS on the same host as ADMIN_BASE_URL")
        if self.admin_timeout_ms <= 0 or self.verifier_timeout_ms <= 0:
            errors.append("Browser timeouts must be positive")
        if not self.admin_login_user_selector or not self.admin_login_password_selector or not self.admin_login_submit_selector:
            errors.append("Admin login selectors are incomplete")
        if not all((self.admin_create_username_selector, self.admin_create_password_selector,
                    self.admin_create_submit_selector, self.admin_create_success_text)):
            errors.append("Admin account-creation selectors/success text are incomplete")
        if not self.admin_user_search_selector or not self.admin_user_link_selector:
            errors.append("Admin user-search selectors are incomplete")
        if not self.min_deposit.is_finite() or not self.max_deposit.is_finite():
            errors.append("Deposit limits must be finite")
        elif self.min_deposit <= 0 or self.max_deposit < self.min_deposit:
            errors.append("Deposit limits must be positive and MAX_DEPOSIT must be >= MIN_DEPOSIT")
        if self.max_upload_mb <= 0:
            errors.append("MAX_UPLOAD_MB must be positive")
        if not self.verifier_success_texts:
            errors.append("VERIFIER_SUCCESS_TEXTS must contain at least one exact success value")
        if set(self.verifier_success_texts) & set(self.verifier_failure_texts):
            errors.append("Verifier success and failure status lists must not overlap")

        if require_verifier:
            verifier_required = {
                "VERIFIER_BASE_URL": self.verifier_base_url,
                "VERIFIER_FORM_URL": self.verifier_form_url,
                "VERIFIER_FILE_INPUT_SELECTOR": self.verifier_file_input_selector,
                "VERIFIER_PHONE_INPUT_SELECTOR": self.verifier_phone_input_selector,
                "VERIFIER_REFERENCE_INPUT_SELECTOR": self.verifier_reference_input_selector,
                "VERIFIER_SUBMIT_SELECTOR": self.verifier_submit_selector,
                "VERIFIER_STATUS_SELECTOR": self.verifier_status_selector,
                "VERIFIER_AMOUNT_SELECTOR": self.verifier_amount_selector,
                "VERIFIER_RESULT_PHONE_SELECTOR": self.verifier_result_phone_selector,
                "VERIFIER_RESULT_REFERENCE_SELECTOR": self.verifier_result_reference_selector,
            }
            errors.extend(f"Missing {key}" for key, value in verifier_required.items() if not value)
            for key, value in (
                ("VERIFIER_BASE_URL", self.verifier_base_url),
                ("VERIFIER_LOGIN_URL", self.verifier_login_url),
                ("VERIFIER_FORM_URL", self.verifier_form_url),
            ):
                if value and urlparse(value).scheme != "https":
                    errors.append(f"{key} must use HTTPS")
            login_parts = (
                self.verifier_login_user_selector,
                self.verifier_login_password_selector,
                self.verifier_login_submit_selector,
            )
            if any(login_parts) and not all(login_parts):
                errors.append("Verifier login selectors must be all configured or all empty")
            if bool(self.verifier_username) != bool(self.verifier_password):
                errors.append("Set both VERIFIER_USERNAME and VERIFIER_PASSWORD, or neither")
            if self.verifier_username and not all(login_parts):
                errors.append("Verifier credentials require all three verifier login selectors")
        return errors


settings = Settings.from_env()


def ensure_dirs() -> None:
    settings.db_path.parent.mkdir(parents=True, exist_ok=True)
    settings.upload_dir.mkdir(parents=True, exist_ok=True)
