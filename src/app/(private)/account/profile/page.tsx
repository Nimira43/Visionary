'use client'

import { Form } from '@/components/ui/form'
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
      <Form></Form>
    </div>
  )
}

export default ProfilePage
