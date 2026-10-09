from __future__ import annotations

import html
import io
import logging
import secrets

from telegram import InlineKeyboardButton, InlineKeyboardMarkup, InputFile, Update
from telegram.constants import ChatType, ParseMode
from telegram.ext import (
    Application,
    CallbackQueryHandler,
    CommandHandler,
    ContextTypes,
    ConversationHandler,
    MessageHandler,
    filters,
)

from .automation import AutomationError, GameAutomation
from .config import Settings
from .storage import DoodyStore, StorageError
from .validation import (
    ValidationError,
    format_amount,
    parse_amount,
    validate_game_username,
)


logger = logging.getLogger(__name__)

(
    CREATE_USERNAME,
    DEPOSIT_AMOUNT,
    DEPOSIT_CONFIRM,
    WITHDRAW_AMOUNT,
    WITHDRAW_CONFIRM,
    PASSWORD_CONFIRM,
) = range(6)


def _new_password() -> str:
    """Generate a cryptographically secure six-digit numeric password."""
    return str(secrets.randbelow(900_000) + 100_000)


def _main_menu() -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(
        [
            [InlineKeyboardButton("🆕 Create account", callback_data="menu:create")],
            [
                InlineKeyboardButton("💰 Deposit", callback_data="menu:deposit"),
                InlineKeyboardButton("💸 Withdraw", callback_data="menu:withdraw"),
            ],
            [InlineKeyboardButton("🔐 Change password", callback_data="menu:password")],
        ]
    )


def _confirmation(action: str) -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(
        [
            [
                InlineKeyboardButton(
                    "✅ Confirm", callback_data=f"confirm:{action}:yes"
                ),
                InlineKeyboardButton("❌ Cancel", callback_data=f"confirm:{action}:no"),
            ]
        ]
    )


