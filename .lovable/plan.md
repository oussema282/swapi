

## Plan: Upgrade Regular Item Markers to Rectangular Shape with Exchange Icon

### Changes — `src/pages/MapView.tsx`

**Regular markers (lines 292-304)**: Replace the circular 40×40 style with a rectangular shape matching the gift marker dimensions but with a neutral frame:

- Size: 64×48px rectangular (slightly smaller than gift's 72×56)
- Border-radius: 8px (rounded rectangle, not circle)
- Border: 3px solid `hsl(var(--border))` — neutral frame instead of golden
- No floating animation, no glow
- `overflow: visible` on outer element to show corner badge

**Regular marker image (lines 361-366)**: Wrap in the same inner structure as gifts:
- Inner wrapper div with `overflow: hidden; border-radius: 4px` to clip the photo within the frame
- Image fills the wrapper with `object-fit: cover`

**Add exchange icon badge** at bottom-right corner (same position as gift badge):
- 22×22px circle with `hsl(var(--primary))` background
- White `repeat` (loop/exchange) SVG icon inside — the Lucide `Repeat2` icon path
- Border: 2px solid `hsl(var(--background))`
- Small box-shadow for depth

### Result
- Regular items: static rectangular photo with neutral border + exchange loop icon at corner
- Gift items: floating rectangular photo with golden gradient border + gift icon at corner
- Both use same structural pattern but are visually distinct

### Files Modified
- `src/pages/MapView.tsx`

