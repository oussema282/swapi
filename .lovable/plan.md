

## Plan: Upgrade Upload Icon to Arrow-Up Indicator

### Change

Replace the `Plus` icon in the SwipeTopBar upload button with an `Upload` (arrow pointing up) icon from lucide-react. This better communicates "upload an item."

### Details — `src/components/discover/SwipeTopBar.tsx`

- Replace `Plus` import with `Upload` from `lucide-react`
- Swap `<Plus className="w-5 h-5 text-primary" />` with `<Upload className="w-5 h-5 text-primary" />`

### Files Modified
- `src/components/discover/SwipeTopBar.tsx`

