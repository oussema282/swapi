

## Plan: Add Dark/Light Theme Toggle with Premium Dark Luxury Theme

### Overview
Wire up `next-themes` (already installed) to enable theme switching. Replace the current generic `.dark` CSS variables with the Premium Dark Luxury palette. Add a theme toggle to the Settings page.

### Changes

**1. `src/App.tsx` — Wrap app with ThemeProvider**
- Import `ThemeProvider` from `next-themes`
- Wrap the app content inside `<ThemeProvider attribute="class" defaultTheme="light" storageKey="app-theme">`

**2. `src/index.css` — Replace `.dark` CSS variables with Premium Dark Luxury palette**
Replace all dark mode variables with the new design identity:
- `--background`: 0 0% 2% (#050505 Deep Obsidian)
- `--foreground`: 0 0% 100% (Pure White)
- `--card`: 0 0% 5% (#0d0d0d Elevated Matte Black)
- `--surface`: 0 0% 7% (#111)
- `--primary`: 48 97% 54% (#facc15 Vibrant Gold)
- `--primary-foreground`: 0 0% 2% (dark text on gold)
- `--secondary`: 46 92% 45% (#eab308 Antique Gold tinted)
- `--accent`: 142 71% 45% (#22c55e Emerald Green)
- `--destructive`: 0 84% 60% (#ef4444 Ruby Red)
- `--muted`: 0 0% 10% (#1a1a1a Soft Charcoal)
- `--muted-foreground`: 0 0% 40% (Muted Silver)
- `--border`: 0 0% 6% (ultra-thin subtle white/6%)
- `--ring`: 48 97% 54% (Gold)
- Update all shadow variables with gold-tinted glows
- Update gradient variables with gold-based gradients

**3. `src/pages/Settings.tsx` — Add Theme Toggle**
- In the existing settings UI, add a "Theme" / "Appearance" row with a Sun/Moon toggle button or switch
- Import `useTheme` from `next-themes`, use `setTheme` to toggle between `"light"` and `"dark"`
- Place it in the profile or privacy tab as an appearance setting

**4. `src/components/layout/BottomNav.tsx` (optional)** — If there's space, add a small theme toggle icon in the nav or settings page shortcut

### Technical Notes
- `next-themes` is already in `package.json` — no new dependencies
- `tailwind.config.ts` already has `darkMode: ["class"]` — compatible with next-themes
- The `sonner.tsx` component already uses `useTheme` — it will work automatically once ThemeProvider is added

### Files Modified
- `src/App.tsx`
- `src/index.css`
- `src/pages/Settings.tsx`

