'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Checkbox } from '@/components/ui/checkbox'

function ConfigurationsPage() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const formSchema = z.object({
    showEducation: z.boolean(),
    showPercentageInEducation: z.boolean(),
    showIconsInSkills: z.boolean(),
    showLevelsInSkills: z.boolean()
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      showEducation: true,
      showPercentageInEducation: true,
      showIconsInSkills: true,
      showLevelsInSkills: true
    }
  })

  const onSubmit = async (data: any) => {}

  return (
    <div className="min-h-screen flex flex-col items-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow p-8">
        <h1 className="text-2xl text-main-dark font-medium uppercase text-center">
          Configurations
        </h1>

        <Form {...form}>
          <form 
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mt-8"
          >
            <FormField
              control={form.control}
              name="showEducation"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <FormLabel>Show Education</FormLabel>
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="showPercentageInEducation"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <FormLabel>Show Percentage In Education</FormLabel>
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="showIconsInSkills"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <FormLabel>Show Icons In Skills</FormLabel>
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="showLevelsInSkills"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <FormLabel>Show Levels In Skills</FormLabel>
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="flex justify-center gap-5">
              <Button 
                disabled={loading}
                variant="outline"
                onClick={() => router.back()}
                type="button"
                className="w-full uppercase"
              >
                Cancel
              </Button>

              <Button 
                disabled={loading}
                type="submit"
                className="w-full main-button"
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

