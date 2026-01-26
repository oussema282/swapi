
# Complete Website Translation Implementation Plan

## Overview
This plan covers applying translations to every page and component in the application, ensuring language changes affect the entire website. The work is organized by priority and component type.

## Current Status
- i18n is configured with 11 languages (en, fr, ar, es, de, pt, zh, ja, hi, ru, ko)
- Translations already applied to: BottomNav, Matches page, Profile page
- Translations NOT yet applied to: Landing page, Auth page, Index/Discover page, Items page, Search page, Chat page, NewItem page, Settings page, and various components

---

## Phase 1: Expand Translation Keys
Add comprehensive translation keys to all 11 language files for:

### Landing Page Keys
```text
landing.hero.getStarted
landing.hero.howItWorks
landing.hero.stats.activeUsers
landing.hero.stats.itemsTraded
landing.hero.stats.countries
landing.features.title
landing.features.subtitle
landing.features.smartMatching (title + description)
landing.features.nearbySwaps (title + description)
landing.features.secureTrading (title + description)
landing.features.realTimeChat (title + description)
landing.features.instantNotifications (title + description)
landing.features.proBoost (title + description)
landing.howItWorks.title
landing.howItWorks.subtitle
landing.howItWorks.step1 (title + description)
landing.howItWorks.step2 (title + description)
landing.howItWorks.step3 (title + description)
landing.pricing.title
landing.pricing.subtitle
landing.pricing.free (name, description, features, cta)
landing.pricing.pro (name, description, features, cta)
landing.pricing.mostPopular
landing.footer.signIn
landing.footer.terms
landing.footer.privacy
landing.footer.contact
landing.footer.copyright
```

### Auth Page Keys
```text
auth.headline
auth.subheadline
auth.trustSecure
auth.trustInstant
auth.trustEuropeWide
auth.continueWithGoogle
auth.orContinueWithEmail
auth.signingIn
auth.creatingAccount
auth.welcomeBack
auth.accountCreated
auth.signInFailed
auth.signUpFailed
auth.accountExists
auth.displayNameRequired
```

### Items Page Keys
```text
items.myItems
items.activeCount
items.swappedCount
items.swapped
items.noActiveItems
items.noActiveItemsDescription
items.addFirstItem
items.noSwappedItems
items.noSwappedItemsDescription
items.itemWasSwapped
items.deleteConfirmTitle
items.deleteConfirmDescription
items.deleting
items.restoreForTrading
```

### NewItem Page Keys
```text
newItem.steps.photosTitle
newItem.steps.categoryCondition
newItem.steps.valueRange
newItem.steps.swapPreferences
newItem.uploadPhotos
newItem.addPhoto
newItem.photoLimit
newItem.itemName
newItem.description
newItem.selectCategory
newItem.itemCondition
newItem.estimatedValue
newItem.valueHelp
newItem.minimum
newItem.maximum
newItem.whatLookingFor
newItem.preferencesHelp
newItem.allCategories
newItem.itemCreated
newItem.itemLive
```

### Search Page Keys
```text
search.title
search.placeholder
search.filters
search.clearAll
search.categories
search.distance
search.budget
search.noResults
search.nearbyItems
search.refreshing
search.trendingSearches
```

### Chat Page Keys
```text
chat.startConversation
chat.startConversationDescription
chat.placeholder
chat.swapDetails
```

### Settings Page Keys
```text
settings.accountSettings
settings.profile
settings.security
settings.alerts
settings.profilePhoto
settings.updatePhoto
settings.personalInfo
settings.updateDetails
settings.saveChanges
settings.saving
settings.emailAddress
settings.newEmail
settings.updateEmail
settings.changePassword
settings.currentPassword
settings.newPassword
settings.confirmPassword
settings.updatePassword
settings.notifications
settings.emailNotifications
settings.pushNotifications
settings.matchAlerts
settings.messageAlerts
settings.profileVisibility
settings.showLocation
settings.dangerZone
settings.deleteAccount
settings.deleteWarning
```

### Empty States & Common UI
```text
empty.noMoreMatches
empty.tryAgainLater
empty.noMoreItems
empty.checkBackLater
discover.ownerActive
discover.ownerRecentlyActive
```

