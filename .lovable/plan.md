

## Plan: Gender-Specific Default Avatars

### Approach

Update the avatar system to maintain two pools: 3 male avatars and 3 female avatars. The `getDefaultAvatar` function gets an optional `gender` parameter. Male users pick from male pool, female from female pool, unspecified defaults to male pool.

### 1. Generate 6 new avatar images

Use the AI image model to generate 3 distinctly male and 3 distinctly female pixel art portrait avatars (same style as current ones). Save as:
- `src/assets/avatars/male1.png`, `male2.png`, `male3.png`
- `src/assets/avatars/female1.png`, `female2.png`, `female3.png`

Delete the old `avatar1.png` through `avatar6.png`.

### 2. Update `src/lib/defaultAvatars.ts`

```ts
import male1 from '@/assets/avatars/male1.png';
// ... etc
const MALE_AVATARS = [male1, male2, male3];
const FEMALE_AVATARS = [female1, female2, female3];

export function getDefaultAvatar(userId: string, gender?: string | null): string {
  const hash = userId.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const pool = gender === 'female' ? FEMALE_AVATARS : MALE_AVATARS;
  return pool[hash % pool.length];
}
```

### 3. Update call sites to pass gender

Key files where profile/gender data is available:

- **`src/pages/Profile.tsx`** — has `profile.gender` → pass it
- **`src/pages/UserProfile.tsx`** — has `profile.gender` → pass it
- **`src/pages/Settings.tsx`** — has profile data → pass gender
- **`src/pages/EditProfile.tsx`** — has profile data → pass gender
- **`src/components/discover/SwipeCard.tsx`** — has item owner data, need to check if gender is available
- **`src/components/discover/ItemDetailsSheet.tsx`** — has owner data
- **`src/components/chat/ChatHeader.tsx`** — may not have gender, will default to male
- **`src/components/matches/MatchCard.tsx`** — has `other_user_profile`, check for gender
- **`src/components/matches/ConversationCard.tsx`** — similar
- **`src/pages/Search.tsx`** — profile objects have gender field
- **`src/pages/Onboarding.tsx`** — has gender state

Where gender is not available (e.g. ChatHeader with only matchId), the function defaults to male pool — acceptable fallback.

### Files Modified
- `src/assets/avatars/` — delete 6 old PNGs, create 6 new gender-specific PNGs
- `src/lib/defaultAvatars.ts` — gender-aware selection
- ~10 component/page files — add gender param to `getDefaultAvatar()` calls where profile data is accessible

