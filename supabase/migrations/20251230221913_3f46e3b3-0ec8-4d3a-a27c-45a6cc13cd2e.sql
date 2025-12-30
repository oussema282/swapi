-- Add UPDATE policy for user_subscriptions
CREATE POLICY "Users can update own subscription" 
ON public.user_subscriptions 
FOR UPDATE 
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Create feature_upgrades table for individual feature purchases
CREATE TABLE public.feature_upgrades (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  feature_type TEXT NOT NULL CHECK (feature_type IN ('swipes', 'deal_invites', 'map', 'search', 'items')),
  bonus_amount INTEGER NOT NULL DEFAULT 0,
  expires_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, feature_type)
);

-- Enable RLS
ALTER TABLE public.feature_upgrades ENABLE ROW LEVEL SECURITY;

-- RLS policies for feature_upgrades
CREATE POLICY "Users can view own feature upgrades" 
ON public.feature_upgrades 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own feature upgrades" 
ON public.feature_upgrades 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own feature upgrades" 
ON public.feature_upgrades 
FOR UPDATE 
USING (auth.uid() = user_id);

-- Add trigger for updated_at
CREATE TRIGGER update_feature_upgrades_updated_at
BEFORE UPDATE ON public.feature_upgrades
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();