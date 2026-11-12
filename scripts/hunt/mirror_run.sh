#!/usr/bin/env bash
# Mirror all missing AM clients from the scriptcasino demo + probe gitlab leads
set -uo pipefail
mkdir -p /tmp/hunt2 && cd /tmp/hunt2
exec > >(tee mirror.log) 2>&1
set -x

python3 "$GITHUB_WORKSPACE/scripts/hunt/mirror.py" \
  "$GITHUB_WORKSPACE/scripts/gapscan/am_hunt.txt" /tmp/hunt2/mirror 10
tail -5 /tmp/hunt2/mirror/_summary.txt || true

echo "=== gitlab candidate tree scans ==="
scan_gitlab() {
  local repo="$1"
  local enc=$(python3 -c "import urllib.parse,sys;print(urllib.parse.quote(sys.argv[1],safe=''))" "$repo")
  local pid=$(curl -s --max-time 25 "https://gitlab.com/api/v4/projects/$enc" | python3 -c "import json,sys
try: print(json.load(sys.stdin)['id'])
except Exception: print('')" 2>/dev/null)
  [ -z "$pid" ] && { echo "$repo :: no id"; return; }
  for page in 1 2 3 4 5 6 7 8 9 10; do
    curl -s --max-time 25 "https://gitlab.com/api/v4/projects/$pid/repository/tree?recursive=true&per_page=100&page=$page" \
      | python3 -c "import json,sys
try:
  d=json.load(sys.stdin)
  if isinstance(d,list):
    for t in d:
      p=t.get('path','')
      if 'public/games/' in p or 'provider/amatic/' in p: print(p)
except Exception: pass" || true
  done | sort -u > "/tmp/hunt2/gl_$(echo $repo | tr '/' '_').txt"
  echo "$repo :: $(wc -l < /tmp/hunt2/gl_$(echo $repo | tr '/' '_').txt) game-ish paths"
}
scan_gitlab "casinoman/handman/oldgaymes"
scan_gitlab "pmatic1/lab04-amatic-imijak"
scan_gitlab "skyline-labs/iamatic"
scan_gitlab "mintscripts/goldsvet-7-5-casino-script-php-html5-games-open-source"
scan_gitlab "mintscripts_studio/goldsvet-casino-open-source-engine-public"
scan_gitlab "kamrul-hasan2/goldsvet"
scan_gitlab "pasquqlale/Goldsvet-1Win-Sports-Script-8-5"
for f in /tmp/hunt2/gl_*.txt; do echo "--- $f"; grep -E '(AM|amatic)/' "$f" | head -12; done

# ---------- package the mirror ----------
cd /tmp/hunt2
du -sh mirror
rm -f amatic-clients.zip part_*
zip -qr amatic-clients.zip mirror
SIZE=$(stat -c%s amatic-clients.zip); SHA=$(sha256sum amatic-clients.zip | awk '{print $1}')
echo "MIRROR ZIP: $SIZE bytes sha256=$SHA"
if [ "$SIZE" -ge 2000000000 ]; then
  split -b 1900000000 -d amatic-clients.zip part_
  FILES="part_*"
else
  FILES="amatic-clients.zip"
fi

cat > notes.md <<EOF
**Amatic (AM) client mirror** — auto-harvested from the scriptcasino demo deployment (\$(date -u +%FT%TZ)).

- Games mirrored: see \`mirror/_summary.txt\` inside the zip
- Use: merge \`mirror/<Name>/*\` into \`public/games/<Name>/\` (the replit-build pipeline does this automatically)
- zip: $SIZE bytes — sha256 \`$SHA\`
EOF
gh release view amatic-clients -R "$REPO" >/dev/null 2>&1 \
  && gh release upload amatic-clients $FILES -R "$REPO" --clobber \
  || gh release create amatic-clients $FILES -R "$REPO" \
       --title "Amatic (AM) clients — mirror fill" --notes-file notes.md
gh release edit amatic-clients -R "$REPO" --notes-file notes.md >/dev/null
gh release view amatic-clients -R "$REPO" --json assets --jq '.assets[] | {name,size,state}'
echo "MIRROR DONE"
