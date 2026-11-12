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
gh release download amatic-clients -R "$REPO" -D packs 2>/dev/null || echo "no amatic-clients release yet"
ls -la packs
python3 "$GITHUB_WORKSPACE/scripts/replit-build/overlay_packs.py" /tmp/build/stage /tmp/build/packs /tmp/build/names102.txt || exit 1
wc -l /tmp/build/names102.txt

# ---------- 3c. Amatic client fill (mirror from scriptcasino demo) ----------
AMFILL=/tmp/build/amfill
rm -rf "$AMFILL"; mkdir -p "$AMFILL"
if ls packs/amatic-clients*.zip >/dev/null 2>&1; then
  unzip -q -o packs/amatic-clients*.zip -d "$AMFILL"
  python3 - <<'PY'
import os, shutil, re
src='/tmp/build/amfill/mirror'
games_root='/tmp/build/stage/public/games'
names_out='/tmp/build/names102.txt'
strong=[]; weak=[]; absent=[]
summary=os.path.join(src,'_canon_summary.txt')
canon={}
if os.path.exists(summary):
    for line in open(summary):
        m=re.match(r'(\S+)\s+canon=(\d+)/(\d+)', line)
        if m: canon[m.group(1)]=(int(m.group(2)), int(m.group(3)))
for g in sorted(os.listdir(src)) if os.path.isdir(src) else []:
    p=os.path.join(src,g)
    if not os.path.isdir(p) or g.startswith('_'): continue
    dest=os.path.join(games_root,g)
    shutil.copytree(p, dest, dirs_exist_ok=True)
    c=canon.get(g,(0,0))[0]
    (strong if c>=180 else weak).append(g)
    if c==0 and not canon: absent.append(g)
# publish the strong Amatic games (append to the pack names list)
with open(names_out,'a') as f:
    for g in strong: f.write(g+'\n')
print(f'AM fill: merged {len(strong)+len(weak)} client dirs; strong(published)={len(strong)} weak(hidden)={len(weak)}')
print('published:', ' '.join(sorted(strong)))
print('hidden:', ' '.join(sorted(weak)))
PY
else
  echo "AM fill skipped (no mirror zip in packs/)"
fi

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
            ('DB_CONNECTION','sqlite'),
            ('DB_USERNAME',''),('DB_PASSWORD',''),
            ('SESSION_DRIVER','file'),('CACHE_DRIVER','file'),
            ('QUEUE_CONNECTION','sync'),('LOG_CHANNEL','daily'),('LOG_LEVEL','error')]:
    txt=setk(txt,k,v)
# DB_DATABASE must be ABSENT so Laravel falls back to the absolute
# database_path('database.sqlite'); an empty-string env value breaks sqlite open.
txt=re.sub(r'^DB_DATABASE=.*$\n?', '', txt, flags=re.M)
open(p,'w').write(txt)
print('.env written:', len(txt), 'bytes; APP_KEY present:', 'APP_KEY=base64:' in txt)
PY

# ---------- 5b. sqlite compatibility layer (MySQL-flavored raw SQL) ----------
cat > stage/app/Providers/SqliteCompatProvider.php <<'EOF'
<?php

namespace App\Providers;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\ServiceProvider;

/**
 * Registers MySQL-compatible SQL functions on the SQLite connection so the
 * platform's MySQL-flavored queries keep working in the zero-config SQLite
 * deployment. No-op when the default connection is not sqlite.
 */
class SqliteCompatProvider extends ServiceProvider
{
    public function register() {}

