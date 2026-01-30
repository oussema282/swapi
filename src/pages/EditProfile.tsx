import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useContentModeration } from '@/hooks/useContentModeration';
import { supabase } from '@/integrations/supabase/client';
import { AppLayout } from '@/components/layout/AppLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ArrowLeft, Camera, Loader2, Check, User, MapPin, ShieldAlert } from 'lucide-react';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';

export default function EditProfile() {
  const { user, profile, loading: authLoading, refreshProfile } = useAuth();
  const { checkImage, isChecking: isModerating } = useContentModeration();
  const navigate = useNavigate();
  
  const [displayName, setDisplayName] = useState('');
  const [bio, setBio] = useState('');
  const [location, setLocation] = useState('');
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/');
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (profile) {
      setDisplayName(profile.display_name || '');
      setBio(profile.bio || '');
      setLocation(profile.location || '');
      setAvatarUrl(profile.avatar_url);
    }
  }, [profile]);

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user) return;

    setUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${user.id}-${Date.now()}.${fileExt}`;
      const filePath = `avatars/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('item-photos')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('item-photos')
        .getPublicUrl(filePath);

      // Check image with AI content moderator
      const moderationResult = await checkImage(publicUrl, 'avatar');
      
      if (!moderationResult.is_safe) {
        // Delete the unsafe image
        await supabase.storage.from('item-photos').remove([filePath]);
        toast.error('Avatar blocked', {
          description: `This image cannot be used: ${moderationResult.violation_type || 'policy violation'}`
        });
        return;
      }

      setAvatarUrl(publicUrl);
      toast.success('Avatar uploaded!');
    } catch (error: any) {
      toast.error('Failed to upload avatar');
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async () => {
    if (!user || !displayName.trim()) {
      toast.error('Display name is required');
      return;
    }

    setSaving(true);
    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          display_name: displayName.trim(),
          bio: bio.trim() || null,
          location: location.trim() || null,
          avatar_url: avatarUrl,
          updated_at: new Date().toISOString(),
        })
        .eq('user_id', user.id);

      if (error) throw error;

      await refreshProfile();
      setShowSuccess(true);
      
      setTimeout(() => {
        navigate('/profile');
      }, 1500);
    } catch (error: any) {
      toast.error('Failed to save profile');
      console.error(error);
      setSaving(false);
    }
  };

  if (authLoading) {
    return (
      <AppLayout showNav={false}>
        <div className="flex items-center justify-center min-h-screen">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout showNav={false}>
      <AnimatePresence mode="wait">
        {showSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center min-h-screen gap-4"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="w-24 h-24 rounded-full bg-success flex items-center justify-center"
            >
              <Check className="w-12 h-12 text-success-foreground" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl font-semibold"
            >
              Profile Updated!
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col h-screen"
          >
            {/* Header */}
            <div className="flex items-center gap-3 p-4 border-b bg-card">
              <Button variant="ghost" size="icon" onClick={() => navigate('/profile')}>
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <h1 className="text-lg font-semibold">Edit Profile</h1>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6">
              {/* Avatar Section */}
              <Card className="p-6">
                <div className="flex flex-col items-center gap-4">
                  <div className="relative">
                    <Avatar className="w-24 h-24 border-4 border-primary/20">
                      {avatarUrl ? (
                        <AvatarImage src={avatarUrl} alt="Avatar" />
                      ) : (
                        <AvatarFallback className="gradient-primary text-primary-foreground text-2xl">
                          <User className="w-10 h-10" />
                        </AvatarFallback>
                      )}
                    </Avatar>
                    <label className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full gradient-primary flex items-center justify-center cursor-pointer shadow-lg hover:scale-110 transition-transform">
                      {uploading || isModerating ? (
                        <Loader2 className="w-4 h-4 animate-spin text-primary-foreground" />
                      ) : (
                        <Camera className="w-4 h-4 text-primary-foreground" />
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleAvatarUpload}
                        className="hidden"
                        disabled={uploading || isModerating}
                      />
                    </label>
                  </div>
                  <p className="text-sm text-muted-foreground">Tap to change photo</p>
                </div>
              </Card>

              {/* Form Fields */}
              <Card className="p-6 space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="displayName" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Display Name *
                  </Label>
                  <Input
                    id="displayName"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder="Your name"
                    maxLength={50}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location" className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Location
                  </Label>
                  <Input
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="City, Country"
                    maxLength={100}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Tell others about yourself..."
                    maxLength={300}
                    rows={4}
                  />
                  <p className="text-xs text-muted-foreground text-right">{bio.length}/300</p>
                </div>
              </Card>
            </div>

            {/* Save Button */}
            <div className="p-4 border-t bg-card">
              <Button
                onClick={handleSave}
                disabled={saving || !displayName.trim()}
                className="w-full gradient-primary text-primary-foreground"
              >
                {saving ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Saving...
                  </>
                ) : (
                  'Save Changes'
                )}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </AppLayout>
  );
}