

## Plan: Telegram Bot Notifications for New Users and Items

### Overview
Create an edge function that sends Telegram messages when a new user signs up or a new item is listed. Use database triggers to call the function automatically.

### 1. Store Secrets
- Use `add_secret` to store `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID`

### 2. Create Edge Function: `telegram-notify`
- Accepts `{ event: 'new_user' | 'new_item', data: {...} }` 
- Sends a formatted message to the Telegram chat via Bot API (`sendMessage`)
- **New user** message: name, email, phone, gender
- **New item** message: title, category, condition, owner name
- Uses direct Telegram API (no connector needed — just bot token)

### 3. Database: Call edge function via `pg_net`
Create two triggers + functions using `pg_net.http_post`:

**Trigger A — on `profiles` INSERT:**
- Fires after a new profile row is created (new signup)
- Sends notification with display_name, phone_number, gender

**Trigger B — on `items` INSERT:**
- Fires after a new item is created
- Sends notification with title, category, condition
- Joins profiles to get the owner's display_name

### Technical Details

**Edge function** (`supabase/functions/telegram-notify/index.ts`):
```ts
// POST { event, data } → calls https://api.telegram.org/bot{TOKEN}/sendMessage
// Formats message with emoji for readability
```

**Migration SQL:**
```sql
CREATE OR REPLACE FUNCTION notify_telegram_new_user()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  PERFORM net.http_post(
    url := '...supabase.co/functions/v1/telegram-notify',
    headers := '{"Content-Type":"application/json","Authorization":"Bearer ..."}'::jsonb,
    body := jsonb_build_object('event','new_user','data', jsonb_build_object('name', NEW.display_name, 'phone', NEW.phone_number, 'gender', NEW.gender))
  );
  RETURN NEW;
END; $$;

CREATE TRIGGER on_new_profile AFTER INSERT ON profiles
FOR EACH ROW EXECUTE FUNCTION notify_telegram_new_user();
-- Similar for items
```

### Files Created/Modified
- `supabase/functions/telegram-notify/index.ts` (new)
- Database migration for triggers + pg_net calls

