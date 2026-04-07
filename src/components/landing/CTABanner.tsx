import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

export function CTABanner() {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden gradient-primary">
      {/* Background pattern */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
        animate={{ x: [0, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4"
        >
          {t('landing.cta.title', 'Ready to start trading?')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto"
        >
          {t('landing.cta.description', 'Join thousands of traders across Europe. Create your free account in seconds.')}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Button
            onClick={scrollToTop}
            size="lg"
            className="h-12 px-8 bg-background text-foreground hover:bg-background/90 font-semibold"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            {t('landing.cta.button', 'Join Now')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
