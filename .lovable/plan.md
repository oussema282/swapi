

## Plan: Fix Telegram Notifications — 3 Issues

### Problems Identified

1. **Markdown parse error**: The `⚧` (gender) emoji at byte offset 90 breaks Telegram's Markdown parser, causing all notifications to fail silently (error in edge function logs: `can't parse entities`)
2. **New user notification lacks email**: The `handle_new_user` trigger creates the profile but email is stored in `auth.users`, not `profiles`. The current trigger only sends name/phone/gender (which are empty at signup time anyway)
3. **Triggers missing**: The db-triggers section shows "no triggers" — the item notification trigger likely doesn't exist, explaining why new item notifications aren't received
4. **Profile completion notification missing**: When user completes onboarding (phone, birthday, gender), no notification is sent with the full data

### Solution

**1. Fix edge function — switch to HTML parse mode and add `profile_complete` event**

Replace `parse_mode: 'Markdown'` with `parse_mode: 'HTML'` and use `<b>` instead of `*`. Add a new event type `profile_complete` that sends full profile data.

```
new_user → "🆕 New User Signed Up!\nEmail: user@email.com"
profile_complete → "✅ Profile Completed!\nName, Phone, Birthday, Gender"
new_item → "📦 New Item Listed!\nTitle, Category, Condition, Owner"
```

**2. Fix `notify_telegram_new_user` trigger function**

Change it to read `NEW.email` from auth.users (since the trigger fires on `auth.users` INSERT via `handle_new_user`). Actually — the telegram trigger fires on `profiles` INSERT. We need to look up the email from `auth.users` using the `user_id`.

Updated function will:
- Query `auth.users` to get email
- Send just email + display_name (phone/gender not set yet at signup)

**3. Re-create all triggers via migration**

```sql
-- Re-create triggers that were dropped
DROP TRIGGER IF EXISTS on_new_profile_telegram ON public.profiles;
CREATE TRIGGER on_new_profile_telegram AFTER INSERT ON public.profiles
FOR EACH ROW EXECUTE FUNCTION notify_telegram_new_user();

DROP TRIGGER IF EXISTS on_new_item_telegram ON public.items;
CREATE TRIGGER on_new_item_telegram AFTER INSERT ON public.items
FOR EACH ROW EXECUTE FUNCTION notify_telegram_new_item();
```

**4. Add Telegram call in Onboarding.tsx `handleSavePersonalInfo`**

After successfully saving personal info (step 1), call the edge function with `profile_complete` event containing: name, email, phone, birthday, gender.

### Files Modified
- `supabase/functions/telegram-notify/index.ts` — fix parse mode, add `profile_complete` event
- Database migration — fix trigger functions + re-create triggers
- `src/pages/Onboarding.tsx` — add `profile_complete` notification call after step 1 save

