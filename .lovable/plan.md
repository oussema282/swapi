

## Plan: Complete French Translation Coverage

### Problem
Many pages and components have hardcoded English (or mixed-language) strings instead of using the `t()` translation function. Only 4 out of ~20 user-facing pages import `useTranslation`. The rest render English text regardless of the selected language.

### Scope of Work

**Pages missing `useTranslation` entirely** (need full i18n wrapping):
- `Settings.tsx` (690 lines — largest offender, all labels/headers hardcoded)
- `Search.tsx` (911 lines — buttons, placeholders, section headers)
- `NewItem.tsx` (hardcoded French strings instead of using `t()`)
- `EditItem.tsx` (hardcoded French strings)
- `EditProfile.tsx`
- `MapView.tsx`
- `UserProfile.tsx`
- `Checkout.tsx` / `CheckoutSuccess.tsx`
- `Recharge.tsx` / `RechargeLogin.tsx` / `RechargeVerify.tsx`
- `Privacy.tsx`, `Terms.tsx`, `Safety.tsx`

**Pages with `useTranslation` but still having hardcoded strings**:
- `Matches.tsx` — empty states use hardcoded English ("No active matches yet", "Failed to load matches", "No pending deal invites", etc.)
- `Profile.tsx` — partial coverage
- `Chat.tsx` — partial coverage

**Components with hardcoded strings**:
- `src/components/matches/*.tsx` (MatchCard, ConversationCard, CompleteSwapModal, etc.)
- `src/components/discover/*.tsx` (EmptyState, ItemDetailsSheet, SwipeCard)
- `src/components/deals/*.tsx`
- `src/components/report/ReportButton.tsx`
- `src/components/subscription/*.tsx`

### Approach

1. **Add missing translation keys to `en/translation.json`** — add keys for all hardcoded strings found across pages and components (settings sections, search UI, map labels, user profile, checkout flow, report flow, etc.)

2. **Add corresponding French translations to `fr/translation.json`** — translate all new keys

3. **Update all other 9 language files** (`es`, `de`, `pt`, `zh`, `ja`, `hi`, `ru`, `ko`, `ar`) with translated values for the new keys

4. **Wire up `useTranslation` in each page/component** — replace every hardcoded string with `t('key')` calls

5. **Fix NewItem.tsx and EditItem.tsx** — these have hardcoded French strings (not using `t()`) which means they show French even when English is selected. Replace with proper `t()` calls.

### Priority Order (user-facing impact)
1. **Settings.tsx** — most visited, fully hardcoded
2. **Matches.tsx** — empty states and error messages hardcoded
3. **Search.tsx** — headers, filters, placeholders
4. **NewItem.tsx / EditItem.tsx** — fix hardcoded French → use `t()`
5. **Match/discover components** — modal text, card labels
6. **Profile-related pages** (EditProfile, UserProfile)
7. **Legal pages** (Terms, Privacy, Safety) — lower priority
8. **Checkout/Recharge pages**

### Technical Detail
- Each page gets `import { useTranslation } from 'react-i18next'` and `const { t } = useTranslation()`
- All string literals replaced with `t('section.key')` pattern matching existing conventions
- New keys follow the existing nested structure (e.g., `settings.profilePhoto`, `matches.noActiveMatches`)
- All 11 language files updated in parallel with the new keys
- No structural changes to components — only string replacements

### Estimated Changes
- ~11 translation JSON files updated with ~80-100 new keys each
- ~15-20 TSX files updated to use `t()` calls

