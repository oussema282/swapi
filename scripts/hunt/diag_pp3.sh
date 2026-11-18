#!/usr/bin/env bash
# Client structure + sizes: gs2c (real PP) vs goldsvet PM shell
set -uo pipefail
exec > >(tee /tmp/diag.log) 2>&1
set -x
UA="Mozilla/5.0 (X11; Linux x86_64; rv:124.0) Gecko/20100101 Firefox/124.0"
B=https://demo4.scriptcasino.ru

get(){ CODE=$(curl -s -o /tmp/pp3.bin -w '%{http_code}' -A "$UA" --connect-timeout 6 --max-time 40 "$B$1"); SZ=$(stat -c%s /tmp/pp3.bin 2>/dev/null || echo 0); }

echo "=== 1. goldsvet PM shell: AncientEgyptPM ==="
for U in "/games/AncientEgyptPM/index.html" "/games/AncientEgyptPM/addon.js" "/games/AncientEgyptPM/device.js" "/games/AncientEgyptPM/js/game.js"; do
  get "$U"; echo "$U -> $CODE ($SZ B)"
  if [ "$CODE" = 200 ] && [ "$SZ" -lt 30000 ] && [ "$SZ" -gt 100 ]; then head -c 900 /tmp/pp3.bin; echo; echo ---; fi
done

echo "=== 2. real PP client: BigBassBonanza gs2c ==="
get "/games/BigBassBonanza/gs2c/html5Game.html"
echo "html5Game.html -> $CODE ($SZ B)"
head -c 1200 /tmp/pp3.bin; echo; echo ---
grep -oE '(src|href)="[^"]+"' /tmp/pp3.bin | head -20
echo "=== 3. probe first-level bundle refs of BookofTut ==="
get "/games/BookofTut/gs2c/html5Game.html"
grep -oE '(src|href)="[^"]+"' /tmp/pp3.bin | head -20
for R in $(grep -oE 'src="[^"]+"' /tmp/pp3.bin | sed 's/src="//;s/"$//' | head -6); do
  case "$R" in
    http*) get "$R" ;;
    /*) get "$R" ;;
    *) get "/games/BookofTut/gs2c/$R" ;;
  esac
  echo "REF $R -> $CODE ($SZ B)"
done

echo "=== 4. PP client total-size probe (sample 6 games): html5Game + guesses ==="
for N in BigBassBonanza BookofTut SweetBonanza GatesOfOlympus WolfGold ReleaseTheKraken; do
  get "/games/$N/gs2c/html5Game.html"; echo "$N gs2c/html5Game.html -> $CODE ($SZ B)"
  get "/games/$N/gs2c/js/game.min.js"; echo "$N gs2c/js/game.min.js -> $CODE ($SZ B)"
done

echo "=== 5. PM games list candidates (suffix PM / goldsvet-native) ==="
for N in FruitPartyPM WolfGoldPM GatesOfOlympusPM SweetBonanzaPM JohnHunterAndTheTombOfTheScarabQueenPM; do
  get "/games/$N/index.html"; echo "$N index.html -> $CODE ($SZ B)"
done

echo PP3_DIAG_DONE
