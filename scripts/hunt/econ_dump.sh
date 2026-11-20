#!/usr/bin/env bash
# econ_dump.sh — extract the economy seed values from the 8.5 d60 dump:
# shop percent (house edge knob), game banks (payout reserve), user
# balance/count_balance, jackpots, per-game stat_in/stat_out (historical RTP
# evidence). Self-contained: downloads the payload rar from Drive, unrars,
# greps d60.sql. Output: /tmp/econ.log
set -uo pipefail
cd /tmp && rm -rf econ && mkdir econ && cd econ
LOG=/tmp/econ.log
: > "$LOG"
log(){ echo "$@" | tee -a "$LOG"; }

log "=== payload download ==="
python3 -m pip install -q gdown
OK=0
FID_LIST=(1GrVmYgMOMMP3Nhj-tdgrSsdhlUxUy8Ov 1G36TB-guho76QTnBFaeYOGRQa2JkXe7I 1M504Ai3gwQ8bGSpFVraXEkb2o2811MmU)
for FID in "${FID_LIST[@]}"; do
  if gdown --fuzzy "https://drive.google.com/file/d/${FID}/view" -O payload.rar >/dev/null 2>&1 \
     && head -c 7 payload.rar | xxd -p | grep -qi "^526172211a07"; then OK=1; break; fi
done
[ "$OK" = 1 ] || { log "RAR DOWNLOAD FAILED"; exit 1; }
log "payload.rar: $(stat -c%s payload.rar) bytes  sha256=$(sha256sum payload.rar | awk '{print $1}' | head -c 16)…"

log "=== unrar ==="
curl -sSL -o unrar.tar.gz "https://codeload.github.com/pmachapman/unrar/tar.gz/refs/heads/master"
tar xzf unrar.tar.gz && (cd unrar-master && make -j2 -s >/dev/null 2>&1)
U=/tmp/econ/unrar-master/unrar
[ -x "$U" ] || { log "unrar build failed"; exit 1; }
mkdir ex && (cd ex && "$U" x -y ../payload.rar >/dev/null 2>&1)
SQL=$(find ex -name 'd60.sql' -type f | head -1)
[ -z "$SQL" ] && SQL=$(find ex -name '*.sql' -type f | head -1)
[ -z "$SQL" ] && SQL=$(find ex -path '*d60*' -type f | head -20 | while read f; do grep -l "CREATE TABLE" "$f" 2>/dev/null | head -1; done | head -1)
[ -z "$SQL" ] && { log "no sql dump found in rar"; find ex -type f | head -30 >> "$LOG"; exit 1; }
log "dump: $SQL ($(stat -c%s "$SQL") bytes)"

log ""
log "=== w_shops: CREATE TABLE ==="
awk '/CREATE TABLE `w_shops`/,/ENGINE/' "$SQL" | head -40 >> "$LOG" || true
log "=== w_shops: INSERT (truncated 900c) ==="
grep -m3 "INSERT INTO \`w_shops\`" "$SQL" | cut -c1-900 >> "$LOG" || echo "(none)" >> "$LOG"

log ""
log "=== w_game_bank: CREATE TABLE ==="
awk '/CREATE TABLE `w_game_bank`/,/ENGINE/' "$SQL" >> "$LOG" || true
log "=== w_game_bank: INSERTs (first 6, truncated 700c) ==="
grep -m6 "INSERT INTO \`w_game_bank\`" "$SQL" | cut -c1-700 >> "$LOG" || echo "(none)" >> "$LOG"

log ""
log "=== w_users: CREATE TABLE (balance/count cols) ==="
awk '/CREATE TABLE `w_users`/,/ENGINE/' "$SQL" | grep -E "balance|count_balance|role_id|shop_id|CREATE TABLE" >> "$LOG" || true
log "=== w_users: INSERT (first 3, truncated 800c) ==="
grep -m3 "INSERT INTO \`w_users\`" "$SQL" | cut -c1-800 >> "$LOG" || echo "(none)" >> "$LOG"

log ""
log "=== w_jpg: CREATE TABLE ==="
awk '/CREATE TABLE `w_jpg`/,/ENGINE/' "$SQL" | head -30 >> "$LOG" || true
log "=== w_jpg: INSERT (first 4, truncated 500c) ==="
grep -m4 "INSERT INTO \`w_jpg\`" "$SQL" | cut -c1-500 >> "$LOG" || echo "(none)" >> "$LOG"

log ""
log "=== w_games stat_in/stat_out (top by turnover, first 15 INSERT tuples, truncated 400c) ==="
grep -m1 "INSERT INTO \`w_games\`" "$SQL" | cut -c1-6000 >> "$LOG" || true

log ""
log "=== w_stat_games: row count evidence ==="
grep -c "INSERT INTO \`w_stat_games\`" "$SQL" >> "$LOG" 2>/dev/null || echo "0" >> "$LOG"
log "=== happyhours / other econ tables present ==="
grep -oE "CREATE TABLE \`w_[a-z_]+\`" "$SQL" | sort -u >> "$LOG"

log "ECON DUMP DONE"
