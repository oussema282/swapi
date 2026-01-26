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
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated mesh gradient background */}
      <div 
        className="fixed inset-0 -z-10 animate-auth-gradient"
        style={{
          background: `
            linear-gradient(
              135deg,
              hsl(252 100% 68% / 0.15) 0%,
              hsl(296 75% 66% / 0.12) 25%,
              hsl(338 83% 68% / 0.10) 50%,
              hsl(222 100% 68% / 0.12) 75%,
              hsl(252 100% 68% / 0.15) 100%
            )
          `,
          backgroundSize: '400% 400%',
        }}
      />
      
      {/* Subtle overlay for readability */}
      <div className="fixed inset-0 -z-10 bg-background/80 backdrop-blur-[1px]" />
      
      {/* Soft ambient blobs */}
      <div 
        className="fixed top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-30 animate-blob-slow -z-10" 
        style={{ background: 'hsl(252 100% 68% / 0.4)' }} 
      />
      <div 
        className="fixed bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-25 animate-blob-slow-reverse -z-10" 
        style={{ background: 'hsl(296 75% 66% / 0.35)' }} 
      />
      <div 
        className="fixed top-[40%] left-[60%] w-[400px] h-[400px] rounded-full blur-[100px] opacity-20 animate-blob-slow-delay -z-10" 
        style={{ background: 'hsl(338 83% 68% / 0.3)' }} 
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
