import { Hero } from '@/components/landing/Hero';
import { TrustBadges } from '@/components/landing/TrustBadges';
import { AnimatedFeatures } from '@/components/landing/AnimatedFeatures';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { StatsCounter } from '@/components/landing/StatsCounter';
import { Testimonials } from '@/components/landing/Testimonials';
import { CTABanner } from '@/components/landing/CTABanner';
import { Footer } from '@/components/landing/Footer';
import { ParallaxDivider } from '@/components/landing/ParallaxDivider';
import { ParallaxSection } from '@/components/landing/ParallaxSection';

export default function Landing() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Hero />
      <ParallaxDivider />
      <TrustBadges />
      <ParallaxSection speed={0.2}>
        <AnimatedFeatures />
      </ParallaxSection>
      <ParallaxDivider flip />
      <ParallaxSection speed={-0.15}>
        <HowItWorks />
      </ParallaxSection>
      <StatsCounter />
      <ParallaxSection speed={0.2}>
        <Testimonials />
      </ParallaxSection>
      <CTABanner />
      <Footer />
    </div>
  );
}
