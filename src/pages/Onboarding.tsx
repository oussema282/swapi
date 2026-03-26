import { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { useTranslation } from 'react-i18next';
import { useToast } from '@/hooks/use-toast';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { format, differenceInYears, getDaysInMonth } from 'date-fns';
import { Check, Camera, Upload, Loader2, ArrowRight, Package } from 'lucide-react';
import { getDefaultAvatar } from '@/lib/defaultAvatars';
import { Confetti } from '@/components/discover/Confetti';

import avatar1 from '@/assets/avatars/avatar1.png';
import avatar2 from '@/assets/avatars/avatar2.png';
import avatar3 from '@/assets/avatars/avatar3.png';
import avatar4 from '@/assets/avatars/avatar4.png';
import avatar5 from '@/assets/avatars/avatar5.png';
import avatar6 from '@/assets/avatars/avatar6.png';

const DEFAULT_AVATARS = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];

export default function Onboarding() {
  const { user, profile, loading, refreshProfile } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState('');
  const [birthday, setBirthday] = useState<Date | undefined>();
  const [gender, setGender] = useState<string | null>(null);
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [customAvatarUrl, setCustomAvatarUrl] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  // Check if user has items
  const { data: itemCount = 0, refetch: refetchItems } = useQuery({
    queryKey: ['onboarding-items', user?.id],
    queryFn: async () => {
      if (!user) return 0;
      const { count } = await supabase
        .from('items')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', user.id)
        .eq('is_active', true)
        .eq('is_archived', false);
      return count || 0;
    },
    enabled: !!user,
  });

  // Pre-fill from profile
  useEffect(() => {
    if (profile) {
      if (profile.phone_number) setPhone(profile.phone_number);
      if ((profile as any).gender) setGender((profile as any).gender);
      if ((profile as any).birthday) setBirthday(new Date((profile as any).birthday));
      if (profile.avatar_url) setCustomAvatarUrl(profile.avatar_url);
    }
  }, [profile]);

  // Determine current step based on completion
  useEffect(() => {
    if (!profile) return;
    const hasPersonalInfo = profile.phone_number && (profile as any).birthday && (profile as any).gender;
    const hasAvatar = profile.avatar_url;
    
    if (hasPersonalInfo && hasAvatar && itemCount > 0) {
      // All done, redirect
      navigate('/discover', { replace: true });
      return;
    }
    
    if (hasPersonalInfo && hasAvatar && itemCount === 0) {
      setStep(3);
    } else if (hasPersonalInfo && !hasAvatar) {
      setStep(2);
    }
  }, [profile, itemCount, navigate]);

  // Listen for return from NewItem
  useEffect(() => {
    const handleFocus = () => {
      refetchItems();
    };
    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, [refetchItems]);

  // When items appear on step 3, auto-advance to done
  useEffect(() => {
    if (step === 3 && itemCount > 0) {
      setStep(4);
      setShowConfetti(true);
      setTimeout(() => navigate('/discover', { replace: true }), 2500);
    }
  }, [itemCount, step, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    navigate('/', { replace: true });
    return null;
  }

  const phoneValid = /^\d{8}$/.test(phone);
  const birthdayValid = birthday && differenceInYears(new Date(), birthday) >= 13;
  const step1Valid = phoneValid && birthdayValid && gender !== null;

  const handleSavePersonalInfo = async () => {
    if (!step1Valid || !user) return;
    setSaving(true);
    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          phone_number: phone,
          birthday: format(birthday!, 'yyyy-MM-dd'),
          gender,
        } as any)
        .eq('user_id', user.id);

      if (error) throw error;
      await refreshProfile();
      setStep(2);
    } catch (err) {
      toast({ variant: 'destructive', title: t('common.error') });
    } finally {
      setSaving(false);
    }
  };

  const handleSelectAvatar = async (avatarUrl: string) => {
    setSelectedAvatar(avatarUrl);
    setCustomAvatarUrl(null);
  };

  const handleUploadPhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user) return;

    if (!file.type.startsWith('image/')) return;
    if (file.size > 5 * 1024 * 1024) {
      toast({ variant: 'destructive', title: t('newItem.imageTooLarge') });
      return;
    }

    setUploading(true);
    try {
      const fileName = `${user.id}/avatar-${Date.now()}.${file.name.split('.').pop()}`;
      const { error: uploadError } = await supabase.storage
        .from('item-photos')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage
        .from('item-photos')
        .getPublicUrl(fileName);

      setCustomAvatarUrl(urlData.publicUrl);
      setSelectedAvatar(null);
    } catch (err) {
      toast({ variant: 'destructive', title: t('editProfile.failedUploadAvatar') });
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleSaveAvatar = async () => {
    if (!user) return;
    const avatarUrl = customAvatarUrl || selectedAvatar;
    if (!avatarUrl) return;

    setSaving(true);
    try {
      const { error } = await supabase
        .from('profiles')
        .update({ avatar_url: avatarUrl })
        .eq('user_id', user.id);

      if (error) throw error;
      await refreshProfile();
      setStep(3);
    } catch (err) {
      toast({ variant: 'destructive', title: t('common.error') });
    } finally {
      setSaving(false);
    }
  };

  const totalSteps = 4;
  const progressPercent = ((step - 1) / (totalSteps - 1)) * 100;

  const genders = [
    { value: 'male', label: t('onboarding.male') },
    { value: 'female', label: t('onboarding.female') },
    { value: 'other', label: t('onboarding.other') },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {showConfetti && <Confetti show={showConfetti} />}
      
      {/* Progress */}
      <div className="px-4 pt-6 pb-2">
        <Progress value={progressPercent} className="h-2" />
        <p className="text-xs text-muted-foreground mt-2 text-center">
          {t('onboarding.step', { current: step, total: totalSteps })}
        </p>
      </div>

      <div className="flex-1 flex flex-col px-4 pb-8">
        <AnimatePresence mode="wait">
          {/* Step 1: Personal Info */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1 flex flex-col"
            >
              <div className="mb-6 mt-4">
                <h1 className="text-2xl font-bold">{t('onboarding.personalInfoTitle')}</h1>
                <p className="text-muted-foreground text-sm mt-1">{t('onboarding.personalInfoDescription')}</p>
              </div>

              <div className="space-y-5 flex-1">
                {/* Phone */}
                <div className="space-y-2">
                  <Label>{t('editProfile.phoneNumber')}</Label>
                  <Input
                    type="tel"
                    inputMode="numeric"
                    maxLength={8}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 8))}
                    placeholder="12345678"
                    className="h-12 text-lg tracking-wider"
                  />
                  {phone.length > 0 && !phoneValid && (
                    <p className="text-xs text-destructive">{t('editProfile.phoneNumberInvalid')}</p>
                  )}
                </div>

                {/* Birthday */}
                <div className="space-y-2">
                  <Label>{t('onboarding.birthday')}</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full h-12 justify-start text-left font-normal",
                          !birthday && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {birthday ? format(birthday, 'PPP') : t('onboarding.selectBirthday')}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={birthday}
                        onSelect={setBirthday}
                        disabled={(date) =>
                          date > new Date() || date < new Date('1920-01-01')
                        }
                        defaultMonth={birthday || new Date(2000, 0)}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                        captionLayout="dropdown-buttons"
                        fromYear={1920}
                        toYear={new Date().getFullYear() - 13}
                      />
                    </PopoverContent>
                  </Popover>
                  {birthday && !birthdayValid && (
                    <p className="text-xs text-destructive">{t('onboarding.minAge')}</p>
                  )}
                </div>

                {/* Gender */}
                <div className="space-y-2">
                  <Label>{t('onboarding.gender')}</Label>
                  <div className="flex gap-2">
                    {genders.map((g) => (
                      <button
                        key={g.value}
                        onClick={() => setGender(g.value)}
                        className={cn(
                          "flex-1 py-3 rounded-xl text-sm font-medium transition-all border",
                          gender === g.value
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-muted/50 text-muted-foreground border-transparent hover:bg-muted"
                        )}
                      >
                        {g.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <Button
                onClick={handleSavePersonalInfo}
                disabled={!step1Valid || saving}
                className="w-full h-12 mt-6"
              >
                {saving ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                {t('common.next')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          )}

          {/* Step 2: Avatar */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1 flex flex-col"
            >
              <div className="mb-6 mt-4">
                <h1 className="text-2xl font-bold">{t('onboarding.avatarTitle')}</h1>
                <p className="text-muted-foreground text-sm mt-1">{t('onboarding.avatarDescription')}</p>
              </div>

              {/* Custom upload */}
              <div className="flex justify-center mb-6">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploading}
                  className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-dashed border-muted-foreground/30 hover:border-primary transition-colors"
                >
                  {customAvatarUrl ? (
                    <img src={customAvatarUrl} alt="Avatar" className="w-full h-full object-cover" />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full gap-1">
                      {uploading ? (
                        <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
                      ) : (
                        <>
                          <Camera className="w-6 h-6 text-muted-foreground" />
                          <span className="text-[10px] text-muted-foreground">{t('onboarding.uploadPhoto')}</span>
                        </>
                      )}
                    </div>
                  )}
                  {customAvatarUrl && (
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                  )}
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleUploadPhoto}
                  className="hidden"
                />
              </div>

              <p className="text-center text-sm text-muted-foreground mb-4">{t('onboarding.orChooseAvatar')}</p>

              {/* Default avatars grid */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {DEFAULT_AVATARS.map((avatar, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelectAvatar(avatar)}
                    className={cn(
                      "aspect-square rounded-xl overflow-hidden border-2 transition-all",
                      selectedAvatar === avatar && !customAvatarUrl
                        ? "border-primary ring-2 ring-primary/30 scale-105"
                        : "border-transparent hover:border-muted-foreground/30"
                    )}
                  >
                    <img src={avatar} alt={`Avatar ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              <div className="mt-auto">
                <Button
                  onClick={handleSaveAvatar}
                  disabled={(!selectedAvatar && !customAvatarUrl) || saving}
                  className="w-full h-12"
                >
                  {saving ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                  {t('common.next')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Upload First Item */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1 flex flex-col items-center justify-center text-center"
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Package className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-2xl font-bold mb-2">{t('onboarding.uploadItemTitle')}</h1>
              <p className="text-muted-foreground text-sm mb-8 max-w-xs">
                {t('onboarding.uploadItemDescription')}
              </p>
              <Button
                onClick={() => navigate('/items/new?onboarding=true')}
                className="h-12 px-8"
              >
                <Upload className="w-4 h-4 mr-2" />
                {t('onboarding.uploadFirstItem')}
              </Button>
            </motion.div>
          )}

          {/* Step 4: Complete */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-1 flex flex-col items-center justify-center text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="w-24 h-24 rounded-full bg-primary flex items-center justify-center mb-6"
              >
                <Check className="w-12 h-12 text-white" strokeWidth={3} />
              </motion.div>
              <h1 className="text-2xl font-bold mb-2">{t('onboarding.completeTitle')}</h1>
              <p className="text-muted-foreground text-sm">{t('onboarding.completeDescription')}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
