-- Allow all authenticated users to view is_pro status of any user
-- This is needed to show Pro badges on item cards
CREATE POLICY "Anyone can view user Pro status"
ON public.user_subscriptions
FOR SELECT
TO authenticated
USING (true);

-- Drop the old restrictive policy for viewing
DROP POLICY IF EXISTS "Users can view own subscription" ON public.user_subscriptions;