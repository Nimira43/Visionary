'use server'

import supabase from '@/config/supabase-db-config'

export const addNewProject = async (payload: any) => {
  try {
    const {data, error} = await supabase.from('projects').insert(payload)

    if (error) throw new Error(error.message)

    return {
      success:  true,
      data
    }

  } catch (error: any) {
    return {
      success: false,
      error: error.message
    }
  }
}

export const editProjectById = async (id:string, payload:any) => {
  try {
    
  } catch (error: any) {
    
  }
}