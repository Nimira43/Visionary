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

function ProfilePage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
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
    defaultValues: user!
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  const heroImagePreview = useMemo(() => {
    if (selectedFile) {
      return URL.createObjectURL(selectedFile)
    }

    return user?.hero_image || ''
  }, [selectedFile])

  return (
    <div>
      <h1 className='text-xl font-medium'>Profile</h1>
      <Form {...form}>
        <form 
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8'
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
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {heroImagePreview && (
            <div>
              <img 
                src={heroImagePreview}
                alt='Hero Image'
                className='w-32 h-32'
              />
            </div>
          )}
          <Button type='submit'>Submit</Button>
        </form>
      </Form>
    </div>
  )
}

export default ProfilePage
