import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useCreateItem } from '@/hooks/useItems';
import { AppLayout } from '@/components/layout/AppLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { 
  ArrowLeft, 
  Loader2, 
  Upload, 
  X, 
  Image as ImageIcon,
  Gamepad2,
  Smartphone,
  Shirt,
  BookOpen,
  Home,
  Dumbbell,
  Package
} from 'lucide-react';
import { ItemCategory, ItemCondition, CATEGORY_LABELS, CONDITION_LABELS } from '@/types/database';

const categories: ItemCategory[] = ['games', 'electronics', 'clothes', 'books', 'home_garden', 'sports', 'other'];
const conditions: ItemCondition[] = ['new', 'like_new', 'good', 'fair'];

// Category icons mapping
const CATEGORY_ICONS: Record<ItemCategory, React.ReactNode> = {
  games: <Gamepad2 className="w-4 h-4" />,
  electronics: <Smartphone className="w-4 h-4" />,
  clothes: <Shirt className="w-4 h-4" />,
  books: <BookOpen className="w-4 h-4" />,
  home_garden: <Home className="w-4 h-4" />,
  sports: <Dumbbell className="w-4 h-4" />,
  other: <Package className="w-4 h-4" />,
};

export default function NewItem() {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const createItem = useCreateItem();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<ItemCategory>('other');
  const [condition, setCondition] = useState<ItemCondition>('good');
  const [swapPreferences, setSwapPreferences] = useState<ItemCategory[]>([]);
  const [valueMin, setValueMin] = useState('');
  const [valueMax, setValueMax] = useState('');
  const [photos, setPhotos] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    }
  }, [user, authLoading, navigate]);

  const toggleSwapPreference = (cat: ItemCategory) => {
    setSwapPreferences(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || !user) return;

    if (photos.length + files.length > 5) {
      toast({ variant: 'destructive', title: 'Maximum 5 photos allowed' });
      return;
    }

    setUploading(true);
    const newPhotos: string[] = [];

    try {
      for (const file of Array.from(files)) {
        // Validate file type
        if (!file.type.startsWith('image/')) {
          toast({ variant: 'destructive', title: 'Only images are allowed' });
          continue;
        }

        // Validate file size (max 5MB)
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
      if (newPhotos.length > 0) {
        toast({ title: `${newPhotos.length} photo(s) uploaded!` });
      }
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      toast({ variant: 'destructive', title: 'Title is required' });
      return;
    }

    if (swapPreferences.length === 0) {
      toast({ variant: 'destructive', title: 'Select at least one swap preference' });
      return;
    }

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

      toast({ title: 'Item created!' });
      navigate('/items');
    } catch (error) {
      toast({ variant: 'destructive', title: 'Failed to create item' });
    }
  };

  return (
    <AppLayout showNav={false}>
      <div className="max-w-lg mx-auto px-4 py-4">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-display font-bold">Add New Item</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Photo Upload Section */}
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <ImageIcon className="w-5 h-5 text-primary" />
              <Label className="font-semibold">Upload Photos</Label>
              <span className="text-xs text-muted-foreground">(up to 5)</span>
            </div>
            
            <div className="grid grid-cols-5 gap-2 mb-3">
              {photos.map((photo, index) => (
                <div key={index} className="relative aspect-square rounded-lg overflow-hidden bg-muted">
                  <img src={photo} alt={`Upload ${index + 1}`} className="w-full h-full object-cover" />
                  <button
                    type="button"
                    onClick={() => removePhoto(index)}
                    className="absolute top-1 right-1 w-5 h-5 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center hover:bg-destructive/90 transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
              
              {photos.length < 5 && (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploading}
                  className="aspect-square rounded-lg border-2 border-dashed border-muted-foreground/30 flex flex-col items-center justify-center gap-1 hover:border-primary hover:bg-primary/5 transition-colors disabled:opacity-50"
                >
                  {uploading ? (
                    <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
                  ) : (
                    <>
                      <Upload className="w-5 h-5 text-muted-foreground" />
                      <span className="text-[10px] text-muted-foreground">Add</span>
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
              Tip: Add clear photos of your item from multiple angles for better matches!
            </p>
          </Card>

          <div className="space-y-2">
            <Label htmlFor="title">Title *</Label>
            <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="What are you swapping?" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe your item..." rows={3} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Category</Label>
              <Select value={category} onValueChange={(v) => setCategory(v as ItemCategory)}>
                <SelectTrigger>
                  <SelectValue>
                    <div className="flex items-center gap-2">
                      {CATEGORY_ICONS[category]}
                      <span>{CATEGORY_LABELS[category]}</span>
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {categories.map(cat => (
                    <SelectItem key={cat} value={cat}>
                      <div className="flex items-center gap-2">
                        {CATEGORY_ICONS[cat]}
                        <span>{CATEGORY_LABELS[cat]}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Condition</Label>
              <Select value={condition} onValueChange={(v) => setCondition(v as ItemCondition)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {conditions.map(cond => (
                    <SelectItem key={cond} value={cond}>{CONDITION_LABELS[cond]}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Min Value ($)</Label>
              <Input type="number" value={valueMin} onChange={(e) => setValueMin(e.target.value)} placeholder="0" />
            </div>
            <div className="space-y-2">
              <Label>Max Value ($)</Label>
              <Input type="number" value={valueMax} onChange={(e) => setValueMax(e.target.value)} placeholder="Optional" />
            </div>
          </div>

          <Card className="p-4">
            <Label className="mb-3 block font-semibold">What would you accept in exchange? *</Label>
            <div className="grid grid-cols-2 gap-3">
              {categories.map(cat => (
                <div key={cat} className="flex items-center space-x-2">
                  <Checkbox id={cat} checked={swapPreferences.includes(cat)} onCheckedChange={() => toggleSwapPreference(cat)} />
                  <label htmlFor={cat} className="flex items-center gap-2 text-sm cursor-pointer">
                    {CATEGORY_ICONS[cat]}
                    <span>{CATEGORY_LABELS[cat]}</span>
                  </label>
                </div>
              ))}
            </div>
          </Card>

          <Button type="submit" className="w-full gradient-primary" disabled={createItem.isPending || uploading}>
            {createItem.isPending ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
            Create Item
          </Button>
        </form>
      </div>
    </AppLayout>
  );
}
