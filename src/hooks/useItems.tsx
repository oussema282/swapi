import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Item, ItemCategory, ItemCondition } from '@/types/database';
import { useAuth } from './useAuth';

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
      return data as Item[];
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
      return data as Item;
    },
    enabled: !!id,
  });
}

interface CreateItemData {
  title: string;
  description: string | null;
  category: ItemCategory;
  condition: ItemCondition;
  photos: string[];
  swap_preferences: ItemCategory[];
  value_min: number;
  value_max: number | null;
}

export function useCreateItem() {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  return useMutation({
    mutationFn: async (data: CreateItemData) => {
      if (!user) throw new Error('Not authenticated');

      const { data: item, error } = await supabase
        .from('items')
        .insert({
          ...data,
          user_id: user.id,
        })
        .select()
        .single();

      if (error) throw error;
      return item as Item;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['my-items'] });
    },
  });
}

export function useUpdateItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, ...data }: Partial<Item> & { id: string }) => {
      const { data: item, error } = await supabase
        .from('items')
        .update(data)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return item as Item;
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
