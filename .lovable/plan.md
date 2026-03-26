

## Plan: Enhance Photo Viewer UX with Zoom Icon, Exit Button, and Swipe Dots

### Changes

**1. `src/components/discover/ItemDetailsSheet.tsx`**
- Add a small `ZoomIn` icon overlay on the bottom-right of the gallery image to signal tap-to-enlarge

**2. `src/components/discover/PhotoViewerModal.tsx`**
- The X close button already exists — no change needed there
- Add dot indicators (small circles) below the image showing which photo is active, allowing tap-to-jump navigation
- Add touch swipe support: track `touchstart`/`touchend` X positions, swipe left = next, swipe right = prev

### Files Modified
- `src/components/discover/ItemDetailsSheet.tsx`
- `src/components/discover/PhotoViewerModal.tsx`

