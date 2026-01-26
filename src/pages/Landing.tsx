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
    <div className="relative min-h-screen">
      {/* Smoothie gradient background */}
      <div 
        className="fixed inset-0 -z-10"
        style={{
          background: `linear-gradient(
            180deg,
            hsl(262, 83%, 95%) 0%,
            hsl(280, 70%, 92%) 10%,
            hsl(300, 60%, 90%) 20%,
            hsl(330, 70%, 92%) 30%,
            hsl(340, 82%, 92%) 40%,
            hsl(20, 80%, 93%) 50%,
            hsl(45, 90%, 92%) 60%,
            hsl(172, 66%, 90%) 70%,
            hsl(200, 70%, 92%) 80%,
            hsl(240, 60%, 94%) 90%,
            hsl(262, 83%, 95%) 100%
          )`
        }}
      />
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
