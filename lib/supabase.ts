import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qwptdaodufwqxhqirbfh.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3cHRkYW9kdWZ3cXhocWlyYmZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU3NzQ0MTQsImV4cCI6MjA2MTM1MDQxNH0.9J8IAVC-fXiCn9rigjklwho_iBNzweZONC11CwTJJBY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey) 