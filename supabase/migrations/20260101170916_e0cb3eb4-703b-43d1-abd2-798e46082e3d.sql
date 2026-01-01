-- Add confirmation tracking columns to matches table
ALTER TABLE public.matches
ADD COLUMN IF NOT EXISTS confirmed_by_user_a boolean NOT NULL DEFAULT false,
ADD COLUMN IF NOT EXISTS confirmed_by_user_b boolean NOT NULL DEFAULT false;

-- Create a function to handle exchange confirmation
CREATE OR REPLACE FUNCTION public.confirm_exchange(p_match_id uuid)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  v_match RECORD;
  v_user_id uuid;
  v_is_user_a boolean;
  v_result jsonb;
BEGIN
  v_user_id := auth.uid();
  
  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;

  -- Get match with item ownership info
  SELECT 
    m.*,
    ia.user_id as item_a_owner,
    ib.user_id as item_b_owner
  INTO v_match
  FROM public.matches m
  JOIN public.items ia ON ia.id = m.item_a_id
  JOIN public.items ib ON ib.id = m.item_b_id
  WHERE m.id = p_match_id;
  
  IF NOT FOUND THEN
    RAISE EXCEPTION 'Match not found';
  END IF;
  
  -- Check if user is part of this match
  IF v_user_id != v_match.item_a_owner AND v_user_id != v_match.item_b_owner THEN
    RAISE EXCEPTION 'User is not part of this match';
  END IF;
  
  -- Check if already completed
  IF v_match.is_completed THEN
    RETURN jsonb_build_object('status', 'already_completed');
  END IF;
  
  -- Determine if user is "user_a" (owner of item_a) or "user_b"
  v_is_user_a := (v_user_id = v_match.item_a_owner);
  
  -- Check if user already confirmed
  IF v_is_user_a AND v_match.confirmed_by_user_a THEN
    RETURN jsonb_build_object('status', 'already_confirmed');
  END IF;
  
  IF NOT v_is_user_a AND v_match.confirmed_by_user_b THEN
    RETURN jsonb_build_object('status', 'already_confirmed');
  END IF;
  
  -- Update the confirmation
  IF v_is_user_a THEN
    UPDATE public.matches
    SET confirmed_by_user_a = true
    WHERE id = p_match_id;
    
    -- Check if this completes the exchange
    IF v_match.confirmed_by_user_b THEN
      UPDATE public.matches
      SET is_completed = true, completed_at = now()
      WHERE id = p_match_id;
      
      RETURN jsonb_build_object('status', 'completed');
    ELSE
      RETURN jsonb_build_object('status', 'confirmed', 'waiting_for_other', true);
    END IF;
  ELSE
    UPDATE public.matches
    SET confirmed_by_user_b = true
    WHERE id = p_match_id;
    
    -- Check if this completes the exchange
    IF v_match.confirmed_by_user_a THEN
      UPDATE public.matches
      SET is_completed = true, completed_at = now()
      WHERE id = p_match_id;
      
      RETURN jsonb_build_object('status', 'completed');
    ELSE
      RETURN jsonb_build_object('status', 'confirmed', 'waiting_for_other', true);
    END IF;
  END IF;
END;
$$;