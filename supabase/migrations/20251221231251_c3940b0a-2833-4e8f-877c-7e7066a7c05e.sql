-- Create storage bucket for item photos
INSERT INTO storage.buckets (id, name, public)
VALUES ('item-photos', 'item-photos', true)
ON CONFLICT (id) DO NOTHING;

-- Allow anyone to view item photos (public bucket)
CREATE POLICY "Anyone can view item photos"
ON storage.objects FOR SELECT
USING (bucket_id = 'item-photos');

-- Allow authenticated users to upload their own item photos
CREATE POLICY "Users can upload item photos"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'item-photos' 
  AND auth.role() = 'authenticated'
);

-- Allow users to update their own uploads
CREATE POLICY "Users can update own item photos"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'item-photos' 
  AND auth.uid()::text = (storage.foldername(name))[1]
);

-- Allow users to delete their own uploads
CREATE POLICY "Users can delete own item photos"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'item-photos' 
  AND auth.uid()::text = (storage.foldername(name))[1]
);