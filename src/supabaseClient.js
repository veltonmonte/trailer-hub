import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://ccshpowggryqmzhzqbcl.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjc2hwb3dnZ3J5cW16aHpxYmNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMwNDI2NDUsImV4cCI6MjA3ODYxODY0NX0.Uit_1lfzjdX6Ye-nQd_Ne6osEKyfcWIqZFrT8SAEUcQ";

export const supabase = createClient(supabaseUrl, supabaseKey);