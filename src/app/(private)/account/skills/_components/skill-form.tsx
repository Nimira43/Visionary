'use-client'

import { zodResolver } from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useMemo, useState } from 'react'
import toast from 'react-hot-toast'
import { uploadFileAndGetUrl } from '@/helpers/uploads'
import { useRouter } from 'next/navigation'
import usersGlobalStore, { IUsersGlobalStore } from '@/global-store/users-store'
import { addNewSkill, editSkillById } from '@/actions/skills'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'

interface SkillFormProps {
  formType: 'add' | 'edit'
  initialValues?: any
  openSkillForm: boolean
  setOpenSkillForm: (open: boolean) => void
  reloadData: () => void
}

function SkillForm({
  formType,
  initialValues,
  openSkillForm,
  setOpenSkillForm,
  reloadData
}: SkillFormProps) {
  const router = useRouter()
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const { user } = usersGlobalStore() as IUsersGlobalStore

  const formSchema = z.object({
    name: z
      .string()
      .nonempty()
      .min(3)
      .max(50),
    level: z.coerce.number(),
    image: z
      .string(),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: initialValues?.name || '',
      level: initialValues?.level || 0,
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

      payload.user_id = user?.id
      let response: any = null

      if (formType === 'add') {
        response = await addNewSkill(payload)
      } else {
        response = await editSkillById(initialValues.id, payload)
      }

      if (response.success) {
        toast.success(response.message)
        reloadData()
        setOpenSkillForm(false)
      } else {
        toast.error(response.message)
      }
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  const skillImagePreview = useMemo(() => {
    if (selectedFile) {
      return URL.createObjectURL(selectedFile)
    }

    return initialValues?.image || ''
  }, [selectedFile])

  return (
    <Dialog
      open={openSkillForm}
      onOpenChange={setOpenSkillForm}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {formType == 'add' 
              ? 'Add New Skill'
              : 'Edit Skill'
            }
          </DialogTitle>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>
        
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
              name='level'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Level</FormLabel>
                  <FormControl>
                    <Input 
                      type='number'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='image'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Upload Skill Image</FormLabel>
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
            {skillImagePreview && (
              <div className='p-2 '>
                <img 
                  src={skillImagePreview}
                  alt='Skill Image'
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
                className='w-full main-button'
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      
      </DialogContent>
    </Dialog>
  )
}

export default SkillForm
