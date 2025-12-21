import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { AppLayout } from '@/components/layout/AppLayout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { LogOut, User, Loader2, Edit, MapPin, ChevronRight, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Profile() {
  const { user, profile, loading, signOut } = useAuth();
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

  return (
    <AppLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-lg mx-auto px-4 pt-4 pb-24"
      >
        <h1 className="text-2xl font-display font-bold mb-6">Profile</h1>

        {/* Profile Card */}
        <Card className="p-6 mb-4">
          <div className="flex items-center gap-4">
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
              <p className="text-sm text-muted-foreground truncate">{user?.email}</p>
              {profile?.location && (
                <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                  <MapPin className="w-3 h-3" />
                  <span className="truncate">{profile.location}</span>
                </div>
              )}
            </div>
          </div>

          {profile?.bio && (
            <p className="text-sm text-muted-foreground mt-4 pt-4 border-t">{profile.bio}</p>
          )}

          <Button
            variant="outline"
            className="w-full mt-4"
            onClick={() => navigate('/profile/edit')}
          >
            <Edit className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>
        </Card>

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
