#!/usr/bin/env python3
"""Convert the 8.5open phpMyAdmin dump (d60.sql) into a working SQLite DB.

Usage:
  sqlite_convert.py <d60.sql> <out.sqlite> <w_games17.sql> <names102.txt>

- Parses CREATE TABLE / ALTER TABLE (PK, UNIQUE, KEY) / INSERT with full
  MySQL escape handling (\', \", \\, \n, \0, ...), re-emits SQLite properly.
- Single integer `id` primary keys become INTEGER PRIMARY KEY (rowid alias),
  so inserts without explicit ids auto-assign.
- Applies the w_games-17 upsert (translated) and publishes the pack names
  (view=1, shop_id=1).
"""
import re, sys, sqlite3

MYSQL_ESC = {'\\':'\\', "'":"'", '"':'"', '0':'\0', 'n':'\n', 'r':'\r', 't':'\t', 'Z':'\x1a', 'b':'\b'}

def unescape(s):
    out=[]; i=0; n=len(s)
    while i<n:
        c=s[i]
        if c=='\\' and i+1<n:
            nxt=s[i+1]
            out.append(MYSQL_ESC.get(nxt, nxt)); i+=2; continue
        out.append(c); i+=1
    return ''.join(out)

def sq(s):
    return "'" + s.replace("'", "''") + "'"

def split_statements(text):
    stmts=[]; buf=[]; i=0; n=len(text)
    while i<n:
        c=text[i]
        if c=="'":
            j=i+1
            while j<n:
                if text[j]=='\\': j+=2; continue
                if text[j]=="'":
                    if j+1<n and text[j+1]=="'": j+=2; continue
                    break
                j+=1
            buf.append(text[i:j+1]); i=j+1; continue
        if c==';':
            stmts.append(''.join(buf)); buf=[]; i+=1; continue
        buf.append(c); i+=1
    if buf: stmts.append(''.join(buf))
    return stmts

def strip_leading_comments(stmt):
    while True:
        s=stmt.lstrip()
        if s.startswith('--'):
            nl=s.find('\n')
            stmt = s[nl+1:] if nl!=-1 else ''
        elif s.startswith('/*'):
            end=s.find('*/')
            stmt = s[end+2:] if end!=-1 else ''
        else:
            return stmt

def split_top(body, seps=','):
    parts=[]; buf=[]; i=0; n=len(body); depth=0
    while i<n:
        c=body[i]
        if c=="'":
            j=i+1
            while j<n:
                if body[j]=='\\': j+=2; continue
                if body[j]=="'":
                    if j+1<n and body[j+1]=="'": j+=2; continue
                    break
                j+=1
            buf.append(body[i:j+1]); i=j+1; continue
        if c=='(': depth+=1
        elif c==')': depth-=1
        elif c in seps and depth==0:
            parts.append(''.join(buf)); buf=[]; i+=1; continue
        buf.append(c); i+=1
    if buf: parts.append(''.join(buf))
    return parts

def parse_tuple(s):
    s=s.strip()
    assert s[0]=='(' and s[-1]==')', s[:60]
    vals=[]
    for item in split_top(s[1:-1]):
        item=item.strip()
        if item.upper().startswith('NULL'): vals.append(None)
        elif item.startswith("'"): vals.append(unescape(item[1:-1]))
        else: vals.append(item)
    return vals

def emit_vals(vals):
    out=[]
    for v in vals:
        if v is None: out.append('NULL')
        elif isinstance(v, str) and (v.startswith("'") or v.upper() in ('NULL',)):
            out.append(v if v.upper()=='NULL' else v)
        elif isinstance(v, str):
            if re.fullmatch(r"-?\d+", v) or re.fullmatch(r"-?\d*\.\d+", v) or v.lower().startswith('0x'):
                out.append(v)
            else:
                out.append(sq(v))
        else:
            out.append(sq(str(v)))
    return '(' + ', '.join(out) + ')'

TYPES_INT = r'(tiny|small|medium|big)?int\(\d+\)|int|integer|boolean|bool|bit(\(\d+\))?'
TYPES_REAL = r'(decimal|numeric)\(\d+,\d+\)|(double|float|real)(\(\d+,\d+\))?'
TYPES_BLOB = r'(tiny|medium|long)?blob|binary\(\d+\)|varbinary\(\d+\)'

