import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { 
  Search, 
  Bell, 
  Menu, 
  LogOut, 
  User, 
  Settings, 
  HelpCircle,
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { AdminSidebar } from './AdminSidebar';
import { LiveIndicator } from './LiveIndicator';

interface AdminHeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const sectionTitles: Record<string, { title: string; description: string }> = {
  overview: { title: 'Dashboard', description: 'Platform overview and metrics' },
  users: { title: 'User Management', description: 'Manage user accounts and permissions' },
  items: { title: 'Item Management', description: 'Review and moderate listings' },
  matches: { title: 'Match Management', description: 'Monitor swaps and transactions' },
  reports: { title: 'Reports', description: 'Review and resolve user reports' },
  moderation: { title: 'AI Moderation', description: 'Content safety and fraud detection' },
  subscriptions: { title: 'Subscriptions', description: 'Manage Pro subscribers and revenue' },
  analytics: { title: 'Analytics', description: 'Performance metrics and insights' },
  algorithm: { title: 'Algorithm', description: 'Matching algorithm policy management' },
  roles: { title: 'Role Management', description: 'Configure admin access' },
  system: { title: 'System Health', description: 'Monitor backend services and database' },
};

export function AdminHeader({ activeSection, onSectionChange }: AdminHeaderProps) {
  const { user, profile, signOut } = useAuth();
  const navigate = useNavigate();
  const currentSection = sectionTitles[activeSection] || sectionTitles.overview;

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b border-border bg-background/80 backdrop-blur-xl px-4 lg:px-6">
      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-72">
          <AdminSidebar 
            activeSection={activeSection} 
            onSectionChange={onSectionChange} 
          />
        </SheetContent>
      </Sheet>

      {/* Section Title - Desktop */}
      <div className="hidden lg:block">
        <h1 className="text-lg font-bold">{currentSection.title}</h1>
        <p className="text-xs text-muted-foreground">{currentSection.description}</p>
      </div>

      {/* Search */}
      <div className="flex-1 max-w-md ml-auto lg:ml-0">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search users, items, matches..."
            className="pl-9 bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-primary/50"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* Live Indicator */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50">
          <LiveIndicator />
        </div>

        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <Badge 
                className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-[10px]"
                variant="destructive"
              >
                3
              </Badge>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel className="flex items-center justify-between">
              Notifications
              <Badge variant="secondary" className="text-xs">3 new</Badge>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-80 overflow-auto">
              <DropdownMenuItem className="flex flex-col items-start gap-1 py-3">
                <p className="text-sm font-medium">New user signup</p>
                <p className="text-xs text-muted-foreground">A new user just joined the platform</p>
                <p className="text-xs text-muted-foreground">2 minutes ago</p>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start gap-1 py-3">
                <p className="text-sm font-medium">Match completed</p>
                <p className="text-xs text-muted-foreground">A swap was successfully completed</p>
                <p className="text-xs text-muted-foreground">15 minutes ago</p>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start gap-1 py-3">
                <p className="text-sm font-medium">New Pro subscriber</p>
                <p className="text-xs text-muted-foreground">User upgraded to Pro plan</p>
                <p className="text-xs text-muted-foreground">1 hour ago</p>
              </DropdownMenuItem>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-center text-primary">
              View all notifications
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="gap-2 px-2 hover:bg-muted/50">
              <Avatar className="h-8 w-8 ring-2 ring-primary/20">
                <AvatarImage src={profile?.avatar_url || undefined} />
                <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                  {profile?.display_name?.charAt(0).toUpperCase() || 'A'}
                </AvatarFallback>
              </Avatar>
              <div className="hidden sm:block text-left">
                <p className="text-sm font-medium leading-none">
                  {profile?.display_name || 'Admin'}
                </p>
                <p className="text-[10px] text-muted-foreground mt-0.5">
                  Administrator
                </p>
              </div>
              <ChevronDown className="h-4 w-4 text-muted-foreground hidden sm:block" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium">{profile?.display_name}</p>
                <p className="text-xs text-muted-foreground">{user?.email}</p>
                <Badge variant="secondary" className="w-fit mt-1 text-[10px]">
                  <Sparkles className="h-3 w-3 mr-1" />
                  Admin
                </Badge>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => navigate('/profile')}>
              <User className="mr-2 h-4 w-4" />
              View Profile
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate('/discover')}>
              <Settings className="mr-2 h-4 w-4" />
              Go to App
            </DropdownMenuItem>
            <DropdownMenuItem>
              <HelpCircle className="mr-2 h-4 w-4" />
              Help & Support
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleSignOut} className="text-destructive focus:text-destructive">
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
