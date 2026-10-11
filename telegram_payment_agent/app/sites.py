from __future__ import annotations

import asyncio
import re
import time
from dataclasses import dataclass
from decimal import Decimal
from pathlib import Path

from playwright.async_api import Browser, BrowserContext, Page
from playwright.async_api import Error as PlaywrightError
from playwright.async_api import TimeoutError as PlaywrightTimeoutError

from .config import Settings, settings
from .utils import classify_status, normalize_phone, normalize_reference, parse_amount


class SiteAutomationError(RuntimeError):
    pass


class ManualReviewRequired(SiteAutomationError):
    """The remote action or result is ambiguous; do not retry automatically."""


@dataclass(frozen=True)
class VerificationResult:
    status: str
    amount: Decimal | None
    phone: str | None
    reference: str | None
    transaction_id: str | None
    raw_status: str


class BrowserSite:
    def __init__(self, browser: Browser, timeout_ms: int):
        self.browser = browser
        self.timeout_ms = timeout_ms
        self.context: BrowserContext | None = None

    async def _context(self) -> BrowserContext:
        if self.context is None:
            self.context = await self.browser.new_context(accept_downloads=False)
        return self.context

    async def new_page(self) -> Page:
        page = await (await self._context()).new_page()
        page.set_default_timeout(self.timeout_ms)
        page.set_default_navigation_timeout(self.timeout_ms)
        return page

    async def close(self) -> None:
        if self.context is not None:
            await self.context.close()
            self.context = None

    @staticmethod
    async def fill(page: Page, selector: str, value: str, label: str) -> None:
        if not selector:
            raise SiteAutomationError(f"Missing selector configuration: {label}")
        await page.locator(selector).first.fill(value)

    @staticmethod
    async def click(page: Page, selector: str, label: str) -> None:
        if not selector:
            raise SiteAutomationError(f"Missing selector configuration: {label}")
        await page.locator(selector).first.click()

    @staticmethod
    async def read_text(page: Page, selector: str, label: str, *, required: bool = True) -> str | None:
        if not selector:
            if required:
                raise SiteAutomationError(f"Missing selector configuration: {label}")
            return None
        locator = page.locator(selector).first
        try:
            await locator.wait_for(state="visible")
            try:
                value = await locator.input_value()
            except PlaywrightError:
                value = await locator.inner_text()
            value = value.strip()
            if required and not value:
                raise SiteAutomationError(f"The {label} field is empty")
            return value
        except PlaywrightTimeoutError as exc:
            raise SiteAutomationError(f"The {label} element did not become visible") from exc


