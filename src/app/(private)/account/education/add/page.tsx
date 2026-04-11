import EducationForm from '../_components/education-form'

function AddExperiencePage() {
  return (
    <div className='flex justify-center items-start min-h-screen p-4'>
      <div className='w-full max-w-5xl'>
        <div>
          <h1 className='text-2xl text-main-dark font-medium mb-4 uppercase text-center'>Add Education</h1>
          <EducationForm />
        </div> 
      </div>
    </div>
  )
}

export default AddExperiencePage