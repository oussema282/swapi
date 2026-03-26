

## Plan: Remove Login Success Toast

### Problem
When signing in, a toast banner appears saying "Welcome back! You have successfully signed in." — the user wants this removed.

### Changes — `src/pages/Auth.tsx`

Remove the toast notification block at lines ~68-73 that fires after successful sign-in. Keep the `navigate('/discover')` call so the user still gets redirected.

Also check `src/components/landing/AuthSection.tsx` lines ~83-88 which has the same "Welcome back" toast for sign-in from the landing page — remove that too.

### Files Modified
- `src/pages/Auth.tsx`
- `src/components/landing/AuthSection.tsx`

