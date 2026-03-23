
-- Enable pgcrypto for password hashing
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Recharge accounts table (admin-managed)
CREATE TABLE public.recharge_accounts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  phone text UNIQUE NOT NULL,
  password_hash text NOT NULL,
  display_name text NOT NULL DEFAULT '',
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.recharge_accounts ENABLE ROW LEVEL SECURITY;

-- Only admins can manage recharge accounts
CREATE POLICY "Admins can manage recharge accounts"
ON public.recharge_accounts FOR ALL
TO authenticated
USING (is_admin(auth.uid()))
WITH CHECK (is_admin(auth.uid()));

-- Public can read for login verification (only via function)
-- No direct SELECT policy for public - use security definer function

-- Function to verify recharge login
CREATE OR REPLACE FUNCTION public.verify_recharge_login(p_phone text, p_password text)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  v_account RECORD;
BEGIN
  SELECT id, phone, display_name, is_active, password_hash
  INTO v_account
  FROM public.recharge_accounts
  WHERE phone = p_phone;

  IF NOT FOUND THEN
    RETURN jsonb_build_object('success', false, 'error', 'Compte non trouvé');
  END IF;

  IF NOT v_account.is_active THEN
    RETURN jsonb_build_object('success', false, 'error', 'Compte désactivé');
  END IF;

  IF v_account.password_hash != crypt(p_password, v_account.password_hash) THEN
    RETURN jsonb_build_object('success', false, 'error', 'Mot de passe incorrect');
  END IF;

  RETURN jsonb_build_object(
    'success', true,
    'account_id', v_account.id,
    'phone', v_account.phone,
    'display_name', v_account.display_name
  );
END;
$$;

-- Function for admin to create recharge accounts (with hashed password)
CREATE OR REPLACE FUNCTION public.create_recharge_account(p_phone text, p_password text, p_display_name text DEFAULT '')
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  v_id uuid;
BEGIN
  -- Check admin
  IF NOT is_admin(auth.uid()) THEN
    RAISE EXCEPTION 'Not authorized';
  END IF;

  INSERT INTO public.recharge_accounts (phone, password_hash, display_name)
  VALUES (p_phone, crypt(p_password, gen_salt('bf')), p_display_name)
  RETURNING id INTO v_id;

  RETURN jsonb_build_object('success', true, 'id', v_id);
EXCEPTION
  WHEN unique_violation THEN
    RETURN jsonb_build_object('success', false, 'error', 'Ce numéro existe déjà');
END;
$$;
