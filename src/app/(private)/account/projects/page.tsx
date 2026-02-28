import { getProjectsByUserId } from '@/actions/projects'
import { getCurrentUser } from '@/actions/users'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import ProjectsTable from './_components/projects-table'

async function ProjectsPage() {
  const userResponse : any = await getCurrentUser()

  if (!userResponse.success) {
    return (
      <div>Failed to load user data.</div>
    )
  }

  const projectsResponse = await getProjectsByUserId(userResponse?.data?.id!)

  if (!projectsResponse.success) {
    return (
      <div>Failed to load projects.</div>
    )
  }

  const projects: any = projectsResponse.data

  return (
    <div className='min-h-screen flex flex-col items-center p-4'>
      <div className='w-full max-w-5xl'>
        <div className='flex justify-between items-center mb-6'>
          <h1 className='text-2xl text-main-dark font-medium uppercase'>
            Projects
          </h1>
          <Button asChild className='main-button'>
            <Link href='/account/projects/add' className='font-medium'>
              Add Project
            </Link>
          </Button>
        </div>
        <ProjectsTable projects={projects} />  
      </div>
    </div>
  )
}

export default ProjectsPage
