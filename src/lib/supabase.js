import { createClient } from "@supabase/supabase-js";

const url = "https://aulgkektpixtanfrwgyx.supabase.co";
const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1bGdrZWt0cGl4dGFuZnJ3Z3l4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjExODU2MjEsImV4cCI6MjA3Njc2MTYyMX0.ioBA93zVi9LpojmjNlRfOjItFiJo1KUT8yz3P8YG4Ac";

export const supabase = createClient(url, key);
