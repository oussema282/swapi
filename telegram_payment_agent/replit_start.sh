#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
python -m app.check_config
exec python -m app.main
