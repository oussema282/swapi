import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useSmartBack } from '@/hooks/useSmartBack';
import { AppLayout } from '@/components/layout/AppLayout';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ProfileItemsGrid } from '@/components/profile/ProfileItemsGrid';
import { VerifiedName } from '@/components/ui/verified-name';
import { ReportButton } from '@/components/report/ReportButton';
import { ArrowLeft, User, Loader2, MapPin, Grid3X3 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export default function UserProfile() {
  const { userId } = useParams<{ userId: string }>();
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const goBack = useSmartBack('/discover');

  // Redirect if viewing own profile
  useEffect(() => {
    if (user && userId === user.id) {
      navigate('/profile', { replace: true });
    }
  }, [user, userId, navigate]);

  // Fetch user profile
  const { data: profile, isLoading: profileLoading } = useQuery({
    queryKey: ['user-profile', userId],
    queryFn: async () => {
      if (!userId) return null;
      
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', userId)
        .maybeSingle();
      
      if (error) throw error;
      return data;
    },
    enabled: !!userId,
  });

  // Fetch user's Pro status
  const { data: isPro = false } = useQuery({
    queryKey: ['user-pro-status', userId],
    queryFn: async () => {
      if (!userId) return false;
      
      const { data } = await supabase
        .from('user_subscriptions')
        .select('is_pro')
        .eq('user_id', userId)
        .maybeSingle();
      
      return data?.is_pro ?? false;
    },
    enabled: !!userId,
  });

  // Fetch user's items (exclude archived for public view)
  const { data: items = [], isLoading: itemsLoading } = useQuery({
    queryKey: ['user-items', userId],
    queryFn: async () => {
      if (!userId) return [];
      
      const { data, error } = await supabase
        .from('items')
        .select('*')
        .eq('user_id', userId)
        .eq('is_active', true)
        .eq('is_archived', false)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data || [];
    },
    enabled: !!userId,
  });

  // Fetch completed swaps count (GLOBAL count for this user, not relative to viewer)
  const { data: completedSwapsCount = 0 } = useQuery({
    queryKey: ['user-completed-swaps-global', userId],
    queryFn: async () => {
      if (!userId) return 0;
      
      // Get all items owned by this user (including archived ones for historical accuracy)
      const { data: userItems } = await supabase
        .from('items')
        .select('id')
        .eq('user_id', userId);
      
      if (!userItems?.length) return 0;
      
      const itemIds = userItems.map(i => i.id);
      
      // Count matches where user's items are in item_a_id
      const { count: countA } = await supabase
        .from('matches')
        .select('*', { count: 'exact', head: true })
        .eq('is_completed', true)
        .in('item_a_id', itemIds);
      
      // Count matches where user's items are in item_b_id
      const { count: countB } = await supabase
        .from('matches')
        .select('*', { count: 'exact', head: true })
        .eq('is_completed', true)
        .in('item_b_id', itemIds);
      
      return (countA || 0) + (countB || 0);
    },
    enabled: !!userId,
  });

  const isLoading = authLoading || profileLoading;

  if (isLoading) {
    return (
      <AppLayout showNav={false}>
        <div className="flex items-center justify-center min-h-[80vh]">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </AppLayout>
    );
  }

  if (!profile) {
    return (
      <AppLayout showNav={false}>
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
          <User className="w-16 h-16 text-muted-foreground/30 mb-4" />
          <h2 className="text-xl font-semibold mb-2">User not found</h2>
          <p className="text-muted-foreground text-center mb-4">
            This user doesn't exist or has been removed.
          </p>
          <Button onClick={goBack}>Go Back</Button>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout showNav={false}>
      <div className="h-[calc(100dvh)] overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-lg mx-auto px-4 pt-4 pb-24"
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-6 sticky top-0 z-10 bg-background/95 backdrop-blur-sm py-2 -mx-4 px-4" style={{ paddingTop: 'max(0.5rem, env(safe-area-inset-top))' }}>
            <Button variant="ghost" size="icon" onClick={goBack} className="touch-manipulation">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-lg font-display font-bold flex-1">Profile</h1>
            {userId && <ReportButton reportType="user" targetId={userId} variant="icon" />}
          </div>

          {/* Profile Header */}
          <div className="flex items-center gap-4 mb-6">
            <Avatar className="w-20 h-20 border-4 border-primary/20">
              {profile.avatar_url ? (
                <AvatarImage src={profile.avatar_url} alt="Avatar" />
              ) : (
                <AvatarFallback className="gradient-primary text-primary-foreground text-xl">
                  <User className="w-8 h-8" />
                </AvatarFallback>
              )}
            </Avatar>
            <div className="flex-1 min-w-0">
              <h2 className="text-xl font-semibold">
                <VerifiedName name={profile.display_name || 'User'} isPro={isPro} />
              </h2>
              {profile.location && (
                <div className="flex items-center gap-1 text-sm text-muted-foreground mt-0.5">
                  <MapPin className="w-3 h-3" />
                  <span className="truncate">{profile.location}</span>
                </div>
              )}
              {profile.bio && (
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{profile.bio}</p>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6 text-center">
            <div className="p-3 rounded-xl bg-muted/50">
              <p className="text-2xl font-bold">{items.length}</p>
              <p className="text-xs text-muted-foreground">Items</p>
            </div>
            <div className="p-3 rounded-xl bg-muted/50">
              <p className="text-2xl font-bold">{completedSwapsCount}</p>
              <p className="text-xs text-muted-foreground">Swaps</p>
            </div>
          </div>

          {/* Items Grid */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold flex items-center gap-2">
                <Grid3X3 className="w-4 h-4" />
                Items
              </h3>
            </div>
            {itemsLoading ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="w-6 h-6 animate-spin text-primary" />
              </div>
            ) : items.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No items listed yet
              </div>
            ) : (
              <ProfileItemsGrid items={items} isOwnProfile={false} />
            )}
          </div>
        </motion.div>
      </div>
    </AppLayout>
  );
}
