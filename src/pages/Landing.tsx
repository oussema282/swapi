import { StickyNav } from '@/components/landing/v2/StickyNav';
import { HeroParallax } from '@/components/landing/v2/HeroParallax';
import { CategoryMarquee } from '@/components/landing/v2/CategoryMarquee';
import { StickyShowcase } from '@/components/landing/v2/StickyShowcase';
import { NumberReveal } from '@/components/landing/v2/NumberReveal';
import { TiltCollage } from '@/components/landing/v2/TiltCollage';
import { AuthPanel } from '@/components/landing/v2/AuthPanel';
import { MinimalFooter } from '@/components/landing/v2/MinimalFooter';

export default function Landing() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <StickyNav />
      <HeroParallax />
      <CategoryMarquee />
      <StickyShowcase />
      <NumberReveal />
      <TiltCollage />
      <AuthPanel />
      <MinimalFooter />
    </div>
  );
}
