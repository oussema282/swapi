
## Plan: Make Gift Markers Visibly Different on the Map

### What I found
The gift marker code is present in `src/pages/MapView.tsx`, but visually it can still look almost like a normal item because the main difference is only a thin border and small corner badge around a full photo. On a busy photo, the golden treatment is easy to miss.

There are also signs of incomplete cleanup:
- `ItemDetailsSheet.tsx` still uses `(item as any).is_gift`
- the gift badge is placed at the bottom-right, while your requested design was corner-attached and clearly noticeable
- the inner image still fills nearly the entire marker, so the frame does not stand out enough

### Proposed fix

**1. Strengthen the gift marker design in `src/pages/MapView.tsx`**
- Make gift markers clearly rectangular and larger than regular round markers
- Add a much thicker golden frame and stronger golden glow/shadow
- Inset the image so the border is always visible
- Move the gift badge to a more obvious corner placement
- Add a floating wrapper effect that is more visible than the current subtle animation
- Optionally add a small gold background/panel behind the image so the marker reads as “special” even before noticing the icon

**2. Separate outer frame from inner photo**
Refactor the marker DOM into:
```text
outer floating frame
└── inner clipped photo area
└── corner gift badge
```
This guarantees:
- the image never hides the frame
- the badge is never clipped
- the gift style stays visible on all photos

**3. Keep regular items unchanged**
- Regular markers remain circular
- Gift markers become obviously premium/special at a glance

**4. Clean up gift type usage**
In `src/components/discover/ItemDetailsSheet.tsx`:
- replace remaining `(item as any).is_gift` checks with `item.is_gift`
This keeps gift behavior consistent and avoids fragile casts

### Expected result
Gift items on the map will no longer look similar to normal items. They will appear as:
- clearly rectangular
- golden framed
- floating above the map
- with a visible gift icon attached to the frame corner

### Files to update
- `src/pages/MapView.tsx`
- `src/components/discover/ItemDetailsSheet.tsx`

### Technical notes
Main issue is not missing logic anymore; it is weak visual contrast. The next implementation should emphasize structure:
- outer frame for styling
- inner wrapper for image clipping
- separate badge layer for the icon
- stronger size, border, and shadow contrast vs normal markers
