import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminRole } from '@/hooks/useAdminRole';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { AdminHeader } from '@/components/admin/AdminHeader';
import { OverviewSection } from '@/components/admin/sections/OverviewSection';
import { UsersSection } from '@/components/admin/sections/UsersSection';
import { ItemsSection } from '@/components/admin/sections/ItemsSection';
import { MatchesSection } from '@/components/admin/sections/MatchesSection';
import { AnalyticsSection } from '@/components/admin/sections/AnalyticsSection';
import { RolesSection } from '@/components/admin/sections/RolesSection';
import { ReportsSection } from '@/components/admin/sections/ReportsSection';
import { ModerationSection } from '@/components/admin/sections/ModerationSection';
import { AlgorithmSection } from '@/components/admin/sections/AlgorithmSection';
import { SubscriptionsSection } from '@/components/admin/sections/SubscriptionsSection';
import { SystemSection } from '@/components/admin/sections/SystemSection';
import { RechargesSection } from '@/components/admin/sections/RechargesSection';
import { Loader2, ShieldX, Lock, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

function AdminLoginForm() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const { error } = await signIn(email, password);
    if (error) {
      toast.error(error.message || 'Identifiants incorrects');
      setIsLoading(false);
      return;
    }
    // After sign-in, check if the user is actually an admin
    const { data: userData } = await supabase.auth.getUser();
    if (userData?.user) {
      const { data: isAdminResult } = await supabase.rpc('is_admin', { _user_id: userData.user.id });
      if (!isAdminResult) {
        // Not an admin — sign them out immediately
        await supabase.auth.signOut();
        toast.error('Ce compte n\'est pas un compte administrateur');
        setIsLoading(false);
        return;
      }
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
            <Lock className="h-7 w-7 text-primary" />
          </div>
          <h1 className="text-2xl font-bold">Admin Login</h1>
          <p className="text-sm text-muted-foreground">
            Connectez-vous avec un compte administrateur
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="admin-email">Email</Label>
            <Input
              id="admin-email"
              type="email"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="admin-password">Mot de passe</Label>
            <div className="relative">
              <Input
                id="admin-password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
            Se connecter
          </Button>
        </form>
      </div>
    </div>
  );
}

export default function Admin() {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const { isAdmin, loading } = useAdminRole();
  const [activeSection, setActiveSection] = useState('overview');

  // Redirect non-admin users
  useEffect(() => {
    if (!loading && !authLoading && user && !isAdmin) {
      const timer = setTimeout(() => {
        navigate('/discover');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isAdmin, loading, authLoading, user, navigate]);

  // Show login form if not authenticated
  if (!authLoading && !user) {
    return <AdminLoginForm />;
  }

  if (loading || authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-muted-foreground">Verifying admin access...</p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4 text-center px-4">
          <div className="h-16 w-16 rounded-full bg-destructive/10 flex items-center justify-center">
            <ShieldX className="h-8 w-8 text-destructive" />
          </div>
          <h1 className="text-2xl font-bold">Access Denied</h1>
          <p className="text-muted-foreground max-w-md">
            You don't have permission to access the admin dashboard. 
            You'll be redirected to the app shortly.
          </p>
          <Button variant="outline" onClick={() => navigate('/discover')}>
            Go to App
          </Button>
        </div>
      </div>
    );
  }

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return <OverviewSection />;
      case 'users':
        return <UsersSection />;
      case 'items':
        return <ItemsSection />;
      case 'matches':
        return <MatchesSection />;
      case 'moderation':
        return <ModerationSection />;
      case 'subscriptions':
        return <SubscriptionsSection />;
      case 'analytics':
        return <AnalyticsSection />;
      case 'algorithm':
        return <AlgorithmSection />;
      case 'roles':
        return <RolesSection />;
      case 'reports':
        return <ReportsSection />;
      case 'system':
        return <SystemSection />;
      case 'recharges':
        return <RechargesSection />;
      default:
        return <OverviewSection />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <AdminSidebar 
            activeSection={activeSection} 
            onSectionChange={setActiveSection} 
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0">
          <AdminHeader 
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />
          
          <main className="flex-1 overflow-auto p-4 lg:p-6">
            {renderSection()}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
