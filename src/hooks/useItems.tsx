import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Item } from '@/types/database';
import { useAuth } from './useAuth';

interface CreateItemData {
  title: string;
  description: string | null;
  category: string;
  subcategory?: string | null;
  condition: string;
  photos: string[];
  swap_preferences: string[];
  value_min: number;
  value_max: number | null;
}

export function useMyItems() {
  const { user } = useAuth();

  return useQuery({
    queryKey: ['my-items', user?.id],
    queryFn: async () => {
      if (!user) return [];
      
      const { data, error } = await supabase
        .from('items')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data as unknown as Item[];
    },
    enabled: !!user,
  });
}

export function useItem(id: string) {
  return useQuery({
    queryKey: ['item', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('items')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      return data as unknown as Item;
    },
    enabled: !!id,
  });
}

export function useCreateItem() {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  return useMutation({
    mutationFn: async (data: CreateItemData & { latitude?: number; longitude?: number }) => {
      if (!user) throw new Error('Not authenticated');

      const { data: profile } = await supabase
        .from('profiles')
        .select('latitude, longitude')
        .eq('user_id', user.id)
        .single();

      const { data: item, error } = await supabase
        .from('items')
        .insert({
          title: data.title,
          description: data.description,
          category: data.category as any,
          subcategory: data.subcategory || null,
          condition: data.condition as any,
          photos: data.photos,
          swap_preferences: data.swap_preferences as any,
          value_min: data.value_min,
          value_max: data.value_max,
          user_id: user.id,
          latitude: data.latitude ?? profile?.latitude ?? null,
          longitude: data.longitude ?? profile?.longitude ?? null,
        } as any)
        .select()
        .single();

      if (error) throw error;
      return item as unknown as Item;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['my-items'] });
      queryClient.invalidateQueries({ queryKey: ['map-items'] });
    },
  });
}

export function useUpdateItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, ...data }: Partial<Item> & { id: string }) => {
      const { data: item, error } = await supabase
        .from('items')
        .update(data as any)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return item as unknown as Item;
    },
    onSuccess: (item) => {
      queryClient.invalidateQueries({ queryKey: ['my-items'] });
      queryClient.invalidateQueries({ queryKey: ['item', item.id] });
    },
  });
}

export function useDeleteItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('items')
        .delete()
        .eq('id', id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['my-items'] });
    },
  });
}

export function useUnarchiveItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const { data: item, error } = await supabase
        .from('items')
        .update({ is_archived: false })
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return item as unknown as Item;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['my-items'] });
      queryClient.invalidateQueries({ queryKey: ['map-items'] });
    },
  });
}

export function useItemLimit() {
  // Re-exported for backward compatibility
}
