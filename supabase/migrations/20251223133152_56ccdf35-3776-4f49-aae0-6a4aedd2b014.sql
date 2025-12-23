-- Create table to track undo usage per item pair
CREATE TABLE public.swipe_undos (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  swiper_item_id uuid NOT NULL REFERENCES items(id) ON DELETE CASCADE,
  swiped_item_id uuid NOT NULL REFERENCES items(id) ON DELETE CASCADE,
  undone_at timestamp with time zone NOT NULL DEFAULT now(),
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.swipe_undos ENABLE ROW LEVEL SECURITY;

-- Users can view their own undo history
CREATE POLICY "Users can view own undos"
ON public.swipe_undos
FOR SELECT
USING (EXISTS (
  SELECT 1 FROM items
  WHERE items.id = swipe_undos.swiper_item_id
  AND items.user_id = auth.uid()
));

-- Users can create undos for their own items
CREATE POLICY "Users can create undos for own items"
ON public.swipe_undos
FOR INSERT
WITH CHECK (EXISTS (
  SELECT 1 FROM items
  WHERE items.id = swipe_undos.swiper_item_id
  AND items.user_id = auth.uid()
));

-- Create index for faster lookups
CREATE INDEX idx_swipe_undos_lookup ON public.swipe_undos(swiper_item_id, swiped_item_id, undone_at);