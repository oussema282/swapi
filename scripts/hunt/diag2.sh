#!/usr/bin/env bash
# Isolate why the big theme JS fails inside the mirror but works in diag
set -uo pipefail
exec > >(tee /tmp/diag2.log) 2>&1
set -x
UA="Mozilla/5.0 (X11; Linux x86_64; rv:124.0) Gecko/20100101 Firefox/124.0"
U=https://demo4.scriptcasino.ru/games/BigPandaAM/bigpanda/src/bigpanda_00316940.js

echo "--- plain (diag style)";   curl -sS -A "$UA" --max-time 30 -o /tmp/a.bin -w 'code=%{http_code} size=%{size_download} time=%{time_total}\n' "$U"
echo "--- compressed (mirror style)"; curl -sS --compressed -A "$UA" --max-time 60 -o /tmp/b.bin -w 'code=%{http_code} size=%{size_download} time=%{time_total}\n' "$U"
echo "--- compressed + referer"; curl -sS --compressed -A "$UA" -e "https://demo4.scriptcasino.ru/games/BigPandaAM/amarent/" --max-time 60 -o /tmp/c.bin -w 'code=%{http_code} size=%{size_download} time=%{time_total}\n' "$U"
echo "--- compressed twice in a row (warm)"; curl -sS --compressed -A "$UA" --max-time 60 -o /tmp/d.bin -w 'code=%{http_code} size=%{size_download} time=%{time_total}\n' "$U"; curl -sS --compressed -A "$UA" --max-time 60 -o /tmp/e.bin -w 'code=%{http_code} size=%{size_download} time=%{time_total}\n' "$U"
echo "--- 6 concurrent compressed (simulate pool)"; for i in 1 2 3 4 5 6; do curl -sS --compressed -A "$UA" --max-time 60 -o /tmp/f$i.bin -w "w$i: code=%{http_code} size=%{size_download} time=%{time_total}\n" "$U" & done; wait
ls -la /tmp/*.bin | head -10
echo DIAG2_DONE
