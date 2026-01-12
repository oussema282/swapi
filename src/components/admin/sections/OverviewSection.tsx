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
import { format, subDays, parseISO } from 'date-fns';

interface DailyData {
  date: string;
  name: string;
  users: number;
  items: number;
  matches: number;
  swipes: number;
}

export function OverviewSection() {
  const [chartData, setChartData] = useState<DailyData[]>([]);
  const [activities, setActivities] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Get the last 7 days
        const last7Days = Array.from({ length: 7 }, (_, i) => {
          const date = subDays(new Date(), 6 - i);
          return {
            date: format(date, 'yyyy-MM-dd'),
            name: format(date, 'EEE'),
          };
        });

        // Fetch real data for charts
        const [profilesResult, itemsResult, matchesResult, swipesResult] = await Promise.all([
          supabase.from('profiles').select('created_at'),
          supabase.from('items').select('created_at'),
          supabase.from('matches').select('created_at, is_completed'),
          supabase.from('swipes').select('created_at, liked'),
        ]);

        // Process daily data
        const dailyData: DailyData[] = last7Days.map(({ date, name }) => {
          const dayUsers = profilesResult.data?.filter(p => 
            format(parseISO(p.created_at), 'yyyy-MM-dd') === date
          ).length || 0;

          const dayItems = itemsResult.data?.filter(i => 
            format(parseISO(i.created_at), 'yyyy-MM-dd') === date
          ).length || 0;

          const dayMatches = matchesResult.data?.filter(m => 
            format(parseISO(m.created_at), 'yyyy-MM-dd') === date
          ).length || 0;

          const daySwipes = swipesResult.data?.filter(s => 
            format(parseISO(s.created_at), 'yyyy-MM-dd') === date
          ).length || 0;

          return {
            date,
            name,
            users: dayUsers,
            items: dayItems,
            matches: dayMatches,
            swipes: daySwipes,
          };
        });

        setChartData(dailyData);

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

  // Transform data for different chart types
  const userActivityData = chartData.map(d => ({
    name: d.name,
    value: d.swipes,
  }));

  const itemsMatchesData = chartData.map(d => ({
    name: d.name,
    value: d.items,
    value2: d.matches,
  }));

  const signupsData = chartData.map(d => ({
    name: d.name,
    value: d.users,
  }));

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
            title="Daily Swipe Activity"
            data={userActivityData}
            type="area"
            loading={loading}
            label="Swipes"
          />
          
          <div className="grid gap-6 md:grid-cols-2">
            <AdminChart
              title="Items & Matches"
              data={itemsMatchesData}
              type="bar"
              loading={loading}
              label="New Items"
              secondaryLabel="New Matches"
            />
            <AdminChart
              title="New Users"
              data={signupsData}
              type="area"
              loading={loading}
              color="hsl(142, 76%, 36%)"
              label="Signups"
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
