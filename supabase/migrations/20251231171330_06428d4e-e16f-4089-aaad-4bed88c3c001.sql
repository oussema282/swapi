-- Add is_archived column to items table
ALTER TABLE public.items ADD COLUMN is_archived boolean NOT NULL DEFAULT false;

-- Create index for faster filtering
CREATE INDEX idx_items_is_archived ON public.items(is_archived);

-- Update existing RLS policy to only show non-archived active items (or own items)
DROP POLICY IF EXISTS "Anyone can view active items" ON public.items;

CREATE POLICY "Anyone can view active non-archived items"
ON public.items
FOR SELECT
USING (
  (is_active = true AND is_archived = false) 
  OR (auth.uid() = user_id)
);

-- Create a function to archive items when a match is completed
CREATE OR REPLACE FUNCTION public.archive_items_on_match_complete()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Only process when match becomes completed
  IF NEW.is_completed = true AND (OLD.is_completed = false OR OLD.is_completed IS NULL) THEN
    -- Archive both items involved in the match
    UPDATE public.items
    SET is_archived = true, updated_at = now()
    WHERE id IN (NEW.item_a_id, NEW.item_b_id);
  END IF;
  
  RETURN NEW;
END;
$$;

-- Create trigger for automatic archiving
CREATE TRIGGER archive_items_on_match_complete_trigger
AFTER UPDATE ON public.matches
FOR EACH ROW
EXECUTE FUNCTION public.archive_items_on_match_complete();