import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import { useRef } from 'react';

export function CTABanner() {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const meshY = useTransform(scrollYProgress, [0, 1], reduced ? ['0%', '0%'] : ['-15%', '15%']);
  const meshScale = useTransform(scrollYProgress, [0, 1], reduced ? [1, 1] : [1.1, 1.3]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section ref={ref} className="relative py-20 px-4 overflow-hidden gradient-primary">
      {/* Parallax mesh gradient */}
      <motion.div
        style={{ y: meshY, scale: meshScale }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-primary-foreground/10 blur-3xl" />
      </motion.div>

      {/* Background pattern */}
      <motion.div
        className="absolute inset-0 opacity-10 pointer-events-none"
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
