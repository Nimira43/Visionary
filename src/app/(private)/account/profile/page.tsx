'use client'

import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import usersGlobalStore, { IUsersGlobalStore } from '@/global-store/users-store'
import Editor from 'react-simple-wysiwyg'
import { useMemo, useState } from 'react'
import toast from 'react-hot-toast'
import { uploadFileAndGetUrl } from '@/helpers/uploads'
import { updateCurrentUser } from '@/actions/users'

function ProfilePage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const {user} = usersGlobalStore() as IUsersGlobalStore

  const formSchema = z.object({
    name: z
      .string()
      .nonempty()
      .min(3)
      .max(50),
    title: z
      .string()
      .nonempty()
      .min(3)
      .max(50),
    tag_line: z
      .string()
      .nonempty(),
    bio: z
      .string(),
    hero_image: z
      .string()
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: user?.name || '',
      title: user?.title || '',
      tag_line: user?.tag_line || '',
      bio: user?.bio || '',
      hero_image: user?.hero_image || '',
    }
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true)
      const payload: any = {...values}

      if (selectedFile) {
        payload.hero_image = await uploadFileAndGetUrl(selectedFile)
      }
      
      const response: any = await updateCurrentUser({
        ...payload,
        id: user?.id
      })

      if (response.success) {
        toast.success('Profile updated successfully.')
      } else {
        toast.error(response.error)
      }
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  const heroImagePreview = useMemo(() => {
    if (selectedFile) {
      return URL.createObjectURL(selectedFile)
    }

    return user?.hero_image || ''
  }, [selectedFile])

  return (
    <div className='flex justify-center items-start min-h-screen p-4'>
      <div className='w-full max-w-2xl'>
      <h1 className='text-2xl text-main-dark font-medium mb-4 uppercase text-center'>Profile</h1>
      <Form {...form}>
        <form 
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8 mt-8'
        >
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='tag_line'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tag Line</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='bio'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Editor
                    value={field.value}
                    onChange={
                      (e) => form.setValue('bio', e.target.value)
                    }
                    className='text-sm'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='hero_image'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Upload Image</FormLabel>
                <FormControl>
                  <Input 
                    type='file'
                    onChange={
                      (e) => {
                        setSelectedFile(e.target.files![0])
                      }
                    }
                    className='w-max'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {heroImagePreview && (
            <div className='p-2 '>
              <img 
                src={heroImagePreview}
                alt='Hero Image'
                className='w-32 h-32 m-max'
              />
            </div>
          )}
          <div className='flex justify-center gap-5 '>
            <Button 
              disabled={loading}
              type='submit'
              className='w-full uppercase '
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
      </div>
    </div>
  )
}

export default ProfilePage
