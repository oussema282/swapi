-- Add attempt column to deal_invites for tracking resend attempts
ALTER TABLE public.deal_invites ADD COLUMN IF NOT EXISTS attempt integer NOT NULL DEFAULT 1;

-- Create index for efficient queries on sender_item_id, receiver_item_id, status
CREATE INDEX IF NOT EXISTS idx_deal_invites_item_pair_status 
ON public.deal_invites (sender_item_id, receiver_item_id, status);

-- Create index for pending invites lookup
CREATE INDEX IF NOT EXISTS idx_deal_invites_receiver_pending 
ON public.deal_invites (receiver_item_id, status) WHERE status = 'pending';

-- Add unique constraint to prevent more than 2 attempts for same pair
-- We need to handle this at application level since we want to allow attempt 1 and 2 but not 3+
-- Instead, add a check constraint
ALTER TABLE public.deal_invites ADD CONSTRAINT check_max_attempts CHECK (attempt <= 2);

-- Create a function to validate resend attempts
CREATE OR REPLACE FUNCTION public.validate_deal_invite_attempt()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  rejection_count integer;
  pending_exists boolean;
BEGIN
  -- Check if there's already a pending invite for this pair
  SELECT EXISTS(
    SELECT 1 FROM public.deal_invites
    WHERE sender_item_id = NEW.sender_item_id
      AND receiver_item_id = NEW.receiver_item_id
      AND status = 'pending'
      AND id != COALESCE(NEW.id, '00000000-0000-0000-0000-000000000000'::uuid)
  ) INTO pending_exists;
  
  IF pending_exists THEN
    RAISE EXCEPTION 'A pending invite already exists for this item pair';
  END IF;
  
  -- Count rejections for this exact pair
  SELECT COUNT(*) INTO rejection_count
  FROM public.deal_invites
  WHERE sender_item_id = NEW.sender_item_id
    AND receiver_item_id = NEW.receiver_item_id
    AND status = 'rejected';
  
  -- If 2+ rejections already exist, block the insert
  IF rejection_count >= 2 THEN
    RAISE EXCEPTION 'Maximum resend attempts reached for this item pair (2 rejections)';
  END IF;
  
  -- Set attempt number based on rejection count (rejection_count + 1)
  NEW.attempt := rejection_count + 1;
  
  RETURN NEW;
END;
$$;

-- Create trigger for validating deal invite attempts
DROP TRIGGER IF EXISTS validate_deal_invite_attempt_trigger ON public.deal_invites;
CREATE TRIGGER validate_deal_invite_attempt_trigger
BEFORE INSERT ON public.deal_invites
FOR EACH ROW
EXECUTE FUNCTION public.validate_deal_invite_attempt();