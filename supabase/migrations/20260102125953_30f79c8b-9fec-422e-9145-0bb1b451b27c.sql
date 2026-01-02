-- Create trigger to set item location from profile if missing
CREATE OR REPLACE FUNCTION public.set_item_location_from_profile()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Only set location if both latitude and longitude are null
  IF NEW.latitude IS NULL AND NEW.longitude IS NULL THEN
    SELECT latitude, longitude INTO NEW.latitude, NEW.longitude 
    FROM public.profiles 
    WHERE user_id = NEW.user_id;
  END IF;
  RETURN NEW;
END;
$$;

-- Drop existing trigger if any
DROP TRIGGER IF EXISTS trg_set_item_location ON public.items;

-- Create the trigger
CREATE TRIGGER trg_set_item_location
  BEFORE INSERT ON public.items
  FOR EACH ROW
  EXECUTE FUNCTION public.set_item_location_from_profile();