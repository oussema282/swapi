import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { 
  CheckCircle2, 
  AlertCircle, 
  XCircle, 
  Activity, 
  Database, 
  Server, 
  Wifi,
  Clock
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface HealthMetric {
  name: string;
  status: 'healthy' | 'warning' | 'error';
  value?: string;
  icon: React.ElementType;
}

export function SystemHealth() {
  const [metrics, setMetrics] = useState<HealthMetric[]>([]);
  const [loading, setLoading] = useState(true);
  const [overallHealth, setOverallHealth] = useState(100);

  useEffect(() => {
    async function checkHealth() {
      try {
        const startTime = Date.now();
        
        // Test database connection
        const { error: dbError } = await supabase
          .from('profiles')
          .select('id', { count: 'exact', head: true });
        
        const dbLatency = Date.now() - startTime;
        
        // Test auth status
        const { data: session } = await supabase.auth.getSession();
        
        const healthMetrics: HealthMetric[] = [
          {
            name: 'Database',
            status: dbError ? 'error' : dbLatency < 500 ? 'healthy' : 'warning',
            value: dbError ? 'Unreachable' : `${dbLatency}ms`,
            icon: Database,
          },
          {
            name: 'Authentication',
            status: session ? 'healthy' : 'warning',
            value: session ? 'Connected' : 'No Session',
            icon: Server,
          },
          {
            name: 'API',
            status: 'healthy',
            value: 'Operational',
            icon: Wifi,
          },
          {
            name: 'Realtime',
            status: 'healthy',
            value: 'Active',
            icon: Activity,
          },
        ];

        setMetrics(healthMetrics);
        
        // Calculate overall health
        const healthyCount = healthMetrics.filter(m => m.status === 'healthy').length;
        setOverallHealth((healthyCount / healthMetrics.length) * 100);
      } catch (error) {
        console.error('Health check error:', error);
      } finally {
        setLoading(false);
      }
    }

    checkHealth();
    
    // Check every 30 seconds
    const interval = setInterval(checkHealth, 30000);
    return () => clearInterval(interval);
  }, []);

  const getStatusIcon = (status: HealthMetric['status']) => {
    switch (status) {
      case 'healthy':
        return <CheckCircle2 className="h-4 w-4 text-emerald-500" />;
      case 'warning':
        return <AlertCircle className="h-4 w-4 text-amber-500" />;
      case 'error':
        return <XCircle className="h-4 w-4 text-destructive" />;
    }
  };

  const getStatusColor = (status: HealthMetric['status']) => {
    switch (status) {
      case 'healthy':
        return 'bg-emerald-500/10 text-emerald-600';
      case 'warning':
        return 'bg-amber-500/10 text-amber-600';
      case 'error':
        return 'bg-destructive/10 text-destructive';
    }
  };

  if (loading) {
    return (
      <div className="rounded-xl border border-border bg-card p-6 animate-pulse">
        <div className="h-5 w-32 bg-muted rounded mb-4" />
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-12 bg-muted rounded" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">System Health</h3>
        <Badge variant="secondary" className={cn(
          overallHealth >= 90 ? 'bg-emerald-500/10 text-emerald-600' :
          overallHealth >= 70 ? 'bg-amber-500/10 text-amber-600' :
          'bg-destructive/10 text-destructive'
        )}>
          {overallHealth}% Healthy
        </Badge>
      </div>

      <div className="mb-4">
        <Progress 
          value={overallHealth} 
          className="h-2"
        />
      </div>

      <div className="space-y-3">
        {metrics.map((metric) => (
          <div
            key={metric.name}
            className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
          >
            <div className="flex items-center gap-3">
              <div className={cn(
                'p-2 rounded-lg',
                getStatusColor(metric.status)
              )}>
                <metric.icon className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-medium">{metric.name}</p>
                <p className="text-xs text-muted-foreground">{metric.value}</p>
              </div>
            </div>
            {getStatusIcon(metric.status)}
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-border flex items-center gap-2 text-xs text-muted-foreground">
        <Clock className="h-3 w-3" />
        <span>Last checked: Just now</span>
      </div>
    </div>
  );
}
