import { createClient } from '@supabase/supabase-js';

const SVELTEKIT_SUPABASE_URL = ['SVELTEKIT_SUPABASE_URL'];
const SVELTEKIT_SUPABASE_ANON_API_KEY = ['SVELTEKIT_SUPABASE_ANON_API_KEY'];

const supabase = createClient(SVELTEKIT_SUPABASE_URL, SVELTEKIT_SUPABASE_ANON_API_KEY);
export default supabase;