import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeftRight, MapPin, Shield, MessageCircle, Bell } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const icons = [ArrowLeftRight, MapPin, Shield, MessageCircle, Bell];

export function AnimatedFeatures() {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  const features = [
    { icon: icons[0], title: t('landing.slides.smart.title'), desc: t('landing.slides.smart.desc') },
    { icon: icons[1], title: t('landing.slides.nearby.title'), desc: t('landing.slides.nearby.desc') },
    { icon: icons[2], title: t('landing.slides.secure.title'), desc: t('landing.slides.secure.desc') },
    { icon: icons[3], title: t('landing.slides.chat.title'), desc: t('landing.slides.chat.desc') },
    { icon: icons[4], title: t('landing.slides.notify.title'), desc: t('landing.slides.notify.desc') },
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % features.length), 4000);
    return () => clearInterval(timer);
  }, [features.length]);

  const Icon = features[current].icon;

  return (
    <section className="py-12 px-4">
      <div className="mx-auto max-w-2xl">
        <div className="relative h-40 overflow-hidden rounded-2xl bg-muted/40 p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
              className="flex h-full items-center gap-5"
            >
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Icon className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{features[current].title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{features[current].desc}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="mt-4 flex justify-center gap-2">
          {features.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? 'w-6 bg-primary' : 'w-2 bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
