import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/hooks/useAuth';
import { useCreateItem } from '@/hooks/useItems';
import { useItemLimit } from '@/hooks/useEntitlements';
import { AppLayout } from '@/components/layout/AppLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { 
  ArrowLeft, 
  ArrowRight,
  Loader2, 
  Upload, 
  X, 
  Check,
  Gamepad2,
  Smartphone,
  Shirt,
  BookOpen,
  Home,
  Dumbbell,
  Package,
  Sparkles,
  Star,
  ThumbsUp,
  Zap,
  Crown
} from 'lucide-react';
import { ItemCategory, ItemCondition, CATEGORY_LABELS, CONDITION_LABELS } from '@/types/database';
import { cn } from '@/lib/utils';

const categories: ItemCategory[] = ['games', 'electronics', 'clothes', 'books', 'home_garden', 'sports', 'other'];
const conditions: ItemCondition[] = ['new', 'like_new', 'good', 'fair'];

const CATEGORY_ICONS: Record<ItemCategory, React.ReactNode> = {
  games: <Gamepad2 className="w-6 h-6" />,
  electronics: <Smartphone className="w-6 h-6" />,
  clothes: <Shirt className="w-6 h-6" />,
  books: <BookOpen className="w-6 h-6" />,
  home_garden: <Home className="w-6 h-6" />,
  sports: <Dumbbell className="w-6 h-6" />,
  other: <Package className="w-6 h-6" />,
};

const CONDITION_ICONS: Record<ItemCondition, React.ReactNode> = {
  new: <Sparkles className="w-5 h-5" />,
  like_new: <Star className="w-5 h-5" />,
  good: <ThumbsUp className="w-5 h-5" />,
  fair: <Zap className="w-5 h-5" />,
};

const STEPS = [
  { id: 1, title: 'Photos & Title', description: 'Show off your item' },
  { id: 2, title: 'Category & Condition', description: 'Tell us about it' },
  { id: 3, title: 'Value Range', description: 'Set your price range' },
  { id: 4, title: 'Swap Preferences', description: 'What do you want?' },
];

