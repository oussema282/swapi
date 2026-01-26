import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import testimonial1 from '@/assets/landing/testimonial-1.jpg';
import testimonial2 from '@/assets/landing/testimonial-2.jpg';
import testimonial3 from '@/assets/landing/testimonial-3.jpg';

export function Testimonials() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah M.',
      text: t('landing.testimonials.quote1'),
      initials: 'SM',
      image: testimonial3,
    },
    {
      name: 'Alex K.',
      text: t('landing.testimonials.quote2'),
      initials: 'AK',
      image: testimonial1,
    },
    {
      name: 'Maria L.',
      text: t('landing.testimonials.quote3'),
      initials: 'ML',
      image: testimonial2,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="mt-5 flex min-h-[60vh] w-full flex-col items-center justify-center bg-foreground p-[2%] text-background max-lg:min-h-[40vh]">
      <motion.h3
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-medium max-md:text-2xl"
      >
        {t('landing.testimonials.title')}
      </motion.h3>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-8 max-w-[750px] max-md:max-w-[100vw]"
      >
        <div className="flex flex-col gap-10">
          <div className="flex items-center justify-center gap-10 rounded-lg p-4">
            <div className="flex items-center">
              <Avatar className="h-[150px] w-[150px] max-lg:h-[80px] max-lg:w-[80px]">
                <AvatarImage 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="object-cover"
                />
                <AvatarFallback className="text-2xl text-foreground">
                  {testimonials[currentIndex].initials}
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="flex max-w-[450px] flex-col gap-4">
              <p className="mt-4 italic text-background/80">
                "{testimonials[currentIndex].text}"
              </p>
              <b>- {testimonials[currentIndex].name}</b>
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-background/30'
                }`}
              />
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="h-10 w-10 rounded-full border-background/30 bg-transparent text-background hover:bg-background/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="h-10 w-10 rounded-full border-background/30 bg-transparent text-background hover:bg-background/10"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
