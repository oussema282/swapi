import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeftRight, Mail, Lock, User, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
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
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl gradient-primary shadow-glow mb-4"
          >
            <ArrowLeftRight className="w-10 h-10 text-primary-foreground" />
          </motion.div>
          <h1 className="text-4xl font-display font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            SwapIt
          </h1>
          <p className="text-muted-foreground mt-2">Trade items with people nearby</p>
        </motion.div>

        {/* Auth Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
            <Tabs defaultValue="signin" className="w-full">
              <CardHeader className="pb-4">
                <TabsList className="grid w-full grid-cols-2 h-12">
                  <TabsTrigger value="signin" className="text-base">Sign In</TabsTrigger>
                  <TabsTrigger value="signup" className="text-base">Sign Up</TabsTrigger>
                </TabsList>
              </CardHeader>

              <CardContent className="pb-6">
                <TabsContent value="signin" className="mt-0">
                  <form onSubmit={handleSignIn} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="signin-email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                        <Input
                          id="signin-email"
                          type="email"
                          placeholder="you@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-11 h-12"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signin-password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                        <Input
                          id="signin-password"
                          type="password"
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="pl-11 h-12"
                          required
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 text-base gradient-primary text-primary-foreground shadow-lg hover:shadow-xl transition-shadow"
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
                  </form>
                </TabsContent>

                <TabsContent value="signup" className="mt-0">
                  <form onSubmit={handleSignUp} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="signup-name">Display Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                        <Input
                          id="signup-name"
                          type="text"
                          placeholder="Your name"
                          value={displayName}
                          onChange={(e) => setDisplayName(e.target.value)}
                          className="pl-11 h-12"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                        <Input
                          id="signup-email"
                          type="email"
                          placeholder="you@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-11 h-12"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                        <Input
                          id="signup-password"
                          type="password"
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="pl-11 h-12"
                          minLength={6}
                          required
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">Minimum 6 characters</p>
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 text-base gradient-primary text-primary-foreground shadow-lg hover:shadow-xl transition-shadow"
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
                  </form>
                </TabsContent>
              </CardContent>
            </Tabs>
          </Card>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center text-xs text-muted-foreground mt-6"
        >
          By signing up, you agree to our Terms of Service
        </motion.p>
      </motion.div>
    </div>
  );
}
