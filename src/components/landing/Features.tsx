import { motion } from 'framer-motion';
import { Sparkles, MapPin, Shield, MessageSquare, Zap, Crown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Sparkles,
    title: 'Smart Matching',
    description: 'Our AI-powered algorithm finds the perfect swap opportunities based on your preferences and trading history.',
    color: 'from-primary to-primary/60',
  },
  {
    icon: MapPin,
    title: 'Nearby Swaps',
    description: 'Discover items from users in your area. Meet locally or ship across Europe with ease.',
    color: 'from-secondary to-secondary/60',
  },
  {
    icon: Shield,
    title: 'Secure Trading',
    description: 'Verified profiles, ratings, and secure messaging ensure safe and trustworthy exchanges.',
    color: 'from-success to-success/60',
  },
  {
    icon: MessageSquare,
    title: 'Real-Time Chat',
    description: 'Negotiate, plan meetups, and finalize deals with our instant messaging system.',
    color: 'from-accent to-accent/60',
  },
  {
    icon: Zap,
    title: 'Instant Notifications',
    description: 'Never miss a match or message with real-time push notifications.',
    color: 'from-primary to-secondary',
  },
  {
    icon: Crown,
    title: 'Pro Boost',
    description: 'Upgrade to Pro for unlimited swipes, priority matching, and a verified badge.',
    color: 'from-secondary to-primary',
  },
];

export function Features() {
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
            Everything You Need to Trade
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to make swapping simple, safe, and enjoyable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
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
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
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
