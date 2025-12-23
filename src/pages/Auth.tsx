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

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('signin');
  const { signIn, signUp, user, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!loading && user) {
      navigate('/');
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
      navigate('/');
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
        description: 'Welcome to SwapIt!',
      });
      navigate('/');
    }

    setIsLoading(false);
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
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 animate-gradient-shift" />
      
      {/* Animated blob shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob opacity-50" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-blob-delay-2 opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-blob-delay-4 opacity-30" />

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
              SwapIt
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
              A smart exchange platform connecting people across Europe
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
                          disabled={isLoading}
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
                          disabled={isLoading}
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
