import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { toast } from 'sonner';
import { Loader2, ShieldCheck, Clock } from 'lucide-react';
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

  useEffect(() => {
    if (!rechargeId || !cin) {
      navigate('/recharge');
      return;
    }
    // Fetch recharge info
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

  const handleVerify = async () => {
    if (code.length !== 6) {
      toast.error('Veuillez entrer le code à 6 chiffres');
      return;
    }

    setLoading(true);
    try {
      // Check verification code against what admin set
      const { data, error } = await supabase
        .from('recharges' as any)
        .select('verification_code')
        .eq('id', rechargeId!)
        .eq('cin', cin!)
        .single();

      if (error) throw error;

      if ((data as any).verification_code === code) {
        // Mark as verified
        await supabase
          .from('recharges' as any)
          .update({ is_verified: true, status: 'verified' } as any)
          .eq('id', rechargeId!);

        setStatus('success');
        toast.success('Code vérifié avec succès !');
      } else {
        setStatus('error');
        toast.error('Code incorrect. Veuillez réessayer.');
        setCode('');
        setTimeout(() => setStatus('input'), 2000);
      }
    } catch (err: any) {
      toast.error('Erreur: ' + (err.message || 'Réessayez'));
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <img src={d17Logo} alt="D17 DigiPost Bank" className="h-20 w-20 rounded-2xl shadow-lg" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">Vérification</h1>
          <p className="text-muted-foreground mt-1">
            Entrez le code à 6 chiffres que vous avez reçu
          </p>
        </div>

        <div className="bg-card rounded-2xl border border-border shadow-xl p-6 space-y-6">
          {/* Recharge info */}
          {rechargeData && (
            <div className="bg-muted/50 rounded-xl p-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Forfait</span>
                <span className="font-semibold">{(rechargeData as any).forfait} Gb</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tél</span>
                <span className="font-semibold">{(rechargeData as any).tel}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Statut</span>
                <span className={`font-semibold ${
                  rechargeData.status === 'pending' ? 'text-yellow-600' :
                  rechargeData.status === 'verified' ? 'text-green-600' :
                  rechargeData.status === 'refused' ? 'text-red-600' : ''
                }`}>
                  {statusLabel}
                </span>
              </div>
            </div>
          )}

          {status === 'success' ? (
            <div className="text-center py-6 space-y-3">
              <div className="mx-auto h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                <ShieldCheck className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-lg font-bold text-foreground">Vérifié avec succès !</h2>
              <p className="text-muted-foreground text-sm">Votre recharge a été confirmée.</p>
              <Button onClick={() => navigate('/recharge')} variant="outline" className="rounded-xl">
                Nouvelle recharge
              </Button>
            </div>
          ) : (
            <>
              <div className="flex justify-center">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Clock className="h-4 w-4" />
                  En attente du code de vérification
                </div>
              </div>

              <div className="flex justify-center">
                <InputOTP maxLength={6} value={code} onChange={setCode}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <Button
                onClick={handleVerify}
                className="w-full h-12 text-base font-semibold rounded-xl"
                disabled={loading || code.length !== 6}
              >
                {loading ? <Loader2 className="h-5 w-5 animate-spin mr-2" /> : null}
                Vérifier
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
