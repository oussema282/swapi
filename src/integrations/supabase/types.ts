export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      algorithm_policies: {
        Row: {
          active: boolean | null
          created_at: string
          created_by: string | null
          description: string | null
          exploration_policy: Json
          id: string
          policy_version: string
          reciprocal_policy: Json
          weights: Json
        }
        Insert: {
          active?: boolean | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          exploration_policy: Json
          id?: string
          policy_version: string
          reciprocal_policy: Json
          weights: Json
        }
        Update: {
          active?: boolean | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          exploration_policy?: Json
          id?: string
          policy_version?: string
          reciprocal_policy?: Json
          weights?: Json
        }
        Relationships: []
      }
      algorithm_policy_metrics: {
        Row: {
          created_at: string
          id: string
          metric_snapshot: Json
          period_end: string
          period_start: string
          policy_version: string
        }
        Insert: {
          created_at?: string
          id?: string
          metric_snapshot: Json
          period_end: string
          period_start: string
          policy_version: string
        }
        Update: {
          created_at?: string
          id?: string
          metric_snapshot?: Json
          period_end?: string
          period_start?: string
          policy_version?: string
        }
        Relationships: [
          {
            foreignKeyName: "algorithm_policy_metrics_policy_version_fkey"
            columns: ["policy_version"]
            isOneToOne: false
            referencedRelation: "algorithm_policies"
            referencedColumns: ["policy_version"]
          },
        ]
      }
      algorithm_policy_rollouts: {
        Row: {
          created_at: string
          enabled: boolean | null
          ended_at: string | null
          id: string
          policy_version: string
          started_at: string | null
          traffic_percentage: number | null
        }
        Insert: {
          created_at?: string
          enabled?: boolean | null
          ended_at?: string | null
          id?: string
          policy_version: string
          started_at?: string | null
          traffic_percentage?: number | null
        }
        Update: {
          created_at?: string
          enabled?: boolean | null
          ended_at?: string | null
          id?: string
          policy_version?: string
          started_at?: string | null
          traffic_percentage?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "algorithm_policy_rollouts_policy_version_fkey"
            columns: ["policy_version"]
            isOneToOne: false
            referencedRelation: "algorithm_policies"
            referencedColumns: ["policy_version"]
          },
        ]
      }
      content_moderation_logs: {
        Row: {
          action_taken: string
          analysis_result: Json | null
          confidence_score: number | null
          content_type: string
          content_url: string
          created_at: string
          id: string
          is_safe: boolean
          review_notes: string | null
          reviewed_by: string | null
          user_id: string
          violation_type: string | null
        }
        Insert: {
          action_taken: string
          analysis_result?: Json | null
          confidence_score?: number | null
          content_type: string
          content_url: string
          created_at?: string
          id?: string
          is_safe?: boolean
          review_notes?: string | null
          reviewed_by?: string | null
          user_id: string
          violation_type?: string | null
        }
        Update: {
          action_taken?: string
          analysis_result?: Json | null
          confidence_score?: number | null
          content_type?: string
          content_url?: string
          created_at?: string
          id?: string
          is_safe?: boolean
          review_notes?: string | null
          reviewed_by?: string | null
          user_id?: string
          violation_type?: string | null
        }
        Relationships: []
      }
      daily_usage: {
        Row: {
          created_at: string
          deal_invites_count: number
          id: string
          map_uses_count: number
          searches_count: number
          swipes_count: number
          updated_at: string
          usage_date: string
          user_id: string
        }
        Insert: {
          created_at?: string
          deal_invites_count?: number
          id?: string
          map_uses_count?: number
          searches_count?: number
          swipes_count?: number
          updated_at?: string
          usage_date?: string
          user_id: string
        }
        Update: {
          created_at?: string
          deal_invites_count?: number
          id?: string
          map_uses_count?: number
          searches_count?: number
          swipes_count?: number
          updated_at?: string
          usage_date?: string
          user_id?: string
        }
        Relationships: []
      }
      deal_invites: {
        Row: {
          attempt: number
          created_at: string
          id: string
          receiver_item_id: string
          responded_at: string | null
          sender_item_id: string
          status: string
        }
        Insert: {
          attempt?: number
          created_at?: string
          id?: string
          receiver_item_id: string
          responded_at?: string | null
          sender_item_id: string
          status?: string
        }
        Update: {
          attempt?: number
          created_at?: string
          id?: string
          receiver_item_id?: string
          responded_at?: string | null
          sender_item_id?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "deal_invites_receiver_item_id_fkey"
            columns: ["receiver_item_id"]
            isOneToOne: false
            referencedRelation: "items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "deal_invites_sender_item_id_fkey"
            columns: ["sender_item_id"]
            isOneToOne: false
            referencedRelation: "items"
            referencedColumns: ["id"]
          },
        ]
      }
      feature_upgrades: {
        Row: {
          bonus_amount: number
          created_at: string
          expires_at: string | null
          feature_type: string
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          bonus_amount?: number
          created_at?: string
          expires_at?: string | null
          feature_type: string
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          bonus_amount?: number
          created_at?: string
          expires_at?: string | null
          feature_type?: string
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      fraud_detection_runs: {
        Row: {
          actions_taken: Json
          completed_at: string | null
          created_at: string
          high_risk_found: number
          id: string
          run_type: string
          triggered_by: string | null
          users_analyzed: number
        }
        Insert: {
          actions_taken?: Json
          completed_at?: string | null
          created_at?: string
          high_risk_found?: number
          id?: string
          run_type: string
          triggered_by?: string | null
          users_analyzed?: number
        }
        Update: {
          actions_taken?: Json
          completed_at?: string | null
          created_at?: string
          high_risk_found?: number
          id?: string
          run_type?: string
          triggered_by?: string | null
          users_analyzed?: number
        }
        Relationships: []
      }
      item_ratings: {
        Row: {
          alpha: number
          beta: number
          created_at: string
          dislikes_count: number
          id: string
          item_id: string
          last_calculated_at: string
          likes_count: number
          rating: number
          successful_exchanges: number
          total_interactions: number
          updated_at: string
        }
        Insert: {
          alpha?: number
          beta?: number
          created_at?: string
          dislikes_count?: number
          id?: string
          item_id: string
          last_calculated_at?: string
          likes_count?: number
          rating?: number
          successful_exchanges?: number
          total_interactions?: number
          updated_at?: string
        }
        Update: {
          alpha?: number
          beta?: number
          created_at?: string
          dislikes_count?: number
          id?: string
          item_id?: string
          last_calculated_at?: string
          likes_count?: number
          rating?: number
          successful_exchanges?: number
          total_interactions?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "item_ratings_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: true
            referencedRelation: "items"
            referencedColumns: ["id"]
          },
        ]
      }
      items: {
        Row: {
          boost_expires_at: string | null
          category: Database["public"]["Enums"]["item_category"]
          condition: Database["public"]["Enums"]["item_condition"]
          created_at: string
          description: string | null
          flagged_reason: string | null
          id: string
          is_active: boolean
          is_archived: boolean
          is_flagged: boolean
          latitude: number | null
          longitude: number | null
          photos: string[] | null
          reciprocal_boost: number | null
          swap_preferences: Database["public"]["Enums"]["item_category"][]
          title: string
          updated_at: string
          user_id: string
          value_max: number | null
          value_min: number | null
        }
        Insert: {
          boost_expires_at?: string | null
          category: Database["public"]["Enums"]["item_category"]
          condition: Database["public"]["Enums"]["item_condition"]
          created_at?: string
          description?: string | null
          flagged_reason?: string | null
          id?: string
          is_active?: boolean
          is_archived?: boolean
          is_flagged?: boolean
          latitude?: number | null
          longitude?: number | null
          photos?: string[] | null
          reciprocal_boost?: number | null
          swap_preferences?: Database["public"]["Enums"]["item_category"][]
          title: string
          updated_at?: string
          user_id: string
          value_max?: number | null
          value_min?: number | null
        }
        Update: {
          boost_expires_at?: string | null
          category?: Database["public"]["Enums"]["item_category"]
          condition?: Database["public"]["Enums"]["item_condition"]
          created_at?: string
          description?: string | null
          flagged_reason?: string | null
          id?: string
          is_active?: boolean
          is_archived?: boolean
          is_flagged?: boolean
          latitude?: number | null
          longitude?: number | null
          photos?: string[] | null
          reciprocal_boost?: number | null
          swap_preferences?: Database["public"]["Enums"]["item_category"][]
          title?: string
          updated_at?: string
          user_id?: string
          value_max?: number | null
          value_min?: number | null
        }
        Relationships: []
      }
      matches: {
        Row: {
          completed_at: string | null
          confirmed_by_user_a: boolean
          confirmed_by_user_b: boolean
          created_at: string
          id: string
          is_completed: boolean
          item_a_id: string
          item_b_id: string
        }
        Insert: {
          completed_at?: string | null
          confirmed_by_user_a?: boolean
          confirmed_by_user_b?: boolean
          created_at?: string
          id?: string
          is_completed?: boolean
          item_a_id: string
          item_b_id: string
        }
        Update: {
          completed_at?: string | null
          confirmed_by_user_a?: boolean
          confirmed_by_user_b?: boolean
          created_at?: string
          id?: string
          is_completed?: boolean
          item_a_id?: string
          item_b_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "matches_item_a_id_fkey"
            columns: ["item_a_id"]
            isOneToOne: false
            referencedRelation: "items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "matches_item_b_id_fkey"
            columns: ["item_b_id"]
            isOneToOne: false
            referencedRelation: "items"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          content: string
          created_at: string
          id: string
          match_id: string
          sender_id: string
          status: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          match_id: string
          sender_id: string
          status?: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          match_id?: string
          sender_id?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "messages_match_id_fkey"
            columns: ["match_id"]
            isOneToOne: false
            referencedRelation: "matches"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string
          display_name: string
          id: string
          last_seen: string | null
          latitude: number | null
          location: string | null
          longitude: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          display_name: string
          id?: string
          last_seen?: string | null
          latitude?: number | null
          location?: string | null
          longitude?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          display_name?: string
          id?: string
          last_seen?: string | null
          latitude?: number | null
          location?: string | null
          longitude?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      reports: {
        Row: {
          admin_notes: string | null
          created_at: string
          description: string | null
          id: string
          reason: string
          report_type: string
          reporter_id: string
          resolved_at: string | null
          resolved_by: string | null
          status: string
          target_id: string
        }
        Insert: {
          admin_notes?: string | null
          created_at?: string
          description?: string | null
          id?: string
          reason: string
          report_type: string
          reporter_id: string
          resolved_at?: string | null
          resolved_by?: string | null
          status?: string
          target_id: string
        }
        Update: {
          admin_notes?: string | null
          created_at?: string
          description?: string | null
          id?: string
          reason?: string
          report_type?: string
          reporter_id?: string
          resolved_at?: string | null
          resolved_by?: string | null
          status?: string
          target_id?: string
        }
        Relationships: []
      }
      swap_opportunities: {
        Row: {
          confidence_score: number
          created_at: string
          cycle_type: string
          expires_at: string
          id: string
          item_a_id: string
          item_b_id: string
          item_c_id: string | null
          status: string
          updated_at: string
          user_a_id: string
          user_b_id: string
          user_c_id: string | null
        }
        Insert: {
          confidence_score?: number
          created_at?: string
          cycle_type: string
          expires_at?: string
          id?: string
          item_a_id: string
          item_b_id: string
          item_c_id?: string | null
          status?: string
          updated_at?: string
          user_a_id: string
          user_b_id: string
          user_c_id?: string | null
        }
        Update: {
          confidence_score?: number
          created_at?: string
          cycle_type?: string
          expires_at?: string
          id?: string
          item_a_id?: string
          item_b_id?: string
          item_c_id?: string | null
          status?: string
          updated_at?: string
          user_a_id?: string
          user_b_id?: string
          user_c_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "swap_opportunities_item_a_id_fkey"
            columns: ["item_a_id"]
            isOneToOne: false
            referencedRelation: "items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "swap_opportunities_item_b_id_fkey"
            columns: ["item_b_id"]
            isOneToOne: false
            referencedRelation: "items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "swap_opportunities_item_c_id_fkey"
            columns: ["item_c_id"]
            isOneToOne: false
            referencedRelation: "items"
            referencedColumns: ["id"]
          },
        ]
      }
      swipe_undos: {
        Row: {
          created_at: string
          id: string
          swiped_item_id: string
          swiper_item_id: string
          undone_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          swiped_item_id: string
          swiper_item_id: string
          undone_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          swiped_item_id?: string
          swiper_item_id?: string
          undone_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "swipe_undos_swiped_item_id_fkey"
            columns: ["swiped_item_id"]
            isOneToOne: false
            referencedRelation: "items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "swipe_undos_swiper_item_id_fkey"
            columns: ["swiper_item_id"]
            isOneToOne: false
            referencedRelation: "items"
            referencedColumns: ["id"]
          },
        ]
      }
      swipes: {
        Row: {
          created_at: string
          id: string
          liked: boolean
          swiped_item_id: string
          swiper_item_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          liked: boolean
          swiped_item_id: string
          swiper_item_id: string
        }
        Update: {
          created_at?: string
          id?: string
          liked?: boolean
          swiped_item_id?: string
          swiper_item_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "swipes_swiped_item_id_fkey"
            columns: ["swiped_item_id"]
            isOneToOne: false
            referencedRelation: "items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "swipes_swiper_item_id_fkey"
            columns: ["swiper_item_id"]
            isOneToOne: false
            referencedRelation: "items"
            referencedColumns: ["id"]
          },
        ]
      }
      user_preferences: {
        Row: {
          category_weights: Json
          condition_weights: Json
          created_at: string
          id: string
          updated_at: string
          user_id: string
          value_range_preference: Json
        }
        Insert: {
          category_weights?: Json
          condition_weights?: Json
          created_at?: string
          id?: string
          updated_at?: string
          user_id: string
          value_range_preference?: Json
        }
        Update: {
          category_weights?: Json
          condition_weights?: Json
          created_at?: string
          id?: string
          updated_at?: string
          user_id?: string
          value_range_preference?: Json
        }
        Relationships: []
      }
      user_preferences_learned: {
        Row: {
          category_affinities: Json
          computed_at: string
          id: string
          user_factors: Json
          user_id: string
        }
        Insert: {
          category_affinities?: Json
          computed_at?: string
          id?: string
          user_factors?: Json
          user_id: string
        }
        Update: {
          category_affinities?: Json
          computed_at?: string
          id?: string
          user_factors?: Json
          user_id?: string
        }
        Relationships: []
      }
      user_risk_scores: {
        Row: {
          admin_notes: string | null
          admin_reviewed: boolean
          auto_flagged: boolean
          created_at: string
          id: string
          last_analyzed_at: string
          risk_level: string
          risk_score: number
          signals: Json
          updated_at: string
          user_id: string
        }
        Insert: {
          admin_notes?: string | null
          admin_reviewed?: boolean
          auto_flagged?: boolean
          created_at?: string
          id?: string
          last_analyzed_at?: string
          risk_level?: string
          risk_score?: number
          signals?: Json
          updated_at?: string
          user_id: string
        }
        Update: {
          admin_notes?: string | null
          admin_reviewed?: boolean
          auto_flagged?: boolean
          created_at?: string
          id?: string
          last_analyzed_at?: string
          risk_level?: string
          risk_score?: number
          signals?: Json
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      user_subscriptions: {
        Row: {
          created_at: string
          dodo_session_id: string | null
          expires_at: string | null
          id: string
          is_pro: boolean
          subscribed_at: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          dodo_session_id?: string | null
          expires_at?: string | null
          id?: string
          is_pro?: boolean
          subscribed_at?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          dodo_session_id?: string | null
          expires_at?: string | null
          id?: string
          is_pro?: boolean
          subscribed_at?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      confirm_exchange: { Args: { p_match_id: string }; Returns: Json }
      get_active_policy: {
        Args: never
        Returns: {
          exploration_policy: Json
          policy_version: string
          reciprocal_policy: Json
          weights: Json
        }[]
      }
      get_match_with_items: {
        Args: { p_match_id: string }
        Returns: {
          completed_at: string
          created_at: string
          is_completed: boolean
          item_a_data: Json
          item_a_id: string
          item_b_data: Json
          item_b_id: string
          match_id: string
        }[]
      }
      get_my_matches_with_items: {
        Args: never
        Returns: {
          completed_at: string
          confirmed_by_user_a: boolean
          confirmed_by_user_b: boolean
          created_at: string
          is_completed: boolean
          item_a_data: Json
          item_a_id: string
          item_b_data: Json
          item_b_id: string
          match_id: string
          user_a_id: string
          user_b_id: string
        }[]
      }
      get_or_create_daily_usage: {
        Args: { p_user_id: string }
        Returns: {
          created_at: string
          deal_invites_count: number
          id: string
          map_uses_count: number
          searches_count: number
          swipes_count: number
          updated_at: string
          usage_date: string
          user_id: string
        }
        SetofOptions: {
          from: "*"
          to: "daily_usage"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      get_policy_for_request: {
        Args: { request_hash: number }
        Returns: {
          exploration_policy: Json
          policy_version: string
          reciprocal_policy: Json
          weights: Json
        }[]
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      increment_usage: {
        Args: { p_field: string; p_user_id: string }
        Returns: {
          created_at: string
          deal_invites_count: number
          id: string
          map_uses_count: number
          searches_count: number
          swipes_count: number
          updated_at: string
          usage_date: string
          user_id: string
        }
        SetofOptions: {
          from: "*"
          to: "daily_usage"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      is_admin: { Args: { _user_id: string }; Returns: boolean }
      recalculate_item_ratings_with_decay: { Args: never; Returns: undefined }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
      item_category:
        | "games"
        | "electronics"
        | "clothes"
        | "books"
        | "home_garden"
        | "sports"
        | "other"
      item_condition: "new" | "like_new" | "good" | "fair"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
      item_category: [
        "games",
        "electronics",
        "clothes",
        "books",
        "home_garden",
        "sports",
        "other",
      ],
      item_condition: ["new", "like_new", "good", "fair"],
    },
  },
} as const
