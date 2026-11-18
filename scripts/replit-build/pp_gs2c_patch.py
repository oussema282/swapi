#!/usr/bin/env python3
"""pp-gs2c starter patcher.

Wires the 3 gs2c Pragmatic games (GatesofOlympus, SugarRush, SweetBonanza)
into the Vanguard 8.5 stage:

  1. rewrites each client loader (gs2c/html5Game.php) config:
       - client paths    /public/<sym>/gs2c/...  and /games/<sym>/gs2c/...
                         -> /games/<Name>/gs2c/...
       - gameService     -> /game/<Name>/server   (existing Vanguard engine endpoint)
       - RELOAD_BALANCE/CLOSE_GAME -> /game/<Name>/server
       - SETTINGS/LOGOUT/RELOAD_JACKPOT -> static .do files inside the client dir
       - GET param guards (user/cur/lang) so missing params cannot break the
         gameConfig JSON with PHP notices
  2. adds static endpoint files (logout.do, jackpot/reload.do,
     regulation/process.do, common/js/logo_info.js)
  3. writes app/Games/pp_gs2c_list.php (engine-name allowlist)
  4. patches GamesController@server to skip the active-tab/subsession check
     for gs2c games (the PP client does not send Vanguard sessionId fields)
  5. gates + php -l lint

Usage: pp_gs2c_patch.py <stage_dir> <names_file>
"""
import os
import re
import shutil
import subprocess
import sys

GAME_MAP = {
    'GatesofOlympus': ('vs20olympgate', 'Gates of Olympus'),
    'SugarRush':      ('vs20sugarrush', 'Sugar Rush'),
    'SweetBonanza':   ('vs20pbonanza',  'Sweet Bonanza'),
}

OK_JSON = '{"error":0,"description":"OK"}'
LOGO_JS = ('logo_info={"big":"","medium":"","small":"","depositPage":false};\n')


def php_lint(path, php):
    if not php:
        return True
    r = subprocess.run([php, '-l', path], capture_output=True, text=True)
    ok = r.returncode == 0
    if not ok:
        print(f'  PHP LINT FAIL {path}: {r.stderr.strip()[:400]}')
    return ok


def patch_loader(path, name, sym, gname):
    s = open(path, encoding='utf-8', errors='replace').read()
    orig = s
    # 1. client path rewrites (both loader template generations)
    s = s.replace(f'/public/{sym}/gs2c/', f'/games/{name}/gs2c/')
    s = s.replace(f'/games/{sym}/gs2c/', f'/games/{name}/gs2c/')
    # 2. gameService -> engine endpoint (after path rewrite)
    s = s.replace(f'/games/{name}/gs2c/v3/gameService', f'/game/{name}/server')
    s = s.replace(f'/public/{sym}/gs2c/v3/gameService', f'/game/{name}/server')
    s = s.replace(f'/games/{sym}/gs2c/v3/gameService', f'/game/{name}/server')
    # 3. balance / close endpoints
    s = s.replace(f'/public/{sym}/server', f'/game/{name}/server')
    s = s.replace(f'/game/{sym}/server', f'/game/{name}/server')
    # 4. auxiliary endpoints -> static files inside the client dir
    s = s.replace('"/gs2c/logout.do"', f'"/games/{name}/gs2c/logout.do"')
    s = s.replace('"/gs2c/jackpot/reload.do"', f'"/games/{name}/gs2c/jackpot/reload.do"')
    s = s.replace('"/gs2c/saveSettings.do"', f'"/games/{name}/gs2c/saveSettings.do"')
    s = s.replace("'/gs2c/logout.do'", f"'/games/{name}/gs2c/logout.do'")
    s = s.replace("'/gs2c/jackpot/reload.do'", f"'/games/{name}/gs2c/jackpot/reload.do'")
    s = s.replace("'/gs2c/saveSettings.do'", f"'/games/{name}/gs2c/saveSettings.do'")
    # 5. GET param guards (missing params must not emit PHP notices into the
    #    gameConfig JSON)
    s = s.replace("$_GET['user']", "($_GET['user'] ?? '')")
    s = s.replace('$_GET["user"]', '($_GET["user"] ?? \'\')')
    s = s.replace("$_GET['cur']", "($_GET['cur'] ?? 'USD')")
    s = s.replace('$_GET["cur"]', '($_GET["cur"] ?? \'USD\')')
    s = s.replace("$_GET['lang']", "($_GET['lang'] ?? 'en')")
    s = s.replace('$_GET["lang"]', '($_GET["lang"] ?? \'en\')')
    # 6. cosmetic: first <title> -> proper game name
    s = re.sub(r'<title>[^<]*</title>', f'<title>{gname}</title>', s, count=1)
    if s != orig:
        open(path, 'w', encoding='utf-8').write(s)


def add_static_endpoints(cli_dir):
    gs2c = os.path.join(cli_dir, 'gs2c')
    os.makedirs(os.path.join(gs2c, 'jackpot'), exist_ok=True)
    os.makedirs(os.path.join(gs2c, 'regulation'), exist_ok=True)
    os.makedirs(os.path.join(gs2c, 'common', 'js'), exist_ok=True)
    for rel in ('logout.do', 'jackpot/reload.do', 'regulation/process.do'):
        p = os.path.join(gs2c, rel)
        if not os.path.exists(p):
            open(p, 'w').write(OK_JSON)
    p = os.path.join(gs2c, 'common', 'js', 'logo_info.js')
    if not os.path.exists(p):
        open(p, 'w').write(LOGO_JS)


