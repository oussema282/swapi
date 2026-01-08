import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { StatCard } from '../StatCard';
import { AdminChart } from '../AdminChart';
import { RecentActivity } from '../RecentActivity';
import { Users, Package, Handshake, Crown, TrendingUp, Activity } from 'lucide-react';

interface Stats {
  totalUsers: number;
  totalItems: number;
  totalMatches: number;
  proUsers: number;
  activeItems: number;
  completedSwaps: number;
}

export function OverviewSection() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState<{ name: string; value: number }[]>([]);
  const [activities, setActivities] = useState<any[]>([]);

  useEffect(() => {
    async function fetchStats() {
      try {
        // Fetch counts in parallel
        const [
          usersResult,
          itemsResult,
          matchesResult,
          proUsersResult,
          activeItemsResult,
          completedSwapsResult,
        ] = await Promise.all([
          supabase.from('profiles').select('id', { count: 'exact', head: true }),
          supabase.from('items').select('id', { count: 'exact', head: true }),
          supabase.from('matches').select('id', { count: 'exact', head: true }),
          supabase.from('user_subscriptions').select('id', { count: 'exact', head: true }).eq('is_pro', true),
          supabase.from('items').select('id', { count: 'exact', head: true }).eq('is_active', true).eq('is_archived', false),
          supabase.from('matches').select('id', { count: 'exact', head: true }).eq('is_completed', true),
        ]);

        setStats({
          totalUsers: usersResult.count || 0,
          totalItems: itemsResult.count || 0,
          totalMatches: matchesResult.count || 0,
          proUsers: proUsersResult.count || 0,
          activeItems: activeItemsResult.count || 0,
          completedSwaps: completedSwapsResult.count || 0,
        });

        // Generate chart data (last 7 days mock - would be real data with proper analytics)
        const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        const mockChartData = days.map((day) => ({
          name: day,
          value: Math.floor(Math.random() * 50) + 10,
        }));
        setChartData(mockChartData);

        // Fetch recent activity
        const { data: recentMatches } = await supabase
          .from('matches')
          .select('id, created_at, is_completed')
          .order('created_at', { ascending: false })
          .limit(5);

        const { data: recentItems } = await supabase
          .from('items')
          .select('id, title, created_at')
          .order('created_at', { ascending: false })
          .limit(5);

        const { data: recentProfiles } = await supabase
          .from('profiles')
          .select('id, display_name, avatar_url, created_at')
          .order('created_at', { ascending: false })
          .limit(5);

        // Combine and sort activities
        const allActivities = [
          ...(recentMatches || []).map((m) => ({
            id: m.id,
            type: m.is_completed ? 'swap' : 'match',
            title: m.is_completed ? 'Swap Completed' : 'New Match Created',
            description: `Match ID: ${m.id.slice(0, 8)}...`,
            timestamp: m.created_at,
            user: 'System',
          })),
          ...(recentItems || []).map((i) => ({
            id: i.id,
            type: 'item',
            title: 'New Item Listed',
            description: i.title,
            timestamp: i.created_at,
            user: 'User',
          })),
          ...(recentProfiles || []).map((p) => ({
            id: p.id,
            type: 'signup',
            title: 'New User Joined',
            description: p.display_name,
            timestamp: p.created_at,
            avatar: p.avatar_url,
            user: p.display_name,
          })),
        ].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
          .slice(0, 10);

        setActivities(allActivities);
      } catch (error) {
        console.error('Error fetching admin stats:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Dashboard Overview</h2>
        <p className="text-muted-foreground">
          Key metrics and recent activity across the platform.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <StatCard
          title="Total Users"
          value={stats?.totalUsers || 0}
          change={12}
          icon={Users}
          loading={loading}
        />
        <StatCard
          title="Total Items"
          value={stats?.totalItems || 0}
          change={8}
          icon={Package}
          loading={loading}
        />
        <StatCard
          title="Active Items"
          value={stats?.activeItems || 0}
          change={5}
          icon={Activity}
          loading={loading}
        />
        <StatCard
          title="Total Matches"
          value={stats?.totalMatches || 0}
          change={15}
          icon={Handshake}
          loading={loading}
        />
        <StatCard
          title="Completed Swaps"
          value={stats?.completedSwaps || 0}
          change={20}
          icon={TrendingUp}
          loading={loading}
        />
        <StatCard
          title="Pro Users"
          value={stats?.proUsers || 0}
          change={3}
          icon={Crown}
          loading={loading}
        />
      </div>

      {/* Charts and Activity */}
      <div className="grid gap-6 lg:grid-cols-2">
        <AdminChart
          title="User Activity"
          data={chartData}
          type="area"
          loading={loading}
          label="Active Users"
        />
        <RecentActivity activities={activities} loading={loading} />
      </div>

      {/* Additional Charts */}
      <div className="grid gap-6 lg:grid-cols-2">
        <AdminChart
          title="Items & Matches"
          data={chartData.map((d, i) => ({
            ...d,
            value: Math.floor(Math.random() * 30) + 5,
            value2: Math.floor(Math.random() * 20) + 2,
          }))}
          type="bar"
          loading={loading}
          label="Items"
          secondaryLabel="Matches"
        />
        <AdminChart
          title="Subscription Growth"
          data={chartData.map((d) => ({
            ...d,
            value: Math.floor(Math.random() * 10) + 1,
          }))}
          type="area"
          loading={loading}
          color="hsl(45, 93%, 47%)"
          label="Pro Subscriptions"
        />
      </div>
    </div>
  );
}
