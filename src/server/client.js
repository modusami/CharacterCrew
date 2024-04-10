import { createClient } from "@supabase/supabase-js";

const URL = "https://sclvakziozdpdicsnlrx.supabase.co";
const API_KEY =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjbHZha3ppb3pkcGRpY3NubHJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI3ODc0MDYsImV4cCI6MjAyODM2MzQwNn0.4y-2nZzg9VQ8ns_wMU1-Np1zA1EL44gb4DUhc0eYeKI";

export const supabase = createClient(URL, API_KEY);
