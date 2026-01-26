import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import featureSecureImage from '@/assets/landing/feature-secure.png';
import featureChatImage from '@/assets/landing/feature-chat.png';

export function FeatureShowcase() {
  const { t } = useTranslation();

  return (
    <>
      {/* Feature 1 - Secure */}
      <section className="relative flex w-full flex-col overflow-hidden p-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex min-h-[60vh] items-center justify-center gap-[10%] max-lg:flex-col max-lg:gap-10"
        >
          <div className="flex">
            <div className="h-[450px] w-[300px] max-lg:h-[350px] max-lg:w-[220px]">
              <img
                src={featureSecureImage}
                alt="Secure Trading"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
          <div className="mt-6 flex max-w-[450px] flex-col gap-4">
            <h3 className="text-4xl font-medium">{t('landing.features.secureTrading.title')}</h3>

            <div className="mt-4 flex flex-col gap-3">
              <h4 className="flex items-center gap-2 text-xl font-medium">
                <Check className="h-6 w-6 text-primary" />
                {t('landing.features.secureTrading.feature1')}
              </h4>
              <span className="text-xl text-muted-foreground">
                {t('landing.features.secureTrading.feature1Desc')}
              </span>
            </div>
            <div className="mt-4 flex flex-col gap-3">
              <h4 className="flex items-center gap-2 text-xl font-medium">
                <Check className="h-6 w-6 text-primary" />
                {t('landing.features.secureTrading.feature2')}
              </h4>
              <span className="text-xl text-muted-foreground">
                {t('landing.features.secureTrading.feature2Desc')}
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Feature 2 - Fast */}
      <section className="relative flex w-full flex-col overflow-hidden p-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex min-h-[60vh] items-center justify-center gap-[10%] max-lg:flex-col-reverse max-lg:gap-10"
        >
          <div className="mt-6 flex max-w-[450px] flex-col gap-4">
            <h3 className="text-4xl font-medium">{t('landing.features.instantNotifications.title')}</h3>

            <div className="mt-4 flex flex-col gap-3">
              <h4 className="flex items-center gap-2 text-xl font-medium">
                <Check className="h-6 w-6 text-primary" />
                {t('landing.features.instantNotifications.feature1')}
              </h4>
              <span className="text-xl text-muted-foreground">
                {t('landing.features.instantNotifications.feature1Desc')}
              </span>
            </div>
            <div className="mt-4 flex flex-col gap-3">
              <h4 className="flex items-center gap-2 text-xl font-medium">
                <Check className="h-6 w-6 text-primary" />
                {t('landing.features.instantNotifications.feature2')}
              </h4>
              <span className="text-xl text-muted-foreground">
                {t('landing.features.instantNotifications.feature2Desc')}
              </span>
            </div>
          </div>

          <div className="flex">
            <div className="h-[450px] w-[300px] max-lg:h-[350px] max-lg:w-[220px]">
              <img
                src={featureChatImage}
                alt="Lightning Fast"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
