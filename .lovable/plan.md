

## Plan: Ensure Default Avatar Appears Everywhere

### Problem
The `ItemDetailsSheet` and `Search` page use raw `<img>` tags with letter-initial fallbacks instead of `getDefaultAvatar()`. The `EditProfile` page also lacks the default avatar fallback.

### Changes

**1. `src/components/discover/ItemDetailsSheet.tsx` (lines 239-248)**
- Import `getDefaultAvatar` from `@/lib/defaultAvatars`
- Replace the manual `<img>` + letter fallback with an `<img>` that always has a src — either `owner_avatar_url` or `getDefaultAvatar(item.user_id)`

**2. `src/pages/Search.tsx`**
- Import `getDefaultAvatar`
- Line ~548: Add default avatar to user suggestion: `src={suggestion.userData?.avatarUrl || getDefaultAvatar(suggestion.userData?.userId || '')}`
- Line ~799: Add default avatar to profile list: `src={profile.avatar_url || getDefaultAvatar(profile.user_id)}`
- Line ~883: Replace the manual `<img>` + letter fallback for item owner with: `src={item.owner_avatar_url || getDefaultAvatar(item.user_id)}`

**3. `src/pages/EditProfile.tsx`**
- Import `getDefaultAvatar`
- Use `avatarUrl || getDefaultAvatar(user.id)` as the AvatarImage src

### Files Modified
- `src/components/discover/ItemDetailsSheet.tsx`
- `src/pages/Search.tsx`
- `src/pages/EditProfile.tsx`

