import supabase from '@/config/supabase-db-config'

export const uploadFileAndGetUrl = async (file: File) => {
  try {
    const filename = `${Date.now()}-${file.name}`
    const { data, error } = await supabase.storage
      .from('basic')
      .upload(filename, file) 

    if (error) {
      throw new Error(error.message)
    }

    const url = supabase.storage
      .from('basic')
      .getPublicUrl(filename)
    return url
  } catch (error: any) {
    throw new Error(error)
  }
}