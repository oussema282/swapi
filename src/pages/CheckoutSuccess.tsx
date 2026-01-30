import { useEffect, useState, useCallback } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Crown, Home, Sparkles, Loader2, AlertCircle } from "lucide-react";
import { Confetti } from "@/components/discover/Confetti";
import { useAuth } from "@/hooks/useAuth";
import { useEntitlements } from "@/hooks/useEntitlements";
import { useSystemState } from "@/hooks/useSystemState";

const MAX_POLL_ATTEMPTS = 30; // Poll for up to 30 seconds
const POLL_INTERVAL = 1000; // Poll every 1 second

const CheckoutSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const sessionId = searchParams.get('session_id');
  const { user, refreshProfile } = useAuth();
  const { refreshEntitlements, isPro } = useEntitlements();
  const { startUpgrade, completeUpgrade, failUpgrade } = useSystemState();
  const [isPolling, setIsPolling] = useState(true);
  const [pollAttempts, setPollAttempts] = useState(0);
  const [activationError, setActivationError] = useState<string | null>(null);

  // Poll for subscription status (webhook-activated)
  const pollSubscriptionStatus = useCallback(async (): Promise<boolean> => {
    try {
      const subscription = await refreshEntitlements();
      if (subscription?.is_pro) {
        console.log('Pro subscription detected');
        return true;
      }
      return false;
    } catch (err) {
      console.error('Error polling subscription:', err);
      return false;
    }
  }, [refreshEntitlements]);

  useEffect(() => {
    if (!user) {
      setIsPolling(false);
      return;
    }

    // If already Pro, show success immediately
    if (isPro) {
      setIsPolling(false);
      return;
    }

    // Signal that upgrade is in progress
    startUpgrade();

    // Start polling for webhook-activated subscription
    const pollInterval = setInterval(async () => {
      setPollAttempts(prev => prev + 1);
      
      const isActive = await pollSubscriptionStatus();
      
      if (isActive) {
        clearInterval(pollInterval);
        completeUpgrade(true);
        await refreshProfile();
        setIsPolling(false);
      } else if (pollAttempts >= MAX_POLL_ATTEMPTS) {
        clearInterval(pollInterval);
        setIsPolling(false);
        setActivationError(
          'Subscription activation is taking longer than expected. ' +
          'Please refresh the page or contact support if the issue persists. ' +
          'Your payment was successful and your subscription will be activated shortly.'
        );
        failUpgrade();
      }
    }, POLL_INTERVAL);

    console.log('Started polling for subscription activation, session:', sessionId);

    return () => clearInterval(pollInterval);
  }, [user, sessionId, pollSubscriptionStatus, refreshProfile, pollAttempts, isPro, startUpgrade, completeUpgrade, failUpgrade]);

  // Show error state
  if (activationError) {
    return (
      <div className="min-h-dvh w-full bg-gradient-to-br from-background via-background to-destructive/5 flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-2 border-destructive/20 shadow-2xl text-center">
          <CardHeader className="pb-2">
            <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-gradient-to-br from-destructive/60 to-destructive flex items-center justify-center">
              <AlertCircle className="w-10 h-10 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-destructive">
              Activation Issue
            </CardTitle>
            <CardDescription className="text-base">
              {activationError}
            </CardDescription>
          </CardHeader>
          
          <CardFooter className="flex flex-col gap-3">
            <Button 
              className="w-full"
              onClick={() => window.location.reload()}
            >
              Retry
            </Button>
            <Button 
              variant="outline"
              className="w-full"
              onClick={() => navigate('/discover')}
            >
              Go Home
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-dvh w-full bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4 relative overflow-hidden">
      <Confetti show={!isPolling} />
      
      {isPolling ? (
        <Card className="w-full max-w-md border-2 border-primary/20 shadow-2xl text-center">
          <CardContent className="py-12">
            <Loader2 className="w-12 h-12 mx-auto text-primary animate-spin mb-4" />
            <p className="text-muted-foreground">Confirming your Pro subscription...</p>
            <p className="text-xs text-muted-foreground/60 mt-2">
              Verifying payment... ({Math.min(pollAttempts, MAX_POLL_ATTEMPTS)}/{MAX_POLL_ATTEMPTS})
            </p>
          </CardContent>
        </Card>
      ) : (
        <Card className="w-full max-w-md border-2 border-primary/20 shadow-2xl text-center">
          <CardHeader className="pb-2">
            <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center animate-pulse">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-green-600">
              Payment Successful!
            </CardTitle>
            <CardDescription className="text-base">
              Welcome to Valexo Pro
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="flex items-center justify-center gap-2 py-4">
              <Crown className="w-6 h-6 text-primary" />
              <span className="text-lg font-semibold">Pro Member</span>
              <Sparkles className="w-5 h-5 text-yellow-500" />
            </div>
            
            <div className="bg-muted/30 rounded-lg p-4 text-left space-y-2">
              <p className="text-sm font-medium">Your Pro benefits:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>✓ Unlimited swipes</li>
                <li>✓ Unlimited searches</li>
                <li>✓ Unlimited map access</li>
                <li>✓ Unlimited deal invites</li>
                <li>✓ Unlimited items</li>
              </ul>
            </div>

            {sessionId && (
              <p className="text-xs text-muted-foreground bg-muted/50 p-2 rounded-md">
                Transaction ID: {sessionId.slice(0, 20)}...
              </p>
            )}
          </CardContent>

          <CardFooter className="flex flex-col gap-3">
            <Button 
              className="w-full"
              onClick={() => navigate('/discover')}
            >
              <Home className="w-4 h-4 mr-2" />
              Start Swapping
            </Button>
            <Button 
              variant="outline"
              className="w-full"
              onClick={() => navigate('/profile')}
            >
              View Profile
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default CheckoutSuccess;
