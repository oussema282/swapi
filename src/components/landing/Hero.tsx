import { motion } from 'framer-motion';
import { ArrowLeftRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { APP_NAME } from '@/config/branding';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Hero() {
  const { t } = useTranslation();
  
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
            <Button asChild size="lg" className="h-12 gap-2 rounded-full pl-6 pr-2 text-lg font-semibold">
              <Link to="/auth">
                <span>{t('landing.hero.getStarted')}</span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Download className="h-4 w-4" />
                </div>
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Right Content - Phone Mockup */}
        <div className="flex w-full max-w-[50%] items-center justify-center overflow-hidden max-lg:max-w-full">
          <div className="relative flex max-h-[580px] min-h-[450px] min-w-[350px] max-w-[650px] overflow-hidden max-lg:h-fit max-lg:max-h-[320px] max-lg:min-h-[180px] max-lg:w-[320px] max-lg:min-w-[320px]">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="z-10 flex h-full w-full items-center justify-center"
            >
              <div className="relative h-[400px] w-[200px] rounded-[40px] border-4 border-foreground/20 bg-background shadow-2xl max-lg:h-[280px] max-lg:w-[140px]">
                {/* Phone Screen */}
                <div className="absolute inset-2 overflow-hidden rounded-[32px] bg-gradient-to-br from-primary/20 to-secondary/20">
                  <div className="flex h-full flex-col items-center justify-center gap-4 p-4">
                    <ArrowLeftRight className="h-16 w-16 text-primary" />
                    <span className="text-center text-lg font-bold text-foreground">{APP_NAME}</span>
                  </div>
                </div>
                {/* Notch */}
                <div className="absolute left-1/2 top-2 h-6 w-20 -translate-x-1/2 rounded-full bg-foreground/20" />
              </div>
            </motion.div>

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
