import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeftRight, Mail, Lock, User, Loader2, Shield, Zap, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';
import { APP_NAME, APP_DESCRIPTION } from '@/config/branding';

// Google Icon component
function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="currentColor"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="currentColor"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="currentColor"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('signin');
  const { signIn, signUp, user, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!loading && user) {
      navigate('/discover');
    }
  }, [user, loading, navigate]);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const { error } = await signIn(email, password);

    if (error) {
      toast({
        variant: 'destructive',
        title: 'Sign in failed',
        description: error.message,
      });
    } else {
      toast({
        title: 'Welcome back!',
        description: 'You have successfully signed in.',
      });
      navigate('/discover');
    }

    setIsLoading(false);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!displayName.trim()) {
      toast({
        variant: 'destructive',
        title: 'Display name required',
        description: 'Please enter a display name.',
      });
      setIsLoading(false);
      return;
    }

    const { error } = await signUp(email, password, displayName);

    if (error) {
      if (error.message.includes('already registered')) {
        toast({
          variant: 'destructive',
          title: 'Account exists',
          description: 'This email is already registered. Please sign in instead.',
        });
      } else {
        toast({
          variant: 'destructive',
          title: 'Sign up failed',
          description: error.message,
        });
      }
    } else {
      toast({
        title: 'Account created!',
        description: `Welcome to ${APP_NAME}!`,
      });
      navigate('/discover');
    }

    setIsLoading(false);
  };

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true);
    try {
      const redirectTo = `${window.location.origin}/discover`;
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo,
        },
      });

      if (error) {
        toast({
          variant: 'destructive',
          title: 'Google sign in failed',
          description: error.message,
        });
        setIsGoogleLoading(false);
      }
      // Don't set loading to false on success - we're redirecting
    } catch (err) {
      console.error('Google sign in error:', err);
      toast({
        variant: 'destructive',
        title: 'Google sign in failed',
        description: 'An unexpected error occurred.',
      });
      setIsGoogleLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated mesh gradient background */}
      <div 
        className="absolute inset-0 animate-auth-gradient"
        style={{
          background: `
            linear-gradient(
              135deg,
              hsl(252 100% 68% / 0.15) 0%,
              hsl(296 75% 66% / 0.12) 25%,
              hsl(338 83% 68% / 0.10) 50%,
              hsl(222 100% 68% / 0.12) 75%,
              hsl(252 100% 68% / 0.15) 100%
            )
          `,
          backgroundSize: '400% 400%',
        }}
      />
      
      {/* Subtle overlay for readability */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-[1px]" />
      
      {/* Soft ambient blobs (very subtle) */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-30 animate-blob-slow" 
        style={{ background: 'hsl(252 100% 68% / 0.4)' }} 
      />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-25 animate-blob-slow-reverse" 
        style={{ background: 'hsl(296 75% 66% / 0.35)' }} 
      />
      <div className="absolute top-[40%] left-[60%] w-[400px] h-[400px] rounded-full blur-[100px] opacity-20 animate-blob-slow-delay" 
        style={{ background: 'hsl(338 83% 68% / 0.3)' }} 
      />

      {/* Content */}
      <div className="relative min-h-screen flex flex-col items-center justify-center p-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full max-w-md"
        >
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-center mb-8"
          >
            {/* Animated Logo */}
            <motion.div
              className="inline-flex items-center justify-center w-24 h-24 rounded-3xl gradient-primary shadow-glow mb-6 animate-float"
            >
              <motion.div
                className="animate-swap-arrows"
              >
                <ArrowLeftRight className="w-12 h-12 text-primary-foreground" />
              </motion.div>
            </motion.div>

            {/* Brand Name */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl font-display font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient-shift bg-clip-text text-transparent mb-3"
            >
              {APP_NAME}
            </motion.h1>

            {/* Headline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg font-medium text-foreground mb-2"
            >
              Trade what you don't need for what you love
            </motion.p>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm text-muted-foreground"
            >
              {APP_DESCRIPTION}
            </motion.p>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="flex justify-center gap-6 mb-6"
          >
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Shield className="w-3.5 h-3.5 text-success" />
              <span>Secure</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Zap className="w-3.5 h-3.5 text-primary" />
              <span>Instant</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Globe className="w-3.5 h-3.5 text-secondary" />
              <span>Europe-wide</span>
            </div>
          </motion.div>

          {/* Auth Card with Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.4, ease: 'easeOut' }}
          >
            <Card className="glass-card border-0 shadow-2xl overflow-hidden">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <CardHeader className="pb-4">
                  <TabsList className="grid w-full grid-cols-2 h-12 p-1 bg-muted/50">
                    <TabsTrigger 
                      value="signin" 
                      className="text-base font-medium data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all duration-300"
                    >
                      Sign In
                    </TabsTrigger>
                    <TabsTrigger 
                      value="signup" 
                      className="text-base font-medium data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all duration-300"
                    >
                      Sign Up
                    </TabsTrigger>
                  </TabsList>
                </CardHeader>

                <CardContent className="pb-6">
                  {/* Google OAuth Button */}
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full h-12 mb-4 font-medium"
                    onClick={handleGoogleSignIn}
                    disabled={isGoogleLoading || isLoading}
                  >
                    {isGoogleLoading ? (
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    ) : (
                      <GoogleIcon className="w-5 h-5 mr-2" />
                    )}
                    Continue with Google
                  </Button>

                  {/* Divider */}
                  <div className="relative mb-4">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-border/50" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-card px-2 text-muted-foreground">or continue with email</span>
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    <TabsContent value="signin" className="mt-0" key="signin">
                      <motion.form
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        onSubmit={handleSignIn}
                        className="space-y-5"
                      >
                        <div className="space-y-2">
                          <Label htmlFor="signin-email" className="text-sm font-medium">Email</Label>
                          <div className="relative group">
                            <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
                            <Input
                              id="signin-email"
                              type="email"
                              placeholder="you@example.com"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="pl-11 h-12 bg-background/50 border-border/50 focus:border-primary transition-all duration-300"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="signin-password" className="text-sm font-medium">Password</Label>
                          <div className="relative group">
                            <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
                            <Input
                              id="signin-password"
                              type="password"
                              placeholder="••••••••"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className="pl-11 h-12 bg-background/50 border-border/50 focus:border-primary transition-all duration-300"
                              required
                            />
                          </div>
                        </div>

                        <Button
                          type="submit"
                          className="w-full h-12 text-base font-semibold gradient-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                          disabled={isLoading || isGoogleLoading}
                        >
                          {isLoading ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              Signing in...
                            </>
                          ) : (
                            'Sign In'
                          )}
                        </Button>
                      </motion.form>
                    </TabsContent>

                    <TabsContent value="signup" className="mt-0" key="signup">
                      <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        onSubmit={handleSignUp}
                        className="space-y-5"
                      >
                        <div className="space-y-2">
                          <Label htmlFor="signup-name" className="text-sm font-medium">Display Name</Label>
                          <div className="relative group">
                            <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
                            <Input
                              id="signup-name"
                              type="text"
                              placeholder="Your name"
                              value={displayName}
                              onChange={(e) => setDisplayName(e.target.value)}
                              className="pl-11 h-12 bg-background/50 border-border/50 focus:border-primary transition-all duration-300"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="signup-email" className="text-sm font-medium">Email</Label>
                          <div className="relative group">
                            <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
                            <Input
                              id="signup-email"
                              type="email"
                              placeholder="you@example.com"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="pl-11 h-12 bg-background/50 border-border/50 focus:border-primary transition-all duration-300"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="signup-password" className="text-sm font-medium">Password</Label>
                          <div className="relative group">
                            <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
                            <Input
                              id="signup-password"
                              type="password"
                              placeholder="••••••••"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className="pl-11 h-12 bg-background/50 border-border/50 focus:border-primary transition-all duration-300"
                              minLength={6}
                              required
                            />
                          </div>
                          <p className="text-xs text-muted-foreground">Minimum 6 characters</p>
                        </div>

                        <Button
                          type="submit"
                          className="w-full h-12 text-base font-semibold gradient-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                          disabled={isLoading || isGoogleLoading}
                        >
                          {isLoading ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              Creating account...
                            </>
                          ) : (
                            'Create Account'
                          )}
                        </Button>
                      </motion.form>
                    </TabsContent>
                  </AnimatePresence>
                </CardContent>
              </Tabs>
            </Card>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-center mt-8 space-y-2"
          >
            <p className="text-xs text-muted-foreground">
              By signing up, you agree to our{' '}
              <span className="text-primary hover:underline cursor-pointer">Terms of Service</span>
              {' '}and{' '}
              <span className="text-primary hover:underline cursor-pointer">Privacy Policy</span>
            </p>
            <p className="text-xs text-muted-foreground/60">
              🇪🇺 Made in Europe · Trusted by 10,000+ traders
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
