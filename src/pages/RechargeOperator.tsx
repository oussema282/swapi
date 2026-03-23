import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wallet, LogOut, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import d17Logo from '@/assets/d17-logo.png';
import ooredooLogo from '@/assets/recharge/ooredoo-logo.png';
import ttLogo from '@/assets/recharge/tt-logo.png';
import orangeLogo from '@/assets/recharge/orange-logo.png';

function getRechargeSession() {
  try {
    const s = sessionStorage.getItem('recharge_session');
    return s ? JSON.parse(s) : null;
  } catch { return null; }
}

const OPERATORS = [
  { id: 'ooredoo', name: 'Ooredoo', logo: ooredooLogo, color: 'from-red-500/20 to-red-600/10', border: 'border-red-500/40', activeBg: 'bg-red-500/20' },
  { id: 'tt', name: 'Tunisie Telecom', logo: ttLogo, color: 'from-blue-500/20 to-blue-600/10', border: 'border-blue-500/40', activeBg: 'bg-blue-500/20' },
  { id: 'orange', name: 'Orange', logo: orangeLogo, color: 'from-orange-500/20 to-orange-600/10', border: 'border-orange-500/40', activeBg: 'bg-orange-500/20' },
];

export default function RechargeOperator() {
  const navigate = useNavigate();
  const [session, setSession] = useState<any>(null);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    const s = getRechargeSession();
    if (!s) {
      navigate('/recharge/login');
      return;
    }
    setSession(s);
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem('recharge_session');
    navigate('/recharge/login');
  };

  const handleContinue = () => {
    if (!selected) return;
    sessionStorage.setItem('recharge_operator', selected);
    navigate('/recharge/form');
  };

  if (!session) return null;

  const balance = session.balance ?? 0;
  const isZeroBalance = balance <= 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 flex items-center justify-center p-4">
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
        {/* Header */}
        <div className="text-center mb-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-4"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl" />
              <img src={d17Logo} alt="D17" className="h-16 w-16 rounded-2xl shadow-2xl relative z-10" />
            </div>
          </motion.div>
          <h1 className="text-2xl font-bold text-white mb-1">Choisir l'opérateur</h1>
          <p className="text-blue-200/60 text-sm">Sélectionnez votre opérateur mobile</p>

          {/* User info & Logout */}
          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="text-xs text-blue-300/60 bg-white/[0.06] px-3 py-1 rounded-full">
              {session.display_name || session.phone}
            </span>
            <button onClick={handleLogout} className="text-blue-300/40 hover:text-red-400 transition-colors">
              <LogOut className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Wallet Balance Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className={`mb-5 rounded-2xl border p-4 backdrop-blur-xl ${
            isZeroBalance
              ? 'border-red-500/30 bg-red-500/10'
              : 'border-emerald-500/30 bg-emerald-500/10'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${
                isZeroBalance ? 'bg-red-500/20' : 'bg-emerald-500/20'
              }`}>
                <Wallet className={`h-5 w-5 ${isZeroBalance ? 'text-red-400' : 'text-emerald-400'}`} />
              </div>
              <div>
                <p className="text-xs text-white/50">Solde disponible</p>
                <p className={`text-xl font-bold ${isZeroBalance ? 'text-red-400' : 'text-emerald-400'}`}>
                  {balance.toFixed(2)} DT
                </p>
              </div>
            </div>
          </div>
          {isZeroBalance && (
            <div className="mt-3 flex items-center gap-2 text-red-300/80 text-xs">
              <AlertTriangle className="h-3.5 w-3.5" />
              <span>Solde insuffisant. Contactez votre administrateur pour recharger.</span>
            </div>
          )}
        </motion.div>

        {/* Operator Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white/[0.07] backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl p-6 space-y-4"
        >
          {OPERATORS.map((op, idx) => (
            <motion.button
              key={op.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 + idx * 0.1 }}
              onClick={() => !isZeroBalance && setSelected(op.id)}
              disabled={isZeroBalance}
              className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-300 ${
                isZeroBalance
                  ? 'opacity-40 cursor-not-allowed border-white/5'
                  : selected === op.id
                  ? `${op.border} bg-gradient-to-r ${op.color} scale-[1.02] shadow-lg`
                  : 'border-white/10 hover:border-white/20 hover:bg-white/[0.04]'
              }`}
            >
              <div className="h-14 w-14 rounded-xl bg-white/90 p-1.5 flex items-center justify-center shrink-0">
                <img src={op.logo} alt={op.name} className="h-full w-full object-contain" loading="lazy" />
              </div>
              <div className="text-left flex-1">
                <p className="text-white font-semibold text-base">{op.name}</p>
              </div>
              {selected === op.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center"
                >
                  <div className="h-3 w-3 rounded-full bg-white" />
                </motion.div>
              )}
            </motion.button>
          ))}

          <Button
            onClick={handleContinue}
            disabled={!selected || isZeroBalance}
            className="w-full h-12 text-base font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/25 transition-all duration-300 mt-4"
          >
            Continuer
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
