

## Plan: Make Fullscreen Photo Close Button Always Visible

### Problem
The close (X) button in the fullscreen photo viewer is not visible on mobile. It sits at `top-4 right-4` but may be clipped by safe area insets or lost against the image background on the 407px viewport.

### Changes

**`src/components/discover/PhotoViewerModal.tsx`**
- Move the close button to use `top-6 right-4` with `safe-area-inset` padding to avoid notch/status bar overlap
- Make the button more prominent: larger size (`w-14 h-14`), stronger background (`bg-black/80`), and a visible white border (`border-2 border-white/30`) so it stands out against any image
- Increase icon size to `w-7 h-7` for better tap target visibility

### Files Modified
- `src/components/discover/PhotoViewerModal.tsx`

