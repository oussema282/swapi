import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { 
  LayoutDashboard, 
  Users, 
  Package, 
  Handshake, 
  Settings, 
  Shield,
  ArrowLeft,
  BarChart3,
  FileText,
  Sparkles,
  ChevronRight,
  Brain
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { APP_NAME } from '@/config/branding';
import { LiveIndicator } from './LiveIndicator';

interface AdminSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navItems = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard, badge: null },
  { id: 'users', label: 'Users', icon: Users, badge: null },
  { id: 'items', label: 'Items', icon: Package, badge: null },
  { id: 'matches', label: 'Matches', icon: Handshake, badge: null },
  { id: 'analytics', label: 'Analytics', icon: BarChart3, badge: null },
  { id: 'algorithm', label: 'Algorithm', icon: Brain, badge: 'New' },
  { id: 'roles', label: 'Role Management', icon: Shield, badge: null },
];

export function AdminSidebar({ activeSection, onSectionChange }: AdminSidebarProps) {
  const navigate = useNavigate();

  return (
    <aside className="hidden lg:flex w-72 flex-col border-r border-border bg-gradient-to-b from-card to-background">
      {/* Header */}
      <div className="flex h-16 items-center gap-3 border-b border-border px-4">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => navigate('/discover')}
          className="shrink-0 hover:bg-primary/10"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div className="flex items-center gap-3 flex-1">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/20">
            <Sparkles className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-tight">{APP_NAME}</h1>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Admin Console</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 py-4">
        <div className="px-3 mb-2">
          <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-2">
            Main Menu
          </p>
        </div>
        <nav className="space-y-1 px-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={cn(
                'flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200',
                activeSection === item.id
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
            >
              <item.icon className="h-4 w-4" />
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && (
                <Badge variant="secondary" className="bg-primary/10 text-primary text-[10px] px-1.5">
                  {item.badge}
                </Badge>
              )}
              {activeSection === item.id && (
                <ChevronRight className="h-4 w-4 opacity-60" />
              )}
            </button>
          ))}
        </nav>

        <div className="mt-6 px-3">
          <div className="h-px bg-border mb-4" />
          <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-2">
            Resources
          </p>
          <button
            onClick={() => navigate('/whitepaper')}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-all duration-200"
          >
            <FileText className="h-4 w-4" />
            Documentation
          </button>
        </div>
      </ScrollArea>

      {/* Footer */}
      <div className="border-t border-border p-4">
        <div className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-primary/5 to-primary/10 px-4 py-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center ring-2 ring-primary/20">
            <Shield className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold">Admin Access</p>
            <p className="text-xs text-muted-foreground flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              Full permissions
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
