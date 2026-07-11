import { getExperiencesByUserId } from "@/actions/experiences"
import { IExperiences } from "@/interfaces"
import dayjs from "dayjs"

interface ExperiencesPageProps {
  params: {
    id: string
  }
}


async function ExperiencesPage({
  params,
}: ExperiencesPageProps) {
  const { id } = await params
  const response = await getExperiencesByUserId(id)

  if (!response.success || !response.data) {
    return (
      <div>Failed to fetch Experiences.</div>
    )
  }

  const experiences: IExperiences[] = response.data
  const sortedData = experiences.sort((a, b) => {
    return dayjs(b.start_date).unix() - dayjs(a.start_date).unix()
  })

  return (
    <div>
      <h1 className='my-7 text-main-dark text-2xl font-medium'>
        Work Experience
      </h1>
      {sortedData.map((experience) => (
        <div
          key={experience.id}
          className='flex gap-10'
        >
          <div className='flex flex-col items-center'>
            <div className='h-4 w-4 rounded-full bg-main-light'></div>
            <div className='w-1 h-full bg-main-light'></div>
          </div>
          <div className='flex flex-col gap-2 py-7'>
            <h1 className='text-lg font-medium text-main-dark'>
              {experience.role} at {experience.company}
            </h1>
            <h1 className='text-sm'>
              {dayjs(experience.start_date).format('MMM YYYY')} - {' '}
              {experience.end_date
                ? dayjs(experience.end_date).format('MMM YYYY')
                : 'Present'
              }
            </h1>
            <p className='text-sm'>
              {experience.description}
            </p>
          </div>          
        </div>
      ))}
    </div>
  )
}

export default ExperiencesPage
