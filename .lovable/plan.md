

## Plan: Add Moderation Toast in EditItem Upload

### Problem
In `EditItem.tsx`, when a photo fails moderation (line 128-130), it silently removes the file and `continue`s — no toast is shown. The `NewItem.tsx` page correctly shows a destructive toast with `t('newItem.imageBlocked')`.

### Changes — `src/pages/EditItem.tsx`

Add a destructive toast after the moderation check fails (line 128-130), matching the NewItem pattern:

```typescript
if (!moderationResult.is_safe) {
  await supabase.storage.from('item-photos').remove([fileName]);
  toast({ 
    variant: 'destructive', 
    title: t('newItem.imageBlocked'),
    description: `${moderationResult.violation_type || t('newItem.policyViolation')}`
  });
  continue;
}
```

This reuses the existing `t('newItem.imageBlocked')` and `t('newItem.policyViolation')` translation keys which are already defined in en, fr, and ar locale files — so the toast automatically follows the user's language.

### Files Modified
- `src/pages/EditItem.tsx`

