import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { isAppConfigured } from '@/lib/config';

interface SetupGateProps {
  children: ReactNode;
}

/**
 * SetupGate Component
 * 
 * Ensures the app is properly configured before allowing access.
 * Redirects to the setup page if configuration is incomplete.
 */
export function SetupGate({ children }: SetupGateProps) {
  const location = useLocation();
  const configured = isAppConfigured();
  
  // Allow access to setup page regardless of configuration
  if (location.pathname === '/setup') {
    return <>{children}</>;
  }
  
  // Redirect to setup if not configured
  if (!configured) {
    return <Navigate to="/setup" replace />;
  }
  
  return <>{children}</>;
}
