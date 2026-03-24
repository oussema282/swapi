

## Plan: Manual Item Location Picker

Currently, item location is auto-set from the user's profile GPS coordinates (via a DB trigger `set_item_location_from_profile`). This leaks the user's real location. The fix: let users manually pick a location on a map when creating/editing items.

### Changes

**1. Create a reusable `LocationPickerMap` component**
- New file: `src/components/items/LocationPickerMap.tsx`
- Renders a Mapbox map with a draggable pin marker
- Props: `latitude`, `longitude`, `onChange(lat, lng)`, optional initial center
- Shows a "Choisir l'emplacement" label and crosshair/pin at center
- User taps the map or drags the pin to set the item location
- Fetches Mapbox token from the existing `get-mapbox-token` edge function

**2. Add location step to NewItem wizard**
- Modify `src/pages/NewItem.tsx`
- Add Step 5: "Emplacement" (Location) after swap preferences (update STEPS array to 5 steps)
- Render `LocationPickerMap` — user must place the pin before finishing
- Add `latitude`/`longitude` state, pass them to `createItem.mutateAsync()`
- Default center: user's current GPS (from browser geolocation) as a starting point, but the pin is what gets saved

**3. Add location section to EditItem page**
- Modify `src/pages/EditItem.tsx`
- Add a new Card section with `LocationPickerMap` pre-filled with `item.latitude`/`item.longitude`
- User can drag the pin to a new location
- Pass updated `latitude`/`longitude` in the `updateItem.mutateAsync()` call

**4. Remove auto-location from DB trigger**
- Database migration: drop the `set_item_location_from_profile` trigger on the `items` table so the server no longer overwrites client-provided coordinates
- The trigger function can remain but won't fire

**5. Update `useCreateItem` hook**
- Already accepts `latitude`/`longitude` — no change needed there, just ensure NewItem passes them

### Technical Details
- Mapbox GL JS is already used in `MapView.tsx` — reuse the same pattern for token fetching
- The map component will use `mapbox-gl` `Marker` with `draggable: true`
- On map click or marker dragend, update parent state via `onChange`
- Location is required in NewItem (can't proceed without placing pin); optional change in EditItem

