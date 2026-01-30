-- Algorithm Policy Tables for AI-driven recommendation tuning
-- Enables dynamic policy changes without redeployment

-- Table 1: algorithm_policies - Stores AI-generated policy versions
CREATE TABLE public.algorithm_policies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  policy_version text UNIQUE NOT NULL,
  weights jsonb NOT NULL,
  exploration_policy jsonb NOT NULL,
  reciprocal_policy jsonb NOT NULL,
  active boolean DEFAULT false,
  description text,
  created_by text,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Table 2: algorithm_policy_metrics - Stores aggregated outcome metrics
CREATE TABLE public.algorithm_policy_metrics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  policy_version text NOT NULL REFERENCES algorithm_policies(policy_version) ON DELETE CASCADE,
  metric_snapshot jsonb NOT NULL,
  period_start date NOT NULL,
  period_end date NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Table 3: algorithm_policy_rollouts - Controls gradual activation and A/B testing
CREATE TABLE public.algorithm_policy_rollouts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  policy_version text NOT NULL REFERENCES algorithm_policies(policy_version) ON DELETE CASCADE,
  traffic_percentage integer DEFAULT 0 CHECK (traffic_percentage >= 0 AND traffic_percentage <= 100),
  enabled boolean DEFAULT false,
  started_at timestamptz,
  ended_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.algorithm_policies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.algorithm_policy_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.algorithm_policy_rollouts ENABLE ROW LEVEL SECURITY;

-- RLS Policies for algorithm_policies
CREATE POLICY "Anyone can read policies"
ON public.algorithm_policies FOR SELECT
USING (true);

CREATE POLICY "Admins can insert policies"
ON public.algorithm_policies FOR INSERT
WITH CHECK (is_admin(auth.uid()));

CREATE POLICY "Admins can update policies"
ON public.algorithm_policies FOR UPDATE
USING (is_admin(auth.uid()));

CREATE POLICY "Admins can delete policies"
ON public.algorithm_policies FOR DELETE
USING (is_admin(auth.uid()));

-- RLS Policies for algorithm_policy_metrics (service role only for writes)
CREATE POLICY "Anyone can read metrics"
ON public.algorithm_policy_metrics FOR SELECT
USING (true);

-- RLS Policies for algorithm_policy_rollouts
CREATE POLICY "Anyone can read rollouts"
ON public.algorithm_policy_rollouts FOR SELECT
USING (true);

CREATE POLICY "Admins can insert rollouts"
ON public.algorithm_policy_rollouts FOR INSERT
WITH CHECK (is_admin(auth.uid()));

CREATE POLICY "Admins can update rollouts"
ON public.algorithm_policy_rollouts FOR UPDATE
USING (is_admin(auth.uid()));

CREATE POLICY "Admins can delete rollouts"
ON public.algorithm_policy_rollouts FOR DELETE
USING (is_admin(auth.uid()));

-- Function: get_active_policy - Returns the currently active policy
CREATE OR REPLACE FUNCTION public.get_active_policy()
RETURNS TABLE (
  policy_version text,
  weights jsonb,
  exploration_policy jsonb,
  reciprocal_policy jsonb
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    p.policy_version,
    p.weights,
    p.exploration_policy,
    p.reciprocal_policy
  FROM algorithm_policies p
  WHERE p.active = true
  LIMIT 1;
END;
$$;

-- Function: get_policy_for_request - Returns policy based on rollout percentage (A/B testing)
CREATE OR REPLACE FUNCTION public.get_policy_for_request(request_hash integer)
RETURNS TABLE (
  policy_version text,
  weights jsonb,
  exploration_policy jsonb,
  reciprocal_policy jsonb
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  bucket integer;
  selected_version text;
BEGIN
  bucket := request_hash % 100;
  
  -- Check rollouts first (higher traffic_percentage = wider rollout)
  SELECT r.policy_version INTO selected_version
  FROM algorithm_policy_rollouts r
  WHERE r.enabled = true
    AND bucket < r.traffic_percentage
  ORDER BY r.traffic_percentage DESC
  LIMIT 1;
  
  -- If no rollout matched, use active policy
  IF selected_version IS NULL THEN
    SELECT p.policy_version INTO selected_version
    FROM algorithm_policies p
    WHERE p.active = true
    LIMIT 1;
  END IF;
  
  -- Return the selected policy
  RETURN QUERY
  SELECT 
    p.policy_version,
    p.weights,
    p.exploration_policy,
    p.reciprocal_policy
  FROM algorithm_policies p
  WHERE p.policy_version = selected_version;
END;
$$;

-- Trigger function: ensure_single_active_policy - Only one policy can be active
CREATE OR REPLACE FUNCTION public.ensure_single_active_policy()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  IF NEW.active = true THEN
    UPDATE algorithm_policies 
    SET active = false 
    WHERE id != NEW.id AND active = true;
  END IF;
  RETURN NEW;
END;
$$;

-- Create trigger to enforce single active policy
CREATE TRIGGER enforce_single_active_policy
BEFORE INSERT OR UPDATE ON public.algorithm_policies
FOR EACH ROW
EXECUTE FUNCTION public.ensure_single_active_policy();

-- Insert seed data: v1.0.0 baseline policy matching current hardcoded defaults
INSERT INTO public.algorithm_policies (
  policy_version,
  weights,
  exploration_policy,
  reciprocal_policy,
  active,
  description,
  created_by
) VALUES (
  'v1.0.0',
  '{
    "geoScore": 0.28,
    "categorySimilarity": 0.18,
    "exchangeCompatibility": 0.18,
    "behaviorAffinity": 0.10,
    "freshness": 0.06,
    "conditionScore": 0.08,
    "reciprocalBoost": 0.12
  }'::jsonb,
  '{
    "randomness": 0.1,
    "cold_start_boost": 0,
    "stale_item_penalty": 0,
    "cold_start_threshold_swipes": 5,
    "stale_threshold_days": 14
  }'::jsonb,
  '{
    "priority": "medium",
    "boost_cap": 0.5
  }'::jsonb,
  true,
  'Initial baseline policy matching hardcoded defaults',
  'system'
);