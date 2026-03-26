

## Plan: Add Blur Overlay with View/Edit Options on Own Profile Items

### Current Behavior
When tapping an item on your own profile, it navigates directly to the edit page (`/items/${item.id}/edit`).

### New Behavior
Tapping an item on your own profile will:
1. Blur the tapped item photo
2. Show two icon buttons overlaid on top: **Eye** (view full photo in PhotoViewerModal) and **Pencil** (navigate to edit page)
3. Tapping outside or tapping the same item again dismisses the overlay

### Changes — `src/components/profile/ProfileItemsGrid.tsx`

1. Add `activeItemId` state to track which item is "selected" (showing the blur + options)
2. Change `handleItemClick` for own profile:
   - If item is already active → deselect it
   - If item is not active → set it as active (show blur + icons)
3. Add a blur overlay with two centered icon buttons when `activeItemId === item.id`:
   - **Eye icon** → opens `PhotoViewerModal` with that item's photos
   - **Pencil icon** → navigates to `/items/${item.id}/edit`
4. Import `PhotoViewerModal` and add state for controlling it (`viewerOpen`, `viewerPhotos`)
5. Import `Eye` and `Pencil` icons from lucide-react

### Files Modified
- `src/components/profile/ProfileItemsGrid.tsx`

