import { motion } from 'framer-motion';
import { Camera, Heart, ArrowLeftRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function HowItWorks() {
  const { t } = useTranslation();

  const steps = [
    { icon: Camera, step: '01', titleKey: 'landing.howItWorks.step1.title', descKey: 'landing.howItWorks.step1.description' },
    { icon: Heart, step: '02', titleKey: 'landing.howItWorks.step2.title', descKey: 'landing.howItWorks.step2.description' },
    { icon: ArrowLeftRight, step: '03', titleKey: 'landing.howItWorks.step3.title', descKey: 'landing.howItWorks.step3.description' },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">{t('landing.howItWorks.title')}</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{t('landing.howItWorks.subtitle')}</p>
        </motion.div>

        <div className="relative">
          {/* Connector line — desktop */}
          <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-primary/30 via-primary to-primary/30" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="relative text-center"
              >
                <div className="relative z-10 mx-auto mb-6">
                  <div className="w-20 h-20 rounded-full bg-background border-4 border-primary flex items-center justify-center mx-auto shadow-lg">
                    <s.icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-2.5 py-0.5 rounded-full">
                    {s.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{t(s.titleKey)}</h3>
                <p className="text-sm text-muted-foreground max-w-xs mx-auto">{t(s.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
