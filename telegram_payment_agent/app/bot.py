from __future__ import annotations

import asyncio
import logging
import re
from decimal import Decimal
from pathlib import Path
from uuid import uuid4

from telegram import InlineKeyboardButton, InlineKeyboardMarkup, Update
from telegram.constants import ChatAction
from telegram.ext import (
    Application,
    ApplicationBuilder,
    CallbackQueryHandler,
    CommandHandler,
    ContextTypes,
    ConversationHandler,
    MessageHandler,
    filters,
)

from .config import ensure_dirs, settings
from .db import ActiveRequestError, Database, DuplicateReferenceError
from .security import SecretBox
from .utils import (
    generate_password,
    generate_username,
    normalize_reference,
    parse_amount,
    valid_phone,
)

log = logging.getLogger("telegram_payment_agent.bot")

db = Database(settings.db_path)

CREATE_PHONE = 10
DEPOSIT_METHOD = 20
DEPOSIT_AMOUNT = 21
DEPOSIT_SCREENSHOT = 22
DEPOSIT_PHONE = 23
DEPOSIT_REFERENCE = 24

METHODS = {
    "d17": ("D17", settings.d17_destination),
    "edinar": ("e-Dinar", settings.edinar_destination),
    "bank": ("Bank transfer", settings.bank_destination),
}


def main_keyboard() -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(
        [
            [InlineKeyboardButton("Create account", callback_data="create_account")],
            [InlineKeyboardButton("Deposit", callback_data="deposit")],
            [InlineKeyboardButton("My account", callback_data="my_account")],
        ]
    )


def method_keyboard() -> InlineKeyboardMarkup:
    rows = [
        [InlineKeyboardButton(label, callback_data=f"method:{key}")]
        for key, (label, destination) in METHODS.items()
        if destination
    ]
    return InlineKeyboardMarkup(rows or [[InlineKeyboardButton("No payment methods configured", callback_data="noop")]])


def cancel_keyboard() -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup([[InlineKeyboardButton("Cancel", callback_data="cancel")]])


def _delete_context_upload(context: ContextTypes.DEFAULT_TYPE) -> None:
    path = context.user_data.get("deposit_screenshot")
    if path:
        try:
            Path(path).unlink(missing_ok=True)
        except OSError:
            log.exception("Could not remove abandoned screenshot")


def _parse_user_amount(raw: str) -> Decimal | None:
    text = (raw or "").strip().replace(" ", "")
    if not re.fullmatch(r"\d+(?:[.,]\d{1,3})?", text):
        return None
    return parse_amount(text)


async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    user = update.effective_user
    message = update.effective_message
    if user is None or message is None:
        return ConversationHandler.END
    _delete_context_upload(context)
    await db.upsert_user(user.id, user.username)
    context.user_data.clear()
    await message.reply_text("Welcome. Choose an action:", reply_markup=main_keyboard())
    return ConversationHandler.END


