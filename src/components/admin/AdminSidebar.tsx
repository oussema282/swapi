import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  LayoutDashboard, 
  Users, 
  Package, 
  Handshake, 
  Settings, 
  Shield,
  ArrowLeft,
  BarChart3,
  FileText
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { APP_NAME } from '@/config/branding';

interface AdminSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navItems = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'users', label: 'Users', icon: Users },
  { id: 'items', label: 'Items', icon: Package },
  { id: 'matches', label: 'Matches', icon: Handshake },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'roles', label: 'Role Management', icon: Shield },
];

export function AdminSidebar({ activeSection, onSectionChange }: AdminSidebarProps) {
  const navigate = useNavigate();

  return (
    <aside className="hidden lg:flex w-64 flex-col border-r border-border bg-card">
      {/* Header */}
      <div className="flex h-16 items-center gap-3 border-b border-border px-4">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => navigate('/discover')}
          className="shrink-0"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <Shield className="h-4 w-4 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-sm font-semibold">{APP_NAME}</h1>
            <p className="text-xs text-muted-foreground">Admin Panel</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 py-4">
        <nav className="space-y-1 px-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={cn(
                'flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                activeSection === item.id
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="mt-6 px-3">
          <div className="h-px bg-border mb-4" />
          <button
            onClick={() => navigate('/whitepaper')}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          >
            <FileText className="h-4 w-4" />
            Documentation
          </button>
        </div>
      </ScrollArea>

      {/* Footer */}
      <div className="border-t border-border p-4">
        <div className="flex items-center gap-3 rounded-lg bg-muted/50 px-3 py-2">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
            <Shield className="h-4 w-4 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium truncate">Admin Access</p>
            <p className="text-xs text-muted-foreground">Full permissions</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
