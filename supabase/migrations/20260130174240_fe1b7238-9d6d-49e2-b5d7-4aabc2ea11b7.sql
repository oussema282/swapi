-- Update the item rating function to include time decay on historical data
-- The time decay formula: exp(-(now - eventTime) / 21 days)
-- This applies decay during batch recalculations, not on each swipe

-- Create a function to recalculate ratings with time decay
CREATE OR REPLACE FUNCTION public.recalculate_item_ratings_with_decay()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  tau_days double precision := 21.0; -- Half-life in days
  item_record RECORD;
  swipe_record RECORD;
  new_alpha double precision;
  new_beta double precision;
  time_weight double precision;
  event_weight double precision;
  days_old double precision;
BEGIN
  -- Loop through all items with ratings
  FOR item_record IN SELECT DISTINCT item_id FROM item_ratings LOOP
    new_alpha := 3.0; -- Reset to prior
    new_beta := 3.0;
    
    -- Recalculate from swipe history with time decay
    FOR swipe_record IN 
      SELECT liked, created_at 
      FROM swipes 
      WHERE swiped_item_id = item_record.item_id
      ORDER BY created_at ASC
    LOOP
      -- Calculate days old
      days_old := EXTRACT(EPOCH FROM (now() - swipe_record.created_at)) / 86400.0;
      
      -- Time decay: exp(-days_old / tau_days)
      time_weight := exp(-days_old / tau_days);
      
      -- Event weight
      IF swipe_record.liked THEN
        event_weight := 1.0;
        new_alpha := new_alpha + (event_weight * time_weight);
      ELSE
        event_weight := 0.5;
        new_beta := new_beta + (event_weight * time_weight);
      END IF;
    END LOOP;
    
    -- Also factor in successful exchanges (no decay - they're always important)
    new_alpha := new_alpha + (
      SELECT COALESCE(successful_exchanges * 2.0, 0) 
      FROM item_ratings 
      WHERE item_id = item_record.item_id
    );
    
    -- Update the rating
    UPDATE item_ratings
    SET 
      alpha = new_alpha,
      beta = new_beta,
      rating = 1 + 4 * (new_alpha / (new_alpha + new_beta)),
      last_calculated_at = now(),
      updated_at = now()
    WHERE item_id = item_record.item_id;
  END LOOP;
END;
$$;

-- Add comment for documentation
COMMENT ON FUNCTION public.recalculate_item_ratings_with_decay() IS 
'Batch recalculation of item ratings with time decay. Uses formula exp(-days/21) where older swipes have less impact. Should be run periodically (e.g., daily cron job).';