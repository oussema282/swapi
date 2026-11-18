#!/usr/bin/env bash
# Dump client/resources.json + client/game.json (the real package manifests)
set -uo pipefail
exec > >(tee /tmp/diag.log) 2>&1
set -x
UA="Mozilla/5.0 (X11; Linux x86_64; rv:124.0) Gecko/20100101 Firefox/124.0"
B=https://demo4.scriptcasino.ru
T=/tmp/pp13; mkdir -p $T

getf(){ CODE=$(curl -s -o "$2" -w '%{http_code}' -A "$UA" --connect-timeout 6 --max-time 60 "$1"); SZ=$(stat -c%s "$2" 2>/dev/null || echo 0); echo "$CODE $SZ"; }

DP="/games/WolfGold/gs2c/common/games-html5/games/vs/vs25wolfgold"
echo "=== 1. sizes ==="
for U in "$DP/desktop/client/resources.json" "$DP/desktop/client/game.json" "$DP/desktop/build.js" "$DP/desktop/style.css"; do
  C=$(getf "$B$U" $T/p.bin); echo "$U -> $C"
done

echo "=== 2. resources.json head (2KB) ==="
C=$(getf "$B$DP/desktop/client/resources.json" $T/res.json); echo "$C"
head -c 2000 $T/res.json; echo
echo "--- package-like strings:"
grep -oE '"[A-Za-z0-9_]{3,30}"' $T/res.json | tr -d '"' | sort -u | head -30

echo "=== 3. game.json head (2KB) ==="
C=$(getf "$B$DP/desktop/client/game.json" $T/g.json); echo "$C"
head -c 2000 $T/g.json; echo

echo "=== 4. build.js tail + package refs ==="
C=$(getf "$B$DP/desktop/build.js" $T/build.js); echo "$C"
tail -c 1500 $T/build.js; echo
echo "--- build.js quoted strings with json/pkg:"
grep -oE '"[A-Za-z0-9_./-]{3,60}"' $T/build.js | tr -d '"' | sort -u | head -30

echo PP13_DIAG_DONE
