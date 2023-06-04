import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mwslssqjrelpcfacneoo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13c2xzc3FqcmVscGNmYWNuZW9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU4OTQyODcsImV4cCI6MjAwMTQ3MDI4N30.kR_i_hlR255yE8ufEzEXHqFwiIjycKbma3TqCwgnc7Q'
export const supabase = createClient(supabaseUrl, supabaseKey)
