import { motion } from 'framer-motion';
import { Shield, Zap, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function TrustBadges() {
  const { t } = useTranslation();

  const badges = [
    { icon: Shield, label: t('auth.trustSecure') },
    { icon: Zap, label: t('auth.trustInstant') },
    { icon: Globe, label: t('auth.trustEuropeWide') },
  ];

  return (
    <section className="py-6 px-4 border-y border-border/30 bg-muted/20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto flex items-center justify-center gap-8 sm:gap-12"
      >
        {badges.map((b, i) => (
          <div key={i} className="flex items-center gap-2 text-muted-foreground">
            <b.icon className="w-4 h-4" />
            <span className="text-sm font-medium">{b.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
