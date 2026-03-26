

## Plan: Add Deal Invite Button to ItemDetailsSheet

### Problem
The "Invite to Deal" button in ItemDetailsSheet only appears when an `onInviteDeal` prop is passed. Many callers don't pass it, so users see no way to send a deal invite from the sheet.

### Fix — `src/components/discover/ItemDetailsSheet.tsx`

1. Import `DealInviteButton` from `@/components/deals/DealInviteButton`
2. Replace the current conditional `onInviteDeal` button (lines 275-279) with the `DealInviteButton` component rendered directly for non-gift items:

```tsx
{!item.is_gift && user && item.user_id !== user.id && (
  <DealInviteButton
    targetItemId={item.id}
    targetItemTitle={item.title}
    className="w-full gradient-primary"
  />
)}
```

3. Remove the `onInviteDeal` prop from the interface (no longer needed since the sheet handles it internally)

### Files Modified
- `src/components/discover/ItemDetailsSheet.tsx`

