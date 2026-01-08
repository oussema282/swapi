import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { formatDistanceToNow } from 'date-fns';

interface Activity {
  id: string;
  type: 'match' | 'signup' | 'item' | 'swap' | 'subscription';
  title: string;
  description: string;
  timestamp: string;
  avatar?: string;
  user?: string;
}

interface RecentActivityProps {
  activities: Activity[];
  loading?: boolean;
}

const activityColors: Record<Activity['type'], string> = {
  match: 'bg-emerald-500/10 text-emerald-600',
  signup: 'bg-blue-500/10 text-blue-600',
  item: 'bg-purple-500/10 text-purple-600',
  swap: 'bg-orange-500/10 text-orange-600',
  subscription: 'bg-amber-500/10 text-amber-600',
};

const activityLabels: Record<Activity['type'], string> = {
  match: 'Match',
  signup: 'New User',
  item: 'Item',
  swap: 'Swap',
  subscription: 'Pro',
};

export function RecentActivity({ activities, loading }: RecentActivityProps) {
  if (loading) {
    return (
      <div className="rounded-xl border border-border bg-card">
        <div className="border-b border-border px-6 py-4">
          <h3 className="font-semibold">Recent Activity</h3>
        </div>
        <div className="p-6 space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-start gap-3 animate-pulse">
              <div className="h-10 w-10 rounded-full bg-muted" />
              <div className="flex-1 space-y-2">
                <div className="h-4 w-3/4 bg-muted rounded" />
                <div className="h-3 w-1/2 bg-muted rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-border bg-card">
      <div className="border-b border-border px-6 py-4">
        <h3 className="font-semibold">Recent Activity</h3>
      </div>
      <ScrollArea className="h-[400px]">
        <div className="p-4 space-y-1">
          {activities.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              No recent activity
            </p>
          ) : (
            activities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-3 rounded-lg p-3 hover:bg-muted/50 transition-colors"
              >
                <Avatar className="h-10 w-10">
                  <AvatarImage src={activity.avatar} />
                  <AvatarFallback>
                    {activity.user?.charAt(0).toUpperCase() || '?'}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="text-sm font-medium truncate">{activity.title}</p>
                    <Badge 
                      variant="secondary" 
                      className={activityColors[activity.type]}
                    >
                      {activityLabels[activity.type]}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground truncate">
                    {activity.description}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {formatDistanceToNow(new Date(activity.timestamp), { addSuffix: true })}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
