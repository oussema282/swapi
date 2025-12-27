import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { 
  Database, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  ChevronRight, 
  ChevronLeft,
  Palette,
  Settings2,
  Rocket,
  Shield
} from 'lucide-react';
import { saveConfig, loadConfig, isAppConfigured, type AppConfig } from '@/lib/config';

type SetupStep = 'welcome' | 'database' | 'features' | 'branding' | 'complete';

interface ValidationResult {
  valid: boolean;
  error?: string;
}

export default function Setup() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<SetupStep>('welcome');
  const [isValidating, setIsValidating] = useState(false);
  const [config, setConfig] = useState<Partial<AppConfig>>(() => {
    const existing = loadConfig();
    return {
      appName: existing.appName || 'SwapMarket',
      supabase: existing.supabase || { url: '', anonKey: '', projectId: '' },
      features: existing.features || {
        chat: true,
        ratings: true,
        recommendations: true,
        geoFiltering: true,
        mapView: true,
        subscriptions: true,
      },
      freeLimits: existing.freeLimits || {
        swipesPerDay: 50,
        searchesPerDay: 3,
        dealInvitesPerDay: 3,
        mapUsesPerDay: 3,
        maxItems: 4,
      },
    };
  });

  // Check if already configured
  useEffect(() => {
    if (isAppConfigured()) {
      navigate('/', { replace: true });
    }
  }, [navigate]);

  const steps: { id: SetupStep; title: string; icon: React.ReactNode }[] = [
    { id: 'welcome', title: 'Welcome', icon: <Rocket className="w-5 h-5" /> },
    { id: 'database', title: 'Database', icon: <Database className="w-5 h-5" /> },
    { id: 'features', title: 'Features', icon: <Settings2 className="w-5 h-5" /> },
    { id: 'branding', title: 'Branding', icon: <Palette className="w-5 h-5" /> },
    { id: 'complete', title: 'Complete', icon: <CheckCircle2 className="w-5 h-5" /> },
  ];

  const currentStepIndex = steps.findIndex(s => s.id === currentStep);

  const validateSupabaseConnection = async (): Promise<ValidationResult> => {
    const { url, anonKey } = config.supabase || {};
    
    if (!url || !anonKey) {
      return { valid: false, error: 'Please enter both URL and API key' };
    }
    
    // Basic URL validation
    if (!url.includes('supabase.co') && !url.includes('supabase.io')) {
      return { valid: false, error: 'Invalid Supabase URL format' };
    }
    
    try {
      // Test the connection by making a simple request
      const response = await fetch(`${url}/rest/v1/`, {
        headers: {
          'apikey': anonKey,
          'Authorization': `Bearer ${anonKey}`,
        },
      });
      
      if (!response.ok) {
        return { valid: false, error: 'Failed to connect. Check your credentials.' };
      }
      
      return { valid: true };
    } catch (error) {
      return { valid: false, error: 'Connection failed. Check your URL.' };
    }
  };

  const handleNext = async () => {
    if (currentStep === 'database') {
      setIsValidating(true);
      const result = await validateSupabaseConnection();
      setIsValidating(false);
      
      if (!result.valid) {
        toast.error(result.error || 'Validation failed');
        return;
      }
      
      toast.success('Database connection verified!');
    }
    
    const nextIndex = currentStepIndex + 1;
    if (nextIndex < steps.length) {
      setCurrentStep(steps[nextIndex].id);
    }
  };

  const handleBack = () => {
    const prevIndex = currentStepIndex - 1;
    if (prevIndex >= 0) {
      setCurrentStep(steps[prevIndex].id);
    }
  };

  const handleComplete = () => {
    // Save the final config
    saveConfig({
      ...config,
      isConfigured: true,
    });
    
    toast.success('Setup complete! Redirecting...');
    
    // Reload to apply new config
    setTimeout(() => {
      window.location.href = '/';
    }, 1000);
  };

  const updateConfig = (updates: Partial<AppConfig>) => {
    setConfig(prev => ({ ...prev, ...updates }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Progress Steps */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    index < currentStepIndex
                      ? 'bg-primary text-primary-foreground'
                      : index === currentStepIndex
                      ? 'bg-primary text-primary-foreground ring-4 ring-primary/30'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {index < currentStepIndex ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : (
                    step.icon
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-12 h-1 mx-1 rounded transition-all ${
                      index < currentStepIndex ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="border-2">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-display">
                  {steps[currentStepIndex].title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Welcome Step */}
                {currentStep === 'welcome' && (
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Rocket className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">Welcome to Setup</h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Let's get your marketplace up and running. This wizard will guide you 
                      through connecting your database and configuring your app.
                    </p>
                    <div className="flex justify-center gap-2 pt-4">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Shield className="w-3 h-3" /> Secure
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Database className="w-3 h-3" /> Supabase
                      </Badge>
                    </div>
                  </div>
                )}

                {/* Database Step */}
                {currentStep === 'database' && (
                  <div className="space-y-6">
                    <CardDescription className="text-center">
                      Connect your Supabase project to enable data storage and authentication.
                    </CardDescription>
                    
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="supabase-url">Supabase Project URL</Label>
                        <Input
                          id="supabase-url"
                          placeholder="https://your-project.supabase.co"
                          value={config.supabase?.url || ''}
                          onChange={(e) => updateConfig({
                            supabase: { ...config.supabase!, url: e.target.value }
                          })}
                        />
                        <p className="text-xs text-muted-foreground">
                          Found in your Supabase project settings under API
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="anon-key">Anon/Public Key</Label>
                        <Input
                          id="anon-key"
                          type="password"
                          placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                          value={config.supabase?.anonKey || ''}
                          onChange={(e) => updateConfig({
                            supabase: { ...config.supabase!, anonKey: e.target.value }
                          })}
                        />
                        <p className="text-xs text-muted-foreground">
                          The anon key is safe to use in browsers
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Features Step */}
                {currentStep === 'features' && (
                  <div className="space-y-6">
                    <CardDescription className="text-center">
                      Enable or disable features based on your needs.
                    </CardDescription>
                    
                    <div className="space-y-4">
                      {Object.entries(config.features || {}).map(([key, enabled]) => (
                        <div key={key} className="flex items-center justify-between py-2">
                          <div>
                            <p className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
                            <p className="text-sm text-muted-foreground">
                              {getFeatureDescription(key)}
                            </p>
                          </div>
                          <Switch
                            checked={enabled as boolean}
                            onCheckedChange={(checked) => updateConfig({
                              features: { ...config.features!, [key]: checked }
                            })}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Branding Step */}
                {currentStep === 'branding' && (
                  <div className="space-y-6">
                    <CardDescription className="text-center">
                      Customize your marketplace's appearance.
                    </CardDescription>
                    
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="app-name">App Name</Label>
                        <Input
                          id="app-name"
                          placeholder="SwapMarket"
                          value={config.appName || ''}
                          onChange={(e) => updateConfig({ appName: e.target.value })}
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Free User Swipes/Day</Label>
                          <Input
                            type="number"
                            value={config.freeLimits?.swipesPerDay || 50}
                            onChange={(e) => updateConfig({
                              freeLimits: { ...config.freeLimits!, swipesPerDay: parseInt(e.target.value) || 50 }
                            })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Max Free Items</Label>
                          <Input
                            type="number"
                            value={config.freeLimits?.maxItems || 4}
                            onChange={(e) => updateConfig({
                              freeLimits: { ...config.freeLimits!, maxItems: parseInt(e.target.value) || 4 }
                            })}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Complete Step */}
                {currentStep === 'complete' && (
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto rounded-full bg-success/20 flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10 text-success" />
                    </div>
                    <h3 className="text-xl font-semibold">You're all set!</h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Your marketplace is ready to launch. Click the button below to 
                      save your configuration and start using the app.
                    </p>
                    
                    <div className="bg-muted/50 rounded-lg p-4 text-left space-y-2 max-w-sm mx-auto">
                      <p className="text-sm"><strong>App Name:</strong> {config.appName}</p>
                      <p className="text-sm"><strong>Database:</strong> Connected ✓</p>
                      <p className="text-sm"><strong>Features:</strong> {
                        Object.values(config.features || {}).filter(Boolean).length
                      } enabled</p>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6">
                  <Button
                    variant="outline"
                    onClick={handleBack}
                    disabled={currentStepIndex === 0}
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Back
                  </Button>
                  
                  {currentStep === 'complete' ? (
                    <Button onClick={handleComplete} className="gradient-primary">
                      Launch App
                      <Rocket className="w-4 h-4 ml-1" />
                    </Button>
                  ) : (
                    <Button onClick={handleNext} disabled={isValidating}>
                      {isValidating ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-1 animate-spin" />
                          Validating...
                        </>
                      ) : (
                        <>
                          Next
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function getFeatureDescription(key: string): string {
  const descriptions: Record<string, string> = {
    chat: 'Real-time messaging between matched users',
    ratings: 'Community-driven item ratings and reviews',
    recommendations: 'AI-powered item recommendations',
    geoFiltering: 'Filter items by distance and location',
    mapView: 'Interactive map to browse nearby items',
    subscriptions: 'Premium subscription tiers with extended limits',
  };
  return descriptions[key] || '';
}
