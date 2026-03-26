
## Plan: Restore the fullscreen image exit button

### Root cause
The fullscreen photo modal currently uses this class on `DialogContent`:

```text
[&>button]:hidden
```

That hides every direct button inside the modal, including:
- the custom exit (X) button
- the left/right photo arrows

So the exit button is in the code, but CSS is hiding it.

### Implementation
**1. Update `src/components/ui/dialog.tsx`**
- Add an optional prop like `hideCloseButton?: boolean` to `DialogContent`
- Only render the default Radix close button when that prop is not set

**2. Update `src/components/discover/PhotoViewerModal.tsx`**
- Remove the broad `[&>button]:hidden` class
- Pass `hideCloseButton` to `DialogContent` so only the built-in close button is removed
- Keep the custom large close button visible in the top-right safe area
- Keep the left/right arrows visible for multi-photo items

### Result
After this fix, users will be able to:
- clearly see the exit icon in fullscreen
- close the image with the X button
- see the photo navigation arrows again
- still close by tapping outside / Escape

### Files to modify
- `src/components/ui/dialog.tsx`
- `src/components/discover/PhotoViewerModal.tsx`

### Technical note
This is better than using CSS to hide all buttons, because it fixes the current bug without risking other modal controls being hidden again.
