import React from 'react'
import ProjectForm from '../../_components/project-form'

function EditProjectPage() {
  return (
    <div className='flex justify-center items-start min-h-screen p-4'>
      <div className='w-full max-w-2xl'>
        <h1 className='text-2xl text-main-dark font-medium mb-4 uppercase'>Edit Project</h1>
        <ProjectForm formType='edit' />
      </div>
    </div>
  )
}

export default EditProjectPage
