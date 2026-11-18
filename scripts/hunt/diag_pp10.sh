#!/usr/bin/env bash
# bootstrap.js loader internals: what does it load next?
set -uo pipefail
exec > >(tee /tmp/diag.log) 2>&1
set -x
UA="Mozilla/5.0 (X11; Linux x86_64; rv:124.0) Gecko/20100101 Firefox/124.0"
B=https://demo4.scriptcasino.ru
T=/tmp/pp10; mkdir -p $T

getf(){ CODE=$(curl -s -o "$2" -w '%{http_code}' -A "$UA" --connect-timeout 6 --max-time 60 "$1"); SZ=$(stat -c%s "$2" 2>/dev/null || echo 0); echo "$CODE $SZ"; }

DP="/games/BigBassBonanza/gs2c/common/games-html5/games/vs/vs10bbbonanza"
echo "=== 1. bootstrap.js load-contexts ==="
getf "$B$DP/desktop/bootstrap.js" $T/bs.js >/dev/null
echo "--- around 'Resources':"
grep -oE '.{80}Resources.{100}' $T/bs.js | head -6
echo "--- around '.json':"
grep -oE '.{80}\.json.{80}' $T/bs.js | head -6
echo "--- around 'LoadScript(':"
grep -oE 'LoadScript\([^)]{0,140}' $T/bs.js | head -8
echo "--- around 'GAME_URL':"
grep -oE '.{40}GAME_URL.{80}' $T/bs.js | head -8
echo "--- string literals in bootstrap.js (uniq, with dots):"
grep -oE '"[A-Za-z0-9_./-]{3,60}"' $T/bs.js | tr -d '"' | sort -u | grep -E "\.|Resources|js/" | head -25

echo "=== 2. candidate next-level files ==="
for U in "$DP/desktop/js/game.js" "$DP/desktop/Resources/loader.js" "$DP/desktop/Resources/game.json" \
         "$DP/desktop/Resources/loader.json" "$DP/desktop/loader.js" "$DP/desktop/game.js" \
         "$DP/desktop/js/bootstrap.js" "$DP/desktop/Resources/images/logo.png" ; do
  C=$(getf "$B$U" $T/p.bin); echo "$U -> $C"
done

echo PP10_DIAG_DONE