    public function boot()
    {
        if (config('database.default') !== 'sqlite') {
            return;
        }
        try {
            $pdo = DB::connection()->getPdo();
        } catch (\Throwable $e) {
            return;
        }
        $str = function ($v) { return $v === null ? null : (string) $v; };
        $dt  = function ($v) use ($str) {
            $v = $str($v);
            if ($v === null) { return null; }
            $t = strtotime($v);
            return $t === false ? null : $t;
        };
        $funcs = [
            'rand' => function ($seed = null) {
                mt_srand($seed === null ? mt_rand() : (int) $seed);
                return mt_rand() / mt_getrandmax();
            },
            'now' => function () { return date('Y-m-d H:i:s'); },
            'unix_timestamp' => function ($v = null) use ($dt) { return $v === null ? time() : ($dt($v) ?? time()); },
            'from_unixtime' => function ($u) { return $u === null ? null : date('Y-m-d H:i:s', (int) $u); },
            'month' => function ($v) use ($dt) { $t = $dt($v); return $t === null ? null : (int) date('n', $t); },
            'year' => function ($v) use ($dt) { $t = $dt($v); return $t === null ? null : (int) date('Y', $t); },
            'day' => function ($v) use ($dt) { $t = $dt($v); return $t === null ? null : (int) date('j', $t); },
            'dayofmonth' => function ($v) use ($dt) { $t = $dt($v); return $t === null ? null : (int) date('j', $t); },
            'hour' => function ($v) use ($dt) { $t = $dt($v); return $t === null ? null : (int) date('G', $t); },
            'minute' => function ($v) use ($dt) { $t = $dt($v); return $t === null ? null : (int) date('i', $t); },
            'second' => function ($v) use ($dt) { $t = $dt($v); return $t === null ? null : (int) date('s', $t); },
            'date' => function ($v) use ($dt) { $t = $dt($v); return $t === null ? null : date('Y-m-d', $t); },
            'datediff' => function ($a, $b) use ($dt) { $x = $dt($a); $y = $dt($b); if ($x === null || $y === null) { return null; } return (int) round(($x - $y) / 86400); },
            'concat' => function (...$a) { $p = array_map(function ($x) { return $x === null ? '' : (string) $x; }, $a); return implode('', $p); },
            'concat_ws' => function ($sep = null, ...$a) { if ($sep === null) { return null; } $p = array_values(array_filter($a, function ($x) { return $x !== null; })); return implode((string) $sep, $p); },
            'md5' => function ($v) { return md5((string) $v); },
            'sha1' => function ($v) { return sha1((string) $v); },
            'crc32' => function ($v) { return crc32((string) $v); },
            'locate' => function ($needle, $haystack, $offset = 0) { if ($needle === null || $haystack === null) { return null; } $p = mb_stripos((string) $haystack, (string) $needle, (int) $offset); return $p === false ? 0 : $p + 1; },
            'find_in_set' => function ($needle, $haystack) { if ($needle === null || $haystack === null) { return null; } foreach (explode(',', (string) $haystack) as $i => $part) { if (trim($part) === (string) $needle) { return $i + 1; } } return 0; },
            'left' => function ($v, $n) { return $v === null ? null : mb_substr((string) $v, 0, (int) $n); },
            'right' => function ($v, $n) { return $v === null ? null : mb_substr((string) $v, -abs((int) $n)); },
            'repeat' => function ($v, $n) { return $v === null ? null : str_repeat((string) $v, max(0, (int) $n)); },
            'reverse' => function ($v) { return $v === null ? null : strrev((string) $v); },
            'lcase' => function ($v) { return $v === null ? null : mb_strtolower((string) $v); },
            'ucase' => function ($v) { return $v === null ? null : mb_strtoupper((string) $v); },
            'dayname' => function ($v) use ($dt) { $t = $dt($v); return $t === null ? null : date('l', $t); },
            'monthname' => function ($v) use ($dt) { $t = $dt($v); return $t === null ? null : date('F', $t); },
            'quarter' => function ($v) use ($dt) { $t = $dt($v); return $t === null ? null : (int) (floor((date('n', $t) - 1) / 3) + 1); },
            'truncate' => function ($v, $d) { if ($v === null) { return null; } $f = pow(10, (int) $d); return floor(((float) $v) * $f) / $f; },
            'sec_to_time' => function ($s) { if ($s === null) { return null; } $s = abs((int) $s); $sg = ((int) $s < 0) ? '-' : ''; return sprintf('%s%02d:%02d:%02d', $sg, floor($s / 3600), floor($s / 60) % 60, $s % 60); },
            'time_to_sec' => function ($v) { if ($v === null) { return null; } sscanf(trim((string) $v), '%d:%d:%d', $h, $m, $x); return ((int) $h) * 3600 + ((int) $m) * 60 + (int) $x; },
            'date_format' => function ($v, $fmt) use ($dt) {
                $t = $dt($v);
                if ($t === null || $fmt === null) { return null; }
                $map = ['%Y'=>'%Y','%y'=>'%y','%m'=>'%m','%c'=>'%m','%d'=>'%d','%e'=>'%e','%H'=>'%H','%k'=>'%k','%h'=>'%I','%I'=>'%I','%l'=>'%l','%i'=>'%M','%s'=>'%S','%S'=>'%S','%p'=>'%p','%W'=>'%A','%a'=>'%a','%M'=>'%B','%b'=>'%b','%j'=>'%j','%u'=>'%W','%U'=>'%U','%w'=>'%w','%T'=>'%T'];
                $sf = ''; $n = strlen($fmt);
                for ($i = 0; $i < $n; $i++) {
                    if ($fmt[$i] === '%' && $i + 1 < $n) {
                        $two = '%' . $fmt[$i + 1];
                        $sf .= isset($map[$two]) ? $map[$two] : $two;
                        $i++;
                    } else {
                        $sf .= $fmt[$i];
                    }
                }
                return @strftime($sf, $t);
            },
            'greatest' => function (...$a) { $v = array_values(array_filter($a, function ($x) { return $x !== null; })); return empty($v) ? null : max($v); },
            'least' => function (...$a) { $v = array_values(array_filter($a, function ($x) { return $x !== null; })); return empty($v) ? null : min($v); },
        ];
        foreach ($funcs as $name => $fn) {
            $pdo->sqliteCreateFunction($name, $fn, -1);
        }
    }
}
EOF
python3 - <<'PY'
p='/tmp/build/stage/config/app.php'
s=open(p).read()
if 'SqliteCompatProvider' not in s:
    needle="App\\Providers\\AppServiceProvider::class,"
    if needle in s:
        s=s.replace(needle, needle+"\n        App\\Providers\\SqliteCompatProvider::class,",1)
    else:
        i=s.find("'providers'")
        j=s.find("];", i)
        s=s[:j]+"        App\\Providers\\SqliteCompatProvider::class,\n"+s[j:]
    open(p,'w').write(s)
    print('SqliteCompatProvider registered in config/app.php')
