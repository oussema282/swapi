-- Allow users to read swipes that target their own items (incoming likes/dislikes)
-- This enables missed-match detection and any UI notifications for "someone liked your item".

CREATE POLICY "Users can view swipes on their items"
ON public.swipes
FOR SELECT
USING (
  EXISTS (
    SELECT 1
    FROM public.items
    WHERE items.id = swipes.swiped_item_id
      AND items.user_id = auth.uid()
  )
);
