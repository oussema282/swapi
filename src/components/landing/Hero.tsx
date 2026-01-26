import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { APP_NAME } from '@/config/branding';
import { useTranslation } from 'react-i18next';
import heroPhoneImage from '@/assets/landing/hero-phone.png';

export function Hero() {
  const { t } = useTranslation();

  const scrollToAuth = () => {
    const authSection = document.getElementById('auth');
    if (authSection) {
      authSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden bg-background">
      <div className="flex min-h-screen w-full items-center justify-center gap-6 p-[5%] max-xl:items-center max-lg:flex-col max-lg:p-4 max-md:mt-[50px]">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap text-6xl font-semibold uppercase leading-[80px] max-lg:text-4xl max-md:leading-snug"
          >
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              {t('landing.hero.headline1')}
            </span>
            <br />
            <span className="text-foreground">
              {t('landing.hero.headline2')}
            </span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-4 max-w-[450px] p-2 text-justify text-muted-foreground max-lg:max-w-full"
          >
            {t('landing.hero.description')}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 flex items-center gap-4 overflow-hidden p-2"
          >
            <Button 
              size="lg" 
              className="h-12 gap-2 rounded-full pl-6 pr-2 text-lg font-semibold"
              onClick={scrollToAuth}
            >
              <span>{t('landing.hero.getStarted')}</span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground/20">
                <ArrowDown className="h-4 w-4" />
              </div>
            </Button>
          </motion.div>
        </div>

        {/* Right Content - Phone Mockup */}
        <div className="flex w-full max-w-[50%] items-center justify-center overflow-hidden max-lg:max-w-full">
          <div className="relative flex max-h-[580px] min-h-[450px] min-w-[350px] max-w-[650px] overflow-hidden max-lg:h-fit max-lg:max-h-[400px] max-lg:min-h-[280px] max-lg:w-[350px] max-lg:min-w-[280px]">
            <motion.img
              src={heroPhoneImage}
              alt={APP_NAME}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="z-10 h-full w-full object-contain"
            />

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute bottom-0 left-1/2 h-[80%] w-[80%] -translate-x-1/2 rounded-full bg-secondary/30"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
