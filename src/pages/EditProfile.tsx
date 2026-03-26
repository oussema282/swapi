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
import { Switch } from '@/components/ui/switch';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ArrowLeft, Camera, Loader2, Check, User, MapPin, ShieldAlert, Phone } from 'lucide-react';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { getDefaultAvatar } from '@/lib/defaultAvatars';

export default function EditProfile() {
  const { user, profile, loading: authLoading, refreshProfile } = useAuth();
  const { checkImage, isChecking: isModerating } = useContentModeration();
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const [displayName, setDisplayName] = useState('');
  const [bio, setBio] = useState('');
  const [location, setLocation] = useState('');
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneVisible, setPhoneVisible] = useState(false);
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
      setPhoneNumber(profile.phone_number || '');
      setPhoneVisible(profile.phone_visible || false);
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

      const moderationResult = await checkImage(publicUrl, 'avatar');
      
      if (!moderationResult.is_safe) {
        await supabase.storage.from('item-photos').remove([filePath]);
        toast.error(t('editProfile.avatarBlocked'), {
          description: `${moderationResult.violation_type || t('newItem.policyViolation')}`
        });
        return;
      }

      setAvatarUrl(publicUrl);
      toast.success(t('editProfile.avatarUploaded'));
    } catch (error: any) {
      toast.error(t('editProfile.failedUploadAvatar'));
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async () => {
    if (!user || !displayName.trim()) {
      toast.error(t('editProfile.displayNameRequired'));
      return;
    }

    if (phoneNumber && phoneNumber.length !== 8) {
      toast.error(t('editProfile.phoneNumberInvalid', 'Phone number must be 8 digits'));
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
          phone_number: phoneNumber.trim() || null,
          phone_visible: phoneVisible,
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
      toast.error(t('editProfile.failedSaveProfile'));
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
              {t('editProfile.profileUpdated')}
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
              <h1 className="text-lg font-semibold">{t('editProfile.title')}</h1>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4 pb-24 space-y-6">
              {/* Avatar Section */}
              <Card className="p-6">
                <div className="flex flex-col items-center gap-4">
                  <div className="relative">
                    <Avatar className="w-24 h-24 border-4 border-primary/20">
                      <AvatarImage src={avatarUrl || (user ? getDefaultAvatar(user.id) : undefined)} alt="Avatar" />
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
                  <p className="text-sm text-muted-foreground">{t('editProfile.tapToChange')}</p>
                </div>
              </Card>

              {/* Form Fields */}
              <Card className="p-6 space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="displayName" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {t('editProfile.displayName')}
                  </Label>
                  <Input
                    id="displayName"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder={t('editProfile.displayNamePlaceholder')}
                    maxLength={50}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location" className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {t('editProfile.location')}
                  </Label>
                  <Input
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder={t('editProfile.locationPlaceholder')}
                    maxLength={100}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">{t('editProfile.bio')}</Label>
                  <Textarea
                    id="bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder={t('editProfile.bioPlaceholder')}
                    maxLength={300}
                    rows={4}
                  />
                  <p className="text-xs text-muted-foreground text-right">{bio.length}/300</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phoneNumber" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    {t('editProfile.phoneNumber')}
                  </Label>
                  <Input
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, '').slice(0, 8);
                      setPhoneNumber(val);
                    }}
                    placeholder={t('editProfile.phoneNumberPlaceholder')}
                    maxLength={8}
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]{8}"
                  />
                  {phoneNumber.length > 0 && phoneNumber.length < 8 && (
                    <p className="text-xs text-destructive">{t('editProfile.phoneNumberInvalid', 'Phone number must be 8 digits')}</p>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-sm font-medium">{t('editProfile.phoneVisible')}</Label>
                    <p className="text-xs text-muted-foreground">{t('editProfile.phoneVisibleDescription')}</p>
                  </div>
                  <Switch
                    checked={phoneVisible}
                    onCheckedChange={setPhoneVisible}
                  />
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
                    {t('editProfile.saving')}
                  </>
                ) : (
                  t('editProfile.saveChanges')
                )}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </AppLayout>
  );
}