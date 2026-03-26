

## Plan: Restyle View/Edit Overlay Icons

### Changes — `src/components/profile/ProfileItemsGrid.tsx`

Lines 148-162: Replace the current horizontal layout with circular-background buttons with a vertical layout using plain white icons (no background circle).

- Change container from `flex-row gap-6` to `flex-col gap-4` (vertical: Eye on top, Pencil below)
- Remove `rounded-full bg-background/90` wrapper — make buttons transparent with just white icons
- Change icon color to `text-white` and add `hover:opacity-70` for feedback

### Files Modified
- `src/components/profile/ProfileItemsGrid.tsx`

