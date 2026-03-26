

## Plan: Enhance Deal Invitation Pop-up UI

### Current state
The dialog is plain — flat bordered item rows, basic text header, no visual hierarchy or polish. It looks generic and doesn't match the premium dark luxury identity.

### Changes — `src/components/deals/DealInviteButton.tsx`

**1. Header upgrade**
- Add a Send icon with a gradient primary circle background above the title
- Make the target item title stand out with primary color styling
- Add a subtle separator after the header

**2. Item list cards upgrade**
- Larger thumbnails: 14x14 (56px) with rounded-xl corners
- Add subtle gradient border on hover for available items
- Add a right-arrow chevron indicator for sendable items
- Better spacing and padding (p-3.5)
- Gift items in the list get a small gift badge overlay on their thumbnail

**3. Status badges upgrade**
- Use pill-shaped badges with more contrast (rounded-full, slightly larger padding)
- Add subtle icon animations (pulse on pending, none on blocked)

**4. Footer warning upgrade**
- Style the "2 refus = bloque" warning in a subtle destructive-tinted card instead of plain text
- Add AlertTriangle icon

**5. Dialog container**
- Rounded-2xl corners
- Max height for list bumped to 72 (max-h-72) for better scroll room
- Smooth scrollbar styling

### Files Modified
- `src/components/deals/DealInviteButton.tsx`

