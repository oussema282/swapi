import { ArrowLeftRight } from 'lucide-react';
import { APP_NAME } from '@/config/branding';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg gradient-primary flex items-center justify-center">
              <ArrowLeftRight className="w-3.5 h-3.5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg">{APP_NAME}</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-5 text-sm text-muted-foreground">
            <Link to="/terms" className="hover:text-foreground transition-colors">
              {t('landing.footer.terms')}
            </Link>
            <Link to="/privacy" className="hover:text-foreground transition-colors">
              {t('landing.footer.privacy')}
            </Link>
            <Link to="/safety" className="hover:text-foreground transition-colors">
              Safety
            </Link>
          </nav>
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-muted-foreground">
            {t('landing.footer.copyright', { year: currentYear, appName: APP_NAME })}
          </p>
        </div>
      </div>
    </footer>
  );
}
