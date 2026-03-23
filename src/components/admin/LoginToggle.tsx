import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Shield, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export function LoginToggle() {
  const queryClient = useQueryClient();

  const { data: loginDisabled, isLoading } = useQuery({
    queryKey: ['system-settings', 'login_disabled'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('system_settings' as any)
        .select('value')
        .eq('key', 'login_disabled')
        .single();
      if (error) throw error;
      return (data as any)?.value === true;
    },
  });

  const toggleMutation = useMutation({
    mutationFn: async (disabled: boolean) => {
      const { error } = await supabase
        .from('system_settings' as any)
        .update({ value: disabled, updated_at: new Date().toISOString() } as any)
        .eq('key', 'login_disabled');
      if (error) throw error;
    },
    onSuccess: (_, disabled) => {
      queryClient.invalidateQueries({ queryKey: ['system-settings', 'login_disabled'] });
      toast.success(disabled ? 'Login désactivé pour les utilisateurs' : 'Login réactivé pour les utilisateurs');
    },
    onError: () => toast.error('Erreur lors de la mise à jour'),
  });

  if (isLoading) return <Loader2 className="h-4 w-4 animate-spin" />;

  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
      <Shield className="h-5 w-5 text-destructive" />
      <div className="flex-1">
        <Label htmlFor="login-toggle" className="text-sm font-semibold cursor-pointer">
          Désactiver Login / Inscription
        </Label>
        <p className="text-xs text-muted-foreground">Seuls les admins pourront se connecter</p>
      </div>
      <Switch
        id="login-toggle"
        checked={loginDisabled ?? false}
        onCheckedChange={(checked) => toggleMutation.mutate(checked)}
        disabled={toggleMutation.isPending}
      />
    </div>
  );
}
