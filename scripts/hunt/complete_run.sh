#!/usr/bin/env bash
# Complete the AM mirror: verify vs JS manifests, fill gaps from the demo, verify again, release
set -uo pipefail
mkdir -p /tmp/comp && cd /tmp/comp
exec > >(tee complete.log) 2>&1
set -x
REPO="${REPO:-oussema282/swapi}"

# current mirror state
mkdir -p prev
gh release download amatic-clients -R "$REPO" -D prev
rm -rf mirror
unzip -q prev/amatic-clients.zip -d .
echo "=== verify (before) ==="
python3 "$GITHUB_WORKSPACE/scripts/hunt/amverify.py" mirror /tmp/comp/verify_before.json

echo "=== fill missing from demo ==="
python3 "$GITHUB_WORKSPACE/scripts/hunt/mirror3.py" mirror /tmp/comp/verify_before.json 8
tail -8 mirror/_fill_summary.txt || true

echo "=== verify (after) ==="
python3 "$GITHUB_WORKSPACE/scripts/hunt/amverify.py" mirror /tmp/comp/verify_after.json
cp /tmp/comp/verify_after.json mirror/_verify.json
cp /tmp/comp/verify_before.json mirror/_verify_before.json
python3 - <<'PY'
import json
r=json.load(open('/tmp/comp/verify_after.json'))
ok=[g for g,x in r.items() if x['complete']]
bad={g:x['missing_hard'][:8] for g,x in r.items() if not x['complete']}
json.dump({'complete': sorted(ok), 'incomplete': bad}, open('/tmp/comp/final_status.json','w'), indent=1)
print('FINAL COMPLETE:', len(ok))
for g,m in bad.items(): print('  still incomplete:', g, m)
PY

du -sh mirror
rm -f amatic-clients.zip part_*
zip -qr amatic-clients.zip mirror
SIZE=$(stat -c%s amatic-clients.zip); SHA=$(sha256sum amatic-clients.zip | awk '{print $1}')
echo "MIRROR ZIP: $SIZE bytes sha256=$SHA"
if [ "$SIZE" -ge 2000000000 ]; then
  split -b 1900000000 -d amatic-clients.zip part_; FILES="part_*"
else FILES="amatic-clients.zip"; fi

cat > notes.md <<EOF
**Amatic (AM) client mirror v3 — completed against per-game JS manifests** (\$(date -u +%FT%TZ))

- Every game verified against its own game-JS asset references (dotted refs = hard requirements)
- Complete games: \$(python3 -c "import json;print(len(json.load(open('/tmp/comp/final_status.json'))['complete']))")
- Still incomplete (hidden in builds): see \`final_status.json\` inside the log branch
- zip: $SIZE bytes — sha256 \`$SHA\`
EOF
gh release upload amatic-clients $FILES -R "$REPO" --clobber
gh release edit amatic-clients -R "$REPO" --notes-file notes.md >/dev/null
gh release view amatic-clients -R "$REPO" --json assets --jq '.assets[] | {name,size,state}'
echo "COMPLETE RUN OK"
