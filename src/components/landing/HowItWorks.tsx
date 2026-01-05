import { motion } from 'framer-motion';
import { Camera, Heart, ArrowLeftRight } from 'lucide-react';

const steps = [
  {
    icon: Camera,
    step: '01',
    title: 'List Your Items',
    description: 'Take photos of items you want to trade. Add details and set your swap preferences.',
  },
  {
    icon: Heart,
    step: '02',
    title: 'Swipe & Match',
    description: 'Browse nearby items, swipe right on what you love. When both parties like each other\'s items, it\'s a match!',
  },
  {
    icon: ArrowLeftRight,
    step: '03',
    title: 'Meet & Swap',
    description: 'Chat with your match, arrange a meetup, and complete the trade. Rate your experience!',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start trading in three simple steps
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative text-center"
              >
                {/* Step number badge */}
                <div className="relative z-10 mx-auto mb-6">
                  <div className="w-20 h-20 rounded-full bg-background border-4 border-primary flex items-center justify-center mx-auto shadow-lg">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-2 py-0.5 rounded-full">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
