import { motion } from 'framer-motion';
import { APP_NAME } from '@/config/branding';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { AuthSection } from '@/components/landing/AuthSection';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full overflow-hidden bg-background pb-12">
      {/* Animated background blobs */}
      <motion.div
        className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-primary/8 blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 40, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-secondary/8 blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating shapes */}
      <motion.div
        className="absolute top-20 right-[15%] h-3 w-3 rounded-full bg-primary/30"
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-[40%] left-[10%] h-2 w-2 rounded-full bg-secondary/40"
        animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[30%] right-[20%] h-4 w-4 rounded-sm bg-primary/15 rotate-45"
        animate={{ rotate: [45, 90, 45], scale: [1, 1.2, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
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
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 pt-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:pt-12">
        {/* Left — headline */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-start">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_3s_ease-in-out_infinite]">
              {t('landing.hero.headline1')}
            </span>
            <br />
            <span className="text-foreground">{t('landing.hero.headline2')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-4 max-w-md text-base text-muted-foreground sm:text-lg"
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
              <motion.div
                key={stat.label}
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </motion.div>
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
