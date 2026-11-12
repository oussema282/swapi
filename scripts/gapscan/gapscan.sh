#!/usr/bin/env bash
# Gap scan: what does the d60 deployment actually ship per game name?
set -uo pipefail
mkdir -p /tmp/gap/out /tmp/gap/debug && cd /tmp/gap
exec > >(tee debug/gap.log) 2>&1
set -x

python3 -m pip install -q gdown
FID=1GrVmYgMOMMP3Nhj-tdgrSsdhlUxUy8Ov
gdown --fuzzy "https://drive.google.com/file/d/${FID}/view" -O payload.rar || true
head -c 7 payload.rar | xxd -p | grep -qi "^526172211a07" || { echo "RAR DOWNLOAD FAILED"; exit 1; }
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
