import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { AppLayout } from '@/components/layout/AppLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  User, 
  Lock, 
  Mail, 
  Phone, 
  MapPin, 
  Bell, 
  Shield, 
  Loader2, 
  Check, 
  Eye, 
  EyeOff,
  Camera,
  Save,
  AlertTriangle,
  Globe
} from 'lucide-react';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';
import { z } from 'zod';

const profileSchema = z.object({
  displayName: z.string().min(2, 'Name must be at least 2 characters').max(50, 'Name too long'),
  location: z.string().max(100, 'Location too long').optional(),
});

const passwordSchema = z.object({
  currentPassword: z.string().min(6, 'Password must be at least 6 characters'),
  newPassword: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
}).refine(data => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

const emailSchema = z.object({
  newEmail: z.string().email('Invalid email address'),
});

export default function Settings() {
  const { user, profile, loading: authLoading, refreshProfile } = useAuth();
  const navigate = useNavigate();
  
  // Profile state
  const [displayName, setDisplayName] = useState('');
  const [location, setLocation] = useState('');
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [savingProfile, setSavingProfile] = useState(false);
  
  // Password state
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [changingPassword, setChangingPassword] = useState(false);
  
  // Email state
  const [newEmail, setNewEmail] = useState('');
  const [changingEmail, setChangingEmail] = useState(false);
  
  // Notification preferences
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [matchAlerts, setMatchAlerts] = useState(true);
  const [messageAlerts, setMessageAlerts] = useState(true);
  
  // Privacy settings
  const [profileVisible, setProfileVisible] = useState(true);
  const [showLocation, setShowLocation] = useState(true);
  
  const [activeTab, setActiveTab] = useState('profile');

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/');
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (profile) {
      setDisplayName(profile.display_name || '');
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

      setAvatarUrl(publicUrl);
      
      // Update profile immediately
      await supabase
        .from('profiles')
        .update({ avatar_url: publicUrl, updated_at: new Date().toISOString() })
        .eq('user_id', user.id);
      
      await refreshProfile();
      toast.success('Avatar updated!');
    } catch (error: any) {
      toast.error('Failed to upload avatar');
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  const handleSaveProfile = async () => {
    try {
      const validated = profileSchema.parse({ displayName, location });
      
      if (!user) return;
      
      setSavingProfile(true);
      
      const { error } = await supabase
        .from('profiles')
        .update({
          display_name: validated.displayName.trim(),
          location: validated.location?.trim() || null,
          updated_at: new Date().toISOString(),
        })
        .eq('user_id', user.id);

      if (error) throw error;

      await refreshProfile();
      toast.success('Profile updated successfully!');
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        toast.error('Failed to save profile');
      }
    } finally {
      setSavingProfile(false);
    }
  };

  const handleChangePassword = async () => {
    try {
      const validated = passwordSchema.parse({ currentPassword, newPassword, confirmPassword });
      
      setChangingPassword(true);
      
      const { error } = await supabase.auth.updateUser({
        password: validated.newPassword
      });

      if (error) throw error;

      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      toast.success('Password changed successfully!');
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        toast.error(error.message || 'Failed to change password');
      }
    } finally {
      setChangingPassword(false);
    }
  };

  const handleChangeEmail = async () => {
    try {
      const validated = emailSchema.parse({ newEmail });
      
      setChangingEmail(true);
      
      const { error } = await supabase.auth.updateUser({
        email: validated.newEmail
      });

      if (error) throw error;

      toast.success('Verification email sent to your new address!');
      setNewEmail('');
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        toast.error(error.message || 'Failed to change email');
      }
    } finally {
      setChangingEmail(false);
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col h-screen"
      >
        {/* Header */}
        <div className="flex items-center gap-3 p-4 border-b bg-card">
          <Button variant="ghost" size="icon" onClick={() => navigate('/profile')}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-lg font-semibold">Account Settings</h1>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 pb-24">
          <div className="max-w-2xl mx-auto space-y-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-4 mb-6">
                <TabsTrigger value="profile" className="text-xs sm:text-sm">
                  <User className="w-4 h-4 mr-1 hidden sm:inline" />
                  Profile
                </TabsTrigger>
                <TabsTrigger value="security" className="text-xs sm:text-sm">
                  <Lock className="w-4 h-4 mr-1 hidden sm:inline" />
                  Security
                </TabsTrigger>
                <TabsTrigger value="notifications" className="text-xs sm:text-sm">
                  <Bell className="w-4 h-4 mr-1 hidden sm:inline" />
                  Alerts
                </TabsTrigger>
                <TabsTrigger value="privacy" className="text-xs sm:text-sm">
                  <Shield className="w-4 h-4 mr-1 hidden sm:inline" />
                  Privacy
                </TabsTrigger>
              </TabsList>

              {/* Profile Tab */}
              <TabsContent value="profile" className="space-y-6">
                {/* Avatar Section */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Profile Photo</CardTitle>
                    <CardDescription>Update your profile picture</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-6">
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
                          {uploading ? (
                            <Loader2 className="w-4 h-4 animate-spin text-primary-foreground" />
                          ) : (
                            <Camera className="w-4 h-4 text-primary-foreground" />
                          )}
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleAvatarUpload}
                            className="hidden"
                            disabled={uploading}
                          />
                        </label>
                      </div>
                      <div>
                        <p className="font-medium">{profile?.display_name}</p>
                        <p className="text-sm text-muted-foreground">{user?.email}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Personal Info */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Personal Information</CardTitle>
                    <CardDescription>Update your personal details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="displayName" className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Display Name
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

                    <Button
                      onClick={handleSaveProfile}
                      disabled={savingProfile}
                      className="w-full"
                    >
                      {savingProfile ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Saving...
                        </>
                      ) : (
                        <>
                          <Save className="w-4 h-4 mr-2" />
                          Save Changes
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Security Tab */}
              <TabsContent value="security" className="space-y-6">
                {/* Change Email */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Mail className="w-5 h-5" />
                      Email Address
                    </CardTitle>
                    <CardDescription>
                      Current: {user?.email}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="newEmail">New Email Address</Label>
                      <Input
                        id="newEmail"
                        type="email"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                        placeholder="Enter new email"
                      />
                    </div>
                    <Button
                      onClick={handleChangeEmail}
                      disabled={changingEmail || !newEmail}
                      variant="outline"
                      className="w-full"
                    >
                      {changingEmail ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending verification...
                        </>
                      ) : (
                        <>
                          <Mail className="w-4 h-4 mr-2" />
                          Update Email
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>

                {/* Change Password */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Lock className="w-5 h-5" />
                      Change Password
                    </CardTitle>
                    <CardDescription>
                      Update your account password
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <div className="relative">
                        <Input
                          id="currentPassword"
                          type={showCurrentPassword ? 'text' : 'password'}
                          value={currentPassword}
                          onChange={(e) => setCurrentPassword(e.target.value)}
                          placeholder="Enter current password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                          {showCurrentPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="newPassword">New Password</Label>
                      <div className="relative">
                        <Input
                          id="newPassword"
                          type={showNewPassword ? 'text' : 'password'}
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          placeholder="Enter new password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                          {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm New Password</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm new password"
                      />
                    </div>

                    <Button
                      onClick={handleChangePassword}
                      disabled={changingPassword || !currentPassword || !newPassword || !confirmPassword}
                      variant="outline"
                      className="w-full"
                    >
                      {changingPassword ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Updating...
                        </>
                      ) : (
                        <>
                          <Lock className="w-4 h-4 mr-2" />
                          Change Password
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>

                {/* Two-Factor Auth */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      Two-Factor Authentication
                    </CardTitle>
                    <CardDescription>
                      Add an extra layer of security to your account
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                          <AlertTriangle className="w-5 h-5 text-amber-500" />
                        </div>
                        <div>
                          <p className="font-medium">Not enabled</p>
                          <p className="text-sm text-muted-foreground">Coming soon</p>
                        </div>
                      </div>
                      <Badge variant="secondary">Soon</Badge>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Notifications Tab */}
              <TabsContent value="notifications" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Notification Preferences</CardTitle>
                    <CardDescription>Choose how you want to be notified</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Email Notifications</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive updates via email
                        </p>
                      </div>
                      <Switch
                        checked={emailNotifications}
                        onCheckedChange={setEmailNotifications}
                      />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Push Notifications</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive push notifications
                        </p>
                      </div>
                      <Switch
                        checked={pushNotifications}
                        onCheckedChange={setPushNotifications}
                      />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>New Match Alerts</Label>
                        <p className="text-sm text-muted-foreground">
                          Get notified when you have a new match
                        </p>
                      </div>
                      <Switch
                        checked={matchAlerts}
                        onCheckedChange={setMatchAlerts}
                      />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Message Alerts</Label>
                        <p className="text-sm text-muted-foreground">
                          Get notified for new messages
                        </p>
                      </div>
                      <Switch
                        checked={messageAlerts}
                        onCheckedChange={setMessageAlerts}
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Privacy Tab */}
              <TabsContent value="privacy" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Privacy Settings</CardTitle>
                    <CardDescription>Control your privacy preferences</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Profile Visibility</Label>
                        <p className="text-sm text-muted-foreground">
                          Allow others to view your profile
                        </p>
                      </div>
                      <Switch
                        checked={profileVisible}
                        onCheckedChange={setProfileVisible}
                      />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Show Location</Label>
                        <p className="text-sm text-muted-foreground">
                          Display your approximate location on items
                        </p>
                      </div>
                      <Switch
                        checked={showLocation}
                        onCheckedChange={setShowLocation}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Language Settings */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Globe className="w-5 h-5" />
                      Language
                    </CardTitle>
                    <CardDescription>Choose your preferred language</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>App Language</Label>
                        <p className="text-sm text-muted-foreground">
                          Select display language
                        </p>
                      </div>
                      <LanguageSwitcher variant="full" />
                    </div>
                  </CardContent>
                </Card>

                {/* Danger Zone */}
                <Card className="border-destructive/50">
                  <CardHeader>
                    <CardTitle className="text-lg text-destructive flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Danger Zone
                    </CardTitle>
                    <CardDescription>
                      Irreversible actions
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                      <h4 className="font-medium text-destructive mb-1">Delete Account</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Once you delete your account, there is no going back. This action is permanent.
                      </p>
                      <Button variant="destructive" size="sm" disabled>
                        Delete Account
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </motion.div>
    </AppLayout>
  );
}