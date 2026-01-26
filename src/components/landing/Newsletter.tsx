import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';

export function Newsletter() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success(t('landing.newsletter.success'));
      setEmail('');
    }
  };

  return (
    <section className="flex w-full flex-col items-center justify-center gap-[10%] p-[5%] px-[10%]">
      <div className="flex w-full flex-col items-center justify-center gap-3">
        <h2 className="text-xl max-md:text-lg">{t('landing.newsletter.title')}</h2>

        <form onSubmit={handleSubmit} className="flex h-[60px] items-center gap-2 overflow-hidden p-2">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-full w-full rounded-full border-2 border-border p-4"
            placeholder={t('landing.newsletter.placeholder')}
          />
          <Button type="submit" className="rounded-full px-6">
            {t('landing.newsletter.signup')}
          </Button>
        </form>
      </div>
    </section>
  );
}
