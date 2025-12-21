import { useState, useEffect } from 'react';
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
import { ArrowLeft, Loader2 } from 'lucide-react';
import { ItemCategory, ItemCondition, CATEGORY_LABELS, CONDITION_LABELS } from '@/types/database';

const categories: ItemCategory[] = ['games', 'electronics', 'clothes', 'books', 'home_garden', 'sports', 'other'];
const conditions: ItemCondition[] = ['new', 'like_new', 'good', 'fair'];

export default function NewItem() {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const createItem = useCreateItem();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<ItemCategory>('other');
  const [condition, setCondition] = useState<ItemCondition>('good');
  const [swapPreferences, setSwapPreferences] = useState<ItemCategory[]>([]);
  const [valueMin, setValueMin] = useState('');
  const [valueMax, setValueMax] = useState('');

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
        photos: [],
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
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {categories.map(cat => (
                    <SelectItem key={cat} value={cat}>{CATEGORY_LABELS[cat]}</SelectItem>
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
            <Label className="mb-3 block">What would you accept in exchange? *</Label>
            <div className="grid grid-cols-2 gap-3">
              {categories.map(cat => (
                <div key={cat} className="flex items-center space-x-2">
                  <Checkbox id={cat} checked={swapPreferences.includes(cat)} onCheckedChange={() => toggleSwapPreference(cat)} />
                  <label htmlFor={cat} className="text-sm cursor-pointer">{CATEGORY_LABELS[cat]}</label>
                </div>
              ))}
            </div>
          </Card>

          <Button type="submit" className="w-full gradient-primary" disabled={createItem.isPending}>
            {createItem.isPending ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
            Create Item
          </Button>
        </form>
      </div>
    </AppLayout>
  );
}
