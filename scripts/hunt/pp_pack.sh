#!/usr/bin/env bash
# PP/multi-provider pipeline: rar -> discover clients on demo -> harvest (size-capped,
# pragmatic first) -> mirror release. The pack build (build_amatic.sh) consumes the mirror.
set -euo pipefail
mkdir -p /tmp/pp && cd /tmp/pp
exec > >(tee pp.log) 2>&1
set -x
REPO="${REPO:-oussema282/swapi}"
HUNT="$GITHUB_WORKSPACE/scripts/hunt"

# ---- 1. source rar (engine/blade inventory) ----
mkdir -p ex prev
FID_LIST=(1GrVmYgMOMMP3Nhj-tdgrSsdhlUxUy8Ov 1G36TB-guho76QTnBFaeYOGRQa2JkXe7I 1M504Ai3gwQ8bGSpFVraXEkb2o2811MmU)
EXPECTED_SHA=fccadd9f9fafb957826c32d47721b37182f30597048f20413da1f022977849fb
EXPECTED_SIZE=580769515
for ATTEMPT in 0 1 2 3 4 5; do
  FID=${FID_LIST[ATTEMPT % 3]}
  curl -sL -c ck.txt "https://drive.google.com/uc?export=download&id=${FID}" -o page.html || true
  python3 - <<'PY'
import re
try:
    html=open('/tmp/pp/page.html',errors='ignore').read()
    m=re.search(r'action="([^"]+)"',html); f=re.findall(r'name="([^"]+)" value="([^"]*)"',html)
    open('/tmp/pp/dl_url.txt','w').write(m.group(1)+"?"+("&".join(f"{k}={v}" for k,v in f)) if m else "")
except Exception:
    open('/tmp/pp/dl_url.txt','w').write("")
PY
  [ -s dl_url.txt ] && curl -sL -b ck.txt "$(cat dl_url.txt)" -o payload.rar || true
  ACTUAL=$(sha256sum payload.rar 2>/dev/null | awk '{print $1}' || echo)
  ACTUAL_SIZE=$(stat -c%s payload.rar 2>/dev/null || echo 0)
  [ "$ACTUAL" = "$EXPECTED_SHA" ] && [ "$ACTUAL_SIZE" = "$EXPECTED_SIZE" ] && { echo "rar verified"; break; }
  echo "attempt $ATTEMPT: sha=${ACTUAL:0:8} size=$ACTUAL_SIZE — retrying"
  sleep $((ATTEMPT * 10 + 5))
done
ACTUAL=$(sha256sum payload.rar 2>/dev/null | awk '{print $1}' || echo)
[ "$ACTUAL" = "$EXPECTED_SHA" ] || { echo "FATAL: rar download failed"; exit 1; }

if [ ! -x /tmp/pp/unrar ]; then
  curl -sSL -o unrar.tar.gz https://codeload.github.com/pmachapman/unrar/tar.gz/refs/heads/master
  tar xzf unrar.tar.gz
  make -C unrar-master -j2 -s
  cp unrar-master/unrar /tmp/pp/unrar
fi
cd ex && /tmp/pp/unrar x -y ../payload.rar >/dev/null && cd ..
SITE=$(find ex -path '*d60/d60/artisan' -type f | head -1 | xargs dirname)
[ -n "$SITE" ] || { echo "FATAL: artisan not found"; exit 1; }
echo "SITE=$SITE"

# blade names = game inventory
ls "$SITE/resources/views/frontend/games/list/" 2>/dev/null | sed 's/\.blade\.php$//' | sort -u > all_names.txt
wc -l all_names.txt
grep -v 'AM$' all_names.txt | sort -u > nonam_names.txt
wc -l nonam_names.txt

