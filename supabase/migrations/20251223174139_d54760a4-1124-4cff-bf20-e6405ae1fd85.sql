-- Create deal_invites table for users to invite others to swap
CREATE TABLE public.deal_invites (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  sender_item_id UUID NOT NULL REFERENCES public.items(id) ON DELETE CASCADE,
  receiver_item_id UUID NOT NULL REFERENCES public.items(id) ON DELETE CASCADE,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  responded_at TIMESTAMP WITH TIME ZONE,
  UNIQUE(sender_item_id, receiver_item_id)
);

-- Enable RLS
ALTER TABLE public.deal_invites ENABLE ROW LEVEL SECURITY;

-- Users can view invites they sent or received (via their items)
CREATE POLICY "Users can view own deal invites"
ON public.deal_invites
FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM items 
    WHERE (items.id = deal_invites.sender_item_id OR items.id = deal_invites.receiver_item_id) 
    AND items.user_id = auth.uid()
  )
);

-- Users can create deal invites from their own items
CREATE POLICY "Users can create deal invites from own items"
ON public.deal_invites
FOR INSERT
WITH CHECK (
  EXISTS (
    SELECT 1 FROM items 
    WHERE items.id = deal_invites.sender_item_id 
    AND items.user_id = auth.uid()
  )
);

-- Users can update invites they received (to accept/reject)
CREATE POLICY "Users can update received deal invites"
ON public.deal_invites
FOR UPDATE
USING (
  EXISTS (
    SELECT 1 FROM items 
    WHERE items.id = deal_invites.receiver_item_id 
    AND items.user_id = auth.uid()
  )
);

-- Function to create match when deal invite is accepted
CREATE OR REPLACE FUNCTION public.handle_deal_invite_accepted()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NEW.status = 'accepted' AND OLD.status = 'pending' THEN
    -- Create a match (ensure consistent ordering to avoid duplicates)
    INSERT INTO public.matches (item_a_id, item_b_id)
    VALUES (
      LEAST(NEW.sender_item_id, NEW.receiver_item_id),
      GREATEST(NEW.sender_item_id, NEW.receiver_item_id)
    )
    ON CONFLICT DO NOTHING;
    
    -- Set responded_at
    NEW.responded_at = now();
  END IF;
  RETURN NEW;
END;
$$;

-- Trigger to create match on acceptance
CREATE TRIGGER on_deal_invite_accepted
  BEFORE UPDATE ON public.deal_invites
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_deal_invite_accepted();