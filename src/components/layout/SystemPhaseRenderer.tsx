import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { useSystemState } from '@/hooks/useSystemState';
import { LocationGate } from '@/components/LocationGate';

interface SystemPhaseRendererProps {
  children: ReactNode;
}

/**
 * SystemPhaseRenderer - The single authority for top-level UI rendering.
 * 
 * This component checks SYSTEM_PHASE and renders:
 * - BOOTSTRAPPING: Loading screen (waiting for auth)
 * - TRANSITION: Loading screen (checking location)
 * - BLOCKED: LocationGate (location permission UI)
 * - ACTIVE: Children (main application content)
 * - BACKGROUND_ONLY: Children (app visible, background jobs only)
 * 
 * NO component below this may bypass SYSTEM_PHASE checks.
 */
export function SystemPhaseRenderer({ children }: SystemPhaseRendererProps) {
  const { state, isBootstrapping } = useSystemState();

  // BOOTSTRAPPING: Show loading screen while auth initializes
  if (isBootstrapping) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
          <p className="text-muted-foreground text-sm">Initializing...</p>
        </motion.div>
      </div>
    );
  }

  // TRANSITION: Show loading screen while checking location
  if (state.phase === 'TRANSITION') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
          <p className="text-muted-foreground text-sm">Getting your location...</p>
        </motion.div>
      </div>
    );
  }

  // BLOCKED: Show LocationGate for permission request/retry
  if (state.phase === 'BLOCKED') {
    return <LocationGate />;
  }

  // ACTIVE or BACKGROUND_ONLY: Render main application content
  return <>{children}</>;
}
