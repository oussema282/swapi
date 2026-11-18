#!/usr/bin/env bash
# versions.info / customizations.info manifests + heidi non-AM client inventory
set -uo pipefail
exec > >(tee /tmp/diag.log) 2>&1
set -x
UA="Mozilla/5.0 (X11; Linux x86_64; rv:124.0) Gecko/20100101 Firefox/124.0"
B=https://demo4.scriptcasino.ru
T=/tmp/pp11; mkdir -p $T

getf(){ CODE=$(curl -s -o "$2" -w '%{http_code}' -A "$UA" --connect-timeout 6 --max-time 60 "$1"); SZ=$(stat -c%s "$2" 2>/dev/null || echo 0); echo "$CODE $SZ"; }

DP="/games/BigBassBonanza/gs2c/common/games-html5/games/vs/vs10bbbonanza"
echo "=== 1. versions.info ==="
C=$(getf "$B/games/BigBassBonanza/gs2c/res/versions.info" $T/versions.info); echo "$C"
head -c 2000 $T/versions.info; echo
echo "--- lines:"
wc -l $T/versions.info 2>/dev/null; head -30 $T/versions.info 2>/dev/null

echo "=== 2. customizations.info ==="
for U in "$DP/desktop/customizations.info" "$DP/customizations.info" "$DP/desktop/customizations/" ; do
  C=$(getf "$B$U" $T/c.info); echo "$U -> $C"
  if [ "${C%% *}" = 200 ]; then head -c 1500 $T/c.info; echo; fi
done

echo "=== 3. heidi repo: non-AM client inventory ==="
curl -sS "https://api.github.com/repos/heidi-luong1109/game/contents/public/games" -o $T/heidi.json
python3 - <<'PY'
import json
try:
    d = json.load(open('/tmp/pp11/heidi.json'))
    names = sorted(x['name'] for x in d if x['type'] == 'dir')
    print('heidi client count:', len(names))
    import re
    suffix = {}
    for n in names:
        m = re.search(r'([A-Z]{2,4})$', n)
        if m: suffix.setdefault(m.group(1), []).append(n)
        else: suffix.setdefault('NONE', []).append(n)
    for k, v in sorted(suffix.items()):
        print(f'  suffix {k}: {len(v)} -> {v[:6]}')
except Exception as e:
    print('heidi listing failed:', e)
PY

echo "=== 4. does heidi have a PP-style client (gs2c layout)? ==="
curl -sS "https://api.github.com/repos/heidi-luong1109/game/contents/public/games/GoldenStampede" -o $T/gs.json 2>/dev/null
python3 - <<'PY'
import json
try:
    d = json.load(open('/tmp/pp11/gs.json'))
    print([x['name'] for x in d][:20])
except Exception as e:
    print('probe failed:', e)
PY

echo PP11_DIAG_DONE
