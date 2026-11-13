#!/usr/bin/env bash
# Root-level probe for the shared UI assets the per-game probes missed
set -uo pipefail
exec > >(tee /tmp/diag.log) 2>&1
UA="Mozilla/5.0 (X11; Linux x86_64; rv:124.0) Gecko/20100101 Firefox/124.0"
c(){ for HOST in https://demo4.scriptcasino.ru https://demo5.scriptcasino.ru; do
  CODE=$(curl -s -o /dev/null -w '%{http_code}' -A "$UA" --max-time 15 "$HOST$1"); echo "$HOST$1 -> $CODE"
done; }
for N in buttonback.png jackpot.png load.jpg load_amatic.png reelanim.png gui_desktop_v17.json mystery_jackpot.json; do
  echo "### $N"
  c "/amatic/images/800_600/$N"
  c "/games/common/images/800_600/$N"
  c "/games/_common/images/800_600/$N"
  c "/static/images/800_600/$N"
  c "/games/$N"
  c "/images/800_600/$N"
done
echo "### version-neighbour check on a working client (AllWaysWin)"
c "/games/AllWaysWinAM/allwayswin/images/800_600/gui_desktop_v27.json"
c "/games/AllWaysWinAM/allwayswin/images/800_600/symbols_small.png"
echo "### alternate shells: what does the DEMO lobby actually load? (iframe page)"
c "/demo/AllWaysWinAM.html"
echo DIAG_ROOT_DONE
