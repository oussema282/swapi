#!/usr/bin/env bash
# Deep-scan probe: scriptcasino demo clients + alternative forges + archive.org
set -uo pipefail
mkdir -p /tmp/hunt && cd /tmp/hunt
exec > >(tee hunt.log) 2>&1
set -x

NAMES=$(curl -sSL "https://raw.githubusercontent.com/oussema282/swapi/arena%2F01a0cba2-swapi/scripts/gapscan/am_hunt.txt" 2>/dev/null || true)
[ -z "$NAMES" ] && NAMES=$(cat "$GITHUB_WORKSPACE/scripts/gapscan/am_hunt.txt" 2>/dev/null || true)
NCOUNT=$(echo "$NAMES" | grep -c . || true)
echo "AM names to hunt: $NCOUNT"

# ---- 1. scriptcasino demo probes ----
UA="Mozilla/5.0 (X11; Linux x86_64; rv:124.0) Gecko/20100101 Firefox/124.0"
for BASE in "https://demo4.scriptcasino.ru" "https://scriptcasino.ru" "https://demo.scriptcasino.ru"; do
  echo "=== probing $BASE ==="
  for N in AdmiralNelsonAM BillyonaireAM BookOfAztecAM; do
    for P in "/games/$N/amarent/" "/games/$N/amarent/index.html" "/demo/$N.html" "/games/$N/"; do
      CODE=$(curl -s -o probe_out.html -w '%{http_code}' -A "$UA" --max-time 25 "$BASE$P" || echo ERR)
      SIZE=$(stat -c%s probe_out.html 2>/dev/null || echo 0)
      echo "$BASE$P -> $CODE ($SIZE B)"
      if [ "$CODE" = "200" ] && [ "$SIZE" -gt 200 ]; then
        head -c 600 probe_out.html; echo; cp probe_out.html "sample_$(echo $BASE$P | md5sum | cut -c1-6).html"
      fi
    done
  done
done

# ---- 2. alternative forges ----
echo "=== gitlab search ==="
for Q in goldsvet "vanguard casino" "casino 8.5" amatic; do
  curl -s --max-time 30 "https://gitlab.com/api/v4/projects?search=$(python3 -c "import urllib.parse,sys;print(urllib.parse.quote('$Q'))")&per_page=50" \
    | python3 -c "import json,sys
try:
  d=json.load(sys.stdin)
  for p in d: print(p['path_with_namespace'], p.get('default_branch'), p.get('repository_size') or '')
except Exception as e: print('parse fail', e)" || true
done

echo "=== gitee search ==="
curl -s --max-time 30 "https://gitee.com/api/v5/search/repositories?q=goldsvet&per_page=50" | head -c 2000; echo
curl -s --max-time 30 "https://gitee.com/api/v5/search/repositories?q=casino%20slot&per_page=30" | python3 -c "import json,sys
try:
  d=json.load(sys.stdin)
  for p in d: print(p.get('full_name'), p.get('default_branch'))
except Exception as e: print('parse fail', e)" || true

echo "=== codeberg search ==="
curl -s --max-time 30 "https://codeberg.org/api/v1/repos/search?q=goldsvet&limit=30" | head -c 1500; echo

echo "=== archive.org items ==="
curl -s --max-time 30 "https://archive.org/advancedsearch.php?q=goldsvet+OR+%22casino+games+pack%22&fl%5B%5D=identifier&fl%5B%5D=item_size&rows=50&output=json" | python3 -c "import json,sys
try:
  d=json.load(sys.stdin)
  for doc in d['response']['docs']: print(doc.get('identifier'), doc.get('item_size'))
except Exception as e: print('parse fail', e)" || true

echo "PROBE DONE"
