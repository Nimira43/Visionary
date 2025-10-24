import React from 'react'

interface IProjectFormProps {
  formType ? : 'add' | 'edit'
  initialValues ? : any
}

function ProjectForm({formType='add', initialValues={} }: IProjectFormProps) {
  return (
    <div className='flex justify-center items-start min-h-screen p-4'>
      <div className='w-full max-w-2xl'>
      <h1 className='text-2xl text-main-dark font-medium mb-4 uppercase text-center'>Profile</h1>
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
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input {...field} />
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
                <FormLabel>Tag Line</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='bio'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Editor
                    value={field.value}
                    onChange={
                      (e) => form.setValue('bio', e.target.value)
                    }
                    className='text-sm'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='hero_image'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Upload Image</FormLabel>
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
          {heroImagePreview && (
            <div className='p-2 '>
              <img 
                src={heroImagePreview}
                alt='Hero Image'
                className='w-32 h-32 m-max'
              />
            </div>
          )}
          <div className='flex justify-center gap-5 '>
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
