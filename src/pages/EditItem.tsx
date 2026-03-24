import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '@/hooks/useAuth';
import { useItem, useUpdateItem } from '@/hooks/useItems';
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
  Loader2, 
  Upload, 
  X, 
  Check,
  Sparkles,
  Star,
  ThumbsUp,
  Zap,
  Save,
  ChevronRight
} from 'lucide-react';
import { ItemCondition, CONDITION_LABELS } from '@/types/database';
import { CATEGORIES, getCategoryLabel, type Category } from '@/config/categories';
import { cn } from '@/lib/utils';
import { LocationPickerMap } from '@/components/items/LocationPickerMap';

const conditions: ItemCondition[] = ['new', 'like_new', 'good', 'fair'];

const CONDITION_ICONS: Record<ItemCondition, React.ReactNode> = {
  new: <Sparkles className="w-4 h-4" />,
  like_new: <Star className="w-4 h-4" />,
  good: <ThumbsUp className="w-4 h-4" />,
  fair: <Zap className="w-4 h-4" />,
};

export default function EditItem() {
  const { id } = useParams<{ id: string }>();
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { data: item, isLoading: itemLoading } = useItem(id || '');
  const updateItem = useUpdateItem();
  const { checkImage, isChecking: isModerating } = useContentModeration();
  const fileInputRef = useRef<HTMLInputElement>(null);

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
  const [itemLatitude, setItemLatitude] = useState<number | null>(null);
  const [itemLongitude, setItemLongitude] = useState<number | null>(null);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/');
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (item) {
      setTitle(item.title);
      setDescription(item.description || '');
      setCategory(item.category);
      setSubcategory((item as any).subcategory || null);
      setCondition(item.condition);
      setSwapPreferences(item.swap_preferences || []);
      setValueMin(item.value_min?.toString() || '');
      setValueMax(item.value_max?.toString() || '');
      setPhotos(item.photos || []);
      setItemLatitude(item.latitude ?? null);
      setItemLongitude(item.longitude ?? null);
    }
  }, [item]);

  const selectedCategory = CATEGORIES.find(c => c.id === category);
  const selectedSubcategories = selectedCategory?.subcategories || [];

  const toggleSwapPreference = (catId: string) => {
    setSwapPreferences(prev =>
      prev.includes(catId) ? prev.filter(c => c !== catId) : [...prev, catId]
    );
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || !user) return;

    if (photos.length + files.length > 5) {
      toast({ variant: 'destructive', title: 'Maximum 5 photos' });
      return;
    }

    setUploading(true);
    const newPhotos: string[] = [];

    try {
      for (const file of Array.from(files)) {
        if (!file.type.startsWith('image/')) continue;
        if (file.size > 5 * 1024 * 1024) continue;

        const fileName = `${user.id}/${Date.now()}-${file.name}`;
        const { error: uploadError } = await supabase.storage
          .from('item-photos')
          .upload(fileName, file);

        if (uploadError) continue;

        const { data: urlData } = supabase.storage
          .from('item-photos')
          .getPublicUrl(fileName);

        const moderationResult = await checkImage(urlData.publicUrl, 'item_photo');
        if (!moderationResult.is_safe) {
          await supabase.storage.from('item-photos').remove([fileName]);
          continue;
        }

        newPhotos.push(urlData.publicUrl);
      }
      setPhotos(prev => [...prev, ...newPhotos]);
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const removePhoto = (index: number) => {
    setPhotos(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    if (!category || !condition || !id || !title.trim()) return;
    if (swapPreferences.length === 0) return;

    try {
      await updateItem.mutateAsync({
        id,
        title: title.trim(),
        description: description.trim() || null,
        category,
        subcategory: subcategory || null,
        condition,
        photos,
        swap_preferences: swapPreferences,
        value_min: parseInt(valueMin) || 0,
        value_max: valueMax ? parseInt(valueMax) : null,
        latitude: itemLatitude,
        longitude: itemLongitude,
      } as any);

      setIsComplete(true);
      setTimeout(() => navigate('/items'), 2000);
    } catch (error) {
      toast({ variant: 'destructive', title: 'Échec de la mise à jour' });
    }
  };

  if (authLoading || itemLoading) {
    return (
      <AppLayout showNav={false}>
        <div className="flex items-center justify-center h-full">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </AppLayout>
    );
  }

  if (isComplete) {
    return (
      <AppLayout showNav={false}>
        <div className="flex flex-col items-center justify-center h-full px-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="w-24 h-24 rounded-full bg-success flex items-center justify-center mb-6"
          >
            <Check className="w-12 h-12 text-success-foreground" strokeWidth={3} />
          </motion.div>
          <h2 className="text-xl font-display font-bold text-foreground mb-2">Article mis à jour !</h2>
          <p className="text-muted-foreground text-center text-sm">Vos modifications ont été enregistrées</p>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout showNav={false}>
      <div className="flex flex-col h-full overflow-hidden">
        <div className="flex-shrink-0 px-4 pt-4 pb-2 bg-background border-b border-border">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate('/items')}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-lg font-display font-bold flex-1">Modifier l'article</h1>
            <Button onClick={handleSubmit} disabled={updateItem.isPending} className="gradient-primary">
              {updateItem.isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : <><Save className="w-4 h-4 mr-2" />Sauvegarder</>}
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          {/* Photos */}
          <Card className="p-4">
            <Label className="text-sm font-semibold mb-3 block">Photos</Label>
            <div className="grid grid-cols-4 gap-2">
              {photos.map((photo, index) => (
                <div key={index} className="relative aspect-square rounded-lg overflow-hidden bg-muted">
                  <img src={photo} alt={`Photo ${index + 1}`} className="w-full h-full object-cover" />
                  <button type="button" onClick={() => removePhoto(index)} className="absolute top-1 right-1 w-5 h-5 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center">
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
              {photos.length < 5 && (
                <button type="button" onClick={() => fileInputRef.current?.click()} disabled={uploading || isModerating} className="aspect-square rounded-lg border-2 border-dashed border-muted-foreground/30 flex items-center justify-center hover:border-primary transition-colors">
                  {uploading || isModerating ? <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" /> : <Upload className="w-5 h-5 text-muted-foreground" />}
                </button>
              )}
            </div>
            <input ref={fileInputRef} type="file" accept="image/*" multiple onChange={handleFileUpload} className="hidden" />
          </Card>

          {/* Title & Description */}
          <Card className="p-4 space-y-3">
            <div>
              <Label htmlFor="title" className="text-sm font-semibold">Titre</Label>
              <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="description" className="text-sm font-semibold">Description</Label>
              <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows={2} className="mt-1" />
            </div>
          </Card>

          {/* Category */}
          <Card className="p-4">
            <Label className="text-sm font-semibold mb-3 block">Catégorie</Label>
            <div className="grid grid-cols-2 gap-2 max-h-[250px] overflow-y-auto">
              {CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => { setCategory(cat.id); setSubcategory(null); }}
                    className={cn(
                      'flex items-center gap-2 p-3 rounded-lg border transition-all text-sm text-left',
                      category === cat.id ? 'border-primary bg-primary/10 text-primary' : 'border-border hover:border-primary/50'
                    )}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span className="font-medium leading-tight">{cat.name}</span>
                  </button>
                );
              })}
            </div>
          </Card>

          {/* Subcategory */}
          {selectedCategory && selectedSubcategories.length > 0 && (
            <Card className="p-4">
              <Label className="text-sm font-semibold mb-3 block">Sous-catégorie</Label>
              <div className="space-y-2">
                {selectedSubcategories.map((sub) => (
                  <button
                    key={sub.id}
                    type="button"
                    onClick={() => setSubcategory(sub.id)}
                    className={cn(
                      'flex items-center justify-between w-full p-3 rounded-lg border transition-all text-sm',
                      subcategory === sub.id ? 'border-primary bg-primary/10 text-primary' : 'border-border hover:border-primary/50'
                    )}
                  >
                    <span className="font-medium">{sub.name}</span>
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </button>
                ))}
              </div>
            </Card>
          )}

          {/* Condition */}
          <Card className="p-4">
            <Label className="text-sm font-semibold mb-3 block">État</Label>
            <div className="grid grid-cols-2 gap-2">
              {conditions.map((cond) => (
                <button
                  key={cond}
                  type="button"
                  onClick={() => setCondition(cond)}
                  className={cn(
                    'flex items-center gap-2 p-3 rounded-lg border transition-all text-sm',
                    condition === cond ? 'border-primary bg-primary/10 text-primary' : 'border-border hover:border-primary/50'
                  )}
                >
                  {CONDITION_ICONS[cond]}
                  <span className="font-medium">{CONDITION_LABELS[cond]}</span>
                </button>
              ))}
            </div>
          </Card>

          {/* Value Range */}
          <Card className="p-4">
            <Label className="text-sm font-semibold mb-3 block">Fourchette de prix (DT)</Label>
            <div className="grid grid-cols-2 gap-3">
              <Input type="number" value={valueMin} onChange={(e) => setValueMin(e.target.value)} placeholder="Min" />
              <Input type="number" value={valueMax} onChange={(e) => setValueMax(e.target.value)} placeholder="Max" />
            </div>
          </Card>

          {/* Swap Preferences */}
          <Card className="p-4">
            <Label className="text-sm font-semibold mb-3 block">Recherche en échange</Label>
            <div className="grid grid-cols-2 gap-2">
              {CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => toggleSwapPreference(cat.id)}
                    className={cn(
                      'flex items-center gap-2 p-3 rounded-lg border transition-all text-sm text-left',
                      swapPreferences.includes(cat.id) ? 'border-primary bg-primary/10 text-primary' : 'border-border hover:border-primary/50'
                    )}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span className="font-medium leading-tight">{cat.name}</span>
                  </button>
                );
              })}
            </div>
          </Card>

          {/* Location */}
          <Card className="p-4">
            <Label className="text-sm font-semibold mb-3 block">Emplacement de l'article</Label>
            <LocationPickerMap
              latitude={itemLatitude}
              longitude={itemLongitude}
              onChange={(lat, lng) => {
                setItemLatitude(lat);
                setItemLongitude(lng);
              }}
            />
          </Card>

          <div className="h-4" />
        </div>
      </div>
    </AppLayout>
  );
}
