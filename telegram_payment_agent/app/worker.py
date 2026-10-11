from __future__ import annotations

import asyncio
import logging
import time
from pathlib import Path

from playwright.async_api import async_playwright
from telegram import Bot

from .config import Settings, settings
from .db import Database
from .security import SecretBox
from .sites import (
    AdminPanelSite,
    ManualReviewRequired,
    PaymentVerificationSite,
    SiteAutomationError,
)
from .utils import (
    amount_equal,
    json_loads,
    normalize_phone,
    normalize_reference,
    parse_amount,
)

log = logging.getLogger("telegram_payment_agent.worker")


async def notify_admin(bot: Bot, config: Settings, text: str) -> None:
    for chat_id in config.admin_chat_ids:
        try:
            await bot.send_message(chat_id=chat_id, text=text)
        except Exception:
            log.exception("Could not send admin notification")


async def notify_user(bot: Bot, telegram_id: int, text: str) -> None:
    await bot.send_message(chat_id=telegram_id, text=text)


def cleanup_upload(path: str | None) -> None:
    if not path:
        return
    try:
        Path(path).unlink(missing_ok=True)
    except OSError:
        log.exception("Could not delete a processed upload")


def cleanup_expired_uploads(upload_dir: Path, retention_days: int = 7) -> None:
    """Bound sensitive screenshot retention; keep manual-review evidence briefly."""
    cutoff = time.time() - retention_days * 24 * 60 * 60
    try:
        for path in upload_dir.iterdir():
            if path.is_file() and path.stat().st_mtime < cutoff:
                path.unlink(missing_ok=True)
    except OSError:
        log.exception("Could not clean expired payment uploads")


async def process_create_account(
    job: dict,
    admin_site: AdminPanelSite,
    bot: Bot,
    db: Database,
    secret_box: SecretBox,
    config: Settings,
) -> None:
    payload = json_loads(job.get("payload_json"), {}) or {}
    request_id = int(payload["account_request_id"])
    request = await db.get_account_request(request_id)
    if not request:
        raise SiteAutomationError(f"Account request {request_id} was not found")

    await db.update_account_status(request_id, "RUNNING")
    password = secret_box.decrypt(request["encrypted_password"])
    await admin_site.create_account(
        website_username=request["website_username"],
        phone=request["phone"],
        password=password,
    )
    # Commit the remote side effect before attempting Telegram notifications.
    await db.complete_account_request(request_id)
    try:
        await notify_user(
            bot,
            int(request["telegram_id"]),
            f"Your website account is ready.\nUsername: {request['website_username']}\nPassword: {password}",
        )
    except Exception:
        log.exception("Account was created, but the user notification could not be delivered")
        await notify_admin(bot, config, f"Account request #{request_id} was created; Telegram delivery failed. Contact the user securely.")
    else:
        await notify_admin(bot, config, f"Account request #{request_id} completed.")


async def process_deposit(
    job: dict,
    verifier: PaymentVerificationSite,
    admin_site: AdminPanelSite,
    bot: Bot,
    db: Database,
    config: Settings,
) -> None:
    payload = json_loads(job.get("payload_json"), {}) or {}
    deposit_id = int(payload["deposit_id"])
    deposit = await db.get_deposit(deposit_id)
    if not deposit:
        raise SiteAutomationError(f"Deposit {deposit_id} was not found")

    amount = parse_amount(deposit["amount"])
    if amount is None or amount < config.min_deposit or amount > config.max_deposit:
        raise ManualReviewRequired("The stored amount is invalid or outside the configured limits")
    if await db.reference_processed(deposit["method"], deposit["reference_number"], current_id=deposit_id):
        raise ManualReviewRequired("This payment reference is already associated with another request")

    await db.update_deposit_status(deposit_id, "VERIFYING")
    result = await verifier.verify(
        screenshot_path=deposit["screenshot_path"],
        sender_phone=deposit["sender_phone"],
        reference_number=deposit["reference_number"],
    )
    await db.update_deposit_status(
        deposit_id,
        "VERIFYING",
        verification_status=result.raw_status,
        verification_amount=str(result.amount) if result.amount is not None else None,
        verification_phone=result.phone,
        verification_reference=result.reference,
        verifier_transaction_id=result.transaction_id,
    )

    if result.status == "FAILED":
        await db.update_deposit_status(
            deposit_id,
            "VERIFICATION_FAILED",
            error="Verifier returned a configured failure status",
        )
        try:
            await notify_user(bot, int(deposit["telegram_id"]), f"Payment #{deposit_id} was not verified; no credit was made.")
        except Exception:
            log.exception("Could not notify user about a failed verification")
        cleanup_upload(deposit["screenshot_path"])
        return
    if result.status != "SUCCESS":
        raise ManualReviewRequired("Verifier status was not an exact configured success value")

    expected_phone = normalize_phone(deposit["sender_phone"])
    expected_reference = normalize_reference(deposit["reference_number"])
    if result.amount is None or not amount_equal(result.amount, amount):
        raise ManualReviewRequired("Verifier amount was missing or did not exactly match")
    if not result.phone or normalize_phone(result.phone) != expected_phone:
        raise ManualReviewRequired("Verifier phone was missing or did not exactly match")
    if not result.reference or normalize_reference(result.reference) != expected_reference:
        raise ManualReviewRequired("Verifier reference was missing or did not exactly match")

    await db.update_deposit_status(deposit_id, "VERIFIED_SUCCESS")
    if config.dry_run:
        await db.update_deposit_status(deposit_id, "DRY_RUN_SUCCESS")
        try:
            await notify_user(
                bot,
                int(deposit["telegram_id"]),
                f"Payment #{deposit_id} passed verification. DRY_RUN is enabled, so no balance was changed.",
            )
        except Exception:
            log.exception("Could not notify user about dry-run verification")
        await notify_admin(bot, config, f"Dry-run payment #{deposit_id} passed verification; no credit was made.")
        cleanup_upload(deposit["screenshot_path"])
        return

    if not deposit.get("website_username"):
        raise ManualReviewRequired("User has no confirmed website account")

    await db.update_deposit_status(deposit_id, "DEPOSITING")
    # The admin method must confirm the exact balance delta. If it times out after
    # submission, mark manual review and never retry automatically.
    confirmation = await admin_site.deposit(
        website_username=deposit["website_username"],
        amount=amount,
        method=deposit["method"],
        sender_phone=deposit["sender_phone"],
        reference_number=deposit["reference_number"],
    )
    await db.update_deposit_status(
        deposit_id,
        "DEPOSITED",
        admin_confirmation=confirmation,
    )

    try:
        await notify_user(
            bot,
            int(deposit["telegram_id"]),
            f"Deposit #{deposit_id} completed. Amount: {amount:.3f} TND.",
        )
    except Exception:
        log.exception("Deposit was confirmed, but the user notification could not be delivered")
        await notify_admin(bot, config, f"Deposit #{deposit_id} was confirmed; Telegram delivery failed.")
    else:
        await notify_admin(bot, config, f"Deposit #{deposit_id} was confirmed by the admin balance change.")
    cleanup_upload(deposit["screenshot_path"])


