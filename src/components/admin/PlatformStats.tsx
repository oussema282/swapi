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
  Zap,
  Target,
  Shield,
  DollarSign
} from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area } from 'recharts';
import { subDays, format, parseISO } from 'date-fns';

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
        const today = new Date();
        const lastWeekStart = subDays(today, 14);
        const thisWeekStart = subDays(today, 7);

        // Fetch all data
        const [
          profilesResult,
          itemsResult,
          matchesResult,
          proUsersResult,
          swipesResult,
          moderationResult,
        ] = await Promise.all([
          supabase.from('profiles').select('created_at, last_seen'),
          supabase.from('items').select('id, created_at, is_archived'),
          supabase.from('matches').select('id, created_at, is_completed'),
          supabase.from('user_subscriptions').select('id, created_at').eq('is_pro', true),
          supabase.from('swipes').select('id, created_at'),
          supabase.from('content_moderation_logs').select('id, created_at, is_safe'),
        ]);

        const profiles = profilesResult.data || [];
        const items = itemsResult.data || [];
        const matches = matchesResult.data || [];
        const proUsers = proUsersResult.data || [];
        const swipes = swipesResult.data || [];
        const moderation = moderationResult.data || [];

        // Calculate totals
        const totalUsers = profiles.length;
        const activeItems = items.filter(i => !i.is_archived).length;
        const totalMatches = matches.length;
        const totalProUsers = proUsers.length;
        const totalSwipes = swipes.length;
        const completedSwaps = matches.filter(m => m.is_completed).length;
        const safeContent = moderation.filter(m => m.is_safe).length;

        // Calculate weekly changes
        const calcWeeklyChange = (data: { created_at: string }[]) => {
          const thisWeekCount = data.filter(d => 
            parseISO(d.created_at) >= thisWeekStart
          ).length;
          const lastWeekCount = data.filter(d => 
            parseISO(d.created_at) >= lastWeekStart && parseISO(d.created_at) < thisWeekStart
          ).length;
          if (lastWeekCount === 0) return thisWeekCount > 0 ? 100 : 0;
          return Math.round(((thisWeekCount - lastWeekCount) / lastWeekCount) * 100);
        };

        // Generate real sparkline data (last 7 days)
        const generateSparkline = (data: { created_at: string }[]) => {
          return Array.from({ length: 7 }, (_, i) => {
            const date = format(subDays(today, 6 - i), 'yyyy-MM-dd');
            return data.filter(d => 
              format(parseISO(d.created_at), 'yyyy-MM-dd') === date
            ).length;
          });
        };

        // Generate cumulative sparkline for total counts
        const generateCumulativeSparkline = (data: { created_at: string }[]) => {
          return Array.from({ length: 7 }, (_, i) => {
            const date = subDays(today, 6 - i);
            return data.filter(d => parseISO(d.created_at) <= date).length;
          });
        };

        const statsData: StatWithSparkline[] = [
          {
            title: 'Total Users',
            value: totalUsers.toLocaleString(),
            change: calcWeeklyChange(profiles),
            changeLabel: 'vs last week',
            icon: Users,
            iconColor: 'text-blue-500',
            sparklineData: generateCumulativeSparkline(profiles),
            sparklineColor: '#3b82f6',
          },
          {
            title: 'Active Items',
            value: activeItems.toLocaleString(),
            change: calcWeeklyChange(items.filter(i => !i.is_archived)),
            changeLabel: 'vs last week',
            icon: Package,
            iconColor: 'text-purple-500',
            sparklineData: generateSparkline(items),
            sparklineColor: '#a855f7',
          },
          {
            title: 'Total Matches',
            value: totalMatches.toLocaleString(),
            change: calcWeeklyChange(matches),
            changeLabel: 'vs last week',
            icon: Handshake,
            iconColor: 'text-emerald-500',
            sparklineData: generateSparkline(matches),
            sparklineColor: '#10b981',
          },
          {
            title: 'Pro Subscribers',
            value: totalProUsers.toLocaleString(),
            change: calcWeeklyChange(proUsers),
            changeLabel: 'vs last week',
            icon: Crown,
            iconColor: 'text-amber-500',
            sparklineData: generateCumulativeSparkline(proUsers),
            sparklineColor: '#f59e0b',
          },
          {
            title: 'Est. Revenue',
            value: `$${(totalProUsers * 9.99).toFixed(0)}`,
            change: calcWeeklyChange(proUsers),
            changeLabel: 'vs last week',
            icon: DollarSign,
            iconColor: 'text-green-500',
            sparklineData: generateCumulativeSparkline(proUsers).map(v => v * 9.99),
            sparklineColor: '#22c55e',
          },
          {
            title: 'Safety Rate',
            value: `${moderation.length > 0 ? ((safeContent / moderation.length) * 100).toFixed(0) : 100}%`,
            change: 0,
            changeLabel: 'content safe',
            icon: Shield,
            iconColor: 'text-teal-500',
            sparklineData: generateSparkline(moderation.filter(m => m.is_safe)),
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
        const isPositive = stat.change >= 0;
        const chartData = stat.sparklineData.map((value) => ({ value }));
        const hasData = stat.sparklineData.some(v => v > 0);

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
              {stat.change !== 0 && (
                <>
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
                </>
              )}
              <span className="text-muted-foreground">{stat.changeLabel}</span>
            </div>

            <div className="h-10">
              {hasData ? (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id={`gradient-${stat.title.replace(/\s/g, '-')}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={stat.sparklineColor} stopOpacity={0.3} />
                        <stop offset="95%" stopColor={stat.sparklineColor} stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke={stat.sparklineColor}
                      fill={`url(#gradient-${stat.title.replace(/\s/g, '-')})`}
                      strokeWidth={1.5}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full flex items-end">
                  <div className="w-full h-[1px] bg-muted" />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
