-- Add user suspension/ban/verification fields to profiles
ALTER TABLE public.profiles
ADD COLUMN IF NOT EXISTS is_suspended boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS suspended_until timestamptz DEFAULT NULL,
ADD COLUMN IF NOT EXISTS suspension_reason text DEFAULT NULL,
ADD COLUMN IF NOT EXISTS is_banned boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS banned_at timestamptz DEFAULT NULL,
ADD COLUMN IF NOT EXISTS ban_reason text DEFAULT NULL,
ADD COLUMN IF NOT EXISTS is_verified boolean DEFAULT false;

-- Add appeal fields to content_moderation_logs
ALTER TABLE public.content_moderation_logs
ADD COLUMN IF NOT EXISTS appeal_status text DEFAULT NULL,
ADD COLUMN IF NOT EXISTS appeal_notes text DEFAULT NULL,
ADD COLUMN IF NOT EXISTS admin_decision text DEFAULT NULL,
ADD COLUMN IF NOT EXISTS admin_decision_at timestamptz DEFAULT NULL;

-- Create index for faster queries on suspended/banned users
CREATE INDEX IF NOT EXISTS idx_profiles_is_suspended ON public.profiles(is_suspended) WHERE is_suspended = true;
CREATE INDEX IF NOT EXISTS idx_profiles_is_banned ON public.profiles(is_banned) WHERE is_banned = true;
CREATE INDEX IF NOT EXISTS idx_profiles_is_verified ON public.profiles(is_verified) WHERE is_verified = true;

-- Create index for pending reviews
CREATE INDEX IF NOT EXISTS idx_content_moderation_pending ON public.content_moderation_logs(action_taken) 
WHERE action_taken IN ('review_required', 'flagged');

-- RLS policy for admins to update profiles suspension/ban status
CREATE POLICY "Admins can update user suspension status"
ON public.profiles
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- RLS policy for admins to update content moderation logs
CREATE POLICY "Admins can update content moderation logs"
ON public.content_moderation_logs
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));