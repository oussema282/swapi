
Fix the gift marker positioning bug in `src/pages/MapView.tsx`.

### What’s wrong
The gift marker is using `animation: float-marker ...` on the same element passed to `new mapboxgl.Marker(el)`. Mapbox positions markers with `transform` on that element too, so the animation overrides Mapbox’s transform and the marker appears stuck to the page instead of the map.

### Implementation plan
1. Keep the outer marker element purely for Mapbox positioning
- Remove the floating animation from the outer `el`
- Keep only size/cursor/basic layout there

2. Add an inner visual wrapper for the gift UI
- Create a child `giftCard` inside `el`
- Move the golden frame, glow, border radius, and floating animation onto `giftCard`
- Keep the photo wrapper and gift badge inside `giftCard`

3. Preserve coordinate anchoring
- Continue calling `.setLngLat([item.longitude, item.latitude])` on the marker
- Let Mapbox own the outer element transform
- Let the inner child animate independently with its own transform

4. Keep regular markers unchanged
- Only refactor the `isGift` branch
- Normal circular item markers stay as they are

5. Verify badge/layout structure
- Ensure the corner gift badge remains absolutely positioned relative to the animated inner wrapper
- Keep `overflow: visible` only where needed so the badge is visible without affecting anchor positioning

### Expected result
Gift markers will:
- stay attached to their real map coordinates
- float visually without drifting
- remain clearly different with the golden rectangular frame and corner gift icon

### Files to update
- `src/pages/MapView.tsx`

### Technical note
This is a classic transform conflict: Mapbox uses `transform` for marker placement, and CSS animation also uses `transform`. The fix is to animate a nested child, not the marker root.
