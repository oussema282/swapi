import { useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Loader2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useDeviceLocation } from '@/hooks/useLocation';
import { useSystemState } from '@/hooks/useSystemState';

interface LocationGateProps {
  children: React.ReactNode;
}

export function LocationGate({ children }: LocationGateProps) {
  const { 
    hasLocation, 
    loading, 
    error, 
    permissionStatus, 
    requestLocation 
  } = useDeviceLocation();
  
  const { 
    state, 
    isBootstrapping, 
    isBlocked,
    checkingLocation,
    locationGranted,
    locationDenied,
    retryLocation,
  } = useSystemState();

  // Determine if we're still in the initial bootstrapping (auth not ready)
  const isAuthBootstrapping = state.phase === 'BOOTSTRAPPING' && !state.authReady;
  
  // Determine if auth is ready but we need location check
  const needsLocationCheck = state.authReady && (state.phase === 'BOOTSTRAPPING' || isBlocked);

  // Sync location state with system state machine
  useEffect(() => {
    // Wait for auth to complete first
    if (!state.authReady) return;

    // If we have location and permission is granted, transition to ACTIVE
    if (hasLocation && permissionStatus === 'granted') {
      if (state.phase !== 'ACTIVE') {
        locationGranted();
      }
      return;
    }

    // If permission is denied, transition to BLOCKED
    if (permissionStatus === 'denied' && !isBlocked) {
      locationDenied();
      return;
    }

    // If loading, set to TRANSITION
    if (loading && state.phase !== 'TRANSITION') {
      checkingLocation();
    }
  }, [
    hasLocation, 
    permissionStatus, 
    loading, 
    state.authReady,
    state.phase,
    isBlocked, 
    locationGranted, 
    locationDenied, 
    checkingLocation
  ]);

  // Handle retry with proper state transitions
  const handleRetry = useCallback(async () => {
    // Transition to TRANSITION state before requesting location
    retryLocation();
    // Request location after state transition
    await requestLocation();
  }, [retryLocation, requestLocation]);

  // During initial BOOTSTRAPPING (auth not ready), show loading
  if (isAuthBootstrapping) {
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

  // If we have valid location and system is ACTIVE, render children
  if (hasLocation && permissionStatus !== 'denied' && state.phase === 'ACTIVE') {
    return <>{children}</>;
  }

  // If system is in TRANSITION (checking location), show loading
  if (state.phase === 'TRANSITION' && loading) {
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

  // Show location permission request UI (BLOCKED state, BOOTSTRAPPING with auth ready, or initial prompt)
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-sm w-full text-center"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
          className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center"
        >
          <MapPin className="w-12 h-12 text-primary" />
        </motion.div>

        <h1 className="text-2xl font-display font-bold text-foreground mb-3">
          Enable Location
        </h1>
        
        <p className="text-muted-foreground mb-6">
          SwapSpot needs your location to show items near you and connect you with local swappers.
        </p>

        {error && isBlocked && (
          <div className="mb-6 p-4 rounded-xl bg-destructive/10 border border-destructive/20">
            <div className="flex items-center gap-2 text-destructive mb-1">
              <AlertCircle className="w-4 h-4" />
              <span className="font-medium text-sm">Location Access Denied</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Please enable location in your browser settings and try again.
            </p>
          </div>
        )}

        <Button
          size="lg"
          className="w-full"
          onClick={handleRetry}
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Getting Location...
            </>
          ) : isBlocked ? (
            <>
              <MapPin className="w-4 h-4 mr-2" />
              Retry Location Access
            </>
          ) : (
            <>
              <MapPin className="w-4 h-4 mr-2" />
              Allow Location Access
            </>
          )}
        </Button>

        <p className="text-xs text-muted-foreground mt-4">
          Your location is only used to find nearby items and is never shared publicly.
        </p>
      </motion.div>
    </div>
  );
}
