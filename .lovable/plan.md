

## Plan: Add 6 Default Cartoon Animal Avatars for Users Without Profile Pictures

### Approach

Use 6 cartoon male animal avatar illustrations hosted as static SVGs in `src/assets/avatars/`. Each user without an `avatar_url` gets a deterministic avatar based on a hash of their `user_id`, ensuring the same user always sees the same default avatar.

### 1. Create 6 SVG avatar files

Create `src/assets/avatars/` with 6 inline SVG files — simple cartoon male animals:
- `lion.svg` — golden lion with mane
- `bear.svg` — brown bear
- `wolf.svg` — grey wolf
- `fox.svg` — orange fox
- `eagle.svg` — brown eagle
- `bull.svg` — dark bull

Each SVG will be a simple, clean cartoon head (64×64 viewBox), flat-color style matching the app's aesthetic.

### 2. Create avatar utility (`src/lib/defaultAvatars.ts`)

```tsx
import lion from '@/assets/avatars/lion.svg';
import bear from '@/assets/avatars/bear.svg';
// ... etc

const DEFAULT_AVATARS = [lion, bear, wolf, fox, eagle, bull];

export function getDefaultAvatar(userId: string): string {
  // Simple hash: sum char codes mod 6
  const hash = userId.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return DEFAULT_AVATARS[hash % DEFAULT_AVATARS.length];
}
```

### 3. Update all AvatarFallback usages

Replace the generic `<User />` icon fallback with the deterministic animal avatar image. Key files:

- **`src/pages/Profile.tsx`** — own profile header
- **`src/pages/UserProfile.tsx`** — other user's profile
- **`src/pages/Settings.tsx`** — settings avatar
- **`src/components/discover/SwipeCard.tsx`** — item owner avatar on cards
- **`src/components/chat/ChatHeader.tsx`** — chat partner avatar
- **`src/components/matches/ConversationCard.tsx`**, **`MatchCard.tsx`**, etc.

Pattern change in each file:
```tsx
// Before
<AvatarFallback><User className="w-8 h-8" /></AvatarFallback>

// After
<AvatarImage src={profile?.avatar_url || getDefaultAvatar(userId)} alt="Avatar" />
<AvatarFallback><User className="w-8 h-8" /></AvatarFallback>
```

The fallback only shows during image load. The `AvatarImage` always has a source — either the user's photo or the deterministic animal avatar.

### Files Modified
- `src/assets/avatars/` — 6 new SVG files
- `src/lib/defaultAvatars.ts` — new utility
- `src/pages/Profile.tsx`
- `src/pages/UserProfile.tsx`
- `src/pages/Settings.tsx`
- `src/components/discover/SwipeCard.tsx`
- `src/components/chat/ChatHeader.tsx`
- `src/components/matches/ConversationCard.tsx`
- `src/components/matches/MatchCard.tsx`
- `src/components/matches/InstantMatchCard.tsx`

