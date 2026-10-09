from __future__ import annotations

import asyncio
import logging
from collections.abc import Awaitable, Callable
from datetime import UTC, datetime
from pathlib import Path

from playwright.async_api import (
    Browser,
    BrowserContext,
    Error as PlaywrightError,
    Page,
    Playwright,
    TimeoutError as PlaywrightTimeoutError,
    async_playwright,
)

from .config import Settings


logger = logging.getLogger(__name__)


class AutomationError(RuntimeError):
    """The game website did not confirm an automated action."""


class GameAutomation:
    """Serializes privileged browser actions through isolated browser contexts."""

    def __init__(self, settings: Settings):
        self.settings = settings
        self._playwright: Playwright | None = None
        self._browser: Browser | None = None
        self._operation_lock = asyncio.Lock()

    @property
    def ready(self) -> bool:
        return self._browser is not None and self._browser.is_connected()

    async def start(self) -> None:
        if self.ready:
            return
        self.settings.artifact_dir.mkdir(parents=True, exist_ok=True, mode=0o700)
        self._playwright = await async_playwright().start()
        try:
            self._browser = await self._playwright.chromium.launch(
                headless=self.settings.browser_headless,
                slow_mo=self.settings.browser_slow_mo_ms,
            )
        except Exception:
            await self._playwright.stop()
            self._playwright = None
            raise
        logger.info("Playwright Chromium started")

    async def stop(self) -> None:
        if self._browser is not None:
            await self._browser.close()
            self._browser = None
        if self._playwright is not None:
            await self._playwright.stop()
            self._playwright = None
        logger.info("Playwright Chromium stopped")

    async def create_account(self, game_username: str, game_password: str) -> None:
        selectors = self.settings.selectors

        async def action(page: Page) -> None:
            await self._open_cash_register(page)
            await self._click(page, selectors.create_user)
            await self._fill(page, selectors.create_username, game_username)
            await self._fill(page, selectors.create_password, game_password)
            if selectors.create_confirm_password:
                await self._fill(page, selectors.create_confirm_password, game_password)
            await self._click(page, selectors.create_submit)
            await self._confirm(page, selectors.create_success)

        await self._perform("create-account", action)

    async def deposit(self, game_username: str, amount: str) -> None:
        selectors = self.settings.selectors

        async def action(page: Page) -> None:
            await self._open_cash_register(page)
            await self._click(page, selectors.deposit)
            await self._fill(page, selectors.deposit_username, game_username)
            await self._fill(page, selectors.deposit_amount, amount)
            await self._click(page, selectors.deposit_submit)
            await self._confirm(page, selectors.deposit_success)

        await self._perform("deposit", action)

    async def withdraw(self, game_username: str, amount: str) -> None:
        selectors = self.settings.selectors

        async def action(page: Page) -> None:
            await self._open_cash_register(page)
            await self._click(page, selectors.withdraw)
            await self._fill(page, selectors.withdraw_username, game_username)
            await self._fill(page, selectors.withdraw_amount, amount)
            await self._click(page, selectors.withdraw_submit)
            await self._confirm(page, selectors.withdraw_success)

        await self._perform("withdraw", action)

    async def change_password(self, game_username: str, new_password: str) -> None:
        selectors = self.settings.selectors

        async def action(page: Page) -> None:
            await self._open_cash_register(page)
            await self._click(page, selectors.change_password)
            await self._fill(page, selectors.change_password_username, game_username)
            await self._fill(page, selectors.change_password_new, new_password)
            if selectors.change_password_confirm:
                await self._fill(page, selectors.change_password_confirm, new_password)
            await self._click(page, selectors.change_password_submit)
            await self._confirm(page, selectors.change_password_success)

        await self._perform("change-password", action)

    async def _perform(
        self, operation: str, action: Callable[[Page], Awaitable[None]]
    ) -> None:
        async with self._operation_lock:
            if not self.ready or self._browser is None:
                raise AutomationError("The browser service is not ready.")

            context: BrowserContext | None = None
            page: Page | None = None
            try:
                context = await self._browser.new_context(
                    ignore_https_errors=False,
                    viewport={"width": 1440, "height": 1000},
                )
                page = await context.new_page()
                page.set_default_timeout(self.settings.browser_timeout_ms)
                page.set_default_navigation_timeout(self.settings.browser_timeout_ms)
                await self._login(page)
                await action(page)
            except (PlaywrightTimeoutError, PlaywrightError, OSError) as exc:
                reference = datetime.now(UTC).strftime("%Y%m%dT%H%M%S%fZ")
                if page is not None and self.settings.save_failure_screenshots:
                    await self._save_failure_screenshot(page, operation, reference)
                logger.warning(
                    "Browser operation failed operation=%s reference=%s error_type=%s",
                    operation,
                    reference,
                    type(exc).__name__,
                )
                raise AutomationError(
                    f"The game website did not confirm the action. Reference: {reference}"
                ) from exc
            finally:
                if context is not None:
                    await context.close()

    async def _login(self, page: Page) -> None:
        selectors = self.settings.selectors
        await page.goto(self.settings.game_login_url, wait_until="domcontentloaded")
        await self._fill(
            page, selectors.login_username, self.settings.game_admin_username
        )
        await self._fill(
            page, selectors.login_password, self.settings.game_admin_password
        )
        await self._click(page, selectors.login_submit)
        await self._confirm(page, selectors.login_success)

    async def _open_cash_register(self, page: Page) -> None:
        await self._click(page, self.settings.selectors.cash_register)

    async def _click(self, page: Page, selector: str) -> None:
        await page.locator(selector).click()

    async def _fill(self, page: Page, selector: str, value: str) -> None:
        await page.locator(selector).fill(value)

    async def _confirm(self, page: Page, selector: str) -> None:
        await page.locator(selector).wait_for(state="visible")

    async def _save_failure_screenshot(
        self, page: Page, operation: str, reference: str
    ) -> None:
        path: Path = self.settings.artifact_dir / f"{operation}-{reference}.png"
        try:
            await page.screenshot(path=path, full_page=True)
            path.chmod(0o600)
        except Exception as exc:
            logger.warning(
                "Could not save failure screenshot reference=%s error_type=%s",
                reference,
                type(exc).__name__,
            )
