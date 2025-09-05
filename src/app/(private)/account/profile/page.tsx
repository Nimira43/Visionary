'use client'

import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

function ProfilePage() {
  const formSchema = z.object({
    username: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
    })
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  })

  return (
    <div>
      <h1 className='text-xl font-medium'>Profile Page</h1>
      <Form>
        <FormField>
          <FormItem>
            <FormLabel></FormLabel>
            <FormControl>
              <Input />
            </FormControl>
            <FormDescription></FormDescription>
          </FormItem>
        </FormField>
      </Form>
    </div>
  )
}

export default ProfilePage
