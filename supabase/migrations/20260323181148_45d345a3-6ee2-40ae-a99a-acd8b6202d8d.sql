
-- Update verify_recharge_login to return balance
CREATE OR REPLACE FUNCTION public.verify_recharge_login(p_phone text, p_password text)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
DECLARE
  v_account RECORD;
BEGIN
  SELECT id, phone, display_name, is_active, password_hash, balance
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
    'display_name', v_account.display_name,
    'balance', v_account.balance
  );
END;
$function$;
