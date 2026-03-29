
-- Fix notify_telegram_new_user to include email from auth.users
CREATE OR REPLACE FUNCTION public.notify_telegram_new_user()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $$
DECLARE
  user_email text;
BEGIN
  -- Look up email from auth.users
  SELECT email INTO user_email
  FROM auth.users
  WHERE id = NEW.user_id;

  PERFORM net.http_post(
    url := 'https://zzfungtlmdbqwkzrbbeu.supabase.co/functions/v1/telegram-notify',
    body := jsonb_build_object(
      'event', 'new_user',
      'data', jsonb_build_object('name', NEW.display_name, 'email', COALESCE(user_email, 'N/A'))
    ),
    headers := '{"Content-Type":"application/json"}'::jsonb
  );
  RETURN NEW;
EXCEPTION WHEN OTHERS THEN
  RETURN NEW;
END; $$;

-- Fix notify_telegram_new_item (unchanged logic, just re-create)
CREATE OR REPLACE FUNCTION public.notify_telegram_new_item()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $$
DECLARE
  owner_name text;
BEGIN
  SELECT display_name INTO owner_name
  FROM public.profiles
  WHERE user_id = NEW.user_id
  LIMIT 1;

  PERFORM net.http_post(
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
    headers := '{"Content-Type":"application/json"}'::jsonb
  );
  RETURN NEW;
EXCEPTION WHEN OTHERS THEN
  RETURN NEW;
END; $$;

-- Re-create triggers
DROP TRIGGER IF EXISTS on_new_profile_telegram ON public.profiles;
CREATE TRIGGER on_new_profile_telegram AFTER INSERT ON public.profiles
FOR EACH ROW EXECUTE FUNCTION notify_telegram_new_user();

DROP TRIGGER IF EXISTS on_new_item_telegram ON public.items;
CREATE TRIGGER on_new_item_telegram AFTER INSERT ON public.items
FOR EACH ROW EXECUTE FUNCTION notify_telegram_new_item();
