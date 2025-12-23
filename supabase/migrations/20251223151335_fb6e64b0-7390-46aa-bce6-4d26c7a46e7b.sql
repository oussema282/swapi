-- Add status column to messages table
ALTER TABLE public.messages 
ADD COLUMN IF NOT EXISTS status text NOT NULL DEFAULT 'sent';

-- Add last_seen column to profiles table  
ALTER TABLE public.profiles
ADD COLUMN IF NOT EXISTS last_seen timestamp with time zone DEFAULT now();

-- Create policy for updating message status (drop first if exists)
DROP POLICY IF EXISTS "Recipients can update message status to delivered/read" ON public.messages;

CREATE POLICY "Recipients can update message status to delivered/read"
ON public.messages
FOR UPDATE
USING (
  EXISTS (
    SELECT 1 FROM matches m
    JOIN items i ON (i.id = m.item_a_id OR i.id = m.item_b_id)
    WHERE m.id = messages.match_id 
    AND i.user_id = auth.uid()
    AND messages.sender_id != auth.uid()
  )
)
WITH CHECK (
  status IN ('delivered', 'read')
);