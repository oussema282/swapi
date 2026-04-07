

## Plan: Professional Landing Page Redesign + Streamlined Google Onboarding

This plan has two parts: (A) a complete landing page redesign with professional components, and (B) a simplified onboarding flow that extracts user data from Google OAuth and allows skipping item upload.

---

### Part A: Professional Landing Page

Rebuild all landing components from scratch with a polished, modern design.

**New Page Structure:**

```text
┌────────────────────────────────────┐
│  Sticky Navbar (logo + lang + CTA) │
├────────────────────────────────────┤
│  Hero: gradient bg, headline,      │
│  tagline, embedded Auth card       │
│  + animated phone mockup/graphic   │
├────────────────────────────────────┤
│  Logo cloud / social proof strip   │
├────────────────────────────────────┤
│  3-column feature grid with icons  │
│  (animated on scroll)              │
├────────────────────────────────────┤
│  "How it works" 3-step timeline    │
├────────────────────────────────────┤
│  Stats counter bar (animated nums) │
├────────────────────────────────────┤
│  Testimonials carousel             │
├────────────────────────────────────┤
│  CTA banner (gradient, sign up)    │
├────────────────────────────────────┤
│  Minimal footer                    │
└────────────────────────────────────┘
```

#### Files to create/rewrite:

1. **`src/pages/Landing.tsx`** — New layout importing all sections in order.

2. **`src/components/landing/Hero.tsx`** — Rewrite:
   - Full-width gradient background (primary to secondary, subtle)
   - Two-column: left = headline with typed animation effect + tagline + scroll-down arrow, right = AuthSection (embedded)
   - On mobile: stacked, headline first then auth card
   - Animated particles/dots floating in background using framer-motion

3. **`src/components/landing/AnimatedFeatures.tsx`** — Rewrite as a 3-column feature grid:
   - 6 feature cards in a responsive grid (3 cols desktop, 1 col mobile)
   - Each card: icon, title, description, subtle hover lift effect
   - Staggered scroll-reveal animation via framer-motion `whileInView`
   - Icons: ArrowLeftRight, MapPin, Shield, Zap, MessageCircle, Gift

4. **`src/components/landing/HowItWorks.tsx`** — New component:
   - Horizontal 3-step timeline with numbered circles
   - Steps: Upload Item → Get Matched → Exchange
   - Connecting line between steps, animated on scroll
   - Vertical on mobile

5. **`src/components/landing/StatsCounter.tsx`** — New component:
   - Full-width bar with gradient bg
   - 4 animated counters: Users, Items Traded, Countries, Satisfaction %
   - Numbers count up when scrolled into view using framer-motion

6. **`src/components/landing/Testimonials.tsx`** — Rewrite:
   - Cleaner card-based carousel with auto-play
   - Quote marks, star ratings, user avatar + name
   - Smoother transitions, no dark inversion (stays consistent with page theme)

7. **`src/components/landing/CTABanner.tsx`** — New component:
   - Full-width gradient section with bold CTA text
   - "Join now" button that scrolls to auth section at top
   - Subtle animated background pattern

8. **`src/components/landing/TrustBadges.tsx`** — Rewrite as a simple logo cloud strip (grayscale logos, no ratings)

9. **`src/components/landing/Footer.tsx`** — Keep minimal, clean up styling

10. **`src/components/landing/AuthSection.tsx`** — Keep existing logic, minor styling polish (more rounded, shadow refinement)

All text uses `t()` keys. New translation keys added to `en`, `fr`, `ar` files.

---

### Part B: Streamlined Onboarding for Google Users

#### Problem
Currently onboarding asks for phone, birthday, gender, avatar, and item upload — even for Google users whose name, birthday, and gender could be extracted from their Google account.

#### Changes:

1. **Database trigger `handle_new_user`** — Migration to update the function:
   - Extract `full_name` (or `name`), `avatar_url` (picture), and optionally birthday/gender from `raw_user_meta_data` for Google OAuth users
   - Pre-populate `display_name`, `avatar_url`, `gender`, `birthday` in the profiles table

   Google OAuth metadata typically includes:
   - `full_name` or `name` — display name
   - `avatar_url` or `picture` — profile photo
   - Gender and birthday are NOT provided by default Google OAuth scopes

   Since Google does NOT provide birthday or gender via standard OAuth, we need to still ask for those. However, we can pre-fill name and avatar.

2. **`src/pages/Onboarding.tsx`** — Simplify the flow for Google users:
   - **Step 1**: Phone number + birthday + gender (keep, but pre-fill name/avatar from Google if available)
   - **Step 2**: Profile picture — if Google avatar already set, show it pre-selected with option to change. Skip this step automatically if avatar is already populated.
   - **Step 3**: Upload item — add a **"Skip for now"** button
   - **Step 4**: Done animation → redirect to `/discover`

   Key changes:
   - Add "Skip for now" button on step 3 that navigates directly to `/discover`
   - When Google user signs in and avatar is already set from Google metadata, auto-skip step 2

3. **`src/components/OnboardingGate.tsx`** — Remove the `hasItems` check:
   - Only check profile completeness (phone, birthday, gender, avatar)
   - Users without items can access the app but will see empty discover feed

4. **Discover page empty state** — Modify the discover page's empty state:
   - When user has 0 items, show a persistent banner/prompt: "Upload your first item to start discovering trades"
   - Link to `/items/new`

5. **`handle_new_user` trigger migration**:
   ```sql
   CREATE OR REPLACE FUNCTION public.handle_new_user()
   RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER
   SET search_path TO 'public' AS $$
   BEGIN
     INSERT INTO public.profiles (user_id, display_name, phone_number, avatar_url)
     VALUES (
       NEW.id,
       COALESCE(
         NEW.raw_user_meta_data ->> 'full_name',
         NEW.raw_user_meta_data ->> 'name',
         NEW.raw_user_meta_data ->> 'display_name',
         split_part(NEW.email, '@', 1)
       ),
       NEW.raw_user_meta_data ->> 'phone_number',
       COALESCE(
         NEW.raw_user_meta_data ->> 'avatar_url',
         NEW.raw_user_meta_data ->> 'picture'
       )
     );
     RETURN NEW;
   END; $$;
   ```

---

### Files Modified/Created
- `src/pages/Landing.tsx` — new layout
- `src/components/landing/Hero.tsx` — redesigned
- `src/components/landing/AnimatedFeatures.tsx` — feature grid
- `src/components/landing/HowItWorks.tsx` (new)
- `src/components/landing/StatsCounter.tsx` (new)
- `src/components/landing/Testimonials.tsx` — redesigned
- `src/components/landing/CTABanner.tsx` (new)
- `src/components/landing/TrustBadges.tsx` — simplified
- `src/components/landing/Footer.tsx` — minor cleanup
- `src/locales/{en,fr,ar}/translation.json` — new keys
- Database migration — update `handle_new_user` trigger
- `src/pages/Onboarding.tsx` — skip logic + skip button on step 3
- `src/components/OnboardingGate.tsx` — remove item count requirement
- `src/components/discover/EmptyState.tsx` — add "upload item" prompt for users with 0 items

