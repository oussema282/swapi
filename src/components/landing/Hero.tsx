import { motion } from 'framer-motion';
import { APP_NAME } from '@/config/branding';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { AuthSection } from '@/components/landing/AuthSection';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Animated background blobs */}
      <motion.div
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-secondary/10 blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Navbar */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-4">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold text-foreground"
        >
          {APP_NAME}
        </motion.span>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
          <LanguageSwitcher />
        </motion.div>
      </nav>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 pb-16 pt-8 lg:flex-row lg:items-start lg:gap-16 lg:px-8 lg:pt-16">
        {/* Left — headline */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-start">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t('landing.hero.headline1')}
            </span>
            <br />
            <span className="text-foreground">{t('landing.hero.headline2')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-5 max-w-md text-base text-muted-foreground sm:text-lg"
          >
            {t('landing.hero.description')}
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 flex gap-8"
          >
            {[
              { value: '50K+', label: t('landing.hero.stats.activeUsers') },
              { value: '120K+', label: t('landing.hero.stats.itemsTraded') },
              { value: '27', label: t('landing.hero.stats.countries') },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — auth card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="w-full max-w-md flex-shrink-0"
        >
          <AuthSection embedded />
        </motion.div>
      </div>
    </section>
  );
}
