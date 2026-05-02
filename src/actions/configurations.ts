'use client'

import supabase from '@/config/supabase-db-config'

export const saveConfiguration = async ({
  userId = '',
  payload = {}
}: {
  userId: string,
  payload: any  
}) => { 
  try {
    const { data, error } = await supabase
      .from('configurations')
      .select('*')
      .eq('user_id', userId)
    
    if (error) throw new Error(error.message)
    
    let response = null
    
    if (data.length) {
      response = await supabase
        .from('configurations')
        .update(payload)
        .eq('user_id', userId)
    } else {
      response = await supabase
        .from('configurations')
        .insert(payload)
    }

    if (response.error) throw new Error(response.error.message)
    
    return {
      success: true,
      message: 'Configuration saved successfully.'
    }

  } catch (error: any) {
    return {
      success: false,
      message: error.message
    }
  }  
}