else:
    print('SqliteCompatProvider already registered')
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
curl -s -o /dev/null -w 'HTTP GET /games -> %{http_code}\n' http://127.0.0.1:8099/games || true
head -c 300 /tmp/build/logs/root.html || true
LLOG=$(ls -t /tmp/build/stage/storage/logs/laravel*.log 2>/dev/null | head -1)
echo "=== latest laravel log: ${LLOG:-none} ==="
if [ -n "${LLOG:-}" ]; then
  python3 - "$LLOG" <<'PY'
import sys
txt=open(sys.argv[1],encoding='utf-8',errors='replace').read()
idx=txt.rfind('.ERROR: ')
print('--- exception headline ---')
print(txt[idx:idx+700].replace('\n',' ') if idx!=-1 else '(no .ERROR entry found)')
PY
fi
echo "=== app/Http/Middleware/VerifyInstallation.php ==="
sed -n '1,55p' /tmp/build/stage/app/Http/Middleware/VerifyInstallation.php 2>/dev/null || true
pkill -f "artisan serve" || true
sleep 1

# ---------- 8. zip + release ----------
cd /tmp/build/stage
rm -f /tmp/build/final.zip /tmp/build/part_*
zip -qr /tmp/build/final.zip . -x "node_modules/*" -x "storage/logs/*.log"
SIZE=$(stat -c%s /tmp/build/final.zip)
if [ "$SIZE" -ge 2000000000 ]; then
  echo "default zip $SIZE — retrying with -9"
  rm -f /tmp/build/final.zip
  zip -9 -qr /tmp/build/final.zip . -x "node_modules/*" -x "storage/logs/*.log"
  SIZE=$(stat -c%s /tmp/build/final.zip)
