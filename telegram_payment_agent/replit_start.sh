#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
if [[ ! -x .venv/bin/python ]]; then
  echo "Project virtual environment is missing. See README.md: create .venv and install requirements.txt." >&2
  exit 2
fi
source .venv/bin/activate
python -m app.check_config
exec python -m app.main
