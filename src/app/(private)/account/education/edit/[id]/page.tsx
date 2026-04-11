import EducationForm from '../../_components/education-form'
import { getEducationById } from '@/actions/education'

interface IEditEducationPageProps {
  params : {
    id: string
  }
}

async function EditEducationPage({ params } : IEditEducationPageProps) {

  const { id } = await params 
  const educationResponse = await getEducationById(id)

  if (!educationResponse.success) {
    return (
      <div>
        Failed to load education data.
      </div>
    )
  }

  return (
    <div className='flex justify-center items-start min-h-screen p-4'>
      <div className='w-full max-w-5xl'>
        <h1 className='text-2xl text-main-dark font-medium mb-4 uppercase text-center'>
          Edit Education
        </h1>
        <EducationForm
          formType='edit'
          initialValues={educationResponse.data}
        />
      </div>
    </div>
  )
}

export default EditEducationPage
