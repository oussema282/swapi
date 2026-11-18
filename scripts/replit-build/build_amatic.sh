#!/usr/bin/env bash
# AM-only Replit build: full platform, lobby limited to the Amatic games
# (56 mirrored from the scriptcasino demo + 5 pack clients), no other providers.
set -uo pipefail
mkdir -p /tmp/build/logs
exec > >(tee /tmp/build/logs/build.log) 2>&1
set -x

REPO="${REPO:-oussema282/swapi}"
cd /tmp/build
rm -rf ex stage packs final.zip amfill
mkdir -p ex stage packs

# ---------- 1. payload from Google Drive ----------
python3 -m pip install -q gdown
OK=0
FID_LIST=(1GrVmYgMOMMP3Nhj-tdgrSsdhlUxUy8Ov 1G36TB-guho76QTnBFaeYOGRQa2JkXe7I 1M504Ai3gwQ8bGSpFVraXEkb2o2811MmU)
for FID in "${FID_LIST[@]}"; do
  if gdown --fuzzy "https://drive.google.com/file/d/${FID}/view" -O payload.rar >/dev/null 2>&1 \
     && head -c 7 payload.rar | xxd -p | grep -qi "^526172211a07"; then OK=1; break; fi
done
if [ "$OK" != 1 ]; then
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
# full integrity check: Drive sometimes serves a truncated file (unrar:
# "Unexpected end of archive") — verify size+sha and retry on mismatch
EXPECTED_SHA=fccadd9f9fafb957826c32d47721b37182f30597048f20413da1f022977849fb
EXPECTED_SIZE=580769515
for ATTEMPT in 1 2 3 4 5; do
  ACTUAL=$(sha256sum payload.rar 2>/dev/null | awk '{print $1}')
  ACTUAL_SIZE=$(stat -c%s payload.rar 2>/dev/null || echo 0)
  if [ "$ACTUAL" = "$EXPECTED_SHA" ] && [ "$ACTUAL_SIZE" = "$EXPECTED_SIZE" ]; then
    echo "payload.rar verified ($ACTUAL_SIZE bytes)"
    break
  fi
  echo "attempt $ATTEMPT: sha=${ACTUAL:0:8} size=$ACTUAL_SIZE — mismatch, re-downloading"
  sleep $((ATTEMPT * 10))
  FID=${FID_LIST[ATTEMPT % 3]}
  curl -sL -c ck.txt "https://drive.google.com/uc?export=download&id=${FID}" -o page.html
  python3 - <<'PY'
import re
html=open('page.html',errors='ignore').read()
m=re.search(r'action="([^"]+)"',html); f=re.findall(r'name="([^"]+)" value="([^"]*)"',html)
open('dl_url.txt','w').write(m.group(1)+"?"+("&".join(f"{k}={v}" for k,v in f)) if m else "")
PY
  [ -s dl_url.txt ] && curl -sL -b ck.txt "$(cat dl_url.txt)" -o payload.rar
done
ACTUAL=$(sha256sum payload.rar 2>/dev/null | awk '{print $1}')
[ "$ACTUAL" = "$EXPECTED_SHA" ] || { echo "RAR DOWNLOAD FAILED — checksum never matched"; exit 1; }
head -c 7 payload.rar | xxd -p | grep -qi "^526172211a07" || { echo "RAR DOWNLOAD FAILED"; exit 1; }
sha256sum payload.rar

# ---------- 2. unrar + extract + stage ----------
curl -sSL -o unrar.tar.gz "https://codeload.github.com/pmachapman/unrar/tar.gz/refs/heads/master"
tar xzf unrar.tar.gz
(cd unrar-master && make -j2 -s >/dev/null 2>&1)
U=/tmp/build/unrar-master/unrar
[ -x "$U" ] || { echo "unrar build failed"; exit 1; }
(cd ex && "$U" x -y ../payload.rar >/dev/null)

