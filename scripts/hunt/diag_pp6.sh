#!/usr/bin/env bash
# Dump the inline loader JS of both shell types to find the real bundle names
set -uo pipefail
exec > >(tee /tmp/diag.log) 2>&1
set -x
UA="Mozilla/5.0 (X11; Linux x86_64; rv:124.0) Gecko/20100101 Firefox/124.0"
B=https://demo4.scriptcasino.ru
T=/tmp/pp6; mkdir -p $T

getf(){ CODE=$(curl -s -o "$2" -w '%{http_code}' -A "$UA" --connect-timeout 6 --max-time 60 "$1"); SZ=$(stat -c%s "$2" 2>/dev/null || echo 0); echo "$CODE $SZ"; }

echo "=== 1. BigBassBonanza gs2c/html5Game.html: script-ish lines ==="
C=$(getf "$B/games/BigBassBonanza/gs2c/html5Game.html" $T/bbb.html); echo "$C"
python3 - <<'PY'
import re
h = open('/tmp/pp6/bbb.html', encoding='utf-8', errors='replace').read()
h = re.sub(r'<style[\s\S]*?</style>', '', h, flags=re.I)
h = re.sub(r'<svg[\s\S]*?</svg>', '', h, flags=re.I)
for m in re.finditer(r'<script[\s\S]*?</script>', h, flags=re.I):
    b = m.group(0)
    if 'src=' in b[:200]:
        continue
    body = b
    if len(body) > 3000:
        # print lines that mention js loads or config
        keep = [l for l in body.splitlines() if re.search(r'\.js|UHT_CONFIG|document\.write|createElement|src', l)]
        body = '\n'.join(keep[:60])
    print('----- script block (%d chars, kept lines):' % len(b))
    print(body[:3000])
PY

echo "=== 2. all string literals with js/ or bundle-ish names ==="
grep -oE '"[A-Za-z0-9_./-]{4,80}"' $T/bbb.html | sort -u | grep -E "js|bundle|game|lang|skin|common" | head -30

echo "=== 3. AncientEgyptPM index.html script-ish lines ==="
C=$(getf "$B/games/AncientEgyptPM/index.html" $T/aepm.html); echo "$C"
python3 - <<'PY'
import re
h = open('/tmp/pp6/aepm.html', encoding='utf-8', errors='replace').read()
h = re.sub(r'<style[\s\S]*?</style>', '', h, flags=re.I)
for m in re.finditer(r'<script[\s\S]*?</script>', h, flags=re.I):
    b = m.group(0)
    if len(b) > 3000:
        keep = [l for l in b.splitlines() if re.search(r'\.js|config|document\.write|createElement|src|load', l)]
        b = '\n'.join(keep[:60])
    print('----- script block (%d chars):' % len(m.group(0)))
    print(b[:2500])
PY
grep -oE '"[A-Za-z0-9_./-]{4,80}"' $T/aepm.html | sort -u | grep -E "js|game|lang|skin|common|gs2c" | head -30

echo "=== 4. candidate bundle probes ==="
for U in "/games/BigBassBonanza/gs2c/js/game.js" "/games/BigBassBonanza/gs2c/js/index.js" \
         "/games/BigBassBonanza/gs2c/common/js/bootstrap.js" "/games/BigBassBonanza/gs2c/bootstrap.js" \
         "/games/BigBassBonanza/gs2c/js/UHTGame.js" "/games/BigBassBonanza/gs2c/config.json" \
         "/games/BigBassBonanza/gs2c/js/config.js" "/games/wurfl.js" "/js/wurfl.js"; do
  C=$(getf "$B$U" $T/p.bin); echo "$U -> $C"
done

echo PP6_DIAG_DONE
