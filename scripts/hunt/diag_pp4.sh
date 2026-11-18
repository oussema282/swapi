#!/usr/bin/env bash
# Full game inventory hunt (page JSON/API) + gs2c bundle chain + PM shell refs
set -uo pipefail
exec > >(tee /tmp/diag.log) 2>&1
set -x
UA="Mozilla/5.0 (X11; Linux x86_64; rv:124.0) Gecko/20100101 Firefox/124.0"
B=https://demo4.scriptcasino.ru

get(){ CODE=$(curl -s -o /tmp/pp4.bin -w '%{http_code}' -A "$UA" --connect-timeout 6 --max-time 40 "$B$1"); SZ=$(stat -c%s /tmp/pp4.bin 2>/dev/null || echo 0); }

echo "=== 1. does the category page embed the full game list? ==="
get "/categories/pragmatic"
echo "page -> $CODE ($SZ B)"
for NM in SweetBonanza WolfGold FruitParty StrawberryCocktail; do
  C=$(grep -c "$NM" /tmp/pp4.bin || true); echo "  contains $NM: $C"
done
echo "--- embedded state shapes:"
grep -oE 'window\.[A-Za-z_$]+ ?=' /tmp/pp4.bin | sort -u | head -10
grep -oE '"(game_name|gameName|name)":"[A-Za-z0-9_]+"' /tmp/pp4.bin | sort -u | head -12
echo "--- slug-pattern tokens in page:"
grep -oE '[A-Za-z0-9]+_(PM|EGT|NG|NET|PT|BS|KA|GT|JP|AM)\b' /tmp/pp4.bin | sort -u | wc -l

echo "=== 2. API endpoints ==="
for U in "/api/games" "/api/games/all" "/api/category/pragmatic" "/api/menu" "/api/init" "/api/game/list" "/api/categories"; do
  get "$U"
  echo "$U -> $CODE ($SZ B)"
  if [ "$CODE" = 200 ] && [ "$SZ" -lt 400000 ] && [ "$SZ" -gt 60 ]; then head -c 300 /tmp/pp4.bin; echo; fi
done

echo "=== 3. gs2c bootstrap chain ==="
get "/games/BigBassBonanza/gs2c/common/js/html5-script-external.js"
echo "html5-script-external.js -> $CODE ($SZ B)"
head -c 2500 /tmp/pp3.bin 2>/dev/null; head -c 2500 /tmp/pp4.bin; echo; echo ---
for R in $(grep -oE '"[^"]+\.(js|css|json)"' /tmp/pp4.bin | tr -d '"' | sort -u | head -10); do
  case "$R" in
    /*) get "$R" ;;
    http*) get "$R" ;;
    *) get "/games/BigBassBonanza/gs2c/common/js/$R" ;;
  esac
  echo "REF $R -> $CODE ($SZ B)"
done

echo "=== 4. AncientEgyptPM shell script refs ==="
get "/games/AncientEgyptPM/index.html"
grep -oE '(src|href)="[^"]+"' /tmp/pp4.bin | sort -u | head -30
echo PP4_DIAG_DONE
