
# Soft Neo-Minimal Marketplace UI Redesign

## Overview
Implement the "Soft Neo-Minimal Marketplace" design system from the reference screenshots, focusing on:
1. **New Bottom Navigation** with a floating elevated center "Discover" button
2. **Redesigned Matches Page** with horizontal "Instant Matches" cards and vertical "Conversations" list
3. **Design System Variables** that will be reusable across the entire app

## Design System Variables to Implement

The design tokens from the reference:

| Token | Value |
|-------|-------|
| Primary | #7B5CFA (purple) |
| Secondary | #EDE9FF (light purple) |
| Accent | #34C759 (green) |
| Background | #FFFFFF |
| Surface | #F8F9FB |
| Text Primary | #0F172A |
| Text Secondary | #6B7280 |
| Border Radius Small | 12px |
| Border Radius Medium | 16px |
| Border Radius Large | 24px |
| Card Shadow | 0px 8px 24px rgba(0,0,0,0.04) |
| Floating Button Shadow | 0px 10px 30px rgba(123,92,250,0.35) |

## Files to Modify

### 1. CSS Variables Update
**File:** `src/index.css`

Update the light mode CSS variables to match the design system while keeping dark mode intact:
- Update primary to #7B5CFA
- Add new surface color variable
- Add new shadow utilities for the soft card shadows
- Keep all existing animations and utility classes

### 2. Bottom Navigation Redesign
**File:** `src/components/layout/BottomNav.tsx`

Transform to match the reference with:
- Floating center "Discover" button (elevated, larger, purple with shadow)
- 5 tabs: Search, Map, Discover (center), Matches, Profile
- Remove "Add" from the nav bar (will remain accessible elsewhere)
- Active state with dot indicator under text
- Clean white background with subtle border

### 3. Matches Page Redesign
**File:** `src/pages/Matches.tsx`

Complete redesign to match the reference:
- Clean header with "Matches" title and notification bell
- **Instant Matches Section**: Horizontal scrolling cards (160x190px) with:
  - Item photo with rounded corners (20px)
  - User avatar overlay with purple border
  - Item title and "Match with [Name]" subtitle
  - "New (4)" pill badge
- **Conversations Section**: Vertical list with:
  - Full-width cards (78px height, 18px radius)
  - Item thumbnail + user avatar overlay
  - User name (bold), message preview, timestamp
  - Tag pills (e.g., "Value balanced", "Great trade potential!")
- Keep all existing functionality (tabs for Active/Completed/Invites/Missed)

### 4. New Instant Match Card Component
**File:** `src/components/matches/InstantMatchCard.tsx` (new file)

Create a horizontal-scrollable match card for the "Instant Matches" section:
- 160px width, ~190px height
- Square item photo with 20px border radius
- Avatar overlay in bottom-right corner (28px, purple border on highlighted)
- Item title below photo
- "Match with [Name]" subtitle

### 5. Updated Conversation Card Component
**File:** `src/components/matches/ConversationCard.tsx` (new file)

Create a conversation-style list item:
- 78px height with soft shadow
- Item thumbnail with user avatar overlay
- Name, message preview, timestamp
- Dynamic tag pills based on match metadata

### 6. Tailwind Config Update
**File:** `tailwind.config.ts`

Add new design tokens:
- Extended color palette for the soft neo-minimal theme
- New border radius values (12, 16, 20, 24)
- Custom shadows matching the design

## Implementation Approach

### Phase 1: Design System Foundation
1. Update CSS variables in `index.css` for light mode
2. Add new Tailwind config tokens
3. These changes won't break existing dark mode

### Phase 2: Bottom Navigation
1. Restructure `BottomNav.tsx` with:
   - 5 nav items (Search, Map, Discover, Matches, Profile)
   - Floating center Discover button with elevation
   - Clean styling matching reference

### Phase 3: Matches Page
1. Create `InstantMatchCard.tsx` component
2. Create `ConversationCard.tsx` component  
3. Update `Matches.tsx` with:
   - New header with title + bell icon
   - Horizontal "Instant Matches" section for new matches
   - Vertical "Conversations" section for active chats
   - Preserve all existing tab functionality (Active/Completed/Invites/Missed)

## Preserved Functionality

All existing features will remain intact:
- Item details sheet on photo tap
- Chat navigation
- Deal invites flow
- Missed matches with accept functionality
- Completed matches section
- Unread message indicators
- Pro user features
- All confirmation flows

## Technical Notes

- Use existing `framer-motion` for animations
- Keep all existing hooks and data fetching logic
- Maintain responsive design with mobile-first approach
- Preserve safe-area inset handling
- Keep dark mode support (will inherit from design system)
do not forget to add user active status and and to redesign the swiping cars style to fit exactly the screenshot style 