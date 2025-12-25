-- Create user subscriptions table to track Pro status
CREATE TABLE public.user_subscriptions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE,
  is_pro BOOLEAN NOT NULL DEFAULT false,
  subscribed_at TIMESTAMP WITH TIME ZONE,
  expires_at TIMESTAMP WITH TIME ZONE,
  dodo_session_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.user_subscriptions ENABLE ROW LEVEL SECURITY;

-- Users can view their own subscription
CREATE POLICY "Users can view own subscription"
ON public.user_subscriptions
FOR SELECT
USING (auth.uid() = user_id);

-- Users can insert their own subscription (for initial creation)
CREATE POLICY "Users can insert own subscription"
ON public.user_subscriptions
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- System can update subscriptions (for payment confirmation)
CREATE POLICY "System can update subscriptions"
ON public.user_subscriptions
FOR UPDATE
USING (true);

-- Create daily usage tracking table
CREATE TABLE public.daily_usage (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  usage_date DATE NOT NULL DEFAULT CURRENT_DATE,
  swipes_count INTEGER NOT NULL DEFAULT 0,
  searches_count INTEGER NOT NULL DEFAULT 0,
  deal_invites_count INTEGER NOT NULL DEFAULT 0,
  map_uses_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, usage_date)
);

-- Enable RLS
ALTER TABLE public.daily_usage ENABLE ROW LEVEL SECURITY;

-- Users can view their own usage
CREATE POLICY "Users can view own usage"
ON public.daily_usage
FOR SELECT
USING (auth.uid() = user_id);

-- Users can insert their own usage
CREATE POLICY "Users can insert own usage"
ON public.daily_usage
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Users can update their own usage
CREATE POLICY "Users can update own usage"
ON public.daily_usage
FOR UPDATE
USING (auth.uid() = user_id);

-- Create trigger for updated_at on user_subscriptions
CREATE TRIGGER update_user_subscriptions_updated_at
BEFORE UPDATE ON public.user_subscriptions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create trigger for updated_at on daily_usage
CREATE TRIGGER update_daily_usage_updated_at
BEFORE UPDATE ON public.daily_usage
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Function to get or create today's usage record
CREATE OR REPLACE FUNCTION public.get_or_create_daily_usage(p_user_id UUID)
RETURNS public.daily_usage
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  usage_record public.daily_usage;
BEGIN
  -- Try to get existing record
  SELECT * INTO usage_record FROM public.daily_usage
  WHERE user_id = p_user_id AND usage_date = CURRENT_DATE;
  
  -- Create if doesn't exist
  IF NOT FOUND THEN
    INSERT INTO public.daily_usage (user_id, usage_date)
    VALUES (p_user_id, CURRENT_DATE)
    RETURNING * INTO usage_record;
  END IF;
  
  RETURN usage_record;
END;
$$;

-- Function to increment usage counter
CREATE OR REPLACE FUNCTION public.increment_usage(p_user_id UUID, p_field TEXT)
RETURNS public.daily_usage
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  usage_record public.daily_usage;
BEGIN
  -- Get or create today's record
  PERFORM public.get_or_create_daily_usage(p_user_id);
  
  -- Increment the specified field
  IF p_field = 'swipes' THEN
    UPDATE public.daily_usage SET swipes_count = swipes_count + 1
    WHERE user_id = p_user_id AND usage_date = CURRENT_DATE
    RETURNING * INTO usage_record;
  ELSIF p_field = 'searches' THEN
    UPDATE public.daily_usage SET searches_count = searches_count + 1
    WHERE user_id = p_user_id AND usage_date = CURRENT_DATE
    RETURNING * INTO usage_record;
  ELSIF p_field = 'deal_invites' THEN
    UPDATE public.daily_usage SET deal_invites_count = deal_invites_count + 1
    WHERE user_id = p_user_id AND usage_date = CURRENT_DATE
    RETURNING * INTO usage_record;
  ELSIF p_field = 'map_uses' THEN
    UPDATE public.daily_usage SET map_uses_count = map_uses_count + 1
    WHERE user_id = p_user_id AND usage_date = CURRENT_DATE
    RETURNING * INTO usage_record;
  END IF;
  
  RETURN usage_record;
END;
$$;