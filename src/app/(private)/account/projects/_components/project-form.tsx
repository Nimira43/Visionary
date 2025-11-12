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
import { Textarea } from '@/components/ui/textarea'
import { useRouter } from 'next/navigation'

interface IProjectFormProps {
  formType ? : 'add' | 'edit'
  initialValues ? : any
}

function ProjectForm({
  formType='add', 
  initialValues={}
}: IProjectFormProps) {
  const router = useRouter()
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const {user} = usersGlobalStore() as IUsersGlobalStore

  const formSchema = z.object({
    name: z
      .string()
      .nonempty()
      .min(3)
      .max(50),
    description: z
      .string()
      .nonempty(),
    demo_link: z
      .string()
      .nonempty(),
    repo_link: z
      .string()
      .nonempty(),
    tech_stack: z
      .string()
      .nonempty(),
    image: z
      .string(),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: initialValues?.name || '',
      description: initialValues?.description || '',
      demo_link: initialValues?.demo_link || '',
      repo_link: initialValues?.repo_link || '',
      tech_stack: initialValues?.tech_stack || '',
      image: initialValues?.image || '',
    }
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true)
      const payload: any = {...values}

      if (selectedFile) {
        payload.image = await uploadFileAndGetUrl(selectedFile)
      }

      let response = null

      if (formType === 'add') {
        
      }

    } catch (error: any) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  const projectImagePreview = useMemo(() => {
    if (selectedFile) {
      return URL.createObjectURL(selectedFile)
    }

    return initialValues?.image || ''
  }, [selectedFile])


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
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='tech_stack'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tech Stack</FormLabel>
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
                name='demo_link'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Demo Link</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='repo_link'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Repo Link</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name='image'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Upload Project Image</FormLabel>
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
            {projectImagePreview && (
              <div className='p-2 '>
                <img 
                  src={projectImagePreview}
                  alt='Project Image'
                  className='w-32 h-32 m-max'
                />
              </div>
            )}
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

export default ProjectForm
