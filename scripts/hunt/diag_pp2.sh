#!/usr/bin/env bash
# Pragmatic/other-provider play-route + pagination + client structure
set -uo pipefail
exec > >(tee /tmp/diag.log) 2>&1
set -x
UA="Mozilla/5.0 (X11; Linux x86_64; rv:124.0) Gecko/20100101 Firefox/124.0"
B=https://demo4.scriptcasino.ru

get(){ CODE=$(curl -s -o /tmp/pp2.bin -w '%{http_code}' -A "$UA" --connect-timeout 6 --max-time 25 "$B$1"); SZ=$(stat -c%s /tmp/pp2.bin 2>/dev/null || echo 0); }

echo "=== 1. play page for pragmatic games (iframe src?) ==="
for N in AncientEgyptPM BigBassBonanza BookofTut AztecGemsPM; do
  get "/demo/$N?api_exit=/"
  echo "## /demo/$N -> $CODE (${SZ}B)"
  if [ "$CODE" = 200 ]; then grep -oE '(iframe[^>]*src="[^"]*"|/games/[A-Za-z0-9_/.-]+|window\.location[^;]{0,80})' /tmp/pp2.bin | sort -u | head -8; fi
done

echo "=== 2. pagination of categories ==="
for SLUG in pragmatic egt netgame playtech netent novomatic betsoft; do
  get "/categories/$SLUG?page=2"
  N2=0; [ "$CODE" = 200 ] && N2=$(grep -oE '/demo/[A-Za-z0-9_.-]+' /tmp/pp2.bin | sort -u | wc -l)
  get "/categories/$SLUG?page=3"
  N3=0; [ "$CODE" = 200 ] && N3=$(grep -oE '/demo/[A-Za-z0-9_.-]+' /tmp/pp2.bin | sort -u | wc -l)
  echo "SLUG $SLUG page2=$N2 page3=$N3"
done

echo "=== 3. full pragmatic name list across pages ==="
for P in 1 2 3 4 5; do
  get "/categories/pragmatic?page=$P"
  if [ "$CODE" = 200 ]; then
    NAMES=$(grep -oE '/demo/[A-Za-z0-9_.-]+' /tmp/pp2.bin | sed 's#/demo/##' | sort -u | tr '\n' ' ')
    echo "page$P: $NAMES"
  fi
done

echo "=== 4. client structure candidates for BigBassBonanza ==="
for U in "/games/BigBassBonanza/" "/games/BigBassBonanza/index.html" "/games/BigBassBonanza/pm/index.html" \
         "/games/BigBassBonanza/pp/index.html" "/games/BigBassBonanza/game/index.html" \
         "/games/BigBassBonanza/src/index.html" "/games/BigBassBonanza/bigbassbonanza/index.html" \
         "/games/BigBassBonanza/Pragmatic/index.html" "/games/BigBassBonanza/amarent/index.html" \
         "/games/BigBassBonanzaPM/" "/games/BigBassBonanzaPM/index.html" "/games/BigBassBonanzaPM/amarent/index.html"; do
  get "$U"
  echo "$U -> $CODE ($SZ B)"
done

echo PP2_DIAG_DONE
