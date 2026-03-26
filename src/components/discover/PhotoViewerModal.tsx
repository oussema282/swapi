import { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

interface PhotoViewerModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  photos: string[];
  initialIndex: number;
}

export function PhotoViewerModal({ open, onOpenChange, photos, initialIndex }: PhotoViewerModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const hasMultiple = photos.length > 1;
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (open) setCurrentIndex(initialIndex);
  }, [open, initialIndex]);

  const goTo = (i: number) => setCurrentIndex(i);
  const goPrev = () => setCurrentIndex(prev => (prev > 0 ? prev - 1 : photos.length - 1));
  const goNext = () => setCurrentIndex(prev => (prev < photos.length - 1 ? prev + 1 : 0));

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) goNext();
    else if (diff < -50) goPrev();
    touchStartX.current = null;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        hideCloseButton
        className="max-w-[100vw] max-h-[100vh] w-screen h-screen p-0 border-none bg-black/95 flex flex-col items-center justify-center"
        aria-describedby={undefined}
        onPointerDownOutside={() => onOpenChange(false)}
        onEscapeKeyDown={() => onOpenChange(false)}
      >
        <VisuallyHidden>
          <DialogTitle>Photo viewer</DialogTitle>
        </VisuallyHidden>
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-14 right-4 z-[60] w-8 h-8 rounded-full bg-black/80 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center hover:bg-black/90 transition-colors active:scale-95"
        >
          <X className="w-4 h-4 text-white" />
        </button>

        <div className="absolute top-14 left-1/2 -translate-x-1/2 z-50 px-3 py-1 bg-foreground/20 backdrop-blur-sm rounded-full">
          <span className="text-sm font-medium text-white">
            {currentIndex + 1} / {photos.length}
          </span>
        </div>

        <img
          src={photos[currentIndex]}
          alt={`Photo ${currentIndex + 1}`}
          className="max-w-full max-h-[80vh] object-contain select-none"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        />

        {hasMultiple && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-foreground/20 backdrop-blur-sm flex items-center justify-center hover:bg-foreground/30 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-foreground/20 backdrop-blur-sm flex items-center justify-center hover:bg-foreground/30 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-2">
              {photos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all",
                    i === currentIndex ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
                  )}
                />
              ))}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
