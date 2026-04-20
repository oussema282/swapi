

## Plan: Brand-new Visual Parallax Landing Page

Replace the current landing page with a completely new, visual-first parallax experience. Minimal text, maximum motion and depth.

### New Page Structure

```text
┌────────────────────────────────────────────┐
│ 1. Sticky transparent navbar               │
│    (logo + lang + "Sign in" pill)          │
├────────────────────────────────────────────┤
│ 2. HERO — full viewport                    │
│    • 5-layer parallax depth:               │
│      - Animated mesh gradient (deepest)    │
│      - Floating SVG shapes (slow)          │
│      - Tilted product card stack (medium)  │
│      - Big shimmer headline (fast)         │
│      - Scroll-mouse indicator              │
│    • Just 3 words + 1 short tagline        │
│    • Single primary CTA → scrolls to auth  │
├────────────────────────────────────────────┤
│ 3. Marquee strip — infinite scrolling      │
│    icons of swap categories (no text)      │
├────────────────────────────────────────────┤
│ 4. SHOWCASE — sticky scroll storytelling   │
│    Left: sticky phone mockup that morphs   │
│    Right: 3 short feature beats fade in    │
│    as user scrolls (pin + parallax)        │
├────────────────────────────────────────────┤
│ 5. Number reveal band                      │
│    Huge animated digits, parallax bg blob  │
├────────────────────────────────────────────┤
│ 6. Tilted image collage                    │
│    6 floating item photos with mouse-tilt  │
│    + scroll parallax (different speeds)    │
├────────────────────────────────────────────┤
│ 7. Auth panel — glass card on gradient     │
│    Embedded AuthSection, no surrounding    │
│    text, just "Start" headline             │
├────────────────────────────────────────────┤
│ 8. Minimal footer                          │
│    Logo • lang • legal links               │
└────────────────────────────────────────────┘
```

### Visual System

- **Parallax layers**: every section has 2–4 layers moving at different `useTransform` speeds.
- **Mouse parallax**: hero shapes + collage tilt subtly with cursor (`useMotionValue` on `mousemove`).
- **Sticky scroll storytelling**: showcase section pins phone mockup while right column scrolls (CSS `position: sticky` + framer-motion `useScroll`).
- **Marquee**: pure CSS infinite horizontal scroll, paused on hover.
- **Glass morphism**: backdrop-blur cards over gradient backgrounds.
- **Reduced motion**: all parallax disabled via `useReducedMotion()`.
- **Mobile**: collage becomes single column, sticky storytelling becomes regular stack, intensities halved.

### Files

**New components** (`src/components/landing/v2/`):
- `HeroParallax.tsx` — 5-layer hero with mouse + scroll parallax
- `CategoryMarquee.tsx` — infinite icon strip
- `StickyShowcase.tsx` — pinned phone + scrolling beats
- `NumberReveal.tsx` — huge counter band
- `TiltCollage.tsx` — floating items with mouse tilt
- `AuthPanel.tsx` — glass auth wrapper
- `MinimalFooter.tsx` — slim footer
- `MouseParallax.tsx` — reusable mouse-tracking wrapper hook

**Rewritten**:
- `src/pages/Landing.tsx` — imports only the new v2 components

**Kept** (still used by AuthPanel):
- `src/components/landing/AuthSection.tsx`

**Deprecated** (no longer imported, left in repo):
- Hero.tsx, AnimatedFeatures.tsx, HowItWorks.tsx, StatsCounter.tsx, Testimonials.tsx, CTABanner.tsx, TrustBadges.tsx, Footer.tsx, ParallaxSection.tsx, ParallaxDivider.tsx

### Text Content (intentionally minimal)

- Hero headline: 3 words (e.g. "Swap. Match. Smile.")
- Hero subline: 1 short sentence
- Showcase: 3 × (2-word title + 6-word description)
- Number band: 3 stats, no labels longer than 1 word
- Auth panel: "Start" + AuthSection
- All copy via `t()`, added to `en` / `fr` / `ar`

### Tech Notes

- Uses existing `framer-motion` (no new deps)
- Uses existing design tokens from `index.css` / `tailwind.config.ts`
- `useReducedMotion()` everywhere
- Lazy-loaded images with `loading="lazy"` on collage
- Section-scoped `useScroll({ target, offset })` to avoid global scroll jank

