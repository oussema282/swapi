#!/usr/bin/env bash
# Find where bootstrap.js really lives + dump GAME_URL assignments + ext.js full
set -uo pipefail
exec > >(tee /tmp/diag.log) 2>&1
set -x
UA="Mozilla/5.0 (X11; Linux x86_64; rv:124.0) Gecko/20100101 Firefox/124.0"
B=https://demo4.scriptcasino.ru
T=/tmp/pp7; mkdir -p $T

getf(){ CODE=$(curl -s -o "$2" -w '%{http_code}' -A "$UA" --connect-timeout 6 --max-time 60 "$1"); SZ=$(stat -c%s "$2" 2>/dev/null || echo 0); echo "$CODE $SZ"; }

echo "=== 1. GAME_URL assignments in both shells ==="
getf "$B/games/BigBassBonanza/gs2c/html5Game.html" $T/bbb.html >/dev/null
grep -oE 'GAME_URL[:=][^;,]{0,140}' $T/bbb.html | head -10
getf "$B/games/AncientEgyptPM/index.html" $T/aepm.html >/dev/null
grep -oE 'GAME_URL[:=][^;,]{0,140}' $T/aepm.html | head -10
grep -oE 'datapath[^,]{0,160}' $T/aepm.html | head -5
grep -oE '"symbol[^,]{0,60}' $T/aepm.html | head -5
grep -oE 'vs[A-Za-z0-9]+' $T/aepm.html | sort -u | head -5

echo "=== 2. bundle location probes (BBB) ==="
DP="/games/BigBassBonanza/gs2c/common/games-html5/games/vs/vs10bbbonanza"
for U in "$DP/bootstrap.js" "$DP/desktop/bootstrap.js" "$DP/mobile/bootstrap.js" \
         "$DP/desktop/game.js" "$DP/game.js" "$DP/index.html" "$DP/desktop/index.html" \
         "$DP/desktop/js/game.js" "$DP/lang/en.js" "$DP/version.json" \
         "/games/BigBassBonanza/gs2c/common/games-html5/games/vs/vs10bbbonanza/desktop/" ; do
  C=$(getf "$B$U" $T/p.bin); echo "$U -> $C"
  if [ "${C%% *}" = 200 ] && [ "${C#* }" -lt 30000 ] && [ "${C#* }" -gt 200 ]; then head -c 400 $T/p.bin; echo; echo ---; fi
done

echo "=== 3. html5-script-external.js FULL ==="
getf "$B/games/BigBassBonanza/gs2c/common/js/html5-script-external.js" $T/ext.js >/dev/null
cat $T/ext.js | head -c 7500
echo
echo PP7_DIAG_DONE
