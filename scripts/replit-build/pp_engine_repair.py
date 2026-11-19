#!/usr/bin/env python3
"""pp_engine_repair.py — applies the proven repair recipe to PragmaticLib
gs2c engines (VanguardLTE namespace) before they are shipped.

Defect families fixed (discovered shipping GatesofOlympus/SugarRush/SweetBonanza):
  1. Jackpots::toJP uses QueryBuilder->upsert() with a composite conflict
     target -> sqlite "ON CONFLICT clause does not match any PRIMARY KEY"
     -> replaced with per-row atomic increment.
  2. w_games columns rtp_stat_out / rtp_stat_in / current_rtp do not exist in
     the 8.5 schema -> renamed to stat_out/stat_in; CheckRtp RTP-governor
     blocks in Spin.php removed entirely (they also var_dump into responses).
  3. LogAndServer precedence bug: `$log && $log['State']==='Respin' || $log['State']==='FirstRespin'`
     fatals when $log===false on a win -> parenthesized.
  4. Live var_dump()/error_log() statements corrupt the KV spin response ->
     commented out.
  5. init.php leading whitespace before <?php -> stripped (would corrupt the
     doInit response).
  6. GameReel.php misplaced inside PragmaticLib/ -> moved to game root.

Usage: pp_engine_repair.py <engines_root> [GameName ...]
Prints a per-game summary; exit 1 if any engine still shows defects.
"""
import glob
import os
import re
import shutil
import sys

JACKPOTS_TEMPLATE = '''<?php

namespace VanguardLTE\\Games\\{GAME}\\PragmaticLib;

use Illuminate\\Support\\Facades\\DB;

class Jackpots
{{
    public static function toJP($bet, $jpgs){{
        $toJackpots = 0;
        // per-row atomic increment — upsert() with composite conflict target
        // breaks on sqlite (no matching UNIQUE constraint)
        foreach ($jpgs as $jpg) {{
            $add = $bet * ($jpg->percent / 100);
            DB::table('jpg')->where('id', $jpg->id)->increment('balance', $add);
            $toJackpots += $add;
        }}
        return $toJackpots;
    }}
}}
'''


def read(p):
    return open(p, encoding='utf-8', errors='replace').read()


def write(p, s):
    open(p, 'w', encoding='utf-8').write(s)


def fix_init_leading_ws(path, notes):
    s = read(path)
    s2 = s.lstrip('\n\r\t ')
    if s2 != s:
        write(path, s2)
        notes.append('init.php leading whitespace stripped')


def comment_debug_statements(path, notes):
    s = read(path)
    out = []
    n = 0
    for line in s.split('\n'):
        m = re.match(r'^(\s*)(var_dump\(|error_log\()', line)
        if m:
            indent = m.group(1)
            body = line[len(indent):]
            line = f'{indent}// [repair] debug statement removed: ' + body
            n += 1
        out.append(line)
    if n:
        write(path, '\n'.join(out))
        notes.append(f'{os.path.basename(path)}: {n} debug statements commented')


def fix_jackpots(path, game, notes):
    s = read(path)
    if '->upsert(' in s:
        write(path, JACKPOTS_TEMPLATE.replace('{GAME}', game))
        notes.append('Jackpots: upsert() -> per-row increment')


def fix_rtp_stat_columns(path, notes):
    s = read(path)
    s2 = s.replace('rtp_stat_out', 'stat_out').replace('rtp_stat_in', 'stat_in')
    if s2 != s:
        write(path, s2)
        notes.append(f'{os.path.basename(path)}: rtp_stat_* -> stat_*')


def fix_precedence(path, notes):
    s = read(path)
    s2 = re.sub(
        r"if \(\$log && \$log\['State'\] === 'Respin' \|\| \$log\['State'\] === 'FirstRespin'\)",
        "if ($log && ($log['State'] === 'Respin' || $log['State'] === 'FirstRespin'))",
        s)
    if s2 != s:
        write(path, s2)
        notes.append(f'{os.path.basename(path)}: precedence bug fixed')