def patch_controller(stage):
    ctrl = None
    for root, _dirs, files in os.walk(os.path.join(stage, 'app')):
        if 'GamesController.php' in files and 'Frontend' in root:
            ctrl = os.path.join(root, 'GamesController.php')
            break
    if not ctrl:
        print('PP-GS2C PATCH: Frontend GamesController.php NOT FOUND')
        raise SystemExit(1)
    s = open(ctrl, encoding='utf-8').read()
    if 'pp_gs2c_list' in s:
        print('GamesController already patched for gs2c')
        return ctrl
    fun = s.find('function server(')
    if fun == -1:
        print('PP-GS2C PATCH: server() not found in GamesController')
        raise SystemExit(1)
    m = re.compile(
        r'\$\s*subssession\s*=\s*\\?VanguardLTE\\Subsession::where\(\['
    ).search(s, fun)
    if not m:
        print('PP-GS2C PATCH: subsession start marker not found')
        raise SystemExit(1)
    a = m.start()
    m2 = re.compile(
        r"\\?VanguardLTE\\Subsession::where\('id',\s*'!=',\s*\$subssession->id\)"
        r"[^;]*update\(\['active'\s*=>\s*0\]\);"
    ).search(s, m.end())
    if not m2:
        print('PP-GS2C PATCH: subsession end marker not found')
        raise SystemExit(1)
    inject_pre = (
        "$gs2cNames = (array) (is_file(app_path('Games/pp_gs2c_list.php'))"
        " ? include app_path('Games/pp_gs2c_list.php') : []);\n"
        "            if (!in_array($game, $gs2cNames, true)) {\n"
        "            "
    )
    s = s[:a] + inject_pre + s[a:m2.end()] + "\n            }" + s[m2.end():]
    open(ctrl, 'w', encoding='utf-8').write(s)
    print(f'GamesController patched for gs2c bypass: {ctrl}')
    return ctrl


def main():
    stage = os.path.abspath(sys.argv[1])
    names = [n.strip() for n in open(sys.argv[2]) if n.strip()]
    php = shutil.which('php')
    if not names:
        print('PP-GS2C: no names — nothing to patch')
        return
    for name in names:
        if name not in GAME_MAP:
            print(f'PP-GS2C: unknown game {name} in names file')
            raise SystemExit(1)
    # 1. allowlist file (repr(list) is valid PHP array syntax)
    list_php = os.path.join(stage, 'app', 'Games', 'pp_gs2c_list.php')
    os.makedirs(os.path.dirname(list_php), exist_ok=True)
    open(list_php, 'w').write('<?php\nreturn ' + repr(names) + ';\n')
    # 2. per-game client+engine wiring
    for name in names:
        sym, gname = GAME_MAP[name]
        eng = os.path.join(stage, 'app', 'Games', name)
        cli = os.path.join(stage, 'public', 'games', name)
        loader = os.path.join(cli, 'gs2c', 'html5Game.php')
        blade = os.path.join(stage, 'resources', 'views', 'frontend',
                             'games', 'list', name + '.blade.php')
        # engine gate
        eng_files = []
        for root, _d, fs in os.walk(eng):
            eng_files += [os.path.join(root, f) for f in fs]
        if len(eng_files) < 20:
            print(f'PP-GS2C GATE FAIL {name}: engine files {len(eng_files)} < 20')
            raise SystemExit(1)
        for must in ('Server.php', 'SlotSettings.php', 'init.php'):
            if not os.path.exists(os.path.join(eng, must)):
                print(f'PP-GS2C GATE FAIL {name}: engine missing {must}')
                raise SystemExit(1)
        # client gate
        cli_files = []
        for root, _d, fs in os.walk(os.path.join(cli, 'gs2c')):
            cli_files += [os.path.join(root, f) for f in fs]
        if len(cli_files) < 8:
            print(f'PP-GS2C GATE FAIL {name}: client files {len(cli_files)} < 8')
            raise SystemExit(1)
        for must in ('device.js', 'addon.js'):
            if not os.path.exists(os.path.join(cli, must)):
                print(f'PP-GS2C GATE FAIL {name}: client root missing {must}')
                raise SystemExit(1)
        if not os.path.exists(blade):
            print(f'PP-GS2C GATE FAIL {name}: blade missing')
            raise SystemExit(1)
        # loader
        if not os.path.exists(loader):
            print(f'PP-GS2C GATE FAIL {name}: loader html5Game.php missing')
            raise SystemExit(1)
        patch_loader(loader, name, sym, gname)
        s = open(loader, encoding='utf-8', errors='replace').read()
        checks = [
            (f'/game/{name}/server' in s, 'gameService endpoint rewrite'),
            (f'/games/{name}/gs2c/common/games-html5/games/vs/{sym}/' in s,
             'datapath rewrite'),
            ('mgckey' in s, 'mgckey config'),
        ]
        for ok, what in checks:
            if not ok:
                print(f'PP-GS2C GATE FAIL {name}: loader {what}')
                raise SystemExit(1)
        add_static_endpoints(cli)
        for f in eng_files:
            if f.endswith('.php'):
                php_lint(f, php)
        php_lint(loader, php)
        print(f'PP-GS2C {name}: loader+engine wired ({len(cli_files)} client files)')
    # 3. controller patch
    ctrl = patch_controller(stage)
    php_lint(ctrl, php)
    print('PP-GS2C PATCH OK:', ', '.join(names))


if __name__ == '__main__':
    main()
