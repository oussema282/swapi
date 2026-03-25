

## Plan: Fix Phone Number UX and Translations

### Issues to Fix

1. **No save button visible** — The save button exists in EditProfile.tsx (line 300-315) but is in a fixed bottom bar. It may be hidden behind the bottom nav or scrolled out of view. Will add `pb-20` to content area to ensure it's always visible.

2. **Phone number editing should be on the Profile page itself** — User wants inline phone editing on the main Profile page (`/profile`), positioned between the bio and the Pro status card. Will add a compact phone input + visibility toggle directly on the Profile page that saves independently.

3. **Validation warning "Phone number must be 8 digits" is in English** — The translation key `editProfile.phoneNumberInvalid` is missing from all 3 locale files. Need to add it to EN, FR, and AR.

### Changes

**1. `src/pages/Profile.tsx`** — Add inline phone number editor between bio section and Pro card:
- Add phone input (8 digits, numeric only) and visibility Switch
- Add a small save button that updates just the phone fields
- Position it after the profile header (line 102) and before Pro status card (line 104)
- Import Phone, Switch, Input, Label from existing components

**2. `src/pages/EditProfile.tsx`** — Ensure save button is always reachable:
- Add `pb-24` padding to the scrollable content area so the save button at the bottom is never hidden

**3. Translation files** — Add missing `phoneNumberInvalid` key:
- EN: `"phoneNumberInvalid": "Phone number must be 8 digits"`
- FR: `"phoneNumberInvalid": "Le numéro doit contenir 8 chiffres"`
- AR: `"phoneNumberInvalid": "يجب أن يتكون رقم الهاتف من 8 أرقام"`

### Files Modified
- `src/pages/Profile.tsx`
- `src/pages/EditProfile.tsx`
- `src/locales/en/translation.json`
- `src/locales/fr/translation.json`
- `src/locales/ar/translation.json`

