import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Loader2, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const Checkout = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('dodo-checkout', {
        method: 'POST'
      });

      if (error) {
        console.error('Checkout error:', error);
        toast({
          title: "Checkout failed",
          description: "Unable to start checkout. Please try again.",
          variant: "destructive"
        });
        return;
      }

      if (!data?.checkout_url) {
        toast({
          title: "Checkout failed",
          description: "No checkout URL received.",
          variant: "destructive"
        });
        return;
      }

      // Redirect to Dodo Payments checkout
      window.location.href = data.checkout_url;
      
    } catch (err) {
      console.error('Checkout error:', err);
      toast({
        title: "Checkout failed",
        description: "An unexpected error occurred.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    "Unlimited swaps per month",
    "Priority matching algorithm",
    "Verified Pro badge",
    "Advanced search filters",
    "No ads experience",
    "Priority customer support"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-2 border-primary/20 shadow-2xl">
        <CardHeader className="text-center pb-2">
          <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
            <Crown className="w-8 h-8 text-primary-foreground" />
          </div>
          <div className="flex items-center justify-center gap-2 mb-2">
            <CardTitle className="text-2xl font-bold">SwapIt Pro</CardTitle>
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              <Sparkles className="w-3 h-3 mr-1" />
              Popular
            </Badge>
          </div>
          <CardDescription className="text-base">
            Unlock premium features and swap more
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-4xl font-bold">$9.99</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Cancel anytime
            </p>
          </div>

          <div className="space-y-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-3">
          <Button 
            className="w-full h-12 text-lg font-semibold"
            onClick={handleCheckout}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Crown className="w-5 h-5 mr-2" />
                Upgrade to Pro
              </>
            )}
          </Button>
          <p className="text-xs text-center text-muted-foreground">
            Secure payment powered by Dodo Payments
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Checkout;
