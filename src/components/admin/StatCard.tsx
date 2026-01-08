import { cn } from '@/lib/utils';
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon: LucideIcon;
  iconColor?: string;
  loading?: boolean;
}

export function StatCard({
  title,
  value,
  change,
  changeLabel = 'vs last week',
  icon: Icon,
  iconColor = 'text-primary',
  loading = false,
}: StatCardProps) {
  const isPositive = change && change > 0;
  const isNegative = change && change < 0;

  if (loading) {
    return (
      <div className="rounded-xl border border-border bg-card p-6 animate-pulse">
        <div className="flex items-start justify-between">
          <div className="space-y-3 flex-1">
            <div className="h-4 w-24 bg-muted rounded" />
            <div className="h-8 w-16 bg-muted rounded" />
            <div className="h-3 w-32 bg-muted rounded" />
          </div>
          <div className="h-10 w-10 bg-muted rounded-lg" />
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold tracking-tight">{value}</p>
          {change !== undefined && (
            <div className="flex items-center gap-1.5 text-xs">
              {isPositive && (
                <>
                  <TrendingUp className="h-3.5 w-3.5 text-emerald-500" />
                  <span className="font-medium text-emerald-500">+{change}%</span>
                </>
              )}
              {isNegative && (
                <>
                  <TrendingDown className="h-3.5 w-3.5 text-destructive" />
                  <span className="font-medium text-destructive">{change}%</span>
                </>
              )}
              {change === 0 && (
                <span className="font-medium text-muted-foreground">0%</span>
              )}
              <span className="text-muted-foreground">{changeLabel}</span>
            </div>
          )}
        </div>
        <div className={cn('rounded-lg p-2.5 bg-primary/10', iconColor)}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
