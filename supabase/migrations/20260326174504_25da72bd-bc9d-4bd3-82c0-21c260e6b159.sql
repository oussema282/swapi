
ALTER TABLE public.gift_requests
  ADD COLUMN attempt integer NOT NULL DEFAULT 1,
  ADD COLUMN expires_at timestamptz DEFAULT (now() + interval '2 days');

CREATE OR REPLACE FUNCTION public.validate_gift_request_attempt()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $$
DECLARE
  rejection_count integer;
  pending_exists boolean;
BEGIN
  SELECT EXISTS(
    SELECT 1 FROM public.gift_requests
    WHERE gift_item_id = NEW.gift_item_id
      AND requester_id = NEW.requester_id
      AND status = 'pending'
      AND expires_at > now()
      AND id != COALESCE(NEW.id, '00000000-0000-0000-0000-000000000000'::uuid)
  ) INTO pending_exists;
  IF pending_exists THEN
    RAISE EXCEPTION 'A pending gift request already exists';
  END IF;
  SELECT COUNT(*) INTO rejection_count
  FROM public.gift_requests
  WHERE gift_item_id = NEW.gift_item_id
    AND requester_id = NEW.requester_id
    AND status = 'rejected';
  IF rejection_count >= 2 THEN
    RAISE EXCEPTION 'Maximum attempts reached (2 rejections)';
  END IF;
  NEW.attempt := rejection_count + 1;
  NEW.expires_at := now() + interval '2 days';
  RETURN NEW;
END;
$$;

CREATE TRIGGER validate_gift_request_before_insert
  BEFORE INSERT ON public.gift_requests
  FOR EACH ROW EXECUTE FUNCTION public.validate_gift_request_attempt();
