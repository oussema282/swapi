

## Plan: Stack Action Buttons Vertically in ItemDetailsSheet

### Problem
The "View on Map" and "Send Deal Invitation" buttons are side-by-side (`flex` row), which makes them cramped on mobile.

### Change
In `src/components/discover/ItemDetailsSheet.tsx` (line 244), change the actions container from `flex gap-3` (horizontal) to `flex flex-col gap-3` (vertical), so buttons stack one over the other. Each button stays `flex-1` width (full).

### Files Modified
- `src/components/discover/ItemDetailsSheet.tsx` — change line 244 from `flex gap-3` to `flex flex-col gap-3`

