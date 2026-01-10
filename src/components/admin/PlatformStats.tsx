import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { cn } from '@/lib/utils';
import { 
  Users, 
  Package, 
  Handshake, 
  Crown, 
  TrendingUp, 
  TrendingDown,
  Activity,
  Zap,
  Target,
  BarChart3
} from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area } from 'recharts';

interface StatWithSparkline {
  title: string;
  value: string | number;
  change: number;
  changeLabel: string;
  icon: React.ElementType;
  iconColor: string;
  sparklineData: number[];
  sparklineColor: string;
}

export function PlatformStats() {
  const [stats, setStats] = useState<StatWithSparkline[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const [
          usersResult,
          itemsResult,
          matchesResult,
          proUsersResult,
          swipesResult,
          completedResult,
        ] = await Promise.all([
          supabase.from('profiles').select('id', { count: 'exact', head: true }),
          supabase.from('items').select('id', { count: 'exact', head: true }).eq('is_archived', false),
          supabase.from('matches').select('id', { count: 'exact', head: true }),
          supabase.from('user_subscriptions').select('id', { count: 'exact', head: true }).eq('is_pro', true),
          supabase.from('swipes').select('id', { count: 'exact', head: true }),
          supabase.from('matches').select('id', { count: 'exact', head: true }).eq('is_completed', true),
        ]);

        const totalUsers = usersResult.count || 0;
        const activeItems = itemsResult.count || 0;
        const totalMatches = matchesResult.count || 0;
        const proUsers = proUsersResult.count || 0;
        const totalSwipes = swipesResult.count || 0;
        const completedSwaps = completedResult.count || 0;

        // Generate fake sparkline data for visual effect
        const generateSparkline = () => 
          Array.from({ length: 7 }, () => Math.random() * 100);

        const statsData: StatWithSparkline[] = [
          {
            title: 'Total Users',
            value: totalUsers.toLocaleString(),
            change: 12.5,
            changeLabel: 'vs last month',
            icon: Users,
            iconColor: 'text-blue-500',
            sparklineData: generateSparkline(),
            sparklineColor: '#3b82f6',
          },
          {
            title: 'Active Items',
            value: activeItems.toLocaleString(),
            change: 8.2,
            changeLabel: 'vs last week',
            icon: Package,
            iconColor: 'text-purple-500',
            sparklineData: generateSparkline(),
            sparklineColor: '#a855f7',
          },
          {
            title: 'Total Matches',
            value: totalMatches.toLocaleString(),
            change: 23.1,
            changeLabel: 'vs last month',
            icon: Handshake,
            iconColor: 'text-emerald-500',
            sparklineData: generateSparkline(),
            sparklineColor: '#10b981',
          },
          {
            title: 'Pro Subscribers',
            value: proUsers.toLocaleString(),
            change: 5.7,
            changeLabel: 'vs last week',
            icon: Crown,
            iconColor: 'text-amber-500',
            sparklineData: generateSparkline(),
            sparklineColor: '#f59e0b',
          },
          {
            title: 'Total Swipes',
            value: totalSwipes.toLocaleString(),
            change: 34.2,
            changeLabel: 'this week',
            icon: Zap,
            iconColor: 'text-pink-500',
            sparklineData: generateSparkline(),
            sparklineColor: '#ec4899',
          },
          {
            title: 'Completed Swaps',
            value: completedSwaps.toLocaleString(),
            change: totalMatches > 0 ? Number(((completedSwaps / totalMatches) * 100).toFixed(0)) : 0,
            changeLabel: 'success rate',
            icon: Target,
            iconColor: 'text-teal-500',
            sparklineData: generateSparkline(),
            sparklineColor: '#14b8a6',
          },
        ];

        setStats(statsData);
      } catch (error) {
        console.error('Error fetching platform stats:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="rounded-xl border border-border bg-card p-5 animate-pulse">
            <div className="flex items-start justify-between mb-3">
              <div className="h-4 w-20 bg-muted rounded" />
              <div className="h-8 w-8 bg-muted rounded-lg" />
            </div>
            <div className="h-8 w-16 bg-muted rounded mb-2" />
            <div className="h-12 bg-muted rounded" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {stats.map((stat) => {
        const isPositive = stat.change > 0;
        const chartData = stat.sparklineData.map((value, index) => ({ value }));

        return (
          <div
            key={stat.title}
            className="rounded-xl border border-border bg-card p-5 transition-all hover:shadow-lg hover:border-primary/20 group"
          >
            <div className="flex items-start justify-between mb-2">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                {stat.title}
              </p>
              <div className={cn(
                'rounded-lg p-2 transition-colors',
                'bg-muted group-hover:bg-primary/10'
              )}>
                <stat.icon className={cn('h-4 w-4', stat.iconColor)} />
              </div>
            </div>

            <p className="text-2xl font-bold tracking-tight mb-1">
              {stat.value}
            </p>

            <div className="flex items-center gap-1.5 text-xs mb-3">
              {isPositive ? (
                <TrendingUp className="h-3 w-3 text-emerald-500" />
              ) : (
                <TrendingDown className="h-3 w-3 text-destructive" />
              )}
              <span className={cn(
                'font-medium',
                isPositive ? 'text-emerald-500' : 'text-destructive'
              )}>
                {isPositive ? '+' : ''}{stat.change}%
              </span>
              <span className="text-muted-foreground">{stat.changeLabel}</span>
            </div>

            <div className="h-10">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id={`gradient-${stat.title}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={stat.sparklineColor} stopOpacity={0.3} />
                      <stop offset="95%" stopColor={stat.sparklineColor} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke={stat.sparklineColor}
                    fill={`url(#gradient-${stat.title})`}
                    strokeWidth={1.5}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        );
      })}
    </div>
  );
}
