import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { PlatformStats } from '../PlatformStats';
import { AdminChart } from '../AdminChart';
import { RecentActivity } from '../RecentActivity';
import { QuickActions } from '../QuickActions';
import { SystemHealth } from '../SystemHealth';
import { TopPerformers } from '../TopPerformers';
import { CategoryBreakdown } from '../CategoryBreakdown';
import { LiveIndicator } from '../LiveIndicator';
import { formatDistanceToNow } from 'date-fns';

export function OverviewSection() {
  const [chartData, setChartData] = useState<{ name: string; value: number }[]>([]);
  const [activities, setActivities] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Generate chart data (last 7 days)
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
        console.error('Error fetching admin data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="space-y-6">
      {/* Header with Live Indicator */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Dashboard Overview</h2>
          <p className="text-muted-foreground">
            Real-time platform metrics and insights
          </p>
        </div>
        <LiveIndicator />
      </div>

      {/* Platform Stats with Sparklines */}
      <PlatformStats />

      {/* Quick Actions */}
      <QuickActions />

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column - Charts */}
        <div className="lg:col-span-2 space-y-6">
          <AdminChart
            title="User Activity Trend"
            data={chartData}
            type="area"
            loading={loading}
            label="Active Users"
          />
          
          <div className="grid gap-6 md:grid-cols-2">
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
              title="Revenue Trend"
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

        {/* Right Column - Widgets */}
        <div className="space-y-6">
          <SystemHealth />
          <CategoryBreakdown />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid gap-6 lg:grid-cols-2">
        <RecentActivity activities={activities} loading={loading} />
        <TopPerformers />
      </div>
    </div>
  );
}
