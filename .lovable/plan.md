

## Plan: Redesign Landing Page — Short, Modern, Auth at Top

### Overview
Completely restructure the landing page to be short and impactful: auth form at the top (hero area), a compact animated feature showcase below, and a minimal footer. Match the browser/mobile status bar color to the page background. Remove bulky sections (FeatureShowcase, FeatureCards, Features, HowItWorks, Pricing, Newsletter) and keep only what matters.

### New Page Structure

```text
┌─────────────────────────────┐
│  Navbar (logo + lang switch)│
├─────────────────────────────┤
│  Hero + Auth (side by side) │
│  Left: headline + tagline   │
│  Right: sign in/up card     │
├─────────────────────────────┤
│  Animated feature banner    │
│  (auto-sliding cards)       │
├─────────────────────────────┤
│  Trust badges (compact)     │
├─────────────────────────────┤
│  Testimonials (carousel)    │
├─────────────────────────────┤
│  Footer (minimal)           │
└─────────────────────────────┘
```

On mobile: stacks vertically — headline first, then auth card below, then features.

### 1. `index.html` — Theme color meta tags

Add `<meta name="theme-color">` and `<meta name="apple-mobile-web-app-status-bar-style">` to match the background color (`#ffffff` light / `#09090b` dark). This makes the browser bar and mobile status bar match the page.

```html
<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#09090b" media="(prefers-color-scheme: dark)">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
```

### 2. `src/pages/Landing.tsx` — Simplified layout

Remove most section imports. New structure:
- `LandingNav` (new inline component — logo + language switcher)
- Hero section with auth card integrated (no separate AuthSection)
- `AnimatedFeatures` (new — auto-sliding feature banner)
- `TrustBadges` (kept, made more compact)
- `Testimonials` (kept)
- `Footer` (kept)

### 3. `src/components/landing/Hero.tsx` — Redesign with integrated auth

The Hero now contains two columns:
- **Left**: Animated gradient headline, short tagline, subtle floating shapes
- **Right**: The AuthSection card (sign in/up tabs + Google button)

On mobile (< lg): stacks vertically with headline first, auth card second.

Uses framer-motion staggered animations for entrance. Background has subtle animated gradient blobs.

### 4. New: `src/components/landing/AnimatedFeatures.tsx`

An auto-sliding horizontal banner that cycles through 4-5 feature highlights with icons. Uses framer-motion `AnimatePresence` for smooth slide transitions. Each slide shows an icon, title, and one-line description. Auto-advances every 4 seconds with dot indicators.

All text uses `t()` translation keys.

### 5. `src/components/landing/AuthSection.tsx` — Adapt for embedding

Make it accept an optional `embedded` prop that removes the outer `<section>` wrapper and title, so it can be placed directly inside the Hero without its own section padding and heading.

### 6. Translation keys

Add new keys to `en/translation.json`, `fr/translation.json`, `ar/translation.json` for the animated feature slides (4-5 short feature titles and descriptions).

### 7. Sections removed from Landing
- `FeatureShowcase`
- `FeatureCards`
- `Features`
- `HowItWorks`
- `Pricing`
- `Newsletter`

These component files remain in the codebase (not deleted) but are no longer imported.

### Files Modified/Created
- `index.html` — theme-color meta tags
- `src/pages/Landing.tsx` — simplified structure
- `src/components/landing/Hero.tsx` — redesigned with embedded auth
- `src/components/landing/AuthSection.tsx` — add embedded mode
- `src/components/landing/AnimatedFeatures.tsx` (new)
- `src/components/landing/TrustBadges.tsx` — compact styling
- `src/locales/{en,fr,ar}/translation.json` — new feature slide keys

