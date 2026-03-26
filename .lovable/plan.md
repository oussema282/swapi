

## Plan: Fix Aggressive Session Invalidation Causing Random Logouts

### Root Cause
The `validateSession` function in `useAuth.tsx` runs on **every** `onAuthStateChange` event. When it encounters a transient `getUser` error (like "Refresh Token Not Found" — common in preview iframes and during token rotation), it calls `supabase.auth.signOut()`, forcefully logging the user out. This then causes all in-flight mutations (swipes, etc.) to fail with "Not authenticated".

### Changes — `src/hooks/useAuth.tsx`

1. **Remove `validateSession` from `onAuthStateChange` callback** — The auth state change listener already receives valid session data from Supabase's internal token management. Validating inside the callback creates a race condition where a stale token triggers logout before auto-refresh completes.

2. **Only validate on initial load** — Keep `validateSession` in the `getSession().then()` block for the initial bootstrap, but make it more lenient:
   - Only sign out if the error is specifically `session_not_found` or `user_not_found`
   - Ignore `refresh_token_not_found` errors — Supabase's auto-refresh handles these automatically
   - Add a guard so that if `onAuthStateChange` has already fired with a valid session by the time `getSession` validates, skip the validation

3. **Handle `TOKEN_REFRESHED` and `SIGNED_OUT` events properly** — Only clear state on explicit `SIGNED_OUT` events, not on transient errors

### Result
- Users stay logged in through token rotations and preview iframe reloads
- Swipe errors ("Not authenticated") stop occurring because the session persists
- Explicit sign-outs (user clicks logout, admin bans) still work correctly

### Files Modified
- `src/hooks/useAuth.tsx`

