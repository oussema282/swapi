
CREATE TABLE public.system_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key text UNIQUE NOT NULL,
  value jsonb NOT NULL DEFAULT 'false'::jsonb,
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_by uuid
);

ALTER TABLE public.system_settings ENABLE ROW LEVEL SECURITY;

-- Anyone can read settings (needed to check login_disabled on landing page)
CREATE POLICY "Anyone can read system settings"
ON public.system_settings FOR SELECT
TO public
USING (true);

-- Only admins can modify settings
CREATE POLICY "Admins can update system settings"
ON public.system_settings FOR UPDATE
TO authenticated
USING (is_admin(auth.uid()));

CREATE POLICY "Admins can insert system settings"
ON public.system_settings FOR INSERT
TO authenticated
WITH CHECK (is_admin(auth.uid()));

CREATE POLICY "Admins can delete system settings"
ON public.system_settings FOR DELETE
TO authenticated
USING (is_admin(auth.uid()));

-- Insert default login_disabled setting
INSERT INTO public.system_settings (key, value) VALUES ('login_disabled', 'false'::jsonb);