# engines present (for the publish gate)
ls -d "$SITE"/app/Games/*/ 2>/dev/null | xargs -n1 basename > engines.txt || true
wc -l engines.txt

# ---- 2. discover clients on demo ----
# self-check: the known-good gs2c game must be discoverable (logs the raw code otherwise)
for H in https://demo4.scriptcasino.ru https://demo2.scriptcasino.ru https://demo3.scriptcasino.ru; do
  C=$(curl -sS --compressed -A "Mozilla/5.0 (X11; Linux x86_64; rv:124.0) Gecko/20100101 Firefox/124.0" \
      --connect-timeout 4 --max-time 30 -o /dev/null -w '%{http_code}' "$H/games/BigBassBonanza/gs2c/html5Game.html")
  echo "SELF-CHECK BigBassBonanza gs2c on $H -> $C"
done
python3 "$HUNT/pp_discover.py" nonam_names.txt candidates.json 16
python3 - <<'PY'
import json
cand = json.load(open('/tmp/pp/candidates.json'))
print('candidates:', len(cand))
json.dump(cand, open('/tmp/pp/candidates.json', 'w'), indent=1)
PY

# ---- 3. harvest, pragmatic-priority, global cap ----
PRAG_FIRST=$(grep -E '^(AncientEgypt|AztecGems|AztecKing|BigBass|BiggerBass|BonanzaGold|BookOfELDorado|BookofAztecKing|BookofKingdoms|BookofTut|BookofVikings|BookoftheFallen|BubblePop|BullFiesta|CandyVillage|CashPatrol|ChilliHeat|ChristmasBigBass|FruitParty|SweetBonanza|WolfGold|GatesOfOlympus|JohnHunter|MustangGold|GreatRhino|StarzPragmatic|FirePortals|GemsBonanza|PeakyBlunders|MadameDestiny|WildBoar|BuffaloKing|QueenGold|ReleaseThe|TheHandOfMidas|JuicyFruits|PiggyNicholas|CurseOfTheMummy|SeaHunter|SugarRush|GardenGnome|FloatingDragon|Sumoboss|ThreeStar|HottoBurn|DiamondStrike|ChickenDrop|ZebraHawa|TwinSpin|Cash Elevator)' nonam_names.txt | head -80 || true)
printf '%s\n' "$PRAG_FIRST" > prag_first.txt
wc -l prag_first.txt || true
python3 - <<'PY'
import json
cand = json.load(open('/tmp/pp/candidates.json'))
names = [n.strip() for n in open('/tmp/pp/prag_first.txt')] if __import__('os').path.exists('/tmp/pp/prag_first.txt') else []
ordered = [n for n in names if n in cand] + sorted(n for n in cand if n not in set(names))
open('/tmp/pp/harvest_order.txt', 'w').write('\n'.join(ordered) + '\n')
print('harvest order:', len(ordered))
PY

mkdir -p mirror
BATCH=0
while [ $BATCH -lt 20 ]; do
  REMAIN=$(head -n $((BATCH * 10 + 10)) harvest_order.txt | tail -n 10)
  [ -z "$REMAIN" ] && break
  BATCH=$((BATCH + 1))
  echo "=== harvest batch $BATCH ==="
  python3 "$HUNT/mirror5.py" mirror $REMAIN --max-files 900 --max-mb 200 || true
  SIZE=$(du -sm mirror | awk '{print $1}')
  echo "mirror so far: ${SIZE} MB"
  [ "$SIZE" -ge 3200 ] && { echo "GLOBAL CAP reached"; break; }
done
du -sh mirror

# ---- 4. mirror release ----
rm -f pp-clients.zip
zip -qr pp-clients.zip mirror
SIZE=$(stat -c%s pp-clients.zip); SHA=$(sha256sum pp-clients.zip | awk '{print $1}')
echo "PP MIRROR ZIP: $SIZE bytes sha256=$SHA"
cat > notes.md <<EOF
**Non-AM clients mirror (Pragmatic Play first) — harvested from the reference demo** (\$(date -u +%FT%TZ))

- zip: $SIZE bytes — sha256 \`$SHA\`
- Every game harvested manifest-first (client/game.json + resources.json + data packages + res assets), series-walked, all refs filled or proven 404
- Stats: \`_pilot.json\` inside the zip
EOF
gh release view pp-clients -R "$REPO" >/dev/null 2>&1 \
  && gh release upload pp-clients pp-clients.zip -R "$REPO" --clobber \
  || gh release create pp-clients pp-clients.zip -R "$REPO" \
       --title "Non-AM clients mirror (Pragmatic-first)" --notes-file notes.md
echo "PP_PACK_OK"
