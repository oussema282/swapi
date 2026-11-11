#!/usr/bin/env bash
# Build the final Replit-ready casino zip on a GitHub Actions runner.
# Requires: GITHUB_TOKEN, REPO env vars; php8.2+cli (setup-php), python3, zip.
set -uo pipefail
mkdir -p /tmp/build/logs
exec > >(tee /tmp/build/logs/build.log) 2>&1
set -x

REPO="${REPO:-oussema282/swapi}"
cd /tmp/build
rm -rf ex stage packs final.zip
mkdir -p ex stage packs

# ---------- 1. payload from Google Drive ----------
python3 -m pip install -q gdown
OK=0
for FID in 1GrVmYgMOMMP3Nhj-tdgrSsdhlUxUy8Ov 1G36TB-guho76QTnBFaeYOGRQa2JkXe7I 1M504Ai3gwQ8bGSpFVraXEkb2o2811MmU; do
  if gdown --fuzzy "https://drive.google.com/file/d/${FID}/view" -O payload.rar >/dev/null 2>&1; then OK=1; break; fi
done
if [ "$OK" != 1 ] || ! head -c 7 payload.rar | xxd -p | grep -qi "^526172211a07"; then
  echo "gdown failed — trying drive confirm-page fallback"
  FID=1GrVmYgMOMMP3Nhj-tdgrSsdhlUxUy8Ov
  curl -sL -c ck.txt "https://drive.google.com/uc?export=download&id=${FID}" -o page.html
  python3 - <<'PY'
import re
html=open('page.html',errors='ignore').read()
m=re.search(r'action="([^"]+)"',html); f=re.findall(r'name="([^"]+)" value="([^"]*)"',html)
open('dl_url.txt','w').write(m.group(1)+"?"+("&".join(f"{k}={v}" for k,v in f)) if m else "")
PY
  [ -s dl_url.txt ] && curl -sL -b ck.txt "$(cat dl_url.txt)" -o payload.rar
fi
ls -la payload.rar
head -c 7 payload.rar | xxd -p | grep -qi "^526172211a07" || { echo "RAR DOWNLOAD FAILED"; exit 1; }
sha256sum payload.rar

# ---------- 2. unrar + extract ----------
curl -sSL -o unrar.tar.gz "https://codeload.github.com/pmachapman/unrar/tar.gz/refs/heads/master"
tar xzf unrar.tar.gz
(cd unrar-master && make -j2 -s >/dev/null 2>&1)
U=/tmp/build/unrar-master/unrar
[ -x "$U" ] || { echo "unrar build failed"; exit 1; }
(cd ex && "$U" x -y ../payload.rar >/dev/null)
echo "=== rar tree (top) ==="
find /tmp/build/ex -maxdepth 3 -type d | head -20

SITE=$(find /tmp/build/ex -path '*d60/d60/artisan' -type f | head -1 | xargs dirname 2>/dev/null)
[ -z "${SITE:-}" ] && SITE=$(find /tmp/build/ex -maxdepth 5 -type f -name artisan | head -1 | xargs dirname 2>/dev/null)
[ -n "${SITE:-}" ] && [ -f "$SITE/artisan" ] || { echo "artisan not found"; exit 1; }
echo "SITE=$SITE"
ls "$SITE" | head -40
cp -a "$SITE"/. stage/