class PaymentVerificationSite(BrowserSite):
    """Upload the payment evidence and return fields read from the verifier result."""

    def __init__(self, browser: Browser, config: Settings = settings):
        super().__init__(browser, config.verifier_timeout_ms)
        self.config = config

    async def _login_if_needed(self, page: Page) -> None:
        cfg = self.config
        if not (cfg.verifier_login_user_selector and cfg.verifier_login_password_selector):
            return
        user = page.locator(cfg.verifier_login_user_selector).first
        password = page.locator(cfg.verifier_login_password_selector).first
        login_visible = await user.is_visible() and await password.is_visible()
        if not login_visible:
            if cfg.verifier_logged_in_selector:
                await page.locator(cfg.verifier_logged_in_selector).first.wait_for(state="visible")
            return
        if not cfg.verifier_username or not cfg.verifier_password or not cfg.verifier_login_submit_selector:
            raise SiteAutomationError("Verifier login is visible but credentials/selectors are incomplete")
        await user.fill(cfg.verifier_username)
        await password.fill(cfg.verifier_password)
        await self.click(page, cfg.verifier_login_submit_selector, "verifier login submit")
        if cfg.verifier_logged_in_selector:
            await page.locator(cfg.verifier_logged_in_selector).first.wait_for(state="visible")
        else:
            await password.wait_for(state="hidden")

    async def verify(self, screenshot_path: str, sender_phone: str, reference_number: str) -> VerificationResult:
        cfg = self.config
        path = Path(screenshot_path)
        if not path.is_file():
            raise SiteAutomationError("Payment screenshot is missing from local storage")
        page = await self.new_page()
        try:
            if cfg.verifier_login_user_selector and cfg.verifier_login_password_selector:
                await page.goto(cfg.verifier_login_url or cfg.verifier_base_url, wait_until="domcontentloaded")
                await self._login_if_needed(page)
            await page.goto(cfg.verifier_form_url, wait_until="domcontentloaded")
            file_input = page.locator(cfg.verifier_file_input_selector).first
            await file_input.set_input_files(str(path))
            await self.fill(page, cfg.verifier_phone_input_selector, sender_phone, "verifier phone")
            await self.fill(page, cfg.verifier_reference_input_selector, reference_number, "verifier reference")
            await self.click(page, cfg.verifier_submit_selector, "verifier submit")
            status_locator = page.locator(cfg.verifier_status_selector).first
            await status_locator.wait_for(state="visible")
            raw_status = (await self.read_text(page, cfg.verifier_status_selector, "verification status")) or ""
            status = classify_status(raw_status, cfg.verifier_success_texts, cfg.verifier_failure_texts)
            if status != "SUCCESS":
                # A rejection needs no optional result fields; an unknown response
                # stays unknown and can never enter the credit path.
                return VerificationResult(status, None, None, None, None, raw_status)

            amount_text = await self.read_text(page, cfg.verifier_amount_selector, "verification amount")
            phone_text = await self.read_text(page, cfg.verifier_result_phone_selector, "verification phone")
            reference_text = await self.read_text(page, cfg.verifier_result_reference_selector, "verification reference")
            transaction_id = await self.read_text(
                page,
                cfg.verifier_transaction_id_selector,
                "verifier transaction ID",
                required=False,
            )
            return VerificationResult(
                status=status,
                amount=parse_amount(amount_text),
                phone=normalize_phone(phone_text),
                reference=normalize_reference(reference_text),
                transaction_id=transaction_id,
                raw_status=raw_status,
            )
        except PlaywrightTimeoutError as exc:
            raise ManualReviewRequired("Verifier timed out; the payment result is uncertain") from exc
        finally:
            await page.close()


