import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { APP_NAME } from '@/config/branding';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

export function MinimalFooter() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 py-8 px-6 bg-background">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-bold text-foreground">{APP_NAME}</span>
        <nav className="flex items-center gap-5 text-sm text-muted-foreground">
          <Link to="/terms" className="hover:text-foreground transition-colors">{t('landing.footer.terms', 'Terms')}</Link>
          <Link to="/privacy" className="hover:text-foreground transition-colors">{t('landing.footer.privacy', 'Privacy')}</Link>
          <Link to="/safety" className="hover:text-foreground transition-colors">Safety</Link>
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <span className="text-xs text-muted-foreground">© {year}</span>
        </div>
      </div>
    </footer>
  );
}
