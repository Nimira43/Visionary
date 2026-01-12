import { Button } from '@/components/ui/button'
import Link from 'next/link'

function ExperiencesPage() {
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
      </div>
    </div>
  )
}

export default ExperiencesPage
