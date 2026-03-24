ALTER TABLE public.profiles
  ADD COLUMN phone_number text DEFAULT NULL,
  ADD COLUMN phone_visible boolean DEFAULT false;