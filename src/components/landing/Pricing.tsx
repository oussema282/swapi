import { motion } from 'framer-motion';
import { Check, Crown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { APP_NAME } from '@/config/branding';
import { useTranslation } from 'react-i18next';

export function Pricing() {
  const { t } = useTranslation();

  const plans = [
    {
      nameKey: 'landing.pricing.free.name',
      price: '$0',
      periodKey: 'landing.pricing.free.period',
      descriptionKey: 'landing.pricing.free.description',
      featuresKeys: [
        'landing.pricing.free.features.swipes',
        'landing.pricing.free.features.listings',
        'landing.pricing.free.features.searches',
        'landing.pricing.free.features.mapViews',
        'landing.pricing.free.features.matching',
      ],
      ctaKey: 'landing.pricing.free.cta',
      variant: 'outline' as const,
      popular: false,
    },
    {
      nameKey: 'landing.pricing.pro.name',
      price: '$9.99',
      periodKey: 'landing.pricing.pro.period',
      descriptionKey: 'landing.pricing.pro.description',
      featuresKeys: [
        'landing.pricing.pro.features.swipes',
        'landing.pricing.pro.features.listings',
        'landing.pricing.pro.features.searches',
        'landing.pricing.pro.features.mapAccess',
        'landing.pricing.pro.features.matching',
        'landing.pricing.pro.features.badge',
        'landing.pricing.pro.features.boost',
      ],
      ctaKey: 'landing.pricing.pro.cta',
      variant: 'default' as const,
      popular: true,
    },
  ];

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold text-foreground mb-4">
            {t('landing.pricing.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('landing.pricing.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.nameKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`h-full relative ${plan.popular ? 'border-2 border-primary shadow-xl' : 'border-border/50'}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-3 py-1">
                      <Sparkles className="w-3 h-3 mr-1" />
                      {t('landing.pricing.mostPopular')}
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {plan.popular && <Crown className="w-5 h-5 text-primary" />}
                    <CardTitle className="text-xl">{t(plan.nameKey)}</CardTitle>
                  </div>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{t(plan.periodKey)}</span>
                  </div>
                  <CardDescription>{t(plan.descriptionKey)}</CardDescription>
                </CardHeader>
                <CardContent className="pb-6">
                  <ul className="space-y-3">
                    {plan.featuresKeys.map((featureKey) => (
                      <li key={featureKey} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-success flex-shrink-0" />
                        <span className="text-sm">{t(featureKey)}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant={plan.variant} className={`w-full ${plan.popular ? 'gradient-primary text-primary-foreground' : ''}`}>
                    <Link to="/auth">{t(plan.ctaKey)}</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
