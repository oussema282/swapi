import { motion } from 'framer-motion';
import { Check, Crown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { APP_NAME } from '@/config/branding';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started',
    features: [
      '25 swipes per day',
      '3 active item listings',
      '5 searches per day',
      '3 map views per day',
      'Basic matching',
    ],
    cta: 'Get Started',
    variant: 'outline' as const,
    popular: false,
  },
  {
    name: `${APP_NAME} Pro`,
    price: '$9.99',
    period: '/month',
    description: 'For serious traders',
    features: [
      'Unlimited swipes',
      'Unlimited item listings',
      'Unlimited searches',
      'Unlimited map access',
      'Priority matching',
      'Verified Pro badge',
      '1 free boost per day',
    ],
    cta: 'Upgrade to Pro',
    variant: 'default' as const,
    popular: true,
  },
];

export function Pricing() {
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
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start free, upgrade when you need more power
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
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
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {plan.popular && <Crown className="w-5 h-5 text-primary" />}
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                  </div>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-success flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant={plan.variant} className={`w-full ${plan.popular ? 'gradient-primary text-primary-foreground' : ''}`}>
                    <Link to="/auth">{plan.cta}</Link>
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
