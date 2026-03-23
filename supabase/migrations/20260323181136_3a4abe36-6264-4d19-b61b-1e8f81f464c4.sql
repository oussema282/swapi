
-- Add balance column to recharge_accounts
ALTER TABLE public.recharge_accounts ADD COLUMN IF NOT EXISTS balance numeric NOT NULL DEFAULT 0;
