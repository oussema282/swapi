
# Tinder-Style Swipe Card Redesign

## Overview
Transform the current swiping interface into a modern, Tinder-inspired design with full-screen cards, cleaner information layout, and iconic circular action buttons.

## Visual Changes

### 1. Card Layout (Full-Screen Style)
**Current**: Cards are constrained to `max-w-[320px]` and `max-h-[520px]`
**New**: Cards will expand to fill almost the entire available space with minimal margins, creating an immersive photo-first experience

- Remove max-width/height constraints
- Use edge-to-edge design with subtle rounded corners (24px)
- Photo takes 85-90% of card height
- Info section overlays the bottom with gradient

### 2. Information Display (Bottom Overlay)
**Current**: Multiple badges, owner info card, detailed metadata
**New**: Minimal Tinder-style info layout

```text
+----------------------------------+
|  [Active]  (green status badge)  |
|  Item Title                      |
|  [home] Category Location        |
|  [pin] Distance away             |
+----------------------------------+
```

- "Active" status badge (green pill) for active listings
- Large bold title (item name)
- Category with home icon
- Distance with map pin icon
- Remove condition badge, rating, owner card from main view (move to details sheet)

### 3. Action Buttons (Tinder 5-Button Layout)
**Current**: 3 buttons (Nope, Undo, Like) in glass container
**New**: 5 iconic circular buttons in a row

```text
[Undo] [X] [Star] [Heart] [Send]
 gold   red  blue  green   blue
 small  med  small  med   small
```

Button specifications:
- **Undo** (Undo2 icon): Small gold/yellow circle, Pro feature
- **Dislike** (X icon): Medium white circle with red X
- **Super Like** (Star icon): Small white circle with blue star (Pro feature)
- **Like** (Heart icon): Medium white circle with green heart
- **Send Message** (Send icon): Small white circle with blue paper plane (opens details)

### 4. Photo Progress Indicators
**Current**: Progress bars with white fill
**New**: Segmented bars matching Tinder style
- Thinner segments
- More contrast with semi-transparent background
- Subtle animation on current segment

### 5. Like/Nope Overlays
**Current**: Stamp-style with thumb icons
**New**: Cleaner Tinder-style stamps
- "LIKE" in green with border, rotated -15deg
- "NOPE" in red with border, rotated 15deg
- No background fill, just bordered text
- Positioned at top corners of card

### 6. Color Scheme for Buttons
- **Gold/Yellow**: `#FFD700` for Undo
- **Red**: `#FF4458` for Dislike (Tinder pink-red)
- **Blue**: `#007AFF` for Super Like and Send
- **Green**: `#00D46A` for Like (with gradient heart)

## Technical Implementation

### Files to Modify

#### 1. `src/components/discover/SwipeCard.tsx`
- Expand card to fill container
- Simplify bottom info section:
  - Add "Active" status badge
  - Show title prominently
  - Category + distance in subtle text
  - Remove owner info card, badges, condition
- Simplify Like/Nope overlays to bordered text stamps
- Keep photo navigation and progress bars

#### 2. `src/components/discover/SwipeActions.tsx`
- Redesign to 5 circular buttons
- Remove glass morphism container
- Use individual circular buttons with shadows
- Add Super Like (Pro feature with crown indicator)
- Add Send/Info button to open details sheet
- Implement proper sizing (small/medium variants)

#### 3. `src/pages/Index.tsx`
- Remove card container constraints
- Allow cards to fill available space
- Update padding for full-screen feel
- Pass onInfoTap through Send button
- Add Super Like handler (shows upgrade for free users)

#### 4. `src/index.css` (Optional)
- Add Tinder-specific color variables if needed
- Add button glow/shadow utilities

### Component Structure

```text
SwipeCard (full-width container)
+------------------------------------------+
| [Photo Progress Bars]                    |
|                                          |
|        [LIKE stamp]     [NOPE stamp]     |
|                                          |
|              PHOTO AREA                  |
|         (tap left/right for nav)         |
|                                          |
|     +--------------------------------+   |
|     | [Active]                       |   |
|     | Item Title Here                |   |
|     | [home] Electronics             |   |
|     | [pin] 8 miles away            [^]  |
|     +--------------------------------+   |
+------------------------------------------+

SwipeActions (below card)
    [Undo]  [X]  [Star]  [Heart]  [Send]
```

### Button Details

| Button | Size | BG Color | Icon | Icon Color | Feature |
|--------|------|----------|------|------------|---------|
| Undo | 44px | Gold/Amber | Undo2 | White | Pro |
| Dislike | 60px | White | X | Red | Free |
| Super Like | 44px | White | Star | Blue | Pro |
| Like | 60px | White | Heart | Green | Free |
| Send | 44px | White | Send | Blue | Free |

### Animation Enhancements
- Button press: Scale to 0.9 with spring animation
- Like button: Heart fills with gradient on tap
- Super Like: Star sparkles animation (Pro)
- Card exit: Smooth slide up (like) or down (dislike)

## Migration Notes
- Owner info and detailed badges move to ItemDetailsSheet (already exists)
- Rating display moves to details sheet
- Condition badge moves to details sheet
- "Match+" reciprocal boost indicator can appear as subtle glow or badge on card

## Accessibility
- All buttons have aria-labels
- Progress indicators announced for screen readers
- Focus management for keyboard navigation
