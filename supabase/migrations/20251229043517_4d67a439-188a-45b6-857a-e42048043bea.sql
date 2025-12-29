-- Create table for precomputed reciprocal swap opportunities
CREATE TABLE public.swap_opportunities (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  
  -- Cycle type: '2-way' or '3-way'
  cycle_type TEXT NOT NULL CHECK (cycle_type IN ('2-way', '3-way')),
  
  -- For 2-way swaps: both participants
  user_a_id UUID NOT NULL,
  item_a_id UUID NOT NULL REFERENCES public.items(id) ON DELETE CASCADE,
  user_b_id UUID NOT NULL,
  item_b_id UUID NOT NULL REFERENCES public.items(id) ON DELETE CASCADE,
  
  -- For 3-way swaps (nullable for 2-way)
  user_c_id UUID,
  item_c_id UUID REFERENCES public.items(id) ON DELETE CASCADE,
  
  -- Computed confidence score (0-1)
  confidence_score NUMERIC(5,4) NOT NULL DEFAULT 0,
  
  -- Status tracking
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'viewed', 'dismissed', 'matched')),
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT (now() + interval '7 days'),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create indexes for fast queries
CREATE INDEX idx_swap_opportunities_user_a ON public.swap_opportunities(user_a_id) WHERE status = 'active';
CREATE INDEX idx_swap_opportunities_user_b ON public.swap_opportunities(user_b_id) WHERE status = 'active';
CREATE INDEX idx_swap_opportunities_user_c ON public.swap_opportunities(user_c_id) WHERE status = 'active';
CREATE INDEX idx_swap_opportunities_items ON public.swap_opportunities(item_a_id, item_b_id);
CREATE INDEX idx_swap_opportunities_confidence ON public.swap_opportunities(confidence_score DESC) WHERE status = 'active';
CREATE INDEX idx_swap_opportunities_expires ON public.swap_opportunities(expires_at) WHERE status = 'active';

-- Enable RLS
ALTER TABLE public.swap_opportunities ENABLE ROW LEVEL SECURITY;

-- Users can view opportunities involving their items
CREATE POLICY "Users can view their swap opportunities"
  ON public.swap_opportunities
  FOR SELECT
  TO authenticated
  USING (
    auth.uid() = user_a_id OR 
    auth.uid() = user_b_id OR 
    auth.uid() = user_c_id
  );

-- Only system can insert/update (via service role in edge function)
-- No insert/update policies for regular users

-- Create table for implicit preference matrix (learned from swipes)
CREATE TABLE public.user_preferences_learned (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  
  -- Latent factor vectors (stored as JSONB for flexibility)
  user_factors JSONB NOT NULL DEFAULT '[]',
  
  -- Category affinities learned from behavior
  category_affinities JSONB NOT NULL DEFAULT '{}',
  
  -- Last computation timestamp
  computed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- Unique per user
  CONSTRAINT user_preferences_learned_user_unique UNIQUE (user_id)
);

-- RLS for learned preferences
ALTER TABLE public.user_preferences_learned ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own learned preferences"
  ON public.user_preferences_learned
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Add reciprocal_boost column to track which items have high reciprocal potential
ALTER TABLE public.items ADD COLUMN IF NOT EXISTS reciprocal_boost NUMERIC(5,4) DEFAULT 0;

-- Create trigger to update timestamps
CREATE TRIGGER update_swap_opportunities_updated_at
  BEFORE UPDATE ON public.swap_opportunities
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Enable realtime for swap opportunities (for instant notifications)
ALTER PUBLICATION supabase_realtime ADD TABLE public.swap_opportunities;