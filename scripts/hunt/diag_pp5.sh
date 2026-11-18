#!/usr/bin/env bash
# gs2c bundle chain depth-2 + endpoint config + shared-common check
set -uo pipefail
exec > >(tee /tmp/diag.log) 2>&1
set -x
UA="Mozilla/5.0 (X11; Linux x86_64; rv:124.0) Gecko/20100101 Firefox/124.0"
B=https://demo4.scriptcasino.ru
T=/tmp/pp5
mkdir -p $T

getf(){ # getf <url> <outfile> -> echoes "$CODE $SZ"
  CODE=$(curl -s -o "$2" -w '%{http_code}' -A "$UA" --connect-timeout 6 --max-time 60 "$1"); SZ=$(stat -c%s "$2" 2>/dev/null || echo 0); echo "$CODE $SZ"
}

echo "=== 1. html5-script-external.js: all referenced files ==="
C=$(getf "$B/games/BigBassBonanza/gs2c/common/js/html5-script-external.js" $T/ext.js); echo "ext.js -> $C"
grep -oE '"[^"]+\.(js|css|json|png|jpg)"' $T/ext.js | tr -d '"' | sort -u | head -20
grep -oE "write[^;]{0,120}" $T/ext.js | head -5

echo "=== 2. html5Game.html inline config / refs ==="
C=$(getf "$B/games/BigBassBonanza/gs2c/html5Game.html" $T/bbb.html); echo "bbb html -> $C"
grep -oE '(serviceURL|service_url|gameValue|gameid|gameId|cdn|asseturl|assetsUrl|lang|channel)[=:][^,;>]{0,60}' $T/bbb.html | head -20
grep -oE '(src|href)="[^"]+"' $T/bbb.html | sort -u | head -12
grep -oE '"[A-Za-z0-9_/.-]+\.(js|json|css)"' $T/bbb.html | sort -u | head -20

echo "=== 3. depth-2: fetch + parse the bundles ext.js loads ==="
REFS=$(grep -oE '"[^"]+\.js"' $T/ext.js | tr -d '"' | grep -v '^http' | sort -u | head -8)
for R in $REFS; do
  case "$R" in
    /*) U="$B$R" ;;
    *) U="$B/games/BigBassBonanza/gs2c/common/js/$R" ;;
  esac
  C=$(getf "$U" $T/l2.js); echo "L2 $R -> $C"
  if [ "${C#* }" -gt 5000 ]; then
    grep -oE '"[^"]+\.(js|json|css)"' $T/l2.js | tr -d '"' | sort -u | head -12
  fi
done

echo "=== 4. common-dir sharing check ==="
C=$(getf "$B/games/BookofTut/gs2c/common/js/html5-script-external.js" $T/tut_ext.js); echo "BookofTut ext.js -> $C"
C=$(getf "$B/gs2c/common/js/html5-script-external.js" $T/root_ext.js); echo "root /gs2c/common/... -> $C"

echo "=== 5. PM shell full ref dump ==="
C=$(getf "$B/games/AncientEgyptPM/index.html" $T/aepm.html); echo "aepm index.html -> $C"
grep -oE '(src|href)="[^"]+"' $T/aepm.html | sort -u | head -20
grep -oE '"[A-Za-z0-9_/.-]+\.(js|json|css)"' $T/aepm.html | sort -u | head -20

echo PP5_DIAG_DONE
