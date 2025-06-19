'use server'

import supabase from '@/config/supabase-db-config'
import { currentUser } from '@clerk/nextjs/server'

export const saveCurrentUser = async () => {

}

export const getCurrentUser = async () => {
  try {
    const  clerkUser = await currentUser()
    const { data, error } = await supabase
      .from('user_profiles')
      .select('')
      .eq('clerk_user_id', clerkUser?.id)
    
      if (error) {
        throw new Error('Error fetching user data.')
      }

      const user = data.length > 0 
        ? data[0]
        : null
      
      if (user) {
        return {
          success: true,
          data: user
        }
      }

      const userData = {
        name: clerkUser?.firstName + ' ' + clerkUser?.lastName,
        email: clerkUser?.emailAddresses[0].emailAddress,
        clerk_user_id: clerkUser?.id,
      }

  } catch (error) {
    
  }
}