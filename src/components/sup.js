// supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hqxbwkimkjjdhgciwayd.supabase.co'
const supabaseKey = 'SUA_CHAVE_ANÔNIMA_PUBLICA' // veja como obter abaixo

export const supabase = createClient(supabaseUrl, supabaseKey)
