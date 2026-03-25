## Plan: Fix Phone Number Display on User Profile and Chat

### Problem

The `UserProfile.tsx` page casts profile fields with `(profile as any)` which is unnecessary since the database types already include `phone_number` and `phone_visible`. While this shouldn't cause a runtime bug, cleaning it up ensures type safety. The actual data flow is correct -- if phone numbers still don't show, it means the other user hasn't enabled visibility.

### Changes

**File: `src/pages/UserProfile.tsx**`

Remove the `(profile as any)` casts on lines 152-156 and use the typed profile directly:

- `(profile as any).phone_visible` → `profile.phone_visible`
- `(profile as any).phone_number` → `profile.phone_number`

This is a minor cleanup. The feature should already work if the other user has set their phone number and toggled visibility on.

make the phone number 8 digits only acceptable 

and make a banner for the phone number in messages section floating with green background and white fonts bold

### Verification Steps

To confirm the feature works:

1. Log into a second account
2. Go to Edit Profile, add a phone number, toggle "Make phone visible" ON, save
3. From the first account, visit that user's profile -- number should appear below bio
4. Open a chat with that user -- green banner should appear above messages

### Files Modified

- `src/pages/UserProfile.tsx`