'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Checkbox } from '@/components/ui/checkbox'
import { getConfiguration, saveConfiguration } from '@/actions/configurations'
import usersGlobalStore, { IUsersGlobalStore } from '@/global-store/users-store'
import toast from 'react-hot-toast'

function ConfigurationsPage() {
  const {user} = usersGlobalStore() as IUsersGlobalStore
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const [initialValues, setInitialValues] = useState<any>({
    show_education: true,
    show_percentage_in_education: true,
    show_icons_in_skills: true,
    show_levels_in_skills: true
  })

  const formSchema = z.object({
    show_education: z.boolean(),
    show_percentage_in_education: z.boolean(),
    show_icons_in_skills: z.boolean(),
    show_levels_in_skills: z.boolean()
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues
  })

  const onSubmit = async (data: any) => {
    try {
      setLoading(true)
      const response = await saveConfiguration({
        userId: user?.id,
        payload: {
          ...data,
          user_id: user?.id
        }
      })

      if (response.success) {
        toast.success(response.message)
      } else {
        toast.error(response.message)
      }
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    } 
  }

  const fetchConfiguration = async () => {
    try {
      setLoading(true)
      const response = await getConfiguration(user?.id!)

      if (response.success) {
        setInitialValues(response.data)
        form.reset(response.data)
      }
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchConfiguration()
  }, [])

  return (
    <div className='min-h-screen flex flex-col items-center p-4'>
      <div className='w-full max-w-2xl bg-white rounded-lg shadow p-8'>
        <h1 className='text-2xl text-main-dark font-medium uppercase text-center'>
          Configurations
        </h1>

        <Form {...form}>
          <form 
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-8 mt-8'
          >
            <FormField
              control={form.control}
              name='show_education'
              render={({ field }) => (
                <FormItem className='flex items-center justify-between'>
                  <FormLabel>
                    Show Education
                  </FormLabel>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='show_percentage_in_education'
              render={({ field }) => (
                <FormItem className='flex items-center justify-between'>
                  <FormLabel>
                    Show Percentage In Education
                  </FormLabel>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='show_icons_in_skills'
              render={({ field }) => (
                <FormItem className='flex items-center justify-between'>
                  <FormLabel>
                    Show Icons In Skills
                  </FormLabel>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='show_levels_in_skills'
              render={({ field }) => (
                <FormItem className='flex items-center justify-between'>
                  <FormLabel>
                    Show Levels In Skills
                  </FormLabel>
                  <FormControl>
                    <Checkbox
                      checked={field.value} 
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className='flex justify-center gap-5'>
              <Button 
                disabled={loading}
                variant='outline'
                onClick={() => router.back()}
                type='button'
                className='w-full uppercase'
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

export default ConfigurationsPage

