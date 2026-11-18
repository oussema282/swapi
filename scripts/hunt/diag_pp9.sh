#!/usr/bin/env bash
# game.json manifest inspection (the PP asset loader source of truth)
set -uo pipefail
exec > >(tee /tmp/diag.log) 2>&1
set -x
UA="Mozilla/5.0 (X11; Linux x86_64; rv:124.0) Gecko/20100101 Firefox/124.0"
B=https://demo4.scriptcasino.ru
T=/tmp/pp9; mkdir -p $T

getf(){ CODE=$(curl -s -o "$2" -w '%{http_code}' -A "$UA" --connect-timeout 6 --max-time 60 "$1"); SZ=$(stat -c%s "$2" 2>/dev/null || echo 0); echo "$CODE $SZ"; }

DP="/games/BigBassBonanza/gs2c/common/games-html5/games/vs/vs10bbbonanza"
echo "=== 1. game.json locations ==="
for U in "$DP/desktop/game.json" "$DP/game.json" "$DP/mobile/game.json" "$DP/desktop/gamedesc.json"; do
  C=$(getf "$B$U" $T/p.bin); echo "$U -> $C"
done

echo "=== 2. desktop/game.json head ==="
C=$(getf "$B$DP/desktop/game.json" $T/gj.json); echo "$C"
head -c 2500 $T/gj.json; echo
echo "--- string values in game.json (first 40):"
grep -oE '"[^"]{2,80}"' $T/gj.json | tr -d '"' | sort -u | head -40
echo "--- counts by extension:"
for E in png jpg json mp3 ogg webp fnt atlas; do echo "  .$E: $(grep -oE "\.$E\b" $T/gj.json | wc -l)"; done

echo "=== 3. bootstrap.js: how assets are loaded ==="
C=$(getf "$B$DP/desktop/bootstrap.js" $T/bs.js); echo "$C"
grep -oE '.{60}game\.json.{60}' $T/bs.js | head -4
grep -oE '\.json|\.atlas|Resources|loadQueue|manifest' $T/bs.js | sort | uniq -c | head -10

echo "=== 4. sample asset probes from manifest strings ==="
for R in $(grep -oE '"[A-Za-z0-9_./-]+\.(png|jpg|json|mp3|ogg)"' $T/gj.json | tr -d '"' | sort -u | head -6); do
  case "$R" in
    /*) U="$B$R" ;;
    http*) U="$R" ;;
    *) U="$B$DP/desktop/$R" ;;
  esac
  C=$(getf "$U" $T/p.bin); echo "REF $R -> $C"
done

echo PP9_DIAG_DONE
