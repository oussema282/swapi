import { useCallback } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Loader2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useDeviceLocation } from '@/hooks/useLocation';
import { useSystemState } from '@/hooks/useSystemState';

/**
 * LocationGate - Pure UI for location permission requests.
 * 
 * CRITICAL ARCHITECTURE RULE:
 * This component does NOT decide when it appears.
 * It is rendered ONLY when SYSTEM_PHASE === 'BLOCKED'.
 * The decision is made by SystemPhaseRenderer, not here.
 * 
 * This component's only responsibilities:
 * 1. Display permission request/error UI
 * 2. Handle retry button clicks (triggering state transitions)
 */
export function LocationGate() {
  const { loading, error, requestLocation } = useDeviceLocation();
  const { retryLocation } = useSystemState();

  // Handle retry: transition state FIRST, then request location
  const handleRetry = useCallback(async () => {
    // Transition BLOCKED → TRANSITION
    retryLocation();
    // Request location permission again
    await requestLocation();
  }, [retryLocation, requestLocation]);

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
          Valexo needs your location to show items near you and connect you with local traders.
        </p>

        {error && (
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
          ) : (
            <>
              <MapPin className="w-4 h-4 mr-2" />
              {error ? 'Retry Location Access' : 'Allow Location Access'}
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
