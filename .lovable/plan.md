

## Plan: Add Confirmation Dialog Before Sending Deal Invite

### What changes

When a user taps an item in the deal invite list, instead of immediately sending, show a confirmation dialog displaying both items side-by-side (the user's item and the target item) with Confirm and Cancel buttons. All text uses `t()` for i18n.

### Changes — `src/components/deals/DealInviteButton.tsx`

1. **Add state for selected item**: `const [selectedItem, setSelectedItem] = useState<Item | null>(null)`

2. **Change item click handler** (line 178): Instead of `sendInviteMutation.mutate(item.id)`, set `setSelectedItem(item)` to open the confirmation dialog

3. **Add confirmation Dialog** (nested inside the component):
   - Small dialog (`max-w-xs rounded-2xl`)
   - Shows both items side-by-side with a swap icon between them:
     - Left: user's selected item (photo + title)
     - Center: `ArrowLeftRight` icon
     - Right: target item (photo + title)
   - Two buttons at the bottom:
     - Cancel button (outline) → `setSelectedItem(null)`
     - Confirm button (primary) → `sendInviteMutation.mutate(selectedItem.id)` then `setSelectedItem(null)`
   - Loading state on confirm button while mutation is pending

4. **Need target item photo**: Add a `targetItemPhoto` prop to `DealInviteButtonProps` (optional string). Pass it from `ItemDetailsSheet` where item data is already available.

### Changes — `src/components/discover/ItemDetailsSheet.tsx`

Pass `targetItemPhoto={item.photos?.[0]}` to the `DealInviteButton`.

### Translation keys to add — all 3 locale files (en, fr, ar)

Add under a `dealInvite` section:
- `confirmTitle`: "Confirm Deal" / "Confirmer l'échange" / "تأكيد الصفقة"
- `confirmDescription`: "You are about to propose this exchange" / "Vous êtes sur le point de proposer cet échange" / "أنت على وشك اقتراح هذا التبادل"
- `yourItem`: "Your item" / "Votre objet" / "غرضك"
- `theirItem`: "Their item" / "Leur objet" / "غرضهم"

Also add all the existing `dealInvite.*` keys that are currently missing from the translation files.

### Files Modified
- `src/components/deals/DealInviteButton.tsx`
- `src/components/discover/ItemDetailsSheet.tsx`
- `src/locales/en/translation.json`
- `src/locales/fr/translation.json`
- `src/locales/ar/translation.json`