async def process_job(
    job: dict,
    verifier: PaymentVerificationSite,
    admin_site: AdminPanelSite,
    bot: Bot,
    db: Database,
    secret_box: SecretBox,
    config: Settings,
) -> None:
    if job["type"] == "CREATE_ACCOUNT":
        await process_create_account(job, admin_site, bot, db, secret_box, config)
    elif job["type"] == "VERIFY_DEPOSIT":
        await process_deposit(job, verifier, admin_site, bot, db, config)
    else:
        raise SiteAutomationError(f"Unknown job type: {job['type']}")


async def worker_loop(bot: Bot, config: Settings = settings) -> None:
    db = Database(config.db_path)
    await db.init()
    secret_box = SecretBox(config.fernet_key)
    cleanup_expired_uploads(config.upload_dir)

    # This application runs exactly one worker in one process. Any RUNNING job
    # present at worker startup belongs to a prior process and must be reconciled.
    for stale in await db.recover_stale_jobs(stale_after_seconds=0):
        log.error("Recovered stale job #%s as manual review; external state must be reconciled", stale["id"])
        await notify_admin(bot, config, f"Job #{stale['id']} was interrupted and moved to manual review. Reconcile the admin site before retrying.")

    async with async_playwright() as playwright:
        browser = await playwright.chromium.launch(
            headless=config.headless,
            args=["--disable-dev-shm-usage"],
        )
        verifier = PaymentVerificationSite(browser, config)
        admin_site = AdminPanelSite(browser, config)
        try:
            next_upload_cleanup = time.monotonic() + 3600
            while True:
                if time.monotonic() >= next_upload_cleanup:
                    cleanup_expired_uploads(config.upload_dir)
                    next_upload_cleanup = time.monotonic() + 3600
                job = await db.claim_job()
                if job is None:
                    await asyncio.sleep(0.5)
                    continue
                log.info("Processing job #%s (%s)", job["id"], job["type"])
                try:
                    await process_job(job, verifier, admin_site, bot, db, secret_box, config)
                    await db.finish_job(job["id"], "DONE", result={"type": job["type"]})
                except ManualReviewRequired as exc:
                    log.warning("Job #%s requires manual review: %s", job["id"], exc)
                    payload = json_loads(job.get("payload_json"), {}) or {}
                    if job["type"] == "VERIFY_DEPOSIT" and payload.get("deposit_id"):
                        try:
                            await db.update_deposit_status(int(payload["deposit_id"]), "MANUAL_REVIEW", error=str(exc))
                        except RuntimeError:
                            # Do not downgrade a completed or otherwise terminal deposit.
                            log.exception("Could not move deposit to manual review")
                    elif job["type"] == "CREATE_ACCOUNT" and payload.get("account_request_id"):
                        await db.update_account_status(int(payload["account_request_id"]), "MANUAL_REVIEW", str(exc))
                    await db.finish_job(job["id"], "MANUAL_REVIEW", error=str(exc))
                    await notify_admin(bot, config, f"Job #{job['id']} requires manual review. Check the site before retrying.")
                except Exception as exc:
                    log.exception("Job #%s failed", job["id"])
                    payload = json_loads(job.get("payload_json"), {}) or {}
                    if job["type"] == "VERIFY_DEPOSIT" and payload.get("deposit_id"):
                        try:
                            await db.update_deposit_status(
                                int(payload["deposit_id"]),
                                "MANUAL_REVIEW",
                                error=f"Unexpected worker error: {type(exc).__name__}",
                            )
                        except RuntimeError:
                            log.exception("Could not move deposit to manual review")
                    elif job["type"] == "CREATE_ACCOUNT" and payload.get("account_request_id"):
                        await db.update_account_status(
                            int(payload["account_request_id"]),
                            "MANUAL_REVIEW",
                            f"Unexpected worker error: {type(exc).__name__}",
                        )
                    await db.finish_job(job["id"], "ERROR", error=type(exc).__name__)
                    await notify_admin(bot, config, f"Job #{job['id']} encountered an error and was not retried. Check the site state first.")
        finally:
            await verifier.close()
            await admin_site.close()
            await browser.close()
