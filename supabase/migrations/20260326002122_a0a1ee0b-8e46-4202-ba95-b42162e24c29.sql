
-- Add expires_at column to deal_invites
ALTER TABLE public.deal_invites 
ADD COLUMN IF NOT EXISTS expires_at timestamptz DEFAULT (now() + interval '2 days');

-- Update existing pending invites to expire 2 days from now
UPDATE public.deal_invites 
SET expires_at = now() + interval '2 days' 
WHERE status = 'pending' AND expires_at IS NULL;

-- Update the validation trigger to respect expiration
CREATE OR REPLACE FUNCTION public.validate_deal_invite_attempt()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
DECLARE
  rejection_count integer;
  pending_exists boolean;
BEGIN
  -- Check if there's already a pending invite for this pair that hasn't expired
  SELECT EXISTS(
    SELECT 1 FROM public.deal_invites
    WHERE sender_item_id = NEW.sender_item_id
      AND receiver_item_id = NEW.receiver_item_id
      AND status = 'pending'
      AND expires_at > now()
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
  
  -- Set expires_at for the new invite
  NEW.expires_at := now() + interval '2 days';
  
  RETURN NEW;
END;
$function$;
