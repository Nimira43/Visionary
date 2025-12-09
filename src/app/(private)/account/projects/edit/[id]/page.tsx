import React from 'react'
import ProjectForm from '../../_components/project-form'
import { getProjectById } from '@/actions/projects'

interface IEditProjectPageProps {
  params : {
    id: string
  }
}

async function EditProjectPage({ params } : IEditProjectPageProps) {

  const { id } = await params 
  const projectResponse = await getProjectById(id)

  if (!projectResponse.success) {
    return (
      <div>
        Failed to load project data.
      </div>
    )
  }

  return (
    <div className='flex justify-center items-start min-h-screen p-4'>
      <div className='w-full max-w-2xl'>
        <h1 className='text-2xl text-main-dark font-medium mb-4 uppercase'>Edit Project</h1>
        <ProjectForm
          formType='edit'
          initialValues={projectResponse.data}
        />
      </div>
    </div>
  )
}

export default EditProjectPage
