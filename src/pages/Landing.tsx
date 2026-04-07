import { Hero } from '@/components/landing/Hero';
import { TrustBadges } from '@/components/landing/TrustBadges';
import { AnimatedFeatures } from '@/components/landing/AnimatedFeatures';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { StatsCounter } from '@/components/landing/StatsCounter';
import { Testimonials } from '@/components/landing/Testimonials';
import { CTABanner } from '@/components/landing/CTABanner';
import { Footer } from '@/components/landing/Footer';

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <TrustBadges />
      <AnimatedFeatures />
      <HowItWorks />
      <StatsCounter />
      <Testimonials />
      <CTABanner />
      <Footer />
    </div>
  );
}
