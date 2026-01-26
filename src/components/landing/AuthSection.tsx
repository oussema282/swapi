import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Mail, Lock, User, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';
import { APP_NAME } from '@/config/branding';
import { useTranslation } from 'react-i18next';

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

export function AuthSection() {
  const { t } = useTranslation();
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
        title: t('auth.signInFailed'),
        description: error.message,
      });
    } else {
      toast({
        title: t('auth.welcomeBack'),
        description: t('auth.signInSuccess'),
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
        title: t('auth.displayNameRequired'),
        description: t('auth.enterDisplayName'),
      });
      setIsLoading(false);
      return;
    }

    const { error } = await signUp(email, password, displayName);

    if (error) {
      if (error.message.includes('already registered')) {
        toast({
          variant: 'destructive',
          title: t('auth.accountExists'),
          description: t('auth.emailAlreadyRegistered'),
        });
      } else {
        toast({
          variant: 'destructive',
          title: t('auth.signUpFailed'),
          description: error.message,
        });
      }
    } else {
      toast({
        title: t('auth.accountCreated'),
        description: `${t('auth.welcomeTo')} ${APP_NAME}!`,
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
          title: t('auth.googleSignInFailed'),
          description: error.message,
        });
        setIsGoogleLoading(false);
      }
    } catch (err) {
      console.error('Google sign in error:', err);
      toast({
        variant: 'destructive',
        title: t('auth.googleSignInFailed'),
        description: t('auth.unexpectedError'),
      });
      setIsGoogleLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="auth" className="py-20 px-4 bg-muted/30">
        <div className="max-w-md mx-auto flex items-center justify-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </section>
    );
  }

  if (user) {
    return null;
  }

  return (
    <section id="auth" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">{t('auth.getStartedTitle')}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('auth.getStartedDescription')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          <Card className="border-0 shadow-2xl bg-card/80 backdrop-blur-sm">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <CardHeader className="pb-4">
                <TabsList className="grid w-full grid-cols-2 h-12 p-1 bg-muted/50">
                  <TabsTrigger 
                    value="signin" 
                    className="text-base font-medium data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all duration-300"
                  >
                    {t('auth.signIn')}
                  </TabsTrigger>
                  <TabsTrigger 
                    value="signup" 
                    className="text-base font-medium data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all duration-300"
                  >
                    {t('auth.signUp')}
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
                  {t('auth.continueWithGoogle')}
                </Button>

                {/* Divider */}
                <div className="relative mb-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border/50" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">{t('auth.orContinueWithEmail')}</span>
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
                        <Label htmlFor="signin-email" className="text-sm font-medium">{t('auth.email')}</Label>
                        <div className="relative group">
                          <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
                          <Input
                            id="signin-email"
                            type="email"
                            placeholder={t('auth.emailPlaceholder')}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-11 h-12 bg-background/50 border-border/50 focus:border-primary transition-all duration-300"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="signin-password" className="text-sm font-medium">{t('auth.password')}</Label>
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
                        className="w-full h-12 text-base font-semibold"
                        disabled={isLoading || isGoogleLoading}
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            {t('auth.signingIn')}
                          </>
                        ) : (
                          t('auth.signIn')
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
                        <Label htmlFor="signup-name" className="text-sm font-medium">{t('auth.displayName')}</Label>
                        <div className="relative group">
                          <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
                          <Input
                            id="signup-name"
                            type="text"
                            placeholder={t('auth.displayNamePlaceholder')}
                            value={displayName}
                            onChange={(e) => setDisplayName(e.target.value)}
                            className="pl-11 h-12 bg-background/50 border-border/50 focus:border-primary transition-all duration-300"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="signup-email" className="text-sm font-medium">{t('auth.email')}</Label>
                        <div className="relative group">
                          <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
                          <Input
                            id="signup-email"
                            type="email"
                            placeholder={t('auth.emailPlaceholder')}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-11 h-12 bg-background/50 border-border/50 focus:border-primary transition-all duration-300"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="signup-password" className="text-sm font-medium">{t('auth.password')}</Label>
                        <div className="relative group">
                          <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
                          <Input
                            id="signup-password"
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
                        className="w-full h-12 text-base font-semibold"
                        disabled={isLoading || isGoogleLoading}
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            {t('auth.creatingAccount')}
                          </>
                        ) : (
                          t('auth.signUp')
                        )}
                      </Button>
                    </motion.form>
                  </TabsContent>
                </AnimatePresence>
              </CardContent>
            </Tabs>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
