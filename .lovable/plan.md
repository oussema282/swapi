

## Plan: Replace Edit Icon with Toggle for Phone Visibility on Profile

### Changes — `src/pages/Profile.tsx`

**Replace lines 105-121** (the phone compact display section):

1. Import `Switch` from `@/components/ui/switch` and `supabase` client
2. Replace the Edit button with a `Switch` toggle that directly updates `phone_visible` in the database
3. Show the phone number on the left, and a centered label + toggle on the right
4. The label text uses `t('editProfile.phoneVisible')` — already translated in all 3 languages

Layout:
- Row 1: Phone icon + number (left-aligned)
- Row 2: Centered text label `t('editProfile.phoneVisible')` + Switch toggle

When toggled, update `profiles.phone_visible` via supabase and call `refreshProfile()`.

### Implementation detail

```tsx
{profile?.phone_number && (
  <div className="flex flex-col items-center gap-2 mb-4 px-1">
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Phone className="w-3.5 h-3.5" />
      <span>{profile.phone_number}</span>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-xs text-muted-foreground">{t('editProfile.phoneVisible')}</span>
      <Switch
        checked={!!profile.phone_visible}
        onCheckedChange={async (checked) => {
          await supabase.from('profiles').update({ phone_visible: checked }).eq('user_id', user.id);
          refreshProfile();
        }}
      />
    </div>
  </div>
)}
```

Remove the `Badge` import if no longer used elsewhere, and remove the `Edit` button from this section.

### Files Modified
- `src/pages/Profile.tsx`

