-- Create item_ratings table to store calculated ratings
CREATE TABLE public.item_ratings (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  item_id uuid NOT NULL UNIQUE REFERENCES public.items(id) ON DELETE CASCADE,
  alpha double precision NOT NULL DEFAULT 3.0,
  beta double precision NOT NULL DEFAULT 3.0,
  rating double precision NOT NULL DEFAULT 3.0,
  total_interactions integer NOT NULL DEFAULT 0,
  likes_count integer NOT NULL DEFAULT 0,
  dislikes_count integer NOT NULL DEFAULT 0,
  successful_exchanges integer NOT NULL DEFAULT 0,
  last_calculated_at timestamp with time zone NOT NULL DEFAULT now(),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.item_ratings ENABLE ROW LEVEL SECURITY;

-- Everyone can view ratings
CREATE POLICY "Anyone can view item ratings"
ON public.item_ratings FOR SELECT
USING (true);

-- System can manage ratings (via service role)
CREATE POLICY "System can manage ratings"
ON public.item_ratings FOR ALL
USING (true)
WITH CHECK (true);

-- Create index for fast lookups
CREATE INDEX idx_item_ratings_item_id ON public.item_ratings(item_id);
CREATE INDEX idx_item_ratings_rating ON public.item_ratings(rating DESC);

-- Add trigger for updated_at
CREATE TRIGGER update_item_ratings_updated_at
BEFORE UPDATE ON public.item_ratings
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create function to update item rating after swipe
CREATE OR REPLACE FUNCTION public.update_item_rating_on_swipe()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  tau_days double precision := 21.0;
  time_weight double precision;
  event_weight double precision;
  current_alpha double precision;
  current_beta double precision;
  new_rating double precision;
BEGIN
  -- Calculate time weight (always 1.0 for new events)
  time_weight := 1.0;
  
  -- Determine event weight
  IF NEW.liked = true THEN
    event_weight := 1.0; -- like
  ELSE
    event_weight := -0.5; -- dislike (less negative than skip)
  END IF;
  
  -- Get or create rating record
  INSERT INTO public.item_ratings (item_id)
  VALUES (NEW.swiped_item_id)
  ON CONFLICT (item_id) DO NOTHING;
  
  -- Update the rating using Bayesian approach
  UPDATE public.item_ratings
  SET
    alpha = CASE 
      WHEN event_weight > 0 THEN alpha + (event_weight * time_weight)
      ELSE alpha
    END,
    beta = CASE 
      WHEN event_weight < 0 THEN beta + (ABS(event_weight) * time_weight)
      ELSE beta
    END,
    likes_count = CASE WHEN NEW.liked THEN likes_count + 1 ELSE likes_count END,
    dislikes_count = CASE WHEN NOT NEW.liked THEN dislikes_count + 1 ELSE dislikes_count END,
    total_interactions = total_interactions + 1,
    rating = 1 + 4 * (
      CASE 
        WHEN event_weight > 0 THEN (alpha + event_weight * time_weight)
        ELSE alpha
      END / (
        CASE 
          WHEN event_weight > 0 THEN (alpha + event_weight * time_weight)
          ELSE alpha
        END + 
        CASE 
          WHEN event_weight < 0 THEN (beta + ABS(event_weight) * time_weight)
          ELSE beta
        END
      )
    ),
    last_calculated_at = now(),
    updated_at = now()
  WHERE item_id = NEW.swiped_item_id;
  
  RETURN NEW;
END;
$$;

-- Create trigger to update ratings on swipe
CREATE TRIGGER update_rating_on_swipe
AFTER INSERT ON public.swipes
FOR EACH ROW
EXECUTE FUNCTION public.update_item_rating_on_swipe();

-- Create function to update rating on successful match completion
CREATE OR REPLACE FUNCTION public.update_item_rating_on_match_complete()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Only process when match becomes completed
  IF NEW.is_completed = true AND (OLD.is_completed = false OR OLD.is_completed IS NULL) THEN
    -- Update both items involved in the match
    UPDATE public.item_ratings
    SET
      alpha = alpha + 2.0, -- successful exchange weight
      successful_exchanges = successful_exchanges + 1,
      rating = 1 + 4 * ((alpha + 2.0) / (alpha + 2.0 + beta)),
      last_calculated_at = now(),
      updated_at = now()
    WHERE item_id IN (NEW.item_a_id, NEW.item_b_id);
  END IF;
  
  RETURN NEW;
END;
$$;

-- Create trigger for match completion
CREATE TRIGGER update_rating_on_match_complete
AFTER UPDATE ON public.matches
FOR EACH ROW
EXECUTE FUNCTION public.update_item_rating_on_match_complete();

-- Initialize ratings for existing items
INSERT INTO public.item_ratings (item_id, alpha, beta, rating)
SELECT 
  id,
  3.0 + COALESCE((SELECT COUNT(*) FROM swipes WHERE swiped_item_id = items.id AND liked = true), 0),
  3.0 + COALESCE((SELECT COUNT(*) FROM swipes WHERE swiped_item_id = items.id AND liked = false), 0) * 0.5,
  3.0
FROM public.items
ON CONFLICT (item_id) DO NOTHING;

-- Update initial ratings based on existing swipes
UPDATE public.item_ratings ir
SET
  rating = 1 + 4 * (ir.alpha / (ir.alpha + ir.beta)),
  likes_count = (SELECT COUNT(*) FROM swipes WHERE swiped_item_id = ir.item_id AND liked = true),
  dislikes_count = (SELECT COUNT(*) FROM swipes WHERE swiped_item_id = ir.item_id AND liked = false),
  total_interactions = (SELECT COUNT(*) FROM swipes WHERE swiped_item_id = ir.item_id);