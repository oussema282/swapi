import { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface PhotoViewerModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  photos: string[];
  initialIndex: number;
}

export function PhotoViewerModal({ open, onOpenChange, photos, initialIndex }: PhotoViewerModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const hasMultiple = photos.length > 1;

  useEffect(() => {
    if (open) setCurrentIndex(initialIndex);
  }, [open, initialIndex]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : photos.length - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(prev => (prev < photos.length - 1 ? prev + 1 : 0));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[100vw] max-h-[100vh] w-screen h-screen p-0 border-none bg-black/95 flex items-center justify-center [&>button]:hidden">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-foreground/20 backdrop-blur-sm flex items-center justify-center hover:bg-foreground/30 transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 px-3 py-1 bg-foreground/20 backdrop-blur-sm rounded-full">
          <span className="text-sm font-medium text-white">
            {currentIndex + 1} / {photos.length}
          </span>
        </div>

        <img
          src={photos[currentIndex]}
          alt={`Photo ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain select-none"
        />

        {hasMultiple && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-foreground/20 backdrop-blur-sm flex items-center justify-center hover:bg-foreground/30 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-foreground/20 backdrop-blur-sm flex items-center justify-center hover:bg-foreground/30 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
