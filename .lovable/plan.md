

## Plan: Full App Redesign — Premium Dark Luxury Theme

### Overview
Replace the current soft neo-minimal light theme with a dark luxury / high-stakes aesthetic across the entire app. Gold accents on deep obsidian backgrounds, aggressive rounded corners, monospace data styling, radial gold glows, and glassmorphism.

### Phase 1: Design System Foundation (3 files)

**`src/index.css`** — Rewrite all CSS variables:
- `:root` and `.dark` both use the dark luxury palette (dark-first design)
- `--background: #050505`, `--surface: #0d0d0d`, `--card: #1a1a1a`
- `--primary: gold (#facc15)`, `--accent: emerald (#22c55e)`, `--destructive: ruby (#ef4444)`
- `--foreground: #ffffff`, `--muted-foreground: rgba(255,255,255,0.4)`
- `--border: rgba(255,255,255,0.06)`
- Update all shadow variables to gold-tinted glows
- Update gradient variables to gold/dark gradients
- Add new keyframes: marquee ticker, gold radial pulse
- Update `.glass-card` to dark glassmorphism (black/80 + blur)

**`tailwind.config.ts`** — Update:
- `fontFamily`: keep Inter but add monospace for data displays
- `borderRadius`: increase defaults (lg → 2rem, xl → 2.5rem for aggressive rounding)
- Add `letterSpacing` utilities for the uppercase tracking-[0.3em] label style
- Update `boxShadow` presets with gold-tinted glows
- Add `backgroundImage` for radial gold glow utility

**`src/App.css`** — Add global dark body styles, ensure no light-mode overrides remain

### Phase 2: Core UI Components (6 files)

**`src/components/ui/button.tsx`**:
- Default variant: gold bg, black text, heavy drop-shadow
- Secondary: ghost-border with 5% white fill, rounded-2xl
- Destructive: ruby red

**`src/components/ui/card.tsx`**:
- `rounded-[2rem]` border-radius, `bg-card` (now #1a1a1a), ultra-thin white/6% border
- Hover state: scale 1.02 transform

**`src/components/ui/input.tsx`**:
- Dark bg (#0d0d0d), subtle white/6% border, gold focus ring

**`src/components/ui/badge.tsx`**:
- Gold accent for premium badges, dark surface bg for standard

**`src/components/layout/BottomNav.tsx`**:
- Dark glassmorphism bar (bg-black/80, backdrop-blur-xl)
- Gold center button instead of purple
- Gold active indicators

**`src/components/layout/AppLayout.tsx`**:
- Ensure bg-background propagates the dark base

### Phase 3: Landing Page (8 files)

**`src/components/landing/Hero.tsx`**:
- Gold gradient text instead of purple
- Dark background with radial gold glow behind headline
- Update button to gold pill-shape

**`src/components/landing/TrustBadges.tsx`**: Gold-tinted text, dark bg

**`src/components/landing/FeatureShowcase.tsx`**: Dark cards with gold accents, hover scale effects

**`src/components/landing/FeatureCards.tsx`**: Bento grid with dark surface cards, gold icon highlights

**`src/components/landing/Testimonials.tsx`**: Dark cards, gold stars, muted silver text

**`src/components/landing/Pricing.tsx`**: Dark cards, gold "Popular" badge, gold CTA buttons

**`src/components/landing/HowItWorks.tsx`**: Gold step numbers, dark background

**`src/components/landing/Footer.tsx`**: Deep black bg, muted silver links, gold brand accent

### Phase 4: Auth & Core Pages (8 files)

**`src/pages/Auth.tsx`**: Dark animated gradient bg (gold/black), glassmorphism card, gold CTAs

**`src/pages/Profile.tsx`**: Dark card surfaces, gold Pro badge, dark avatar ring

**`src/pages/Settings.tsx`**: Dark tabs, dark cards, gold active states

**`src/pages/Matches.tsx`**: Dark match cards, gold highlights

**`src/pages/Chat.tsx`**: Dark message bubbles (gold for sent, charcoal for received), dark container

**`src/pages/Search.tsx`**: Dark search bar, dark result cards

**`src/pages/Items.tsx`**: Dark item cards with gold price tags

**`src/pages/EditProfile.tsx`**: Dark form fields, gold save button

### Phase 5: Discover & Detail Components (6 files)

**`src/components/discover/SwipeCard.tsx`**: Dark overlay gradients, gold like indicator, dark info sections

**`src/components/discover/SwipeActions.tsx`**: Gold like button, dark nope button

**`src/components/discover/ItemDetailsSheet.tsx`**: Dark sheet with gold accents

**`src/components/discover/MatchModal.tsx`**: Dark modal with gold confetti/celebration

**`src/components/matches/MatchCard.tsx`**: Dark cards with subtle gold borders

**`src/components/chat/MessageBubble.tsx`**: Gold sent messages, charcoal received

### Phase 6: Remaining Pages & Components (~10 files)

- `UserProfile.tsx`, `MapView.tsx`, `NewItem.tsx`, `EditItem.tsx`, `Checkout.tsx`, `Recharge.tsx`
- Admin pages: Update sidebar/header to dark theme with gold accents
- Subscription modals: Gold upgrade CTAs
- All remaining components using hardcoded light colors

### Technical Notes
- The redesign is primarily CSS-variable driven — changing `src/index.css` handles ~70% of the work
- Component-level changes focus on hardcoded colors (e.g., `bg-white`, `text-gray-*`, `bg-purple-*`) that bypass CSS variables
- No functionality changes, only visual
- Existing framer-motion animations are preserved and enhanced
- All i18n remains unchanged

### Files Modified
~30+ files total across all phases, executed incrementally

