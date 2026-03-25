import { motion } from 'framer-motion';
import { Zap, MessageCircle, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function FeatureCards() {
  const { t } = useTranslation();

  const cards = [
    {
      icon: Zap,
      title: t('landing.features.smartMatching.title'),
      description: t('landing.features.smartMatching.description'),
    },
    {
      icon: MessageCircle,
      title: t('landing.features.realTimeChat.title'),
      description: t('landing.features.realTimeChat.description'),
    },
    {
      icon: Shield,
      title: t('landing.features.secureTrading.title'),
      description: t('landing.features.secureTrading.description'),
    },
  ];

  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex min-h-[300px] w-full items-center justify-center gap-8 rounded-xl p-4 max-lg:flex-col"
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -4 }}
            className="flex h-[400px] w-[320px] flex-col gap-[5%] rounded-[2rem] bg-card border border-border p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-gold"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              <card.icon className="h-10 w-10 text-primary" />
            </div>
            <h3 className="mt-5 text-3xl font-medium text-foreground">{card.title}</h3>
            <p className="text-lg text-muted-foreground">{card.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