SITE=$(find /tmp/build/ex -path '*d60/d60/artisan' -type f | head -1 | xargs dirname 2>/dev/null)
[ -z "${SITE:-}" ] && SITE=$(find /tmp/build/ex -maxdepth 5 -type f -name artisan | head -1 | xargs dirname 2>/dev/null)
[ -n "${SITE:-}" ] && [ -f "$SITE/artisan" ] || { echo "artisan not found"; exit 1; }
echo "SITE=$SITE"
cp -a "$SITE"/. stage/

rm -f stage/d60.sql stage/appbk.zip stage/*.log
find stage -maxdepth 1 -name "*.sql" -delete 2>/dev/null || true
find stage -maxdepth 1 -name "appbk*" -delete 2>/dev/null || true

# drop ALL other-provider game clients (AM-only pack)
if [ -d stage/public/games ]; then
  echo "base clients present: $(ls stage/public/games | wc -l)"; else mkdir -p stage/public/games; fi

# ---------- 3. AM clients ----------
# 3a. mirror (102 games from the demo)
gh release download amatic-clients -R "$REPO" -D packs
unzip -q -o packs/amatic-clients*.zip -d amfill
rsync -a amfill/mirror/ stage/public/games/ --exclude='_done.txt' --exclude='_summary.txt' --exclude='_canon_summary.txt' --exclude='_fill.txt' --exclude='_fill_summary.txt'
rm -f stage/public/games/_*.txt

# 3b. the 5 pack AM clients from slots-publish-ready
gh release download slots-publish-ready -R "$REPO" -D packs
mkdir -p pack5
unzip -q -o packs/slots-publish-ready.zip "pack/public/games/AdmiralNelsonAM/*" \
  "pack/public/games/AllAmericanPokerAM/*" "pack/public/games/AllWaysFruitsAM/*" \
  "pack/public/games/AllWaysJokerAM/*" "pack/public/games/BingoAM/*" -d pack5
for N in AdmiralNelsonAM AllAmericanPokerAM AllWaysFruitsAM AllWaysJokerAM; do
  if [ -d "pack5/pack/public/games/$N" ]; then
    cp -a "pack5/pack/public/games/$N" stage/public/games/
  else
    echo "MISSING pack client $N"; fi
done
# BingoAM ships in the Canada pack, not slots-publish-ready -> sparse checkout from heidi
if [ ! -d stage/public/games/BingoAM ]; then
  rm -rf /tmp/bingo
  git clone -q --depth 1 --filter=blob:none --sparse https://github.com/heidi-luong1109/game /tmp/bingo \
    && (cd /tmp/bingo && git sparse-checkout set public/games/BingoAM) \
    && cp -a /tmp/bingo/public/games/BingoAM stage/public/games/ \
    && echo "BingoAM from heidi sparse checkout" \
    || echo "BINGOAM SPARSE CHECKOUT FAILED"
fi
# ---------- 3b-bis. PM (Pragmatic-style OneWorks) clients from the pp-clients mirror ----------
mkdir -p /tmp/build/ppfill
gh release download pp-clients -R "$REPO" -D /tmp/build/ppfill 2>/dev/null || echo "PP mirror download failed"
if [ -s /tmp/build/ppfill/pp-clients.zip ]; then
  rm -rf /tmp/build/ppmirror
  unzip -q /tmp/build/ppfill/pp-clients.zip -d /tmp/build/ppfill/
  python3 - <<'PY'
import json, os, shutil
mirror = '/tmp/build/ppfill/mirror'
staging = '/tmp/build/stage/public/games'
stats = '/tmp/build/ppfill/mirror/_pilot.json'
if not os.path.exists(stats):
    print('PP gate: _pilot.json missing — publishing nothing from pp mirror')
    json.dump({'pm': []}, open('/tmp/build/pm_names.json', 'w'))
else:
    import re as _re
    noise = _re.compile(r'(?:^|/)(m(?:_[A-Za-z]+|[A-Z])[A-Za-z_]*\.\w+|-\d+\.\d+)$')
    rep = json.load(open(stats))
    pm, hidden = [], []
    for g, r in sorted(rep.items()):
        real_unfilled = [x for x in r.get('unfilled', []) if not noise.search(x)]
        if r.get('type') in ('gs2c', 'pm') and r.get('files', 0) >= 8 and not real_unfilled:
            src = os.path.join(mirror, g)
            if os.path.isdir(src):
                shutil.copytree(src, os.path.join(staging, g), dirs_exist_ok=True)
                pm.append(g)
        else:
            hidden.append(g)
    print(f'PP gate: {len(pm)} published ({pm}), hidden: {hidden}')
    json.dump({'pm': pm, 'hidden': hidden}, open('/tmp/build/pm_names.json', 'w'))
PY
else
  echo "PP mirror zip missing — PM games skipped"
  echo '{"pm": []}' > /tmp/build/pm_names.json
fi

# ---------- 3b-ter. gs2c Pragmatic starter (local-math engines + real PP clients) ----------
# Engines: louisbrant/goldsvet-pragmatic (VanguardLTE-native SlotSettings/Server
#          + PragmaticLib math; no external spin server).
# Clients: babyline00/ahmed_bet public/vs* (full official PP gs2c clients +
#          html5Game.php loader, saveSettings.do/stats.do static endpoints).
# The loader is rewritten to point gameService/RELOAD_BALANCE/CLOSE_GAME at the
# platform engine endpoint /game/<Name>/server (CSRF-exempt route that already
# serves AM/PM spins). Aux .do endpoints become static files — no new routes.
: > /tmp/build/gs2c_names.txt
GS2C_FETCHED=1
# Engines are COMMITTED in the repo (assets/pp-gs2c/engines, incl. the sqlite
# Jackpots fix and the SugarRush WinChecker syntax repair) — no clone needed.
# Clients come from the pinned ahmed_bet sparse clone (full official PP gs2c packages).
rm -rf /tmp/build/ppcli
git clone -q --depth 1 --filter=blob:none --sparse https://github.com/babyline00/ahmed_bet /tmp/build/ppcli 2>/tmp/build/gs2c_clone_cli.log \
  && (cd /tmp/build/ppcli && git sparse-checkout set public/vs20olympgate public/vs20sugarrush public/vs20pbonanza) \
  || { echo "PP CLIENT sparse clone FAILED (see /tmp/build/gs2c_clone_cli.log)"; GS2C_FETCHED=0; }
if [ "$GS2C_FETCHED" = 1 ]; then
  mkdir -p stage/app/Games stage/resources/views/frontend/games/list stage/public/games
  for pair in "GatesofOlympus:vs20olympgate" "SugarRush:vs20sugarrush" "SweetBonanza:vs20pbonanza"; do
    NAME=${pair%%:*}; SYM=${pair##*:}
    rm -rf "stage/app/Games/$NAME" "stage/public/games/$NAME"
    if [ -d "$GITHUB_WORKSPACE/assets/pp-gs2c/engines/$NAME" ] && [ -d "/tmp/build/ppcli/public/$SYM" ]; then
      cp -a "$GITHUB_WORKSPACE/assets/pp-gs2c/engines/$NAME" "stage/app/Games/$NAME"
      cp -a "/tmp/build/ppcli/public/$SYM" "stage/public/games/$NAME"
      cp -a "$GITHUB_WORKSPACE/assets/pp-gs2c/views/$NAME.blade.php" "stage/resources/views/frontend/games/list/$NAME.blade.php"
      echo "$NAME" >> /tmp/build/gs2c_names.txt
    else
      echo "GS2C MISSING SOURCES for $NAME (eng: $(ls "$GITHUB_WORKSPACE/assets/pp-gs2c/engines" 2>/dev/null | tr '\n' ' '); cli: $(ls /tmp/build/ppcli/public 2>/dev/null | tr '\n' ' '))"
    fi
  done
  if [ -s /tmp/build/gs2c_names.txt ]; then
    python3 "$GITHUB_WORKSPACE/scripts/replit-build/pp_gs2c_patch.py" /tmp/build/stage /tmp/build/gs2c_names.txt || exit 1
    if command -v composer >/dev/null 2>&1; then
      (cd stage && composer dump-autoload -o >/dev/null 2>&1 || echo "composer dump-autoload skipped/failed")
    else
      echo "composer not present — relying on dynamic psr-4 autoloading for app/Games"
    fi
  fi
  echo "GS2C starter names: $(tr '\n' ' ' < /tmp/build/gs2c_names.txt)"
fi

# ---------- 3c. AM publish list (JS-manifest verification is authoritative) ----------
python3 - <<'PY'
import json, os
# Publish ONLY games whose every JS-referenced asset is either present or
# proven absent on all live demo hosts (the reference deployment runs without
# them). Critical boot refs (shell css/js, settings scripts) must be present.
publish=set(); broken=set()
vpath='/tmp/build/amfill/mirror/_verify_final.json'
if os.path.exists(vpath):
    rep=json.load(open(vpath))
    for g,x in rep.items():
        if x['status'] in ('complete','demo_equivalent'):
            publish.add(g)
        else:
            broken.add(g)
    print('gate: _verify_final.json ->', {s: sum(1 for v in rep.values() if v['status']==s) for s in ('complete','demo_equivalent','broken')})
else:
    print('GATE INPUT MISSING — _verify_final.json not found; publishing nothing from mirror')
pack="AdmiralNelsonAM AllAmericanPokerAM AllWaysFruitsAM AllWaysJokerAM BingoAM".split()
publish_names=sorted(publish|set(pack))
with open('/tmp/build/am_names.txt','w') as f:
    f.write('\n'.join(publish_names)+'\n')
print(f'AM publish: {len(publish_names)} ({len(publish)} verified + 5 pack)')
print('hidden-broken:', ' '.join(sorted(broken-set(pack))))
PY
# PM (Pragmatic-style) names verified by the pp mirror gate join the publish list
PMN=$(python3 -c "import json;print(' '.join(json.load(open('/tmp/build/pm_names.json'))['pm']))" 2>/dev/null || true)
for N in $PMN; do
  if [ -d "stage/public/games/$N" ]; then echo "$N" >> /tmp/build/am_names.txt; fi
done
echo "PM joined: $PMN"
wc -l /tmp/build/am_names.txt
# gs2c Pragmatic starter names are published via their own w_games INSERT (4b);
# they are NOT in am_names.txt because sqlite_convert ran on the pre-existing
# catalog (gs2c rows are brand-new ids inserted after conversion).
GSN=$(tr '\n' ' ' < /tmp/build/gs2c_names.txt 2>/dev/null || true)
echo "GS2C joined: $GSN"

# NOTE: do NOT append ?config=<K> to blade amarent URLs. With no config param the
# loader requests settings__<loaderhash>.js (empty config, double underscore), which
# the demo serves and which we now mirror. A config value forces settings_<K>_<hash>.js
# which does not exist for K>=1 → guaranteed 404 (BET/LINE: NaN class). Blades stay bare.

# ---------- 4. database (AM-exclusive lobby) ----------
D60SQL=$(find /tmp/build/ex -path '*d60/d60.sql' -type f | head -1)
[ -z "${D60SQL:-}" ] && D60SQL=$(find /tmp/build/ex -name "d60.sql" -type f | head -1)
[ -n "${D60SQL:-}" ] && [ -s "$D60SQL" ] || { echo "d60.sql not found"; exit 1; }
mkdir -p stage/database stage/_mysql-legacy
cp "$D60SQL" stage/_mysql-legacy/d60.sql
cp "$GITHUB_WORKSPACE/sql/w_games-17-pack-v2-games.sql" stage/_mysql-legacy/ 2>/dev/null || true
python3 "$GITHUB_WORKSPACE/scripts/replit-build/sqlite_convert.py" \
  "$D60SQL" stage/database/database.sqlite \
  "$GITHUB_WORKSPACE/sql/w_games-17-pack-v2-games.sql" \
  /tmp/build/am_names.txt exclusive || exit 1

# ---------- 4b. gs2c Pragmatic starter w_games rows ----------
if [ -s /tmp/build/gs2c_names.txt ]; then
  python3 - "$GITHUB_WORKSPACE/sql/w_games-gs2c-starter.sql" <<'PY'
import sqlite3, sys, pathlib
sql = pathlib.Path(sys.argv[1]).read_text()
lines = [l for l in sql.splitlines() if not l.strip().startswith('--')]
con = sqlite3.connect('stage/database/database.sqlite')
n = 0
for stmt in [s.strip() for s in '\n'.join(lines).split(';') if s.strip()]:
    con.execute(stmt)
    n += 1
con.commit()
print(f'GS2C sql: {n} statements applied')
for row in con.execute("SELECT id,name,title,view,shop_id,device,gamebank FROM w_games WHERE name IN ('GatesofOlympus','SugarRush','SweetBonanza') ORDER BY id"):
    print('GS2C row:', row)
con.close()
PY
  echo "GS2C w_games rows applied"
fi

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
txt=re.sub(r'^DB_DATABASE=.*$\n?', '', txt, flags=re.M)
open(p,'w').write(txt)
print('.env written; APP_KEY present:', 'APP_KEY=base64:' in txt)
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
# Goldsvet 8.5 — Amatic-only Replit build

Full Laravel platform, lobby limited to the **Amatic (AM) games**: the 56 clients
harvested from the scriptcasino demo + the 5 pack clients (Admiral Nelson,
All American Poker, All Ways Fruits, All Ways Joker, Bingo). No other providers.

## Deploy (2 minutes)
1. replit.com -> **Create Repl** -> Template: Blank.
2. Drag this zip into Files, then in Shell:
   `unzip -o <name>.zip -d . && rm <name>.zip`
3. Press **Run** (run.sh -> `php artisan serve` on 0.0.0.0:8080).
4. Open the Webview. Admin: `/admin`. Register players at `/register`.

## Database
- **Active:** `database/database.sqlite` — all tables converted from the original
  dump, but only the AM games are published (view=1, shop 1). Everything else hidden.
- **MySQL path:** `_mysql-legacy/d60.sql` (+ the 17-game upsert if you want the full
  original catalog on a VPS instead).

## Notes
- `.env` ships a fresh APP_KEY, sqlite driver, APP_DEBUG=false.
- Partially-mirrored AM games are in `public/games/` but hidden — enable them in
  the admin (Games -> view) once you audit their assets.
- **gs2c Pragmatic starter** (GatesofOlympus, SugarRush, SweetBonanza): real
  Pragmatic Play gs2c clients with local-math engines (no external spin server).
  Engine per game in `app/Games/<Name>/`, client in `public/games/<Name>/gs2c/`,
  spins via `/game/<Name>/server` (the platform engine endpoint, CSRF-exempt).
- Spins work over HTTP; live websocket features may not connect via Replit proxy.
- Audit engines (RtpControlCount) before real money; licensing is your responsibility.
EOF

# ---------- 7. vendor patches ----------
HE=/tmp/build/stage/vendor/laravel/framework/src/Illuminate/Foundation/Bootstrap/HandleExceptions.php
if [ -f "$HE" ]; then
  sed -i 's/error_reporting(-1)/error_reporting(E_ALL \& ~E_DEPRECATED \& ~E_USER_DEPRECATED)/' "$HE"
  grep -n "error_reporting" "$HE" | head -1
else
  echo "HandleExceptions.php not found"; exit 1
fi
python3 - <<'PY'
import re
p='/tmp/build/stage/vendor/nesbot/carbon/src/Carbon/Traits/Creator.php'
s=open(p).read()
pat=re.compile(r'private static function setLastErrors\(array \$lastErrors\)\s*\{\s*static::\$lastErrors = \$lastErrors;\s*\}')
rep=("private static function setLastErrors($lastErrors)\n    {\n"
     "        static::$lastErrors = is_array($lastErrors) ? $lastErrors : ['warning_count' => 0, 'warnings' => [], 'error_count' => 0, 'errors' => []];\n    }")
s2,n=pat.subn(rep, s)
if n:
    open(p,'w').write(s2)
    print('CARBON PATCH applied')
else:
    print('CARBON PATCH: pattern not found')
    raise SystemExit(1)
PY

# ---------- 7b. sqlite compat provider ----------
mkdir -p /tmp/build/stage/app/Providers
cat > /tmp/build/stage/app/Providers/SqliteCompatProvider.php <<'EOF'
<?php

namespace App\Providers;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\ServiceProvider;

class SqliteCompatProvider extends ServiceProvider
{
    public function register() {}

    public function boot()
    {
        if (config('database.default') !== 'sqlite') { return; }
        try { $pdo = DB::connection()->getPdo(); } catch (\Throwable $e) { return; }
        $dt = function ($v) {
            if ($v === null) { return null; }
            $t = strtotime((string) $v);
            return $t === false ? null : $t;
        };
        $funcs = [
            'rand' => function ($seed = null) { mt_srand($seed === null ? mt_rand() : (int) $seed); return mt_rand() / mt_getrandmax(); },
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
            'concat' => function (...$a) { return implode('', array_map(function ($x) { return $x === null ? '' : (string) $x; }, $a)); },
            'concat_ws' => function ($sep = null, ...$a) { if ($sep === null) { return null; } return implode((string) $sep, array_values(array_filter($a, function ($x) { return $x !== null; }))); },
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
            'sec_to_time' => function ($s) { if ($s === null) { return null; } $s = abs((int) $s); return sprintf('%02d:%02d:%02d', floor($s / 3600), floor($s / 60) % 60, $s % 60); },
            'time_to_sec' => function ($v) { if ($v === null) { return null; } sscanf(trim((string) $v), '%d:%d:%d', $h, $m, $x); return ((int) $h) * 3600 + ((int) $m) * 60 + (int) $x; },
            'date_format' => function ($v, $fmt) use ($dt) {
                $t = $dt($v);
                if ($t === null || $fmt === null) { return null; }
                $map = ['%Y'=>'%Y','%y'=>'%y','%m'=>'%m','%c'=>'%m','%d'=>'%d','%e'=>'%e','%H'=>'%H','%k'=>'%k','%h'=>'%I','%I'=>'%I','%l'=>'%l','%i'=>'%M','%s'=>'%S','%S'=>'%S','%p'=>'%p','%W'=>'%A','%a'=>'%a','%M'=>'%B','%b'=>'%b','%j'=>'%j','%u'=>'%W','%U'=>'%U','%w'=>'%w','%T'=>'%T'];
                $sf = ''; $n = strlen($fmt);
                for ($i = 0; $i < $n; $i++) {
                    if ($fmt[$i] === '%' && $i + 1 < $n) { $two = '%' . $fmt[$i + 1]; $sf .= isset($map[$two]) ? $map[$two] : $two; $i++; }
                    else { $sf .= $fmt[$i]; }
                }
                return @strftime($sf, $t);
            },
            'greatest' => function (...$a) { $v = array_values(array_filter($a, function ($x) { return $x !== null; })); return empty($v) ? null : max($v); },
            'least' => function (...$a) { $v = array_values(array_filter($a, function ($x) { return $x !== null; })); return empty($v) ? null : min($v); },
        ];
        foreach ($funcs as $name => $fn) { $pdo->sqliteCreateFunction($name, $fn, -1); }
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
        i=s.find("'providers'"); j=s.find("];", i)
        s=s[:j]+"        App\\Providers\\SqliteCompatProvider::class,\n"+s[j:]
    open(p,'w').write(s)
    print('SqliteCompatProvider registered')
else:
    print('SqliteCompatProvider already registered')
PY

# ---------- 8. smoke test ----------
php -v | head -1
php -r 'new PDO("sqlite:database/database.sqlite"); echo "pdo-sqlite OK\n";'
php artisan --version || { echo "ARTISAN BOOT FAILED"; exit 1; }

# seed the demo01 free-play user (used by /game/<game>/demo prego route -> Auth::login)
php -r '
require "vendor/autoload.php";
$app = require_once "bootstrap/app.php";
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();
try {
  $db = \Illuminate\Support\Facades\DB::getFacadeRoot();
  $roleId = $db->table("roles")->whereIn("name", ["user", "User"])->value("id");
  if (!$roleId) { $roleId = $db->table("roles")->min("id") ?: 5; }
  if (!$db->table("users")->where("email", "demo01@gmail.com")->first()) {
    $db->table("users")->insert([
      "name" => "demo01", "username" => "demo01", "email" => "demo01@gmail.com",
      "password" => password_hash("Qwerty123456", PASSWORD_BCRYPT),
      "role_id" => $roleId, "shop_id" => 1, "balance" => 10000, "count_balance" => 10000,
      "created_at" => date("Y-m-d H:i:s"), "updated_at" => date("Y-m-d H:i:s"),
    ]);
    echo "DEMO USER CREATED role=" . $roleId . "\n";
  } else { echo "DEMO USER EXISTS\n"; }
} catch (\Throwable $e) { echo "DEMO USER FAIL: " . $e->getMessage() . "\n"; }
'

(php artisan serve --host=127.0.0.1 --port=8099 >/tmp/build/logs/serve.log 2>&1 &)
sleep 12
CODE=$(curl -s -o /tmp/build/logs/root.html -w '%{http_code}' -L http://127.0.0.1:8099/ || echo curlfail)
echo "HTTP GET / -> $CODE"
curl -s -o /dev/null -w 'HTTP GET /login -> %{http_code}\n' http://127.0.0.1:8099/login || true
head -c 200 /tmp/build/logs/root.html || true

# ---------- 8b. gs2c Pragmatic end-to-end (open game -> doInit -> doSpin) ----------
GS2C_E2E=0
if [ -s /tmp/build/gs2c_names.txt ]; then
  for NAME in $(cat /tmp/build/gs2c_names.txt); do
    JAR=/tmp/build/jar_$NAME.txt; rm -f $JAR
    CODE=$(curl -s -c $JAR -o /tmp/build/go_$NAME.html -w '%{http_code}' -L "http://127.0.0.1:8099/game/$NAME/demo" || echo curlfail)
    BLADE=$(grep -c "gs2c/html5Game.php" /tmp/build/go_$NAME.html 2>/dev/null || echo 0)
    INIT=$(curl -s -b $JAR -X POST "http://127.0.0.1:8099/game/$NAME/server" --data "action=doInit&index=1&counter=0" | head -c 60000)
    SPIN=$(curl -s -b $JAR -X POST "http://127.0.0.1:8099/game/$NAME/server" --data "action=doSpin&c=0.10&l=20&index=1&counter=1&bl=0&pur=1" | head -c 60000)
    echo "GS2C E2E $NAME: go=$CODE bladeRefs=$BLADE"
    echo "  doInit: $(echo "$INIT" | head -c 150)"
    echo "  doSpin: $(echo "$SPIN" | head -c 150)"
    if echo "$INIT" | grep -qE "balance=[0-9]" && echo "$SPIN" | grep -qE "tw=[0-9]" && echo "$SPIN" | grep -qE "(^|&)s=[0-9]"; then
      echo "  GS2C E2E $NAME: PASS"
      GS2C_E2E=1
    else
      echo "  GS2C E2E $NAME: FAIL (doInit/doSpin invalid)"
      GS2C_E2E=2
    fi
  done
  if [ "$GS2C_E2E" = 2 ]; then echo "GS2C E2E FAILED"; exit 1; fi
fi
LLOG=$(ls -t /tmp/build/stage/storage/logs/laravel*.log 2>/dev/null | head -1)
if [ -n "${LLOG:-}" ]; then
  python3 - "$LLOG" <<'PY'
import sys
txt=open(sys.argv[1],encoding='utf-8',errors='replace').read()
idx=txt.rfind('.ERROR: ')
print('--- exception headline ---')
print(txt[idx:idx+400].replace('\n',' ') if idx!=-1 else '(no .ERROR entry found)')
PY
fi
pkill -f "artisan serve" || true
sleep 1

# ---------- 9. zip + release ----------
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
PUB=$(wc -l < /tmp/build/am_names.txt)
GS2C_N=$(wc -l < /tmp/build/gs2c_names.txt 2>/dev/null || echo 0)
TOTAL_PUB=$((PUB + GS2C_N))
echo "FINAL: $SIZE bytes  sha256=$SHA  published=$TOTAL_PUB (incl. $GS2C_N gs2c)"
if [ "$SIZE" -ge 2000000000 ]; then
  split -b 1900000000 -d final.zip part_
  ls -la part_*
fi

if ls part_* >/dev/null 2>&1; then
cat > notes.md <<EOF
**Goldsvet 8.5 — Amatic + Pragmatic Replit build** (auto-assembled $(date -u +%F))

Full zip is ${SIZE} bytes (sha256 \`$SHA\`) — split into two parts. Reassemble:

\`\`\`bash
cat part_00 part_01 > amatic-replit-ready.zip
sha256sum amatic-replit-ready.zip   # must equal $SHA
\`\`\`

Lobby: **Amatic + PM + gs2c Pragmatic starter** — $TOTAL_PUB published ($PUB AM/PM + $GS2C_N gs2c real-PP games with local math).
Deploy steps in \`README-REPLIT.md\` inside the zip.
EOF
else
cat > notes.md <<EOF
**Goldsvet 8.5 — Amatic + Pragmatic Replit build** (auto-assembled $(date -u +%F))

- Single asset: **final.zip** — ${SIZE} bytes, sha256 \`$SHA\`
- Full Laravel platform; lobby limited to **Amatic + Pragmatic-style PM games** — $PUB published (AM verified against per-game JS manifests incl. settings__<hash>.js boot scripts; PM harvested manifest-first from the reference demo), incomplete games hidden
- **gs2c Pragmatic starter: $GS2C_N real PP games with local math engines** — GatesofOlympus, SugarRush, SweetBonanza (engines: VanguardLTE-native PragmaticLib; clients: official gs2c packages; spins via \`/game/<Name>/server\`; verified end-to-end in CI: open → doInit → doSpin)
- DB: \`database/database.sqlite\` pre-converted, curated lobby; MySQL legacy path included
- Deploy: import into a blank Repl -> \`unzip\` -> Run. Steps in \`README-REPLIT.md\` inside the zip.
EOF
fi

if ls part_* >/dev/null 2>&1; then
  gh release view amatic-replit-ready -R "$REPO" >/dev/null 2>&1 \
    && gh release upload amatic-replit-ready part_* -R "$REPO" --clobber \
    || gh release create amatic-replit-ready part_* -R "$REPO" \
         --title "Goldsvet 8.5 — Amatic-only Replit build" --notes-file notes.md
else
  gh release view amatic-replit-ready -R "$REPO" >/dev/null 2>&1 \
    && gh release upload amatic-replit-ready final.zip -R "$REPO" --clobber \
    || gh release create amatic-replit-ready final.zip -R "$REPO" \
         --title "Goldsvet 8.5 — Amatic-only Replit build" --notes-file notes.md
fi
gh release edit amatic-replit-ready -R "$REPO" --notes-file notes.md >/dev/null
gh release view amatic-replit-ready -R "$REPO" --json assets --jq '.assets[] | {name,size,state}'
echo "BUILD OK"
