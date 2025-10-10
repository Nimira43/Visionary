import React from 'react'

interface IProjectFormProps {
  formType ? : 'add' | 'edit'
  initialValues ? : any
}

function ProjectForm({formType='add', initialValues={} }: IProjectFormProps) {
  return (
    <div>
      Project Form
    </div>
  )
}

export default ProjectForm
