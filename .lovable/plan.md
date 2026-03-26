

## Plan: Minimize Phone Section on Profile + Require Phone at Signup

### 1. Profile Page — Compact Phone Display (`src/pages/Profile.tsx`)

Remove the large Card with input/switch/save button. Replace with a single compact row showing the phone number inline (like the location row), with an edit icon that navigates to `/profile/edit` where the full phone editor already exists.

**Replace lines 144-186** (the entire Phone Number Section card) with:

```tsx
{/* Phone - compact inline display */}
<div className="flex items-center justify-between mb-4 px-1">
  <div className="flex items-center gap-2 text-sm text-muted-foreground">
    <Phone className="w-3.5 h-3.5" />
    <span>{profile?.phone_number || t('editProfile.phoneNumberPlaceholder')}</span>
    {profile?.phone_visible && (
      <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
        {t('editProfile.phoneVisible')}
      </Badge>
    )}
  </div>
  <Button variant="ghost" size="sm" className="h-7 px-2" onClick={() => navigate('/profile/edit')}>
    <Edit className="w-3 h-3" />
  </Button>
</div>
```

Remove the `phoneNumber`, `phoneVisible`, `savingPhone` state variables and `handleSavePhone` function (no longer needed on this page — editing happens in `/profile/edit`).

### 2. Signup Form — Add Required Phone Field (`src/pages/Auth.tsx`)

Add a phone number input field to the signup form (between Display Name and Email):

- 8-digit numeric input with Phone icon
- Required field with validation (must be exactly 8 digits)
- Pass phone number to `signUp` function

### 3. Auth Hook — Save Phone on Signup (`src/hooks/useAuth.tsx`)

Update `signUp` to accept `phoneNumber` parameter and include it in `data` metadata:

```tsx
signUp: (email, password, displayName, phoneNumber) => ...
data: { display_name: displayName, phone_number: phoneNumber }
```

### 4. Database Trigger

Check if the existing profile creation trigger already reads `phone_number` from raw_user_meta_data. If not, update the trigger to copy it to the profiles table on signup.

### Files Modified
- `src/pages/Profile.tsx` — compact phone display
- `src/pages/Auth.tsx` — add phone field to signup form
- `src/hooks/useAuth.tsx` — pass phone to signUp
- Database migration (if trigger needs updating)

