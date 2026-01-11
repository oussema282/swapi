import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useMyItems } from '@/hooks/useItems';
import { useEntitlements } from '@/hooks/useEntitlements';
import { AppLayout } from '@/components/layout/AppLayout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ProfileItemsGrid } from '@/components/profile/ProfileItemsGrid';
import { VerifiedName } from '@/components/ui/verified-name';
import { LogOut, User, Loader2, Edit, MapPin, ChevronRight, Settings, Grid3X3, Crown, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { format } from 'date-fns';

export default function Profile() {
  const { user, profile, loading, signOut } = useAuth();
  const { data: items = [], isLoading: itemsLoading } = useMyItems();
  const { isPro, subscription } = useEntitlements();
  
  // Fetch completed swaps count for current user
  const { data: completedSwapsCount = 0 } = useQuery({
    queryKey: ['completed-swaps-count', user?.id],
    queryFn: async () => {
      if (!user?.id) return 0;
      
      // Get user's items first
      const { data: userItems } = await supabase
        .from('items')
        .select('id')
        .eq('user_id', user.id);
      
      if (!userItems?.length) return 0;
      
      const itemIds = userItems.map(i => i.id);
      
      // Count matches where user's items are involved and is_completed = true
      const { count } = await supabase
        .from('matches')
        .select('*', { count: 'exact', head: true })
        .eq('is_completed', true)
        .or(`item_a_id.in.(${itemIds.join(',')}),item_b_id.in.(${itemIds.join(',')})`);
      
      return count || 0;
    },
    enabled: !!user?.id,
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  if (loading) {
    return (
      <AppLayout>
        <div className="flex items-center justify-center min-h-[80vh]">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </AppLayout>
    );
  }

  const activeItems = items.filter(item => item.is_active);

  return (
    <AppLayout>
      <div className="h-[calc(100dvh-5rem)] overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-lg mx-auto px-4 pt-4 pb-24"
        >
          {/* Profile Header */}
          <div className="flex items-center gap-4 mb-4">
            <Avatar className="w-20 h-20 border-4 border-primary/20">
              {profile?.avatar_url ? (
                <AvatarImage src={profile.avatar_url} alt="Avatar" />
              ) : (
                <AvatarFallback className="gradient-primary text-primary-foreground text-xl">
                  <User className="w-8 h-8" />
                </AvatarFallback>
              )}
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-semibold">
                  <VerifiedName name={profile?.display_name || 'User'} isPro={isPro} />
                </h2>
              </div>
              {profile?.location && (
                <div className="flex items-center gap-1 text-sm text-muted-foreground mt-0.5">
                  <MapPin className="w-3 h-3" />
                  <span className="truncate">{profile.location}</span>
                </div>
              )}
              {profile?.bio && (
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{profile.bio}</p>
              )}
            </div>
            <Button variant="outline" size="icon" onClick={() => navigate('/profile/edit')}>
              <Edit className="w-4 h-4" />
            </Button>
          </div>

          {/* Pro Status Card */}
          {isPro ? (
            <Card className="p-4 mb-6 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border-amber-500/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 flex items-center justify-center">
                    <Crown className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Pro Member</p>
                    <p className="text-xs text-muted-foreground">
                      {subscription?.expires_at 
                        ? `Expires ${format(new Date(subscription.expires_at), 'MMM d, yyyy')}`
                        : 'Unlimited access'
                      }
                    </p>
                  </div>
                </div>
                <Badge className="bg-gradient-to-r from-amber-400 to-yellow-500 text-white border-0">
                  Active
                </Badge>
              </div>
            </Card>
          ) : (
            <Card 
              className="p-4 mb-6 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20 cursor-pointer hover:border-primary/40 transition-colors"
              onClick={() => navigate('/checkout')}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Upgrade to Pro</p>
                    <p className="text-xs text-muted-foreground">
                      Unlimited swipes, searches, & more
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-primary" />
              </div>
            </Card>
          )}

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6 text-center">
            <div className="p-3 rounded-xl bg-muted/50">
              <p className="text-2xl font-bold">{activeItems.length}</p>
              <p className="text-xs text-muted-foreground">Items</p>
            </div>
            <div className="p-3 rounded-xl bg-muted/50">
              <p className="text-2xl font-bold">{completedSwapsCount}</p>
              <p className="text-xs text-muted-foreground">Swaps</p>
            </div>
            <div className="p-3 rounded-xl bg-muted/50">
              <p className="text-2xl font-bold">5.0</p>
              <p className="text-xs text-muted-foreground">Rating</p>
            </div>
          </div>

          {/* Items Grid - Instagram Style */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold flex items-center gap-2">
                <Grid3X3 className="w-4 h-4" />
                My Items
              </h3>
            </div>
            {itemsLoading ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="w-6 h-6 animate-spin text-primary" />
              </div>
            ) : (
              <ProfileItemsGrid items={items} isOwnProfile={true} />
            )}
          </div>

          {/* Settings Section */}
          <Card className="divide-y divide-border mb-4">
            <button
              onClick={() => navigate('/profile/edit')}
              className="flex items-center justify-between w-full p-4 hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Edit className="w-5 h-5 text-blue-500" />
                </div>
                <span className="font-medium">Edit Profile</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
            <button
              onClick={() => navigate('/settings')}
              className="flex items-center justify-between w-full p-4 hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Settings className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">Account Settings</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </Card>

          {/* Sign Out */}
          <Button
            variant="outline"
            className="w-full border-destructive/50 text-destructive hover:bg-destructive hover:text-destructive-foreground"
            onClick={handleSignOut}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </motion.div>
      </div>
    </AppLayout>
  );
}
