'use client'

import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { Textarea } from '@/components/ui/textarea'
import { useParams } from 'next/navigation'

function ContactUsPage() {
  const [loading, setLoading] = useState(false)
  const params = useParams() 

  const formSchema = z.object({
    name: z
      .string()
      .nonempty()
      .min(3)
      .max(50),
    email: z
      .string()
      .email(),
    message: z
      .string()
      .nonempty()
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  })

  const onSubmit = async (data: any) => {
    try {
      setLoading(true)
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='flex justify-center items-start min-h-screen p-4'>
      <div className='w-full max-w-2xl'>
        <h1 className='text-2xl font-medium text-main-dark text-center my-7'>
          Contact Us          
        </h1>
        <Form {...form}>
          <form 
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-8 mt-5'
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
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='message'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button 
              disabled={loading}
              type='submit'
              className='w-full main-button'
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default ContactUsPage
