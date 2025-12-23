import { motion } from 'framer-motion';
import { MapPin, Loader2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useDeviceLocation } from '@/hooks/useLocation';

interface LocationGateProps {
  children: React.ReactNode;
}

export function LocationGate({ children }: LocationGateProps) {
  const { hasLocation, loading, error, permissionStatus, requestLocation } = useDeviceLocation();

  // If we have valid location and permission is not denied, render children
  if (hasLocation && permissionStatus !== 'denied') {
    return <>{children}</>;
  }

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

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-destructive/10 border border-destructive/20">
            <div className="flex items-center gap-2 text-destructive mb-1">
              <AlertCircle className="w-4 h-4" />
              <span className="font-medium text-sm">Location Access Denied</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Please enable location in your browser settings and refresh the page.
            </p>
          </div>
        )}

        <Button
          size="lg"
          className="w-full"
          onClick={requestLocation}
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Getting Location...
            </>
          ) : permissionStatus === 'denied' ? (
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
