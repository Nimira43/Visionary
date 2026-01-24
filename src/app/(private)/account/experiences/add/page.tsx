import ExperienceForm from "../_components/experience-form"

function AddExperiencePage() {
  return (
    <div className='flex justify-center items-start min-h-screen p-4'>
      <div className='w-full max-w-5xl'>
        <div>
          <h1 className='text-2xl text-main-dark font-medium mb-4 uppercase text-center'>Add Experience</h1>
          <ExperienceForm />
        </div> 
      </div>
    </div>
  )
}

export default AddExperiencePage
