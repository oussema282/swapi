
-- Add is_gift column to items table
ALTER TABLE public.items ADD COLUMN is_gift boolean NOT NULL DEFAULT false;

-- Create gift_requests table
CREATE TABLE public.gift_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  gift_item_id uuid NOT NULL REFERENCES public.items(id) ON DELETE CASCADE,
  requester_id uuid NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  message text,
  created_at timestamptz NOT NULL DEFAULT now(),
  responded_at timestamptz
);

ALTER TABLE public.gift_requests ENABLE ROW LEVEL SECURITY;

-- Owner can see requests on their gifts, requester can see their own requests
CREATE POLICY "Owners and requesters can view gift requests" ON public.gift_requests
  FOR SELECT TO authenticated
  USING (
    EXISTS (SELECT 1 FROM items WHERE items.id = gift_requests.gift_item_id AND items.user_id = auth.uid())
    OR requester_id = auth.uid()
  );

-- Users can request gifts
CREATE POLICY "Users can request gifts" ON public.gift_requests
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = requester_id);

-- Owners can update (accept/reject)
CREATE POLICY "Owners can respond to gift requests" ON public.gift_requests
  FOR UPDATE TO authenticated
  USING (EXISTS (SELECT 1 FROM items WHERE items.id = gift_requests.gift_item_id AND items.user_id = auth.uid()));

-- Add gift match fields to matches table
ALTER TABLE public.matches ADD COLUMN is_gift_match boolean DEFAULT false;
ALTER TABLE public.matches ADD COLUMN gift_requester_id uuid;
