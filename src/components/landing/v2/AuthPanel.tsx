import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { AuthSection } from '@/components/landing/AuthSection';

export function AuthPanel() {
  const { t } = useTranslation();

  return (
    <section id="auth-panel" className="relative py-24 px-6 overflow-hidden bg-background">
      {/* Gradient backdrop */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
        <motion.div
          className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/30 blur-[100px]"
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-accent/30 blur-[100px]"
          animate={{ scale: [1.2, 1, 1.2], x: [0, -50, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative mx-auto max-w-md">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl font-black text-center mb-10 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_3s_ease-in-out_infinite]"
        >
          {t('landing.v2.auth.title', 'Start')}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-3xl border border-border/40 bg-background/60 backdrop-blur-2xl shadow-2xl p-1"
        >
          <AuthSection embedded />
        </motion.div>
      </div>
    </section>
  );
}
