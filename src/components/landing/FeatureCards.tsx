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
      bgColor: 'bg-orange-100 dark:bg-orange-900/30',
    },
    {
      icon: MessageCircle,
      title: t('landing.features.realTimeChat.title'),
      description: t('landing.features.realTimeChat.description'),
      bgColor: 'bg-primary/20',
    },
    {
      icon: Shield,
      title: t('landing.features.secureTrading.title'),
      description: t('landing.features.secureTrading.description'),
      bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
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
            className={`flex h-[400px] w-[320px] flex-col gap-[5%] rounded-xl ${card.bgColor} p-8`}
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-background">
              <card.icon className="h-10 w-10 text-foreground" />
            </div>
            <h3 className="mt-5 text-3xl font-medium">{card.title}</h3>
            <p className="text-lg text-muted-foreground">{card.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
