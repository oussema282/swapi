-- Add latitude and longitude columns to items table
ALTER TABLE public.items
ADD COLUMN latitude double precision,
ADD COLUMN longitude double precision;

-- Add latitude and longitude columns to profiles table
ALTER TABLE public.profiles
ADD COLUMN latitude double precision,
ADD COLUMN longitude double precision;

-- Create index for geo queries on items
CREATE INDEX idx_items_geo ON public.items (latitude, longitude) WHERE latitude IS NOT NULL AND longitude IS NOT NULL;

-- Create index for geo queries on profiles
CREATE INDEX idx_profiles_geo ON public.profiles (latitude, longitude) WHERE latitude IS NOT NULL AND longitude IS NOT NULL;

-- Create a table to track user category preferences based on swipe behavior
CREATE TABLE public.user_preferences (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL UNIQUE,
  category_weights jsonb NOT NULL DEFAULT '{}'::jsonb,
  condition_weights jsonb NOT NULL DEFAULT '{}'::jsonb,
  value_range_preference jsonb NOT NULL DEFAULT '{"min": 0, "max": 1000}'::jsonb,
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.user_preferences ENABLE ROW LEVEL SECURITY;

-- RLS policies for user_preferences
CREATE POLICY "Users can view own preferences"
ON public.user_preferences FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own preferences"
ON public.user_preferences FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own preferences"
ON public.user_preferences FOR UPDATE
USING (auth.uid() = user_id);

-- Add trigger for updated_at
CREATE TRIGGER update_user_preferences_updated_at
BEFORE UPDATE ON public.user_preferences
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();