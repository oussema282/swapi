import { motion } from 'framer-motion';
import { Star, StarHalf } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function TrustBadges() {
  const { t } = useTranslation();
  
  const badges = [
    { rating: '4.8', reviews: '10K+', platform: t('landing.trust.platform1') },
    { rating: '4.9', reviews: '15K+', platform: t('landing.trust.platform2') },
    { rating: '4.7', reviews: '8K+', platform: t('landing.trust.platform3') },
  ];

  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex min-h-[200px] w-full max-w-[80%] items-center justify-around gap-8 rounded-xl bg-muted/50 p-8 max-lg:max-w-full max-md:flex-col"
      >
        {badges.map((badge, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            <div className="flex text-xl text-orange-500">
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <StarHalf className="h-5 w-5 fill-current" />
            </div>
            <span className="text-lg">
              <b>{badge.rating}/5</b>
              <span className="text-muted-foreground"> {t('landing.trust.from')} {badge.reviews} {t('landing.trust.reviews')}</span>
            </span>
            <span className="text-xl font-semibold text-foreground">{badge.platform}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
