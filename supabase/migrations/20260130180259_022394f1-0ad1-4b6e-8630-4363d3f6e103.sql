-- Task 4: CONTENT_MODERATION_SYSTEM
-- Create reports table for user content moderation

CREATE TABLE public.reports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  reporter_id uuid NOT NULL,
  report_type text NOT NULL CHECK (report_type IN ('item', 'user', 'message')),
  target_id uuid NOT NULL,
  reason text NOT NULL CHECK (reason IN (
    'prohibited_item', 'fake_listing', 'spam', 'harassment', 
    'inappropriate_content', 'scam', 'other'
  )),
  description text,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'resolved', 'dismissed')),
  admin_notes text,
  resolved_by uuid,
  created_at timestamptz NOT NULL DEFAULT now(),
  resolved_at timestamptz
);

-- Enable RLS
ALTER TABLE public.reports ENABLE ROW LEVEL SECURITY;

-- Users can create reports
CREATE POLICY "Users can create reports"
ON public.reports FOR INSERT TO authenticated
WITH CHECK (auth.uid() = reporter_id);

-- Users can view their own reports
CREATE POLICY "Users can view own reports"
ON public.reports FOR SELECT TO authenticated
USING (auth.uid() = reporter_id);

-- Admins can view/update all reports
CREATE POLICY "Admins can manage reports"
ON public.reports FOR ALL TO authenticated
USING (public.is_admin(auth.uid()));

-- Task 7: PAYMENT_VERIFICATION
-- Add unique constraint for idempotency on dodo_session_id
CREATE UNIQUE INDEX IF NOT EXISTS user_subscriptions_dodo_session_unique 
ON public.user_subscriptions (dodo_session_id) 
WHERE dodo_session_id IS NOT NULL;

-- Task 8: RECIPROCAL_OPTIMIZER_SAFETY
-- Add boost_expires_at column
ALTER TABLE public.items ADD COLUMN IF NOT EXISTS boost_expires_at timestamptz;

-- Add is_flagged and flagged_reason to items for moderation
ALTER TABLE public.items ADD COLUMN IF NOT EXISTS is_flagged boolean NOT NULL DEFAULT false;
ALTER TABLE public.items ADD COLUMN IF NOT EXISTS flagged_reason text;