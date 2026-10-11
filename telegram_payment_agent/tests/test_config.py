from __future__ import annotations

import os
import unittest
from unittest.mock import patch

from app.config import Settings, env_bool


class BooleanConfigurationTests(unittest.TestCase):
    def test_strict_true_and_false_values(self) -> None:
        with patch.dict(os.environ, {"TEST_FLAG": "true"}):
            self.assertTrue(env_bool("TEST_FLAG", False))
        with patch.dict(os.environ, {"TEST_FLAG": "0"}):
            self.assertFalse(env_bool("TEST_FLAG", True))

    def test_unknown_boolean_fails_closed_with_configuration_error(self) -> None:
        with patch.dict(os.environ, {"TEST_FLAG": "tru"}), self.assertRaises(ValueError):
            env_bool("TEST_FLAG", True)

    def test_missing_boolean_uses_safe_default(self) -> None:
        with patch.dict(os.environ, {}, clear=False):
            os.environ.pop("TEST_FLAG", None)
            self.assertTrue(env_bool("TEST_FLAG", True))

    def test_unset_dry_run_defaults_to_live_mode_for_requested_test(self) -> None:
        with patch.dict(os.environ, {}, clear=True):
            self.assertFalse(Settings.from_env().dry_run)


if __name__ == "__main__":
    unittest.main()
