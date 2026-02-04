import { getExperiencesByUserId } from '@/actions/experiences'
import { getCurrentUser } from '@/actions/users'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import ExperiencesTable from './_components/experiences-table'

async function ExperiencesPage() {
  const userResponse : any = await getCurrentUser()
  
    if (!userResponse.success) {
      return (
        <div>Failed to load user data.</div>
      )
    }
  
    const experiencesResponse = await getExperiencesByUserId(userResponse?.data?.id!)
  
    if (!experiencesResponse.success) {
      return (
        <div>Failed to load experiences.</div>
      )
    }
  
    const experiences: any = experiencesResponse.data
  
  return (
    <div className='flex justify-center items-start min-h-screen p-4'>
      <div className='w-full max-w-5xl'>
        <div className='flex justify-between items-center'>
          <h1 className='text-2xl text-main-dark font-medium mb-4 uppercase text-center'>Experiences</h1>
          <Button className='main-button'>
            <Link 
              className='font-medium'
              href='/account/experiences/add'>
              Add Experience
            </Link>
          </Button>
        </div>
        <ExperiencesTable experiences={experiences}/>
      </div>
    </div>
  )
}

export default ExperiencesPage
