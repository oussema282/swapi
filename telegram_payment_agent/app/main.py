from __future__ import annotations

import logging
import sys

from .bot import build_application
from .config import ensure_dirs, settings


def main() -> int:
    logging.basicConfig(
        level=logging.INFO,
        format="%(asctime)s | %(levelname)s | %(name)s | %(message)s",
    )
    ensure_dirs()
    errors = settings.validate(require_verifier=True)
    if errors:
        print("Configuration incomplete:", file=sys.stderr)
        for error in errors:
            print(f"- {error}", file=sys.stderr)
        print("Run `python -m app.check_config` after setting Replit Secrets.", file=sys.stderr)
        return 2
    try:
        from .security import SecretBox

        SecretBox(settings.fernet_key)
    except ValueError as exc:
        print(f"Configuration error: {exc}", file=sys.stderr)
        return 2

    application = build_application()
    logging.getLogger("telegram_payment_agent").info(
        "Starting Telegram bot and one integrated browser worker (dry_run=%s)",
        settings.dry_run,
    )
    application.run_polling(allowed_updates=None, drop_pending_updates=False)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
