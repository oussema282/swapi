import { Hero } from '@/components/landing/Hero';
import { TrustBadges } from '@/components/landing/TrustBadges';
import { AnimatedFeatures } from '@/components/landing/AnimatedFeatures';
import { Testimonials } from '@/components/landing/Testimonials';
import { Footer } from '@/components/landing/Footer';

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <AnimatedFeatures />
      <TrustBadges />
      <Testimonials />
      <Footer />
    </div>
  );
}
