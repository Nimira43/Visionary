import ExperienceForm from '../../_components/experience-form'
import { getExperienceById } from '@/actions/experiences'

interface IEditExperiencePageProps {
  params : {
    id: string
  }
}

async function EditExperiencePage({ params } : IEditExperiencePageProps) {

  const { id } = await params 
  const experienceResponse = await getExperienceById(id)

  if (!experienceResponse.success) {
    return (
      <div>
        Failed to load experience data.
      </div>
    )
  }

  return (
    <div className='flex justify-center items-start min-h-screen p-4'>
      <div className='w-full max-w-5xl'>
        <h1 className='text-2xl text-main-dark font-medium mb-4 uppercase text-center'>
          Edit Experience
        </h1>
        <ExperienceForm
          formType='edit'
          initialValues={experienceResponse.data}
        />
      </div>
    </div>
  )
}

export default EditExperiencePage
