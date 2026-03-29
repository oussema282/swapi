
-- Enable pg_net extension for HTTP calls from triggers
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

-- Function to notify Telegram on new user signup
CREATE OR REPLACE FUNCTION public.notify_telegram_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  PERFORM extensions.http_post(
    url := 'https://zzfungtlmdbqwkzrbbeu.supabase.co/functions/v1/telegram-notify',
    body := jsonb_build_object(
      'event', 'new_user',
      'data', jsonb_build_object(
        'name', NEW.display_name,
        'phone', NEW.phone_number,
        'gender', NEW.gender
      )
    ),
    headers := jsonb_build_object(
      'Content-Type', 'application/json'
    )
  );
  RETURN NEW;
END;
$$;

-- Function to notify Telegram on new item listed
CREATE OR REPLACE FUNCTION public.notify_telegram_new_item()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  owner_name text;
BEGIN
  SELECT display_name INTO owner_name
  FROM public.profiles
  WHERE user_id = NEW.user_id
  LIMIT 1;

  PERFORM extensions.http_post(
    url := 'https://zzfungtlmdbqwkzrbbeu.supabase.co/functions/v1/telegram-notify',
    body := jsonb_build_object(
      'event', 'new_item',
      'data', jsonb_build_object(
        'title', NEW.title,
        'category', NEW.category,
        'condition', NEW.condition,
        'is_gift', NEW.is_gift,
        'owner_name', COALESCE(owner_name, 'Unknown')
      )
    ),
    headers := jsonb_build_object(
      'Content-Type', 'application/json'
    )
  );
  RETURN NEW;
END;
$$;

-- Trigger on profiles insert (new user)
CREATE TRIGGER on_new_profile_telegram
  AFTER INSERT ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.notify_telegram_new_user();

-- Trigger on items insert (new item)
CREATE TRIGGER on_new_item_telegram
  AFTER INSERT ON public.items
  FOR EACH ROW
  EXECUTE FUNCTION public.notify_telegram_new_item();
