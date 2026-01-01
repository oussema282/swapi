-- Drop the existing policy
DROP POLICY IF EXISTS "Anyone can view active non-archived items" ON public.items;

-- Create a new policy that allows viewing:
-- 1. Active non-archived items (for discovery/swipes)
-- 2. Items owned by the current user (any status)
-- 3. Items that are part of a match with the current user (for completed swaps to show names correctly)
CREATE POLICY "Users can view items they interact with" 
ON public.items 
FOR SELECT 
USING (
  -- Active items for discovery
  ((is_active = true) AND (is_archived = false))
  OR 
  -- User's own items (any status)
  (auth.uid() = user_id)
  OR
  -- Items in matches with the current user
  EXISTS (
    SELECT 1 FROM public.matches m
    JOIN public.items my_items ON (my_items.id = m.item_a_id OR my_items.id = m.item_b_id)
    WHERE (m.item_a_id = items.id OR m.item_b_id = items.id)
    AND my_items.user_id = auth.uid()
  )
  OR
  -- Items in deal invites with the current user
  EXISTS (
    SELECT 1 FROM public.deal_invites di
    JOIN public.items my_items ON my_items.id = di.sender_item_id OR my_items.id = di.receiver_item_id
    WHERE (di.sender_item_id = items.id OR di.receiver_item_id = items.id)
    AND my_items.user_id = auth.uid()
  )
);