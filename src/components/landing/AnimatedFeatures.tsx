import { motion } from 'framer-motion';
import { ArrowLeftRight, MapPin, Shield, Zap, MessageCircle, Gift } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const featureConfig = [
  { icon: ArrowLeftRight, titleKey: 'landing.features.smartMatching.title', descKey: 'landing.features.smartMatching.description' },
  { icon: MapPin, titleKey: 'landing.features.nearbySwaps.title', descKey: 'landing.features.nearbySwaps.description' },
  { icon: Shield, titleKey: 'landing.features.secureTrading.title', descKey: 'landing.features.secureTrading.description' },
  { icon: Zap, titleKey: 'landing.features.instantNotifications.title', descKey: 'landing.features.instantNotifications.description' },
  { icon: MessageCircle, titleKey: 'landing.features.realTimeChat.title', descKey: 'landing.features.realTimeChat.description' },
  { icon: Gift, titleKey: 'landing.features.proBoost.title', descKey: 'landing.features.proBoost.description' },
];

export function AnimatedFeatures() {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">{t('landing.features.title')}</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{t('landing.features.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureConfig.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{t(feature.titleKey)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(feature.descKey)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