class BotHandlers:
    def __init__(
        self,
        settings: Settings,
        store: DoodyStore,
        automation: GameAutomation,
    ):
        self.settings = settings
        self.store = store
        self.automation = automation

    async def start(self, update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
        context.user_data.clear()
        if update.effective_message is not None:
            await update.effective_message.reply_text(
                "Welcome to the Shop Simulator bot. Choose an option:",
                reply_markup=_main_menu(),
            )
        return ConversationHandler.END

    async def show_id(self, update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
        if update.effective_user and update.effective_message:
            await update.effective_message.reply_text(
                f"Your Telegram ID is: {update.effective_user.id}"
            )

    async def begin_action(
        self, update: Update, context: ContextTypes.DEFAULT_TYPE
    ) -> int:
        query = update.callback_query
        user = update.effective_user
        if query is None or user is None or query.message is None:
            return ConversationHandler.END
        if (
            update.effective_chat is None
            or update.effective_chat.type != ChatType.PRIVATE
        ):
            await query.answer("Open the bot in a private chat.", show_alert=True)
            return ConversationHandler.END

        await query.answer()
        await query.edit_message_reply_markup(reply_markup=None)
        action = query.data.removeprefix("menu:") if query.data else ""
        context.user_data.clear()

        account = await self.store.get_account(user.id)

        if action == "create":
            existing = await self.store.get_account(user.id, include_inactive=True)
            if existing and existing["status"] in {"active", "pending"}:
                state = (
                    "already active"
                    if existing["status"] == "active"
                    else "still pending"
                )
                await query.message.reply_text(
                    f"Your account is {state}. One Telegram account can own one game account."
                )
                await self._send_menu(query.message)
                return ConversationHandler.END
            await query.message.reply_text(
                "Send the game username you want.\n"
                "It must start with a letter and contain 3–20 letters, numbers, or _.\n\n"
                "Send /cancel to stop."
            )
            return CREATE_USERNAME

        if account is None:
            await query.message.reply_text(
                "Create a game account with this Telegram account first."
            )
            await self._send_menu(query.message)
            return ConversationHandler.END

        context.user_data["game_username"] = account["game_username"]

        if action == "deposit":
            await query.message.reply_text(
                f"Send the amount to deposit (between {self.settings.minimum_amount} "
                f"and {self.settings.maximum_amount}).\n\nSend /cancel to stop."
            )
            return DEPOSIT_AMOUNT

        if action == "withdraw":
            await query.message.reply_text(
                f"Send the amount to withdraw (between {self.settings.minimum_amount} "
                f"and {self.settings.maximum_amount}).\n\nSend /cancel to stop."
            )
            return WITHDRAW_AMOUNT

        if action == "password":
            await query.message.reply_text(
                "The bot will generate a new secure 6-digit password and replace your old one. "
                "Continue?",
                reply_markup=_confirmation("password"),
            )
            return PASSWORD_CONFIRM

        await query.message.reply_text("Unknown option.")
        await self._send_menu(query.message)
        return ConversationHandler.END

    async def create_account(
        self, update: Update, context: ContextTypes.DEFAULT_TYPE
    ) -> int:
        message = update.effective_message
        user = update.effective_user
        if message is None or user is None or message.text is None:
            return CREATE_USERNAME

        try:
            game_username = validate_game_username(
                message.text, self.settings.game_username_pattern
            )
        except ValidationError as exc:
            await message.reply_text(f"❌ {exc}\nTry again or send /cancel.")
            return CREATE_USERNAME

        password = _new_password()
        try:
            await self.store.reserve_account(
                telegram_user_id=user.id,
                telegram_username=user.username or "",
                telegram_display_name=user.full_name,
                game_username=game_username,
                game_password=password,
            )
        except StorageError as exc:
            await message.reply_text(f"❌ {exc}")
            await self._send_menu(message)
            return ConversationHandler.END

        working = await message.reply_text(
            "⏳ Creating your account on the game website…"
        )
        try:
            await self.automation.create_account(game_username, password)
        except AutomationError as exc:
            try:
                await self.store.fail_account(user.id, str(exc))
            except Exception as storage_exc:
                logger.error(
                    "Failed account attempt could not be recorded error_type=%s",
                    type(storage_exc).__name__,
                )
            await working.edit_text(
                "❌ Account creation was not confirmed by the game website. "
                f"Nothing was saved as active. {exc}"
            )
            await self._send_menu(message)
            return ConversationHandler.END

        local_record_ok = True
        try:
            await self.store.activate_account(user.id)
        except Exception as exc:
            local_record_ok = False
            logger.error(
                "Created game account could not be activated in Doody error_type=%s",
                type(exc).__name__,
            )

        if local_record_ok:
            await working.edit_text("✅ Account created successfully.")
        else:
            await working.edit_text(
                "⚠️ The website created the account, but the local record could not be finalized. "
                "Save the credentials below, do not try again, and contact the bot administrator."
            )
        await message.reply_text(
            "<b>Your Shop Simulator credentials</b>\n\n"
            f"Username: <code>{html.escape(game_username)}</code>\n"
            f"Password: <code>{html.escape(password)}</code>\n\n"
            "Keep this private. The administrator can access the protected Doody file.",
            parse_mode=ParseMode.HTML,
            protect_content=True,
        )
        await self._send_menu(message)
        return ConversationHandler.END

    async def receive_deposit_amount(
        self, update: Update, context: ContextTypes.DEFAULT_TYPE
    ) -> int:
        return await self._receive_amount(
            update, context, action="deposit", next_state=DEPOSIT_CONFIRM
        )

    async def receive_withdraw_amount(
        self, update: Update, context: ContextTypes.DEFAULT_TYPE
    ) -> int:
        return await self._receive_amount(
            update, context, action="withdraw", next_state=WITHDRAW_CONFIRM
        )

    async def _receive_amount(
        self,
        update: Update,
        context: ContextTypes.DEFAULT_TYPE,
        *,
        action: str,
        next_state: int,
    ) -> int:
        message = update.effective_message
        if message is None or message.text is None:
            return next_state
        try:
            amount = parse_amount(
                message.text,
                self.settings.minimum_amount,
                self.settings.maximum_amount,
            )
        except ValidationError as exc:
            await message.reply_text(f"❌ {exc}\nTry again or send /cancel.")
            return DEPOSIT_AMOUNT if action == "deposit" else WITHDRAW_AMOUNT

        formatted = format_amount(amount)
        context.user_data["amount"] = formatted
        verb = "deposit into" if action == "deposit" else "withdraw from"
        username = html.escape(str(context.user_data["game_username"]))
        await message.reply_text(
            f"Confirm: {verb} <code>{username}</code> the amount <b>{formatted}</b>?",
            parse_mode=ParseMode.HTML,
            reply_markup=_confirmation(action),
        )
        return next_state

    async def confirm_deposit(
        self, update: Update, context: ContextTypes.DEFAULT_TYPE
    ) -> int:
        return await self._confirm_money(update, context, action="deposit")

    async def confirm_withdraw(
        self, update: Update, context: ContextTypes.DEFAULT_TYPE
    ) -> int:
        return await self._confirm_money(update, context, action="withdraw")

    async def _confirm_money(
        self,
        update: Update,
        context: ContextTypes.DEFAULT_TYPE,
        *,
        action: str,
    ) -> int:
        query = update.callback_query
        user = update.effective_user
        if query is None or query.message is None or user is None:
            return ConversationHandler.END
        if (
            update.effective_chat is None
            or update.effective_chat.type != ChatType.PRIVATE
        ):
            await query.answer("Open the bot in a private chat.", show_alert=True)
            return ConversationHandler.END
        await query.answer()
        await query.edit_message_reply_markup(reply_markup=None)

        if not query.data or not query.data.endswith(":yes"):
            await query.message.reply_text(
                "Cancelled. No website action was performed."
            )
            await self._send_menu(query.message)
            return ConversationHandler.END

        game_username = str(context.user_data.get("game_username", ""))
        amount = str(context.user_data.get("amount", ""))
        if not game_username or not amount:
            await query.message.reply_text("This request expired. Please start again.")
            await self._send_menu(query.message)
            return ConversationHandler.END

        try:
            transaction_id = await self.store.record_transaction(
                telegram_user_id=user.id,
                game_username=game_username,
                action=action,
                amount=amount,
            )
        except Exception as exc:
            logger.error(
                "Transaction could not be recorded before website action error_type=%s",
                type(exc).__name__,
            )
            await query.message.reply_text(
                "❌ The audit record could not be created, so no website action was performed. "
                "Contact the bot administrator."
            )
            return ConversationHandler.END

        working = await query.message.reply_text(
            f"⏳ Processing {action} on the game website…"
        )
        try:
            if action == "deposit":
                await self.automation.deposit(game_username, amount)
            else:
                await self.automation.withdraw(game_username, amount)
        except AutomationError as exc:
            try:
                await self.store.finish_transaction(
                    transaction_id, success=False, error=str(exc)
                )
            except Exception as storage_exc:
                logger.error(
                    "Failed website transaction could not be finalized error_type=%s",
                    type(storage_exc).__name__,
                )
            await working.edit_text(
                f"❌ The {action} was not confirmed by the game website. {exc}"
            )
            await self._send_menu(query.message)
            return ConversationHandler.END

        try:
            await self.store.finish_transaction(transaction_id, success=True)
            total_field = (
                "deposits_total" if action == "deposit" else "withdrawals_total"
            )
            await self.store.add_account_total(
                user.id, field=total_field, amount=amount
            )
        except Exception as exc:
            logger.error(
                "Completed website transaction could not be finalized in Doody error_type=%s",
                type(exc).__name__,
            )
            await working.edit_text(
                f"⚠️ The game website confirmed the {action}, but its local record needs "
                "administrator review. Do not repeat the request."
            )
            return ConversationHandler.END

        await working.edit_text(f"✅ {action.capitalize()} of {amount} completed.")
        await self._send_menu(query.message)
        return ConversationHandler.END

    async def confirm_password(
        self, update: Update, context: ContextTypes.DEFAULT_TYPE
    ) -> int:
        query = update.callback_query
        user = update.effective_user
        if query is None or query.message is None or user is None:
            return ConversationHandler.END
        if (
            update.effective_chat is None
            or update.effective_chat.type != ChatType.PRIVATE
        ):
            await query.answer("Open the bot in a private chat.", show_alert=True)
            return ConversationHandler.END
        await query.answer()
        await query.edit_message_reply_markup(reply_markup=None)

        if not query.data or not query.data.endswith(":yes"):
            await query.message.reply_text("Cancelled. Your password was not changed.")
            await self._send_menu(query.message)
            return ConversationHandler.END

        game_username = str(context.user_data.get("game_username", ""))
        if not game_username:
            await query.message.reply_text("This request expired. Please start again.")
            await self._send_menu(query.message)
            return ConversationHandler.END

        new_password = _new_password()
        try:
            transaction_id = await self.store.record_transaction(
                telegram_user_id=user.id,
                game_username=game_username,
                action="change_password",
            )
        except Exception as exc:
            logger.error(
                "Password audit could not be recorded before website action error_type=%s",
                type(exc).__name__,
            )
            await query.message.reply_text(
                "❌ The audit record could not be created, so the password was not changed. "
                "Contact the bot administrator."
            )
            return ConversationHandler.END

        working = await query.message.reply_text(
            "⏳ Changing your password on the game website…"
        )
        try:
            await self.automation.change_password(game_username, new_password)
        except AutomationError as exc:
            try:
                await self.store.finish_transaction(
                    transaction_id, success=False, error=str(exc)
                )
            except Exception as storage_exc:
                logger.error(
                    "Failed password action could not be finalized error_type=%s",
                    type(storage_exc).__name__,
                )
            await working.edit_text(
                "❌ The password change was not confirmed by the game website. "
                f"Your saved password was not changed. {exc}"
            )
            await self._send_menu(query.message)
            return ConversationHandler.END

        local_record_ok = True
        try:
            await self.store.update_password(user.id, new_password)
        except Exception as exc:
            local_record_ok = False
            logger.error(
                "Changed website password could not be saved in Doody error_type=%s",
                type(exc).__name__,
            )

        audit_ok = local_record_ok
        if local_record_ok:
            try:
                await self.store.finish_transaction(transaction_id, success=True)
            except Exception as exc:
                audit_ok = False
                logger.error(
                    "Changed password audit could not be finalized error_type=%s",
                    type(exc).__name__,
                )

        if audit_ok:
            await working.edit_text("✅ Password changed successfully.")
        else:
            await working.edit_text(
                "⚠️ The website changed the password, but its local record needs administrator "
                "review. Save the password below and do not repeat this request."
            )
        await query.message.reply_text(
            f"Your new password is <code>{new_password}</code>. Keep it private.",
            parse_mode=ParseMode.HTML,
            protect_content=True,
        )
        await self._send_menu(query.message)
        return ConversationHandler.END

    async def cancel(self, update: Update, context: ContextTypes.DEFAULT_TYPE) -> int:
        context.user_data.clear()
        query = update.callback_query
        if query is not None:
            await query.answer()
            if query.message:
                await query.edit_message_reply_markup(reply_markup=None)
                await query.message.reply_text("Cancelled.")
                await self._send_menu(query.message)
        elif update.effective_message:
            await update.effective_message.reply_text("Cancelled.")
            await self._send_menu(update.effective_message)
        return ConversationHandler.END

    async def export_doody(
        self, update: Update, context: ContextTypes.DEFAULT_TYPE
    ) -> None:
        await self._send_export(update, "accounts")

    async def export_transactions(
        self, update: Update, context: ContextTypes.DEFAULT_TYPE
    ) -> None:
        await self._send_export(update, "transactions")

    async def _send_export(self, update: Update, kind: str) -> None:
        user = update.effective_user
        message = update.effective_message
        if user is None or message is None:
            return
        if user.id not in self.settings.telegram_admin_ids:
            await message.reply_text(
                "This command is restricted to bot administrators."
            )
            return
        filename, content = await self.store.export_bytes(kind)
        document = InputFile(io.BytesIO(content), filename=filename)
        await message.reply_document(
            document=document,
            caption="Confidential administrator export. It may contain game credentials.",
            protect_content=True,
        )

    async def status(self, update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
        user = update.effective_user
        message = update.effective_message
        if user is None or message is None:
            return
        if user.id not in self.settings.telegram_admin_ids:
            await message.reply_text(
                "This command is restricted to bot administrators."
            )
            return
        stats = await self.store.stats()
        await message.reply_text(
            "Bot status\n"
            f"Browser: {'ready' if self.automation.ready else 'not ready'}\n"
            f"Active accounts: {stats['active_accounts']}\n"
            f"Pending accounts: {stats['pending_accounts']}\n"
            f"Failed accounts: {stats['failed_accounts']}\n"
            f"Successful transactions: {stats['successful_transactions']}\n"
            f"Pending transactions: {stats['pending_transactions']}\n"
            f"Failed transactions: {stats['failed_transactions']}"
        )

    async def _send_menu(self, message) -> None:
        await message.reply_text("Choose another option:", reply_markup=_main_menu())


def register_handlers(application: Application, handlers: BotHandlers) -> None:
    private = filters.ChatType.PRIVATE
    application.add_handler(
        CommandHandler("doody", handlers.export_doody, filters=private)
    )
    application.add_handler(
        CommandHandler("transactions", handlers.export_transactions, filters=private)
    )
    application.add_handler(CommandHandler("status", handlers.status, filters=private))
    application.add_handler(CommandHandler("id", handlers.show_id, filters=private))

    conversation = ConversationHandler(
        entry_points=[
            CommandHandler("start", handlers.start, filters=private),
            CallbackQueryHandler(
                handlers.begin_action,
                pattern=r"^menu:(create|deposit|withdraw|password)$",
            ),
        ],
        states={
            CREATE_USERNAME: [
                MessageHandler(
                    private & filters.TEXT & ~filters.COMMAND, handlers.create_account
                )
            ],
            DEPOSIT_AMOUNT: [
                MessageHandler(
                    private & filters.TEXT & ~filters.COMMAND,
                    handlers.receive_deposit_amount,
                )
            ],
            DEPOSIT_CONFIRM: [
                CallbackQueryHandler(
                    handlers.confirm_deposit, pattern=r"^confirm:deposit:(yes|no)$"
                )
            ],
            WITHDRAW_AMOUNT: [
                MessageHandler(
                    private & filters.TEXT & ~filters.COMMAND,
                    handlers.receive_withdraw_amount,
                )
            ],
            WITHDRAW_CONFIRM: [
                CallbackQueryHandler(
                    handlers.confirm_withdraw, pattern=r"^confirm:withdraw:(yes|no)$"
                )
            ],
            PASSWORD_CONFIRM: [
                CallbackQueryHandler(
                    handlers.confirm_password, pattern=r"^confirm:password:(yes|no)$"
                )
            ],
        },
        fallbacks=[
            CommandHandler("cancel", handlers.cancel, filters=private),
            CommandHandler("start", handlers.start, filters=private),
        ],
        allow_reentry=True,
    )
    application.add_handler(conversation)
