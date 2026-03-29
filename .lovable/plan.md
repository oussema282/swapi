

## Plan: Fix Signup — Replace `extensions.http_post` with `net.http_post`

### Problem
The Telegram notification triggers use `extensions.http_post()` which doesn't exist. This crashes the signup transaction with "Database error saving new user". The `pg_net` extension (already enabled) provides `net.http_post()` instead.

### Fix — Single Migration

Replace both trigger functions to use `net.http_post` with its correct signature:

```sql
CREATE OR REPLACE FUNCTION public.notify_telegram_new_user()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $$
BEGIN
  PERFORM net.http_post(
    url := 'https://zzfungtlmdbqwkzrbbeu.supabase.co/functions/v1/telegram-notify',
    body := jsonb_build_object(
      'event', 'new_user',
      'data', jsonb_build_object('name', NEW.display_name, 'phone', NEW.phone_number, 'gender', NEW.gender)
    ),
    headers := '{"Content-Type":"application/json"}'::jsonb
  );
  RETURN NEW;
EXCEPTION WHEN OTHERS THEN
  RETURN NEW; -- Don't block signup if notification fails
END; $$;
```

Same pattern for `notify_telegram_new_item`. The `EXCEPTION WHEN OTHERS` block ensures notifications never block core functionality.

Also re-create the triggers (in case they were dropped):
```sql
DROP TRIGGER IF EXISTS on_new_profile_telegram ON public.profiles;
CREATE TRIGGER on_new_profile_telegram AFTER INSERT ON public.profiles
FOR EACH ROW EXECUTE FUNCTION notify_telegram_new_user();

DROP TRIGGER IF EXISTS on_new_item_telegram ON public.items;
CREATE TRIGGER on_new_item_telegram AFTER INSERT ON public.items
FOR EACH ROW EXECUTE FUNCTION notify_telegram_new_item();
```

### Files Modified
- Database migration only (no code changes)

