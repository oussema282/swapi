import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/hooks/useAuth';
import { useCreateItem } from '@/hooks/useItems';
import { useItemLimit } from '@/hooks/useEntitlements';
import { useContentModeration } from '@/hooks/useContentModeration';
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
  Sparkles,
  Star,
  ThumbsUp,
  Zap,
  Crown,
  ShieldAlert,
  ChevronRight
} from 'lucide-react';
import { ItemCondition, CONDITION_LABELS } from '@/types/database';
import { CATEGORIES, getCategoryLabel, getCategoryIcon, type Category, type Subcategory } from '@/config/categories';
import { cn } from '@/lib/utils';

const conditions: ItemCondition[] = ['new', 'like_new', 'good', 'fair'];

const CONDITION_ICONS: Record<ItemCondition, React.ReactNode> = {
  new: <Sparkles className="w-5 h-5" />,
  like_new: <Star className="w-5 h-5" />,
  good: <ThumbsUp className="w-5 h-5" />,
  fair: <Zap className="w-5 h-5" />,
};

const STEPS = [
  { id: 1, title: 'Photos & Titre', description: 'Montrez votre article' },
  { id: 2, title: 'Catégorie & État', description: 'Décrivez votre article' },
  { id: 3, title: 'Fourchette de prix', description: 'Estimez la valeur' },
  { id: 4, title: 'Préférences d\'échange', description: 'Que voulez-vous ?' },
];

