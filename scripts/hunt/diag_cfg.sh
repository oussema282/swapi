#!/usr/bin/env bash
# Discover the demo's real ?config= value by following its play-page chain
set -uo pipefail
exec > >(tee /tmp/diag.log) 2>&1
UA="Mozilla/5.0 (X11; Linux x86_64; rv:124.0) Gecko/20100101 Firefox/124.0"
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
