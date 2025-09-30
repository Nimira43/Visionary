import supabase from '@/config/supabase-db-config'

export const uploadFileAndGetUrl = async (file: File) => {
  try {
    const { data, error } = await supabase.storage.from('basic').upload(`${file.name}`, file) 
  } catch (error: any) {
    throw new Error(error)
  }
}