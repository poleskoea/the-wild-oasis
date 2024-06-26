import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ziuubydrccbpjaoinbkw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppdXVieWRyY2NicGphb2luYmt3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgyODAxNjMsImV4cCI6MjAzMzg1NjE2M30.23QjIZP9sEaMrnMmw0xZLSXHLdCNKhtknfaiTnCJdDs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
