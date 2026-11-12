#!/usr/bin/env bash
# Probe canonical Amatic asset paths on the demo
set -uo pipefail
exec > >(tee /tmp/diag3.log) 2>&1
UA="Mozilla/5.0 (X11; Linux x86_64; rv:124.0) Gecko/20100101 Firefox/124.0"
B=https://demo4.scriptcasino.ru
c(){ CODE=$(curl -s -o /tmp/d3.bin -w '%{http_code}' -A "$UA" --max-time 20 "$B$1"); SZ=$(stat -c%s /tmp/d3.bin 2>/dev/null || echo 0); echo "$1 -> $CODE ($SZ B)"; }
for N in BigPandaAM BillyonaireAM; do
  T=$(echo "$N" | sed -E 's/AM$//' | tr 'A-Z' 'a-z')
  echo "########## $N theme=$T"
  c "/games/$N/$T/images/800_600/main.png"
  c "/games/$N/$T/images/800_600/winPanel.png"
  c "/games/$N/$T/images/800_600/symbanim1.jpg"
  c "/games/$N/$T/sounds/reels.mp3"
  c "/games/$N/$T/sounds/onstart.mp3"
  c "/games/$N/basic/images/800_600/loadanim.png"
  c "/games/$N/basic/sounds/btn.mp3"
  c "/games/$N/slot/images/800_600/wins.png"
  c "/games/$N/slot/sounds/bigwin.mp3"
  c "/games/$N/gamble/images/800_600/gamble.png"
  c "/games/$N/$T/src/main.css"
done
echo DIAG3_DONE
