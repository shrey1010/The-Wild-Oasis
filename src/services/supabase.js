// https://supabase.com/dashboard/project/rftwaywuzaduaicfaubo/auth/policies

import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://rftwaywuzaduaicfaubo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmdHdheXd1emFkdWFpY2ZhdWJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUyODM2ODcsImV4cCI6MjA1MDg1OTY4N30.g6SBAzqZh05S0SffkegizNfgioZ3mgkI-zWnr_hfytI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;


// import { createClient } from "@supabase/supabase-js";

// export const supabaseUrl = "https://dclaevazetcjjkrzczpc.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjbGFldmF6ZXRjamprcnpjenBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyOTIzNDQsImV4cCI6MTk5ODg2ODM0NH0.LGg0M-taoHgKtxCzr9owrb09epnPaO_Yfz6xVE54sIY";
// const supabase = createClient(supabaseUrl, supabaseKey);

// export default supabase;
