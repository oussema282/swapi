import { motion } from 'framer-motion';
import { Star, StarHalf } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import trustpilotLogo from '@/assets/landing/trustpilot.svg';
import g2Logo from '@/assets/landing/g2.svg';
import capterraLogo from '@/assets/landing/capterra.svg';

export function TrustBadges() {
  const { t } = useTranslation();
  
  const badges = [
    { rating: '4.8', reviews: '10K+', logo: trustpilotLogo, name: 'Trustpilot' },
    { rating: '4.9', reviews: '15K+', logo: g2Logo, name: 'G2' },
    { rating: '4.7', reviews: '8K+', logo: capterraLogo, name: 'Capterra' },
  ];

  return (
    <section className="py-8 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-3xl items-center justify-center gap-6 rounded-xl bg-muted/30 px-6 py-5 max-md:flex-col max-md:gap-4"
      >
        {badges.map((badge, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-center gap-3"
          >
            <img 
              src={badge.logo} 
              alt={badge.name} 
              className="h-6 w-auto object-contain"
            />
            <div className="flex items-center gap-1.5">
              <div className="flex text-orange-500">
                <Star className="h-3.5 w-3.5 fill-current" />
                <Star className="h-3.5 w-3.5 fill-current" />
                <Star className="h-3.5 w-3.5 fill-current" />
                <Star className="h-3.5 w-3.5 fill-current" />
                <StarHalf className="h-3.5 w-3.5 fill-current" />
              </div>
              <span className="text-sm font-medium text-foreground">{badge.rating}</span>
              <span className="text-xs text-muted-foreground">({badge.reviews})</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
