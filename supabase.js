import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://fmseqbjeyhmhbevhxrmn.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtc2VxYmpleWhtaGJldmh4cm1uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyNzMyNTEsImV4cCI6MjA2NTg0OTI1MX0.fsWz-i7zjTJNTuMjDyy1G-2KQyQTyovszQypnw4AH6k";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
