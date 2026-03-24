CREATE OR REPLACE FUNCTION public.get_user_swap_count(p_user_id uuid)
RETURNS integer
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT COALESCE(
    (SELECT COUNT(DISTINCT m.id)::integer
     FROM matches m
     JOIN items ia ON ia.id = m.item_a_id
     JOIN items ib ON ib.id = m.item_b_id
     WHERE m.is_completed = true
       AND (ia.user_id = p_user_id OR ib.user_id = p_user_id)),
    0
  );
$$;