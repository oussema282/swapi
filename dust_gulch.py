#!/usr/bin/env python3
# -*- coding: ascii -*-
r"""
================================================================================
  DUST GULCH - 1850
  a 3D first person frontier game that lives entirely inside your terminal
================================================================================

  * ONE file. No pip installs. Nothing but the Python standard library.
  * ASCII ONLY. Every pixel you see is a plain 7-bit character.
  * COLOUR. 24-bit escapes where the terminal claims them; on an older
    console, the 256-colour palette with ordered dithering, and the game
    repaints that palette's 216-colour cube through OSC 4 so the steps are
    even - the inherited cube has a yawning gap between 0 and 95, which is
    precisely where dusk, shadow and desert floor live. Pass --no-palette to
    leave your terminal's own colours alone. Either way it is characters.
  * REAL 3D. A per-character ray-marcher: one ray per cell of the screen,
    marched through a voxel height field, lit by a moving sun, softened by
    distance fog, dithered into an ASCII ink ramp.
  * THE WORLD IS MATH. Nothing here is hand-placed. Perlin gradient noise +
    fBm + ridged multifractals + domain warping + terracing build the mesas
    and the dune fields, a sine curve carves the arroyo, a seeded LCG lays
    out the town, and every boardwalk, false front, chimney and headstone
    is stamped out by that same generator. New seed, new frontier.

--------------------------------------------------------------------------------
  RUN IT (PowerShell)
--------------------------------------------------------------------------------
      cd C:\path\to\repo
      python dust_gulch.py                 # random seed
      python dust_gulch.py --seed 1850     # a town you can revisit
      python dust_gulch.py --selftest      # prove the maths and the screen
      python dust_gulch.py --bench         # frame times per detail level
      python dust_gulch.py --color 256     # force the dithered cube
      python dust_gulch.py --no-palette    # keep your theme's 256 colours
      python dust_gulch.py --nocolor       # characters only
      python dust_gulch.py --help          # all the knobs

      Tip: a monospace font run small (Consolas / Cascadia Mono, Ctrl+minus)
      buys you a bigger viewport and a bigger framerate.

--------------------------------------------------------------------------------
  CONTROLS
--------------------------------------------------------------------------------
      W / S          walk forward / back      A / D       strafe
      LEFT / RIGHT   turn                      UP / DOWN   look up / down
      X              sprint                     SPACE       jump
      F or ENTER     fire the revolver         R           reload
      E              use / drink at the water  M           big map
      P              pause       [ ]  view distance       1 2 3  detail
      ESC or Q       leave the territory

  If you would rather hold SHIFT than X to run, add --shift-run.

  GOAL: a dozen outlaws rode into a town standing on 50,176 columns of dust.
  Put them in the ground, keep their gold, and be on your feet when the sun
  comes up. There is a well, a saloon, a church with a steeple, a mine, a
  graveyard on the hill and forty nuggets in the tailings, and the day and
  night cycle runs whether you watch it or not.

================================================================================
"""

import atexit
import math
import os
import random
import sys
import time

IS_WIN = (os.name == "nt")

if IS_WIN:
    try:
        import msvcrt
    except ImportError:
        msvcrt = None
else:
    msvcrt = None
    try:
        import select
        import termios
        import tty
    except ImportError:
        select = termios = tty = None

try:
    import shutil
except ImportError:
    shutil = None


# ============================================================================
# 0.  tiny maths helpers - the toolbox the generator keeps reaching for
# ============================================================================

def clamp(v, lo, hi):
    return lo if v < lo else (hi if v > hi else v)


def lerp(a, b, t):
    return a + (b - a) * t


def smoothstep(e0, e1, x):
    """Hermite ease: 0 below e0, 1 above e1, smooth in between. Used
    everywhere the world needs to *taper* rather than *stop*."""
    if e1 == e0:
        return 0.0 if x < e0 else 1.0
    t = clamp((x - e0) / (e1 - e0), 0.0, 1.0)
    return t * t * (3.0 - 2.0 * t)


def hash2i(x, y, seed):
    """Cheap integer hash of a lattice point -> 32 bits. This is the seed of
    every little detail: noise gradients, cloud wisps, plank wobble. Fully
    deterministic, so one seed always rebuilds the same town boardwalk for
    boardwalk."""
    h = (x * 374761393 + y * 668265263 + seed * 1274126177) & 0xFFFFFFFF
    h = ((h ^ (h >> 13)) * 1274126177) & 0xFFFFFFFF
    return h ^ (h >> 16)


TAU = 2.0 * math.pi


# ============================================================================
# 1.  PERLIN GRADIENT NOISE, from scratch
# ============================================================================
#  Each unit-lattice corner gets a random unit gradient. A sample point asks
#  its 4 neighbours how strongly they slope toward it, fades each answer with
#  the classic 6t^5 - 15t^4 + 10t^3 curve (C2 continuous, which is exactly
#  why this looks like geology instead of graph paper) and blends. fBm is
#  octaves of that: halve the amplitude, double the frequency, add them up -
#  big shapes with smaller shapes stuck on them, and so on down to grain.
# ============================================================================

class Perlin2(object):
    __slots__ = ("seed", "perm", "gx", "gy")

    def __init__(self, seed):
        self.seed = seed & 0xFFFFFFFF
        rnd = random.Random((seed * 2654435761) & 0xFFFFFFFF)
        p = list(range(256))
        rnd.shuffle(p)
        self.perm = p + p
        ang = [rnd.random() * TAU for _ in range(256)]
        self.gx = [math.cos(a) for a in ang]
        self.gy = [math.sin(a) for a in ang]

    def n2(self, x, y):
        """One Perlin sample, range roughly -1..1."""
        perm = self.perm
        gx = self.gx
        gy = self.gy
        fx = math.floor(x)
        fy = math.floor(y)
        xi = int(fx) & 255
        yi = int(fy) & 255
        xf = x - fx
        yf = y - fy
        u = xf * xf * xf * (xf * (xf * 6.0 - 15.0) + 10.0)
        v = yf * yf * yf * (yf * (yf * 6.0 - 15.0) + 10.0)
        aa = perm[perm[xi] + yi]
        ab = perm[perm[xi] + yi + 1]
        ba = perm[perm[xi + 1] + yi]
        bb = perm[perm[xi + 1] + yi + 1]
        x1 = xf * gx[aa] + yf * gy[aa]
        x2 = (xf - 1.0) * gx[ba] + yf * gy[ba]
        x3 = xf * gx[ab] + (yf - 1.0) * gy[ab]
        x4 = (xf - 1.0) * gx[bb] + (yf - 1.0) * gy[bb]
        a = x1 + u * (x2 - x1)
        b = x3 + u * (x4 - x3)
        return a + v * (b - a)


class NoiseField(object):
    """The whole vocabulary of shapes the world is written in, all of it
    built on that one sampler:

        fbm     sum of octaves                     rolling land
        billow  |noise|                             erosion bumps
        ridged  1-|2n-1|, amplitude weighted        mesa skylines
        warp    sample at a noise-displaced (x,y)   wind-carved dunes
    """

    def __init__(self, seed):
        self.p = Perlin2(seed)
        self.q = Perlin2((seed ^ 0x5DEECE66) & 0xFFFFFFFF)

    def fbm(self, x, y, oct_=4, lac=2.0, gain=0.5):
        n = 0.0
        a = 1.0
        f = 1.0
        s = 0.0
        p = self.p.n2
        for _ in range(oct_):
            n += p(x * f, y * f) * a
            s += a
            a *= gain
            f *= lac
        return n / s

    def billow(self, x, y, oct_=3):
        n = 0.0
        a = 1.0
        f = 1.0
        s = 0.0
        p = self.p.n2
        for _ in range(oct_):
            n += abs(p(x * f, y * f)) * a
            s += a
            a *= 0.5
            f *= 2.0
        return n / s

    def ridged(self, x, y, oct_=4):
        """Ridged multifractal. Fold the noise away from zero and re-weight
        by amplitude: ridges instead of blobs. The maths of a plateau."""
        n = 0.0
        a = 1.0
        s = 0.0
        wt = 0.0
        f = 1.0
        p = self.p.n2
        for _ in range(oct_):
            v = 1.0 - abs(p(x * f, y * f)) * 2.0
            n += v * v * a
            s += a
            wt += v * a
            a *= 0.5
            f *= 2.0
        return (n / s) * (0.6 + 0.4 * wt)

    def warp(self, x, y, amt, oct_=4):
        """Domain warping: shove the sample point sideways by another octave
        of noise. Turns griddly noise into dunes that actually blow."""
        dx = self.two(self.q, x + 5.2, y + 1.3) * amt
        dz = self.two(self.q, x - 3.7, y + 8.1) * amt
        return self.fbm(x + dx, y + dz, oct_)

    @staticmethod
    def two(p, x, y):
        return (p.n2(x, y) + p.n2(x * 2.0, y * 2.0) * 0.5) / 1.5


def terracing(v, step_h):
    """Snap a continuous height onto the *top* of one of `step_h`-tall
    shelves, easing over the edge of each shelf so the plateau has a soft
    lip instead of a saw-tooth. Multiply a blend factor back in afterwards
    and the terraces fade out on the flats: that one trick is the whole
    difference between 'some hills' and 'the Colorado'.
    """
    f = v / step_h
    fl = math.floor(f)
    fr = f - fl
    fr *= 4.0
    if fr < 1.0:
        s = fr * fr * 0.5
    elif fr > 3.0:
        t = 4.0 - fr
        s = 1.0 - t * t * 0.5
    else:
        s = 1.0
    return fl + s


# ============================================================================
# 2.  THE xterm-256 PALETTE
# ============================================================================
#  16 legacy colours, a 6x6x6 RGB cube (indices 16..231) and a 24 step grey
#  ramp (232..255). Everything we draw is quantised into that cube; a 4x4
#  Bayer dither is thrown in before the rounding, which hides the staircase
#  and, as a happy accident, gives the sky a sand-grain texture for free.
# ============================================================================

# The xterm cube the whole world inherits is (0,95,135,175,215,255): the
# jump from 0 to 95 is enormous and it sits exactly where dusk, shadow and
# desert floor live, so browns turn olive and a shaded wall turns red. The
# game therefore repaints indices 16..231 with an even cube at startup, with
# OSC 4, and falls back to the inherited one on terminals that ignore it -
# which are then simply a little harsher, not wrong.
CUBE = (0, 51, 102, 153, 204, 255)
CUBE_DEFAULT = (0, 95, 135, 175, 215, 255)


