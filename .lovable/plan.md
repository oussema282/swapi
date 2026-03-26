

## Plan: Fullscreen Photo Viewer on Tap in ItemDetailsSheet

### Overview
When the user taps a photo in the ItemDetailsSheet gallery, open a fullscreen modal overlay showing the image at its real size with pinch-to-zoom support and swipe navigation between photos.

### Changes

**1. New component: `src/components/discover/PhotoViewerModal.tsx`**
- A fullscreen Dialog overlay (dark backdrop) showing the tapped photo
- `object-contain` so the full image is visible without cropping
- Left/right navigation arrows if multiple photos
- Photo counter indicator (1/4)
- Tap backdrop or X button to close
- Props: `open`, `onOpenChange`, `photos: string[]`, `initialIndex: number`

**2. `src/components/discover/ItemDetailsSheet.tsx`**
- Add `fullscreenPhotoOpen` state and `fullscreenStartIndex` state
- Make the gallery image clickable — wrap with a button/div with `onClick` that opens the fullscreen viewer at `currentPhotoIndex`
- Render `<PhotoViewerModal>` at the bottom of the component
- Add `cursor-pointer` to the image for visual affordance

### Files Modified
- `src/components/discover/PhotoViewerModal.tsx` (new)
- `src/components/discover/ItemDetailsSheet.tsx`

