

## Plan: Fix Gift Marker Image Bleeding Over Golden Frame

### Root Cause

When `overflow: visible` was set on the gift marker (to show the corner badge), the full-bleed image (`width: 100%; height: 100%`) now overflows the container's rounded corners and covers the golden border. The golden frame is there but invisible — buried under the photo.

### Fix — `src/pages/MapView.tsx`

In the image creation block (lines 312-317), when the item is a gift, apply `border-radius` to the image to match the container's inner radius, and add slight inset sizing so the golden border remains visible:

- For gift markers: set the image style to `border-radius: 3px` (inner radius of the 6px container minus the 3px border) so corners match
- Wrap the image in a div with `overflow: hidden; border-radius: 3px; width: 100%; height: 100%` to clip the image within the golden frame
- Keep the outer container `overflow: visible` so the gift badge at the corner remains visible

### Result
- Golden 3px border fully visible around the rectangular photo
- Rounded corners on the image match the frame
- Gift badge at bottom-right corner still visible (not clipped)
- Floating animation still works

### Files Modified
- `src/pages/MapView.tsx`

