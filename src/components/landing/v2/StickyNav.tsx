import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { APP_NAME } from '@/config/branding';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';

export function StickyNav() {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 100], ['hsl(var(--background) / 0)', 'hsl(var(--background) / 0.85)']);
  const blur = useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(12px)']);
  const border = useTransform(scrollY, [0, 100], ['hsl(var(--border) / 0)', 'hsl(var(--border) / 0.4)']);

  const scrollToAuth = () => {
    document.getElementById('auth-panel')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      style={{ backgroundColor: bg, backdropFilter: blur, WebkitBackdropFilter: blur, borderBottomColor: border }}
      className="fixed top-0 left-0 right-0 z-50 border-b"
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-3">
        <Link to="/" className="text-xl font-bold text-foreground">{APP_NAME}</Link>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <Button size="sm" onClick={scrollToAuth} className="rounded-full px-5">
            {t('landing.v2.nav.signIn', 'Sign in')}
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