def fix_checkrtp_blocks(path, notes):
    s = read(path)
    if 'new CheckRtp(' not in s:
        return
    lines = s.split('\n')
    out = []
    i = 0
    removed = 0
    while i < len(lines):
        line = lines[i]
        ls = line.lstrip()
        if (re.match(r'^\s*// check rtp ', line)
                or re.match(r'^\$checkRtp\w*\s*=\s*new CheckRtp\(', ls)):
            # removal mode: drop lines until a non-rtp comment or real next code
            j = i
            while j < len(lines):
                lj = lines[j].lstrip()
                is_rtp_comment = lj.startswith('//') and 'check rtp' in lj
                is_boundary = (
                    (lj.startswith('//') and not is_rtp_comment)
                    or lj.startswith('SwitchMoney::set(')
                    or lj.startswith('Log::setLog(')
                    or re.match(r'^\$\w+\s*=\s*LogAndServer::', lj)
                )
                if j > i and is_boundary:
                    break
                j += 1
            removed += j - i
            i = j
            continue
        out.append(line)
        i += 1
    s2 = '\n'.join(out)
    if removed:
        if 'new CheckRtp(' in s2:
            raise SystemExit(f'REFUSING to ship {path}: CheckRtp references remain after block removal')
        write(path, s2)
        notes.append(f'{os.path.basename(path)}: CheckRtp governor removed ({removed} lines)')


def fix_gamereel_placement(game_dir, notes):
    misplaced = os.path.join(game_dir, 'PragmaticLib', 'GameReel.php')
    if os.path.exists(misplaced):
        head = read(misplaced)[:400]
        m = re.search(r'namespace\s+([^;]+);', head)
        if m and 'PragmaticLib' not in m.group(1):
            shutil.move(misplaced, os.path.join(game_dir, 'GameReel.php'))
            notes.append('GameReel.php moved PragmaticLib/ -> game root')


def scan(game_dir):
    defects = []
    for f in glob.glob(game_dir + '/**/*.php', recursive=True):
        s = read(f)
        if '->upsert(' in s:
            defects.append(f'{f}: upsert')
        if 'rtp_stat_' in s:
            defects.append(f'{f}: rtp_stat_*')
        if re.search(r"\$log && \$log\['State'\] === 'Respin' \|\| \$log\['State'\]", s):
            defects.append(f'{f}: precedence')
        if re.search(r'(?m)^\s*var_dump\(|^\s*error_log\(', s):
            defects.append(f'{f}: live debug')
        if 'new CheckRtp(' in s:
            defects.append(f'{f}: CheckRtp usage')
        if f.endswith('init.php') and not s.lstrip().startswith('<?php'):
            defects.append(f'{f}: leading ws')
    return defects


def repair_game(root, game):
    gd = os.path.join(root, game)
    notes = []
    for f in glob.glob(gd + '/**/*.php', recursive=True):
        if f.endswith('init.php'):
            fix_init_leading_ws(f, notes)
        comment_debug_statements(f, notes)
        fix_rtp_stat_columns(f, notes)
        fix_precedence(f, notes)
        if f.endswith(('Spin.php', 'spin.php')):
            fix_checkrtp_blocks(f, notes)
    jp = os.path.join(gd, 'PragmaticLib', 'Jackpots.php')
    if os.path.exists(jp):
        fix_jackpots(jp, game, notes)
    fix_gamereel_placement(gd, notes)
    remaining = scan(gd)
    return notes, remaining


def main():
    root = os.path.abspath(sys.argv[1])
    games = sys.argv[2:] or sorted(
        d for d in os.listdir(root) if os.path.isdir(os.path.join(root, d)))
    failures = []
    for g in games:
        notes, remaining = repair_game(root, g)
        print(f'== {g}: {len(notes)} repairs')
        for n in notes:
            print(f'   - {n}')
        if remaining:
            print(f'   !! REMAINING DEFECTS:')
            for r in remaining:
                print(f'      {r}')
            failures.append(g)
    if failures:
        print(f'REPAIR FAILURES: {", ".join(failures)}')
        raise SystemExit(1)
    print(f'REPAIR OK: {len(games)} engines clean')


if __name__ == '__main__':
    main()
