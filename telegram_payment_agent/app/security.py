from __future__ import annotations

from cryptography.fernet import Fernet, InvalidToken


class SecretBox:
    """Encrypt account passwords stored in the local SQLite database."""

    def __init__(self, key: str):
        if not key:
            raise ValueError("FERNET_KEY is required")
        try:
            self._fernet = Fernet(key.encode("ascii"))
        except (ValueError, UnicodeEncodeError) as exc:
            raise ValueError("FERNET_KEY is not a valid Fernet key") from exc

    @staticmethod
    def generate_key() -> str:
        return Fernet.generate_key().decode("ascii")

    def encrypt(self, value: str) -> str:
        return self._fernet.encrypt(value.encode("utf-8")).decode("ascii")

    def decrypt(self, value: str) -> str:
        try:
            return self._fernet.decrypt(value.encode("ascii")).decode("utf-8")
        except (InvalidToken, UnicodeEncodeError) as exc:
            raise ValueError("Could not decrypt stored account password") from exc