---

## Phase 2: Apply Translations to Pages

### 2.1 Landing Page Components
Files to update:
- `src/components/landing/Hero.tsx`
- `src/components/landing/Features.tsx`
- `src/components/landing/HowItWorks.tsx`
- `src/components/landing/Pricing.tsx`
- `src/components/landing/Footer.tsx`

Changes:
- Import `useTranslation` hook
- Replace all hardcoded strings with `t('key')` calls

### 2.2 Auth Page
File: `src/pages/Auth.tsx`

Changes:
- Import `useTranslation` hook
- Translate tab labels, form labels, button text, trust indicators
- Translate toast messages
- Translate error messages

### 2.3 Discover/Index Page
File: `src/pages/Index.tsx`

Changes:
- Import `useTranslation` hook
- Translate EmptyState messages
- Translate loading states

### 2.4 Items Page
File: `src/pages/Items.tsx`

Changes:
- Import `useTranslation` hook
- Translate header, tabs, empty states
- Translate dialog messages
- Translate button labels

### 2.5 NewItem Page
File: `src/pages/NewItem.tsx`

Changes:
- Import `useTranslation` hook
- Translate all step titles and descriptions
- Translate form labels and placeholders
- Translate success messages

### 2.6 Search Page
File: `src/pages/Search.tsx`

Changes:
- Import `useTranslation` hook
- Translate search placeholder
- Translate filter labels
- Translate category names (use existing translation keys)
- Translate empty states

### 2.7 Chat Page
File: `src/pages/Chat.tsx`

Changes:
- Import `useTranslation` hook
- Translate empty state
- Translate input placeholder

### 2.8 Settings Page
File: `src/pages/Settings.tsx`

Changes:
- Import `useTranslation` hook
- Translate all tab labels
- Translate all card titles and descriptions
- Translate all form labels
- Translate all button text
- Translate notification settings
- Translate privacy settings

---

## Phase 3: Apply Translations to Components

### 3.1 Discover Components
Files:
- `src/components/discover/EmptyState.tsx`
- `src/components/discover/SwipeCard.tsx` (activity status labels)
- `src/components/discover/SwipeTopBar.tsx`
- `src/components/discover/SwipeActions.tsx`
- `src/components/discover/ItemDetailsSheet.tsx`
- `src/components/discover/MatchModal.tsx`

### 3.2 Match Components
Files:
- `src/components/matches/EmptyMatchesState.tsx`
- `src/components/matches/MatchCard.tsx`
- `src/components/matches/CompleteSwapModal.tsx`
- `src/components/matches/MissedMatchModal.tsx`

### 3.3 Chat Components
Files:
- `src/components/chat/ChatHeader.tsx`

### 3.4 Subscription Components
Files:
- `src/components/subscription/UpgradePrompt.tsx`
- `src/components/subscription/FeatureUpgradeModal.tsx`

### 3.5 Deal Components
Files:
- `src/components/deals/DealInviteButton.tsx`
- `src/components/deals/DealInvitesNotification.tsx`

---

## Phase 4: Add Language Switcher to Landing Page

Add the `LanguageSwitcher` component to the landing page header/footer so visitors can switch languages before signing up.

File: `src/components/landing/Footer.tsx`
- Import and add `LanguageSwitcher` component

---

## Implementation Order

1. **Update translation files** (en, fr, ar, es, de, pt, zh, ja, hi, ru, ko) - Add all new keys with translations
2. **Landing page** - Hero, Features, HowItWorks, Pricing, Footer
3. **Auth page** - Complete translation
4. **Items page** - Headers, tabs, dialogs
5. **NewItem page** - All steps and forms
6. **Search page** - Filters and results
7. **Chat page** - Empty state and input
8. **Settings page** - All tabs and forms
9. **Discover components** - EmptyState, SwipeCard, etc.
10. **Match components** - Cards and modals
11. **Other components** - Subscription, deals, etc.

---

## Technical Notes

- All translations use the existing `useTranslation` hook from `react-i18next`
- Categories and conditions already have translation keys in `categories.*` and `conditions.*`
- RTL support for Arabic is already configured in `src/i18n.ts`
- Language preference persists in localStorage
- No changes to routing or business logic required
