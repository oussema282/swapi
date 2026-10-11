from __future__ import annotations

import sys

from .config import ensure_dirs, settings
from .security import SecretBox


def main() -> int:
    ensure_dirs()
    errors = settings.validate(require_verifier=True)
    try:
        SecretBox(settings.fernet_key)
    except ValueError as exc:
        errors.append(str(exc))

    if errors:
        print("Configuration incomplete:")
        for error in errors:
            print(f"- {error}")
        return 1

    print("Configuration is structurally complete.")
    print(f"- Dry run: {'enabled' if settings.dry_run else 'disabled'}")
    print(f"- Maximum deposit: {settings.max_deposit:.3f} TND")
    print("- Site login and selectors still need a controlled end-to-end test.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