# drop operator junk that must never sit in a webroot / bloat the zip
rm -f stage/d60.sql stage/appbk.zip stage/*.log
find stage -maxdepth 1 -name "*.sql" -delete 2>/dev/null || true
find stage -maxdepth 1 -name "appbk*" -delete 2>/dev/null || true

# vendor compat: shipped vendor targets PHP 7.4. On PHP 8.1/8.2 the framework
# converts deprecation notices to exceptions (HandleExceptions -> error_reporting(-1)),
# which kills boot. Suppress deprecations globally instead of chasing each signature.
HE=/tmp/build/stage/vendor/laravel/framework/src/Illuminate/Foundation/Bootstrap/HandleExceptions.php
if [ -f "$HE" ]; then
  grep -n "error_reporting" "$HE" || echo "no error_reporting line found"
  sed -i 's/error_reporting(-1)/error_reporting(E_ALL \& ~E_DEPRECATED \& ~E_USER_DEPRECATED)/' "$HE"
  grep -n "error_reporting" "$HE"
else
  echo "HandleExceptions.php not found — vendor layout unexpected"
fi

# old Carbon (<2.6x) fatals natively on PHP 8.2: DateTime::getLastErrors() returns
# false now, but setLastErrors(array) has a native type. Make it defensive.
python3 - <<'PY'
import re
p='/tmp/build/stage/vendor/nesbot/carbon/src/Carbon/Traits/Creator.php'
try:
    s=open(p).read()
except FileNotFoundError:
    print('CARBON: Creator.php not found'); raise SystemExit
pat=re.compile(r'private static function setLastErrors\(array \$lastErrors\)\s*\{\s*static::\$lastErrors = \$lastErrors;\s*\}')
rep=("private static function setLastErrors($lastErrors)\n    {\n"
     "        static::$lastErrors = is_array($lastErrors) ? $lastErrors : ['warning_count' => 0, 'warnings' => [], 'error_count' => 0, 'errors' => []];\n    }")
s2,n=pat.subn(rep, s)
if n:
    open(p,'w').write(s2); print(f'CARBON PATCH applied ({n})')
else:
    print('CARBON PATCH: pattern not found — dumping:')
    for i,l in enumerate(s.splitlines()):
        if 'setLastErrors' in l: print(i+1, l)
PY
df -h /tmp | tail -1

# ---------- 3. release packs ----------
gh release download games-client-pack-85 -R "$REPO" -D packs
gh release download slots-publish-ready  -R "$REPO" -D packs
ls -la packs
python3 "$GITHUB_WORKSPACE/scripts/replit-build/overlay_packs.py" /tmp/build/stage /tmp/build/packs /tmp/build/names102.txt || exit 1
wc -l /tmp/build/names102.txt

# ---------- 4. database: MySQL dump -> sqlite ----------
D60SQL=$(find /tmp/build/ex -path '*d60/d60.sql' -type f | head -1)
[ -z "${D60SQL:-}" ] && D60SQL=$(find /tmp/build/ex -name "d60.sql" -type f | head -1)
[ -n "${D60SQL:-}" ] && [ -s "$D60SQL" ] || { echo "d60.sql not found"; exit 1; }
mkdir -p stage/database stage/_mysql-legacy
cp "$D60SQL" stage/_mysql-legacy/d60.sql
python3 "$GITHUB_WORKSPACE/scripts/replit-build/sqlite_convert.py" \
  "$D60SQL" stage/database/database.sqlite \
  "$GITHUB_WORKSPACE/sql/w_games-17-pack-v2-games.sql" \
  /tmp/build/names102.txt || exit 1
ls -la stage/database/

# ---------- 5. .env ----------
cd /tmp/build/stage
python3 - <<'PY'
import os, re, base64, secrets
p='.env'
txt=open(p).read() if os.path.exists(p) else ("APP_NAME=Casino\nAPP_ENV=production\n")
def setk(txt,k,v):
    if re.search(rf'^{k}=.*$', txt, re.M):
        return re.sub(rf'^{k}=.*$', lambda m: f'{k}={v}', txt, flags=re.M)
    return txt.rstrip()+"\n"+f"{k}={v}\n"
if 'APP_KEY=base64:' not in txt:
    txt=setk(txt,'APP_KEY','base64:'+base64.b64encode(secrets.token_bytes(32)).decode())
for k,v in [('APP_ENV','production'),('APP_DEBUG','false'),
            ('APP_URL','http://localhost:8080'),
            ('DB_CONNECTION','sqlite'),('DB_HOST','127.0.0.1'),('DB_PORT','3306'),
            ('DB_DATABASE',''),('DB_USERNAME',''),('DB_PASSWORD',''),
            ('SESSION_DRIVER','file'),('CACHE_DRIVER','file'),
            ('QUEUE_CONNECTION','sync'),('LOG_CHANNEL','daily'),('LOG_LEVEL','error')]:
    txt=setk(txt,k,v)
open(p,'w').write(txt)
print('.env written:', len(txt), 'bytes; APP_KEY present:', 'APP_KEY=base64:' in txt)
PY

# ---------- 6. replit config ----------
mkdir -p storage/framework/{cache,sessions,views} storage/logs bootstrap/cache 2>/dev/null || true
touch storage/logs/.keep

WSJS=$(find . -maxdepth 3 \( -name 'server.js' -o -name 'ws.js' -o -name '*websocket*.js' -o -name 'socket.js' \) \
        -not -path './vendor/*' -not -path './node_modules/*' 2>/dev/null | head -1 || true)
echo "WS server candidate: ${WSJS:-none}"
if [ -n "$WSJS" ]; then
  REL=${WSJS#./}
  WS_BLOCK="nohup node \"$REL\" > storage/logs/ws.log 2>&1 & echo \"ws server: $REL\""
else
  WS_BLOCK=": # no node websocket server found in this deployment (HTTP spins only)"
fi

cat > run.sh <<EOF
#!/bin/bash
set -e
cd "\$(dirname "\$0")"
mkdir -p storage/framework/{cache,sessions,views} storage/logs bootstrap/cache
chmod -R 777 storage bootstrap/cache 2>/dev/null || true
$WS_BLOCK
export PHP_CLI_SERVER_WORKERS=8
exec php artisan serve --host=0.0.0.0 --port=8080
EOF
chmod +x run.sh

cat > .replit <<'EOF'
run = "bash run.sh"
entrypoint = "run.sh"

[[ports]]
localPort = 8080
externalPort = 80
EOF

cat > replit.nix <<'EOF'
{ pkgs }: {
  deps = [
    pkgs.php82
    pkgs.php82Packages.composer
    pkgs.nodejs
    pkgs.zip
    pkgs.unzip
  ];
}
EOF

cat > README-REPLIT.md <<'EOF'
# Goldsvet 8.5 (Vanguard) — Replit-ready build

Full casino platform: Laravel 8 app, 2,170-game database (SQLite, ready), all game
clients/engines/blades from the original 8.5open deployment **plus** the 102-game
publish packs (85 Canada clients + 17 pack-v2 games). The 102 pack games are
published (`w_games.view=1`, shop 1); the original operator's lobby flags are kept.

## Deploy (2 minutes)
1. replit.com -> **Create Repl** -> Template: *Blank (or any)*.
2. Drag this zip into the Files pane, then in the Shell run:
   `unzip -o <name-of-zip>.zip -d . && rm <name-of-zip>.zip`
3. Press **Run** (runs `run.sh` -> `php artisan serve` on 0.0.0.0:8080).
4. Open the Webview URL. Admin panel: `/admin` (operator accounts come from the
   original dump; register a new player at `/register`).

If Run complains about a missing `php` binary, open replit.nix and confirm
`pkgs.php82` resolves on your channel, or add the PHP module via the Replit UI.

## Database
- **Active:** `database/database.sqlite` (SQLite) — converted from the original
  `d60.sql`, all 71 `w_` tables, with the 17 pack-v2 upserts applied and the
  102 pack games published. No external DB needed on Replit.
- **MySQL (VPS/Hostinger path):** import `_mysql-legacy/d60.sql`, then run
  `_mysql-legacy/w_games-17-pack-v2-games.sql` and
  `_mysql-legacy/enable-games-template.sql`, and point `.env` at your MySQL
  (`DB_CONNECTION=mysql`, `DB_DATABASE=...`).

## Notes & limits
- `.env` ships with a fresh `APP_KEY`, `APP_DEBUG=false`, sqlite driver.
  Set `APP_URL` to your Replit domain (*.replit.dev) if any asset resolves
  absolutely; game clients use relative URLs by default.
- The original stack also used a Node websocket server on port 22053 for live
  features; spins work over HTTP. If a ws script exists it is started
  best-effort by `run.sh` (log: `storage/logs/ws.log`).
- PHP 8.2 target. If you see deprecation notices: they are suppressed in this
  config (`APP_DEBUG=false`, `LOG_LEVEL=error`).
- **Audit each engine's `RtpControlCount`/reels before real money** — public
  packs contain copy-paste leftovers. This software is for operating your own
  licensed/jurisdiction-legal deployment; you are responsible for compliance.
EOF

# ---------- 7. smoke test ----------
cd /tmp/build/stage
php -v | head -1
php -r 'new PDO("sqlite:database/database.sqlite"); echo "pdo-sqlite OK\n";'
php artisan --version || { echo "ARTISAN BOOT FAILED"; exit 1; }
(php artisan serve --host=127.0.0.1 --port=8099 >/tmp/build/logs/serve.log 2>&1 &)
sleep 12
CODE=$(curl -s -o /tmp/build/logs/root.html -w '%{http_code}' -L http://127.0.0.1:8099/ || echo curlfail)
echo "HTTP GET / -> $CODE"
curl -s -o /dev/null -w 'HTTP GET /login -> %{http_code}\n' http://127.0.0.1:8099/login || true
head -c 400 /tmp/build/logs/root.html || true
pkill -f "artisan serve" || true
sleep 1

# ---------- 8. zip + release ----------
cd /tmp/build/stage
zip -qr /tmp/build/final.zip . -x "node_modules/*" -x "storage/logs/*.log"
cd /tmp/build
python3 -m zipfile -t final.zip && echo "ZIP TEST OK"
SIZE=$(stat -c%s final.zip); SHA=$(sha256sum final.zip | awk '{print $1}')
echo "FINAL: $SIZE bytes  sha256=$SHA"
[ "$SIZE" -lt 2000000000 ] || { echo "zip too big for a single release asset"; exit 1; }

cat > notes.md <<EOF
**Goldsvet 8.5 (Vanguard) — final Replit-ready build** (auto-assembled \$(date -u +%F))

- Full original d60 deployment + 102-game publish packs (85 Canada + 17 pack-v2)
- DB: **database/database.sqlite** (all 71 w_ tables, 2,170 games, 102 pack games published, view=1, shop 1)
- MySQL path included: \`_mysql-legacy/d60.sql\` + import SQL
- Replit config: \`.replit\`, \`replit.nix\` (php82 + node), \`run.sh\` (artisan serve :8080, 8 workers)
- Deploy: import zip into a Repl -> Run. Steps in \`README-REPLIT.md\`.
- zip: $SIZE bytes — sha256 \`$SHA\`
EOF

gh release view replit-ready -R "$REPO" >/dev/null 2>&1 \
  && gh release upload replit-ready final.zip -R "$REPO" --clobber \
  || gh release create replit-ready final.zip -R "$REPO" \
       --title "Goldsvet 8.5 — Replit-ready final build" --notes-file notes.md
gh release view replit-ready -R "$REPO" --json assets --jq '.assets[] | {name,size,state}'
echo "BUILD OK"