def palette_seq(cube):
    """The escapes that install `cube` as the terminal's 216 colour cube."""
    out = []
    for i in range(216):
        out.append("\x1b]4;%d;rgb:%02x/%02x/%02x\x1b\\" % (
            16 + i, cube[i // 36], cube[(i // 6) % 6], cube[i % 6]))
    return "".join(out)


_Q = [0] * 256          # channel value -> nearest cube level
_QV = [0] * 256         # ... and that level's actual value
for _v in range(256):
    _bi = 0
    _bd = 9999
    for _i in range(6):
        _d = abs(CUBE[_i] - _v)
        if _d < _bd:
            _bd = _d
            _bi = _i
    _Q[_v] = _bi
    _QV[_v] = CUBE[_bi]
del _v, _i, _d, _bi, _bd

BAYER = (
    0.0, 8.0, 2.0, 10.0,
    12.0, 4.0, 14.0, 6.0,
    3.0, 11.0, 1.0, 9.0,
    15.0, 7.0, 13.0, 5.0,
)


def quant(r, g, b):
    """rgb floats (0..255) -> nearest xterm-256 index (greys prefer the
    grey ramp, which is 24 steps finer than the cube can offer)."""
    if r < 0.0:
        r = 0.0
    elif r > 255.0:
        r = 255.0
    if g < 0.0:
        g = 0.0
    elif g > 255.0:
        g = 255.0
    if b < 0.0:
        b = 0.0
    elif b > 255.0:
        b = 255.0
    ir = int(r)
    ig = int(g)
    ib = int(b)
    idx = 16 + 36 * _Q[ir] + 6 * _Q[ig] + _Q[ib]
    mx = ir if ir > ig else ig
    if ib > mx:
        mx = ib
    mn = ir if ir < ig else ig
    if ib < mn:
        mn = ib
    # The colour cube is 0,95,135,175,215,255: a huge gap under 95, which is
    # exactly where dusk, shadow and desert floor live. The 24 step grey
    # ramp is finer there, so anything dark and nearly neutral takes it.
    if mx - mn < (12 if mx > 110 else 30):
        lum = (ir * 77 + ig * 151 + ib * 28) >> 8
        gi = 232 + (lum * 23) // 255
        if gi > 255:
            gi = 255
        gv = 8 + (gi - 232) * 10
        err = abs(CUBE[_Q[ir]] - ir) + abs(CUBE[_Q[ig]] - ig) + \
            abs(CUBE[_Q[ib]] - ib)
        if abs(gv - lum) * 3 < err:
            return gi
    return idx


LEGACY = ((0, 0, 0), (128, 0, 0), (0, 128, 0), (192, 192, 0), (0, 0, 128),
          (128, 0, 128), (0, 192, 192), (192, 192, 192), (128, 128, 128),
          (255, 0, 0), (0, 255, 0), (255, 255, 0), (96, 96, 255),
          (255, 0, 255), (0, 255, 255), (255, 255, 255))


TCF = 1 << 24   # marks a colour as 24-bit rather than an xterm index


def pack24(r, g, b):
    """clamp and pack into 0x00RRGGBB, tagged so emit() knows to use a
    truecolor escape instead of a palette index."""
    ir = int(r)
    ig = int(g)
    ib = int(b)
    if ir < 0:
        ir = 0
    elif ir > 255:
        ir = 255
    if ig < 0:
        ig = 0
    elif ig > 255:
        ig = 255
    if ib < 0:
        ib = 0
    elif ib > 255:
        ib = 255
    return TCF | (ir << 16) | (ig << 8) | ib


def quant_d(r, g, b, ph):
    """Quantise with one of four ordered-dither phases. The xterm colour
    cube is 6 levels per channel, so a dusty brown like (119,79,43) on its
    own snaps to (135,95,0) and turns olive. Dithering between the two
    nearest cube corners - one per 2x2 cell - recovers roughly a thousand
    more colours and keeps every earth tone honest. This is the single
    biggest thing between an ANSI renderer and a nice ANSI renderer."""
    if ph:
        r += 34.0 if r < 220.0 else -34.0
        g += 34.0 if g < 220.0 else -34.0
        b += 34.0 if b < 220.0 else -34.0
    return quant(r, g, b)


def pal_rgb(idx):
    """palette index -> rgb triple (only used while building blend tables)"""
    if idx < 16:
        return LEGACY[idx]
    if idx < 232:
        k = idx - 16
        return (CUBE[(k // 36) % 6], CUBE[(k // 6) % 6], CUBE[k % 6])
    g = 8 + (idx - 232) * 10
    return (g, g, g)


# ============================================================================
# 3.  CONSOLE DRIVER - escape codes out, keystrokes in
# ============================================================================

class Console(object):
    """Classic Windows conhost needs ENABLE_VIRTUAL_TERMINAL_PROCESSING
    switched on before it will honour colour codes (Windows Terminal and
    every POSIX terminal already speak them). Raw mode on POSIX so keys
    arrive instantly without Enter, and the terminal is put back exactly
    as it was found, whatever happens to us."""

    def __init__(self, enable=True):
        self.enable = enable
        self.raw_on = False
        self.old_terms = None
        self._fg = -1
        self._bg = -1

    def _win_vt(self):
        try:
            import ctypes
            k32 = ctypes.windll.kernel32
            h = k32.GetStdHandle(-11)
            mode = ctypes.c_uint32()
            if k32.GetConsoleMode(h, ctypes.byref(mode)):
                k32.SetConsoleMode(h, mode.value | 0x0004)
            h2 = k32.GetStdHandle(-12)
            o = ctypes.c_uint32()
            if k32.GetConsoleMode(h2, ctypes.byref(o)):
                k32.SetConsoleMode(h2, o.value & ~0x0040)
        except Exception:
            pass

    def setup(self, title, palette=None):
        if not self.enable:
            return
        if IS_WIN:
            self._win_vt()
            os.system("")
        self.palette_on = palette is not None
        sys.stdout.write("\x1b[?25l\x1b[?1049h\x1b[?7l\x1b[2J" +
                         (palette or "") +
                         "\x1b]0;" + title + "\x07")
        sys.stdout.flush()
        atexit.register(self.restore)
        if not IS_WIN and termios is not None:
            try:
                self.old_terms = termios.tcgetattr(0)
                tty.setraw(0)
                self.raw_on = True
            except Exception:
                self.old_terms = None
                self.raw_on = False

    def restore(self):
        if not self.enable:
            return
        if getattr(self, "palette_on", False):
            # hand the terminal its own colours back. Where OSC 104 is not
            # implemented the sequence is dropped quietly.
            self.palette_on = False
            try:
                sys.stdout.write("\x1b]104\x1b\\")
                sys.stdout.flush()
            except Exception:
                pass
        try:
            if self.raw_on:
                termios.tcsetattr(0, termios.TCSADRAIN, self.old_terms)
                self.raw_on = False
            sys.stdout.write("\x1b[0m\x1b[?7h\x1b[?25h\x1b[?1049l")
            sys.stdout.flush()
        except Exception:
            pass

    def keys(self, bag):
        """Non-blocking: append every key pressed since the last call."""
        if IS_WIN:
            if msvcrt is None:
                return
            try:
                while msvcrt.kbhit():
                    c = msvcrt.getwch()
                    if c in ("\x00", "\xe0"):
                        c = msvcrt.getwch()
                        bag.append({
                            "H": "left", "P": "down", "K": "up",
                            "M": "right", "S": "del", "R": "pgup",
                            "U": "pgdn", "I": "pgup", "G": "home",
                            "O": "end", "s": "ctrl_l",
                        }.get(c, "none"))
                    else:
                        bag.append(c)
            except Exception:
                pass
            return
        if select is None:
            return
        try:
            while True:
                r, _, _ = select.select([sys.stdin], [], [], 0)
                if not r:
                    return
                data = os.read(0, 64)
                if not data:
                    return
                i = 0
                n = len(data)
                while i < n:
                    c = data[i]
                    if c == 27:
                        if i + 2 < n and data[i + 1] == 91:
                            bag.append({65: "up", 66: "down", 67: "right",
                                        68: "left", 72: "home",
                                        70: "end"}.get(data[i + 2], "none"))
                            i += 3
                            continue
                        bag.append("esc")
                        i += 1
                        continue
                    if c == 13:
                        bag.append("\r")
                    elif c == 32:
                        bag.append(" ")
                    elif c == 3:
                        bag.append("ctrl_c")
                    elif c == 9:
                        bag.append("tab")
                    elif c < 32:
                        bag.append("ctrl_" + chr(96 + c))
                    else:
                        bag.append(chr(c))
                    i += 1
        except Exception:
            return

    def size(self):
        cols = rows = 0
        if shutil is not None:
            try:
                sz = shutil.get_terminal_size((0, 0))
                cols, rows = sz.columns, sz.lines
            except Exception:
                pass
        try:
            if cols < 40:
                cols = int(os.environ.get("COLUMNS", 0))
            if rows < 14:
                rows = int(os.environ.get("LINES", 0))
        except Exception:
            pass
        if cols < 40:
            cols = 140
        if rows < 14:
            rows = 44
        return cols, rows


# ============================================================================
# 4.  MATERIALS
# ============================================================================
#  The world is a height field of square columns, Minecraft-style: cell
#  (x,z) is solid ground from y=0 up to h(x,z), with one material on top.
#  A cliff, a porch post, a steeple and a mesa are all the same primitive -
#  only the number changes. Every colour below is a flat RGB triple; the
#  renderer multiplies it by sunlight, fogs it toward the horizon and
#  quantises it into the 256 colour palette once per frame in a small table.
# ============================================================================

MCOLS = (
    (198, 168, 116),   #  0 sand in the sun
    (174, 143,  95),   #  1 sand
    (138, 112,  74),   #  2 sand in the shade
    (155, 131,  96),   #  3 packed dirt road
    (116, 116,  66),   #  4 greasewood scrub
    (145, 136,  74),   #  5 dry grass
    (154, 127, 105),   #  6 sandstone
    (112,  90,  76),   #  7 dark sandstone
    (178, 112,  76),   #  8 mesa top, baked
    (168, 120,  86),   #  9 mesa flank
    (122,  80,  56),   # 10 mesa shadow
    (132,  94,  72),   # 11 clay
    (208, 200, 178),   # 12 alkali salt flat
    ( 96,  80,  64),   # 13 wet mud
    (170, 116,  62),   # 14 sunlit plank
    (132,  88,  48),   # 15 plank
    ( 96,  64,  38),   # 16 plank in shade
    ( 66,  46,  32),   # 17 weathered / tar
    (150, 108,  66),   # 18 boardwalk
    (214, 192, 140),   # 19 cream trim, gold-leaf letters
    (150,  66,  52),   # 20 brick
    (104,  44,  38),   # 21 brick dark
    (138, 134, 128),   # 22 cut stone
    ( 96,  93,  89),   # 23 stone dark
    ( 74,  66,  64),   # 24 tarred roof
    (142,  70,  54),   # 25 red roof
    ( 62,  80,  92),   # 26 window glass, cold sky in it
    (255, 198, 108),   # 27 window with a lamp behind it
    ( 78,  52,  34),   # 28 door
    ( 76, 118,  64),   # 29 cactus
    (206, 100, 152),   # 30 cactus flower
    (134, 138, 144),   # 31 tin & iron
    (122,  78,  52),   # 32 rust
    (172, 166, 152),   # 33 headstone
    (216, 208, 182),   # 34 bone & bleached wood
    (188, 156,  76),   # 35 hay
    ( 56, 104, 120),   # 36 water
    (255, 152,  42),   # 37 fire
    (255, 232, 158),   # 38 fire core
    (252, 208,  66),   # 39 gold
    (200, 194, 180),   # 40 ash canvas / white shirt
    ( 78, 100, 152),   # 41 blue shirt
    (154,  54,  46),   # 42 red shirt
    (136,  96,  60),   # 43 dust-coloured shirt
    ( 70,  84, 120),   # 44 denim
    (108,  70,  42),   # 45 leather
    (200, 150, 114),   # 46 skin
    ( 40,  36,  36),   # 47 black hat, and anything else very dark
    (118,  82,  50),   # 48 brown hat
    (100, 116,  60),   # 49 cottonwood leaf
    ( 72,  86,  46),   # 50 leaf shade
    (182,  66,  48),   # 51 painted sign red
    (255, 208, 122),   # 52 lamplight
    (226, 210, 164),   # 53 wanted poster
    ( 44,  38,  40),   # 54 the dark under things
    (150,  28,  28),   # 55 blood
    (118,  76,  46),   # 56 horse, bay
)

# ASCII ink ramps. The character says what a surface *is*, the colour says
# how bright it is. Eight entries each, indexed by light level 0..7.
# Index 0 is the brightest surface the material can be and 7 the darkest.
# Dark end dense, bright end sparse: a sunlit desert floor is grains of
# "." and "," and the shaded side of a boardwalk is "#", which is how a
# charcoal drawing does it and it stops the near field turning into ink.
RAMPS = (
    "  ..,,::",   # 0 soft: sand, dust, cloth, skin, mud
    " .--~~==",   # 1 wood: plank and grain
    "  .,-+#%",   # 2 rock, masonry, mesa flank
    "   ...,:",   # 3 sparse: scrub, salt, bones, leaves
    "  .:coO0",   # 4 shine: glass, tin, iron
    "  ..*oO@",   # 5 fire and lamplight
    " .,.-~~~",   # 6 water
    "  .':,;i",   # 7 dry grass and chaff
)

M_SAND, M_ROAD, M_SCRUB, M_ROCK, M_MESA, M_MESATOP, M_CLAY, M_SALT, M_MUD = \
    0, 1, 2, 3, 4, 5, 6, 7, 8
M_WOOD, M_WOODD, M_BRICK, M_STONE, M_ROOF, M_CACTUS, M_TRUNK, M_LEAF = \
    9, 10, 11, 12, 13, 14, 15, 16
M_METAL, M_GRAVE, M_HAY, M_WATER, M_FIRE, M_CLOTH, M_SIGN, M_BARREL = \
    17, 18, 19, 20, 21, 22, 23, 24
M_POST, M_BONE, M_GOLD = 25, 26, 27
M_COUNT = 28

# per material: (colour when seen from above, colour when seen from the
# side, ink ramp, emissive?)
MATS = (
    (0, 2, 0, 0),      # sand
    (3, 3, 0, 0),      # dirt road
    (4, 4, 3, 0),      # greasewood
    (6, 7, 2, 0),      # sandstone
    (9, 10, 2, 0),     # mesa flank
    (8, 10, 2, 0),     # mesa top
    (11, 11, 0, 0),    # clay
    (12, 12, 3, 0),    # salt flat
    (13, 13, 0, 0),    # mud
    (15, 15, 1, 0),    # plank wall
    (17, 17, 1, 0),    # dark plank / tar
    (20, 20, 2, 0),    # brick
    (22, 22, 2, 0),    # stone
    (24, 24, 1, 0),    # roof
    (29, 29, 2, 0),    # cactus
    (17, 16, 1, 0),    # trunk
    (49, 50, 3, 0),    # leaves
    (31, 31, 4, 0),    # tin
    (33, 33, 2, 0),    # headstone
    (35, 35, 7, 0),    # hay
    (36, 36, 6, 0),    # water
    (38, 37, 5, 1),    # campfire
    (40, 40, 0, 0),     # canvas
    (19, 19, 1, 0),    # painted sign / trim
    (16, 16, 1, 0),    # barrel
    (16, 17, 1, 0),    # post / rail
    (34, 34, 3, 0),    # bones
    (39, 39, 4, 1),    # gold
)

# per-column flags
FL_WIN = 1        # glazed openings on the upper bands
FL_DOOR = 2       # a door at street level
FL_SIGN = 4       # cream trim band / signboard
FL_LAMP = 8       # lamp: throws light and glows at night


# ============================================================================
# 5.  THE WORLD
# ============================================================================
#  MW x MH columns of solid ground, plus three parallel byte arrays for
#  material, flags and the height a wall starts at. Generation is a handful
#  of passes over that grid and each one is a formula:
#
#    h(x,z) = 6 + 6.4*landmass(x,z) + 2.3*dunes(x,z) + 1.1*bumps(x,z)
#             mixed by a ridged-noise mask with terraced mesa plateaus,
#             minus an arroyo carved by distance to a sine curve.
#
#  Then the town is pressed into the flattest ground it can find, like a
#  signet ring into warm wax.
# ============================================================================

MW = 224                     # 224 x 224 columns, one block each
MH = MW
TOWN_H = 4                   # street level


class Coarse(object):
    """A low frequency field, evaluated every `step` cells and bilinearly
    interpolated back up. The landmass and the mesa mask are both far bigger
    than a cell, so this costs no visible precision and buys back a couple
    of seconds of generation time."""

    __slots__ = ("g", "m", "step", "fs")

    def __init__(self, fn, n, step):
        m = n // step + 2
        self.m = m
        self.step = step
        self.fs = float(step)
        g = [0.0] * (m * m)
        k = 0
        for j in range(m):
            yy = j * step
            for i in range(m):
                g[k] = fn(i * step, yy)
                k += 1
        self.g = g

    def at(self, x, y):
        g = self.g
        m = self.m
        s = self.fs
        fx = x / s
        fy = y / s
        i = int(fx)
        j = int(fy)
        tx = fx - i
        ty = fy - j
        k = i + j * m
        a = g[k]
        b = g[k + 1]
        c = g[k + m]
        d = g[k + m + 1]
        a += tx * (b - a)
        c += tx * (d - c)
        return a + ty * (c - a)


class World(object):
    def __init__(self, seed, report=None):
        self.seed = seed & 0x7FFFFFFF
        self.rnd = random.Random(self.seed)
        self.nz = NoiseField(self.seed)
        n = MW * MH
        self.hmap = bytearray(n)
        self.mat = bytearray(n)
        self.flg = bytearray(n)
        self.base = bytearray(n)
        self.hmax = 12
        self.landmarks = []
        self.nuggets = []
        self.spawn = (36.5, float(TOWN_H), 108.5, 0.0)
        self.campfire = None
        self.trough_at = None
        self.well_at = None
        self.special = {}
        self.report = report or (lambda *a: None)
        self.main_z = 108
        self._build()

    # ----------------------------------------------------------- accessors
    def col_h(self, x, z):
        if x < 0 or z < 0 or x >= MW or z >= MH:
            return 0
        return self.hmap[x + z * MW]

    def h_at(self, x, z):
        """the height of the column under a (possibly fractional) position.
        Truncation is the whole collision model: the world is made of
        blocks, so a position belongs to exactly one column."""
        return self.col_h(int(x), int(z))

    def h_atf(self, x, z):
        """ground height under a float position, bilinear - used for smooth
        walking over the generated terrain"""
        xi = int(x)
        zi = int(z)
        if xi < 0:
            xi = 0
        if zi < 0:
            zi = 0
        if xi > MW - 2:
            xi = MW - 2
        if zi > MH - 2:
            zi = MH - 2
        h = self.hmap
        m = MW
        k = xi + zi * m
        a = h[k]
        b = h[k + 1]
        c = h[k + m]
        d = h[k + m + 1]
        tx = x - xi
        tz = z - zi
        return (a + tx * (b - a)) * (1.0 - tz) + (c + tx * (d - c)) * tz

    def setc(self, x, z, h, m, f=0, base=None):
        if 1 <= x < MW - 1 and 1 <= z < MH - 1:
            i = x + z * MW
            if h > 250:
                h = 250
            if h < 1:
                h = 1
            self.hmap[i] = h
            self.mat[i] = m
            self.flg[i] = f
            self.base[i] = (h - 1) if base is None else base

    def raise_by(self, x, z, dh, m, f=0):
        if 1 <= x < MW - 1 and 1 <= z < MH - 1:
            i = x + z * MW
            h = self.hmap[i] + dh
            self.hmap[i] = 250 if h > 250 else (1 if h < 1 else h)
            self.mat[i] = m
            self.flg[i] = f

    # ------------------------------------------------------------- the passes
    def _build(self):
        self.report("sowing perlin gradients", 0)
        self.gen_land()
        self.report("scattering cactus and bone", 1)
        self.gen_props()
        self.report("laying out the township", 2)
        self.gen_town()
        self.report("fencing, burying, watering", 3)
        self.gen_outskirts()
        self.report("finding the highest ground", 4)
        m = 0
        for v in self.hmap:
            if v > m:
                m = v
        self.hmax = m + 1
        sx, sz = int(self.spawn[0]), int(self.spawn[2])
        for dz in (-1, 0, 1):
            for dx in (-1, 0, 1):
                i = (sx + dx) + (sz + dz) * MW
                if self.hmap[i] > TOWN_H:
                    self.hmap[i] = TOWN_H
                    self.mat[i] = M_ROAD

    # ----------------------------------------------------------------- land
    def gen_land(self):
        nz = self.nz
        rnd = self.rnd
        hmap = self.hmap
        mat = self.mat
        land = Coarse(lambda x, z: nz.fbm(x * 0.013, z * 0.013, 4), MW, 3)
        dune = Coarse(lambda x, z: nz.warp(x * 0.045, z * 0.045, 2.6, 3),
                      MW, 2)
        ridge = Coarse(lambda x, z: nz.ridged(x * 0.0085, z * 0.0085, 4),
                       MW, 3)
        bump = Coarse(lambda x, z: nz.billow(x * 0.03, z * 0.03, 3), MW, 3)
        tx0, tz0, tx1, tz1 = 22, 76, 202, 142
        self.town = (tx0, tz0, tx1, tz1)
        ph = rnd.random() * TAU
        for z in range(MH):
            # the arroyo is a centre line x = f(z); distance to it carves
            # a channel with soft banks
            axz = 96.0 + math.sin(z * 0.0485 + ph) * 34.0 + \
                nz.fbm(0.5, z * 0.02, 2) * 12.0
            row = z * MW
            for x in range(MW):
                la = land.at(x, z)
                du = dune.at(x, z)
                rg = ridge.at(x, z)
                bh = bump.at(x, z)
                h = 6.0 + la * 6.4 + du * 2.3 + bh * 1.1
                m = M_SAND
                if rg > 0.26:
                    mm = smoothstep(0.26, 0.60, rg)
                    shelf = terracing(h * 0.45 + rg * 24.0, 3.4) * 1.7 + 3.0
                    h += (shelf - h) * mm
                    if mm > 0.42:
                        m = M_MESA
                d = abs(x - axz)
                if d < 9.0:
                    h -= (1.0 - smoothstep(3.4, 9.0, d)) * 3.6
                    if d < 4.2:
                        m = M_MUD
                    elif d < 7.0:
                        m = M_SALT
                if la < -0.42 and rg < 0.34:
                    m = M_SALT
                if h < 1.0:
                    h = 1.0
                elif h > 200.0:
                    h = 200.0
                i = row + x
                hmap[i] = int(h + 0.5)
                mat[i] = m
        # bake the rim of every plateau so tops read differently from flanks
        for z in range(1, MH - 1):
            row = z * MW
            for x in range(1, MW - 1):
                i = row + x
                hh = hmap[i]
                if mat[i] == M_MESA and hh > 20:
                    if hh > hmap[i - 1] or hh > hmap[i + 1] or \
                            hh > hmap[i - MW] or hh > hmap[i + MW]:
                        mat[i] = M_MESATOP

    # ---------------------------------------------------------------- props
    def gen_props(self):
        """Scatter by hashing position, not by drawing rng numbers: then the
        density of a cactus field is a *function of place*, so it never
        clumps, never moves, and costs one multiply per cell."""
        hmap = self.hmap
        mat = self.mat
        tx0, tz0, tx1, tz1 = self.town
        seed = self.seed ^ 0x9E3779B9
        for z in range(3, MH - 3):
            row = z * MW
            for x in range(3, MW - 3):
                if tx0 - 4 <= x <= tx1 + 4 and tz0 - 4 <= z <= tz1 + 4:
                    continue
                i = row + x
                m = mat[i]
                if m == M_MESATOP or m == M_MUD:
                    continue
                hh = hmap[i]
                steep = abs(hh - hmap[i - 1]) + abs(hh - hmap[i + 1]) + \
                    abs(hh - hmap[i - MW]) + abs(hh - hmap[i + MW])
                if steep > 4:
                    continue
                n = (hash2i(x, z, seed) & 0xFFFF) / 65535.0
                if n < 0.0034:
                    self.raise_by(x, z, 4, M_CACTUS)
                    if n < 0.0009:
                        self.raise_by(x + 1, z, 2, M_CACTUS)
                elif n < 0.0066:
                    self.raise_by(x, z, 2, M_ROCK)
                elif n < 0.0112:
                    self.raise_by(x, z, 1, M_SCRUB)
                elif n < 0.0134 and m in (M_SAND, M_SALT):
                    self.raise_by(x, z, 1, M_BONE)
                elif n < 0.0158 and hh > 3:
                    self.tree(x, z, hh)
                elif n < 0.0210:
                    # gold in the tailings below every outcrop
                    if mat[i] == M_ROCK or hmap[i] > 12:
                        self.nuggets.append((x + 0.5, float(hh + 1),
                                             z + 0.5))

    def tree(self, x, z, hh):
        self.setc(x, z, hh + 5, M_TRUNK)
        for dz in range(-2, 3):
            for dx in range(-2, 3):
                dd = dx * dx + dz * dz
                if dd <= 5:
                    self.setc(x + dx, z + dz, hh + 6 + (1 if dd < 2 else 0),
                              M_LEAF)

    # ----------------------------------------------------------------- town
    def gen_town(self):
        """A rectangle of flattened ground with a street grid, buildings
        stamped lot by lot. Every choice - which lot is the bank, how tall
        the false front is, where the outhouse hides - comes out of one
        seeded LCG, so the whole town is a function of the seed."""
        nz = self.nz
        rnd = self.rnd
        tx0, tz0, tx1, tz1 = self.town
        hmap = self.hmap
        mat = self.mat
        base = self.base
        zs = 108
        self.main_z = zs
        kerb_n, kerb_s = zs - 4, zs + 3
        # 1 . flatten: ease the desert up to street level, taper at the edge
        for z in range(tz0 - 12, tz1 + 13):
            if z < 1 or z >= MH - 1:
                continue
            row = z * MW
            bz = smoothstep(tz0 - 10, tz0 + 3, z) * \
                (1.0 - smoothstep(tz1 - 3, tz1 + 10, z))
            if bz <= 0.0:
                continue
            for x in range(tx0 - 12, tx1 + 13):
                if x < 1 or x >= MW - 1:
                    continue
                bx = smoothstep(tx0 - 10, tx0 + 3, x) * \
                    (1.0 - smoothstep(tx1 - 3, tx1 + 10, x))
                w = bx * bz
                if w <= 0.0:
                    continue
                i = row + x
                lap = nz.fbm(x * 0.31, z * 0.31, 2) * 0.9 * (1.0 - w)
                h = lerp(float(hmap[i]), float(TOWN_H) + lap, w)
                hmap[i] = int(h + 0.5)
                if w > 0.5:
                    mat[i] = M_SAND
                    base[i] = 0
        # 2 . Main Street, plus two cross streets. The road is not one flat
        # colour: wheel ruts worn a block deep down the middle, and sand,
        # clay and the odd flagstone patchy across it, all of it from a hash
        # of the cell so the pattern is part of the world and never crawls.
        for z in range(zs - 3, zs + 4):
            rut = (z == zs - 1 or z == zs + 1)
            for x in range(tx0 - 8, tx1 + 9):
                if 1 <= x < MW - 1 and 1 <= z < MH - 1:
                    i = x + z * MW
                    hv = hash2i(x, z, self.seed ^ 0x51) & 255
                    if rut:
                        hmap[i] = TOWN_H - 1
                        mat[i] = M_MUD if hv & 1 else M_ROAD
                    else:
                        hmap[i] = TOWN_H
                        if hv < 128:
                            mat[i] = M_ROAD
                        elif hv < 186:
                            mat[i] = M_SAND
                        elif hv < 216:
                            mat[i] = M_CLAY
                        elif hv < 238:
                            mat[i] = M_MUD
                        elif hv < 250:
                            mat[i] = M_SALT
                        else:
                            # a flagstone somebody laid and never finished
                            hmap[i] = TOWN_H + 1
                            mat[i] = M_STONE
                    base[i] = 0
                    self.flg[i] = 0
        for cx in (74, 132):
            for z in range(tz0 - 2, tz1 + 3):
                if abs(z - zs) < 5:
                    continue
                for dx in range(-3, 4):
                    x = cx + dx
                    if 1 <= x < MW - 1 and 1 <= z < MH - 1:
                        i = x + z * MW
                        hmap[i] = TOWN_H
                        mat[i] = M_ROAD
                        base[i] = 0
                        self.flg[i] = 0
        # 3 . the main street buildings
        names_n = ("SALOON", "G.T. STORE", "BANK", "LIVERY", "SHERIFF",
                   "BLACKSMITH", "DRUGGIST", "GUILD HALL", "ASSAY OFFICE")
        names_s = ("HOTEL", "MEAT MARKET", "THE ARMS", "HARDWARE", "BARBER",
                   "WELLS FARGO", "CHOP SHOP", "GRAIN CO", "BATH HOUSE")
        x = tx0 + 4
        side = 0
        k = 0
        while x < tx1 - 12:
            w = rnd.randint(7, 12)
            if x + w > tx1 - 5:
                w = tx1 - 5 - x
            if w < 5:
                break
            depth = rnd.randint(7, 11)
            spec = None
            nm = (names_n if side == 0 else names_s)[k % 9]
            if k == 0:
                spec = "saloon"
            elif k == 2 and side == 0:
                spec = "bank"
            elif k == 1 and side == 1:
                spec = "hotel"
            elif k == 4 and side == 0:
                spec = "jail"
            elif k == 3 and side == 1:
                spec = "church"
            z0 = (kerb_n - depth) if side == 0 else (kerb_s + 1)
            floors = 1 if rnd.random() < 0.55 else 2
            if spec in ("bank", "hotel"):
                floors = 2
            self.building(x, z0, w, depth, floors, spec, nm, side == 0)
            if spec:
                self.special[spec] = (x + w // 2,
                                      (z0 + depth - 1) if side == 0 else z0)
            self.boardwalk(x, x + w, kerb_n if side == 0 else kerb_s)
            if spec == "church":
                self.church(x + (w - 11) // 2, z0, w, depth)
            if nm in ("SALOON", "HOTEL", "BANK"):
                self.landmarks.append((nm, (x + w / 2.0, zs + (
                    -5.0 - depth / 2.0 if side == 0 else
                    5.0 + depth / 2.0))))
            x += w + rnd.randint(2, 5)
            k += 1
            side = 1 - side
        # 4 . public buildings off the main drag
        self.well(tx0 + 30, zs + 1)
        self.water_tower(tx1 - 16, tz1 - 10)
        self.livery(tx1 - 30, tz0 + 6)
        self.corral_and_yard(tx1 - 12, zs + 20)
        # 5 . street furniture
        self.street_furniture(tx0, tx1, zs)
        # 6 . the sheriff comes to town at the west end
        self.spawn = (tx0 + 7.5, float(TOWN_H), zs - 6.5, 0.0)
        self.landmarks.append(("DUST GULCH", (tx0 + 34.0, float(zs))))

    # ------------------------------------------------------------- builders
    def wall_band(self, x, z, h, m, f):
        """one column of wall, remembering the street height, so the
        renderer can work out which floor a window belongs to"""
        self.setc(x, z, h, m, f, TOWN_H)

    def building(self, x0, z0, w, d, floors, spec, name, front_south):
        """A false-fronted 1850 building, expressed entirely as column
        heights:
          * the street wall rises a storey past the roof - that one number
            is the whole visual signature of a western main street;
          * the roof is a real gable, which is only possible because every
            column may have its own height;
          * doors and windows are not geometry. They are the wall's flag,
            and the renderer picks a different colour band from the height
            it actually hit. From a moving camera nobody can tell, and a
            building costs a few hundred bytes instead of a mesh.
        """
        rnd = self.rnd
        m = M_WOOD
        if spec == "bank":
            m = M_STONE
        elif spec == "hotel":
            m = rnd.choice((M_BRICK, M_WOOD, M_WOOD))
        elif rnd.random() < 0.22:
            m = M_BRICK
        roofm = M_METAL if m == M_STONE else M_ROOF
        if spec == "church":
            m = M_STONE
        wall_h = TOWN_H + 4 * floors + 1
        front_h = wall_h + (2 if rnd.random() < 0.72 else 0)
        zf = (z0 + d - 1) if front_south else z0
        for z in range(z0, z0 + d):
            for x in range(x0, x0 + w):
                edge = (x == x0 or x == x0 + w - 1 or z == z0 or
                        z == z0 + d - 1)
                if not edge:
                    t = (z - z0) / float(max(1, d - 1))
                    pitch = 1.0 - abs(t - 0.5) * 2.0
                    h = wall_h + int(pitch * 2.0 + 0.5)
                    self.setc(x, z, h, roofm, 0, TOWN_H)
                    continue
                f = 0
                if z == zf:
                    h = front_h
                    band = (x - x0) % 4
                    if band in (1, 2) and rnd.random() < 0.75:
                        f |= FL_WIN
                elif z == z0 or z == z0 + d - 1:
                    h = wall_h - (0 if floors > 1 else 1)
                else:
                    h = wall_h
                self.wall_band(x, z, h, m, f)
        # doors at street level
        ndoors = 1 if spec is None else rnd.randint(1, 2)
        for _ in range(ndoors):
            xp = x0 + 1 + rnd.randint(0, max(0, w - 3))
            i = xp + zf * MW
            self.wall_band(xp, zf, self.hmap[i], m, FL_DOOR)
            if w > 10 and rnd.random() < 0.5:
                i = xp + 1 + zf * MW
                self.wall_band(xp + 1, zf, self.hmap[i], m, FL_DOOR)
        # the false front gets a signboard: one band of cream along the top
        for x in range(x0, x0 + w):
            i = x + zf * MW
            if rnd.random() < 0.85:
                self.flg[i] |= FL_SIGN
                if self.hmap[i] < front_h:
                    self.hmap[i] = front_h
        if spec == "saloon":
            for xp in (x0 + w // 2 - 1, x0 + w // 2 + 2):
                i = xp + zf * MW
                self.wall_band(xp, zf, self.hmap[i], M_WOODD, FL_DOOR)
            for xp in (x0 + w // 2, x0 + w // 2 + 1):
                i = xp + zf * MW
                self.wall_band(xp, zf, self.hmap[i], M_SIGN, FL_SIGN)
        if spec == "jail":
            for xp in range(x0, x0 + w):
                i = xp + zf * MW
                if self.hmap[i] < front_h + 3:
                    self.hmap[i] = front_h + 3
                self.mat[i] = M_STONE
                self.flg[i] = FL_SIGN if xp == x0 + w // 2 else FL_WIN
        # chimneys, porch, lean-to
        if rnd.random() < 0.55 and spec != "jail":
            cx = x0 + 1 + rnd.randint(0, max(0, w - 4))
            cz = z0 + rnd.randint(1, max(2, d - 4))
            for a in (cx, cx + 1):
                for b in (cz, cz + 1):
                    i = a + b * MW
                    self.setc(a, b, self.hmap[i] + rnd.randint(2, 4),
                              M_STONE, 0, TOWN_H)
        zp = zf + 1 if front_south else zf - 1
        if rnd.random() < 0.62:
            for x in range(x0, x0 + w):
                if (x - x0) % 3 == 0:
                    self.setc(x, zp, TOWN_H + 3, M_POST, 0, TOWN_H)
                i = x + zp * MW
                if self.col_h(x, zp) < TOWN_H + 1:
                    self.setc(x, zp, TOWN_H + 1, M_WOODD, FL_SIGN, TOWN_H)
                elif self.hmap[i] < TOWN_H + 1:
                    self.hmap[i] = TOWN_H + 1
        zb = zf - 1 if front_south else zf + 1
        if rnd.random() < 0.4:
            for x in range(x0, x0 + w):
                h = TOWN_H + 2 + int((x - x0) / 3)
                self.setc(x, zb, h, M_WOODD, 0, TOWN_H)

    def church(self, x0, z0, w=11, d=13):
        for z in range(z0, z0 + d):
            for x in range(x0, x0 + w):
                edge = (x == x0 or x == x0 + w - 1 or z == z0 or
                        z == z0 + d - 1)
                if edge:
                    self.wall_band(x, z, TOWN_H + 5, M_STONE, FL_WIN)
                else:
                    t = (z - z0) / float(d - 1)
                    self.setc(x, z, TOWN_H + 5 +
                              int((1.0 - abs(t - 0.5) * 2.0) * 2.0 + 0.5),
                              M_ROOF, 0, TOWN_H)
        for z in range(z0 + d - 5, z0 + d):
            for x in range(x0 + 3, x0 + 8):
                self.wall_band(x, z, TOWN_H + 9, M_STONE, FL_WIN)
        # the steeple is just a one-cell column: height fields are so
        # convenient that a spire costs one assignment
        cx = x0 + 5
        cz = z0 + d - 2
        for k in range(10, 16):
            self.setc(cx, cz, TOWN_H + k, M_STONE, 0, TOWN_H)
        for dx in (-1, 1):
            self.setc(cx + dx, cz, TOWN_H + 10, M_STONE, FL_LAMP, TOWN_H)
        self.landmarks.append(("CHURCH", (cx + 0.5, cz + 0.5)))
        self.special["church_tower"] = (cx, cz)

    def water_tower(self, x, z):
        """A height field has no floating blocks, so the tank sits on a
        filled pier. From across the street it reads exactly like a studded
        tank on legs, and the legs are what the renderer's fog makes
        beautiful."""
        for dz in range(-1, 2):
            for dx in range(-1, 2):
                self.setc(x + dx, z + dz, TOWN_H + 11, M_WOODD, 0, TOWN_H)
        for dz in (-2, 2):
            for dx in (-2, 2):
                self.setc(x + dx, z + dz, TOWN_H + 4, M_POST, 0, TOWN_H)
        self.setc(x - 2, z, TOWN_H + 6, M_POST, 0, TOWN_H)
        self.setc(x + 2, z, TOWN_H + 6, M_POST, 0, TOWN_H)
        for dx in range(-1, 2):
            self.setc(x + dx, z + 3, TOWN_H + 2, M_WATER, 0, TOWN_H)
            self.setc(x + dx, z + 4, TOWN_H + 1, M_WATER, 0, TOWN_H)
        self.landmarks.append(("WATER TOWER", (x + 0.5, z + 3.5)))
        self.special["tower"] = (x, z)

    def livery(self, x, z, w=9, d=7):
        for zz in range(z, z + d):
            for xx in range(x, x + w):
                edge = (xx == x or xx == x + w - 1 or zz == z or
                        zz == z + d - 1)
                if edge:
                    self.wall_band(xx, zz, TOWN_H + 4, M_WOODD,
                                   FL_WIN if zz == z else 0)
                else:
                    self.setc(xx, zz, TOWN_H + 3, M_HAY, 0, TOWN_H)
        self.landmarks.append(("LIVERY", (x + w / 2.0, z + d / 2.0)))
        self.special["livery"] = (x + w // 2, z - 1)

    def corral_and_yard(self, x, z):
        for k in range(-1, 12):
            for j in range(-1, 9):
                edge = (k in (-1, 11) and -1 <= j <= 8) or \
                    (j in (-1, 8) and -1 <= k <= 11)
                if edge:
                    self.setc(x + k, z + j, TOWN_H + 2, M_POST, 0, TOWN_H)
        for k in range(4):
            self.setc(x + 2 + k * 2, z + 2, TOWN_H + 1, M_HAY, 0, TOWN_H)
            self.setc(x + 2 + k * 2, z + 5, TOWN_H + 1, M_BARREL, 0, TOWN_H)
        self.landmarks.append(("CORRAL", (x + 5.0, z + 4.0)))
        self.special["corral"] = (x + 5, z + 4)

    def boardwalk(self, x0, x1, z):
        """A plank walk one step above the street, with the step itself
        being the whole difference between standing in the road and
        standing outside the saloon. Anything the building put on that row
        - porch posts, a barrel, a hitching rail - stays put: only ground
        that is too low gets raised."""
        for x in range(x0, x1):
            if 0 <= x < MW and 0 <= z < MH:
                if self.hmap[x + z * MW] < TOWN_H + 1:
                    self.setc(x, z, TOWN_H + 1, M_WOODD, FL_SIGN, TOWN_H)

    def well(self, x, z):
        hh = TOWN_H
        for dz in range(-1, 2):
            for dx in range(-1, 2):
                if dx == 0 and dz == 0:
                    self.setc(x, z, hh + 1, M_WATER, 0, hh)
                else:
                    self.setc(x + dx, z + dz, hh + 2, M_STONE, 0, hh)
        for dx in (-1, 1):
            self.setc(x + dx, z - 1, hh + 6, M_POST, 0, hh)
        for dx in range(-1, 2):
            self.setc(x + dx, z - 1, hh + 7, M_ROOF, 0, hh)
        self.well_at = (x + 0.5, float(hh + 2), z + 0.5)
        self.landmarks.append(("THE WELL", (x + 0.5, z + 0.5)))

    def street_furniture(self, x0, x1, zs):
        rnd = self.rnd
        # every six cells: a barrel, a crate, a rail to tie to, a trough.
        # A frontier street was never tidy and the clutter is what makes a
        # street of flat columns look like somebody lives here.
        for x in range(x0 + 3, x1 - 4, 6):
            for zz in (zs - 4, zs + 3):
                if rnd.random() < 0.62:
                    self.setc(x, zz, TOWN_H + 4, M_METAL, FL_LAMP, TOWN_H)
                if rnd.random() < 0.5:
                    zo = zz + (1 if zz > zs else -1)
                    for k in range(4):
                        self.setc(x + k, zo, TOWN_H + 1, M_POST, 0, TOWN_H)
            # stock, goods and water: what a street is actually full of.
            # All of it on the boardwalk row, right outside the door, which
            # is where a horse would be tied and a barrel left.
            if rnd.random() < 0.5:
                self.setc(x + 1, zz, TOWN_H + 2, M_BARREL, 0, TOWN_H)
            if rnd.random() < 0.4:
                self.setc(x + 2, zz, TOWN_H + 2, M_WOODD, 0, TOWN_H)
            if rnd.random() < 0.5:
                for k in (3, 6):
                    self.setc(x + k, zz, TOWN_H + 2, M_POST, 0, TOWN_H)
                for k in (4, 5):
                    self.setc(x + k, zz, TOWN_H + 2, M_WOOD, 0, TOWN_H)
            if rnd.random() < 0.42:
                self.setc(x + 8, zz, TOWN_H + 2, M_WATER, 0, TOWN_H)
                self.setc(x + 9, zz, TOWN_H + 2, M_WATER, 0, TOWN_H)
                if self.trough_at is None:
                    self.trough_at = (x + 8.5, float(TOWN_H + 3),
                                      zz + 0.5)
            if rnd.random() < 0.14:
                # and one that got there before the street did
                self.setc(x + 4, zs, TOWN_H + 2, M_CACTUS, 0, TOWN_H)

    # ------------------------------------------------------------ outskirts
    def gen_outskirts(self):
        """Boot Hill above the town, an outlaw camp out in the badlands, a
        mine adit driven into the first mesa the west road finds."""
        rnd = self.rnd
        tx0, tz0, tx1, tz1 = self.town
        zs = self.main_z
        # Boot Hill
        gx0, gz0 = tx1 - 30, tz1 + 12
        for r in range(5):
            for c in range(8):
                if rnd.random() < 0.3:
                    continue
                x = gx0 + c * 3 + (r & 1)
                z = gz0 + r * 3
                hh = self.col_h(x, z)
                self.setc(x, z, hh + 2, M_GRAVE, 0, hh)
                self.setc(x, z - 1, hh + 1, M_GRAVE, 0, hh)
                if rnd.random() < 0.18:
                    self.setc(x + 1, z, hh + 1, M_BONE, 0, hh)
        self.landmarks.append(("BOOT HILL", (gx0 + 10.0, gz0 + 6.0)))
        self.special["graveyard"] = (gx0 + 10, gz0 + 6)
        # gallows on the flat above Boot Hill
        gxx, gzz = gx0 + 3, gz0 - 4
        for k in range(4):
            self.setc(gxx + k, gzz, TOWN_H + 5, M_WOODD, 0, TOWN_H)
        self.setc(gxx, gzz, TOWN_H + 5, M_POST, 0, TOWN_H)
        self.setc(gxx + 3, gzz, TOWN_H + 5, M_POST, 0, TOWN_H)
        self.setc(gxx + 1, gzz - 1, TOWN_H + 1, M_WOOD, 0, TOWN_H)
        self.setc(gxx + 2, gzz - 1, TOWN_H + 1, M_WOOD, 0, TOWN_H)
        # outhouses down the back of town
        for k in range(5):
            x = tx0 + 18 + k * 17
            z = tz0 - 5
            self.setc(x, z, TOWN_H + 3, M_WOODD, 0, TOWN_H)
            self.setc(x + 1, z, TOWN_H + 3, M_WOODD, 0, TOWN_H)
        # outlaw camp: find the flattest quiet ground away from town
        best = None
        for _ in range(300):
            x = rnd.randint(10, MW - 11)
            z = rnd.randint(10, MH - 11)
            if tx0 - 24 < x < tx1 + 24 and tz0 - 24 < z < tz1 + 24:
                continue
            hh = self.col_h(x, z)
            if hh < 3 or hh > 11:
                continue
            flat = 0
            for dz in range(-4, 5):
                for dx in range(-4, 5):
                    if abs(self.col_h(x + dx, z + dz) - hh) <= 1:
                        flat += 1
            if flat > 60:
                score = flat - abs(x - (tx0 + 40)) * 0.02
                if best is None or score > best[0]:
                    best = (score, x, z, hh)
        if best is None:
            bx, bz = 20, 26
            best = (0, bx, bz, self.col_h(bx, bz))
        _, bx, bz, bh = best
        for t in range(3):
            for dz in range(4):
                for dx in range(4):
                    if dx in (0, 3) or dz in (0, 3):
                        self.setc(bx + t * 5 + dx, bz + dz, bh + 3, M_CLOTH,
                                  0, bh)
        self.setc(bx + 1, bz + 5, bh + 1, M_FIRE, FL_LAMP, bh)
        for k in range(3):
            self.setc(bx + 6 + k, bz + 6, bh + 1, M_BARREL, 0, bh)
        self.campfire = (bx + 1.5, float(bh + 1), bz + 5.5)
        self.landmarks.append(("OUTLAW CAMP", (bx + 2.0, bz + 3.0)))
        self.special["camp"] = (bx + 2, bz + 3)
        # mine adit on the western mesas
        for z in range(24, MH - 24, 1):
            hit = None
            for x in range(8, tx0 - 10):
                i = x + z * MW
                if self.hmap[i] > TOWN_H + 12 and \
                        self.hmap[i + 1] > TOWN_H + 10 and \
                        self.hmap[i - 1] <= TOWN_H + 3:
                    hit = x
                    break
            if hit is not None:
                x = hit
                hh = TOWN_H
                for dx in range(1, 4):
                    self.setc(x + dx, z, hh + 1, M_WOODD, FL_SIGN, hh)
                for dz in (-2, 2):
                    self.setc(x + 1, z + dz, hh + 4, M_POST, 0, hh)
                    self.setc(x + 3, z + dz, hh + 4, M_POST, 0, hh)
                self.landmarks.append(("MINE", (x + 2.0, float(z))))
                self.special["mine"] = (x + 2, z)
                break


# ============================================================================
# 6.  LIGHT AND COLOUR
# ============================================================================
#  Every frame the renderer needs, for each of the 56 material colours, the
#  palette index it becomes at each of 8 light levels and 6 fog distances:
#  56*8*6 = 2688 numbers. Precomputing that table is what lets a pure Python
#  raycaster shade a few thousand cells a frame - inside the march a lit,
#  fogged, dithered, palette-quantised colour with its own ink character
#  costs exactly one list index.
# ============================================================================

NSHADE = 12
NFOG = 10
CLOUDLV = 16
BLEND_STRIDE = NSHADE * NFOG
# a ray's share of its way into the haze. Ten bands, eased so the near ones
# are finer - the eye resolves distance well close up and badly far away.
FOG_W = (0.0, 0.05, 0.11, 0.19, 0.29, 0.40, 0.53, 0.68, 0.83, 0.94)

# which ink ramp each material colour is drawn with
MCOLRAMP = (
    0, 0, 0, 0, 3, 7, 2, 2, 2, 2, 2, 0, 3, 0,      #  0 sand .. 13 mud
    1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 4, 4,      # 14 plank .. 27 dark
    0, 2, 3, 4, 4, 2, 3, 7, 6, 5, 5, 4,            # 28 door .. 39 gold
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,                # 40 canvas .. 50 leaf
    2, 5, 0, 2, 0, 1,                               # 51 wall .. 56 horse
)
EMISSIVE = frozenset((27, 37, 38, 39, 52))

# sky keyframes: time, zenith, horizon, fog, sun, ambient floor, star alpha
SKY_KEYS = (
    (0.000, (7, 9, 20), (16, 18, 34), (12, 14, 26), (150, 165, 200),
     0.17, 1.0),
    (0.190, (9, 12, 28), (34, 26, 44), (22, 20, 34), (160, 150, 185),
     0.19, 0.9),
    (0.245, (46, 46, 92), (196, 96, 62), (128, 82, 66), (255, 150, 84),
     0.30, 0.05),
    (0.290, (92, 132, 196), (232, 172, 118), (196, 172, 148),
     (255, 226, 168), 0.50, 0.0),
    (0.500, (86, 138, 214), (186, 200, 214), (204, 198, 184),
     (255, 253, 240), 0.52, 0.0),
    (0.715, (92, 132, 200), (236, 178, 112), (196, 174, 152),
     (255, 228, 172), 0.50, 0.0),
    (0.760, (62, 52, 104), (226, 108, 56), (146, 86, 60), (255, 138, 66),
     0.30, 0.05),
    (0.815, (16, 18, 44), (56, 34, 48), (30, 24, 36), (160, 150, 185),
     0.20, 0.8),
    (1.000, (7, 9, 20), (16, 18, 34), (12, 14, 26), (150, 165, 200),
     0.17, 1.0),
)


class Lighting(object):
    """Time of day -> sky colours, ambient floor, cloud palette, and the
    shade/fog table. The day is quantised into 48 keys, so the 2688 entry
    table is only rebuilt a couple of times a minute while the sun's
    direction and the sky gradient stay continuous."""

    NKEY = 48

    def __init__(self, tc=False, mono=False):
        self.tc = bool(tc)
        self.mono = bool(mono)
        # A level of indirection between "the colour this cell should be"
        # and "the number we put in the escape sequence": fb_fg holds an
        # index into cmap. Without truecolor cmap is the identity and the
        # indices are xterm colours. With it, cmap holds exact 24-bit
        # colours that were deduplicated through a 565 key, which keeps a
        # smooth sky and honest browns without any palette at all.
        if self.tc:
            # 4096 slots, 16 levels of each channel, each one the middle of
            # its own block: enough to hold a desert without a single band
            self.cmap = [None] * 4096
        else:
            self.cmap = list(range(256))
        self.ckey = {}
        self.key = -1
        self.ble = None
        self.cloudpal = None
        self.zen = (90, 130, 200)
        self.hor = (190, 200, 210)
        self.fog = (204, 198, 184)
        self.sunrgb = (255, 253, 240)
        self.amb = 1.0
        self.star = 0.0
        self.keys = [self._sample((i + 0.5) / self.NKEY)
                     for i in range(self.NKEY)]
        self.update(0.38)

    def qcol(self, r, g, b, ph=0):
        """The colour of one cell, as whatever this terminal wants: a grey
        ramp index, a 24-bit packed colour, or a dithered xterm index."""
        if self.mono:
            lum = (int(r) * 77 + int(g) * 151 + int(b) * 28) >> 8
            if lum < 0:
                lum = 0
            elif lum > 255:
                lum = 255
            return 232 + (lum * 23) // 255
        if self.tc:
            # no per-cell dithering here: the sky is smoothed a whole row at
            # a time instead, which costs the emitter no extra escapes
            ir = int(r)
            ig = int(g)
            ib = int(b)
            if ir < 0:
                ir = 0
            elif ir > 255:
                ir = 255
            if ig < 0:
                ig = 0
            elif ig > 255:
                ig = 255
            if ib < 0:
                ib = 0
            elif ib > 255:
                ib = 255
            key = ((ir >> 4) << 8) | ((ig >> 4) << 4) | (ib >> 4)
            if self.cmap[key] is None:
                self.cmap[key] = (TCF |
                                  ((((key >> 8) & 15) << 4) + 8) << 16 |
                                  ((((key >> 4) & 15) << 4) + 8) << 8 |
                                  (((key & 15) << 4) + 8))
            return key
        return quant_d(r, g, b, ph)

    def qflat(self, r, g, b):
        return self.qcol(r, g, b, 0)

    @staticmethod
    def _sample(t):
        a = SKY_KEYS[0]
        b = SKY_KEYS[-1]
        for k in range(len(SKY_KEYS) - 1):
            if SKY_KEYS[k][0] <= t <= SKY_KEYS[k + 1][0]:
                a = SKY_KEYS[k]
                b = SKY_KEYS[k + 1]
                break
        f = 0.0 if b[0] == a[0] else (t - a[0]) / (b[0] - a[0])
        f = f * f * (3.0 - 2.0 * f)

        def m3(p, q):
            return (lerp(p[0], q[0], f), lerp(p[1], q[1], f),
                    lerp(p[2], q[2], f))
        return (m3(a[1], b[1]), m3(a[2], b[2]), m3(a[3], b[3]),
                m3(a[4], b[4]), lerp(a[5], b[5], f), lerp(a[6], b[6], f))

    def update(self, tod):
        key = int(tod * self.NKEY) % self.NKEY
        if key == self.key:
            return False
        self.key = key
        self.zen, self.hor, self.fog, self.sunrgb, self.amb, self.star = \
            self.keys[key]
        self.ble, self.cloudpal = self._build()
        return True

    def _build(self):
        fr, fg_, fb = self.fog
        # The cell background is the shadow the char lies in: the same colour
        # as the ink, simply darkened, with a small cool additive bias. That
        # bias is what keeps a night scene from going magenta once the warm
        # colours fall to black. Lifting the background *toward* the pale
        # haze instead - which is what was done here before - washed every
        # shadow in the frame into one flat grey-mauve field.
        ar, ag, ab = 6.0, 8.0, 15.0
        amb = self.amb
        sr, sg, sb = self.sunrgb
        sunw = clamp((sr * 0.25 + sg * 0.65 + sb * 0.10) / 255.0, 0.30, 1.3)
        ble = [0] * (len(MCOLS) * BLEND_STRIDE)
        k = 0
        for ci in range(len(MCOLS)):
            br, bg, bb = MCOLS[ci]
            ramp = RAMPS[MCOLRAMP[ci]]
            emis = ci in EMISSIVE
            for lvl in range(NSHADE):
                if emis:
                    lr, lg, lb = float(br), float(bg), float(bb)
                    f = 1.0
                else:
                    f = (amb + (1.0 - amb) * (lvl / float(NSHADE - 1))) * sunw
                    lr = br * f
                    lg = bg * f
                    lb = bb * f
                # Contrast belongs to the light. In full sun the ink stands
                # well off its background; in shadow the two converge, which
                # is what a shaded wall actually looks like. Leaving the gap
                # fixed made every wall facing away from the sun a black hole
                # in the middle of a bright street.
                bgf = 1.0 - 0.30 * (f if f < 1.0 else 1.0)
                for fo in range(NFOG):
                    w = FOG_W[fo] * (0.35 if emis else 1.0)
                    r = lr + (fr - lr) * w
                    g = lg + (fg_ - lg) * w
                    b = lb + (fb - lb) * w
                    cl = (lvl * 8) // (NSHADE - 1) - (fo >> 2)
                    if cl < 0:
                        cl = 0
                    elif cl > 7:
                        cl = 7
                    pk = self.qflat(r * bgf + ar, g * bgf + ag,
                                    b * bgf + ab)
                    pk |= ord(ramp[cl]) << 12
                    for ph in range(4):
                        pk |= self.qcol(r, g, b, ph) << (20 + ph * 12)
                    ble[k] = pk
                    k += 1
        # clouds: 16 density levels x the fog bands; slot 0 means "leave the
        # sky alone". Sixteen because eight made the underside of a cloud
        # deck a chessboard wherever the density sat near a threshold.
        zr, zg, zb = self.zen
        cp = [0] * (CLOUDLV * NFOG)
        bright = clamp(0.52 + 0.56 * self.amb, 0.30, 1.06)
        for lv in range(1, CLOUDLV):
            q = 0.14 + lv * 0.0575
            for fo in range(NFOG):
                w = FOG_W[fo] * 0.8
                r = (255.0 * bright * (0.55 + 0.45 * q)) * (1.0 - w) + fr * w
                g = (252.0 * bright * (0.50 + 0.50 * q)) * (1.0 - w) + fg_ * w
                b = (248.0 * bright * (0.48 + 0.52 * q)) * (1.0 - w) + fb * w
                if self.star > 0.4:
                    r = lerp(r, zr * 0.7, 0.8)
                    g = lerp(g, zg * 0.7, 0.8)
                    b = lerp(b, zb * 0.9, 0.8)
                cp[lv * NFOG + fo] = self.qflat(r, g, b)
        return ble, cp


# ============================================================================
# 7.  THE RENDERER
# ============================================================================
#  One ray per character cell of the screen, marched through the height
#  field with an exponentially growing step: a fifth of a block at your
#  boots, nearly four blocks a hundred metres out. That is the classic
#  height field trick - you only pay for resolution where perspective asks
#  for it - and it is the whole reason a pure Python 3D renderer can hold
#  double figures. The step that lands inside the ground is bisected four
#  times against the height map, so the hit point is accurate to a few
#  thousandths of a block and window frames and plank seams do not crawl as
#  you walk.
#
#  Two things keep the inner loop branch-light and index-only:
#    * the grid is padded by PAD cells on every side and the padding is a
#      copy of the nearest edge, so no ray can ever read out of bounds and
#      the country appears to go on for ever instead of ending in a wall;
#    * every screen column is measured once a frame against a 4x4
#      max-height pyramid to find the elevation of its skyline, and any cell
#      looking above that skyline skips the march and is painted straight out
#      of the sky gradient. Half the screen is usually sky.
# ============================================================================

PAD = 64
STR = MW + PAD * 2
CLOUD_H = 74.0
CLOUD_S = 0.030
CHRS = [chr(i) for i in range(256)]
PHAS_TABLE = (0, 2, 1, 3, 3, 1, 2, 0, 1, 3, 0, 2, 2, 0, 3, 1)
ORDS = [0] * 256
for _i in range(256):
    ORDS[_i] = _i


class Renderer(object):
    def __init__(self, world, con, opts):
        self.w = world
        self.con = con
        self.detail = opts.detail
        self.tmax = float(opts.viewdist)
        self.tanH = math.tan(math.radians(opts.fov) * 0.5)
        self.cols = 0
        self.rows = 0
        self.W = 1
        self.H = 1
        self.hud = 3   # the strip under the viewport is three lines
        self.hudtext = ""
        self.cloud = self.make_clouds(world.seed)
        self.tc = bool(getattr(opts, "truecolor", False))
        self.light = Lighting(self.tc, not getattr(opts, "color", True))
        self.ble = self.light.ble
        self.cloudpal = self.light.cloudpal
        self.mcolmap = bytearray(M_COUNT * 8 * 4 * 2)
        self.night = None
        self.set_textures(False)
        self.build_grid()
        self.alloc_fb(self.W * self.H)
        self.dbuf = [1e9] * 512
        self.ax = [1.0] * 512
        self.az = [0.0] * 512
        self.eh2 = [0.0] * 512
        self.skypal = [0] * 2048
        self.starpal = [0] * 512
        self.text_ = ""
        self.binary = hasattr(sys.stdout, "buffer")
        self.out = sys.stdout.buffer if self.binary else sys.stdout
        self.px = self.py = self.pz = 0.0
        self.fx, self.fy, self.fz = 1.0, 0.0, 0.0
        self.rx, self.rz = 0.0, 1.0
        self.ux, self.uy, self.uz = 0.0, 1.0, 0.0
        self.tanV = 0.5
        self.pitch = 0.0
        self.hitmark = 0.0

    def alloc_fb(self, n):
        # with truecolor the colour is a cmap index and the map can be
        # longer than 256, so the buffers have to be real lists
        if self.tc:
            self.fb_fg = [0] * n
            self.fb_bg = [0] * n
        else:
            self.fb_fg = bytearray(n)
            self.fb_bg = bytearray(n)
        self.fb_ch = bytearray(n)

    # --------------------------------------------------- padded render grid
    def build_grid(self):
        """Copy the 224x224 world into a 352x352 grid padded by the nearest
        edge cell, so the march never needs a bounds test."""
        w = self.w
        n = STR * STR
        self.rh = bytearray(n)
        self.rm = bytearray(n)
        self.rf = bytearray(n)
        self.rb = bytearray(n)
        sh = w.hmap
        sm = w.mat
        sf = w.flg
        sb = w.base
        rh = self.rh
        rm = self.rm
        rf = self.rf
        rb = self.rb
        for z in range(STR):
            wz = z - PAD
            if wz < 0:
                wz = 0
            elif wz > MH - 1:
                wz = MH - 1
            srow = wz * MW
            drow = z * STR
            for x in range(STR):
                wx = x - PAD
                if wx < 0:
                    wx = 0
                elif wx > MW - 1:
                    wx = MW - 1
                s = srow + wx
                d = drow + x
                rh[d] = sh[s]
                rm[d] = sm[s]
                rf[d] = sf[s]
                rb[d] = sb[s]
        hmax = 0
        for v in rh:
            if v > hmax:
                hmax = v
        self.hmaxf = float(hmax)
        self.build_pyramid()

    def build_pyramid(self):
        """4x4 max-height tiles: the coarse silhouette used to reject sky
        cells, and to reject bullets."""
        pw = STR // 4
        self.pw = pw
        rh = self.rh
        pq = [0] * (pw * pw)
        for j in range(pw):
            for i in range(pw):
                ii = i * 4
                jj = j * 4
                m = 0
                for b in range(4):
                    o = (jj + b) * STR + ii
                    v0 = rh[o]
                    v1 = rh[o + 1]
                    v2 = rh[o + 2]
                    v3 = rh[o + 3]
                    if v0 > m:
                        m = v0
                    if v1 > m:
                        m = v1
                    if v2 > m:
                        m = v2
                    if v3 > m:
                        m = v3
                pq[i + j * pw] = m
        self.pq = pq

    def refresh_cells(self, cells):
        """Copy back the few columns the game changed (props shot to bits)
        and repair the pyramid tiles they live in."""
        if not cells:
            return
        rh = self.rh
        rm = self.rm
        rf = self.rf
        rb = self.rb
        w = self.w
        for x, z in cells:
            for xx in range(x - 1, x + 2):
                if xx < 0 or xx >= MW:
                    continue
                for zz in range(z - 1, z + 2):
                    if zz < 0 or zz >= MH:
                        continue
                    s = xx + zz * MW
                    d = (xx + PAD) + (zz + PAD) * STR
                    rh[d] = w.hmap[s]
                    rm[d] = w.mat[s]
                    rf[d] = w.flg[s]
                    rb[d] = w.base[s]
        pw = self.pw
        pq = self.pq
        for x, z in cells:
            dx = x + PAD
            dz = z + PAD
            for pj in range((dz - 4) >> 2, (dz + 4 >> 2) + 1):
                for pi in range((dx - 4) >> 2, (dx + 4 >> 2) + 1):
                    if 0 <= pi < pw and 0 <= pj < pw:
                        ii = pi * 4
                        jj = pj * 4
                        m = 0
                        for b in range(4):
                            o = (jj + b) * STR + ii
                            for a in range(4):
                                v = rh[o + a]
                                if v > m:
                                    m = v
                        pq[pi + pj * pw] = m
        del cells[:]

    # ------------------------------------------------------------- clouds
    @staticmethod
    def make_clouds(seed):
        """A 128x128 seamless fBm sky. Clouds are sampled where the ray
        punches through a plane 74 blocks up, so they parallax properly as
        you walk and slide past when you turn, and the sample point is
        drifted for wind. One bilinear lookup per cell, no noise calls in
        the render loop."""
        nz = NoiseField((seed ^ 0x13579BDF) & 0x7FFFFFFF)
        m = 128
        g = bytearray(m * m)
        for j in range(m):
            base = j * m
            for i in range(m):
                v = nz.fbm(i * 0.052, j * 0.052, 4) + \
                    nz.p.n2(i * 0.19, j * 0.19) * 0.20
                v = (v + 0.16) * 2.5
                iv = int(v)
                if iv < 0:
                    iv = 0
                elif iv > 255:
                    iv = 255
                g[base + i] = iv
        return g

    # ------------------------------------------------------- texture lookup
    def set_textures(self, night):
        """ci = (material, flags, floor band, top/side) -> which entry of
        MCOLS paints that surface. This table is why the march loop contains
        no `if wood and window and second storey` chains: every
        architectural decision is made once, here."""
        if self.night is night:
            return
        self.night = night
        mp = self.mcolmap
        i = 0
        for m in range(M_COUNT):
            tc, sc, ramp, em = MATS[m]
            for f in range(8):
                for band in range(4):
                    for top in range(2):
                        c = tc if top else sc
                        if not top:
                            if (f & FL_WIN) and band in (1, 2):
                                c = 27 if night else 26
                            elif (f & FL_DOOR) and band in (0, 1, 2):
                                c = 28
                            elif (f & FL_SIGN) and band == 3:
                                c = 19
                            elif (f & FL_SIGN) and band == 0:
                                c = 51
                        if (f & FL_LAMP) and band < 2:
                            c = 52 if night else 31
                        mp[i] = c
                        i += 1

    # --------------------------------------------------------------- resize
    def set_size(self, cols, rows):
        if cols == self.cols and rows == self.rows:
            return False
        self.cols = cols
        self.rows = rows
        want = (76, 100, 128, 164, 208)[max(0, min(4, self.detail))]
        W = min(cols, want)
        H = rows - self.hud
        if H < 8:
            H = 8
        if W < 16:
            W = 16
        self.W = W
        self.H = H
        self.tanV = self.tanH * 2.0 * H / float(W)
        n = W * H
        self.alloc_fb(n)
        self.dbuf = [1e9] * W
        self.ax = [1.0] * W
        self.az = [0.0] * W
        self.eh2 = [0.0] * W
        self.skypal = [0] * (H * 4)
        self.starpal = [0] * H
        return True

    # ------------------------------------------------------------ camera
    def set_cam(self, px, py, pz, yaw, pitch):
        self.px = px
        self.py = py
        self.pz = pz
        self.pitch = pitch
        cp = math.cos(pitch)
        sp = math.sin(pitch)
        cy = math.cos(yaw)
        sy = math.sin(yaw)
        self.fx = cy * cp
        self.fy = sp
        self.fz = sy * cp
        self.rx = -sy
        self.rz = cy
        self.ux = -cy * sp
        self.uy = cp
        self.uz = -sy * sp

    def project(self, x, y, z):
        """world point -> (cell column, cell row, depth along the view)"""
        dx = x - self.px
        dy = y - self.py
        dz = z - self.pz
        dep = dx * self.fx + dy * self.fy + dz * self.fz
        if dep < 0.35:
            return None
        u = (dx * self.rx + dz * self.rz) / dep / (2.0 * self.tanH)
        if u < -1.6 or u > 1.6:
            return None
        v = (dx * self.ux + dy * self.uy + dz * self.uz) / dep / \
            (2.0 * self.tanV)
        return (u + 0.5) * self.W, (0.5 - v) * self.H, dep

    def visible(self, x, y, z):
        """can the camera see this point? coarse march, used for line of
        sight and by the guns"""
        px = self.px
        py = self.py
        pz = self.pz
        dx = x - px
        dy = y - py
        dz = z - pz
        dep = math.sqrt(dx * dx + dy * dy + dz * dz)
        if dep < 0.6:
            return True
        n = int(dep * 2.4)
        if n < 4:
            n = 4
        sx = dx / n
        sy = dy / n
        sz = dz / n
        rh = self.rh
        o = float(PAD)
        t = 0.6
        while t < dep - 0.5:
            ci0 = int(px + sx * t + o) + int(pz + sz * t + o) * STR
            if py + sy * t < rh[ci0]:
                return False
            t += 1.0
        return True

    def ray(self, ox, oy, oz, dx, dy, dz, lim):
        """distance along a ray to the first bit of the world, or lim"""
        rh = self.rh
        o = float(PAD)
        t = 0.30
        st = 0.26
        tp = 0.0
        while t < lim:
            if oy + dy * t < rh[int(ox + dx * t + o) +
                                int(oz + dz * t + o) * STR]:
                lo = tp
                hi = t
                for _ in range(4):
                    mid = (lo + hi) * 0.5
                    cj = int(ox + dx * mid + o) + int(oz + dz * mid + o) * STR
                    if oy + dy * mid < rh[cj]:
                        hi = mid
                    else:
                        lo = mid
                return (lo + hi) * 0.5
            tp = t
            t += st
            st *= 1.45
        return lim

    # ------------------------------------------------------------- the march
    def render(self, sun, ents, flash, wind, tod):
        self.light.update(tod)
        ble = self.ble = self.light.ble
        cpal = self.cloudpal = self.light.cloudpal
        W = self.W
        H = self.H
        rh = self.rh
        rm = self.rm
        rf = self.rf
        rb = self.rb
        pq = self.pq
        pw = self.pw
        tmax = self.tmax
        px = self.px
        py = self.py
        pz = self.pz
        fx = self.fx
        fy = self.fy
        fz = self.fz
        rx = self.rx
        rz = self.rz
        ux = self.ux
        uy = self.uy
        uz = self.uz
        cp = math.cos(self.pitch)
        if cp < 1e-3:
            cp = 1e-3
        tanH = self.tanH
        tanV = self.tanV
        mcolmap = self.mcolmap
        amb = self.light.amb
        star = self.light.star
        dbuf = self.dbuf
        fb_ch = self.fb_ch
        fb_fg = self.fb_fg
        fb_bg = self.fb_bg
        slx, sly, slz = sun
        cloud = self.cloud
        skypal = self.skypal
        starpal = self.starpal
        phas = PHAS_TABLE
        qcol = self.light.qcol
        off = float(PAD)
        pxo = px + off
        pzo = pz + off
        inv2H = 2.0 / W
        inv2V = 2.0 / H
        far = tmax
        fogsc = (NFOG - 0.02) / tmax
        # dithering the fog band is worth it when there are 4096 colours to
        # fade between; with 256 it just checks the far ground
        foggain = 2.6 if self.tc else 0.0
        # ---- per column: direction, and the elevation of the skyline seen
        #      along it. Anything above that elevation is sky, no march.
        axl = self.ax
        azl = self.az
        eh2l = self.eh2
        for i in range(W):
            u = ((i + 0.5) * inv2H - 1.0) * tanH
            ax = fx + rx * u
            az = fz + rz * u
            axl[i] = ax
            azl[i] = az
            hl = math.sqrt(ax * ax + az * az)
            if hl < 1e-5:
                hl = 1e-5
            hnx = ax / hl
            hnz = az / hl
            d = 1.5
            me = -9.0
            for _ in range(14):
                pi = int((pxo + hnx * d) * 0.25) + \
                    int((pzo + hnz * d) * 0.25) * pw
                e = (pq[pi] - py) / d
                if e > me:
                    me = e
                d *= 1.42
                if d > far:
                    break
            eh2l[i] = me * me if me >= 0.0 else -1.0
        # ---- per row: the sky colour, from a vertical gradient
        zr, zg, zb = self.light.zen
        hr, hg, hb = self.light.hor
        gr, gg, gb = self.light.fog
        fl = flash * 90.0
        for j in range(H):
            v = (0.5 - (j + 0.5) * inv2V) * 2.0 * tanV
            e = (fy + uy * v) / cp
            ee = e if e > 0.0 else -e * 0.5
            al = clamp(ee, 0.0, 1.0)
            r = hr + (zr - hr) * al
            g = hg + (zg - hg) * al
            b = hb + (zb - hb) * al
            if e < 0.0:
                t = clamp(-e * 5.0, 0.0, 0.9)
                r += (gr - r) * t
                g += (gg - g) * t
                b += (gb - b) * t
            sr4 = r + fl
            sg4 = g - fl * 0.45
            sb4 = b - fl * 0.45
            if self.tc:
                # 4096 buckets is not infinite: nudge alternate rows half a
                # bucket apart so a slow gradient reads as a gradient
                dos = -8.0 if (j & 1) else 8.0
                sr4 += dos
                sg4 += dos
                sb4 += dos
            base4 = j * 4
            skypal[base4] = qcol(sr4, sg4, sb4, 0)
            skypal[base4 + 1] = qcol(sr4, sg4, sb4, 3)
            skypal[base4 + 2] = qcol(sr4, sg4, sb4, 1)
            skypal[base4 + 3] = qcol(sr4, sg4, sb4, 2)
            starpal[j] = qcol(r * 0.35 + 165.0, g * 0.35 + 162.0,
                              b * 0.35 + 150.0)
        # ---- sun / moon on screen, for the corona
        sdep = slx * fx + sly * fy + slz * fz
        si = sj = -999.0
        show = False
        if sdep > 0.05:
            su = (slx * rx + slz * rz) / sdep / (2.0 * tanH)
            sv = (slx * ux + sly * uy + slz * uz) / sdep / (2.0 * tanV)
            if -0.85 < su < 0.85 and -0.85 < sv < 0.85:
                si = (su + 0.5) * W
                sj = (0.5 - sv) * H
                show = True
        sr, sg, sb = self.light.sunrgb
        zr2, zg2, zb2 = self.light.hor
        if sly > 0.02:
            sunpal = (qcol(sr, sg, sb),
                      qcol(sr * 0.92 + 22.0, sg * 0.78, sb * 0.54),
                      qcol(sr * 0.55 + 64.0, sg * 0.44 + 54.0,
                           sb * 0.30 + 34.0),
                      qcol(sr * 0.20 + zr2 * 0.62 + 14.0,
                           sg * 0.18 + zg2 * 0.64 + 12.0,
                           sb * 0.14 + zb2 * 0.66 + 10.0))
        else:
            sunpal = (qcol(226, 232, 248), qcol(176, 186, 212),
                      qcol(120, 132, 164),
                      qcol(60 + zr2 * 0.5, 66 + zg2 * 0.5,
                           86 + zb2 * 0.5))
        # ---- the march, cell by cell
        for i in range(W):
            dbuf[i] = 1e9
        BAY = (0.0, 0.50, 0.12, 0.62, 0.75, 0.25, 0.87, 0.37,
               0.18, 0.68, 0.06, 0.56, 0.93, 0.43, 0.81, 0.31)
        j = 0
        while j < H:
            v = (0.5 - (j + 0.5) * inv2V) * 2.0 * tanV
            uvx = ux * v
            uvy = uy * v
            uvz = uz * v
            dy0 = fy + uvy
            rowoff = j * W
            jb = (j & 3) * 4
            skycol = j * 4
            nearsun = show and -22.0 < j - sj < 22.0
            for i in range(W):
                dx = axl[i] + uvx
                dz = azl[i] + uvz
                dy = dy0
                k = rowoff + i
                bay = BAY[jb + (i & 3)] * 0.14
                march = True
                if dy > 0.0:
                    ed = eh2l[i]
                    if ed < 0.0 or dy * dy > ed * (dx * dx + dz * dz):
                        march = False
                if march:
                    inv = 1.0 / math.sqrt(dx * dx + dy * dy + dz * dz)
                    ndx = dx * inv
                    ndy = dy * inv
                    ndz = dz * inv
                    t = 0.28
                    st = 0.22
                    tp = 0.0
                    hit = 0
                    ci = 0
                    while t < far:
                        ci = int(pxo + ndx * t) + int(pzo + ndz * t) * STR
                        if py + ndy * t < rh[ci]:
                            hit = 1
                            break
                        tp = t
                        t += st
                        st *= 1.33
                    if hit:
                        lo = tp
                        hi = t
                        for _ in range(4):
                            mid = (lo + hi) * 0.5
                            cj = int(pxo + ndx * mid) + \
                                int(pzo + ndz * mid) * STR
                            if py + ndy * mid < rh[cj]:
                                hi = mid
                            else:
                                lo = mid
                        t = (lo + hi) * 0.5
                        hy = py + ndy * t
                        ci = int(pxo + ndx * t) + int(pzo + ndz * t) * STR
                        hh = rh[ci]
                        top = (hh - hy) < 0.30
                        dl = hh - rh[ci - 1]
                        dr = hh - rh[ci + 1]
                        db = hh - rh[ci - STR]
                        df = hh - rh[ci + STR]
                        if top:
                            nx = 0.0
                            ny = 1.0
                            nz = 0.0
                            mx = 0
                        else:
                            mx = dl
                            nx = -1.0
                            nz = 0.0
                            ny = 0.3
                            if dr > mx:
                                mx = dr
                                nx = 1.0
                            if db > mx:
                                mx = db
                                nx = 0.0
                                nz = -1.0
                            if df > mx:
                                mx = df
                                nx = 0.0
                                nz = 1.0
                            if mx > 2:
                                ny = 0.10
                            elif mx > 1:
                                ny = 0.42
                            else:
                                ny = 0.85
                            nl = math.sqrt(nx * nx + ny * ny + nz * nz)
                            if nl < 1e-6:
                                nl = 1.0
                            nx /= nl
                            ny /= nl
                            nz /= nl
                        d = slx * nx + sly * ny + slz * nz
                        if d < 0.0:
                            d = 0.0
                        rel = int(hy) - rb[ci]
                        band = rel & 3 if rel >= 0 else 0
                        mc = mcolmap[(((rm[ci] * 8 + rf[ci]) * 4) + band) *
                                     2 + (1 if top else 0)]
                        # grain: a hash of the *cell*, not of the screen,
                        # so the desert floor has texture that stays put as
                        # you walk over it instead of crawling with the view
                        gr = ((ci * 2654435761) >> 11) & 3
                        lvl = int((amb + (1.0 - amb) * d) * 11.04 + bay +
                                  0.02)
                        if not top and rel == 0:
                            lvl -= 3
                        if lvl < 0:
                            lvl = 0
                        elif lvl > NSHADE - 1:
                            lvl = NSHADE - 1
                        fo = int(t * fogsc + bay * foggain)
                        if fo > NFOG - 1:
                            fo = NFOG - 1
                        pk = ble[mc * BLEND_STRIDE + lvl * NFOG + fo]
                        fb_bg[k] = pk & 4095
                        fb_ch[k] = (pk >> 12) & 255
                        # the hash of the cell decides which corner of the
                        # palette this cell lands in, so the grain belongs to
                        # the ground and does not crawl over the screen
                        pv = (phas[(j & 3) * 4 + (i & 3)] + gr) & 3
                        fb_fg[k] = (pk >> (20 + pv * 12)) & 4095
                        if t < dbuf[i]:
                            dbuf[i] = t
                        continue
                # ---------------- nothing in the way: this cell is sky
                p = skypal[skycol + phas[(j & 3) * 4 + (i & 3)]]
                ch = 32
                if dy > 0.115:
                    tc = (CLOUD_H - py) / dy
                    cx = (px + dx * tc) * CLOUD_S + wind
                    cz = (pz + dz * tc) * CLOUD_S - wind
                    af = math.floor(cx)
                    bf = math.floor(cz)
                    ai = int(af) & 127
                    aj = int(bf) & 127
                    fx2 = cx - af
                    fz2 = cz - bf
                    bi = (ai + 1) & 127
                    bj = (aj + 1) & 127
                    q0 = cloud[ai + aj * 128]
                    q1 = cloud[bi + aj * 128]
                    q2 = cloud[ai + bj * 128]
                    q3 = cloud[bi + bj * 128]
                    dens = (q0 + (q1 - q0) * fx2) * (1.0 - fz2) + \
                        (q2 + (q3 - q2) * fx2) * fz2
                    if dens > 116.0:
                        lv = int(dens * 0.05) - 5
                        if lv < 1:
                            lv = 1
                        elif lv > 7:
                            lv = 7
                        fo = (lv * NFOG) // 10
                        if fo > NFOG - 1:
                            fo = NFOG - 1
                        p = cpal[lv * NFOG + fo] or p
                        ch = 46 if lv < 3 else 32
                if nearsun:
                    # the disk and its corona, measured in cells rather
                    # than in degrees: 1.5 cells of sun, 4 of glare, and a
                    # long slow haze out to twenty
                    di = i - si
                    dj2 = (j - sj) * 1.9
                    r2 = di * di + dj2 * dj2
                    if r2 < 400.0:
                        if r2 < 3.0:
                            p = sunpal[0]
                            ch = 64
                        elif r2 < 10.0:
                            p = sunpal[1]
                            ch = 42 if sly > 0.02 else 111
                        elif r2 < 60.0:
                            p = sunpal[2]
                            if r2 > 26.0:
                                ch = 44
                        else:
                            p = sunpal[3]
                elif star > 0.05 and dy > 0.03:
                    inv = 1.0 / math.sqrt(dx * dx + dy * dy + dz * dz)
                    hs = hash2i(int(dx * inv * 260.0) & 4095,
                                int(dy * inv * 260.0) & 4095, 777) & 255
                    if hs < 2 and star > 0.35:
                        p = starpal[j]
                        ch = 46
                    elif hs < 11 and star > 0.7:
                        p = starpal[j]
                        ch = 44
                fb_bg[k] = p
                fb_fg[k] = p
                fb_ch[k] = ch
            j += 1
        for e in ents:
            if e is not None:
                self.sprite(e)
        self.emit()

    # --------------------------------------------------------------- sprites
    def sprite(self, e):
        """Billboards: the art is ASCII, the palette function turns one
        character into (code, fg, bg). The depth buffer the march left
        behind hides them behind terrain for free."""
        x, y, z, art, pal, scale = e
        pr = self.project(x, y, z)
        if pr is None:
            return
        ic, jc, dep = pr
        W = self.W
        H = self.H
        nr = len(art)
        nc = 1
        for row in art:
            if len(row) > nc:
                nc = len(row)
        kk = W / (2.0 * self.tanH * dep) * scale
        if kk * nc < 1.2:
            ci = int(ic)
            cj = int(jc)
            if 0 <= ci < W and 0 <= cj < H and dep <= self.dbuf[ci]:
                cc = pal("*", 0, 0)
                if cc is not None:
                    k = cj * W + ci
                    self.fb_ch[k] = cc[0]
                    self.fb_fg[k] = cc[1]
                    self.fb_bg[k] = cc[2]
            return
        wc = nc * kk
        hc = nr * kk
        i0 = ic - wc * 0.5
        j0 = jc - hc * 0.5
        dw = wc / float(nc)
        dh = hc / float(nr)
        dbuf = self.dbuf
        fb_ch = self.fb_ch
        fb_fg = self.fb_fg
        fb_bg = self.fb_bg
        for r in range(nr):
            lj = int(j0 + (r + 0.5) * dh)
            if lj < 0 or lj >= H:
                continue
            line = art[r]
            ln = len(line)
            rowoff = lj * W
            for c in range(nc):
                if c >= ln:
                    continue
                ch = line[c]
                if ch == " ":
                    continue
                ci = int(i0 + (c + 0.5) * dw)
                if ci < 0 or ci >= W or dep > dbuf[ci]:
                    continue
                cc = pal(ch, r, c)
                if cc is None:
                    continue
                k = rowoff + ci
                fb_ch[k] = cc[0]
                fb_fg[k] = cc[1]
                fb_bg[k] = cc[2]

    # ---------------------------------------------------------- text in the
    # ---------------------------------------------------------- framebuffer
    def putc(self, i, j, ch, fg, bg):
        if 0 <= i < self.W and 0 <= j < self.H:
            k = j * self.W + i
            self.fb_ch[k] = ch
            self.fb_fg[k] = fg
            self.fb_bg[k] = bg

    point = putc

    def blit(self, j, i0, s, fg, bg=None, x0=None, wide=1, keep=False):
        """Write a string into the framebuffer at cell (i0, j). Used for
        floating labels, panels, the map, the dead screen."""
        if j < 0 or j >= self.H:
            return
        W = self.W
        fb_ch = self.fb_ch
        fb_fg = self.fb_fg
        fb_bg = self.fb_bg
        rowoff = j * W
        i = i0
        for ch in s:
            if 0 <= i < W and ch != "\n":
                if keep and ch == " ":
                    i += wide
                    continue
                k = rowoff + i
                if bg is not None:
                    fb_bg[k] = bg
                if ch == " ":
                    if bg is None:
                        fb_ch[k] = 32
                else:
                    fb_ch[k] = ord(ch)
                    fb_fg[k] = fg
            i += wide
        return i

    def panel(self, j0, lines, fg, bg, border=None):
        """A block of text on a coloured panel, centred horizontally."""
        W = self.W
        if not lines:
            return
        widest = 0
        for ln in lines:
            if len(ln) > widest:
                widest = len(ln)
        pad = 2
        w = widest + pad * 2
        if border:
            w += 2
        i0 = (W - w) // 2
        if i0 < 0:
            i0 = 0
        n = len(lines)
        if border:
            self.blit(j0 - 1, i0, border[0] + "-" * (w - 2) + border[1],
                      fg, bg)
        for j in range(n):
            self.blit(j0 + j, i0, " " * w, fg, bg)
            if border:
                self.blit(j0 + j, i0, border[2], fg, bg)
                self.blit(j0 + j, i0 + w - 1, border[3], fg, bg)
            self.blit(j0 + j, i0 + pad, lines[j], fg, bg)
        if border:
            self.blit(j0 + n, i0, border[4] + "-" * (w - 2) + border[5],
                      fg, bg)

    # ------------------------------------------------------------- emission
    def emit(self):
        """Run length encode the frame: emit an escape sequence only where
        the colour changes, then write once. That is what stops a few
        thousand cells from turning the terminal into the bottleneck - and
        with the cursor parked at home and wrapping switched off it is
        flicker free."""
        W = self.W
        H = self.H
        cols = self.cols
        fb_ch = self.fb_ch
        fb_fg = self.fb_fg
        fb_bg = self.fb_bg
        chrs = CHRS
        cmap = self.light.cmap
        out = ["\x1b[H"]
        app = out.append
        cf = -1
        cb = -1
        for j in range(H):
            off = j * W
            for i in range(W):
                k = off + i
                fg = fb_fg[k]
                bg = fb_bg[k]
                if fg != cf or bg != cb:
                    cf = fg
                    cb = bg
                    vf = cmap[fg]
                    vb = cmap[bg]
                    if vf & TCF:
                        if vb & TCF:
                            app("\x1b[38;2;%d;%d;%d;48;2;%d;%d;%dm" % (
                                (vf >> 16) & 255, (vf >> 8) & 255, vf & 255,
                                (vb >> 16) & 255, (vb >> 8) & 255, vb & 255))
                        else:
                            app("\x1b[38;2;%d;%d;%d;48;5;%dm" % (
                                (vf >> 16) & 255, (vf >> 8) & 255, vf & 255,
                                vb))
                    elif vb & TCF:
                        app("\x1b[38;5;%d;48;2;%d;%d;%dm" % (
                            vf, (vb >> 16) & 255, (vb >> 8) & 255,
                            vb & 255))
                    else:
                        app("\x1b[38;5;%d;48;5;%dm" % (vf, vb))
                nc = ((i + 1) * cols) // W - (i * cols) // W
                c = chrs[fb_ch[k]]
                app(c if nc == 1 else c * nc)
            app("\x1b[0m")
            if j < H - 1:
                app("\r\n")
        if self.hudtext:
            app("\r\n")
            app(self.hudtext)
        app("\x1b[J\x1b[0m")
        self.text_ = "".join(out)
        if self.binary:
            self.out.write(self.text_.encode("ascii", "replace"))
        else:
            self.out.write(self.text_)
        self.out.flush()


# ============================================================================
# 8.  SPRITES
# ============================================================================
#  A sprite is lines of ASCII plus a function turning one character into
#  (code, foreground, background). The march leaves a per column depth
#  buffer, so sprites are hidden behind terrain for free.
# ============================================================================

ART_STAND = (
    "  ____  ",
    " /    \\ ",
    "========",
    " \\o  o/ ",
    "  '--'  ",
    "  /||\\  ",
    " / || \\ ",
    "  |=|=| ",
    "  | | | ",
    "  | | | ",
    " /| | |\\",
    "x'  |  'x",
    "   _/_\\_   ",
    "  '     '  ",
)
ART_AIM = (
    "  ____  ",
    " /    \\ ",
    "========",
    " \\o  o/ ",
    "  '--'  ",
    "  /||\\-----]",
    " / ||      ",
    "  |=|=|    ",
    "  | | |    ",
    "  | | |    ",
    " /| | |    ",
    "x'  |      ",
    "   _/_\\_   ",
    "  '     '  ",
)
ART_WALK = (
    "  ____  ",
    " /    \\ ",
    "========",
    " \\o  o/ ",
    "  '--'  ",
    "  /||\\  ",
    " / || \\ ",
    "  |=|=| ",
    "  | | | ",
    "   |/ \\ ",
    "  /|   \\",
    " x'    'x",
    "  _/ \\_  ",
    " '     ' ",
)
ART_DEAD = (
    "          ",
    "          ",
    "          ",
    "          ",
    "   _      ",
    "=='=]===  ",
    "  | | | | ",
    " x x x x x",
    "__________",
)
ART_CIV = (
    "  ____  ",
    " (    ) ",
    "  \\o o/ ",
    "   '--' ",
    "  /||\\  ",
    " / || \\ ",
    "  |==|  ",
    "  |  |  ",
    " /|  |\\ ",
    "x'    'x",
    " _/  \\_ ",
)
ART_LADY = (
    "  ____  ",
    " (    ) ",
    "  \\o o/ ",
    "   '--' ",
    "  /||\\  ",
    " / || \\ ",
    " |====| ",
    "/|====|\\",
    " |||| || ",
    " ||  || ",
    " '    ' ",
)
ART_HORSE = (
    "    ____        ",
    "   /o   \\_______",
    "  |     _______ \\",
    "  |    |       |  \\",
    "   \\   |  | |  |   |",
    "    |__|  | |  |__|",
)
ART_WEED = (
    " )(( ) ",
    "()(())(",
    ")(( )()/ ",
    " (())( ",
)
ART_BOTTLE = (" _ ", "(|)", "\\_/")
ART_FIRE = (" * ", "*#*", " # ")
GOLD_CH = "oO0"

REV_ART = (
    "        _______________",
    "   ____/______________]",
    "  /   _   _   _   ",
    " (__(_)_( )_( )_)-.__",
    "  |   |          `-.",
    "  |   |             \\",
    "   \\   \\             \\",
    "    '---'             '",
)


def fig_pal(cols, shade, bgshade=0.30, bgadd=8.0, qf=None):
    """{char: MCOLS index} -> {ord(char): (code, fg, bg)}, lit by `shade`."""
    if qf is None:
        qf = quant
    d = {}
    for ch, ci in cols.items():
        r, g, b = MCOLS[ci]
        fg = qf(r * shade, g * shade, b * shade)
        bg = qf(r * shade * bgshade + bgadd, g * shade * bgshade + bgadd,
                b * shade * bgshade + bgadd)
        d[ord(ch)] = (ord(ch), fg, bg)
    return d


def palfn(tab):
    def f(ch, r, c, t=tab):
        return t.get(ord(ch))
    return f


BANDIT_COLS = (
    {"=": 47, "o": 46, "|": 41, "/": 41, "\\": 41, "_": 47, "'": 17,
     "x": 17, "-": 47, "[": 31, "]": 31, "=": 47},
    {"=": 48, "o": 46, "|": 42, "/": 42, "\\": 42, "_": 48, "'": 17,
     "x": 17, "-": 48, "[": 31, "]": 31},
    {"=": 17, "o": 46, "|": 43, "/": 43, "\\": 43, "_": 17, "'": 17,
     "x": 45, "-": 17, "[": 31, "]": 31},
    {"=": 47, "o": 46, "|": 44, "/": 44, "\\": 44, "_": 47, "'": 17,
     "x": 17, "-": 47, "[": 31, "]": 31},
    {"=": 48, "o": 46, "|": 45, "/": 45, "\\": 45, "_": 48, "'": 17,
     "x": 17, "-": 48, "[": 31, "]": 31},
    {"=": 47, "o": 46, "|": 40, "/": 40, "\\": 40, "_": 47, "'": 17,
     "x": 17, "-": 47, "[": 31, "]": 31},
)
CIV_COLS = {"o": 46, "|": 43, "/": 43, "\\": 43, "_": 47, "'": 17, "(": 43,
            ")": 43, "=": 47, "-": 47, "x": 17, ".": 46}
LADY_COLS = {"o": 46, "|": 42, "/": 42, "\\": 42, "_": 47, "'": 17, "(": 42,
             ")": 42, "=": 42, "-": 47, "x": 17, ".": 46}
DEAD_COLS = {"x": 55, "=": 55, "[": 55, "]": 55, "_": 34, ".": 34,
             "'": 55, "|": 55, "(": 55, ")": 55}
WEED_COLS = {"(": 16, ")": 16, "/": 17}
BIRD_COLS = {"v": 17, "w": 17, "^": 17}
HORSE_COLS = {"o": 46, "|": 56, "/": 56, "\\": 56, "(": 56, ")": 56,
              "_": 56, "=": 56, "'": 56, "[": 56, "]": 56}
BOTTLE_COLS = {"_": 36, "(": 36, ")": 36, "|": 36, "\\": 36, "/": 36}
GOLD_COLS = {"o": 39, "O": 19, "0": 39}
FIRE_COLS = {"*": 38, "#": 37, "o": 37, " ": 0}
GUN_COLS = {"_": 33, "/": 34, "(": 34, ")": 34, "|": 33, "[": 34, "]": 34,
            "-": 33, "=": 34, ".": 32, "'": 18, "\\": 33, "o": 39, "O": 38}


# ============================================================================
# 9.  ENTITIES
# ============================================================================

class Bandit(object):
    __slots__ = ("x", "y", "z", "dir", "hp", "mode", "timer", "cool", "hurt",
                 "bob", "spd", "tx", "tz", "pal", "name", "dead", "spr")

    NAMES = ("CASSIDY KID", "BLACK JACK", "ONE EYE CURLEY", "RED HENRY",
             "DUTCH", "SILENT BOB", "TWO CARL", "THE MERCANTILE", "JESSE",
             "BILLY THE KID", "HOG-NOSE", "DEAD EYE DAVE", "SHILOH", "COLT")

    def __init__(self, x, z, world, rnd, i):
        self.x = x + 0.5
        self.z = z + 0.5
        self.y = float(world.h_at(x, z))
        self.dir = rnd.random() * TAU
        self.hp = 100.0
        self.mode = "roam"
        self.timer = rnd.random() * 3.0
        self.cool = 1.0 + rnd.random()
        self.hurt = 0.0
        self.bob = rnd.random() * 6.0
        self.spd = 2.0 + rnd.random() * 1.5
        self.tx = self.x
        self.tz = self.z
        self.pal = i % len(BANDIT_COLS)
        self.name = Bandit.NAMES[i % len(Bandit.NAMES)]
        self.dead = False
        self.spr = 0.0

    def alive(self):
        return self.hp > 0.0


class Tumble(object):
    __slots__ = ("x", "y", "z", "vy", "sp", "ph", "z0")

    def __init__(self, world, rnd, x=None):
        self.x = rnd.random() * MW if x is None else x
        self.z0 = self.z = rnd.random() * MH
        self.y = float(world.h_at(int(self.x), int(self.z)))
        self.vy = 0.0
        self.sp = 2.4 + rnd.random() * 3.0
        self.ph = rnd.random() * 6.0


class Bird(object):
    __slots__ = ("x", "y", "z", "a", "r", "sp", "base")

    def __init__(self, world, rnd):
        self.a = rnd.random() * TAU
        self.r = 16.0 + rnd.random() * 26.0
        self.base = float(world.hmax) + 2.0 + rnd.random() * 7.0
        self.x = MW * 0.5 + math.cos(self.a) * self.r
        self.z = MH * 0.5 + math.sin(self.a) * self.r
        self.y = self.base
        self.sp = 0.09 + rnd.random() * 0.07


class Coin(object):
    __slots__ = ("x", "y", "z", "v", "life", "spin", "worth")

    def __init__(self, x, y, z, v=0.0, life=1e9, worth=1):
        self.x = x
        self.y = y
        self.z = z
        self.v = v
        self.life = life
        self.spin = (x * 3.1 + z * 1.7) % TAU
        self.worth = worth


class Part(object):
    __slots__ = ("x", "y", "z", "vx", "vy", "vz", "life", "age", "ch", "col")

    def __init__(self, x, y, z, vx, vy, vz, life, ch, col):
        self.x = x
        self.y = y
        self.z = z
        self.vx = vx
        self.vy = vy
        self.vz = vz
        self.life = life
        self.age = 0.0
        self.ch = ch
        self.col = col


# ============================================================================
# 10.  KEYS
# ============================================================================

class Keys(object):
    """A terminal autorepeats a held key, which is not the same as knowing
    the key *is* held. So remember when each key last repeated and treat it
    as down for a third of a second afterwards: movement stays smooth at
    any frame rate, and no key ever gets stuck."""

    def __init__(self, con):
        self.con = con
        self.held = {}
        self.pressed = []
        self.shift = False

    def poll(self, now):
        bag = []
        self.con.keys(bag)
        self.pressed = []
        self.shift = False
        for k in bag:
            if len(k) == 1:
                if k.isupper():
                    self.shift = True
                    k = k.lower()
            if k in ("ctrl_c",):
                self.pressed.append("q")
                self.held["q"] = now
                continue
            self.held[k] = now
            self.pressed.append(k)
        for k in list(self.held):
            if now - self.held[k] > 4.0:
                del self.held[k]

    def down(self, k, now):
        t = self.held.get(k)
        return t is not None and now - t < 0.30

    def any(self, ks, now):
        for k in ks:
            if self.down(k, now):
                return True
        return False

    def hit(self, *ks):
        for k in ks:
            if k in self.pressed:
                return True
        return False


# ============================================================================
# 11.  THE GAME
# ============================================================================

class Game(object):
    def __init__(self, world, rend, con, opts):
        self.w = world
        self.r = rend
        # every colour the game paints by hand goes through the renderer's
        # colour map, so HUD, sprites and terrain cannot drift apart
        self.qf = rend.light.qflat
        self._lk = -1
        self.con = con
        self.opts = opts
        self.keys = Keys(con)
        self.state = "title"
        self.quit = False
        self.t = 0.0
        self.tod = opts.tod
        self.daylen = opts.daylen
        self.flash = 0.0
        self.recoil = 0.0
        self.mflash = 0.0
        self.bob = 0.0
        self.sway = 0.0
        self.viewy = 0.0
        self.wind = 0.0
        self.fps = 0.0
        self.ft = 0.0
        self.dirty = []
        self.msgs = []
        self.banner = ("", 0.0)
        self.mapon = False
        self.helpon = False
        self.pause = False
        self.gold = 0
        self.kills = 0
        self.shots = 0
        self.hp = 100.0
        self.ammo = 6
        self.reserve = 24
        self.reload = 0.0
        self.hitmark = 0.0
        self.on_ground = True
        self.total = opts.outlaws
        self.pals = {}
        self.frames = 0
        self.acc = 0.0
        self.seen = bytearray((MW >> 1) * (MH >> 1))
        self.aim = 0.0
        x, y, z, yaw = world.spawn
        self.px = x
        self.pz = z
        self.y = y
        self.vy = 0.0
        self.yaw = yaw
        self.pitch = -0.03
        self.viewy = y + 1.62
        self.eye = 1.62
        self.build_pals()
        self.spawn_all()

    # ------------------------------------------------------------ spawning
    def spawn_all(self):
        w = self.w
        rnd = w.rnd
        tx0, tz0, tx1, tz1 = w.town
        zs = w.main_z
        self.bandits = []
        self.coins = []
        for i in range(self.total):
            k = i % 3
            if k == 0:
                x = rnd.randint(tx0 + 8, tx1 - 8)
                z = zs + (rnd.randint(-13, -8) if i % 2 else
                          rnd.randint(8, 13))
            elif k == 1:
                x = rnd.randint(tx0, tx1)
                z = rnd.choice((tz0 + 3, tz1 - 3))
            elif w.campfire:
                cx, _, cz = w.campfire
                x = int(cx) + rnd.randint(-10, 10)
                z = int(cz) + rnd.randint(-10, 10)
            else:
                x = rnd.randint(12, MW - 12)
                z = rnd.randint(12, MH - 12)
            x = clamp(x, 6, MW - 7)
            z = clamp(z, 6, MH - 7)
            self.bandits.append(Bandit(x, z, w, rnd, i))
        self.civs = []
        for i in range(10):
            x = rnd.randint(tx0 + 4, tx1 - 4)
            z = rnd.choice((zs - 8, zs + 9, zs))
            c = Bandit(x, z, w, rnd, 200 + i)
            c.hp = 10000.0
            c.mode = "civ"
            c.spd = 1.7
            self.civs.append(c)
        self.tumbls = [Tumble(w, rnd) for _ in range(8)]
        self.birds = [Bird(w, rnd) for _ in range(6)]
        self.parts = []
        self.tracers = []
        for (x, y, z) in w.nuggets[:60]:
            self.coins.append(Coin(x, y + 0.1, z, 0.0, 1e9, 2))

    def build_pals(self):
        qf = self.qf
        amb = self.r.light.amb
        self.r.set_textures(amb < 0.42)
        sh = clamp(0.62 + 0.62 * amb, 0.36, 1.24)
        dim = sh * 0.52
        P = self.pals
        for i, cols in enumerate(BANDIT_COLS):
            P["b%d" % i] = palfn(fig_pal(cols, sh, qf=qf))
            P["bd%d" % i] = palfn(fig_pal(cols, dim, qf=qf))
        P["civ"] = palfn(fig_pal(CIV_COLS, sh, qf=qf))
        P["civd"] = palfn(fig_pal(CIV_COLS, dim, qf=qf))
        P["lady"] = palfn(fig_pal(LADY_COLS, sh, qf=qf))
        P["ladyd"] = palfn(fig_pal(LADY_COLS, dim, qf=qf))
        P["dead"] = palfn(fig_pal(DEAD_COLS, max(sh, 0.55), qf=qf))
        P["weed"] = palfn(fig_pal(WEED_COLS, sh * 0.95, qf=qf))
        P["bird"] = palfn(fig_pal(BIRD_COLS, max(sh, 0.5), qf=qf))
        P["horse"] = palfn(fig_pal(HORSE_COLS, sh, qf=qf))
        P["horsed"] = palfn(fig_pal(HORSE_COLS, dim, qf=qf))
        P["bottle"] = palfn(fig_pal(BOTTLE_COLS, sh, qf=qf))
        P["gold"] = palfn(fig_pal(GOLD_COLS, 1.3, qf=qf))
        P["fire"] = palfn(fig_pal(FIRE_COLS, 1.35, 0.5, 30.0, qf=qf))
        P["gun"] = palfn(fig_pal(GUN_COLS, 1.05, 0.22, 6.0, qf=qf))
        P["smoke"] = palfn(fig_pal({"o": 40, "*": 40, ".": 40, "#": 40},
                                   1.0, qf=qf))
        P["blood"] = palfn(fig_pal({"o": 55, "*": 55, ".": 55, "#": 55},
                                   1.0, qf=qf))
        P["dust"] = palfn(fig_pal({"o": 1, "*": 12, ".": 0, "#": 0,
                                   "'": 0, "x": 0}, 1.0, qf=qf))
        self._lk = self.r.light.key

    # ------------------------------------------------------------ messaging
    def say(self, text, dur=2.6):
        self.msgs.insert(0, (text, self.t + dur))
        del self.msgs[4:]

    def banner_now(self, text, dur=3.0):
        self.banner = (text, self.t + dur)

    # ----------------------------------------------------------- geometry
    def ground(self, x, z):
        return float(self.w.h_at(x, z))

    def blocked(self, x, z, y):
        w = self.w
        lim = y + 1.06
        for dz in (-0.30, 0.30):
            for dx in (-0.30, 0.30):
                if w.h_at(x + dx, z + dz) > lim:
                    return True
        return False

    def walk(self, e, ux, uz, sp, dt):
        nx = e.x + ux * sp * dt
        nz = e.z + uz * sp * dt
        w = self.w
        ok = (w.h_at(nx, e.z) - e.y <= 1.06 and
              w.h_at(e.x, nz) - e.y <= 1.06)
        if ok:
            e.x = nx
            e.z = nz
        else:
            e.dir += dt * 2.4
            e.tx = e.x + (w.rnd.random() - 0.5) * 14.0
            e.tz = e.z + (w.rnd.random() - 0.5) * 14.0
        e.y = float(w.h_at(int(e.x), int(e.z)))

    # --------------------------------------------------------------- update
    def step(self, dt, now):
        self.t += dt
        if self.state == "play":
            self.tod = (self.tod + dt / self.daylen) % 1.0
            self.move(dt, now)
            self.upd_bandits(dt)
            self.upd_civs(dt)
        else:
            self.tod = (self.tod + dt / max(30.0, self.daylen * 0.25)) % 1.0
        self.upd_props(dt)
        self.upd_parts(dt)
        self.pickups()
        self.flash *= math.exp(-dt * 5.0)
        self.recoil *= math.exp(-dt * 8.0)
        self.mflash *= math.exp(-dt * 26.0)
        self.hitmark *= math.exp(-dt * 9.0)
        self.wind += dt * 0.0028
        self.reload -= dt
        self.msgs = [m for m in self.msgs if m[1] > self.t]
        if self.banner[1] < self.t:
            self.banner = ("", 0.0)

    def move(self, dt, now):
        k = self.keys
        if self.hp <= 0.0:
            self.state = "dead"
            self.banner_now("YOU ARE DEAD", 12.0)
            return
        sp = 4.05
        turn = 1.75
        run = k.shift or k.any(("x",), now)
        if run:
            sp *= 1.95
            turn *= 1.22
        ax = az = 0.0
        if k.any(("w",), now):
            az += 1.0
        if k.any(("s",), now):
            az -= 1.0
        if k.any(("a",), now):
            ax -= 1.0
        if k.any(("d",), now):
            ax += 1.0
        if k.any(("left",), now):
            self.yaw -= turn * dt
        if k.any(("right",), now):
            self.yaw += turn * dt
        look = 0.95
        if k.any(("pgup",), now):
            self.pitch += look * dt
        if k.any(("pgdn",), now):
            self.pitch -= look * dt
        self.pitch = clamp(self.pitch, -1.20, 1.20)
        m = math.hypot(ax, az)
        if m > 0.0:
            ax /= m
            az /= m
            cy = math.cos(self.yaw)
            sy = math.sin(self.yaw)
            nx = self.px + (cy * az - sy * ax) * sp * dt
            nz = self.pz + (sy * az + cy * ax) * sp * dt
            if not self.blocked(nx, self.pz, self.y):
                self.px = clamp(nx, 2.0, MW - 3.0)
            if not self.blocked(self.px, nz, self.y):
                self.pz = clamp(nz, 2.0, MH - 3.0)
            self.bob += dt * (12.0 if run else 7.6)
            self.sway = math.sin(self.bob) * (0.036 if run else 0.022)
        else:
            self.sway *= 0.9
        g = self.ground(self.px, self.pz)
        if k.hit(" ") and self.on_ground:
            self.vy = 6.4
            self.on_ground = False
        self.vy -= 21.5 * dt
        self.y += self.vy * dt
        if self.y <= g:
            if not self.on_ground and self.vy < -11.0:
                self.hp -= min(38.0, -self.vy * 1.9)
                self.flash = max(self.flash, 0.4)
                self.puff(self.px, g + 0.2, self.pz, 10, 34)
                self.say("THAT WAS A LONG WAY DOWN", 1.8)
            self.y = g
            self.vy = 0.0
            self.on_ground = True
        else:
            self.on_ground = False
        if self.on_ground and g > self.y:
            self.y = g
        self.aim = 0.0 if m == 0.0 else min(1.0, self.aim + dt * 2.0)
        if m == 0.0:
            self.aim = max(0.0, self.aim - dt * 1.6)
        self.eye = 1.62 + math.sin(self.bob * 2.0) * 0.05
        self.viewy += (self.y + self.eye - self.viewy) * min(1.0, dt * 16.0)
        self.reveal()

    def reveal(self):
        si = int(self.px * 0.5)
        sj = int(self.pz * 0.5)
        hw = self.opts.reveal
        half = hw // 2
        stride = MW >> 1
        seen = self.seen
        for j in range(sj - half, sj + half + 1):
            if 0 <= j < MH >> 1:
                o = j * stride
                for i in range(si - half, si + half + 1):
                    if 0 <= i < stride:
                        seen[o + i] = 1

    # ------------------------------------------------------- shooting
    def try_reload(self):
        if self.reload > 0.0 or self.ammo >= 6 or self.reserve <= 0:
            return
        self.reload = 1.15
        self.say("BREAKING IT DOWN AND LOADING SIX", 1.2)

    def fire(self):
        if self.state != "play" or self.reload > 0.0:
            return
        if self.ammo <= 0:
            self.say("CLICK. HAMMER ON AN EMPTY CHAMBER", 1.4)
            self.try_reload()
            return
        self.ammo -= 1
        self.shots += 1
        self.recoil = 1.0
        self.mflash = 1.0
        if self.ammo == 0:
            self.try_reload()
        r = self.r
        rr = self.w.rnd
        dx = r.fx
        dy = r.fy
        dz = r.fz
        spr = 0.012 + self.aim * 0.022 + (0.0 if self.on_ground else 0.035)
        dx += (rr.random() - 0.5) * spr
        dy += (rr.random() - 0.5) * spr
        dz += (rr.random() - 0.5) * spr
        ln = math.sqrt(dx * dx + dy * dy + dz * dz)
        dx /= ln
        dy /= ln
        dz /= ln
        ox = self.px
        oy = self.viewy - 0.20
        oz = self.pz
        best = None
        bestt = 75.0
        for b in self.bandits:
            if not b.alive():
                continue
            ex = b.x - ox
            ey = b.y + 0.95 - oy
            ez = b.z - oz
            t = ex * dx + ey * dy + ez * dz
            if t < 0.6 or t > bestt:
                continue
            px2 = ex - dx * t
            pz2 = ez - dz * t
            py2 = ey - dy * t
            if px2 * px2 + pz2 * pz2 < 0.42 and -1.30 < py2 < 1.20:
                best = (b, t)
                bestt = t
        gt = r.ray(ox, oy, oz, dx, dy, dz, bestt)
        if gt < bestt - 0.05:
            best = None
            bestt = gt
            terrain = True
        else:
            terrain = False
        self.tracers.append((ox, oy, oz, bestt, dx, dy, dz, 0.10))
        self.puff(ox + dx * 1.4, oy + dy * 1.4, oz + dz * 1.4, 4, 37)
        if best is not None:
            b, t = best
            dmg = 96.0 / (1.0 + t * 0.030)
            if dy > 0.28:
                dmg *= 1.75
            b.hp -= dmg
            b.hurt = 0.3
            b.mode = "hunt"
            self.hitmark = 1.0
            self.puff(b.x, b.y + 1.15, b.z, 8, 55)
            for e2 in self.bandits:
                if e2 is not b and e2.alive():
                    if (e2.x - b.x) ** 2 + (e2.z - b.z) ** 2 < 1200.0:
                        e2.mode = "hunt"
            for c in self.civs:
                if (c.x - b.x) ** 2 + (c.z - b.z) ** 2 < 700.0:
                    c.spd = 5.4
                    c.hurt = 3.0
            if b.hp <= 0.0:
                b.dead = True
                self.kills += 1
                g = 16 + rr.randint(0, 30)
                self.gold += g
                self.say("%s IS DOWN  (+%d GOLD)" % (b.name, g), 3.4)
                for i in range(rr.randint(2, 4)):
                    self.coins.append(Coin(b.x + (i - 1) * 0.5, b.y + 0.7,
                                           b.z + 0.2, 3.4, 24.0, 2))
                self.puff(b.x, b.y + 0.7, b.z, 14, 55)
                if self.kills >= self.total:
                    self.banner_now("THE TOWN IS CLEAN", 14.0)
                    self.say("EVERY OUTLAW IS IN THE DUST. GO AND FIND "
                             "ANOTHER TOWN", 9.0)
        elif terrain:
            hx = ox + dx * bestt
            hy = oy + dy * bestt
            hz = oz + dz * bestt
            self.puff(hx, hy, hz, 9, 34)
            self.smash(hx, hy, hz)
        for c in self.civs:
            if (c.x - ox) ** 2 + (c.z - oz) ** 2 < 900.0:
                c.spd = 5.6
                c.hurt = 2.5

    def smash(self, x, y, z):
        """Cacti, barrels, bottles and headstones do not survive a slug.
        Destructibility here is not physics: it is minus two to a column."""
        xi = int(x + 0.0)
        zi = int(z + 0.0)
        if not (0 <= xi < MW and 0 <= zi < MH):
            return
        i = xi + zi * MW
        h = self.w.hmap[i]
        if h <= TOWN_H or y > h + 0.2 or y < h - 3.2:
            return
        m = self.w.mat[i]
        if m in (M_CACTUS, M_BARREL, M_HAY, M_GRAVE, M_SCRUB, M_LEAF,
                 M_BONE, M_SIGN, M_TRUNK):
            if h - 2 <= TOWN_H and m != M_CACTUS:
                return
            self.w.hmap[i] = max(1, h - 2)
            self.w.mat[i] = M_SAND
            self.w.flg[i] = 0
            self.dirty.append((xi, zi))
            self.puff(x, y, z, 12, 4 if m == M_CACTUS else 16)
            if m == M_CACTUS:
                self.say("SHOT A CACTUS. CACTUS WON LAST TIME TOO", 2.0)

    def puff(self, x, y, z, n, col):
        rr = self.w.rnd
        for _ in range(n):
            a = rr.random() * TAU
            s = 0.8 + rr.random() * 3.2
            self.parts.append(Part(x, y, z, math.cos(a) * s,
                                   1.0 + rr.random() * 3.4,
                                   math.sin(a) * s,
                                   0.3 + rr.random() * 0.5,
                                   rr.choice(("o", "*", ".", "#", "'")),
                                   col))

    # -------------------------------------------------------------- AI
    def upd_bandits(self, dt):
        r = self.r
        rr = self.w.rnd
        night = r.light.amb < 0.42
        for b in self.bandits:
            if b.hurt > 0.0:
                b.hurt -= dt
            if not b.alive():
                b.spr += dt
                continue
            dx = self.px - b.x
            dz = self.pz - b.z
            d2 = dx * dx + dz * dz
            dist = math.sqrt(d2)
            see = dist < (24.0 if night else 36.0) and \
                r.visible(b.x, b.y + 1.4, b.z)
            if b.mode == "hunt":
                if see or dist < 9.0:
                    b.timer -= dt
                    want = 7.5 + (b.pal % 3) * 2.0
                    if dist > want + 1.5:
                        mv = 1.0
                    elif dist < want - 2.5:
                        mv = -0.55
                    else:
                        mv = 0.35
                    ang = math.atan2(dz, dx) + (0.5 if b.pal & 1 else -0.5)
                    b.dir = ang
                    self.walk(b, math.cos(ang) * mv, math.sin(ang) * mv,
                              b.spd * 1.5, dt)
                    b.bob += dt * 9.5
                    if dist < 27.0:
                        b.cool -= dt
                        if b.cool <= 0.0 and see:
                            b.cool = 0.8 + rr.random() * 1.6
                            self.bandit_shoots(b, dist)
                    continue
                b.mode = "roam"
                b.timer = 2.0 + rr.random() * 4.0
            b.timer -= dt
            if b.timer <= 0.0:
                b.timer = 4.0 + rr.random() * 7.0
                tx0, tz0, tx1, tz1 = self.w.town
                if rr.random() < 0.72:
                    b.tx = rr.randint(tx0, tx1) + 0.5
                    b.tz = rr.randint(tz0 + 2, tz1 - 2) + 0.5
                else:
                    b.tx = clamp(b.x + (rr.random() - 0.5) * 34.0, 8, MW - 9)
                    b.tz = clamp(b.z + (rr.random() - 0.5) * 34.0, 8,
                                 MH - 9)
            ddx = b.tx - b.x
            ddz = b.tz - b.z
            dd = math.hypot(ddx, ddz)
            if dd > 0.7:
                b.dir = math.atan2(ddz, ddx)
                self.walk(b, ddx / dd, ddz / dd, b.spd, dt)
                b.bob += dt * 6.4
            if see and dist < 22.0 and self.hp > 0.0:
                b.mode = "hunt"
                b.timer = 4.0
                if rr.random() < 0.30:
                    self.say("SOMEONE IS WATCHING FROM "
                             "THE OTHER SIDE OF THE STREET", 1.6)

    def bandit_shoots(self, b, dist):
        p = 0.60 - min(0.40, dist * 0.020) - (0.0 if self.on_ground else 0.1)
        r = self.w.rnd.random()
        self.tracers.append((b.x, b.y + 1.25, b.z,
                            dist, (self.px - b.x) / max(dist, 1e-4),
                            (self.viewy - 0.2 - b.y - 1.25) /
                            max(dist, 1e-4),
                            (self.pz - b.z) / max(dist, 1e-4), 0.12))
        self.puff(b.x + (self.px - b.x) * 0.1, b.y + 1.3,
                  b.z + (self.pz - b.z) * 0.1, 3, 37)
        if r < p:
            dmg = 5.0 + self.w.rnd.random() * 14.0
            self.hp -= dmg
            self.flash = max(self.flash, 0.55)
            self.say("%s HIT YOU FOR %d" % (b.name, int(dmg)), 1.4)
            self.puff(self.px, self.viewy - 0.3, self.pz, 5, 55)
        elif r < p + 0.22:
            self.flash = max(self.flash, 0.2)
            self.say("THE BULLET KICKED DIRT BY YOUR EAR", 1.1)

    def upd_civs(self, dt):
        rr = self.w.rnd
        tx0, tx1 = self.w.town[0], self.w.town[2]
        zs = self.w.main_z
        for c in self.civs:
            if c.hurt > 0.0:
                c.hurt -= dt
                if c.hurt <= 0.0:
                    c.spd = 1.7
            c.timer -= dt
            if c.timer <= 0.0:
                c.timer = 5.0 + rr.random() * 9.0
                c.tx = clamp(c.x + (rr.random() - 0.5) * 26.0,
                             tx0 + 2, tx1 - 2)
                c.tz = clamp(c.z + (rr.random() - 0.5) * 12.0,
                             zs - 13, zs + 13)
            ddx = c.tx - c.x
            ddz = c.tz - c.z
            dd = math.hypot(ddx, ddz)
            if dd > 0.6:
                c.dir = math.atan2(ddz, ddx)
                self.walk(c, ddx / dd, ddz / dd, c.spd, dt)
                c.bob += dt * (14.0 if c.spd > 4 else 6.0)

    def upd_props(self, dt):
        w = self.w
        for tu in self.tumbls:
            tu.ph += dt * tu.sp * 2.0
            tu.x += tu.sp * dt
            tu.z = clamp(tu.z + math.sin(tu.ph * 0.31) * dt * 1.8, 2,
                         MH - 3)
            if tu.x > MW - 5:
                tu.x = 3.0
                tu.z = w.rnd.random() * MH
            g = self.ground(tu.x, tu.z)
            tu.vy -= 17.0 * dt
            tu.y += tu.vy * dt
            if tu.y < g:
                tu.y = g
                tu.vy = 0.7 + abs(math.sin(tu.ph)) * 1.4
        for bi in self.birds:
            bi.a += bi.sp * dt
            bi.x = self.px + math.cos(bi.a) * bi.r
            bi.z = self.pz + math.sin(bi.a) * bi.r
            bi.y = self.ground(bi.x, bi.z) + bi.base + \
                math.sin(bi.a * 3.0) * 1.6
        i = len(self.tracers) - 1
        while i >= 0:
            tr = self.tracers[i]
            tr = tr[:7] + (tr[7] - dt,)
            if tr[7] <= 0.0:
                self.tracers.pop(i)
            else:
                self.tracers[i] = tr
            i -= 1

    def upd_parts(self, dt):
        p = self.parts
        i = len(p) - 1
        while i >= 0:
            q = p[i]
            q.age += dt
            if q.age > q.life:
                p.pop(i)
                i -= 1
                continue
            q.vy -= 12.0 * dt
            q.x += q.vx * dt
            q.y += q.vy * dt
            q.z += q.vz * dt
            q.vx *= 0.95
            q.vz *= 0.95
            i -= 1

    def pickups(self):
        keep = []
        for c in self.coins:
            c.spin += 0.10
            if c.v != 0.0:
                c.y += c.v * 0.016
                c.v -= 0.24
                g = self.ground(c.x, c.z) + 0.1
                if c.y < g:
                    c.y = g
                    c.v = 0.0
            if self.state == "play" and \
                    (c.x - self.px) ** 2 + (c.z - self.pz) ** 2 < 1.9 and \
                    abs(c.y - self.y) < 2.4:
                self.gold += c.worth
                self.say("+%d GOLD" % c.worth, 1.0)
                continue
            if c.life < 1e8:
                c.life -= 1.0
                if c.life <= 0.0:
                    continue
            keep.append(c)
        self.coins = keep

    # --------------------------------------------------------------- use
    def use(self):
        w = self.w
        if w.well_at and (w.well_at[0] - self.px) ** 2 + \
                (w.well_at[2] - self.pz) ** 2 < 12.0:
            self.hp = min(100.0, self.hp + 24.0)
            self.say("DRANK FROM THE TROUGH. STILL ALIVE", 2.0)
            return
        if w.campfire and (w.campfire[0] - self.px) ** 2 + \
                (w.campfire[2] - self.pz) ** 2 < 12.0:
            self.hp = min(100.0, self.hp + 40.0)
            self.reserve = min(72, self.reserve + 6)
            self.say("COFFEE, BACON AND A FULL BOX OF CARTRIDGES", 2.4)
            return
        for nm, (x, z) in w.landmarks:
            if (x - self.px) ** 2 + (z - self.pz) ** 2 < 42.0:
                if nm in ("SALOON", "HOTEL"):
                    self.hp = min(100.0, self.hp + 14.0)
                    self.say("WHISKEY. IT TASTES LIKE THE WAR", 2.0)
                elif nm == "CHURCH":
                    self.say("THE Pews ARE EMPTY AND THE ROOF IS GONE", 2.0)
                elif nm == "BOOT HILL":
                    self.say("THERE IS A PLOT WITH YOUR NAME CHISELED IN",
                             2.4)
                elif nm == "MINE":
                    self.say("DARK, DRY AND 900 FEET OF TIMBER OVERHEAD", 2.2)
                else:
                    self.say("NOTHING HERE BUT " + nm, 1.6)
                return
        self.say("NOTHING TO USE HERE", 1.1)

    # --------------------------------------------------------------- sprites
    def build_sprites(self):
        ents = []
        r = self.r
        dim = r.light.amb < 0.75
        P = self.pals
        for b in self.bandits:
            if not b.alive():
                if b.spr < 40.0:
                    ents.append((b.x, b.y + 0.35, b.z, ART_DEAD,
                                 P["dead"], 0.10))
                continue
            st = int(b.bob) & 1
            art = ART_AIM if b.mode == "hunt" and st else \
                (ART_WALK if st else ART_STAND)
            key = "b%d" % b.pal
            ents.append((b.x, b.y + 1.34, b.z, art,
                         P["bd%d" % b.pal] if dim else P[key], 0.095))
        for c in self.civs:
            art = ART_LADY if (int(c.x) + int(c.z)) % 3 == 0 else ART_CIV
            key = "ladyd" if (int(c.x) + int(c.z)) % 3 == 0 else "civd"
            if not dim:
                key = key[:-1]
            ents.append((c.x, c.y + 1.20, c.z, art, P[key], 0.098))
        for tu in self.tumbls:
            if (tu.x - self.px) ** 2 + (tu.z - self.pz) ** 2 < 4000.0:
                ents.append((tu.x, tu.y + 0.42, tu.z, ART_WEED, P["weed"],
                             0.10))
        for bi in self.birds:
            if (bi.x - self.px) ** 2 + (bi.z - self.pz) ** 2 < 16000.0:
                ents.append((bi.x, bi.y, bi.z,
                             (("v",) if int(bi.a * 4) & 1 else ("w",)),
                             P["bird"], 0.34))
        for c in self.coins:
            ents.append((c.x, c.y + 0.12, c.z,
                         (GOLD_CH[int(c.spin * 2.0) % 3],), P["gold"], 0.10))
        if self.w.campfire:
            x, y, z = self.w.campfire
            ents.append((x, y + 0.4, z, ART_FIRE, P["fire"], 0.15))
        li = self.w.special.get("livery")
        if li:
            for i in range(3):
                x = li[0] - 2 + i * 1.7
                z = li[1] - 2.0
                ents.append((x, self.ground(x, z) + 1.05, z, ART_HORSE,
                             P["horsed"] if dim else P["horse"], 0.16))
        return ents

    # ----------------------------------------------------------- sound, and
    # the frames drawn on top of the world: overlays, panels, the HUD strip.

    def sound(self, name):
        s = self.sfx
        if s is not None:
            try:
                getattr(s, name)()
            except Exception:
                pass

    # --------------------------------------------------------------- draw
    def draw(self, now):
        r = self.r
        if r.light.key != self._lk:
            # the sun moved a notch: the people and the gun are painted from
            # a palette of their own, so that has to be remade as well
            self._lk = r.light.key
            self.build_pals()
        if self.state != "title":
            r.set_cam(self.px, self.viewy, self.pz, self.yaw, self.pitch)
        else:
            self.title_cam()
        r.refresh_cells(self.dirty)
        r.render(self.sun_dir(), self.build_sprites(), self.flash,
                 self.wind, self.tod)
        self.overlay()
        r.hudtext = self.hud_text()
        r.emit()

    def sun_dir(self):
        """The sun rises in the east (+x), crosses the overhead at noon and
        sets in the west. After it drops we light the scene with the moon -
        the anti-sun - at a fraction of the strength, so the mesas keep
        their shape at night instead of going flat black."""
        a = (self.tod - 0.25) * TAU
        sx = math.cos(a)
        sy = math.sin(a)
        sz = 0.30
        if sy < 0.0:
            sy = -sy * 0.45 + 0.06
            sx = -sx
            sz = -sz
        ln = math.sqrt(sx * sx + sy * sy + sz * sz)
        return (sx / ln, sy / ln, sz / ln)

    def title_cam(self):
        r = self.r
        tx0, tz0, tx1, tz1 = self.w.town
        zs = self.w.main_z
        cx = (tx0 + tx1) * 0.5
        a = self.t * 0.055
        rad = 52.0 + math.sin(a * 0.7) * 14.0
        x = cx + math.cos(a) * rad
        z = zs + math.sin(a) * rad
        x = clamp(x, 4.0, MW - 5.0)
        z = clamp(z, 4.0, MH - 5.0)
        y = self.ground(x, z) + 17.0 + math.sin(a * 1.3) * 3.0
        r.set_cam(x, y, z, math.atan2(zs - z, cx - x), -0.30)

    # ------------------------------------------------------------- overlays
    def overlay(self):
        r = self.r
        if self.state == "play":
            self.draw_gun()
            self.draw_tracers()
            self.draw_particles()
            self.draw_labels()
            self.draw_cross()
        if self.mapon:
            self.map_overlay()
        if self.banner[0]:
            self.draw_banner()
        if self.state == "title":
            self.title_panel()
        elif self.hp <= 0.0:
            self.death_panel()
        if self.helpon:
            self.help_panel()
        if self.pause and self.state == "play":
            self.center_text("P A U S E D", self.r.H // 2)

    def dark(self, a=0.72):
        """Paint the whole viewport over: the panel background."""
        r = self.r
        p = self.qf(16 * (1 - a) + 4, 14 * (1 - a) + 4, 16 * (1 - a) + 5)
        n = r.W * r.H
        if r.tc:
            # with 24 bit colour a cell is an index into a map of thousands,
            # so the buffers are lists and cannot be filled with bytes
            r.fb_fg[:] = [p] * n
            r.fb_bg[:] = [p] * n
            r.fb_ch[:] = [32] * n
        else:
            row = bytes((p,)) * n
            r.fb_fg[:] = row
            r.fb_bg[:] = row
            r.fb_ch[:] = b" " * n

    def center_text(self, s, j, fg=None, bg=None):
        r = self.r
        if fg is None:
            fg = self.qf(236, 214, 168)
        i0 = (r.W - len(s)) // 2
        if bg is not None:
            r.blit(j, i0 - 1, " " * (len(s) + 2), fg, bg)
        r.blit(j, i0, s, fg, bg)

    def draw_banner(self):
        r = self.r
        txt = self.banner[0]
        if not txt:
            return
        left = (self.banner[1] - self.t)
        a = clamp(left * 1.4, 0.0, 1.0) * clamp((3.0 - left) * 1.6, 0.0, 1.0)
        if a <= 0.02:
            return
        fg = self.qf(255, 226, 150)
        bg = self.qf(30 * a + 4, 20 * a + 3, 12 * a + 4)
        j = r.H // 3
        for n, seg in enumerate(self.wrap(txt, r.W - 4)):
            self.dark_line(j + n, r.W)
            r.blit(j + n, (r.W - len(seg)) // 2, seg, fg, bg)

    def dark_line(self, j, w):
        r = self.r
        p = self.qf(22, 16, 12)
        for i in range(w):
            k = j * r.W + i
            r.fb_bg[k] = p
            r.fb_fg[k] = p
            r.fb_ch[k] = 32

    @staticmethod
    def wrap(txt, w):
        out = []
        line = ""
        for word in txt.split():
            if len(line) + len(word) + 1 > w:
                if line:
                    out.append(line)
                line = word
            else:
                line = (line + " " + word).strip()
        if line:
            out.append(line)
        return out or [txt[:w]]

    def draw_cross(self):
        r = self.r
        cx = int(r.W * 0.5 + self.sway * 30.0)
        cy = int(r.H * 0.5 + self.pitch * 4.0)
        hit = self.hitmark > 0.35
        fg = self.qf(255, 80, 50) if hit else self.qf(232, 224, 196)
        r.putc(cx - 2, cy, 45, fg, 0)
        r.putc(cx + 2, cy, 45, fg, 0)
        r.putc(cx, cy - 1, 124, fg, 0)
        r.putc(cx, cy + 1, 96, fg, 0)
        r.putc(cx, cy, 43 if not hit else 64, fg, 0)

    def draw_gun(self):
        r = self.r
        # the gun is drawn over the world with the world's own colours
        # pushed down behind it: a silhouette you can read, not a black
        # rectangle pasted on the scene
        cmap = r.light.cmap
        shade = getattr(self, "_gunshade", None)
        if shade is None or shade[1] != r.light.key:
            table = [0] * len(cmap)
            for n, v in enumerate(cmap):
                if v is None:
                    table[n] = 0
                elif v & TCF:
                    table[n] = self.qf(((v >> 16) & 255) * 0.42 + 3.0,
                                       ((v >> 8) & 255) * 0.42 + 3.0,
                                       (v & 255) * 0.42 + 4.0)
                else:
                    rr, gg, bb = pal_rgb(v)
                    table[n] = quant(rr * 0.36 + 4.0, gg * 0.36 + 4.0,
                                     bb * 0.36 + 5.0)
            shade = (table, r.light.key)
            self._gunshade = shade
        shade = shade[0]
        kick = int(self.recoil * 3.0)
        bob = int(math.sin(self.bob) * 1.2)
        i0 = r.W - len(REV_ART[0]) - 3 - bob
        j0 = r.H - len(REV_ART) - 1 + kick
        pal = self.pals["gun"]
        for n, ln in enumerate(REV_ART):
            j = j0 + n
            if j < 0 or j >= r.H:
                continue
            off = j * r.W
            for c, ch in enumerate(ln):
                if ch == " ":
                    continue
                i = i0 + c
                if 0 <= i < r.W:
                    k = off + i
                    cc = pal(ch, n, c)
                    if cc is None:
                        continue
                    r.fb_ch[k] = cc[0]
                    r.fb_fg[k] = cc[1]
                    r.fb_bg[k] = shade[r.fb_bg[k]]
        if self.mflash > 0.12:
            n = int(self.mflash * 5)
            fx = i0 + len(REV_ART[1]) - 1
            fy = j0 + 1
            for a in range(10):
                th = a / 10.0 * TAU
                rr2 = 1 + (a & 1) * n
                r.putc(fx + int(math.cos(th) * rr2 * 1.6),
                       fy + int(math.sin(th) * rr2 * 0.7),
                       ord("*") if a & 1 else ord("o"),
                       self.qf(255, 240 - a * 8, 150), 0)

    def draw_tracers(self):
        r = self.r
        for tr in self.tracers:
            ox, oy, oz, ln, dx, dy, dz, life = tr
            n = 16
            for i in range(1, n + 1):
                t = ln * i / float(n)
                pr = r.project(ox + dx * t, oy + dy * t, oz + dz * t)
                if pr is None:
                    break
                ic, jc, dep = pr
                ci = int(ic)
                cj = int(jc)
                if not (0 <= ci < r.W and 0 <= cj < r.H):
                    continue
                if dep > r.dbuf[ci]:
                    continue
                a = clamp(life / 0.12, 0.0, 1.0)
                q = self.qf(255, 210 * a + 40, 120 * a + 30)
                r.putc(ci, cj, 45, q, q)

    def draw_particles(self):
        r = self.r
        for p in self.parts:
            pr = r.project(p.x, p.y, p.z)
            if pr is None:
                continue
            ic, jc, dep = pr
            ci = int(ic)
            cj = int(jc)
            if not (0 <= ci < r.W and 0 <= cj < r.H):
                continue
            if dep > r.dbuf[ci]:
                continue
            f = 1.0 - p.age / p.life
            c = MCOLS[p.col]
            q = self.qf(c[0] * f + 6, c[1] * f * 0.95, c[2] * f * 0.85)
            r.putc(ci, cj, ord(p.ch), q, q)

    def draw_labels(self):
        """Landmark names hang over the town and disappear behind the
        building in front of them, because the march left a depth buffer."""
        r = self.r
        if not self.opts.labels:
            return
        scale = r.cols / float(r.W)
        fg = self.qf(228, 200, 148)
        bg = self.qf(24, 18, 16)
        for nm, (x, z) in self.w.landmarks:
            d2 = (x - self.px) ** 2 + (z - self.pz) ** 2
            if d2 > 3200.0:
                continue
            y = float(self.w.h_at(int(x), int(z))) + 3.4
            pr = r.project(x, y, z)
            if pr is None:
                continue
            ic, jc, dep = pr
            cj = int(jc)
            if not (0 <= cj < r.H):
                continue
            txt = "\\ " + nm + " /"
            ci = int(ic - len(txt) * scale * 0.5)
            if ci > r.W or ci + len(txt) * scale < 0:
                continue
            col = int(ic)
            if col < 0:
                col = 0
            if col >= r.W or dep > r.dbuf[col]:
                continue
            for n, ch in enumerate(txt):
                r.blit(cj, ci + int(n * scale), ch, fg, bg)
        for b in self.bandits:
            if not b.alive() or b.hp >= 100.0:
                continue
            d2 = (b.x - self.px) ** 2 + (b.z - self.pz) ** 2
            if d2 > 700.0:
                continue
            pr = r.project(b.x, b.y + 2.2, b.z)
            if pr is None:
                continue
            ic, jc, dep = pr
            ci = int(ic)
            cj = int(jc)
            if 0 <= ci < r.W and 0 <= cj < r.H and dep <= r.dbuf[ci]:
                bar = int(6.0 - b.hp / 18.0)
                r.blit(cj, ci - 3, "[" + "#" * max(0, 6 - bar) +
                       "." * max(0, bar) + "]", self.qf(220, 60, 40), 0)

    # --------------------------------------------------------------- panels
    def title_panel(self):
        r = self.r
        self.dark(0.60)
        lines = [
            "",
            "  D U S T   G U L C H        A . D  1 8 5 0",
            "",
            "  A town of " + str(MW * MH) + " columns of ground, made",
            "  from noise: terraced mesas, a sine-curve arroyo, and",
            "  one seeded random number generator per boardwalk.",
            "",
            "  Rendered as ASCII with a ray per character cell,",
            "  lit by a sun that moves, faded by dust in the air.",
            "",
            "     ENTER       ride in",
            "     W A S D      walk and strafe      X  sprint",
            "     F or ENTER  draw and shoot        R  reload",
            "     SPACE       jump                   E  use / drink",
            "     LEFT RIGHT  turn    UP DOWN  look  M  the map",
            "     [ ]         how far you can see   1 2 3 detail",
            "     H           this list again       Q  ride out",
            "",
            "     seed " + str(self.w.seed) + "     outlaws " +
            str(self.total) + "     day length " + str(int(self.daylen)) +
            "s",
        ]
        self.panel_lines(lines, self.qf(226, 208, 168), 0.30)

    def help_panel(self):
        r = self.r
        self.dark(0.72)
        lines = [
            "",
            "  DUST GULCH - KEYS",
            "",
            "  W S         forward / back        A D   strafe",
            "  X or SHIFT  run on the dry ground",
            "  SPACE       jump a fence, a trough, a corpse",
            "  F           fire. Head shots count double.",
            "  R           reload. Six in the cylinder.",
            "  E           use: trough water, campfire, saloon",
            "  M           the map you have walked in",
            "  P           pause     H  these keys     Q  quit",
            "  [ and ]     how far you can see through the dust",
            "  1 2 3       render detail: chunky / even / sharp",
            "",
            "  " + str(int(self.fps)) + " fps at " + str(r.W) + "x" +
            str(r.H) + " cells. Lower detail if that is not kind",
            "  to your machine: the marching is all pure Python.",
            "",
        ]
        self.panel_lines(lines, self.qf(220, 206, 176), 0.40)

    def death_panel(self):
        self.dark(0.78)
        lines = [
            "",
            "  Y O U   A I N ' T   B R E A T H I N '",
            "",
            "  gold off the dead : " + str(self.gold),
            "  outlaws in the ground: %d of %d" % (self.kills, self.total),
            "  shots fired : " + str(self.shots),
            "",
            "  ENTER  a new territory (new seed)",
            "  R      the same town, one more try",
            "  Q      leave the territory",
            "",
        ]
        self.panel_lines(lines, self.qf(226, 90, 70), 0.55)

    def win_note(self):
        if self.kills >= self.total and self.state == "play":
            return True
        return False

    def panel_lines(self, lines, fg, bgshade):
        r = self.r
        W = r.W
        widest = 0
        for ln in lines:
            if len(ln) > widest:
                widest = len(ln)
        w = min(widest, W - 1)
        i0 = (W - w) // 2
        j0 = max(1, (r.H - len(lines)) // 2 - 1)
        bg = self.qf(20 + bgshade * 12, 15 + bgshade * 10, 12 + bgshade * 12)
        for n, ln in enumerate(lines):
            j = j0 + n
            if 0 <= j < r.H:
                r.blit(j, i0, (" " + ln[:w] + " ").ljust(w + 2), fg, bg)

    # ---------------------------------------------------------------- map
    def map_overlay(self):
        r = self.r
        self.dark(0.86)
        W = r.W
        H = r.H
        sw = min(W - 4, 132)
        sh = min(H - 6, 40)
        cx = int(self.px)
        cz = int(self.pz)
        x0 = cx - sw // 2
        z0 = cz - (sh * 2) // 2
        i0 = (W - sw) // 2
        j0 = (H - sh) // 2 - 1
        w = self.w
        hmap = w.hmap
        mat = w.mat
        seen = self.seen
        stride = MW >> 1
        fb_ch = r.fb_ch
        fb_fg = r.fb_fg
        fb_bg = r.fb_bg
        MAPC = {
            M_ROAD: ("-", 3), M_SAND: (".", 1), M_MESA: ("A", 8),
            M_MESATOP: ("A", 8), M_ROCK: ("^", 6), M_CACTUS: ("Y", 29),
            M_WOOD: ("#", 15), M_WOODD: ("#", 17), M_BRICK: ("#", 20),
            M_STONE: ("#", 22), M_ROOF: ("%", 24), M_METAL: ("%", 31),
            M_SIGN: ("0", 19), M_GRAVE: ("t", 33), M_HAY: ('"', 35),
            M_WATER: ("~", 36), M_FIRE: ("*", 37), M_CLOTH: ("O", 40),
            M_LEAF: ("*", 49), M_TRUNK: ("|", 17), M_BARREL: ("o", 16),
            M_POST: ("+", 17), M_BONE: ("y", 34), M_SCRUB: (",", 4),
            M_SALT: ("=", 12), M_MUD: ("-", 13), M_CLAY: (":", 11),
            M_GOLD: ("$", 39),
        }
        base = self.qf(12, 11, 13)
        dimq = self.qf(58, 52, 46)
        amb = max(0.42, r.light.amb)
        for j in range(sh):
            wz = z0 + j * 2
            if not (0 <= wz < MH):
                continue
            row = wz * MW
            tj = j0 + j
            if not (0 <= tj < H):
                continue
            coff = tj * W
            for i in range(sw):
                wx = x0 + i
                if not (0 <= wx < MW):
                    continue
                si = (wx >> 1) + (wz >> 1) * stride
                k = coff + i0 + i
                if not seen[si]:
                    fb_ch[k] = 32
                    fb_bg[k] = base
                    fb_fg[k] = base
                    continue
                m = mat[row + wx]
                ch, ci = MAPC.get(m, (".", 1))
                hh = hmap[row + wx]
                f = clamp(0.5 + (hh - TOWN_H) * 0.030, 0.35, 1.25) * amb
                c = MCOLS[ci]
                fg = self.qf(c[0] * f, c[1] * f, c[2] * f)
                if m in (M_ROAD, M_SAND, M_MUD, M_SALT):
                    fg = dimq
                fb_ch[k] = ord(ch)
                fb_fg[k] = fg
                fb_bg[k] = base
        # player
        pj = j0 + clamp((cz - z0) // 2, 0, sh - 1)
        pi = i0 + clamp(cx - x0, 0, sw - 1)
        car = ("^", ">", "v", "<")[int(((self.yaw / TAU) % 1.0) * 4 + 0.5) & 3]
        r.blit(pj, pi, "@", self.qf(255, 240, 190), self.qf(90, 40, 20))
        r.blit(pj, pi + 1, car, self.qf(255, 210, 120), base)
        for b in self.bandits:
            if not b.alive():
                continue
            d2 = (b.x - self.px) ** 2 + (b.z - self.pz) ** 2
            if d2 > 2600.0:
                continue
            mj = j0 + clamp((int(b.z) - z0) // 2, 0, sh - 1)
            mi = i0 + clamp(int(b.x) - x0, 0, sw - 1)
            r.blit(mj, mi, "X", self.qf(255, 70, 50), base)
        for c in self.coins:
            mj = j0 + clamp((int(c.z) - z0) // 2, 0, sh - 1)
            mi = i0 + clamp(int(c.x) - x0, 0, sw - 1)
            r.blit(mj, mi, "$", self.qf(252, 208, 66), base)
        ttl = " THE COUNTRY YOU HAVE WALKED - " + str(self.w.seed) + \
              "  (M to put it away)"
        self.center_text(ttl[:W - 2], max(0, j0 - 2), self.qf(210, 190, 140),
                         base)
        keys = ("MAIN ST", "CHURCH", "BOOT HILL", "WELL", "SALOON", "MINE",
                "CORRAL", "LIVERY", "WATER TOWER", "OUTLAW CAMP")
        kn = 0
        for nm, (x, z) in self.w.landmarks:
            if not any(k in nm for k in keys):
                continue
            mj = j0 + clamp((int(z) - z0) // 2, 0, sh - 1)
            mi = i0 + clamp(int(x) - x0, 0, sw - 1)
            if 0 <= mi < W and 0 <= mj < H:
                r.blit(mj, mi, "+", self.qf(180, 170, 120), base)
            kn += 1

    # ------------------------------------------------------------- HUD text
    def hud_text(self):
        r = self.r
        cols = r.cols
        # compass
        bearing = (math.degrees(self.yaw) + 90.0) % 360.0
        buf = [" "] * cols
        for nm, ang in (("N", 0), ("NE", 45), ("E", 90), ("SE", 135),
                        ("S", 180), ("SW", 225), ("W", 270), ("NW", 315)):
            d = (ang - bearing + 540.0) % 360.0 - 180.0
            pos = int(cols * 0.5 + d * (cols / 90.0))
            for i, ch in enumerate(nm):
                p2 = pos + i
                if 0 <= p2 < cols:
                    buf[p2] = ch
        for i in range(0, cols, 3):
            if buf[i] == " ":
                buf[i] = "."
        buf[cols // 2] = "^"
        comp = "".join(buf)[:cols]
        hpw = max(6, min(26, cols // 5))
        hpn = int(clamp(self.hp, 0.0, 100.0) * hpw / 100.0 + 0.5)
        hearts = "#" * hpn + "." * (hpw - hpn)
        hcol = 42 if self.hp < 35.0 else (5 if self.hp > 70 else 11)
        cyl = "".join("|" if i < self.ammo else " " for i in range(6))
        hh = int(self.tod * 24.0) % 24
        mm = int((self.tod * 24.0 - int(self.tod * 24.0)) * 60.0)
        sun = "DAY" if 0.26 < self.tod < 0.76 else "NIGHT"
        rl = ("LOADING" if self.reload > 0.0 else
              ("%d in the box" % self.reserve))
        msg = self.msgs[0][0] if self.msgs else ""
        if self.state == "title":
            msg = "PRESS ENTER TO RIDE IN"
        elif self.hp <= 0.0:
            msg = "ENTER for a new town, R to try again, Q to quit"
        elif self.mapon:
            msg = "MAP"
        seg1 = [
            (19, " LIFE "), (hcol, "[" + hearts + "]"),
            (19, " AMMO ["), (39 if self.ammo else 42, cyl), (19, "] "),
            (4, rl),
            (19, "  GOLD "), (39, str(self.gold)),
            (19, "  OUTLAWS "),
            (42 if self.kills < self.total else 5,
             "%d/%d" % (self.kills, self.total)),
            (19, "  %02d:%02d " % (hh, mm)), (4, sun),
            (3, "  " + str(int(self.fps)) + "fps " + str(r.W) + "x" +
             str(r.H)),
            (3, "  seed " + str(self.w.seed)),
            (3, "  " + str(int(self.px)) + "," + str(int(self.pz))),
        ]
        line2 = self.paint(seg1, cols)
        seg2 = [(3, " W A S D move  X run  SPACE jump  F shoot  R reload  "
                    "E use  M map  H help  [ ] view  1 2 3 detail  Q quit")]
        if msg:
            seg2 = [(19, " " + msg[:cols - 2]), (3, "")]
        line3 = self.paint(seg2, cols)
        return ("\x1b[38;5;250;48;5;16m\x1b[1m" + comp + "\x1b[0m"
                "\r\n\x1b[K" + line2 + "\r\n\x1b[K" + line3 + "\x1b[0m")

    @staticmethod
    def paint(segs, cols):
        out = []
        n = 0
        for col, txt in segs:
            n += len(txt)
            if n > cols:
                break
            out.append("\x1b[38;5;%dm%s" % (col, txt))
        s = "".join(out)
        if n < cols:
            s += " " * (cols - n)
        return s + "\x1b[0m"

    # --------------------------------------------------------------- the loop

    def loop(self):
        opts = self.opts
        r = self.r
        con = self.con
        sfx = self.sfx
        last = time.perf_counter()
        nframes = opts.frames
        dt = 0.02
        while not self.quit:
            now = time.perf_counter()
            dt = now - last
            last = now
            if dt > 0.4:
                dt = 0.4
            self.acc += dt
            self.frames += 1
            if self.acc > 0.5:
                self.fps = self.frames / self.acc
                self.frames = 0
                self.acc = 0.0
            self.keys.poll(now)
            self.handle(now, sfx)
            if not self.pause:
                self.step(dt, now)
            if (self.frames & 15) == 0 and not opts.size:
                c, rw = con.size()
                if opts.dump:
                    c, rw = opts.size_cols, opts.size_rows
                if r.set_size(c, rw):
                    self.dirty.append((0, 0))
            elif opts.size:
                r.set_size(opts.size_cols, opts.size_rows)
            self.draw(now)
            if nframes > 0:
                opts.frames = nframes = nframes - 1
                if nframes <= 0:
                    self.dump_frame()
                    return
            budget = 1.0 / opts.fps
            sp = budget - (time.perf_counter() - now)
            if sp > 0.0:
                time.sleep(sp)
            if opts.auto:
                self.autotune(budget)

    def autotune(self, budget):
        if self.ft > budget * 1.75 and self.r.detail > 0:
            self.r.detail -= 1
            self.r.set_size(self.r.cols + 1, self.r.rows)
            self.r.set_size(self.r.cols, self.r.rows)
        elif self.ft < budget * 0.5 and self.r.detail < 3:
            self.r.detail += 1
            self.r.set_size(self.r.cols + 1, self.r.rows)
            self.r.set_size(self.r.cols, self.r.rows)

    def dump_frame(self):
        if self.opts.dump:
            try:
                with open(self.opts.dump, "w", encoding="ascii",
                          errors="replace") as fh:
                    fh.write(self.r.text_)
                sys.stderr.write("wrote %s (%d bytes, %dx%d cells)\n" % (
                    self.opts.dump, len(self.r.text_), self.r.W, self.r.H))
            except Exception as e:
                sys.stderr.write("dump failed: %r\n" % (e,))

    def handle(self, now, sfx):
        k = self.keys
        r = self.r
        if k.hit("q", "esc"):
            self.quit = True
            return
        if self.state == "title":
            if k.hit("\r", "\n", " ", "enter"):
                self.state = "play"
                self.viewy = self.y + 1.62
                self.banner_now("RIDE IN, PARTNER. " + str(self.total)
                                + " OUTLAWS ARE IN THIS TOWN", 4.0)
            if k.hit("h", "?"):
                self.helpon = not self.helpon
            return
        if self.hp <= 0.0:
            if k.hit("\r", "\n", " "):
                self.restart(True)
            elif k.hit("r"):
                self.restart(False)
            return
        if k.hit("p"):
            self.pause = not self.pause
        if self.pause:
            return
        if k.hit("m"):
            self.mapon = not self.mapon
        if k.hit("h", "?"):
            self.helpon = not self.helpon
        if k.hit("f", "l", "\r", "\n"):
            self.fire()
            self.sound("shot")
        if k.hit("r"):
            self.try_reload()
        if k.hit("e"):
            self.use()
        if k.hit("["):
            r.tmax = clamp(r.tmax - 6.0, 16.0, 140.0)
            self.say("VIEW DISTANCE %d BLOCKS" % int(r.tmax), 1.4)
        if k.hit("]"):
            r.tmax = clamp(r.tmax + 6.0, 16.0, 140.0)
            self.say("VIEW DISTANCE %d BLOCKS" % int(r.tmax), 1.4)
        if k.hit("1"):
            self.detail(0)
        if k.hit("2"):
            self.detail(1)
        if k.hit("3"):
            self.detail(2)
        if k.hit("4"):
            self.detail(3)

    def detail(self, n):
        self.r.detail = n
        c, rw = self.con.size()
        self.r.set_size(c + 1, rw)
        self.r.set_size(c, rw)
        self.say("DETAIL LEVEL %d  (%d x %d cells)" %
                 (n + 1, self.r.W, self.r.H), 1.6)

    def restart(self, newseed):
        opts = self.opts
        if newseed:
            seed = (self.w.seed * 1103515245 + 12345) & 0x7FFFFFFF
            out = sys.stdout if not opts.quiet else sys.stderr
            out.write("\n  new territory, seed %d\n" % seed)
            out.flush()
            self.w = World(seed, None)
            self.r.w = self.w
            self.r.build_grid()
            self.r.cloud = self.r.make_clouds(seed)
            opts.seed = seed
        else:
            for b in self.bandits:
                b.hp = 100.0
                b.dead = False
                b.spr = 0.0
                b.mode = "roam"
        self.hp = 100.0
        self.gold = 0
        self.kills = 0
        self.shots = 0
        self.ammo = 6
        self.reserve = 24
        self.reload = 0.0
        self.parts = []
        self.tracers = []
        self.msgs = []
        self.state = "play"
        self.hitmark = 0.0
        self.flash = 0.0
        self.mapon = False
        self.helpon = False
        self.seen = bytearray((MW >> 1) * (MH >> 1))
        x, y, z, yaw = self.w.spawn
        self.px, self.pz, self.y, self.vy = x, z, y, 0.0
        self.yaw, self.pitch = yaw, -0.03
        self.viewy = y + 1.62
        self.spawn_all()
        self.build_pals()
        self.banner_now("ANOTHER DAY, ANOTHER TOWN" if self.w.seed else "",
                        3.0)


# ============================================================================
# 14.  ENTRY POINT
# ============================================================================

class Sfx(object):
    """Optional. --sound on Windows uses the kernel beeper in a background
    thread so a gunshot never stalls a frame; everywhere else it is the
    terminal bell on stderr, which cannot corrupt the screen."""

    def __init__(self, on):
        self.on = on
        self.ws = None
        if on and IS_WIN:
            try:
                import winsound
                self.ws = winsound
            except Exception:
                self.on = False

    def play(self, freq, ms):
        if not self.on:
            return
        if self.ws is not None:
            try:
                import threading
                threading.Thread(target=self._beep,
                                 args=(freq, ms), daemon=True).start()
                return
            except Exception:
                pass
        try:
            sys.stderr.write("\a")
            sys.stderr.flush()
        except Exception:
            pass

    def _beep(self, freq, ms):
        try:
            self.ws.Beep(int(freq), int(ms))
        except Exception:
            pass

    def shot(self):
        self.play(160, 42)

    def hit(self):
        self.play(700, 26)

    def empty(self):
        self.play(1400, 12)

    def coin(self):
        self.play(1200, 40)


BANNER = (
    "  ==== DUST GULCH A.D. 1850 " + "=" * 40,
    "   a 3D ASCII terminal game: one file, no libraries,",
    "   a world made entirely out of noise functions.",
    "  " + "=" * 60,
)


def make_console_line(txt, w):
    return (" " + txt).ljust(w)


def parse_args(argv):
    import argparse

    class Fmt(argparse.HelpFormatter):
        def _get_help_string(self, action):
            return action.help

    ap = argparse.ArgumentParser(
        prog="dust_gulch.py",
        description="DUST GULCH 1850 - a 3D ASCII western rendered with "
                    "one ray per terminal cell, in a world generated from "
                    "Perlin noise.",
        formatter_class=lambda prog=None, **kw: Fmt(prog, width=76),
        epilog="Keys inside the game: W A S D, X to run, SPACE to jump, "
               "F to shoot, R to reload, E to use, M for the map, "
               "H for help, [ ] for view distance, 1 2 3 for detail, "
               "Q to quit.")
    ap.add_argument("--seed", type=int, default=None,
                    help="seed for the world (same seed, same town)")
    ap.add_argument("--outlaws", type=int, default=12,
                    help="how many bandits to put in the ground (12)")
    ap.add_argument("--viewdist", type=float, default=54.0,
                    help="how far you can see, in blocks (54)")
    ap.add_argument("--fov", type=float, default=72.0,
                    help="horizontal field of view, degrees (72)")
    ap.add_argument("--detail", type=int, default=2,
                    help="0..4, render width 76/100/128/164/208 (2)")
    ap.add_argument("--fps", type=float, default=22.0,
                    help="frame rate cap (22: the renderer itself runs at "
                    "30 to 80 fps on a modern machine, the rest is your "
                    "terminal keeping up)")
    ap.add_argument("--daylen", type=float, default=260.0,
                    help="seconds for a whole day and night (260)")
    ap.add_argument("--tod", type=float, default=0.36,
                    help="time of day 0..1, 0.25 sunrise, 0.5 noon (0.36)")
    ap.add_argument("--reveal", type=int, default=12,
                    help="map reveal radius, in cells (12)")
    ap.add_argument("--shift-run", dest="shift_run", action="store_true",
                    help="(default) X and SHIFT both sprint; kept for "
                    "clarity")
    ap.add_argument("--sound", action="store_true",
                    help="try to make noises: kernel beeper on Windows, "
                    "terminal bell elsewhere")
    ap.add_argument("--no-labels", dest="labels", action="store_false",
                    help="turn off the floating place names")
    ap.add_argument("--auto", action="store_true",
                    help="auto-tune the detail level to hold the frame rate")
    ap.add_argument("--size", type=str, default=None,
                    help="force the terminal size, e.g. --size 150x45")
    ap.add_argument("--frames", type=int, default=0,
                    help="render N frames and exit (for benchmarking)")
    ap.add_argument("--dump", type=str, default=None,
                    help="with --frames: write the last frame's escape-code "
                    "text to this file")
    ap.add_argument("--quiet", action="store_true",
                    help="do not touch the terminal (no raw mode, no "
                    "alternate screen) - for scripted runs")
    ap.add_argument("--color", dest="colormode", type=str, default="auto",
                    choices=("auto", "24bit", "256", "off"),
                    help="auto (default) asks the terminal what it can do: "
                    "24bit truecolor where it says so, the 256 colour cube "
                    "with ordered dithering everywhere else, off for "
                    "characters only")
    ap.add_argument("--nocolor", dest="colormode", action="store_const",
                    const="off", help="same as --color off")
    ap.add_argument("--no-palette", dest="palette", action="store_false",
                    help="do not repaint the 216 colour cube at startup "
                    "(for a terminal that takes its colours from a theme "
                    "you would rather keep)")
    ap.add_argument("--selftest", action="store_true",
                    help="check the maths, the renderer and the palette, "
                    "then exit")
    ap.add_argument("--bench", action="store_true",
                    help="render a few frames at every detail level and "
                    "report the frame time")
    ap.set_defaults(labels=True, shift_run=True, color=True, palette=True)
    try:
        opts = ap.parse_args(argv)
    except SystemExit:
        raise
    if opts.seed is None:
        opts.seed = (int(time.time() * 1000) ^ (os.getpid() * 7919)) & \
            0x7FFFFFFF
    if opts.detail < 0:
        opts.detail = 0
    if opts.detail > 4:
        opts.detail = 4
    mode = opts.colormode
    env = os.environ
    if mode == "auto":
        tc = (env.get("COLORTERM") in ("truecolor", "24bit") or
              "WT_SESSION" in env or
              env.get("TERM_PROGRAM") in ("iTerm.app", "WezTerm", "vscode",
                                          "ghostty", "konsole", "Tabby") or
              "VTE_VERSION" in env or env.get("TERM") == "xterm-kitty")
    else:
        tc = mode == "24bit"
    opts.truecolor = bool(tc) and mode != "off"
    opts.color = mode != "off"
    opts.size_cols = 0
    opts.size_rows = 0
    if opts.size:
        try:
            a, b = opts.size.lower().replace("*", "x").split("x")
            opts.size_cols = int(a)
            opts.size_rows = int(b)
        except Exception:
            ap.error("--size wants WxH, e.g. --size 150x45")
    return opts


def generate(seed, opts):
    """Run the generator while printing what it is doing, so the two or
    three seconds it takes are spent watching maths instead of a blank
    screen."""
    bar = ["", ""]
    stages = ("sowing perlin gradients", "scattering cactus and bone",
              "laying out the township", "fencing, burying, watering",
              "finding the highest ground")
    t0 = time.perf_counter()
    box = "  |" + "-" * 44 + "|  "
    sys.stdout.write("\n".join(BANNER) + "\n\n")
    sys.stdout.write("  seed %d   world %dx%d columns   outlaws %d\n"
                     % (seed, MW, MH, opts.outlaws))
    sys.stdout.write("\n  generating the territory\n")
    holder = {}

    def report(text, n):
        line = "  [%s] %s" % ("=" * (n + 1) + " " * (4 - n), stages[n])
        sys.stdout.write("\r" + line.ljust(60))
        sys.stdout.flush()

    w = World(seed, report)
    dt = time.perf_counter() - t0
    sys.stdout.write("\r  the desert exists again, in %.2f seconds%s\n\n"
                     % (dt, " " * 20))
    sys.stdout.write("  heights 1..%d blocks, %d landmarks, %d gold "
                     "nuggets in the tailings\n"
                     % (w.hmax, len(w.landmarks), len(w.nuggets)))
    sys.stdout.write("\n  press ENTER to see it ")
    sys.stdout.flush()
    if opts.frames or opts.selftest or opts.bench or not sys.stdin.isatty():
        sys.stdout.write("\n")
    else:
        try:
            sys.stdin.readline()
        except Exception:
            pass
    return w


class OptStub(object):
    """What the self-test and the bench need in place of parsed options."""
    detail = 3
    viewdist = 54.0
    fov = 72.0
    frames = 0
    dump = None
    quiet = True
    size_cols = 0
    size_rows = 0
    outlaws = 12
    tod = 0.36
    daylen = 260.0
    reveal = 12
    labels = True
    fps = 240.0
    auto = False
    sound = False
    color = True
    truecolor = False
    shift_run = True


def selftest(opts=None):
    """Run every assumption this game makes as an assertion. It is here
    because a terminal is the one piece of the system that cannot be
    tested by unit tests at home: 7 bit ASCII only, no libraries, an
    escape-sequence writer that has to be exactly right or the screen
    turns to soup. `python dust_gulch.py --selftest` answers the question
    "is this box up to it" in about a second."""
    w = {}
    out = []
    fails = []

    def check(name, fn):
        try:
            fn(w)
            out.append("  ok    " + name)
        except Exception as e:
            fails.append(name)
            out.append("  FAIL  %s: %r" % (name, e))

    check("source is 7 bit ASCII only", lambda d: _t_ascii())
    check("perlin noise is bounded and continuous", lambda d: _t_noise(d))
    check("coarse cache matches the function it wraps",
          lambda d: _t_coarse(d))
    check("the world is a pure function of its seed", lambda d: _t_world(d))
    check("town street, buildings and landmarks exist",
          lambda d: _t_town(d))
    check("gold is reachable and the props are on the ground",
          lambda d: _t_props(d))
    check("material and palette tables line up", lambda d: _t_tables())
    check("colour map: dithered 256 and 24 bit agree", lambda d: _t_cmap())
    check("renderer paints an ASCII-only frame", lambda d: _t_render(d))
    check("renderer survives the corners of the world",
          lambda d: _t_edges(d))
    check("projection and picking behave", lambda d: _t_pick(d))
    check("forty headless frames of play", lambda d: _t_game(d))
    for ln in out:
        sys.stdout.write(ln + "\n")
    sys.stdout.write("\n  %d checks, %d failures\n\n"
                     % (len(out), len(fails)))
    sys.stdout.flush()
    return 1 if fails else 0


def _t_ascii():
    with open(os.path.abspath(__file__), "rb") as fh:
        raw = fh.read()
    bad = [n for n in range(len(raw)) if raw[n] > 127]
    if bad:
        raise AssertionError("%d non-ascii bytes, first at %d" %
                             (len(bad), bad[0]))
    for n in range(len(raw)):
        c = raw[n]
        if c > 126 or (c < 32 and c not in (9, 10, 13)):
            raise AssertionError("byte %d at %d" % (c, n))


def _t_noise(d):
    nz = NoiseField(12345)
    for i in range(0, 400):
        x = i * 0.37
        y = i * 0.11
        v = nz.fbm(x, y, 4)
        if not (-4.0 < v < 4.0):
            raise AssertionError("fbm out of range: %f" % v)
        if abs(nz.fbm(x, y, 4) - v) > 1e-12:
            raise AssertionError("fbm is not repeatable")
    a = nz.fbm(3.5, 7.25, 4)
    b = nz.fbm(3.51, 7.25, 4)
    if abs(a - b) > 0.12:
        raise AssertionError("noise is not continuous: %f %f" % (a, b))
    if abs(nz.fbm(3.5, 7.25, 4) - NoiseField(999).fbm(3.5, 7.25, 4)) < 1e-9:
        raise AssertionError("the seed does nothing")
    if abs(nz.ridged(1.5, 2.5, 3) - nz.ridged(1.5, 2.5, 3)) > 1e-12:
        raise AssertionError("ridged is not repeatable")
    if not (0.0 <= nz.billow(4.0, 5.0, 3) <= 4.0):
        raise AssertionError("billow out of range")


def _t_coarse(d):
    nz = NoiseField(777)

    def fn(x, z):
        return nz.fbm(x * 0.013, z * 0.013, 4)
    co = Coarse(fn, 64, 3)
    for j in range(0, 20):
        for i in range(0, 20):
            # on the sample grid the cache has to be exact
            x = i * 3.0
            z = j * 3.0
            if abs(co.at(x, z) - fn(x, z)) > 1e-9:
                raise AssertionError("the cache lies on its own grid")
    for x in (1, 5, 7, 33, 61, 64, 40):
        for z in (0, 6, 9, 40, 63):
            # between grid points it interpolates, so it has to be near
            if abs(co.at(x, z) - fn(x, z)) > 0.45:
                raise AssertionError("interpolation went wrong at %d,%d" %
                                     (x, z))
            if co.at(x, z) != co.at(x, z):
                raise AssertionError("the cache is not stable")


def _t_world(d):
    t0 = time.perf_counter()
    a = World(1850, None)
    b = World(1850, None)
    d["w"] = a
    d["t"] = time.perf_counter() - t0
    if bytes(a.hmap) != bytes(b.hmap):
        raise AssertionError("same seed, different world")
    if bytes(a.mat) != bytes(b.mat):
        raise AssertionError("same seed, different materials")
    c = World(1851, None)
    if bytes(a.hmap) == bytes(c.hmap):
        raise AssertionError("different seed, same world")
    hm = a.hmap
    for i in range(0, MW * MH, 7):
        if hm[i] < 1:
            raise AssertionError("a column of the world has no ground")
    if a.hmax < 12:
        raise AssertionError("nothing high enough to be a mesa")
    if a.hmax > 200:
        raise AssertionError("the world is too tall to see")
    if not (d["t"] < 12.0):
        raise AssertionError("generation took %.1f s" % d["t"])


def _t_town(d):
    w = d["w"]
    tx0, tz0, tx1, tz1 = w.town
    zs = w.main_z
    flat = 0
    for x in range(tx0 + 4, tx1 - 4):
        # the well, a cactus and the odd wagon are allowed to stand in the
        # road; the road itself has to be level
        if abs(w.h_at(x, zs) - TOWN_H) <= 1:
            flat += 1
    if flat < (tx1 - tx0) * 0.8:
        raise AssertionError("Main Street is %d%% potholes" %
                             (flat * 100 // (tx1 - tx0)))
    tall = 0
    for z in range(tz0, tz1):
        for x in range(tx0, tx1):
            if w.h_at(x, z) > TOWN_H + 3:
                tall += 1
    if tall < 700:
        raise AssertionError("only %d cells of building" % tall)
    for nm in ("saloon", "bank", "hotel", "jail", "church", "camp",
               "graveyard", "tower", "livery", "corral"):
        if nm not in w.special:
            raise AssertionError("no %s in the town" % nm)
    if len(w.landmarks) < 8:
        raise AssertionError("too few landmarks to navigate by")
    if w.campfire is None or len(w.campfire) != 3:
        raise AssertionError("the campfire has no place to burn")
    if w.well_at is None or len(w.well_at) != 3:
        raise AssertionError("there is no well")
    if w.trough_at is not None and len(w.trough_at) != 3:
        raise AssertionError("the trough is a bad shape")
    for nm, (x, z) in w.landmarks:
        if not (0 <= x < MW and 0 <= z < MH):
            raise AssertionError("landmark %s is off the world" % nm)


def _t_props(d):
    w = d["w"]
    if len(w.nuggets) < 8:
        raise AssertionError("not enough gold in the tailings")
    for (x, y, z) in w.nuggets:
        if not (0 <= x < MW and 0 <= z < MH):
            raise AssertionError("a nugget is off the map")
        lo = min(w.h_at(int(x) + i, int(z) + j)
                 for i in (-1, 0, 1) for j in (-1, 0, 1))
        if y + 1.5 < lo:
            raise AssertionError("a nugget is under a block of rock")
        if y > w.h_at(int(x), int(z)) + 3:
            raise AssertionError("a nugget is floating")
    door = win = sign = lamp = 0
    for i in range(MW * MH):
        f = w.flg[i]
        if f & FL_DOOR:
            door += 1
        if f & FL_WIN:
            win += 1
        if f & FL_SIGN:
            sign += 1
        if f & FL_LAMP:
            lamp += 1
    if door < 6:
        raise AssertionError("%d doors for a whole town" % door)
    if win < 30:
        raise AssertionError("%d windows" % win)
    if sign < 40:
        raise AssertionError("%d signboards and bands" % sign)
    if lamp < 6:
        raise AssertionError("%d lamps to light the night" % lamp)


def _t_tables():
    if len(MATS) != M_COUNT:
        raise AssertionError("MATS and M_COUNT disagree")
    for (t, s, rp, em) in MATS:
        if not (0 <= t < len(MCOLS) and 0 <= s < len(MCOLS)):
            raise AssertionError("a material points at a colour that is not "
                                 "there")
        if not (0 <= rp < len(RAMPS)):
            raise AssertionError("a material wants a ramp that does not "
                                 "exist")
    for rp in RAMPS:
        if len(rp) != 8:
            raise AssertionError("an ink ramp is not eight characters")
        for c in rp:
            if ord(c) < 32 or ord(c) > 126:
                raise AssertionError("an ink ramp is not printable ASCII")
    if len(MCOLRAMP) != len(MCOLS):
        raise AssertionError("MCOLRAMP and MCOLS disagree")
    for i in MCOLRAMP:
        if not (0 <= i < len(RAMPS)):
            raise AssertionError("a colour wants a ramp that does not exist")
    for e in EMISSIVE:
        if not (0 <= e < len(MCOLS)):
            raise AssertionError("an emissive colour is out of the table")
    for c in MCOLS:
        for v in c:
            if not (0 <= v <= 255):
                raise AssertionError("a colour is out of range")


def _t_cmap():
    lt = Lighting(False)
    a = lt.qcol(120, 90, 50, 0)
    b = lt.qcol(120, 90, 50, 3)
    if not (0 <= a <= 255 and 0 <= b <= 255):
        raise AssertionError("a dithered index left the palette")
    if lt.qcol(120, 90, 50, 0) != a:
        raise AssertionError("the dither is not stable")
    tc = Lighting(True)
    for v in ((0.0, 0.0, 0.0), (255.0, 255.0, 255.0), (120.0, 90.0, 50.0),
              (-40.0, 300.0, 12.0)):
        idx = tc.qcol(v[0], v[1], v[2])
        if idx is None or not (0 <= idx < 4096):
            raise AssertionError("a truecolor key is out of its table")
        got = tc.cmap[idx]
        if not (got & TCF):
            raise AssertionError("a truecolor entry lost its flag")
        r = ((got >> 16) & 255) - v[0]
        if v[0] < 0:
            r = (got >> 16) & 255
        if abs(r) > 24:
            raise AssertionError("truecolor is rounding badly")
    mo = Lighting(False, True)
    if not (232 <= mo.qcol(30, 90, 200) <= 255):
        raise AssertionError("monochrome is not on the grey ramp")
    if pal_rgb(0) != (0, 0, 0) or pal_rgb(15) != (255, 255, 255):
        raise AssertionError("the legacy sixteen are wrong")


def _mkrend(d, w=None, tc=False, cols=120, rows=36):
    o = OptStub()
    o.truecolor = tc
    o.color = True
    r = Renderer(w or d["w"], Console(enable=False), o)
    r.out = open(os.devnull, "w")
    r.binary = False
    r.set_size(cols, rows)
    return r


def _t_render(d):
    r = _mkrend(d)
    w = d["w"]
    zs = w.main_z
    tx0 = w.town[0]
    r.set_cam(tx0 + 12.5, float(w.h_at(tx0 + 12, zs)) + 1.62, zs + 0.5,
              0.0, -0.02)
    r.render((0.5, 0.8, 0.3), [], 0.0, 0.0, 0.36)
    txt = r.text_
    if "\x1b[" not in txt:
        raise AssertionError("no escape sequences at all")
    body = txt.replace("\x1b", "")
    for n in range(len(body)):
        if ord(body[n]) > 126 or (ord(body[n]) < 32 and body[n] != "\r"
                                  and body[n] != "\n"):
            raise AssertionError("the frame is not ASCII at %d" % n)
    rows = txt.count("\x1b[0m")
    if rows < r.H - 2:
        raise AssertionError("the frame has %d rows, expected %d" %
                             (rows, r.H))
    if r.light.ble is None or len(r.light.ble) != len(MCOLS) * BLEND_STRIDE:
        raise AssertionError("the shade table is the wrong size")
    solid = 0
    for i in range(r.W * r.H):
        if r.fb_ch[i] != 32:
            solid += 1
    if solid < r.W:
        raise AssertionError("nothing was drawn")
    if solid > r.W * r.H:
        raise AssertionError("more cells than the screen")
    d["r"] = r


def _t_edges(d):
    for (x, z, yaw) in ((1, 1, 0.7), (MW - 2, MH - 2, 3.9), (2, MH - 2, -2.0),
                        (MW - 2, 2, 1.57)):
        r = _mkrend(d)
        r.set_cam(float(x), float(d["w"].h_at(x, z)) + 1.62, float(z), yaw,
                  0.4)
        r.render((0.5, 0.8, 0.3), [], 0.0, 0.0, 0.36)
        if len(r.text_) < 100:
            raise AssertionError("an empty frame at the edge")
    r = _mkrend(d)
    r.set_cam(64.0, 300.0, 64.0, 0.0, -1.2)
    r.render((0.5, 0.8, 0.3), [], 0.0, 0.0, 0.36)
    r.set_cam(64.0, 0.5, 64.0, 0.0, 1.2)
    r.render((0.5, 0.8, 0.3), [], 0.0, 0.0, 0.36)


def _t_pick(d):
    r = _mkrend(d)
    w = d["w"]
    x, y, z, yaw = w.spawn
    r.set_cam(x, y + 1.62, z, yaw, 0.0)
    if r.project(x - 4.0, y, z) is not None:
        raise AssertionError("a point behind the camera was projected")
    pr = r.project(x + 6.0, y + 1.62, z)
    if pr is None:
        raise AssertionError("a point ahead of the camera was not projected")
    if not (0.0 <= pr[0] <= r.W and 0.0 <= pr[1] <= r.H):
        raise AssertionError("a point in front projected off the screen")
    # ray() answers with the limit when it finds nothing, which is what
    # the shooting code wants: a bullet that misses flies on
    hit = r.ray(x, y + 1.62, z, 0.0, -1.0, 0.0, 40.0)
    if not (0.0 < hit < 40.0):
        raise AssertionError("looking straight down found no ground (%f)" %
                             hit)
    if r.ray(x, y + 1.62, z, 0.0, -1.0, 0.0, 40.0) >= 40.0:
        raise AssertionError("the ground is not where the camera stands on")
    zs = w.main_z
    xs = w.town[0] + 20
    r.set_cam(float(xs), float(w.h_at(xs, zs)) + 1.62, float(zs), 0.0, 0.0)
    if r.ray(float(xs), float(w.h_at(xs, zs)) + 1.62, float(zs),
             0.0, 1.0, 0.0, 40.0) < 40.0:
        raise AssertionError("the middle of Main Street has a ceiling")


def _t_game(d):
    w = d["w"]
    o = OptStub()
    con = Console(enable=False)
    r = Renderer(w, con, o)
    r.out = open(os.devnull, "w")
    r.binary = False
    r.set_size(100, 34)
    g = Game(w, r, con, o)
    g.sfx = Sfx(False)
    g.state = "play"
    x, y, z, yaw = w.spawn
    g.px, g.pz, g.y, g.vy = x, z, y, 0.0
    g.yaw, g.pitch = yaw, -0.03
    g.viewy = y + 1.62
    now = 0.0
    keys = ["w", "w", "a", "d", "s", "f", "r", "e", "m", " ", "x", "f"]
    for n in range(48):
        now += 0.05
        k = keys[n % len(keys)]
        g.keys.held = {k: now}
        g.keys.pressed = [k]
        if n % 7 == 3:
            g.keys.pressed.append("f")
        if n % 13 == 5:
            g.keys.pressed.append("r")
        if n % 11 == 2:
            g.keys.pressed.append(" ")
        if n % 5 == 1:
            g.keys.held["left"] = now
        if n % 5 == 4:
            g.keys.held["up"] = now
        g.keys.shift = (k == "x")
        g.t = now
        g.acc = 0.0
        g.handle(now, g.sfx)
        g.step(0.05, now)
        g.draw(now)
        if not (-1e4 < g.px < 1e4) or math.isnan(g.px) or math.isnan(g.yaw):
            raise AssertionError("the player left the world at frame %d" % n)
        if not (0.0 <= g.px < MW and 0.0 <= g.pz < MH):
            raise AssertionError("the player walked off the map")
        if g.y > 400.0 or g.y < -20.0:
            raise AssertionError("the player is at %f" % g.y)
    if g.hp <= 0.0:
        raise AssertionError("the player died in the test")
    if abs(g.px - x) + abs(g.pz - z) < 0.5:
        raise AssertionError("the player never moved")
    if g.yaw == yaw:
        raise AssertionError("the player never turned")
    moved = 0
    for b in g.bandits:
        if abs(b.x - b.tx) + abs(b.z - b.tz) > 0.01:
            moved += 1
    if moved == 0:
        raise AssertionError("not one outlaw moved")
    if not any(g.seen):
        raise AssertionError("the map never learned where the town is")
    if g.hp > 100.0 or g.hp < 0.0:
        raise AssertionError("hit points left their range")
    if not (0.0 <= g.tod <= 1.0):
        raise AssertionError("the clock went backwards")
    if g.shots < 1:
        raise AssertionError("the test never fired the revolver")
    if g.ammo + g.reserve > 30:
        raise AssertionError("shooting used no ammunition")
    if len(g.tracers) > 400 or len(g.parts) > 400:
        raise AssertionError("the particle lists never get cleaned up")


def bench(opts=None):
    """Frame times at each detail level, so a slow terminal can be tuned
    with numbers instead of guesses."""
    o = opts or OptStub()
    sys.stdout.write("\n  generating a world to benchmark against\n")
    sys.stdout.flush()
    t0 = time.perf_counter()
    w = World(o.seed if o.seed else 1850, None)
    sys.stdout.write("  world   %.2f s   (%dx%d columns, %d tall)\n\n" %
                     (time.perf_counter() - t0, MW, MH, w.hmax))
    con = Console(enable=False)
    for det in range(5):
        oo = OptStub()
        oo.detail = det
        r = Renderer(w, con, oo)
        r.out = open(os.devnull, "w")
        r.binary = False
        rows = 38
        r.set_size(220, rows)
        zs = w.main_z
        x = w.town[0] + 12.5
        r.set_cam(x, float(w.h_at(int(x), zs)) + 1.62, zs + 0.5, 0.0, -0.02)
        best = 1e9
        n = 4
        for k in range(n + 1):
            t1 = time.perf_counter()
            r.render((0.5, 0.8, 0.3), [], 0.0, 0.0, 0.36 + k * 0.001)
            ft = time.perf_counter() - t1
            if k:
                if ft < best:
                    best = ft
        kb = len(r.text_) / 1024.0
        sys.stdout.write("  detail %d : %4d x %3d cells   %6.1f ms/frame   "
                         "%5.1f fps   %6.1f KB of escapes\n" %
                         (det + 1, r.W, r.H, best * 1000.0, 1.0 / best, kb))
        sys.stdout.flush()
    sys.stdout.write("\n  the game caps itself with --fps; whatever is above\n"
                     "  your terminal's own speed is idle time, not lag.\n\n")
    return 0


def main(argv=None):
    opts = parse_args(sys.argv[1:] if argv is None else argv)
    if opts.selftest:
        return selftest(opts)
    if opts.bench:
        return bench(opts)
    con = Console(enable=not opts.quiet)
    if IS_WIN:
        os.system("")
    try:
        world = generate(opts.seed, opts)
    except KeyboardInterrupt:
        sys.stderr.write("\n  you turned back before the town was finished\n")
        return 1
    if not opts.quiet and sys.stdin.isatty():
        try:
            sys.stdout.write("\n")
            sys.stdout.flush()
        except Exception:
            pass
    rend = Renderer(world, con, opts)
    game = Game(world, rend, con, opts)
    game.sfx = Sfx(opts.sound)
    if opts.quiet:
        rend.out = sys.stdout
        rend.binary = False
    cols, rows = (opts.size_cols, opts.size_rows)
    if not cols:
        cols, rows = con.size()
    rend.set_size(cols, rows)
    if opts.frames:
        # a scripted run wants to see the world, not the title card
        game.state = "play"
    if opts.tod:
        game.tod = opts.tod
    game.build_pals()
    pal = None
    if opts.color and not opts.truecolor and opts.palette:
        pal = palette_seq(CUBE)
    con.setup("DUST GULCH 1850 - ASCII 3D", pal)
    if opts.quiet:
        sys.stdout.write("\n")
    try:
        game.loop()
    except KeyboardInterrupt:
        pass
    except Exception:
        con.restore()
        raise
    con.restore()
    out = sys.stdout
    out.write("\n  you leave the territory with %d gold and %d of %d "
              "outlaws down\n\n" % (game.gold, game.kills, game.total))
    out.write("  the seed was %d. run it again for the same town.\n\n"
              % world.seed)
    return 0


if __name__ == "__main__":
    sys.exit(main())
