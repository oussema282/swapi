import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Crown, Home, Sparkles } from "lucide-react";
import { Confetti } from "@/components/discover/Confetti";

const CheckoutSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    // Log successful payment for debugging
    console.log('Payment successful, session:', sessionId);
  }, [sessionId]);

  return (
    <div className="min-h-dvh bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4 relative overflow-hidden">
      <Confetti show={true} />
      
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
          
          <p className="text-muted-foreground">
            Your account has been upgraded. Enjoy all the premium features and start swapping more!
          </p>

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
    </div>
  );
};

export default CheckoutSuccess;
