-- Content moderation logs table
CREATE TABLE public.content_moderation_logs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  content_type TEXT NOT NULL CHECK (content_type IN ('item_photo', 'avatar')),
  content_url TEXT NOT NULL,
  analysis_result JSONB,
  is_safe BOOLEAN NOT NULL DEFAULT true,
  violation_type TEXT,
  confidence_score DECIMAL(4,3),
  action_taken TEXT NOT NULL CHECK (action_taken IN ('allowed', 'blocked', 'flagged', 'review_required')),
  reviewed_by UUID,
  review_notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- User risk scores table
CREATE TABLE public.user_risk_scores (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE,
  risk_score DECIMAL(5,2) NOT NULL DEFAULT 0,
  risk_level TEXT NOT NULL DEFAULT 'low' CHECK (risk_level IN ('low', 'medium', 'high', 'critical')),
  signals JSONB NOT NULL DEFAULT '{}',
  last_analyzed_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  auto_flagged BOOLEAN NOT NULL DEFAULT false,
  admin_reviewed BOOLEAN NOT NULL DEFAULT false,
  admin_notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Fraud detection runs table
CREATE TABLE public.fraud_detection_runs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  run_type TEXT NOT NULL CHECK (run_type IN ('scheduled', 'manual', 'on_report')),
  users_analyzed INTEGER NOT NULL DEFAULT 0,
  high_risk_found INTEGER NOT NULL DEFAULT 0,
  actions_taken JSONB NOT NULL DEFAULT '{}',
  triggered_by UUID,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  completed_at TIMESTAMPTZ
);

-- Enable RLS
ALTER TABLE public.content_moderation_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_risk_scores ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.fraud_detection_runs ENABLE ROW LEVEL SECURITY;

-- RLS Policies for content_moderation_logs
CREATE POLICY "Users can view their own moderation logs"
  ON public.content_moderation_logs FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all moderation logs"
  ON public.content_moderation_logs FOR SELECT
  USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can update moderation logs"
  ON public.content_moderation_logs FOR UPDATE
  USING (public.is_admin(auth.uid()));

-- RLS Policies for user_risk_scores
CREATE POLICY "Users can view their own risk score"
  ON public.user_risk_scores FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all risk scores"
  ON public.user_risk_scores FOR SELECT
  USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can update risk scores"
  ON public.user_risk_scores FOR UPDATE
  USING (public.is_admin(auth.uid()));

-- RLS Policies for fraud_detection_runs
CREATE POLICY "Admins can view fraud detection runs"
  ON public.fraud_detection_runs FOR SELECT
  USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can insert fraud detection runs"
  ON public.fraud_detection_runs FOR INSERT
  WITH CHECK (public.is_admin(auth.uid()));

-- Indexes for performance
CREATE INDEX idx_moderation_logs_user_id ON public.content_moderation_logs(user_id);
CREATE INDEX idx_moderation_logs_action ON public.content_moderation_logs(action_taken);
CREATE INDEX idx_moderation_logs_created ON public.content_moderation_logs(created_at DESC);
CREATE INDEX idx_risk_scores_level ON public.user_risk_scores(risk_level);
CREATE INDEX idx_risk_scores_auto_flagged ON public.user_risk_scores(auto_flagged) WHERE auto_flagged = true;

-- Trigger for updated_at on user_risk_scores
CREATE TRIGGER update_user_risk_scores_updated_at
  BEFORE UPDATE ON public.user_risk_scores
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();