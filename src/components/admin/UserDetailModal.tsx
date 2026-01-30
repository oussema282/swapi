import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { format } from 'date-fns';
import {
  User,
  Package,
  Handshake,
  AlertTriangle,
  Shield,
  Ban,
  Clock,
  CheckCircle,
  XCircle,
  Flag,
  Crown,
  MapPin,
  Calendar,
  RefreshCw,
} from 'lucide-react';

interface UserDetailModalProps {
  userId: string | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUserUpdated: () => void;
}

interface UserDetails {
  profile: any;
  items: any[];
  matches: any[];
  riskScore: any;
  moderationLogs: any[];
  reports: any[];
  subscription: any;
}

export function UserDetailModal({ userId, open, onOpenChange, onUserUpdated }: UserDetailModalProps) {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState<UserDetails | null>(null);
  const [suspendDays, setSuspendDays] = useState('7');
  const [suspendReason, setSuspendReason] = useState('');
  const [banReason, setBanReason] = useState('');
  const [actionLoading, setActionLoading] = useState(false);

  useEffect(() => {
    if (userId && open) {
      fetchUserDetails();
    }
  }, [userId, open]);

  const fetchUserDetails = async () => {
    if (!userId) return;
    setLoading(true);
    try {
      const [
        profileResult,
        itemsResult,
        matchesResult,
        riskResult,
        moderationResult,
        reportsResult,
        subscriptionResult,
      ] = await Promise.all([
        supabase.from('profiles').select('*').eq('user_id', userId).single(),
        supabase.from('items').select('*').eq('user_id', userId).order('created_at', { ascending: false }),
        supabase.from('matches')
          .select('*, item_a:items!matches_item_a_id_fkey(*), item_b:items!matches_item_b_id_fkey(*)')
          .or(`item_a_id.in.(${userId}),item_b_id.in.(${userId})`)
          .limit(10),
        supabase.from('user_risk_scores').select('*').eq('user_id', userId).maybeSingle(),
        supabase.from('content_moderation_logs').select('*').eq('user_id', userId).order('created_at', { ascending: false }).limit(20),
        supabase.from('reports').select('*').eq('target_id', userId).order('created_at', { ascending: false }),
        supabase.from('user_subscriptions').select('*').eq('user_id', userId).maybeSingle(),
      ]);

      setDetails({
        profile: profileResult.data,
        items: itemsResult.data || [],
        matches: matchesResult.data || [],
        riskScore: riskResult.data,
        moderationLogs: moderationResult.data || [],
        reports: reportsResult.data || [],
        subscription: subscriptionResult.data,
      });
    } catch (err) {
      console.error('Error fetching user details:', err);
      toast.error('Failed to load user details');
    } finally {
      setLoading(false);
    }
  };

  const handleSuspend = async () => {
    if (!userId || !suspendReason) {
      toast.error('Please provide a suspension reason');
      return;
    }
    setActionLoading(true);
    try {
      const suspendedUntil = new Date();
      suspendedUntil.setDate(suspendedUntil.getDate() + parseInt(suspendDays));

      const { error } = await supabase
        .from('profiles')
        .update({
          is_suspended: true,
          suspended_until: suspendedUntil.toISOString(),
          suspension_reason: suspendReason,
        })
        .eq('user_id', userId);

      if (error) throw error;
      toast.success(`User suspended for ${suspendDays} days`);
      setSuspendReason('');
      fetchUserDetails();
      onUserUpdated();
    } catch (err: any) {
      toast.error('Failed to suspend user', { description: err.message });
    } finally {
      setActionLoading(false);
    }
  };

  const handleUnsuspend = async () => {
    if (!userId) return;
    setActionLoading(true);
    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          is_suspended: false,
          suspended_until: null,
          suspension_reason: null,
        })
        .eq('user_id', userId);

      if (error) throw error;
      toast.success('User unsuspended');
      fetchUserDetails();
      onUserUpdated();
    } catch (err: any) {
      toast.error('Failed to unsuspend user', { description: err.message });
    } finally {
      setActionLoading(false);
    }
  };

  const handleBan = async () => {
    if (!userId || !banReason) {
      toast.error('Please provide a ban reason');
      return;
    }
    setActionLoading(true);
    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          is_banned: true,
          banned_at: new Date().toISOString(),
          ban_reason: banReason,
          is_suspended: false,
          suspended_until: null,
        })
        .eq('user_id', userId);

      if (error) throw error;
      toast.success('User banned permanently');
      setBanReason('');
      fetchUserDetails();
      onUserUpdated();
    } catch (err: any) {
      toast.error('Failed to ban user', { description: err.message });
    } finally {
      setActionLoading(false);
    }
  };

  const handleUnban = async () => {
    if (!userId) return;
    setActionLoading(true);
    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          is_banned: false,
          banned_at: null,
          ban_reason: null,
        })
        .eq('user_id', userId);

      if (error) throw error;
      toast.success('User unbanned');
      fetchUserDetails();
      onUserUpdated();
    } catch (err: any) {
      toast.error('Failed to unban user', { description: err.message });
    } finally {
      setActionLoading(false);
    }
  };

  const handleVerify = async () => {
    if (!userId) return;
    setActionLoading(true);
    try {
      const { error } = await supabase
        .from('profiles')
        .update({ is_verified: true })
        .eq('user_id', userId);

      if (error) throw error;
      toast.success('User verified');
      fetchUserDetails();
      onUserUpdated();
    } catch (err: any) {
      toast.error('Failed to verify user', { description: err.message });
    } finally {
      setActionLoading(false);
    }
  };

  const profile = details?.profile;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            {profile && (
              <>
                <Avatar className="h-10 w-10">
                  <AvatarImage src={profile.avatar_url} />
                  <AvatarFallback>{profile.display_name?.[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <span className="flex items-center gap-2">
                    {profile.display_name}
                    {profile.is_verified && <CheckCircle className="h-4 w-4 text-primary" />}
                    {details?.subscription?.is_pro && (
                      <Badge variant="default" className="bg-gradient-to-r from-amber-500 to-orange-500">
                        <Crown className="h-3 w-3 mr-1" /> Pro
                      </Badge>
                    )}
                  </span>
                  <p className="text-sm text-muted-foreground font-normal">{userId?.slice(0, 8)}...</p>
                </div>
              </>
            )}
          </DialogTitle>
          <DialogDescription>
            {profile?.is_banned && (
              <Badge variant="destructive" className="mr-2">
                <Ban className="h-3 w-3 mr-1" /> Banned
              </Badge>
            )}
            {profile?.is_suspended && (
              <Badge variant="outline" className="border-warning text-warning mr-2">
                <Clock className="h-3 w-3 mr-1" /> Suspended
              </Badge>
            )}
            {details?.riskScore && details.riskScore.risk_level !== 'low' && (
              <Badge variant={details.riskScore.risk_level === 'critical' ? 'destructive' : 'outline'} className="mr-2">
                <AlertTriangle className="h-3 w-3 mr-1" /> {details.riskScore.risk_level} Risk
              </Badge>
            )}
          </DialogDescription>
        </DialogHeader>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <RefreshCw className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <Tabs defaultValue="overview" className="flex-1 overflow-hidden flex flex-col">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="items">Items ({details?.items.length})</TabsTrigger>
              <TabsTrigger value="moderation">Moderation</TabsTrigger>
              <TabsTrigger value="reports">Reports ({details?.reports.length})</TabsTrigger>
              <TabsTrigger value="actions">Actions</TabsTrigger>
            </TabsList>

            <ScrollArea className="flex-1 mt-4">
              <TabsContent value="overview" className="space-y-4 pr-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg border bg-muted/30">
                    <p className="text-sm text-muted-foreground">Joined</p>
                    <p className="font-medium flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {profile?.created_at && format(new Date(profile.created_at), 'MMM d, yyyy')}
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border bg-muted/30">
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {profile?.location || 'Not set'}
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border bg-muted/30">
                    <p className="text-sm text-muted-foreground">Items Listed</p>
                    <p className="font-medium flex items-center gap-2">
                      <Package className="h-4 w-4" />
                      {details?.items.length}
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border bg-muted/30">
                    <p className="text-sm text-muted-foreground">Risk Score</p>
                    <p className="font-medium flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      {details?.riskScore ? `${details.riskScore.risk_score.toFixed(0)}/100` : 'Not analyzed'}
                    </p>
                  </div>
                </div>

                {details?.riskScore?.signals && (
                  <div className="p-4 rounded-lg border">
                    <p className="font-medium mb-2">Risk Signals</p>
                    <div className="space-y-1 text-sm">
                      {Object.entries(details.riskScore.signals).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-muted-foreground capitalize">{key.replace(/_/g, ' ')}</span>
                          <span>{String(value)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {profile?.bio && (
                  <div className="p-4 rounded-lg border">
                    <p className="font-medium mb-2">Bio</p>
                    <p className="text-sm text-muted-foreground">{profile.bio}</p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="items" className="pr-4">
                <div className="space-y-2">
                  {details?.items.length === 0 ? (
                    <p className="text-muted-foreground text-center py-8">No items listed</p>
                  ) : (
                    details?.items.map((item) => (
                      <div key={item.id} className="flex items-center gap-3 p-3 rounded-lg border">
                        <div className="w-12 h-12 rounded bg-muted overflow-hidden">
                          {item.photos?.[0] && (
                            <img src={item.photos[0]} alt={item.title} className="w-full h-full object-cover" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{item.title}</p>
                          <p className="text-xs text-muted-foreground capitalize">{item.category}</p>
                        </div>
                        <div className="flex gap-2">
                          {item.is_flagged && <Badge variant="destructive">Flagged</Badge>}
                          {item.is_archived && <Badge variant="secondary">Archived</Badge>}
                          {item.is_active && !item.is_archived && <Badge variant="outline">Active</Badge>}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </TabsContent>

              <TabsContent value="moderation" className="pr-4">
                <div className="space-y-2">
                  {details?.moderationLogs.length === 0 ? (
                    <p className="text-muted-foreground text-center py-8">No moderation history</p>
                  ) : (
                    details?.moderationLogs.map((log) => (
                      <div key={log.id} className="flex items-center gap-3 p-3 rounded-lg border">
                        <div className="w-10 h-10 rounded bg-muted overflow-hidden">
                          <img src={log.content_url} alt="Content" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm capitalize">{log.content_type.replace('_', ' ')}</p>
                          <p className="text-xs text-muted-foreground">
                            {format(new Date(log.created_at), 'MMM d, HH:mm')}
                          </p>
                        </div>
                        <Badge variant={log.action_taken === 'blocked' ? 'destructive' : 'secondary'}>
                          {log.action_taken}
                        </Badge>
                      </div>
                    ))
                  )}
                </div>
              </TabsContent>

              <TabsContent value="reports" className="pr-4">
                <div className="space-y-2">
                  {details?.reports.length === 0 ? (
                    <p className="text-muted-foreground text-center py-8">No reports against this user</p>
                  ) : (
                    details?.reports.map((report) => (
                      <div key={report.id} className="p-3 rounded-lg border">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline">{report.reason}</Badge>
                          <Badge variant={report.status === 'pending' ? 'secondary' : 'outline'}>
                            {report.status}
                          </Badge>
                        </div>
                        {report.description && (
                          <p className="text-sm text-muted-foreground">{report.description}</p>
                        )}
                        <p className="text-xs text-muted-foreground mt-2">
                          {format(new Date(report.created_at), 'MMM d, yyyy HH:mm')}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              </TabsContent>

              <TabsContent value="actions" className="space-y-6 pr-4">
                {/* Verification */}
                {!profile?.is_verified && !profile?.is_banned && (
                  <div className="p-4 rounded-lg border bg-muted/30">
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Verify User
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Grant verified badge to this user
                    </p>
                    <Button onClick={handleVerify} disabled={actionLoading} size="sm">
                      Verify User
                    </Button>
                  </div>
                )}

                {/* Suspension */}
                {!profile?.is_banned && (
                  <div className="p-4 rounded-lg border bg-muted/30">
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Clock className="h-4 w-4 text-warning" />
                      {profile?.is_suspended ? 'Manage Suspension' : 'Suspend User'}
                    </h4>
                    {profile?.is_suspended ? (
                      <div className="space-y-3">
                        <p className="text-sm text-muted-foreground">
                          Suspended until: {profile.suspended_until && format(new Date(profile.suspended_until), 'MMM d, yyyy')}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Reason: {profile.suspension_reason}
                        </p>
                        <Button onClick={handleUnsuspend} disabled={actionLoading} variant="outline" size="sm">
                          Remove Suspension
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <Label htmlFor="suspendDays">Duration (days)</Label>
                            <Input
                              id="suspendDays"
                              type="number"
                              value={suspendDays}
                              onChange={(e) => setSuspendDays(e.target.value)}
                              min="1"
                              max="365"
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="suspendReason">Reason</Label>
                          <Textarea
                            id="suspendReason"
                            value={suspendReason}
                            onChange={(e) => setSuspendReason(e.target.value)}
                            placeholder="Reason for suspension..."
                            rows={2}
                          />
                        </div>
                        <Button onClick={handleSuspend} disabled={actionLoading || !suspendReason} variant="outline" size="sm">
                          Suspend User
                        </Button>
                      </div>
                    )}
                  </div>
                )}

                {/* Ban */}
                <div className="p-4 rounded-lg border border-destructive/30 bg-destructive/5">
                  <h4 className="font-medium mb-2 flex items-center gap-2 text-destructive">
                    <Ban className="h-4 w-4" />
                    {profile?.is_banned ? 'User Banned' : 'Ban User'}
                  </h4>
                  {profile?.is_banned ? (
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        Banned on: {profile.banned_at && format(new Date(profile.banned_at), 'MMM d, yyyy')}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Reason: {profile.ban_reason}
                      </p>
                      <Button onClick={handleUnban} disabled={actionLoading} variant="outline" size="sm">
                        Remove Ban
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        Permanently ban this user from the platform
                      </p>
                      <div>
                        <Label htmlFor="banReason">Reason</Label>
                        <Textarea
                          id="banReason"
                          value={banReason}
                          onChange={(e) => setBanReason(e.target.value)}
                          placeholder="Reason for permanent ban..."
                          rows={2}
                        />
                      </div>
                      <Button 
                        onClick={handleBan} 
                        disabled={actionLoading || !banReason} 
                        variant="destructive" 
                        size="sm"
                      >
                        Ban User Permanently
                      </Button>
                    </div>
                  )}
                </div>
              </TabsContent>
            </ScrollArea>
          </Tabs>
        )}
      </DialogContent>
    </Dialog>
  );
}
