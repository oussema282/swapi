

## Plan: Post-Signup Onboarding Flow

### Overview

After signup (name + email + password), the user is logged in immediately but redirected to a new `/onboarding` page instead of `/discover`. This page is a multi-step wizard that collects: phone number, birthday, gender, profile picture (or default avatar selection), then requires uploading at least one item. The user cannot access the rest of the app until onboarding is complete.

### How it works

**Completion tracking**: Add two columns to `profiles` table — `birthday` (date, nullable), `gender` (text, nullable). A profile is "onboarding complete" when `phone_number`, `birthday`, and `gender` are all non-null. The item requirement is checked client-side (user must have >= 1 item).

**Routing gate**: A new `OnboardingGate` component wraps authenticated routes. It checks if the profile is incomplete or if the user has zero items — if so, redirects to `/onboarding`.

### Database Migration

```sql
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS birthday date,
  ADD COLUMN IF NOT EXISTS gender text;
```

### New Files

**1. `src/pages/Onboarding.tsx`** — Multi-step wizard with 4 steps:

- **Step 1: Phone + Birthday + Gender** — Phone (8-digit, required), birthday (date picker), gender (select: male/female/other)
- **Step 2: Profile Picture** — Upload photo or pick from the 6 default pixel art avatars
- **Step 3: Upload First Item** — Embedded version of the NewItem flow, or a redirect to `/items/new` with a return param
- **Step 4: Done** — Welcome message, redirect to `/discover`

Each step saves to the database immediately. Progress indicator at top.

**2. `src/components/OnboardingGate.tsx`** — Checks `profile.phone_number`, `profile.birthday`, `profile.gender` are set AND user has >= 1 item. If not, redirects to `/onboarding`.

### Modified Files

- **`src/hooks/useAuth.tsx`** — Add `birthday` and `gender` to Profile type fetch
- **`src/types/database.ts`** — Add `birthday` and `gender` to Profile interface
- **`src/components/landing/AuthSection.tsx`** — Change post-signup redirect from `/discover` to `/onboarding`
- **`src/App.tsx`** — Add `/onboarding` route, wrap authenticated routes with `OnboardingGate`
- **`src/locales/en/translation.json`** — Add onboarding keys
- **`src/locales/fr/translation.json`** — Add onboarding keys
- **`src/locales/ar/translation.json`** — Add onboarding keys

### Step Details

**Step 1 — Personal Info:**
- Phone: 8-digit numeric input (reuses existing validation pattern)
- Birthday: date input with min age 13
- Gender: segmented toggle (Male / Female / Other) — localized

**Step 2 — Profile Picture:**
- Grid of 6 default avatars to pick from
- "Upload Photo" button for custom image (uploads to item-photos bucket)
- Selected avatar highlighted with ring

**Step 3 — First Item:**
- CTA explaining "Upload at least one item to start swapping"
- Button navigates to `/items/new?onboarding=true`
- NewItem page detects the param and redirects back to `/onboarding` after creation
- OnboardingGate detects item exists and auto-advances

**Step 4 — Complete:**
- Confetti animation + welcome message
- Auto-redirect to `/discover` after 2s

### Routing Logic

```
User signs up → logged in → AuthSection redirects to /onboarding
→ OnboardingGate on /discover checks profile completeness
→ If incomplete → redirect /onboarding
→ If complete + has items → allow /discover
```

The `/onboarding` route itself is NOT wrapped by OnboardingGate (to avoid redirect loops).

### Files Modified/Created
- **Migration** — Add `birthday`, `gender` columns to profiles
- `src/pages/Onboarding.tsx` (new)
- `src/components/OnboardingGate.tsx` (new)
- `src/types/database.ts`
- `src/App.tsx`
- `src/components/landing/AuthSection.tsx`
- `src/pages/NewItem.tsx` (handle `?onboarding=true` return)
- `src/locales/{en,fr,ar}/translation.json`

