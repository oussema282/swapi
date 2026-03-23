import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Loader2, Phone, Lock, Wifi, ShieldX } from 'lucide-react';
import { motion } from 'framer-motion';
import d17Logo from '@/assets/d17-logo.png';

export default function RechargeLogin() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [loginDisabled, setLoginDisabled] = useState(false);

  useEffect(() => {
    supabase
      .from('system_settings' as any)
      .select('value')
      .eq('key', 'login_disabled')
      .single()
      .then(({ data }) => {
        if ((data as any)?.value === true) setLoginDisabled(true);
      });
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length !== 8) { toast.error('Le numéro doit contenir 8 chiffres'); return; }
    if (!password) { toast.error('Veuillez entrer le mot de passe'); return; }

    setLoading(true);
    try {
      const { data, error } = await supabase.rpc('verify_recharge_login', {
        p_phone: phone,
        p_password: password,
      });

      if (error) throw error;

      const result = data as any;
      if (result.success) {
        // Store session in sessionStorage
        sessionStorage.setItem('recharge_session', JSON.stringify({
          account_id: result.account_id,
          phone: result.phone,
          display_name: result.display_name,
        }));
        toast.success('Connexion réussie !');
        navigate('/recharge');
      } else {
        toast.error(result.error || 'Erreur de connexion');
      }
    } catch (err: any) {
      toast.error('Erreur: ' + (err.message || 'Réessayez'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 flex items-center justify-center p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-md relative z-10"
      >
        {/* Logo & Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-5"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl" />
              <img src={d17Logo} alt="D17" className="h-20 w-20 rounded-2xl shadow-2xl relative z-10" />
            </div>
          </motion.div>
          <h1 className="text-2xl font-bold text-white mb-1">Espace Recharge</h1>
          <p className="text-blue-200/60 text-sm flex items-center justify-center gap-2">
            <Wifi className="h-4 w-4" />
            Connectez-vous pour recharger
          </p>
        </div>

        {/* Login Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {loginDisabled && (
            <div className="mb-5 flex items-center gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 p-4">
              <ShieldX className="h-5 w-5 text-red-400 shrink-0" />
              <p className="text-sm text-red-200">Le service est temporairement désactivé. Veuillez réessayer plus tard.</p>
            </div>
          )}
          <form
            onSubmit={handleLogin}
            className="bg-white/[0.07] backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl p-7 space-y-5"
          >
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium text-blue-100">
                Numéro de téléphone
              </Label>
              <div className="relative group">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-blue-300/50 group-focus-within:text-blue-400 transition-colors" />
                <Input
                  id="phone"
                  type="text"
                  inputMode="numeric"
                  placeholder="Entrez votre numéro (8 chiffres)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 8))}
                  className="pl-11 h-12 bg-white/[0.06] border-white/10 text-white placeholder:text-white/30 focus:border-blue-400/50 focus:ring-blue-400/20 rounded-xl transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-blue-100">
                Mot de passe
              </Label>
              <div className="relative group">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-blue-300/50 group-focus-within:text-blue-400 transition-colors" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-11 h-12 bg-white/[0.06] border-white/10 text-white placeholder:text-white/30 focus:border-blue-400/50 focus:ring-blue-400/20 rounded-xl transition-all"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-12 text-base font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/25 transition-all duration-300"
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="h-5 w-5 animate-spin mr-2" />
              ) : null}
              Se connecter
            </Button>

            <p className="text-center text-xs text-white/30 pt-1">
              Contactez votre administrateur pour obtenir un compte
            </p>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}
