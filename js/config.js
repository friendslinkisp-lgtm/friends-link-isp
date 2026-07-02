const SUPABASE_URL = "https://rhkoeppwrjowpetsgorp.supabase.co/rest/v1/";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJoa29lcHB3cmpvd3BldHNnb3JwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE5NTYxMTIsImV4cCI6MjA5NzUzMjExMn0.FDLDayYpAYBPMqOF_vs5t3FskZl-s4kginEhTZRUpS0";

const supabaseClient = supabase.createClient(
SUPABASE_URL,
SUPABASE_KEY
);

