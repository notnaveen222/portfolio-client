import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://arivvlmcqkdscgirsymp.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFyaXZ2bG1jcWtkc2NnaXJzeW1wIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NjM1MDIwNCwiZXhwIjoyMDkxOTI2MjA0fQ.UbByYLQkrk_wNC_R03tIC70wJ2u1ohzWbybQgIuOEcg'
)

export default supabase