class AdminPanelSite(BrowserSite):
    """Admin automation using the saved, user-tested selectors from the supplied project."""

    def __init__(self, browser: Browser, config: Settings = settings):
        super().__init__(browser, config.admin_timeout_ms)
        self.config = config

    async def _open_authenticated(self, page: Page, target_url: str, target_selector: str) -> None:
        cfg = self.config
        await page.goto(target_url, wait_until="domcontentloaded")
        user_input = page.locator(cfg.admin_login_user_selector).first
        password_input = page.locator(cfg.admin_login_password_selector).first
        login_needed = await user_input.is_visible() and await password_input.is_visible()
        if login_needed:
            await self.fill(page, cfg.admin_login_user_selector, cfg.admin_username, "admin login username")
            await self.fill(page, cfg.admin_login_password_selector, cfg.admin_password, "admin login password")
            await self.click(page, cfg.admin_login_submit_selector, "admin login submit")
            try:
                await password_input.wait_for(state="hidden", timeout=cfg.admin_timeout_ms)
            except PlaywrightTimeoutError as exc:
                raise SiteAutomationError("Admin login did not reach an authenticated state") from exc
            await page.goto(target_url, wait_until="domcontentloaded")
        if not target_selector:
            raise SiteAutomationError("Authenticated target selector is not configured")
        await page.locator(target_selector).first.wait_for(state="visible")

    async def create_account(self, website_username: str, phone: str, password: str) -> None:
        cfg = self.config
        page = await self.new_page()
        try:
            await self._open_authenticated(page, cfg.admin_create_user_url, cfg.admin_create_username_selector)
            success = page.get_by_text(cfg.admin_create_success_text, exact=False).first
            # Reject a stale success banner already present before submitting.
            if await success.count() and await success.is_visible():
                raise ManualReviewRequired("A success banner was already present before account creation")
            await self.fill(page, cfg.admin_create_username_selector, website_username, "new account username")
            await self.fill(page, cfg.admin_create_password_selector, password, "new account password")
            if cfg.admin_create_phone_selector:
                await self.fill(page, cfg.admin_create_phone_selector, phone, "new account phone")
            await self.click(page, cfg.admin_create_submit_selector, "create account submit")
            try:
                await success.wait_for(state="visible", timeout=cfg.admin_timeout_ms)
            except PlaywrightTimeoutError as exc:
                raise ManualReviewRequired("Account submit was sent but no explicit success message appeared") from exc
            # Confirm the exact newly-created account in the real user list as well as
            # the create-success message; never trust the submit click alone.
            await self._open_authenticated(page, cfg.admin_users_list_url, cfg.admin_user_search_selector)
            await self.fill(page, cfg.admin_user_search_selector, website_username, "created account search")
            await self._find_exact_user(page, website_username)
        except PlaywrightTimeoutError as exc:
            raise ManualReviewRequired("Account creation timed out; verify the site before retrying") from exc
        finally:
            await page.close()

    async def _find_exact_user(self, page: Page, website_username: str) -> None:
        cfg = self.config
        links = page.locator(cfg.admin_user_link_selector)
        deadline = time.monotonic() + (cfg.admin_timeout_ms / 1000)
        matched = None
        while time.monotonic() < deadline:
            count = await links.count()
            matches = []
            for index in range(count):
                item = links.nth(index)
                text = " ".join((await item.inner_text()).split())
                # Generated usernames contain letters, digits, and underscores. Match a
                # complete token so one account cannot match a similar username.
                tokens = re.findall(r"[A-Za-z0-9_]+", text)
                if website_username.casefold() in {token.casefold() for token in tokens}:
                    matches.append(item)
            if len(matches) == 1:
                matched = matches[0]
                break
            if len(matches) > 1:
                raise ManualReviewRequired("More than one exact account match appeared in the admin list")
            await asyncio.sleep(0.25)
        if matched is None:
            raise ManualReviewRequired("The admin user list did not show one exact username match")
        await matched.click()
        await page.locator(self.config.admin_balance_selector).first.wait_for(state="visible")

    async def deposit(
        self,
        website_username: str,
        amount: Decimal,
        method: str,
        sender_phone: str,
        reference_number: str,
    ) -> str:
        del method, sender_phone, reference_number  # The admin site applies a balance top-up, not a payment form.
        cfg = self.config
        page = await self.new_page()
        submitted = False
        try:
            await self._open_authenticated(page, cfg.admin_users_list_url, cfg.admin_user_search_selector)
            await self.fill(page, cfg.admin_user_search_selector, website_username, "admin user search")
            await self._find_exact_user(page, website_username)
            balance_locator = page.locator(cfg.admin_balance_selector).first
            before = parse_amount(await balance_locator.inner_text())
            if before is None:
                raise ManualReviewRequired("Could not read the account balance before top-up")
            expected_after = before + amount
            await self.fill(page, cfg.admin_topup_amount_selector, f"{amount:.3f}", "admin top-up amount")
            await self.click(page, cfg.admin_topup_submit_selector, "admin top-up submit")
            submitted = True

            deadline = time.monotonic() + (cfg.admin_timeout_ms / 1000)
            while time.monotonic() < deadline:
                current = parse_amount(await balance_locator.inner_text())
                if current is not None and current == expected_after:
                    return f"verified_balance_delta:{before:.3f}->{current:.3f}"
                await asyncio.sleep(0.3)
            raise ManualReviewRequired(
                "Top-up was submitted but the exact expected balance increase was not observed; do not retry automatically"
            )
        except ManualReviewRequired:
            raise
        except Exception as exc:
            if submitted:
                raise ManualReviewRequired(
                    "Top-up may have been submitted; verify the admin account before any retry"
                ) from exc
            raise SiteAutomationError(f"Admin top-up could not be submitted: {type(exc).__name__}") from exc
        finally:
            await page.close()
