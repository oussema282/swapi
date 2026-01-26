import { Hero } from '@/components/landing/Hero';
import { TrustBadges } from '@/components/landing/TrustBadges';
import { FeatureShowcase } from '@/components/landing/FeatureShowcase';
import { FeatureCards } from '@/components/landing/FeatureCards';
import { Testimonials } from '@/components/landing/Testimonials';
import { Features } from '@/components/landing/Features';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { Pricing } from '@/components/landing/Pricing';
import { AuthSection } from '@/components/landing/AuthSection';
import { Newsletter } from '@/components/landing/Newsletter';
import { Footer } from '@/components/landing/Footer';

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <TrustBadges />
      <FeatureShowcase />
      <FeatureCards />
      <Testimonials />
      <Features />
      <HowItWorks />
      <Pricing />
      <AuthSection />
      <Newsletter />
      <Footer />
    </div>
  );
}
