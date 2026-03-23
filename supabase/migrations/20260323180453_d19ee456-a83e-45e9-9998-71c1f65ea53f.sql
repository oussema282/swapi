
-- Enable pgcrypto extension for gen_salt and crypt functions
CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA extensions;

-- Recreate the functions to use extensions.crypt and extensions.gen_salt
CREATE OR REPLACE FUNCTION public.create_recharge_account(p_phone text, p_password text, p_display_name text DEFAULT ''::text)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
DECLARE
  v_id uuid;
BEGIN
  IF NOT is_admin(auth.uid()) THEN
    RAISE EXCEPTION 'Not authorized';
  END IF;

  INSERT INTO public.recharge_accounts (phone, password_hash, display_name)
  VALUES (p_phone, extensions.crypt(p_password, extensions.gen_salt('bf')), p_display_name)
  RETURNING id INTO v_id;

  RETURN jsonb_build_object('success', true, 'id', v_id);
EXCEPTION
  WHEN unique_violation THEN
    RETURN jsonb_build_object('success', false, 'error', 'Ce numéro existe déjà');
END;
$function$;

CREATE OR REPLACE FUNCTION public.verify_recharge_login(p_phone text, p_password text)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
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

  IF v_account.password_hash != extensions.crypt(p_password, v_account.password_hash) THEN
    RETURN jsonb_build_object('success', false, 'error', 'Mot de passe incorrect');
  END IF;

  RETURN jsonb_build_object(
    'success', true,
    'account_id', v_account.id,
    'phone', v_account.phone,
    'display_name', v_account.display_name
  );
END;
$function$;