def conv_column(item):
    m=re.match(r'`([^`]+)`\s+(.*)$', item.strip(), re.S)
    if not m: return None
    name, rest = m.group(1), m.group(2).strip()
    rest = re.sub(r"\s+COMMENT '(?:[^'\\]|\\.)*'", '', rest, flags=re.S)
    rest = re.sub(r'\s+CHARACTER SET \w+', '', rest, flags=re.I)
    rest = re.sub(r'\s+COLLATE \w+', '', rest, flags=re.I)
    rest = re.sub(r'\s+ON UPDATE CURRENT_TIMESTAMP(\(\))?', '', rest, flags=re.I)
    auto = bool(re.search(r'AUTO_INCREMENT', rest, re.I))
    rest = re.sub(r'\s*AUTO_INCREMENT', '', rest, flags=re.I)
    rest = re.sub(r'\s+unsigned', '', rest, flags=re.I)
    rest = re.sub(r'\s+zerofill', '', rest, flags=re.I)
    notnull = 'NOT NULL' in rest.upper()
    dm = re.search(r"DEFAULT (CURRENT_TIMESTAMP(\(\))?|NULL|'(?:[^'\\]|\\.)*'|[\w.+-]+)", rest, re.I|re.S)
    default = dm.group(1) if dm else None
    tm = re.match(r'(\w+(?:\(\d+(?:,\d+)?\))?)', rest)
    t = tm.group(1).lower() if tm else 'text'
    if re.fullmatch(TYPES_INT, t, re.I): sql_t='INTEGER'
    elif re.fullmatch(TYPES_REAL, t, re.I): sql_t='REAL'
    elif re.fullmatch(TYPES_BLOB, t, re.I): sql_t='BLOB'
    else: sql_t='TEXT'
    parts=[f'"{name}"', sql_t]
    if auto and notnull: pass  # INTEGER PRIMARY KEY adds implicit NOT NULL
    elif notnull: parts.append('NOT NULL')
    if default:
        d=default.strip()
        if d.upper().startswith("'"):
            parts.append('DEFAULT ' + sq(unescape(d[1:-1])))
        else:
            parts.append('DEFAULT ' + d.upper().replace('()',''))
    return {'name':name, 'auto':auto, 'line':' '.join(parts), 'int': sql_t=='INTEGER'}

def conv_create(stmt):
    m=re.match(r'\s*CREATE TABLE `([^`]+)` \((.*)\)\s*(ENGINE.*)?$', stmt, re.S)
    if not m: return None
    name=m.group(1); body=m.group(2)
    cols=[]; pk=None; uniques=[]; indexes=[]
    for item in split_top(body):
        it=item.strip()
        iu=it.upper()
        if iu.startswith('PRIMARY KEY'):
            pk=re.findall(r'`([^`]+)`', re.search(r'\(([^()]*)\)\s*$', it).group(1))
        elif iu.startswith('UNIQUE'):
            mm=re.search(r'\(([^()]*)\)\s*$', it)
            uniques.append(re.findall(r'`([^`]+)`', mm.group(1)) if mm else [])
        elif iu.startswith(('KEY ','INDEX ','FULLTEXT','SPATIAL')):
            mm=re.search(r'\(([^()]*)\)\s*$', it)
            indexes.append(re.findall(r'`([^`]+)`', mm.group(1)) if mm else [])
        else:
            c=conv_column(it)
            if c: cols.append(c)
    return {'name':name, 'cols':cols, 'pk':pk, 'uniques':uniques, 'indexes':indexes}

