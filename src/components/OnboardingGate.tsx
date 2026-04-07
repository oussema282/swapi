import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

interface OnboardingGateProps {
  children: ReactNode;
}

export function OnboardingGate({ children }: OnboardingGateProps) {
  const { user, profile, loading } = useAuth();

  if (loading) {
    return null;
  }

  // Not logged in — don't gate
  if (!user || !profile) {
    return <>{children}</>;
  }

  // Check profile completeness (no item requirement)
  const isProfileComplete = 
    profile.phone_number && 
    (profile as any).birthday && 
    (profile as any).gender &&
    profile.avatar_url;

  if (!isProfileComplete) {
    return <Navigate to="/onboarding" replace />;
  }

  return <>{children}</>;
}
