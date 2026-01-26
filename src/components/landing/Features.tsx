import { motion } from 'framer-motion';
import { Sparkles, MapPin, Shield, MessageSquare, Zap, Crown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

export function Features() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Sparkles,
      titleKey: 'landing.features.smartMatching.title',
      descriptionKey: 'landing.features.smartMatching.description',
      color: 'from-primary to-primary/60',
    },
    {
      icon: MapPin,
      titleKey: 'landing.features.nearbySwaps.title',
      descriptionKey: 'landing.features.nearbySwaps.description',
      color: 'from-secondary to-secondary/60',
    },
    {
      icon: Shield,
      titleKey: 'landing.features.secureTrading.title',
      descriptionKey: 'landing.features.secureTrading.description',
      color: 'from-success to-success/60',
    },
    {
      icon: MessageSquare,
      titleKey: 'landing.features.realTimeChat.title',
      descriptionKey: 'landing.features.realTimeChat.description',
      color: 'from-accent to-accent/60',
    },
    {
      icon: Zap,
      titleKey: 'landing.features.instantNotifications.title',
      descriptionKey: 'landing.features.instantNotifications.description',
      color: 'from-primary to-secondary',
    },
    {
      icon: Crown,
      titleKey: 'landing.features.proBoost.title',
      descriptionKey: 'landing.features.proBoost.description',
      color: 'from-secondary to-primary',
    },
  ];

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold text-foreground mb-4">
            {t('landing.features.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('landing.features.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-muted-foreground">
                    {t(feature.descriptionKey)}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
