#!/usr/bin/env python3
"""Trace the exact network requests a demo game client makes in headless Chromium.
Output: JSON {game: [urls]} — the authoritative boot-time file manifest."""
import sys, json, time
from playwright.sync_api import sync_playwright

BASE = "https://demo4.scriptcasino.ru"
GAMES = sys.argv[1:] or ["BigBassBonanza", "BookofTut", "WolfGold", "AncientEgyptPM"]

out = {}
errors = {}
with sync_playwright() as pw:
    browser = pw.chromium.launch(headless=True, args=["--no-sandbox"])
    ctx = browser.new_context(viewport={"width": 1280, "height": 800},
                              user_agent="Mozilla/5.0 (X11; Linux x86_64; rv:124.0) Gecko/20100101 Firefox/124.0")
    for g in GAMES:
        page = ctx.new_page()
        urls = []
        page.on("request", lambda req, _urls=urls, _g=g: _urls.append(req.url) if ("/games/" in req.url) else None)
        page.on("requestfailed", lambda req, _e=errors, _g=g: _e.setdefault(g, []).append(req.url + " :: " + str(req.failure)))
        try:
            page.goto(f"{BASE}/demo/{g}?api_exit=/", wait_until="domcontentloaded", timeout=45000)
            page.wait_for_timeout(25000)   # let the loading screen pull its assets
        except Exception as e:
            errors.setdefault(g, []).append("goto: " + str(e))
        # dedupe, keep order
        seen = set(); ordered = []
        for u in urls:
            k = u.split('?')[0]
            if k not in seen:
                seen.add(k); ordered.append(u)
        out[g] = ordered
        print(f"{g}: {len(ordered)} unique game requests", flush=True)
        page.close()
    browser.close()

json.dump({"requests": out, "errors": errors}, open("/tmp/pp/trace.json", "w"), indent=1)
print("TRACE DONE", flush=True)
