

## Plan: Complete Google Login via Lovable Cloud

### Problem
The current code in `AuthSection.tsx` and `Auth.tsx` calls `supabase.auth.signInWithOAuth({ provider: 'google' })` directly. Lovable Cloud requires using the managed `lovable.auth.signInWithOAuth("google", ...)` function instead, which handles OAuth credentials automatically.

### Steps

**1. Install `@lovable.dev/cloud-auth-js` package and generate the Lovable integration module**

This creates `src/integrations/lovable/index.ts` which exports the `lovable` client with managed OAuth support.

**2. Update `src/components/landing/AuthSection.tsx`**

Replace the Google sign-in handler:
```tsx
// Before
import { supabase } from '@/integrations/supabase/client';
const { error } = await supabase.auth.signInWithOAuth({
  provider: 'google',
  options: { redirectTo }
});

// After
import { lovable } from '@/integrations/lovable/index';
const result = await lovable.auth.signInWithOAuth("google", {
  redirect_uri: window.location.origin,
});
if (result.error) { /* show toast */ return; }
if (result.redirected) { return; }
navigate('/onboarding');
```

**3. Update `src/pages/Auth.tsx`**

Same change — replace `supabase.auth.signInWithOAuth` with `lovable.auth.signInWithOAuth`.

### Files Modified
- `package.json` — add `@lovable.dev/cloud-auth-js`
- `src/integrations/lovable/index.ts` (generated)
- `src/components/landing/AuthSection.tsx`
- `src/pages/Auth.tsx`

