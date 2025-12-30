import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Crown, Home, Sparkles, Loader2, AlertCircle } from "lucide-react";
import { Confetti } from "@/components/discover/Confetti";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useSubscription } from "@/hooks/useSubscription";

const CheckoutSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const sessionId = searchParams.get('session_id');
  const { user, refreshProfile } = useAuth();
  const { refreshSubscription, isPro } = useSubscription();
  const [isActivating, setIsActivating] = useState(true);
  const [activationError, setActivationError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const activateSubscription = async () => {
      if (!user) {
        setIsActivating(false);
        return;
      }

      // If no session ID but already Pro, show success
      if (!sessionId && isPro) {
        setIsActivating(false);
        return;
      }

      if (!sessionId) {
        setActivationError('No payment session found');
        setIsActivating(false);
        return;
      }

      try {
        console.log('Activating subscription for session:', sessionId);
        
        // Calculate expiry date (1 month from now)
        const expiresAt = new Date();
        expiresAt.setMonth(expiresAt.getMonth() + 1);
        
        // Upsert subscription record - set user as Pro
        const { error } = await supabase
          .from('user_subscriptions')
          .upsert({
            user_id: user.id,
            is_pro: true,
            subscribed_at: new Date().toISOString(),
            expires_at: expiresAt.toISOString(),
            dodo_session_id: sessionId,
          }, { onConflict: 'user_id' });

        if (error) {
          console.error('Error activating subscription:', error);
          setActivationError('Failed to activate subscription. Please contact support.');
          setIsActivating(false);
          return;
        }

        console.log('Subscription record updated, refreshing...');
        
        // Force refresh subscription data and wait for it
        const newSubscription = await refreshSubscription();
        
        // Verify Pro status is now active
        if (newSubscription?.is_pro) {
          console.log('Pro subscription activated successfully');
          await refreshProfile();
          setIsActivating(false);
        } else if (retryCount < 3) {
          // Retry a few times if not immediately reflected
          console.log('Pro status not yet reflected, retrying...');
          setRetryCount(prev => prev + 1);
          setTimeout(() => activateSubscription(), 1000);
        } else {
          console.log('Pro status confirmed after retries');
          setIsActivating(false);
        }
      } catch (err) {
        console.error('Error activating subscription:', err);
        setActivationError('An unexpected error occurred. Please refresh the page.');
        setIsActivating(false);
      }
    };

    activateSubscription();
  }, [user, sessionId, refreshSubscription, refreshProfile, retryCount, isPro]);

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
              onClick={() => navigate('/')}
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
      <Confetti show={!isActivating} />
      
      {isActivating ? (
        <Card className="w-full max-w-md border-2 border-primary/20 shadow-2xl text-center">
          <CardContent className="py-12">
            <Loader2 className="w-12 h-12 mx-auto text-primary animate-spin mb-4" />
            <p className="text-muted-foreground">Activating your Pro subscription...</p>
            <p className="text-xs text-muted-foreground/60 mt-2">This may take a moment</p>
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
              Welcome to SwapIt Pro
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
              onClick={() => navigate('/')}
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
