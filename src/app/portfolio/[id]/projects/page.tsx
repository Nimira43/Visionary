import { getProjectsByUserId } from "@/actions/projects"
import { Button } from "@/components/ui/button"
import { IProject } from "@/interfaces"
import Link from "next/link"

interface ProjectsPageProps {
  params: {
    id: string
  }
}

async function ProjectsPage({ params }: ProjectsPageProps) {
  const { id } = await params
  const projectsResponse: any = await getProjectsByUserId(id) 

  if (!projectsResponse.success) {
    return (
      <div>Error: {projectsResponse.message}</div>
    )
  }

  const projects: IProject[] = projectsResponse.data

  return (
    <div className='flex justify-center items-start min-h-screen p-4'>
      <div className='w-full max-w-2xl'>
      <h1 className='my-7 text-2xl font-medium text-main-dark text-center'>
        Projects
      </h1>
      <div className='flex flex-col gap-7'>
        {projects.map((project) => (
          <div
            key={project.id}
            className='grid grid-cols-3 p-5 border border-main-light shadow-sm rounded gap-5 hover:border-main-dark hover-transition'
          >
            <div>
              <img
                src={project.image}
                alt={project.name}
                className='w-60 h-40 object-cover rounded border border-grey-4 shadow-sm'
              />
            </div>
            <div className='col-span-2 flex flex-col gap-3'>
              <h1 className='text-xl font-medium text-main-dark'>
                {project.name}
              </h1>
              <p>
                {project.description}
              </p>
              <div className='flex flex-wrap gap-5'>

              {project.tech_stack.split(',').map((tech) => (
                <div
                  key={tech}
                  className='py-1 px-2 bg-main-light text-main-dark text-sm font-medium uppercase rounded'
                >
                  {tech}
                </div>
              ))}
              </div>
              <div className='flex justify-end gap-5'>
                <Button variant='outline'>
                  <Link href={project.demo_link}>
                    Demo
                  </Link>
                </Button>
                <Button className='main-button'>
                  <Link href={project.repo_link}>
                    Repo
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      </div>
  )
}

export default ProjectsPage
