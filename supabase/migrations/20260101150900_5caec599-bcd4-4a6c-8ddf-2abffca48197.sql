-- Drop the current policy
DROP POLICY IF EXISTS "Anyone can view active non-archived items" ON public.items;

-- Create a policy that allows viewing items in matches without recursive joins
-- We check if the current item is in a match where one of the items belongs to the current user
CREATE POLICY "Users can view relevant items" 
ON public.items 
FOR SELECT 
USING (
  -- Active non-archived items (for discovery/swipes)
  ((is_active = true) AND (is_archived = false))
  OR 
  -- User's own items (any status)
  (auth.uid() = user_id)
  OR
  -- Items that are in matches with items owned by the current user
  -- This allows seeing archived items from completed swaps
  EXISTS (
    SELECT 1 FROM public.matches m
    WHERE (
      -- Current item is item_a and item_b belongs to current user
      (m.item_a_id = items.id AND EXISTS (SELECT 1 FROM public.items i2 WHERE i2.id = m.item_b_id AND i2.user_id = auth.uid()))
      OR
      -- Current item is item_b and item_a belongs to current user  
      (m.item_b_id = items.id AND EXISTS (SELECT 1 FROM public.items i2 WHERE i2.id = m.item_a_id AND i2.user_id = auth.uid()))
    )
  )
);