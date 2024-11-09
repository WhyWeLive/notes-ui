import { SupabaseClient } from '@supabase/supabase-js';

export const supabaseClient = new SupabaseClient(
  import.meta.env.VITE_PUBLIC_SUPABASE_URL,
  import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY,
);
