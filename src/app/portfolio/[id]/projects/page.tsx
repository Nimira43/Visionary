import { getProjectsByUserId } from "@/actions/projects"
import { IProject } from "@/interfaces"

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
    <div>
      ProjectsPage
    </div>
  )
}

export default ProjectsPage