export default function NewItem() {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const createItem = useCreateItem();
  const { canAddItem, itemCount, limit, isPro, isLoading: limitLoading } = useItemLimit();
  const { checkImage, isChecking: isModerating } = useContentModeration();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [step, setStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<string | null>(null);
  const [subcategory, setSubcategory] = useState<string | null>(null);
  const [condition, setCondition] = useState<ItemCondition | null>(null);
  const [swapPreferences, setSwapPreferences] = useState<string[]>([]);
  const [valueMin, setValueMin] = useState('');
  const [valueMax, setValueMax] = useState('');
  const [photos, setPhotos] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/');
    }
    if (!authLoading && !limitLoading && user && !canAddItem) {
      toast({ 
        variant: 'destructive', 
        title: 'Limite atteinte',
        description: `Les utilisateurs gratuits ne peuvent avoir que ${limit} articles. Passez à Pro pour des articles illimités !`
      });
      navigate('/checkout');
    }
  }, [user, authLoading, limitLoading, navigate, canAddItem, limit, toast]);

  const toggleSwapPreference = (catId: string) => {
    setSwapPreferences(prev =>
      prev.includes(catId) ? prev.filter(c => c !== catId) : [...prev, catId]
    );
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || !user) return;

    if (photos.length + files.length > 4) {
      toast({ variant: 'destructive', title: 'Maximum 4 photos autorisées' });
      return;
    }

    setUploading(true);
    const newPhotos: string[] = [];

    try {
      for (const file of Array.from(files)) {
        if (!file.type.startsWith('image/')) {
          toast({ variant: 'destructive', title: 'Seules les images sont autorisées' });
          continue;
        }

        if (file.size > 5 * 1024 * 1024) {
          toast({ variant: 'destructive', title: 'L\'image doit faire moins de 5 Mo' });
          continue;
        }

        const fileName = `${user.id}/${Date.now()}-${file.name}`;
        
        const { error: uploadError } = await supabase.storage
          .from('item-photos')
          .upload(fileName, file);

        if (uploadError) {
          console.error('Upload error:', uploadError);
          toast({ variant: 'destructive', title: 'Échec du téléchargement' });
          continue;
        }

        const { data: urlData } = supabase.storage
          .from('item-photos')
          .getPublicUrl(fileName);

        const moderationResult = await checkImage(urlData.publicUrl, 'item_photo');
        
        if (!moderationResult.is_safe) {
          await supabase.storage.from('item-photos').remove([fileName]);
          toast({ 
            variant: 'destructive', 
            title: 'Image bloquée',
            description: `Cette image ne peut pas être téléchargée : ${moderationResult.violation_type || 'violation de politique'}`
          });
          continue;
        }

        newPhotos.push(urlData.publicUrl);
      }

      setPhotos(prev => [...prev, ...newPhotos]);
    } catch (error) {
      console.error('Upload error:', error);
      toast({ variant: 'destructive', title: 'Échec du téléchargement' });
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
      case 2: return category !== null && subcategory !== null && condition !== null;
      case 3: return true;
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
        subcategory: subcategory || null,
        condition,
        photos,
        swap_preferences: swapPreferences,
        value_min: parseInt(valueMin) || 0,
        value_max: valueMax ? parseInt(valueMax) : null,
      });

      setIsComplete(true);
      
      setTimeout(() => {
        navigate('/items');
      }, 2500);
    } catch (error) {
      toast({ variant: 'destructive', title: 'Échec de la création' });
    }
  };

  // Get current category object
  const selectedCategory = CATEGORIES.find(c => c.id === category);
  const selectedSubcategories = selectedCategory?.subcategories || [];

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
            Article créé !
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground text-center"
          >
            Votre article est en ligne et prêt à être échangé
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
                  <Label className="text-base font-semibold mb-4 block">Télécharger des photos</Label>
                  
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {photos.map((photo, index) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="relative aspect-square rounded-xl overflow-hidden bg-muted"
                      >
                        <img src={photo} alt={`Photo ${index + 1}`} className="w-full h-full object-cover" />
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
                        disabled={uploading || isModerating}
                        className="aspect-square rounded-xl border-2 border-dashed border-muted-foreground/30 flex flex-col items-center justify-center gap-2 hover:border-primary hover:bg-primary/5 transition-all disabled:opacity-50"
                      >
                        {uploading || isModerating ? (
                          <div className="flex flex-col items-center gap-1">
                            <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">
                              {isModerating ? 'Vérification...' : 'Téléchargement...'}
                            </span>
                          </div>
                        ) : (
                          <>
                            <Upload className="w-6 h-6 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">Ajouter</span>
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
                    Jusqu'à 4 photos • Max 5 Mo chacune
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="title" className="text-base font-semibold">Nom de l'article *</Label>
                      <Input 
                        id="title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        placeholder="Que souhaitez-vous échanger ?"
                        className="mt-2 text-lg"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="description">Description (optionnel)</Label>
                      <Textarea 
                        id="description" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        placeholder="Décrivez votre article..."
                        rows={3}
                        className="mt-2"
                      />
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* Step 2: Category & Subcategory & Condition */}
            {step === 2 && (
              <div className="space-y-6">
                {/* Category Selection */}
                <Card className="p-6">
                  <Label className="text-base font-semibold mb-4 block">Catégorie</Label>
                  <div className="grid grid-cols-2 gap-3 max-h-[300px] overflow-y-auto pr-1">
                    {CATEGORIES.map((cat) => {
                      const Icon = cat.icon;
                      return (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => {
                            setCategory(cat.id);
                            setSubcategory(null);
                          }}
                          className={cn(
                            'flex items-center gap-3 p-3 rounded-xl border-2 transition-all text-left',
                            category === cat.id
                              ? 'border-primary bg-primary/10 text-primary'
                              : 'border-border hover:border-primary/50 hover:bg-muted/50'
                          )}
                        >
                          <Icon className="w-5 h-5 flex-shrink-0" />
                          <span className="font-medium text-sm leading-tight">{cat.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </Card>

                {/* Subcategory Selection */}
                {selectedCategory && selectedSubcategories.length > 0 && (
                  <Card className="p-6">
                    <Label className="text-base font-semibold mb-4 block">
                      Sous-catégorie de {selectedCategory.name}
                    </Label>
                    <div className="space-y-2">
                      {selectedSubcategories.map((sub) => (
                        <button
                          key={sub.id}
                          type="button"
                          onClick={() => setSubcategory(sub.id)}
                          className={cn(
                            'flex items-center justify-between w-full p-3 rounded-xl border-2 transition-all text-left',
                            subcategory === sub.id
                              ? 'border-primary bg-primary/10 text-primary'
                              : 'border-border hover:border-primary/50 hover:bg-muted/50'
                          )}
                        >
                          <span className="font-medium text-sm">{sub.name}</span>
                          <ChevronRight className="w-4 h-4 opacity-50" />
                        </button>
                      ))}
                    </div>
                  </Card>
                )}

                {/* Allow "autres" category without subcategory */}
                {category === 'autres' && subcategory === null && (
                  (() => { setSubcategory('autres'); return null; })()
                )}

                {/* Condition */}
                <Card className="p-6">
                  <Label className="text-base font-semibold mb-4 block">État de l'article</Label>
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
                <Label className="text-base font-semibold mb-2 block">Valeur estimée</Label>
                <p className="text-sm text-muted-foreground mb-6">
                  Aidez les autres à comprendre la valeur de votre article
                </p>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm text-muted-foreground">Minimum (DT)</Label>
                      <Input 
                        type="number" 
                        value={valueMin} 
                        onChange={(e) => setValueMin(e.target.value)} 
                        placeholder="0"
                        className="mt-2 text-lg text-center"
                      />
                    </div>
                    <div>
                      <Label className="text-sm text-muted-foreground">Maximum (DT)</Label>
                      <Input 
                        type="number" 
                        value={valueMax} 
                        onChange={(e) => setValueMax(e.target.value)} 
                        placeholder="Optionnel"
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
                        ~{val} DT
                      </button>
                    ))}
                  </div>
                </div>
              </Card>
            )}

            {/* Step 4: Swap Preferences */}
            {step === 4 && (
              <Card className="p-6">
                <Label className="text-base font-semibold mb-2 block">Que souhaitez-vous en échange ?</Label>
                <p className="text-sm text-muted-foreground mb-6">
                  Sélectionnez toutes les catégories que vous accepteriez
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  {CATEGORIES.map((cat) => {
                    const isSelected = swapPreferences.includes(cat.id);
                    const Icon = cat.icon;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => toggleSwapPreference(cat.id)}
                        className={cn(
                          'flex items-center gap-3 p-3 rounded-xl border-2 transition-all relative text-left',
                          isSelected
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-border hover:border-primary/50 hover:bg-muted/50'
                        )}
                      >
                        <Icon className="w-5 h-5 flex-shrink-0" />
                        <span className="font-medium text-sm leading-tight">{cat.name}</span>
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
                    ? 'Sélectionnez au moins une catégorie'
                    : `${swapPreferences.length} catégorie${swapPreferences.length === 1 ? '' : 's'} sélectionnée${swapPreferences.length === 1 ? '' : 's'}`
                  }
                </p>
              </Card>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t border-border z-10">
          <div className="max-w-lg mx-auto flex gap-3">
            <Button
              variant="outline"
              onClick={handleBack}
              className="flex-1"
            >
              {step === 1 ? 'Annuler' : 'Retour'}
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
              {step === 4 ? 'Créer l\'article' : 'Continuer'}
            </Button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
