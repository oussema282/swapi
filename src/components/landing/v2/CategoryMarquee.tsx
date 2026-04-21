import { Smartphone, Shirt, Gamepad2, Book, Sofa, Bike, Camera, Headphones, Watch, Gift, Music, Palette } from 'lucide-react';

const icons = [Smartphone, Shirt, Gamepad2, Book, Sofa, Bike, Camera, Headphones, Watch, Gift, Music, Palette];

export function CategoryMarquee() {
  // Duplicate list for seamless loop
  const list = [...icons, ...icons];

  return (
    <section className="relative py-12 border-y border-border/30 bg-muted/20 overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      <div className="flex gap-8 animate-[marquee_8s_linear_infinite] hover:[animation-play-state:paused]">
        {list.map((Icon, i) => (
          <div
            key={i}
            className="flex-shrink-0 h-16 w-16 rounded-2xl bg-card border border-border/40 flex items-center justify-center shadow-sm"
          >
            <Icon className="h-7 w-7 text-foreground/70" />
          </div>
        ))}
      </div>
    </section>
  );
}
