'use client'

import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import usersGlobalStore, { IUsersGlobalStore } from '@/global-store/users-store'
import { addNewExperience, editExperienceById } from '@/actions/experiences'
import { Textarea } from '@/components/ui/textarea'

interface ExperienceFormProps {
  formType ? : 'add' | 'edit'
  initialValues ? : any
}

function ExperienceForm({
  formType='add', 
  initialValues
}: ExperienceFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const { user } = usersGlobalStore() as IUsersGlobalStore

  const formSchema = z.object({
    company: z
      .string()
      .nonempty()
      .min(3)
      .max(50),
    role: z
      .string()
      .nonempty()
      .min(3)
      .max(50),
    start_date: z
      .string()
      .nonempty(),
    end_date: z
      .string()
      .nonempty(),
    description: z
      .string()
      .nonempty(),
    location: z
      .string()
      .nonempty()
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      company: initialValues?.name || '',
      role: initialValues?.description || '',
      start_date: initialValues?.demo_link || '',
      end_date: initialValues?.repo_link || '',
      description: initialValues?.tech_stack || '',
      location: initialValues?.image || '',
    }
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true)
      const payload: any = {...values}

      payload.user_id = user?.id
      let response: any = null

      if (formType === 'add') {
        response = await addNewExperience(payload)
      } else {
        response = await editExperienceById(initialValues.id, payload)
      }

      if (response.success) {
        toast.success(response.message)
        router.push('/account/experiences')
      } else {
        toast.error(response.error)
      }

    } catch (error: any) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='flex justify-center items-start min-h-screen p-4'>
      <div className='w-full max-w-2xl'>
        <Form {...form}>
          <form 
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-8 mt-5'
          >
            <FormField
              control={form.control}
              name='role'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='company'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='grid grid-cols-2 gap-5'>
              <FormField
                control={form.control}
                name='start_date'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Start Date</FormLabel>
                    <FormControl>
                      <Input
                        type='date'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='end_date'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>End Date</FormLabel>
                    <FormControl>
                      <Input
                        type='date'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> 
            </div>
            <FormField
                control={form.control}
                name='location'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea {...field}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className='flex justify-center gap-5 '>
              <Button 
                disabled={loading}
                variant='outline'
                onClick={() => router.back()}
                type='button'
                className='w-full uppercase '
              >
                Cancel
              </Button>
              <Button 
                disabled={loading}
                type='submit'
                className='w-full main-button'
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

export default ExperienceForm