def main():
    src, outdb, w17, names102 = sys.argv[1:5]
    text=open(src, encoding='utf-8', errors='replace').read()
    stmts=[strip_leading_comments(s) for s in split_statements(text)]
    creates={}; order=[]; pks={}; uniques={}; indexes={}; inserts=[]
    for st in stmts:
        s=st.strip()
        if not s: continue
        head=s.split(None,1)[0].upper()
        if head=='CREATE' and 'TABLE' in s[:40].upper():
            t=conv_create(s)
            if t:
                creates[t['name']]=t
                if t['name'] not in order: order.append(t['name'])
                if t['pk']: pks.setdefault(t['name'], t['pk'])
                for u in t['uniques']: uniques.setdefault(t['name'],[]).append(u)
                for ix in t['indexes']: indexes.setdefault(t['name'],[]).append(ix)
        elif head=='ALTER' and re.match(r'ALTER TABLE `([^`]+)`', s, re.I):
            tn=re.match(r'ALTER TABLE `([^`]+)`', s, re.I).group(1)
            mpk=re.search(r'ADD PRIMARY KEY\s*\(([^()]*)\)', s, re.I)
            mun=re.search(r'ADD UNIQUE\s+(?:KEY|INDEX)?\s*`?\w*`?\s*\(([^()]*)\)', s, re.I)
            midx=re.search(r'ADD (?:KEY|INDEX)\s+`?\w*`?\s*\(([^()]*)\)', s, re.I)
            if mpk:
                pks[tn]=re.findall(r'`([^`]+)`', mpk.group(1))
            elif mun:
                cols=re.findall(r'`([^`]+)`', mun.group(1))
                if cols: uniques.setdefault(tn,[]).append(cols)
            elif midx:
                cols=re.findall(r'`([^`]+)`', midx.group(1))
                if cols: indexes.setdefault(tn,[]).append(cols)
            else:
                print(f'  [skip alter] {tn}: {s[:80]}')
        elif head=='INSERT':
            m=re.match(r'INSERT INTO `([^`]+)`(?:\s*\(([^)]*)\))?\s*VALUES\s*(.*)$', s, re.S|re.I)
            if not m:
                print('  [skip insert]', s[:80]); continue
            tn=m.group(1)
            tuples=[]
            for tp in split_top(m.group(3)):
                tp=tp.strip()
                if not tp: continue
                try:
                    tuples.append(parse_tuple(tp))
                except Exception as e:
                    print(f'  [tuple parse fail] {tn}: {e}: {tp[:60]}')
            inserts.append((tn, tuples))
        elif head=='DROP':
            pass  # handled implicitly (fresh db)
        else:
            pass  # SET / LOCK / comments / /*!...*/ etc.

    con=sqlite3.connect(outdb)
    cur=con.cursor()
    idx_n=0
    for tn in order:
        t=creates[tn]
        pk=pks.get(tn)
        lines=[]; inline_pk=None
        for c in t['cols']:
            if pk and len(pk)==1 and c['name']==pk[0] and c['int']:
                base=c['line'].split(' ',2)
                tail=''
                if 'DEFAULT' in c['line']:
                    didx=c['line'].find('DEFAULT')
                    tail=c['line'][didx:]
                inline_pk=f'"{c["name"]}" INTEGER PRIMARY KEY' + ((' '+tail) if tail else '')
            else:
                lines.append(c['line'])
        if inline_pk: lines.insert(0, inline_pk)
        elif pk:
            lines.append('PRIMARY KEY (' + ', '.join(f'"{x}"' for x in pk) + ')')
        for u in uniques.get(tn, []):
            if u: lines.append('UNIQUE (' + ', '.join(f'"{x}"' for x in u) + ')')
        sql=f'CREATE TABLE "{tn}" (\n  ' + ',\n  '.join(lines) + '\n)'
        cur.execute('DROP TABLE IF EXISTS "%s"' % tn)
        try:
            cur.execute(sql)
        except Exception as e:
            print(f'  [CREATE FAIL] {tn}: {e}')
            print(sql[:400])
            continue
        for u in indexes.get(tn, []):
            idx_n+=1
            try:
                cur.execute(f'CREATE INDEX "{tn}__i{idx_n}" ON "{tn}" (' + ', '.join(f'"{x}"' for x in u) + ')')
            except Exception as e:
                print(f'  [INDEX FAIL] {tn}: {e}')
    con.commit()

    rows=0; fails=0
    for tn, tuples in inserts:
        if tn not in creates: 
            print(f'  [insert into unknown table] {tn}'); continue
        try:
            for vals in tuples:
                cur.execute(f'INSERT INTO "{tn}" VALUES ({", ".join(["?"]*len(vals))})', vals)
                rows+=1
        except Exception as e:
            fails+=1
            print(f'  [INSERT FAIL] {tn}: {e}')
            try: con.rollback()
            except Exception: pass
            # re-begin cleanly
            cur=con.cursor()
    con.commit()
    print(f'tables={len(creates)}  data_rows={rows}  insert_failures={fails}')

    # --- w_games 17 upsert (translated to sqlite) ---
    wtxt=open(w17).read()
    hdr=re.search(r'INSERT INTO `w_games` \(([^)]*)\)', wtxt).group(1)
    cols=[c.strip().strip('`') for c in hdr.split(',')]
    pin_ids=[]   # canonical ids of the 17 pack-v2 games
    n_upd=0
    for line in wtxt.splitlines():
        if not line.startswith('('): continue
        line=re.sub(r'/\*.*?\*/', '', line).strip().rstrip(',')
        if not line.startswith('('): continue
        vals=parse_tuple(line)
        assert len(vals)==len(cols), (len(vals), len(cols))
        row=dict(zip(cols, vals))
        row['shop_id']='1'; row['view']='1'; row['updated_at']=None
        sets=[]; args=[]
        for c in cols:
            if c=='id': continue
            if c=='updated_at':
                sets.append('"updated_at" = CURRENT_TIMESTAMP')
            else:
                sets.append(f'"{c}" = ?')
                v=row[c]
                args.append(None if (isinstance(v,str) and v.upper()=='NULL') else v)
        args.append(row['id'])
        pin_ids.append(int(row['id']))
        cur.execute(f'UPDATE w_games SET {", ".join(sets)} WHERE id = ?', args)
        if cur.rowcount==0:
            now=None
            try:
                import time
                now=time.strftime('%Y-%m-%d %H:%M:%S', time.gmtime())
            except Exception:
                pass
            ins_cols=', '.join(f'"{c}"' for c in cols)
            ph=', '.join('?' for _ in cols)
            ins_vals=[]
            for c in cols:
                v=row[c]
                if c=='updated_at': ins_vals.append(now)
                else: ins_vals.append(None if (isinstance(v,str) and v.upper()=='NULL') else v)
            cur.execute(f'INSERT INTO w_games ({ins_cols}) VALUES ({ph})', ins_vals)
        n_upd+=1
    con.commit()
    print(f'w_games17 upsert applied: {n_upd}')

    # --- publish exactly ONE canonical row per pack name ---
    names=[n.strip() for n in open(names102).read().split() if n.strip()]
    qmarks=','.join('?'*len(names))
    canonical=set(pin_ids)
    cur.execute(f'SELECT name, MIN(id) FROM w_games WHERE name IN ({qmarks}) GROUP BY name', names)
    for nm, mid in cur.fetchall():
        canonical.add(int(mid))
    idl=','.join('?'*len(canonical))
    cur.execute(f'UPDATE w_games SET view=1, shop_id=1 WHERE id IN ({idl})', list(canonical))
    pub=cur.rowcount
    cur.execute(f'UPDATE w_games SET view=0 WHERE name IN ({qmarks}) AND id NOT IN ({idl})', names+list(canonical))
    hid=cur.rowcount
    con.commit()
    print(f'published canonical rows: {pub}; hid duplicate rows: {hid}')

    cur.execute("SELECT count(*) FROM sqlite_master WHERE type='table'")
    print('sqlite tables:', cur.fetchone()[0])
    cur.execute('SELECT count(*) FROM w_games'); print('w_games rows:', cur.fetchone()[0])
    cur.execute('SELECT id,name,view,shop_id FROM w_games WHERE name IN (%s) ORDER BY id LIMIT 20' % ','.join('?'*len(names)), names)
    for r in cur.fetchall(): print('  ', r)
    try:
        cur.execute('SELECT count(*) FROM w_users'); print('w_users rows:', cur.fetchone()[0])
    except Exception as e:
        print('w_users:', e)
    con.close()
    print('SQLITE_CONVERT_OK')

if __name__=='__main__':
    main()
