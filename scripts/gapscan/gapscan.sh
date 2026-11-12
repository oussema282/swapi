#!/usr/bin/env bash
# Gap scan: what does the d60 deployment actually ship per game name?
set -uo pipefail
mkdir -p /tmp/gap/out /tmp/gap/debug && cd /tmp/gap
exec > >(tee debug/gap.log) 2>&1
set -x

python3 -m pip install -q gdown
OK=0
for FID in 1GrVmYgMOMMP3Nhj-tdgrSsdhlUxUy8Ov 1G36TB-guho76QTnBFaeYOGRQa2JkXe7I 1M504Ai3gwQ8bGSpFVraXEkb2o2811MmU; do
  if gdown --fuzzy "https://drive.google.com/file/d/${FID}/view" -O payload.rar >/dev/null 2>&1 \
     && head -c 7 payload.rar | xxd -p | grep -qi "^526172211a07"; then OK=1; break; fi
done
if [ "$OK" != 1 ]; then
  echo "gdown failed on all mirrors — confirm-page fallback"
  FID=1GrVmYgMOMMP3Nhj-tdgrSsdhlUxUy8Ov
  curl -sL -c ck.txt "https://drive.google.com/uc?export=download&id=${FID}" -o page.html
  python3 - <<'PY'
import re
html=open('page.html',errors='ignore').read()
m=re.search(r'action="([^"]+)"',html); f=re.findall(r'name="([^"]+)" value="([^"]*)"',html)
open('dl_url.txt','w').write(m.group(1)+"?"+("&".join(f"{k}={v}" for k,v in f)) if m else "")
PY
  [ -s dl_url.txt ] && curl -sL -b ck.txt "$(cat dl_url.txt)" -o payload.rar
  head -c 7 payload.rar | xxd -p | grep -qi "^526172211a07" || { echo "RAR DOWNLOAD FAILED (all routes)"; exit 1; }
fi
sha256sum payload.rar

curl -sSL -o unrar.tar.gz "https://codeload.github.com/pmachapman/unrar/tar.gz/refs/heads/master"
tar xzf unrar.tar.gz
(cd unrar-master && make -j2 -s >/dev/null 2>&1)
U=/tmp/gap/unrar-master/unrar
[ -x "$U" ] || { echo "unrar build failed"; exit 1; }

"$U" lb payload.rar > out/allfiles.txt
wc -l out/allfiles.txt

grep -E '(^|/)resources/views/frontend/games/list/[^/]+\.blade\.php$' out/allfiles.txt | sort -u > out/site_blades.txt
grep -E '(^|/)app/Games/[^/]+/Server\.php$' out/allfiles.txt | sed -E 's#.*/app/Games/([^/]+)/Server\.php$#\1#' | sort -u > out/site_engines.txt
grep -E '(^|/)public/games/[^/]+/index\.html$' out/allfiles.txt | sed -E 's#.*/public/games/([^/]+)/index\.html$#\1#' | sort -u > out/site_clients.txt
wc -l out/site_blades.txt out/site_engines.txt out/site_clients.txt

"$U" x -y payload.rar "8.5open/d60/d60.sql" sqlout/ >/dev/null 2>&1
SQL=$(find /tmp/gap/sqlout -name d60.sql | head -1)
[ -n "${SQL:-}" ] && [ -s "$SQL" ] || { echo "d60.sql not found"; exit 1; }

# pack names: 85 canada + 17 pack-v2 (+ verification extras) from the sql relay script
grep '^NAMES=' "$GITHUB_WORKSPACE/scripts/relay/sqlextract.sh" | sed "s/^NAMES='//; s/'$//" | tr ' ' '\n' > out/pack_names.txt
wc -l out/pack_names.txt

python3 "$GITHUB_WORKSPACE/scripts/gapscan/gapmatrix.py" "$SQL" /tmp/gap/out /tmp/gap/out/pack_names.txt

cd /tmp/gap/out
git init -q -b gapscan-evidence
git config user.email "probe@arena.ai"; git config user.name "probe"
git remote add origin "https://x-access-token:${REPO_TOKEN}@github.com/${REPO_NAME}.git"
git add -A
git commit -qm "gap scan evidence: client/engine/blade matrix"
git push -qf origin gapscan-evidence && echo PUSHED || echo PUSH_FAILED
