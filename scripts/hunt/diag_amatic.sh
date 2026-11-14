#!/usr/bin/env bash
# /categories/amatic -> find game slugs / API -> play URL with config
set -uo pipefail
UA="Mozilla/5.0 (X11; Linux x86_64; rv:124.0) Gecko/20100101 Firefox/124.0"
B=https://demo4.scriptcasino.ru
curl -s -A "$UA" --max-time 25 -L -c /tmp/ck4.txt "$B/categories/amatic" -o /tmp/am.html
echo "amatic cat: $(stat -c%s /tmp/am.html) B"
grep -oiE 'href="[^"]*"' /tmp/am.html | grep -viE "categories|frontend|fonts|\.css|\.svg|bonuses|loyalty|hall|vip|\.png|\.js" | sort -u | head -20
echo "### embedded data / api hints"
grep -oE 'gameUrl[^;]{0,120}' /tmp/am.html | head -6
grep -oE '/api/[A-Za-z0-9_/?=&.-]+' /tmp/am.html | sort -u | head -15
grep -oE 'data-[a-z-]+="[^"]*(big|panda|allways|bells)[^"]*"' /tmp/am.html | head -8
grep -oE '"/[a-z-]+/[a-z0-9-]+"' /tmp/am.html | grep -iE "panda|allways|bells|aztec|scatter|billy" | sort -u | head -12
echo "### direct iframe pattern in page"
grep -oE 'amarent[^"]*' /tmp/am.html | head -5
echo "### try game open endpoints for BigPanda"
for P in "/games/open/BigPandaAM" "/api/games/BigPandaAM" "/api/game/BigPandaAM" "/game/BigPandaAM/play" "/games/BigPandaAM/play" "/play/BigPandaAM"; do
  CODE=$(curl -s -o /tmp/q.txt -w '%{http_code}' -A "$UA" --max-time 20 -L -b /tmp/ck4.txt "$B$P")
  SZ=$(stat -c%s /tmp/q.txt 2>/dev/null || echo 0)
  echo "$P -> $CODE ($SZ B)"
  if [ "$CODE" = 200 ] && [ "$SZ" -lt 300000 ]; then grep -oE 'config=[A-Za-z0-9_\-]+|amarent[^"]*' /tmp/q.txt | head -6; fi
done
echo "### XHR-style open (common goldsvet route /game/open/{id} with session)"
curl -s -A "$UA" --max-time 20 -b /tmp/ck4.txt -L "$B/game/list" -o /tmp/gl.txt -w 'list: %{http_code} %{size_download}\n'
head -c 300 /tmp/gl.txt; echo
echo DIAG_AMATIC_DONE
