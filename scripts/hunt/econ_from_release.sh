#!/usr/bin/env bash
# econ_from_release.sh — pull the economy seed numbers from the DEPLOYED pack
# (release amatic-replit-ready part_00..02 → database.sqlite), which is the
# exact DB the user's Replit runs. Output: /tmp/econ.log
set -uo pipefail
LOG=/tmp/econ.log
: > "$LOG"
log(){ echo "$@" | tee -a "$LOG"; }
cd /tmp && rm -rf econzip && mkdir econzip && cd econzip

log "=== downloading release parts ==="
REPO="${REPO:-oussema282/swapi}"
for P in part_00 part_01 part_02; do
  curl -sfL -H "Authorization: token ${GITHUB_TOKEN:-}" \
    "https://api.github.com/repos/${REPO}/releases/assets/$(curl -sfL -H "Authorization: token ${GITHUB_TOKEN:-}" "https://api.github.com/repos/${REPO}/releases/tags/amatic-replit-ready" | python3 -c "import json,sys;d=json.load(sys.stdin);print([a['id'] for a in d['assets'] if a['name']=='$P'][0])")" \
    -H "Accept: application/octet-stream" -o "$P" || { log "download $P FAILED"; exit 1; }
  log "$P: $(stat -c%s "$P") bytes"
done
log "reassembling…"
cat part_00 part_01 part_02 > full.zip
SHA=$(sha256sum full.zip | awk '{print $1}')
log "full.zip: $(stat -c%s full.zip) bytes sha256=$SHA (expect 22136ac6fd222d9c…)"
rm -f part_00 part_01 part_02

log "=== extracting database.sqlite only ==="
unzip -o -q full.zip "database/database.sqlite" -d stage || { log "unzip failed"; exit 1; }
rm -f full.zip
DB=stage/database/database.sqlite
[ -f "$DB" ] || { log "db not found"; exit 1; }
log "db: $(stat -c%s "$DB") bytes"

log ""
log "=== w_shops (id, name, percent, balance) ==="
python3 - "$DB" <<'PY'
import sqlite3, sys
con = sqlite3.connect(sys.argv[1])
cols = [r[1] for r in con.execute("PRAGMA table_info(w_shops)")]
pick = [c for c in ('id','name','percent','balance','show_reel') if c in cols]
for r in con.execute(f"SELECT {','.join(pick)} FROM w_shops"):
    print(f"shop: {r}")
print("")
print("=== w_game_bank rows ===")
gbcols = [r[1] for r in con.execute("PRAGMA table_info(w_game_bank)")]
print("columns: " + ", ".join(gbcols))
for r in con.execute("SELECT * FROM w_game_bank"):
    print(f"bank: {r}")
print("")
print("=== users (id, name, role_id, shop_id, balance, count_balance) ===")
ucols = [r[1] for r in con.execute("PRAGMA table_info(w_users)")]
pick = [c for c in ('id','name','role_id','shop_id','balance','count_balance') if c in ucols]
for r in con.execute(f"SELECT {','.join(pick)} FROM w_users LIMIT 12"):
    print(f"user: {r}")
print("")
print("=== w_jpg (jackpots) ===")
try:
    for r in con.execute("SELECT id, name, shop_id, balance, start_balance, percent FROM w_jpg LIMIT 10"):
        print(f"jpg: {r}")
    print(f"jpg count: {con.execute('SELECT COUNT(*) FROM w_jpg').fetchone()[0]}")
except Exception as e:
    print(f"jpg query: {e}")
print("")
print("=== gs2c w_games rows (stat bookkeeping) ===")
for r in con.execute("SELECT id,name,view,stat_in,stat_out,bids FROM w_games WHERE id BETWEEN 9101 AND 9134 LIMIT 40"):
    print(f"game: {r}")
print("")
print("=== happyhours (bank multipliers) ===")
try:
    hh = con.execute("SELECT COUNT(*) FROM w_happyhours").fetchone()[0]
    print(f"happyhours rows: {hh}")
    for r in con.execute("SELECT * FROM w_happyhours LIMIT 4"):
        print(f"hh: {str(r)[:300]}")
except Exception as e:
    print(f"hh: {e}")
con.close()
PY
log "ECON DUMP DONE"
