import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
const supabaseUrl = 'https://szlibqdxrqqhtugwjxfn.supabase.co/';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6bGlicWR4cnFxaHR1Z3dqeGZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzOTA4MzYsImV4cCI6MjA2NDk2NjgzNn0.beg9WHW5EXGR6k-aOA0YcDbN0IT646A9s1SOMtIeSro';
export const supabase = createClient(supabaseUrl, supabaseKey);