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

UA="Mozilla/5.0 (X11; Linux x86_64; rv:124.0) Gecko/20100101 Firefox/124.0"
U=https://demo4.scriptcasino.ru/games/BigPandaAM/bigpanda/src/bigpanda_00316940.js

echo "--- plain (diag style)";   curl -sS -A "$UA" --max-time 30 -o /tmp/a.bin -w 'code=%{http_code} size=%{size_download} time=%{time_total}\n' "$U"
echo "--- compressed (mirror style)"; curl -sS --compressed -A "$UA" --max-time 60 -o /tmp/b.bin -w 'code=%{http_code} size=%{size_download} time=%{time_total}\n' "$U"
echo "--- compressed + referer"; curl -sS --compressed -A "$UA" -e "https://demo4.scriptcasino.ru/games/BigPandaAM/amarent/" --max-time 60 -o /tmp/c.bin -w 'code=%{http_code} size=%{size_download} time=%{time_total}\n' "$U"
echo "--- compressed twice in a row (warm)"; curl -sS --compressed -A "$UA" --max-time 60 -o /tmp/d.bin -w 'code=%{http_code} size=%{size_download} time=%{time_total}\n' "$U"; curl -sS --compressed -A "$UA" --max-time 60 -o /tmp/e.bin -w 'code=%{http_code} size=%{size_download} time=%{time_total}\n' "$U"
echo "--- 6 concurrent compressed (simulate pool)"; for i in 1 2 3 4 5 6; do curl -sS --compressed -A "$UA" --max-time 60 -o /tmp/f$i.bin -w "w$i: code=%{http_code} size=%{size_download} time=%{time_total}\n" "$U" & done; wait
ls -la /tmp/*.bin | head -10
echo DIAG2_DONE

UA="Mozilla/5.0 (X11; Linux x86_64; rv:124.0) Gecko/20100101 Firefox/124.0"
B=https://demo4.scriptcasino.ru
c(){ CODE=$(curl -s -o /tmp/d3.bin -w '%{http_code}' -A "$UA" --max-time 20 "$B$1"); SZ=$(stat -c%s /tmp/d3.bin 2>/dev/null || echo 0); echo "$1 -> $CODE ($SZ B)"; }
for N in BigPandaAM BillyonaireAM; do
  T=$(echo "$N" | sed -E 's/AM$//' | tr 'A-Z' 'a-z')
  echo "########## $N theme=$T"
  c "/games/$N/$T/images/800_600/main.png"
  c "/games/$N/$T/images/800_600/winPanel.png"
  c "/games/$N/$T/images/800_600/symbanim1.jpg"
  c "/games/$N/$T/sounds/reels.mp3"
  c "/games/$N/$T/sounds/onstart.mp3"
  c "/games/$N/basic/images/800_600/loadanim.png"
  c "/games/$N/basic/sounds/btn.mp3"
  c "/games/$N/slot/images/800_600/wins.png"
  c "/games/$N/slot/sounds/bigwin.mp3"
  c "/games/$N/gamble/images/800_600/gamble.png"
  c "/games/$N/$T/src/main.css"
done
echo DIAG3_DONE