export default function NewItem() {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const createItem = useCreateItem();
  const { canAddItem, itemCount, limit, isPro, isLoading: limitLoading } = useItemLimit();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [step, setStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<ItemCategory | null>(null);
  const [condition, setCondition] = useState<ItemCondition | null>(null);
  const [swapPreferences, setSwapPreferences] = useState<ItemCategory[]>([]);
  const [valueMin, setValueMin] = useState('');
  const [valueMax, setValueMax] = useState('');
  const [photos, setPhotos] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    }
    // Wait for subscription data to load before checking limits
    if (!authLoading && !limitLoading && user && !canAddItem) {
      toast({ 
        variant: 'destructive', 
        title: 'Item limit reached',
        description: `Free users can only have ${limit} items. Upgrade to Pro for unlimited items!`
      });
      navigate('/checkout');
    }
  }, [user, authLoading, limitLoading, navigate, canAddItem, limit, toast]);

  const toggleSwapPreference = (cat: ItemCategory) => {
    setSwapPreferences(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || !user) return;

    if (photos.length + files.length > 4) {
      toast({ variant: 'destructive', title: 'Maximum 4 photos allowed' });
      return;
    }

    setUploading(true);
    const newPhotos: string[] = [];

    try {
      for (const file of Array.from(files)) {
        if (!file.type.startsWith('image/')) {
          toast({ variant: 'destructive', title: 'Only images are allowed' });
          continue;
        }

        if (file.size > 5 * 1024 * 1024) {
          toast({ variant: 'destructive', title: 'Image must be less than 5MB' });
          continue;
        }

        const fileName = `${user.id}/${Date.now()}-${file.name}`;
        
        const { error: uploadError } = await supabase.storage
          .from('item-photos')
          .upload(fileName, file);

        if (uploadError) {
          console.error('Upload error:', uploadError);
          toast({ variant: 'destructive', title: 'Failed to upload image' });
          continue;
        }

        const { data: urlData } = supabase.storage
          .from('item-photos')
          .getPublicUrl(fileName);

        newPhotos.push(urlData.publicUrl);
      }

      setPhotos(prev => [...prev, ...newPhotos]);
    } catch (error) {
      console.error('Upload error:', error);
      toast({ variant: 'destructive', title: 'Upload failed' });
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const removePhoto = (index: number) => {
    setPhotos(prev => prev.filter((_, i) => i !== index));
  };

  const canProceed = () => {
    switch (step) {
      case 1: return title.trim().length > 0;
      case 2: return category !== null && condition !== null;
      case 3: return true; // Value is optional
      case 4: return swapPreferences.length > 0;
      default: return false;
    }
  };

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      navigate(-1);
    }
  };

  const handleSubmit = async () => {
    if (!category || !condition) return;

    try {
      await createItem.mutateAsync({
        title: title.trim(),
        description: description.trim() || null,
        category,
        condition,
        photos,
        swap_preferences: swapPreferences,
        value_min: parseInt(valueMin) || 0,
        value_max: valueMax ? parseInt(valueMax) : null,
      });

      setIsComplete(true);
      
      // Navigate after animation
      setTimeout(() => {
        navigate('/items');
      }, 2500);
    } catch (error) {
      toast({ variant: 'destructive', title: 'Failed to create item' });
    }
  };

  // Success Animation Screen
  if (isComplete) {
    return (
      <AppLayout showNav={false}>
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="w-32 h-32 rounded-full bg-success flex items-center justify-center mb-8"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            >
              <Check className="w-16 h-16 text-success-foreground" strokeWidth={3} />
            </motion.div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl font-display font-bold text-foreground mb-2"
          >
            Item Created!
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground text-center"
          >
            Your item is now live and ready to be swapped
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex gap-3"
          >
            <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-success animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="w-2 h-2 rounded-full bg-success animate-pulse" style={{ animationDelay: '0.4s' }} />
          </motion.div>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout showNav={false}>
      <div className="max-w-lg mx-auto px-4 py-4 pb-24 min-h-[calc(100vh-2rem)] flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={handleBack}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex-1">
            <h1 className="text-lg font-display font-bold">{STEPS[step - 1].title}</h1>
            <p className="text-sm text-muted-foreground">{STEPS[step - 1].description}</p>
          </div>
          <span className="text-sm font-medium text-muted-foreground">
            {step}/4
          </span>
        </div>

        {/* Progress Bar */}
        <div className="flex gap-2 mb-8">
          {STEPS.map((s) => (
            <div
              key={s.id}
              className={cn(
                'h-1.5 flex-1 rounded-full transition-all duration-300',
                s.id <= step ? 'bg-primary' : 'bg-muted'
              )}
            />
          ))}
        </div>

        {/* Step Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="flex-1 overflow-y-auto"
          >
            {/* Step 1: Photos & Title */}
            {step === 1 && (
              <div className="space-y-6">
                <Card className="p-6">
                  <Label className="text-base font-semibold mb-4 block">Upload Photos</Label>
                  
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {photos.map((photo, index) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="relative aspect-square rounded-xl overflow-hidden bg-muted"
                      >
                        <img src={photo} alt={`Upload ${index + 1}`} className="w-full h-full object-cover" />
                        <button
                          type="button"
                          onClick={() => removePhoto(index)}
                          className="absolute top-2 right-2 w-6 h-6 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center hover:bg-destructive/90 transition-colors shadow-lg"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </motion.div>
                    ))}
                    
                    {photos.length < 4 && (
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        disabled={uploading}
                        className="aspect-square rounded-xl border-2 border-dashed border-muted-foreground/30 flex flex-col items-center justify-center gap-2 hover:border-primary hover:bg-primary/5 transition-all disabled:opacity-50"
                      >
                        {uploading ? (
                          <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
                        ) : (
                          <>
                            <Upload className="w-6 h-6 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">Add Photo</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                  
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  
                  <p className="text-xs text-muted-foreground">
                    Add up to 4 photos • Max 5MB each
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="title" className="text-base font-semibold">Item Name *</Label>
                      <Input 
                        id="title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        placeholder="What are you swapping?"
                        className="mt-2 text-lg"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="description">Description (optional)</Label>
                      <Textarea 
                        id="description" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        placeholder="Tell us more about your item..."
                        rows={3}
                        className="mt-2"
                      />
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* Step 2: Category & Condition */}
            {step === 2 && (
              <div className="space-y-6">
                <Card className="p-6">
                  <Label className="text-base font-semibold mb-4 block">Select Category</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setCategory(cat)}
                        className={cn(
                          'flex items-center gap-3 p-4 rounded-xl border-2 transition-all',
                          category === cat
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-border hover:border-primary/50 hover:bg-muted/50'
                        )}
                      >
                        {CATEGORY_ICONS[cat]}
                        <span className="font-medium">{CATEGORY_LABELS[cat]}</span>
                      </button>
                    ))}
                  </div>
                </Card>

                <Card className="p-6">
                  <Label className="text-base font-semibold mb-4 block">Item Condition</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {conditions.map((cond) => (
                      <button
                        key={cond}
                        type="button"
                        onClick={() => setCondition(cond)}
                        className={cn(
                          'flex items-center gap-3 p-4 rounded-xl border-2 transition-all',
                          condition === cond
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-border hover:border-primary/50 hover:bg-muted/50'
                        )}
                      >
                        {CONDITION_ICONS[cond]}
                        <span className="font-medium">{CONDITION_LABELS[cond]}</span>
                      </button>
                    ))}
                  </div>
                </Card>
              </div>
            )}

            {/* Step 3: Value Range */}
            {step === 3 && (
              <Card className="p-6">
                <Label className="text-base font-semibold mb-2 block">Estimated Value</Label>
                <p className="text-sm text-muted-foreground mb-6">
                  Help others understand the value of your item
                </p>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm text-muted-foreground">Minimum ($)</Label>
                      <Input 
                        type="number" 
                        value={valueMin} 
                        onChange={(e) => setValueMin(e.target.value)} 
                        placeholder="0"
                        className="mt-2 text-lg text-center"
                      />
                    </div>
                    <div>
                      <Label className="text-sm text-muted-foreground">Maximum ($)</Label>
                      <Input 
                        type="number" 
                        value={valueMax} 
                        onChange={(e) => setValueMax(e.target.value)} 
                        placeholder="Optional"
                        className="mt-2 text-lg text-center"
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {[25, 50, 100, 200, 500].map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => {
                          setValueMin(String(val));
                          setValueMax(String(val * 1.5));
                        }}
                        className="px-4 py-2 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-colors text-sm font-medium"
                      >
                        ~${val}
                      </button>
                    ))}
                  </div>
                </div>
              </Card>
            )}

            {/* Step 4: Swap Preferences */}
            {step === 4 && (
              <Card className="p-6">
                <Label className="text-base font-semibold mb-2 block">What would you like in exchange?</Label>
                <p className="text-sm text-muted-foreground mb-6">
                  Select all categories you would accept
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  {categories.map((cat) => {
                    const isSelected = swapPreferences.includes(cat);
                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => toggleSwapPreference(cat)}
                        className={cn(
                          'flex items-center gap-3 p-4 rounded-xl border-2 transition-all relative',
                          isSelected
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-border hover:border-primary/50 hover:bg-muted/50'
                        )}
                      >
                        {CATEGORY_ICONS[cat]}
                        <span className="font-medium">{CATEGORY_LABELS[cat]}</span>
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-2 right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center"
                          >
                            <Check className="w-3 h-3 text-primary-foreground" />
                          </motion.div>
                        )}
                      </button>
                    );
                  })}
                </div>
                
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  {swapPreferences.length === 0 
                    ? 'Select at least one category'
                    : `${swapPreferences.length} categor${swapPreferences.length === 1 ? 'y' : 'ies'} selected`
                  }
                </p>
              </Card>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons - Fixed at bottom */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t border-border z-10">
          <div className="max-w-lg mx-auto flex gap-3">
            <Button
              variant="outline"
              onClick={handleBack}
              className="flex-1"
            >
              {step === 1 ? 'Cancel' : 'Back'}
            </Button>
            
            <Button
              onClick={handleNext}
              disabled={!canProceed() || createItem.isPending}
              className="flex-1 gradient-primary"
            >
              {createItem.isPending ? (
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
              ) : step === 4 ? (
                <Check className="w-4 h-4 mr-2" />
              ) : (
                <ArrowRight className="w-4 h-4 mr-2" />
              )}
              {step === 4 ? 'Create Item' : 'Continue'}
            </Button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
