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

UA="Mozilla/5.0 (X11; Linux x86_64; rv:124.0) Gecko/20100101 Firefox/124.0"
c(){ for HOST in https://demo4.scriptcasino.ru https://demo5.scriptcasino.ru; do
  CODE=$(curl -s -o /dev/null -w '%{http_code}' -A "$UA" --max-time 15 "$HOST$1"); echo "$HOST$1 -> $CODE"
done; }
for N in buttonback.png jackpot.png load.jpg load_amatic.png reelanim.png gui_desktop_v17.json mystery_jackpot.json; do
  echo "### $N"
  c "/amatic/images/800_600/$N"
  c "/games/common/images/800_600/$N"
  c "/games/_common/images/800_600/$N"
  c "/static/images/800_600/$N"
  c "/games/$N"
  c "/images/800_600/$N"
done
echo "### version-neighbour check on a working client (AllWaysWin)"
c "/games/AllWaysWinAM/allwayswin/images/800_600/gui_desktop_v27.json"
c "/games/AllWaysWinAM/allwayswin/images/800_600/symbols_small.png"
echo "### alternate shells: what does the DEMO lobby actually load? (iframe page)"
c "/demo/AllWaysWinAM.html"
echo DIAG_ROOT_DONE

B=https://demo4.scriptcasino.ru
echo "### follow /demo/BigPandaAM.html"
curl -s -A "$UA" --max-time 20 -D /tmp/h1.txt -o /tmp/b1.html -c /tmp/ck.txt "$B/demo/BigPandaAM.html"
grep -iE "^location|^set-cookie" /tmp/h1.txt | head -6
head -c 700 /tmp/b1.html; echo
echo "### follow redirects fully"
curl -sL -A "$UA" --max-time 30 -c /tmp/ck.txt -o /tmp/b2.html "$B/demo/BigPandaAM.html"
grep -oE '(iframe[^>]*src|config)=[^"&> ]*' /tmp/b2.html | head -10
grep -oE 'config=[A-Za-z0-9_\-]+' /tmp/b2.html | sort -u | head -5
grep -oE 'href="[^"]*games[^"]*"' /tmp/b2.html | head -8
echo "### homepage structure"
curl -s -A "$UA" --max-time 20 -L -c /tmp/ck2.txt "$B/" -o /tmp/home.html
SIZE=$(stat -c%s /tmp/home.html); echo "home: $SIZE B"
grep -oE '(href|src)="[^"]*"' /tmp/home.html | grep -iE "game|play|demo" | head -12
echo "### settings naming variants for BigPanda (hash 00215223 from its loader ref _00215223.js)"
for P in "settings_00215223.js" "settings_1_00215223.js" "settings_2_00215223.js" "settings_10_00215223.js"; do
  for D in "amarent/src/" "amarent/" "" "settings/"; do
    CODE=$(curl -s -o /dev/null -w '%{http_code}' -A "$UA" --max-time 12 "$B/games/BigPandaAM/$D$P")
    echo "/games/BigPandaAM/$D$P -> $CODE"
  done
done
echo "### if config discovered above, probe it (manual check in log)"
echo DIAG_CFG_DONE

B=https://demo4.scriptcasino.ru
echo "### category page"
curl -s -A "$UA" --max-time 25 -L -c /tmp/ck3.txt "$B/categories/gdgames" -o /tmp/cat.html
SIZE=$(stat -c%s /tmp/cat.html); echo "cat: $SIZE B"
grep -oE 'href="[^"]*"' /tmp/cat.html | grep -iE "amatic|big.?panda|allways|billy|bookof|hot" | sort -u | head -12
grep -oE 'href="[^"]*game[^"]*"' /tmp/cat.html | sort -u | head -12
echo "### search any AM name link"
grep -oiE 'href="[^"]*"[^>]*>[^<]*(bigpanda|big panda|allways win|bells on fire|book of aztec|hot scatter)' /tmp/cat.html | head -8
echo "### try known play-route patterns"
for P in "/game/big-panda" "/games/big-panda" "/play/big-panda" "/game/BigPandaAM" "/slots/big-panda"; do
  CODE=$(curl -s -o /tmp/p.html -w '%{http_code}' -A "$UA" --max-time 20 -L -b /tmp/ck3.txt "$B$P")
  SZ=$(stat -c%s /tmp/p.html 2>/dev/null || echo 0)
  echo "$P -> $CODE ($SZ B)"
  if [ "$CODE" = 200 ] && [ "$SZ" -gt 5000 ]; then
    grep -oE '(iframe[^>]*src|config)=[^"&> ]*' /tmp/p.html | head -8
    grep -oE 'config=[A-Za-z0-9_\-]+' /tmp/p.html | sort -u | head -5
    grep -oE 'src="[^"]*amarent[^"]*"' /tmp/p.html | head -4
    cp /tmp/p.html /tmp/playpage.html
    break
  fi
done
echo "### if playpage captured, dump its amarent iframe line"
if [ -f /tmp/playpage.html ]; then grep -oE '[^"'"'"']*amarent[^"'"'"']*' /tmp/playpage.html | head -6; fi
echo DIAG_PLAY_DONE
