from __future__ import annotations

import logging

from telegram import BotCommand, Update
from telegram.ext import Application, ContextTypes

from .automation import GameAutomation
from .config import ConfigError, Settings
from .handlers import BotHandlers, register_handlers
from .storage import DoodyStore


logger = logging.getLogger(__name__)


def configure_logging() -> None:
    logging.basicConfig(
        format="%(asctime)s %(levelname)s %(name)s: %(message)s",
        level=logging.INFO,
    )
    # Avoid verbose HTTP logs that can include sensitive request metadata.
    logging.getLogger("httpx").setLevel(logging.WARNING)
    logging.getLogger("httpcore").setLevel(logging.WARNING)


async def handle_error(update: object, context: ContextTypes.DEFAULT_TYPE) -> None:
    # Log only the exception type: Telegram updates and browser operations may
    # contain private account information.
    logger.error("Unhandled bot error type=%s", type(context.error).__name__)
    if isinstance(update, Update) and update.effective_message is not None:
        await update.effective_message.reply_text(
            "Something went wrong. Please use /start and try again. If the problem "
            "continues, contact the bot administrator."
        )


def build_application(settings: Settings) -> Application:
    store = DoodyStore(settings.data_dir)
    automation = GameAutomation(settings)
    handlers = BotHandlers(settings, store, automation)

    async def post_init(application: Application) -> None:
        await store.initialize()
        await automation.start()
        await application.bot.set_my_commands(
            [
                BotCommand("start", "Open the Shop Simulator menu"),
                BotCommand("cancel", "Cancel the current request"),
                BotCommand("id", "Show your Telegram ID"),
                BotCommand("status", "Admin: show bot status"),
                BotCommand("doody", "Admin: export account CSV"),
                BotCommand("transactions", "Admin: export transaction CSV"),
            ]
        )

    async def post_shutdown(application: Application) -> None:
        await automation.stop()

    application = (
        Application.builder()
        .token(settings.telegram_bot_token)
        .post_init(post_init)
        .post_shutdown(post_shutdown)
        .build()
    )
    register_handlers(application, handlers)
    application.add_error_handler(handle_error)
    return application


def main() -> None:
    configure_logging()
    try:
        settings = Settings.load()
    except ConfigError as exc:
        logger.error("Configuration error: %s", exc)
        raise SystemExit(2) from exc

    application = build_application(settings)
    logger.info("Starting Shop Simulator bot with Telegram polling")
    application.run_polling(
        allowed_updates=Update.ALL_TYPES,
        drop_pending_updates=False,
    )


if __name__ == "__main__":
    main()
