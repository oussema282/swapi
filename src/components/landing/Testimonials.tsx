import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import testimonial1 from '@/assets/landing/testimonial-1.jpg';
import testimonial2 from '@/assets/landing/testimonial-2.jpg';
import testimonial3 from '@/assets/landing/testimonial-3.jpg';

export function Testimonials() {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  const testimonials = [
    { name: 'Sarah M.', text: t('landing.testimonials.quote1'), initials: 'SM', image: testimonial3, rating: 5 },
    { name: 'Alex K.', text: t('landing.testimonials.quote2'), initials: 'AK', image: testimonial1, rating: 5 },
    { name: 'Maria L.', text: t('landing.testimonials.quote3'), initials: 'ML', image: testimonial2, rating: 5 },
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">{t('landing.testimonials.title')}</h2>
        </motion.div>

        <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8 sm:p-12 shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center text-center"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-lg italic text-foreground max-w-2xl leading-relaxed mb-6">
                "{testimonials[current].text}"
              </p>

              <Avatar className="h-14 w-14 mb-2">
                <AvatarImage src={testimonials[current].image} alt={testimonials[current].name} className="object-cover" />
                <AvatarFallback className="text-foreground">{testimonials[current].initials}</AvatarFallback>
              </Avatar>
              <p className="font-semibold text-foreground">{testimonials[current].name}</p>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? 'w-7 bg-primary' : 'w-2.5 bg-muted-foreground/25'
                }`}
              />
            ))}
          </div>

          {/* Nav arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length)}
              className="h-9 w-9 rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCurrent((p) => (p + 1) % testimonials.length)}
              className="h-9 w-9 rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
