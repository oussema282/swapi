-- Create function to get all completed swap item IDs (for map exclusion)
-- This needs to bypass RLS to provide consistent results for all users
CREATE OR REPLACE FUNCTION public.get_completed_swap_item_ids()
RETURNS TABLE (item_id uuid)
LANGUAGE sql
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
  SELECT DISTINCT unnest(ARRAY[item_a_id, item_b_id]) as item_id
  FROM matches
  WHERE is_completed = true;
$$;