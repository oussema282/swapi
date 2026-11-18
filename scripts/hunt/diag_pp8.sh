#!/usr/bin/env bash
# PM games: gs2c presence + play-page config source
set -uo pipefail
exec > >(tee /tmp/diag.log) 2>&1
set -x
UA="Mozilla/5.0 (X11; Linux x86_64; rv:124.0) Gecko/20100101 Firefox/124.0"
B=https://demo4.scriptcasino.ru
T=/tmp/pp8; mkdir -p $T

getf(){ CODE=$(curl -s -o "$2" -w '%{http_code}' -A "$UA" --connect-timeout 6 --max-time 60 "$1"); SZ=$(stat -c%s "$2" 2>/dev/null || echo 0); echo "$CODE $SZ"; }

echo "=== 1. PM games: do they also have gs2c clients? ==="
for N in AncientEgyptPM AztecGemsPM AncientEgypt AncientEgyptClassic AztecKing; do
  C=$(getf "$B/games/$N/gs2c/html5Game.html" $T/p.bin); echo "$N gs2c/html5Game.html -> $C"
done

echo "=== 2. full /demo/AncientEgyptPM play page ==="
C=$(getf "$B/demo/AncientEgyptPM?api_exit=/" $T/pm_demo.html); echo "$C"
cat $T/pm_demo.html
echo
echo "=== 3. full /demo/AztecGemsPM play page ==="
C=$(getf "$B/demo/AztecGemsPM?api_exit=/" $T/ag_demo.html); echo "$C"
cat $T/ag_demo.html | head -c 1500
echo
echo "=== 4. datapath probe for PM (guess symbol dirs) ==="
for U in "/games/AncientEgyptPM/gs2c/common/games-html5/games/vs/vs10ancientegyph/desktop/bootstrap.js" \
         "/games/AncientEgyptPM/gs2c/common/games-html5/games/vs/vs10ancientegypt/desktop/bootstrap.js" \
         "/games/AncientEgyptPM/game/desktop/bootstrap.js" \
         "/games/AncientEgyptPM/common/games-html5/games/vs/vs10ancientegypt/desktop/bootstrap.js"; do
  C=$(getf "$B$U" $T/p.bin); echo "$U -> $C"
done

echo PP8_DIAG_DONE
