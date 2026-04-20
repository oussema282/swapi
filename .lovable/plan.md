

## Plan: Parallax Landing Page + Rebrand to "echange.tn"

### Part A — Rebrand to `echange.tn`

Replace all "Valexo" occurrences with `echange.tn` across the codebase (single source of truth + remaining hardcoded strings).

**Files updated:**
- `src/config/branding.ts` — `APP_NAME = 'echange.tn'`, update tagline/description
- `index.html` — `<title>`, og:title, twitter:title, og:description, meta description
- `README.md` — title and description
- `src/pages/CheckoutSuccess.tsx` — replace hardcoded "Valexo Pro" with `PRO_PLAN_NAME`
- `src/pages/WhitePaper.tsx` — replace hardcoded "Valexo" mentions with `APP_NAME`
- `src/components/LocationGate.tsx` — use `APP_NAME`
- `src/locales/{en,fr,ar,de,es,hi,ja,ko,pt,ru,zh}/translation.json` — replace "Valexo" with `echange.tn` in testimonial quotes, swap-complete copy, and any other strings
- `supabase/functions/fraud-detector/index.ts` & `ai-policy-optimizer/index.ts` — update system prompt brand name
- `docs/CAPTCHA_INTEGRATION.md` — update title

### Part B — Parallax Landing Page

Add multi-layer parallax scrolling effects to the existing landing sections using `framer-motion`'s `useScroll` + `useTransform` hooks (already a project dependency — no new packages).

**New structure (`src/pages/Landing.tsx`):**

```text
┌──────────────────────────────────────────┐
│ Hero (fixed bg layers move at diff speeds)│
│  - Layer 1: gradient blobs (slowest)      │
│  - Layer 2: floating particles (medium)   │
│  - Layer 3: headline + auth (fastest)     │
├──────────────────────────────────────────┤
│ Parallax divider (animated SVG wave)      │
├──────────────────────────────────────────┤
│ TrustBadges                               │
├──────────────────────────────────────────┤
│ AnimatedFeatures (cards parallax-tilt)    │
├──────────────────────────────────────────┤
│ Parallax image band (bg moves slower)     │
├──────────────────────────────────────────┤
│ HowItWorks (steps slide in on scroll)     │
├──────────────────────────────────────────┤
│ StatsCounter (full-width parallax bg)     │
├──────────────────────────────────────────┤
│ Testimonials                              │
├──────────────────────────────────────────┤
│ CTABanner (parallax gradient mesh)        │
├──────────────────────────────────────────┤
│ Footer                                    │
└──────────────────────────────────────────┘
```

**Implementation details:**

1. **`src/components/landing/Hero.tsx`** — Add 3 parallax layers:
   - Background blobs: `useTransform(scrollY, [0, 500], [0, 150])` (slow)
   - Particles: `[0, 500] → [0, 80]` (medium)
   - Foreground content: `[0, 500] → [0, -50]` opacity fade (fast)

2. **New: `src/components/landing/ParallaxSection.tsx`** — Reusable wrapper that takes a `speed` prop and applies `y` transforms based on element scroll progress (`useScroll({ target: ref, offset: ['start end', 'end start'] })`).

3. **New: `src/components/landing/ParallaxDivider.tsx`** — Animated SVG wave divider between sections, with subtle Y movement on scroll.

4. **`src/components/landing/StatsCounter.tsx`** — Wrap background layer in parallax transform so the gradient/pattern moves slower than foreground numbers.

5. **`src/components/landing/AnimatedFeatures.tsx`** — Add scroll-linked tilt/Y offset on each card so they enter staggered with parallax depth.

6. **`src/components/landing/CTABanner.tsx`** — Parallax mesh gradient background.

7. **Mobile**: Reduce parallax intensity (or disable on `prefers-reduced-motion`) for performance — use `useReducedMotion()` from framer-motion.

### Files Modified/Created
- `src/config/branding.ts`, `index.html`, `README.md`, `src/pages/CheckoutSuccess.tsx`, `src/pages/WhitePaper.tsx`, `src/components/LocationGate.tsx`
- All 11 locale files (`src/locales/*/translation.json`)
- `supabase/functions/fraud-detector/index.ts`, `supabase/functions/ai-policy-optimizer/index.ts`
- `src/components/landing/Hero.tsx`, `StatsCounter.tsx`, `AnimatedFeatures.tsx`, `CTABanner.tsx`
- New: `src/components/landing/ParallaxSection.tsx`, `ParallaxDivider.tsx`

