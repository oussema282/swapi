

## Plan: Add Optional Phone Number to Profile with Visibility Toggle

### Overview
Add a phone number field to user profiles with a visibility switch. When visible, the number appears on the public profile page and as a green banner inside chat conversations with matched users.

### Changes

**1. Database Migration — Add 2 columns to `profiles` table**

```sql
ALTER TABLE public.profiles
  ADD COLUMN phone_number text DEFAULT NULL,
  ADD COLUMN phone_visible boolean DEFAULT false;
```

No new RLS policies needed — existing profile policies already handle select/update.

**2. Edit Profile Page (`src/pages/EditProfile.tsx`)**

After the bio field (line 249), add:
- Phone number input field with a `Phone` icon
- A Switch toggle labeled "Make phone visible to matches"
- Load `phone_number` and `phone_visible` from profile, save them in `handleSave`

**3. User Profile Page (`src/pages/UserProfile.tsx`)**

After the bio line (line 151), if `profile.phone_visible && profile.phone_number`:
- Show the phone number with a Phone icon, styled like the location row

**4. Chat Page (`src/pages/Chat.tsx`)**

Between the ChatHeader and the messages area (after line 103), fetch the other user's profile phone data. If `phone_visible && phone_number`:
- Render a banner: green background (`bg-green-500`), white bold text, centered, showing the phone number with a Phone icon
- Sits inside the chat container, above messages, always visible

**5. Update `useMatches.tsx`**

In the profiles query (line 65), add `phone_number, phone_visible` to the select. Extend `OtherUserProfile` interface to include these fields. Pass them through to `MatchWithItems`.

**6. Translation Keys (EN/FR/AR)**

Add to `editProfile` namespace:
- `phoneNumber`, `phoneNumberPlaceholder`, `phoneVisible`, `phoneVisibleDescription`

### Files Modified
- `profiles` table (migration)
- `src/pages/EditProfile.tsx`
- `src/pages/UserProfile.tsx`
- `src/pages/Chat.tsx`
- `src/hooks/useMatches.tsx`
- `src/locales/en/translation.json`
- `src/locales/fr/translation.json`
- `src/locales/ar/translation.json`

