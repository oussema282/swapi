#!/usr/bin/env bash
# /demo/<Name>?api_exit=/ -> the real play page -> iframe URL + config param
set -uo pipefail
UA="Mozilla/5.0 (X11; Linux x86_64; rv:124.0) Gecko/20100101 Firefox/124.0"
B=https://demo4.scriptcasino.ru
curl -s -A "$UA" --max-time 25 -L -c /tmp/ck5.txt "$B/demo/AllWaysWinAM?api_exit=/" -o /tmp/play.html
echo "play page: $(stat -c%s /tmp/play.html) B"
grep -oE '[^"'"'"']*amarent[^"'"'"']*' /tmp/play.html | head -5
grep -oE 'config=[A-Za-z0-9_%\-.]+' /tmp/play.html | sort -u | head -5
grep -oE 'iframe[^>]*' /tmp/play.html | head -3
echo "### settings files with discovered config"
CFG=$(grep -oE 'config=([A-Za-z0-9_%\-.]+)' /tmp/play.html | head -1 | sed 's/config=//')
echo "CFG=[$CFG]"
for NAME in "settings_${CFG}_00296940.js" "settings_${CFG}_00156940.js"; do
  for D in "amarent/src/" "amarent/"; do
    CODE=$(curl -s -o /tmp/s.txt -w '%{http_code}' -A "$UA" --max-time 15 "$B/games/AllWaysWinAM/$D$NAME")
    SZ=$(stat -c%s /tmp/s.txt 2>/dev/null || echo 0)
    echo "/games/AllWaysWinAM/$D$NAME -> $CODE ($SZ B)"
    if [ "$CODE" = 200 ] && [ "$SZ" -gt 50 ]; then head -c 300 /tmp/s.txt; echo; cp /tmp/s.txt /tmp/settings_sample.js; fi
  done
done
echo DIAG_DEMO_DONE
