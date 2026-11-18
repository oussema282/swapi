#!/usr/bin/env bash
# Discover which providers/categories the demo serves and how their clients are structured
set -uo pipefail
exec > >(tee /tmp/diag.log) 2>&1
set -x
UA="Mozilla/5.0 (X11; Linux x86_64; rv:124.0) Gecko/20100101 Firefox/124.0"
B=https://demo4.scriptcasino.ru

get(){ CODE=$(curl -s -o /tmp/pp.bin -w '%{http_code}' -A "$UA" --connect-timeout 6 --max-time 25 "$B$1"); SZ=$(stat -c%s /tmp/pp.bin 2>/dev/null || echo 0); }

echo "=== 1. category slug probe ==="
for SLUG in pragmatic pragmaticplay pg pgsoft slots-pp booongo belatra egt egt-digital netgame evoplay playson nolimitcity nolimit push pushgaming relax relaxgaming yggdrasil netent microgaming novomatic playtech betsoft aristocrat tomhorn tomhornagaming spinmatic redrake megajack gaminator igrunic unicum konami merkur multigaminator casino slots popular new hot jackpot live all games; do
  get "/categories/$SLUG"
  N=0
  if [ "$CODE" = 200 ]; then N=$(grep -oE '/demo/[A-Za-z0-9_.-]+' /tmp/pp.bin | sort -u | wc -l); fi
  echo "SLUG $SLUG -> $CODE (${SZ}B, demo-links=$N)"
done

echo "=== 2. names per promising category ==="
for SLUG in pragmatic pragmaticplay pg pgsoft booongo belatra egt netgame evoplay playson nolimitcity push relax yggdrasil netent novomatic playtech betsoft tomhorn spinmatic slots popular all; do
  get "/categories/$SLUG"
  if [ "$CODE" = 200 ]; then
    NAMES=$(grep -oE '/demo/[A-Za-z0-9_.-]+' /tmp/pp.bin | sed 's#/demo/##' | sort -u | tr '\n' ' ')
    if [ -n "$NAMES" ]; then echo "## $SLUG: $NAMES"; fi
  fi
done

echo "=== 3. structure sample of first new-provider game ==="
get "/categories/pragmatic"
FIRST=$(grep -oE '/demo/[A-Za-z0-9_.-]+' /tmp/pp.bin | sed 's#/demo/##' | sort -u | head -1)
echo "first pragmatic game: $FIRST"
if [ -n "$FIRST" ]; then
  for U in "/games/$FIRST/" "/games/$FIRST/index.html" "/games/$FIRST/sw.js" "/games/$FIRST/index.js"; do
    get "$U"
    echo "$U -> $CODE ($SZ B)"
    if [ "$CODE" = 200 ] && [ "$SZ" -gt 100 ] && [ "$SZ" -lt 200000 ]; then head -c 700 /tmp/pp.bin; echo; echo '---'; fi
  done
fi

echo "=== 4. category page shape (amatic as reference) ==="
get "/categories/amatic"
echo "/categories/amatic -> $CODE (${SZ}B)"
head -c 500 /tmp/pp.bin; echo

echo PP_DIAG_DONE
