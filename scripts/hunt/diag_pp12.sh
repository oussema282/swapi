#!/usr/bin/env bash
# bootstrap.js boot sequence: versions, PackageLoader, tail of file
set -uo pipefail
exec > >(tee /tmp/diag.log) 2>&1
set -x
UA="Mozilla/5.0 (X11; Linux x86_64; rv:124.0) Gecko/20100101 Firefox/124.0"
B=https://demo4.scriptcasino.ru
T=/tmp/pp12; mkdir -p $T

getf(){ CODE=$(curl -s -o "$2" -w '%{http_code}' -A "$UA" --connect-timeout 6 --max-time 60 "$1"); SZ=$(stat -c%s "$2" 2>/dev/null || echo 0); echo "$CODE $SZ"; }

DP="/games/BigBassBonanza/gs2c/common/games-html5/games/vs/vs10bbbonanza"
getf "$B$DP/desktop/bootstrap.js" $T/bs.js >/dev/null

echo "=== 1. version-ish strings ==="
grep -oE '[0-9]+\.[0-9]+\.[0-9]+' $T/bs.js | sort -u | head -10
grep -oE '"[^"]*version[^"]*"' $T/bs.js | sort -u | head -10
grep -oE "'[^']*version[^']*'" $T/bs.js | sort -u | head -10

echo "=== 2. tail of bootstrap.js (last 3KB) ==="
tail -c 3000 $T/bs.js

echo "=== 3. PackageLoader + main() contexts ==="
grep -oE '.{100}PackageLoader.{150}' $T/bs.js | head -4
grep -oE 'function main[\s\S]{0,400}' $T/bs.js | head -2
grep -oE '.{80}(loader\.js|game\.js|main\.js).{80}' $T/bs.js | head -6
grep -oE '"js/"|js/\+|\.js\b' $T/bs.js | sort | uniq -c

echo "=== 4. probes: versioned dirs ==="
for V in 1.0.0 1.0 2.0.0; do
  C=$(getf "$B$DP/desktop/$V/game.js" $T/p.bin); echo "$DP/desktop/$V/game.js -> $C"
done

echo PP12_DIAG_DONE
