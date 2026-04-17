import { getEducationByUserId } from '@/actions/education'
import { getCurrentUser } from '@/actions/users'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import EducationTable from './_components/education-table'

async function EducationPage() {
  const userResponse : any = await getCurrentUser()
  
    if (!userResponse.success) {
      return (
        <div>Failed to load user data.</div>
      )
    }
  
    const educationResponse = await getEducationByUserId(userResponse?.data?.id!)
  
    if (!educationResponse.success) {
      return (
        <div>Failed to load education.</div>
      )
    }
  
    const education: any = educationResponse.data
  
  return (
    <div className='min-h-screen flex flex-col items-center p-4'>
      <div className='w-full max-w-5xl'>
        <div className='flex justify-between items-center mb-6'>
          <h1 className='text-2xl text-main-dark font-medium uppercase'>
            Education
          </h1>
          <Button asChild className='main-button'>
            <Link 
              className='font-medium'
              href='/account/education/add'>
              Add Education
            </Link>
          </Button>
        </div>
        <EducationTable education={education}/>
      </div>
    </div>
  )
}

export default EducationPage
