-- Add DELETE policy for swipes table so users can undo their swipes
CREATE POLICY "Users can delete own swipes"
ON public.swipes
FOR DELETE
USING (EXISTS (
  SELECT 1 FROM items
  WHERE items.id = swipes.swiper_item_id
    AND items.user_id = auth.uid()
));