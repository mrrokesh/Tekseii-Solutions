import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://jcasjbwncrgpdssuctwb.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_xbwD7fuh8PFOHVf-hy2mWg_IeSoTj78'

// Verify the key is set
if (!supabaseAnonKey || supabaseAnonKey.trim() === '') {
  console.error('Supabase API key is missing!')
}

// Verify the URL is set
if (!supabaseUrl || supabaseUrl.trim() === '') {
  console.error('Supabase URL is missing!')
}

// Create Supabase client with explicit options
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
  global: {
    headers: {
      'apikey': supabaseAnonKey,
    },
  },
})

