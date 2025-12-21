-- Create item categories enum
CREATE TYPE public.item_category AS ENUM (
  'games', 
  'electronics', 
  'clothes', 
  'books', 
  'home_garden', 
  'sports', 
  'other'
);

-- Create item condition enum
CREATE TYPE public.item_condition AS ENUM (
  'new', 
  'like_new', 
  'good', 
  'fair'
);

-- Create profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT NOT NULL,
  avatar_url TEXT,
  bio TEXT,
  location TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create items table
CREATE TABLE public.items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  category item_category NOT NULL,
  condition item_condition NOT NULL,
  photos TEXT[] DEFAULT '{}',
  swap_preferences item_category[] NOT NULL DEFAULT '{}',
  value_min INTEGER DEFAULT 0,
  value_max INTEGER,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create swipes table (item-to-item swipes)
CREATE TABLE public.swipes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  swiper_item_id UUID NOT NULL REFERENCES public.items(id) ON DELETE CASCADE,
  swiped_item_id UUID NOT NULL REFERENCES public.items(id) ON DELETE CASCADE,
  liked BOOLEAN NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(swiper_item_id, swiped_item_id)
);

-- Create matches table (mutual item-to-item likes)
CREATE TABLE public.matches (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  item_a_id UUID NOT NULL REFERENCES public.items(id) ON DELETE CASCADE,
  item_b_id UUID NOT NULL REFERENCES public.items(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  is_completed BOOLEAN NOT NULL DEFAULT false,
  completed_at TIMESTAMPTZ,
  UNIQUE(item_a_id, item_b_id)
);

-- Create messages table
CREATE TABLE public.messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  match_id UUID NOT NULL REFERENCES public.matches(id) ON DELETE CASCADE,
  sender_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.swipes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.matches ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view all profiles" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can insert own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = user_id);

-- Items policies
CREATE POLICY "Anyone can view active items" ON public.items FOR SELECT USING (is_active = true OR auth.uid() = user_id);
CREATE POLICY "Users can insert own items" ON public.items FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own items" ON public.items FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own items" ON public.items FOR DELETE USING (auth.uid() = user_id);

-- Swipes policies (users can only swipe from their own items)
CREATE POLICY "Users can view own swipes" ON public.swipes FOR SELECT USING (
  EXISTS (SELECT 1 FROM public.items WHERE id = swiper_item_id AND user_id = auth.uid())
);
CREATE POLICY "Users can create swipes from own items" ON public.swipes FOR INSERT WITH CHECK (
  EXISTS (SELECT 1 FROM public.items WHERE id = swiper_item_id AND user_id = auth.uid())
);

-- Matches policies (users can view matches involving their items)
CREATE POLICY "Users can view own matches" ON public.matches FOR SELECT USING (
  EXISTS (SELECT 1 FROM public.items WHERE (id = item_a_id OR id = item_b_id) AND user_id = auth.uid())
);
CREATE POLICY "System can create matches" ON public.matches FOR INSERT WITH CHECK (true);
CREATE POLICY "Users can update own matches" ON public.matches FOR UPDATE USING (
  EXISTS (SELECT 1 FROM public.items WHERE (id = item_a_id OR id = item_b_id) AND user_id = auth.uid())
);

-- Messages policies
CREATE POLICY "Users can view messages in own matches" ON public.messages FOR SELECT USING (
  EXISTS (
    SELECT 1 FROM public.matches m
    JOIN public.items i ON (i.id = m.item_a_id OR i.id = m.item_b_id)
    WHERE m.id = match_id AND i.user_id = auth.uid()
  )
);
CREATE POLICY "Users can send messages in own matches" ON public.messages FOR INSERT WITH CHECK (
  auth.uid() = sender_id AND
  EXISTS (
    SELECT 1 FROM public.matches m
    JOIN public.items i ON (i.id = m.item_a_id OR i.id = m.item_b_id)
    WHERE m.id = match_id AND i.user_id = auth.uid()
  )
);

-- Enable realtime for messages
ALTER PUBLICATION supabase_realtime ADD TABLE public.messages;

-- Create function to handle new user profile creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, display_name)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data ->> 'display_name', split_part(NEW.email, '@', 1)));
  RETURN NEW;
END;
$$;

-- Create trigger for new user
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create function to check and create match when mutual like happens
CREATE OR REPLACE FUNCTION public.check_for_match()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
DECLARE
  mutual_swipe RECORD;
BEGIN
  IF NEW.liked = true THEN
    -- Check if there's a mutual like
    SELECT * INTO mutual_swipe FROM public.swipes
    WHERE swiper_item_id = NEW.swiped_item_id
      AND swiped_item_id = NEW.swiper_item_id
      AND liked = true;
    
    IF FOUND THEN
      -- Create a match (ensure consistent ordering to avoid duplicates)
      INSERT INTO public.matches (item_a_id, item_b_id)
      VALUES (
        LEAST(NEW.swiper_item_id, NEW.swiped_item_id),
        GREATEST(NEW.swiper_item_id, NEW.swiped_item_id)
      )
      ON CONFLICT DO NOTHING;
    END IF;
  END IF;
  RETURN NEW;
END;
$$;

-- Create trigger for match detection
CREATE TRIGGER on_swipe_check_match
  AFTER INSERT ON public.swipes
  FOR EACH ROW EXECUTE FUNCTION public.check_for_match();

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add updated_at triggers
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_items_updated_at BEFORE UPDATE ON public.items FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();