#!/usr/bin/env bash
# Trace the exact asset chain for a few AM games on the demo host
set -uo pipefail
exec > >(tee /tmp/diag.log) 2>&1
set -x
UA="Mozilla/5.0 (X11; Linux x86_64; rv:124.0) Gecko/20100101 Firefox/124.0"
B=https://demo4.scriptcasino.ru
c(){ CODE=$(curl -s -o /tmp/d.bin -w '%{http_code}' -A "$UA" --max-time 20 "$B$1"); SZ=$(stat -c%s /tmp/d.bin 2>/dev/null || echo 0); echo "$1 -> $CODE ($SZ B)"; if [ "$CODE" = 200 ] && [ "$SZ" -gt 120 ] && [ "$SZ" -lt 100000 ]; then head -c 400 /tmp/d.bin; echo; fi; }

for N in BigPandaAM AllWaysWinAM; do
  echo "########## $N"
  c "/games/$N/amarent/index.html"
  c "/games/BigPandaAM/bigpanda/src/bigpanda_00316940.js"
  c "/games/AllWaysWinAM/allwayswin/src/allwayswin_00156940.js"
done
for U in "/games/BigPandaAM/bigpanda/index.html" \
         "/games/BigPandaAM/bigpanda/" \
         "/games/BigPandaAM/bigpanda/src/" \
         "/games/BigPandaAM/bigpanda/data/resources_desktop_12_1280.json" \
         "/games/BigPandaAM/bigpanda/data/gamerules_en.json" \
         "/games/BigPandaAM/amarent/src/settings_00296940.js" \
         "/games/BigPandaAM/amarent/src/settings_bigpanda_00296940.js" \
         "/games/BigPandaAM/bigpanda/src/settings_bigpanda_00296940.js" \
         "/games/BigPandaAM/slot/index.html" \
         "/games/BigPandaAM/basic/index.html" \
         "/games/BigPandaAM/gamble/index.html" ; do
  c "$U"
done
echo DIAG_DONE
