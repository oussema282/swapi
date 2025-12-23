import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useMyItems } from '@/hooks/useItems';
import { AppLayout } from '@/components/layout/AppLayout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ProfileItemsGrid } from '@/components/profile/ProfileItemsGrid';
import { LogOut, User, Loader2, Edit, MapPin, ChevronRight, Settings, Grid3X3, Map } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Profile() {
  const { user, profile, loading, signOut } = useAuth();
  const { data: items = [], isLoading: itemsLoading } = useMyItems();
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-lg mx-auto px-4 pt-4 pb-24"
      >
        {/* Profile Header */}
        <div className="flex items-center gap-4 mb-6">
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
            <h2 className="text-xl font-semibold truncate">{profile?.display_name || 'User'}</h2>
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

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6 text-center">
          <div className="p-3 rounded-xl bg-muted/50">
            <p className="text-2xl font-bold">{activeItems.length}</p>
            <p className="text-xs text-muted-foreground">Items</p>
          </div>
          <div className="p-3 rounded-xl bg-muted/50">
            <p className="text-2xl font-bold">0</p>
            <p className="text-xs text-muted-foreground">Swaps</p>
          </div>
          <div className="p-3 rounded-xl bg-muted/50">
            <p className="text-2xl font-bold">5.0</p>
            <p className="text-xs text-muted-foreground">Rating</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-2 mb-6">
          <Button variant="outline" className="flex-1" onClick={() => navigate('/map')}>
            <Map className="w-4 h-4 mr-2" />
            Map View
          </Button>
          <Button variant="outline" className="flex-1" onClick={() => navigate('/items')}>
            <Grid3X3 className="w-4 h-4 mr-2" />
            My Items
          </Button>
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
    </AppLayout>
  );
}
