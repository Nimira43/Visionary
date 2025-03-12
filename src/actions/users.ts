'use server'

import supabase from '@/config/supabase-db-config'
import { currentUser } from '@clerk/nextjs/server'

export const saveCurrentUser = async () => {}

export const getCurrentUser = async () => {
  try {
    const clerkUser = await currentUser()
    const { data, error } = await supabase.from('user_profiles').select('').eq('clerk_user_id', clerkUser?.id)
  } catch (error) {

  }
}