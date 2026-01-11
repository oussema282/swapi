import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminRole } from '@/hooks/useAdminRole';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { AdminHeader } from '@/components/admin/AdminHeader';
import { OverviewSection } from '@/components/admin/sections/OverviewSection';
import { UsersSection } from '@/components/admin/sections/UsersSection';
import { ItemsSection } from '@/components/admin/sections/ItemsSection';
import { MatchesSection } from '@/components/admin/sections/MatchesSection';
import { AnalyticsSection } from '@/components/admin/sections/AnalyticsSection';
import { RolesSection } from '@/components/admin/sections/RolesSection';
import { AlgorithmSection } from '@/components/admin/sections/AlgorithmSection';
import { Loader2, ShieldX } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Admin() {
  const navigate = useNavigate();
  const { isAdmin, loading } = useAdminRole();
  const [activeSection, setActiveSection] = useState('overview');

  // Redirect non-admin users
  useEffect(() => {
    if (!loading && !isAdmin) {
      // Wait a bit to show access denied message
      const timer = setTimeout(() => {
        navigate('/discover');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isAdmin, loading, navigate]);

  if (loading) {
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
      case 'analytics':
        return <AnalyticsSection />;
      case 'algorithm':
        return <AlgorithmSection />;
      case 'roles':
        return <RolesSection />;
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
