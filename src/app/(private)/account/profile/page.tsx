'use client'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import usersGlobalStore, { IUsersGlobalStore } from '@/global-store/users-store'

function ProfilePage() {
  const { user } = usersGlobalStore() as IUsersGlobalStore
  
  const formSchema = z.object({
    name: z
      .string()
      .nonempty()
      .min(3)
      .max(30),
    title: z
      .string()
      .nonempty()
      .min(3)
      .max(30),
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
  
  return (
    <div>
      <h1 className='text-2xl uppercase font-normal mb-5'>Profile</h1>
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
                <FormLabel className='uppercase'>Name</FormLabel> 
                <FormControl>
                  <Input
                    placeholder='Name...' {...field} />
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
                <FormLabel className='uppercase'> Job Title</FormLabel> 
                <FormControl>
                  <Input
                    placeholder='Job Title...' {...field} />
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
                <FormLabel className='uppercase'>Tagline</FormLabel> 
                <FormControl>
                  <Input
                    placeholder='Tagline...' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit'>Submit</Button>
        </form>
      </Form>
    </div>
  )
}

export default ProfilePage
