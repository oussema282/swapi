import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Loader2, Sparkles, ArrowLeft, Zap, MapPin, Search, Package, MessageSquare } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { FEATURE_UPGRADES, FeatureType } from "@/hooks/useSubscription";
import { useAuth } from "@/hooks/useAuth";

const featureIcons: Record<FeatureType, typeof Zap> = {
  swipes: Zap,
  deal_invites: MessageSquare,
  map: MapPin,
  search: Search,
  items: Package,
};

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [loadingFeature, setLoadingFeature] = useState<string | null>(null);
  
  const featureParam = searchParams.get('feature') as FeatureType | null;

  const handleProCheckout = async () => {
    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('dodo-checkout', {
        method: 'POST',
        body: { origin: window.location.origin }
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

  const handleFeatureUpgrade = async (featureType: FeatureType) => {
    if (!user) {
      toast({
        title: "Login required",
        description: "Please login to purchase upgrades.",
        variant: "destructive"
      });
      return;
    }

    setLoadingFeature(featureType);
    
    try {
      const upgrade = FEATURE_UPGRADES[featureType];
      
      // For now, directly add the bonus (in production, this would go through payment)
      const expiresAt = new Date();
      expiresAt.setMonth(expiresAt.getMonth() + 1);
      
      const { error } = await supabase
        .from('feature_upgrades')
        .upsert({
          user_id: user.id,
          feature_type: featureType,
          bonus_amount: upgrade.bonus,
          expires_at: expiresAt.toISOString(),
        }, { onConflict: 'user_id,feature_type' });

      if (error) throw error;

      toast({
        title: "Upgrade activated!",
        description: `You now have +${upgrade.bonus} extra ${featureType.replace('_', ' ')}!`,
      });
      
      navigate('/discover');
      
    } catch (err) {
      console.error('Feature upgrade error:', err);
      toast({
        title: "Upgrade failed",
        description: "Unable to process upgrade. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoadingFeature(null);
    }
  };

  const proFeatures = [
    "Unlimited swipes per day",
    "Unlimited map views",
    "Unlimited deal invites",
    "Unlimited searches",
    "Unlimited item slots",
    "Verified Pro badge"
  ];

  // Show feature-specific upgrade if param is present
  if (featureParam && FEATURE_UPGRADES[featureParam]) {
    const upgrade = FEATURE_UPGRADES[featureParam];
    const Icon = featureIcons[featureParam];
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-2 border-primary/20 shadow-2xl">
          <CardHeader className="text-center pb-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className="absolute left-4 top-4"
              onClick={() => navigate('/checkout')}
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              All Plans
            </Button>
            <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
              <Icon className="w-8 h-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl font-bold">{upgrade.name}</CardTitle>
            <CardDescription className="text-base">
              Boost your {featureParam.replace('_', ' ')} limit
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold">${upgrade.price}</span>
                <span className="text-muted-foreground">one-time</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Valid for 30 days
              </p>
            </div>

            <div className="bg-muted/30 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-primary">+{upgrade.bonus}</p>
              <p className="text-muted-foreground">extra {featureParam.replace('_', ' ')}</p>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-3">
            <Button 
              className="w-full h-12 text-lg font-semibold"
              onClick={() => handleFeatureUpgrade(featureParam)}
              disabled={!!loadingFeature}
            >
              {loadingFeature === featureParam ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Icon className="w-5 h-5 mr-2" />
                  Buy Now
                </>
              )}
            </Button>
            <Button 
              variant="outline"
              className="w-full"
              onClick={() => navigate('/checkout')}
            >
              <Crown className="w-4 h-4 mr-2" />
              Get Pro Instead (Unlimited Everything)
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  // Main checkout page with all options
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 p-4 py-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back
        </Button>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Choose Your Plan</h1>
          <p className="text-muted-foreground">Upgrade for more swapping power</p>
        </div>

        {/* Pro Plan */}
        <Card className="border-2 border-primary shadow-xl">
          <CardHeader className="text-center pb-2">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Crown className="w-6 h-6 text-primary" />
              <CardTitle className="text-2xl font-bold">Valexo Pro</CardTitle>
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                <Sparkles className="w-3 h-3 mr-1" />
                Best Value
              </Badge>
            </div>
            <CardDescription className="text-base">
              Unlimited everything
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold">$9.99</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {proFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>

          <CardFooter>
            <Button 
              className="w-full h-12 text-lg font-semibold"
              onClick={handleProCheckout}
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
          </CardFooter>
        </Card>

        {/* Individual Feature Upgrades */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-center">Or Buy Individual Upgrades</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(Object.entries(FEATURE_UPGRADES) as [FeatureType, typeof FEATURE_UPGRADES[FeatureType]][]).map(([key, upgrade]) => {
              const Icon = featureIcons[key];
              return (
                <Card key={key} className="border">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{upgrade.name}</p>
                        <p className="text-sm text-muted-foreground">+{upgrade.bonus} extra</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold">${upgrade.price}</span>
                      <Button 
                        size="sm"
                        variant="outline"
                        onClick={() => handleFeatureUpgrade(key)}
                        disabled={loadingFeature === key}
                      >
                        {loadingFeature === key ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          'Buy'
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <p className="text-xs text-center text-muted-foreground">
          Secure payments powered by Dodo Payments. Individual upgrades valid for 30 days.
        </p>
      </div>
    </div>
  );
};

export default Checkout;
