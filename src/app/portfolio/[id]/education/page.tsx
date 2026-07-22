import { getEducationByUserId } from "@/actions/education"
import { IEducation } from "@/interfaces"
import dayjs from "dayjs"

interface EducationPageProps {
  params: {
    id: string
  }
}

async function EducationPage({
  params,
}: EducationPageProps) {
  const { id } = await params
  const response = await getEducationByUserId(id)

  if (!response.success || !response.data) {
    return (
      <div>Failed to fetch Education.</div>
    )
  }

  const education: IEducation[] = response.data
  const sortedData = education.sort((a, b) => {
    return dayjs(b.start_date).unix() - dayjs(a.start_date).unix()
  })

  return (
    <div className='flex justify-center items-start min-h-screen p-4'>
      <div className='w-full max-w-2xl'>
        <h1 className='my-7 text-main-dark text-2xl font-medium text-center'>
          Education
        </h1>
        {sortedData.map((education) => (
          <div
            key={education.id}
            className='flex gap-10'
          >
            <div className='flex flex-col items-center'>
              <div className='h-4 w-4 rounded-full bg-main-light'></div>
              <div className='w-1 h-full bg-main-light'></div>
            </div>
            <div className='flex flex-col gap-2 py-7'>
              <h1 className='text-lg font-medium text-main-dark'>
                {education.degree} at {education.institution}, {education.location}.
              </h1>
              <h1 className='text-sm'>
                {dayjs(education.start_date).format('MMM YYYY')} - {' '}
                {education.end_date
                  ? dayjs(education.end_date).format('MMM YYYY')
                  : 'Present'
                }
              </h1>
              <p className='text-main-dark font-medium'>
                {education.percentage}%
              </p>
            </div>          
          </div>
        ))}
      </div>
    </div>
  )
}

export default EducationPage