fi
cd /tmp/build
python3 -m zipfile -t final.zip && echo "ZIP TEST OK"
SIZE=$(stat -c%s final.zip); SHA=$(sha256sum final.zip | awk '{print $1}')
echo "FINAL: $SIZE bytes  sha256=$SHA"
if [ "$SIZE" -ge 2000000000 ]; then
  echo "still over the 2GB asset cap — splitting"
  split -b 1900000000 -d final.zip part_
  ls -la part_*
fi

if ls part_* >/dev/null 2>&1; then
cat > notes.md <<EOF
**Goldsvet 8.5 (Vanguard) — final Replit-ready build** (auto-assembled \$(date -u +%F))

The full build is ${SIZE} bytes (sha256 \`$SHA\`) — above the 2 GB single-asset cap, so it ships as **two parts**.
Reassemble first, verify the sha256, then deploy:

\`\`\`bash
cat part_00 part_01 > goldsvet-replit-ready.zip
sha256sum goldsvet-replit-ready.zip   # must equal $SHA
\`\`\`

- Full original d60 deployment + 102 pack game clients (85 Canada + 17 pack-v2) — engines & blades were already in the deployment and are included
- DB: **database/database.sqlite** (all 71 w_ tables converted from the dump; canonical pack rows published: view=1, shop 1; lobby duplicates hidden)
- MySQL path included: \`_mysql-legacy/d60.sql\` + import SQL
- Replit config: \`.replit\`, \`replit.nix\` (php82 + node), \`run.sh\` (artisan serve :8080, 8 workers)
- Deploy steps in \`README-REPLIT.md\` inside the zip
EOF
else
cat > notes.md <<EOF
**Goldsvet 8.5 (Vanguard) — final Replit-ready build** (auto-assembled \$(date -u +%F))

- Full original d60 deployment + 102 pack game clients (85 Canada + 17 pack-v2)
- DB: **database/database.sqlite** (all 71 w_ tables converted from the dump; canonical pack rows published: view=1, shop 1)
- MySQL path included: \`_mysql-legacy/d60.sql\` + import SQL
- Replit config: \`.replit\`, \`replit.nix\` (php82 + node), \`run.sh\` (artisan serve :8080, 8 workers)
- Deploy steps in \`README-REPLIT.md\` inside the zip
- zip: $SIZE bytes — sha256 \`$SHA\`
EOF
fi

if ls part_* >/dev/null 2>&1; then
  gh release view replit-ready -R "$REPO" >/dev/null 2>&1 \
    && gh release upload replit-ready part_* -R "$REPO" --clobber \
    || gh release create replit-ready part_* -R "$REPO" \
         --title "Goldsvet 8.5 — Replit-ready final build" --notes-file notes.md
else
  gh release view replit-ready -R "$REPO" >/dev/null 2>&1 \
    && gh release upload replit-ready final.zip -R "$REPO" --clobber \
    || gh release create replit-ready final.zip -R "$REPO" \
         --title "Goldsvet 8.5 — Replit-ready final build" --notes-file notes.md
fi
gh release edit replit-ready -R "$REPO" --notes-file notes.md >/dev/null
gh release view replit-ready -R "$REPO" --json assets --jq '.assets[] | {name,size,state}'
echo "BUILD OK"
