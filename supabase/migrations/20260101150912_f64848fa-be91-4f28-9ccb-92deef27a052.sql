-- Drop the complex policy
DROP POLICY IF EXISTS "Users can view relevant items" ON public.items;

-- Create a simple policy - the complex match visibility will be handled differently
CREATE POLICY "Anyone can view active non-archived items" 
ON public.items 
FOR SELECT 
USING (
  -- Active non-archived items (for discovery/swipes)
  ((is_active = true) AND (is_archived = false))
  OR 
  -- User's own items (any status - so they can see their archived items)
  (auth.uid() = user_id)
);

-- Create a security definer function to get match items including archived ones
CREATE OR REPLACE FUNCTION public.get_match_with_items(p_match_id uuid)
RETURNS TABLE (
  match_id uuid,
  item_a_id uuid,
  item_b_id uuid,
  item_a_data jsonb,
  item_b_data jsonb,
  is_completed boolean,
  completed_at timestamptz,
  created_at timestamptz
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    m.id as match_id,
    m.item_a_id,
    m.item_b_id,
    to_jsonb(ia.*) as item_a_data,
    to_jsonb(ib.*) as item_b_data,
    m.is_completed,
    m.completed_at,
    m.created_at
  FROM public.matches m
  JOIN public.items ia ON ia.id = m.item_a_id
  JOIN public.items ib ON ib.id = m.item_b_id
  WHERE m.id = p_match_id;
END;
$$;