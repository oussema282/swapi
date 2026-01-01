-- Create a SECURITY DEFINER function to get matches with full item data
-- This bypasses RLS to include archived items for match participants
CREATE OR REPLACE FUNCTION public.get_my_matches_with_items()
RETURNS TABLE (
  match_id uuid,
  item_a_id uuid,
  item_b_id uuid,
  item_a_data jsonb,
  item_b_data jsonb,
  user_a_id uuid,
  user_b_id uuid,
  is_completed boolean,
  completed_at timestamp with time zone,
  created_at timestamp with time zone,
  confirmed_by_user_a boolean,
  confirmed_by_user_b boolean
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_user_id uuid;
BEGIN
  v_user_id := auth.uid();
  
  IF v_user_id IS NULL THEN
    RETURN;
  END IF;

  RETURN QUERY
  SELECT 
    m.id as match_id,
    m.item_a_id,
    m.item_b_id,
    to_jsonb(ia.*) as item_a_data,
    to_jsonb(ib.*) as item_b_data,
    ia.user_id as user_a_id,
    ib.user_id as user_b_id,
    m.is_completed,
    m.completed_at,
    m.created_at,
    m.confirmed_by_user_a,
    m.confirmed_by_user_b
  FROM public.matches m
  JOIN public.items ia ON ia.id = m.item_a_id
  JOIN public.items ib ON ib.id = m.item_b_id
  WHERE ia.user_id = v_user_id OR ib.user_id = v_user_id
  ORDER BY m.created_at DESC;
END;
$$;