async def cancel(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    _delete_context_upload(context)
    context.user_data.clear()
    query = update.callback_query
    if query:
        await query.answer()
        await query.edit_message_text("Cancelled.", reply_markup=main_keyboard())
    elif update.effective_message:
        await update.effective_message.reply_text("Cancelled.", reply_markup=main_keyboard())
    return ConversationHandler.END


async def create_account_start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    query = update.callback_query
    if not query:
        return ConversationHandler.END
    await query.answer()
    context.user_data.clear()
    await query.edit_message_text(
        "Send the phone number to use for your website account.",
        reply_markup=cancel_keyboard(),
    )
    return CREATE_PHONE


async def create_account_phone(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    message = update.effective_message
    telegram_user = update.effective_user
    if not message or not telegram_user:
        return ConversationHandler.END
    phone = (message.text or "").strip()
    if not valid_phone(phone):
        await message.reply_text("Send a valid phone number.")
        return CREATE_PHONE
    if not settings.fernet_key:
        await message.reply_text("The bot is not configured: FERNET_KEY is missing.")
        return ConversationHandler.END

    user_id = await db.upsert_user(telegram_user.id, telegram_user.username, phone)
    username = generate_username(telegram_user.id)
    password = generate_password()
    try:
        encrypted_password = SecretBox(settings.fernet_key).encrypt(password)
        request_id = await db.create_account_request(user_id, username, encrypted_password, phone)
    except ActiveRequestError as exc:
        context.user_data.clear()
        await message.reply_text(str(exc), reply_markup=main_keyboard())
        return ConversationHandler.END
    context.user_data.clear()
    await message.reply_text(
        f"Account request #{request_id} submitted. I will message you when the website confirms creation.",
        reply_markup=main_keyboard(),
    )
    return ConversationHandler.END


async def deposit_start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    query = update.callback_query
    if not query:
        return ConversationHandler.END
    await query.answer()
    context.user_data.clear()
    await query.edit_message_text("Choose a payment method:", reply_markup=method_keyboard())
    return DEPOSIT_METHOD


async def deposit_method(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    query = update.callback_query
    if not query:
        return ConversationHandler.END
    await query.answer()
    key = (query.data or "").partition(":")[2]
    if key not in METHODS or not METHODS[key][1]:
        await query.edit_message_text("That payment method is not configured.", reply_markup=main_keyboard())
        return ConversationHandler.END
    label, destination = METHODS[key]
    context.user_data["deposit_method"] = key
    await query.edit_message_text(
        f"{label}\n\nPayment destination: {destination}\n\n"
        f"Send an amount between {settings.min_deposit:.3f} and {settings.max_deposit:.3f} TND.",
        reply_markup=cancel_keyboard(),
    )
    return DEPOSIT_AMOUNT


async def deposit_amount(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    message = update.effective_message
    if not message:
        return DEPOSIT_AMOUNT
    amount = _parse_user_amount(message.text or "")
    if amount is None:
        await message.reply_text("Enter an amount with up to three decimal places, such as 5 or 5.250.")
        return DEPOSIT_AMOUNT
    if amount < settings.min_deposit or amount > settings.max_deposit:
        await message.reply_text(
            f"Amount must be between {settings.min_deposit:.3f} and {settings.max_deposit:.3f} TND."
        )
        return DEPOSIT_AMOUNT
    context.user_data["deposit_amount"] = f"{amount:.3f}"
    await message.reply_text("Now send the payment screenshot.", reply_markup=cancel_keyboard())
    return DEPOSIT_SCREENSHOT


async def receive_screenshot(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    message = update.effective_message
    user = update.effective_user
    if not message or not user:
        return DEPOSIT_SCREENSHOT

    file_id: str | None = None
    extension = ".jpg"
    if message.photo:
        file_id = message.photo[-1].file_id
    elif message.document and message.document.mime_type in {"image/jpeg", "image/png", "image/webp"}:
        file_id = message.document.file_id
        suffix = Path(message.document.file_name or "").suffix.lower()
        if suffix in {".jpg", ".jpeg", ".png", ".webp"}:
            extension = suffix
        elif message.document.mime_type == "image/png":
            extension = ".png"
        elif message.document.mime_type == "image/webp":
            extension = ".webp"
        else:
            extension = ".jpg"

    if not file_id:
        await message.reply_text("Send a JPEG, PNG, or WebP payment screenshot.")
        return DEPOSIT_SCREENSHOT

    telegram_file = await context.bot.get_file(file_id)
    max_bytes = settings.max_upload_mb * 1024 * 1024
    if telegram_file.file_size is not None and telegram_file.file_size > max_bytes:
        await message.reply_text(f"Image exceeds the {settings.max_upload_mb} MB limit.")
        return DEPOSIT_SCREENSHOT

    ensure_dirs()
    path = settings.upload_dir / f"{user.id}-{uuid4().hex}{extension}"
    try:
        await context.bot.send_chat_action(chat_id=message.chat_id, action=ChatAction.UPLOAD_PHOTO)
        await telegram_file.download_to_drive(custom_path=str(path))
        if path.stat().st_size > max_bytes:
            path.unlink(missing_ok=True)
            await message.reply_text(f"Image exceeds the {settings.max_upload_mb} MB limit.")
            return DEPOSIT_SCREENSHOT
    except Exception:
        path.unlink(missing_ok=True)
        log.exception("Failed to download a payment screenshot")
        await message.reply_text("I could not download that image. Please try again.")
        return DEPOSIT_SCREENSHOT

    _delete_context_upload(context)
    context.user_data["deposit_screenshot"] = str(path)
    await message.reply_text("Send the phone number used to make the payment:", reply_markup=cancel_keyboard())
    return DEPOSIT_PHONE


async def deposit_phone(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    message = update.effective_message
    if not message:
        return DEPOSIT_PHONE
    phone = (message.text or "").strip()
    if not valid_phone(phone):
        await message.reply_text("Send a valid payment phone number.")
        return DEPOSIT_PHONE
    context.user_data["deposit_phone"] = phone
    await message.reply_text("Send the payment authorization/reference number:", reply_markup=cancel_keyboard())
    return DEPOSIT_REFERENCE


async def deposit_reference(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    message = update.effective_message
    telegram_user = update.effective_user
    if not message or not telegram_user:
        return ConversationHandler.END
    reference = normalize_reference(message.text or "")
    if len(reference) < 3:
        await message.reply_text("Send a valid authorization/reference number.")
        return DEPOSIT_REFERENCE

    required_context = {"deposit_method", "deposit_amount", "deposit_screenshot", "deposit_phone"}
    if not required_context.issubset(context.user_data):
        _delete_context_upload(context)
        context.user_data.clear()
        await message.reply_text("This deposit session expired. Start again from the menu.", reply_markup=main_keyboard())
        return ConversationHandler.END

    user = await db.get_user(telegram_user.id)
    if not user:
        await db.upsert_user(telegram_user.id, telegram_user.username)
        user = await db.get_user(telegram_user.id)
    if not user or not user.get("website_username"):
        _delete_context_upload(context)
        context.user_data.clear()
        await message.reply_text("Create and confirm your website account before requesting a deposit.", reply_markup=main_keyboard())
        return ConversationHandler.END

    try:
        deposit_id = await db.create_deposit(
            user_id=int(user["id"]),
            amount=context.user_data["deposit_amount"],
            method=context.user_data["deposit_method"],
            screenshot_path=context.user_data["deposit_screenshot"],
            sender_phone=context.user_data["deposit_phone"],
            reference_number=reference,
        )
    except (ActiveRequestError, DuplicateReferenceError) as exc:
        _delete_context_upload(context)
        context.user_data.clear()
        await message.reply_text(str(exc), reply_markup=main_keyboard())
        return ConversationHandler.END
    except Exception:
        _delete_context_upload(context)
        context.user_data.clear()
        log.exception("Could not queue a deposit request")
        await message.reply_text("I could not submit this request. Contact support.", reply_markup=main_keyboard())
        return ConversationHandler.END

    context.user_data.clear()
    await message.reply_text(
        f"Payment request #{deposit_id} submitted. It will be credited only after the verifier and admin balance checks both succeed.",
        reply_markup=main_keyboard(),
    )
    return ConversationHandler.END


async def my_account(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    query = update.callback_query
    if not query:
        return ConversationHandler.END
    await query.answer()
    user = await db.get_user(query.from_user.id)
    text = (
        f"Website username: {user['website_username']}"
        if user and user.get("website_username")
        else "You do not have a confirmed website account yet."
    )
    await query.edit_message_text(text, reply_markup=main_keyboard())
    return ConversationHandler.END


async def noop(update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
    if update.callback_query:
        await update.callback_query.answer("No payment methods are configured", show_alert=True)
    return DEPOSIT_METHOD


async def on_error(update: object, context: ContextTypes.DEFAULT_TYPE) -> None:
    log.error("Unhandled Telegram handler error", exc_info=context.error)


async def _start_worker(application: Application) -> None:
    from .worker import worker_loop

    async def supervise() -> None:
        while True:
            try:
                await worker_loop(application.bot)
            except asyncio.CancelledError:
                raise
            except Exception:
                log.exception("Worker stopped unexpectedly; retrying after a delay")
                await asyncio.sleep(10)

    application.bot_data["worker_task"] = asyncio.create_task(supervise(), name="payment-worker")


async def _stop_worker(application: Application) -> None:
    task = application.bot_data.pop("worker_task", None)
    if task is not None:
        task.cancel()
        try:
            await task
        except asyncio.CancelledError:
            pass


def build_application() -> Application:
    if not settings.bot_token:
        raise RuntimeError("BOT_TOKEN is missing; add it to Replit Secrets")

    create_conversation = ConversationHandler(
        entry_points=[CallbackQueryHandler(create_account_start, pattern=r"^create_account$")],
        states={
            CREATE_PHONE: [
                MessageHandler(filters.TEXT & ~filters.COMMAND, create_account_phone),
                CallbackQueryHandler(cancel, pattern=r"^cancel$"),
            ],
        },
        fallbacks=[CommandHandler("cancel", cancel), CommandHandler("start", start), CallbackQueryHandler(cancel, pattern=r"^cancel$")],
        per_chat=True,
        per_user=True,
        allow_reentry=True,
    )
    deposit_conversation = ConversationHandler(
        entry_points=[CallbackQueryHandler(deposit_start, pattern=r"^deposit$")],
        states={
            DEPOSIT_METHOD: [
                CallbackQueryHandler(deposit_method, pattern=r"^method:"),
                CallbackQueryHandler(cancel, pattern=r"^cancel$"),
                CallbackQueryHandler(noop, pattern=r"^noop$"),
            ],
            DEPOSIT_AMOUNT: [
                MessageHandler(filters.TEXT & ~filters.COMMAND, deposit_amount),
                CallbackQueryHandler(cancel, pattern=r"^cancel$"),
            ],
            DEPOSIT_SCREENSHOT: [
                MessageHandler(filters.PHOTO | filters.Document.IMAGE, receive_screenshot),
                CallbackQueryHandler(cancel, pattern=r"^cancel$"),
            ],
            DEPOSIT_PHONE: [
                MessageHandler(filters.TEXT & ~filters.COMMAND, deposit_phone),
                CallbackQueryHandler(cancel, pattern=r"^cancel$"),
            ],
            DEPOSIT_REFERENCE: [
                MessageHandler(filters.TEXT & ~filters.COMMAND, deposit_reference),
                CallbackQueryHandler(cancel, pattern=r"^cancel$"),
            ],
        },
        fallbacks=[CommandHandler("cancel", cancel), CommandHandler("start", start), CallbackQueryHandler(cancel, pattern=r"^cancel$")],
        per_chat=True,
        per_user=True,
        allow_reentry=True,
    )

    app = (
        ApplicationBuilder()
        .token(settings.bot_token)
        .post_init(_start_worker)
        .post_stop(_stop_worker)
        .build()
    )
    app.add_handler(create_conversation)
    app.add_handler(deposit_conversation)
    app.add_handler(CommandHandler("start", start))
    app.add_handler(CallbackQueryHandler(my_account, pattern=r"^my_account$"))
    app.add_error_handler(on_error)
    return app
