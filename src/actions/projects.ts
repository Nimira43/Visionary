'use server'

import supabase from '@/config/supabase-db-config'

export const addNewProject = async (payload: any) => {
  try {
    const {data, error} = await supabase
      .from('projects')
      .insert(payload)
      
      
    if (error) throw new Error(error.message)

    return {
      success:  true,
      data,
      message: 'Project added successfully'
    }
  } catch (error: any) {
    return {
      success: false,
      message: error.message
    }
  }
}

export const editProjectById = async (id:string, payload:any) => {
  try {
    const {data, error} = await supabase
      .from('projects')
      .update(payload)
      .match({ id })

    if (error) throw new Error(error.message)

    return {
      success:  true,
      data,
      message: 'Project updated successfully'
    }
  } catch (error: any) {
    return {
      success: false,
      message: error.message
    }
  }
}

export const getProjectsByUserId = async (userId: string) => {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('user_id', userId)

    if (error) throw new Error(error.message)

    return {
      success: true,
      data,
    }
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    }
  }
}

export const getProjectById = async (id: string) => {
  try {
    
  } catch (error) {
    
  }
}