'use client'

import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

function ProfilePage() {
  const formSchema = z.object({
    username: z.string().min(2, {
      message: 'Username must be at least 2 characters',
    }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  
  return (
    <div>
      <h1 className='text-xl uppercase medium'>Profile</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8'
        >
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => {
              <FormItem>
                <FormLabel>Username</FormLabel> 
                <FormControl>
                  <Input></Input>
                </FormControl>
              </FormItem>
            }}
          />
        </form>
      </Form>
    </div>
  )
}

export default ProfilePage
