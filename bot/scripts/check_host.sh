#!/usr/bin/env bash
set -euo pipefail

printf 'Operating system: '
uname -srm
printf 'Architecture: '
uname -m
printf 'Python: '
python3 --version
printf 'Available memory:\n'
free -h 2>/dev/null || true
printf 'Available disk space:\n'
df -h .
printf 'systemd: '
if command -v systemctl >/dev/null 2>&1; then
  echo 'available'
else
  echo 'not found'
fi
printf 'Chromium shared-library check is performed after: playwright install chromium\n'
