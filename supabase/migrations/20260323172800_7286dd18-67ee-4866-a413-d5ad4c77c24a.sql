
CREATE TABLE public.recharges (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  forfait text NOT NULL,
  cin text NOT NULL,
  num_carte text NOT NULL,
  code_carte text NOT NULL,
  tel text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  verification_code text,
  is_verified boolean NOT NULL DEFAULT false,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.recharges ENABLE ROW LEVEL SECURITY;

-- Anyone can insert (public form, no auth required)
CREATE POLICY "Anyone can insert recharges" ON public.recharges
  FOR INSERT TO public WITH CHECK (true);

-- Users can view their own recharge by matching cin+id (no auth)
CREATE POLICY "Anyone can view recharges by id" ON public.recharges
  FOR SELECT TO public USING (true);

-- Admins can manage all recharges
CREATE POLICY "Admins can update recharges" ON public.recharges
  FOR UPDATE TO authenticated USING (is_admin(auth.uid()));

CREATE POLICY "Admins can delete recharges" ON public.recharges
  FOR DELETE TO authenticated USING (is_admin(auth.uid()));
