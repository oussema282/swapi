#!/usr/bin/env bash
# Walk the demo lobby: gdgames category -> AM game page -> iframe URL (config param)
set -uo pipefail
UA="Mozilla/5.0 (X11; Linux x86_64; rv:124.0) Gecko/20100101 Firefox/124.0"
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
