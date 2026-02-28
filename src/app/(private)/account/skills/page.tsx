'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

function SkillsPage() {
  return (
    <div className='min-h-screen flex flex-col items-center p-4'>
      <div className='w-full max-w-5xl'>
        <div className='flex justify-between items-center mb-6'>
          <h1 className='text-2xl text-main-dark font-medium uppercase'>
            Skills
          </h1>

          <Button asChild className='main-button'>
            <Link href='/account/projects/add' className='font-medium'>
              Add Skill
            </Link>
          </Button>
        </div>

        {/* Page content goes here */}
      </div>
    </div>
  )
}

export default SkillsPage

