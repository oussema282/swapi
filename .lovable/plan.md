

## Plan: Upgrade Gift Map Markers — Floating Rectangle with Corner Gift Icon

### Problem
Current gift markers look like slightly larger squares sitting flat on the map. The user wants a more distinctive floating rectangular frame with the gift icon at the corner.

### Changes — `src/pages/MapView.tsx`

**Lines 272-329**: Replace current gift marker styling and gift badge with:

1. **Rectangular shape** — wider than tall (e.g. 56×44px) to look distinctly rectangular vs circular regular markers
2. **Golden frame** — 3px solid `#facc15` border, rounded corners (6px)
3. **Floating effect** — elevated shadow with golden tint + subtle CSS animation (`translateY` bounce) to appear floating over the map
4. **Gift icon at bottom-right corner** — small golden circle with white gift SVG icon, positioned at the corner of the frame overlapping the border
5. **Add a CSS `@keyframes float-marker` animation** to the marker element for a gentle up-down float

### Marker structure
```text
┌──────────────────┐  ← golden border (3px #facc15)
│                  │
│   item photo     │  ← 56×44px, border-radius: 6px
│                  │
└──────────────────┘
              🎁      ← gift icon badge at bottom-right corner
```

The floating animation uses inline CSS `animation: float-marker 3s ease-in-out infinite` with keyframes injected once via a style tag.

### Files Modified
- `src/pages/MapView.tsx`

