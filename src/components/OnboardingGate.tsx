import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Loader2 } from 'lucide-react';

interface OnboardingGateProps {
  children: ReactNode;
}

export function OnboardingGate({ children }: OnboardingGateProps) {
  const { user, profile, loading } = useAuth();
  const location = useLocation();

  const { data: itemCount, isLoading: itemsLoading } = useQuery({
    queryKey: ['onboarding-gate-items', user?.id],
    queryFn: async () => {
      if (!user) return 0;
      const { count } = await supabase
        .from('items')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', user.id)
        .eq('is_active', true)
        .eq('is_archived', false);
      return count || 0;
    },
    enabled: !!user,
    staleTime: 30000,
  });

  if (loading || itemsLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  // Not logged in — don't gate
  if (!user || !profile) {
    return <>{children}</>;
  }

  // Check profile completeness
  const isProfileComplete = 
    profile.phone_number && 
    (profile as any).birthday && 
    (profile as any).gender &&
    profile.avatar_url;

  const hasItems = (itemCount || 0) > 0;

  if (!isProfileComplete || !hasItems) {
    return <Navigate to="/onboarding" replace />;
  }

  return <>{children}</>;
}
