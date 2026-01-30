import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { DataTable } from '../DataTable';
import { StatCard } from '../StatCard';
import { toast } from 'sonner';
import { format } from 'date-fns';
import {
  Crown,
  Users,
  DollarSign,
  TrendingUp,
  Search,
  RefreshCw,
  Download,
  Gift,
  XCircle,
} from 'lucide-react';

interface Subscription {
  id: string;
  user_id: string;
  is_pro: boolean;
  subscribed_at: string | null;
  expires_at: string | null;
  profile?: {
    display_name: string;
    avatar_url: string | null;
  };
}

const columns = [
  { key: 'display_name', label: 'User', type: 'avatar' as const },
  { 
    key: 'status', 
    label: 'Status', 
    type: 'badge' as const,
    badgeVariant: (value: string) => value === 'Active' ? 'default' : 'secondary',
  },
  { key: 'subscribed_at', label: 'Since', type: 'date' as const },
  { key: 'expires_at', label: 'Expires', type: 'date' as const },
  { key: 'actions', label: '', type: 'actions' as const },
];

const actions = [
  { label: 'View User', value: 'view' },
  { label: 'Revoke Pro', value: 'revoke', destructive: true },
];

export function SubscriptionsSection() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [stats, setStats] = useState({
    totalPro: 0,
    totalFree: 0,
    newThisMonth: 0,
    mrr: 0,
  });
  const [grantUserId, setGrantUserId] = useState('');
  const [granting, setGranting] = useState(false);
  const pageSize = 10;

  useEffect(() => {
    fetchSubscriptions();
    fetchStats();
  }, [page, search]);

  const fetchStats = async () => {
    try {
      const [proResult, totalResult, newResult] = await Promise.all([
        supabase.from('user_subscriptions').select('id', { count: 'exact', head: true }).eq('is_pro', true),
        supabase.from('user_subscriptions').select('id', { count: 'exact', head: true }),
        supabase.from('user_subscriptions')
          .select('id', { count: 'exact', head: true })
          .eq('is_pro', true)
          .gte('subscribed_at', new Date(new Date().setDate(1)).toISOString()),
      ]);

      const proCount = proResult.count || 0;
      const totalCount = totalResult.count || 0;

      setStats({
        totalPro: proCount,
        totalFree: totalCount - proCount,
        newThisMonth: newResult.count || 0,
        mrr: proCount * 9.99, // Assuming $9.99/month
      });
    } catch (err) {
      console.error('Error fetching stats:', err);
    }
  };

  const fetchSubscriptions = async () => {
    setLoading(true);
    try {
      const { data: subsData, count, error } = await supabase
        .from('user_subscriptions')
        .select('*', { count: 'exact' })
        .eq('is_pro', true)
        .order('subscribed_at', { ascending: false })
        .range((page - 1) * pageSize, page * pageSize - 1);

      if (error) throw error;

      // Fetch profiles for each subscription
      const userIds = subsData?.map(s => s.user_id) || [];
      const { data: profilesData } = await supabase
        .from('profiles')
        .select('user_id, display_name, avatar_url')
        .in('user_id', userIds);

      const profileMap = new Map(
        profilesData?.map(p => [p.user_id, { display_name: p.display_name, avatar_url: p.avatar_url }]) || []
      );

      let filtered: Subscription[] = (subsData || []).map(s => ({
        ...s,
        profile: profileMap.get(s.user_id) || undefined,
      }));

      if (search) {
        filtered = filtered.filter(s => 
          s.profile?.display_name?.toLowerCase().includes(search.toLowerCase()) ||
          s.user_id.includes(search)
        );
      }

      setSubscriptions(filtered);
      setTotalPages(Math.ceil((count || 0) / pageSize));
    } catch (error) {
      console.error('Error fetching subscriptions:', error);
      toast.error('Failed to load subscriptions');
    } finally {
      setLoading(false);
    }
  };

  const handleAction = async (action: string, sub: Subscription) => {
    switch (action) {
      case 'view':
        window.open(`/user/${sub.user_id}`, '_blank');
        break;
      case 'revoke':
        try {
          const { error } = await supabase
            .from('user_subscriptions')
            .update({ 
              is_pro: false, 
              expires_at: new Date().toISOString() 
            })
            .eq('user_id', sub.user_id);

          if (error) throw error;
          toast.success('Pro status revoked');
          fetchSubscriptions();
          fetchStats();
        } catch (err: any) {
          toast.error('Failed to revoke', { description: err.message });
        }
        break;
    }
  };

  const handleGrantPro = async () => {
    if (!grantUserId.trim()) {
      toast.error('Please enter a user ID');
      return;
    }
    setGranting(true);
    try {
      // Check if subscription exists
      const { data: existing } = await supabase
        .from('user_subscriptions')
        .select('id')
        .eq('user_id', grantUserId)
        .maybeSingle();

      if (existing) {
        // Update existing
        const { error } = await supabase
          .from('user_subscriptions')
          .update({
            is_pro: true,
            subscribed_at: new Date().toISOString(),
            expires_at: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
          })
          .eq('user_id', grantUserId);

        if (error) throw error;
      } else {
        // Create new
        const { error } = await supabase
          .from('user_subscriptions')
          .insert({
            user_id: grantUserId,
            is_pro: true,
            subscribed_at: new Date().toISOString(),
            expires_at: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
          });

        if (error) throw error;
      }

      toast.success('Pro status granted');
      setGrantUserId('');
      fetchSubscriptions();
      fetchStats();
    } catch (err: any) {
      toast.error('Failed to grant Pro', { description: err.message });
    } finally {
      setGranting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <Crown className="h-6 w-6 text-amber-500" />
            Subscriptions
          </h2>
          <p className="text-muted-foreground">Manage Pro subscribers and revenue</p>
        </div>
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard
          title="Pro Subscribers"
          value={stats.totalPro}
          icon={Crown}
          loading={loading}
        />
        <StatCard
          title="Free Users"
          value={stats.totalFree}
          icon={Users}
          loading={loading}
        />
        <StatCard
          title="New This Month"
          value={stats.newThisMonth}
          change={12}
          icon={TrendingUp}
          loading={loading}
        />
        <StatCard
          title="Est. MRR"
          value={`$${stats.mrr.toFixed(2)}`}
          icon={DollarSign}
          loading={loading}
        />
      </div>

      {/* Grant Pro */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gift className="h-5 w-5" />
            Grant Pro Status
          </CardTitle>
          <CardDescription>
            Manually grant Pro status to a user (for testing or support cases)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input
              placeholder="Enter User ID..."
              value={grantUserId}
              onChange={(e) => setGrantUserId(e.target.value)}
              className="max-w-sm"
            />
            <Button onClick={handleGrantPro} disabled={granting}>
              {granting ? <RefreshCw className="h-4 w-4 animate-spin mr-2" /> : <Crown className="h-4 w-4 mr-2" />}
              Grant Pro
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Search & Table */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search subscribers..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              className="pl-9"
            />
          </div>
        </div>

        <DataTable
          columns={columns}
          data={subscriptions.map(sub => ({
            ...sub,
            display_name: sub.profile?.display_name || 'Unknown',
            avatar_url: sub.profile?.avatar_url,
            status: sub.is_pro ? 'Active' : 'Inactive',
          }))}
          loading={loading}
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
          onRowAction={(action, row) => {
            const sub = subscriptions.find(s => s.id === row.id);
            if (sub) handleAction(action, sub);
          }}
          actions={actions}
        />
      </div>
    </div>
  );
}
