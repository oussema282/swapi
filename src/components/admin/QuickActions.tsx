import { Button } from '@/components/ui/button';
import { 
  UserPlus, 
  Package, 
  Send, 
  Settings, 
  Download, 
  RefreshCcw,
  Shield,
  Mail
} from 'lucide-react';
import { toast } from 'sonner';

interface QuickAction {
  icon: React.ElementType;
  label: string;
  description: string;
  onClick: () => void;
  variant?: 'default' | 'outline' | 'secondary';
}

export function QuickActions() {
  const actions: QuickAction[] = [
    {
      icon: UserPlus,
      label: 'Add Admin',
      description: 'Grant admin access',
      onClick: () => toast.info('Navigate to Role Management section'),
      variant: 'outline',
    },
    {
      icon: Package,
      label: 'Manage Items',
      description: 'Review listings',
      onClick: () => toast.info('Navigate to Items section'),
      variant: 'outline',
    },
    {
      icon: Download,
      label: 'Export Data',
      description: 'Download reports',
      onClick: () => toast.success('Report generation started'),
      variant: 'outline',
    },
    {
      icon: RefreshCcw,
      label: 'Sync Data',
      description: 'Refresh analytics',
      onClick: () => {
        toast.promise(
          new Promise(resolve => setTimeout(resolve, 2000)),
          {
            loading: 'Syncing data...',
            success: 'Data synchronized',
            error: 'Sync failed',
          }
        );
      },
      variant: 'outline',
    },
  ];

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="font-semibold mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {actions.map((action) => (
          <Button
            key={action.label}
            variant={action.variant}
            className="h-auto flex-col items-center gap-2 py-4 px-3"
            onClick={action.onClick}
          >
            <action.icon className="h-5 w-5" />
            <div className="text-center">
              <p className="text-xs font-medium">{action.label}</p>
              <p className="text-[10px] text-muted-foreground font-normal">
                {action.description}
              </p>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}
