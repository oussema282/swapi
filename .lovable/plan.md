

## Plan: Open ItemDetailsSheet When Clicking Map Markers

### Problem
Currently, clicking a map marker shows a small inline Card with minimal info. The user wants the full `ItemDetailsSheet` (same as swipe cards) with all details — photos, description, stats, owner info, deal invite — except "View on Map" since they're already on the map.

### Changes

**1. `src/pages/MapView.tsx`**
- Import `ItemDetailsSheet` from `@/components/discover/ItemDetailsSheet`
- Add `owner_is_pro` to the `ItemWithOwner` interface (fetch from profiles query)
- Update the profiles query to also fetch `is_pro` from profiles
- Add a `showDetailsSheet` boolean state
- When a marker is clicked → set `selectedItem` AND open the details sheet
- Replace the inline `<Card>` popup with `<ItemDetailsSheet>` component
- Pass `onViewOnMap={undefined}` (or omit the prop) so the "View on Map" button doesn't render — user is already on the map
- Keep the `DealInviteButton` functionality via `onInviteDeal` prop
- Pass `userLocation` for distance calculation

**2. `src/components/discover/ItemDetailsSheet.tsx`**
- The "View on Map" button already conditionally renders only when `item.latitude && item.longitude` exist — add an additional check: hide the button when `hideMapButton` prop is true
- Add optional `hideMapButton?: boolean` prop to `ItemDetailsSheetProps`

### Files Modified
- `src/pages/MapView.tsx`
- `src/components/discover/ItemDetailsSheet.tsx`

