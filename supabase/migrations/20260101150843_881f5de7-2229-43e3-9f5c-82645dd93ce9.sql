-- Drop the problematic policy
DROP POLICY IF EXISTS "Users can view items they interact with" ON public.items;

-- Create a simpler policy without recursive joins
-- The match/deal visibility will be handled by fetching those items directly by ID after the main query
CREATE POLICY "Anyone can view active non-archived items" 
ON public.items 
FOR SELECT 
USING (
  -- Active non-archived items (for discovery)
  ((is_active = true) AND (is_archived = false))
  OR 
  -- User's own items (any status - so they can see their archived items)
  (auth.uid() = user_id)
);