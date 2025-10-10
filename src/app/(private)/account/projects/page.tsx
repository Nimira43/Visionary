import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const ProjectsPage = () => {
  return (
    <div className='flex justify-center items-start min-h-screen p-4'>
      <div className='w-full max-w-2xl'>
        <div className='flex justify-between items-center'>
          <h1 className='text-2xl text-main-dark font-medium mb-4 uppercase text-center'>Projects</h1>
          <Button className='uppercase'>
            <Link href='/account/projects/add'>
              Add Project
            </Link>
          </Button>
        </div>
        
      </div>
    </div>
  )
}

export default ProjectsPage
