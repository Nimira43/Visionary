import { getUserProfileById } from '@/actions/users'
import { Button } from '@/components/ui/button'
import { IUser } from '@/interfaces'
import { getSkillsByUserId } from '@/actions/skills'
import { ISkill } from '@/app/interfaces'
import { RiAwardLine, RiDownload2Line, RiMailLine, RiUser6Line } from 'react-icons/ri'
import { IconType } from 'react-icons'

interface PortfolioHomePageProps {
  params: Promise<{
    id: string
  }>
}

function PortfolioSection({
  children,
  className = ''
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={
      `flex flex-col gap-6 w-full max-w-3xl mx-auto ${className}`
    }>
      {children}
    </section>
  )
}

function SectionHeading({
  icon: Icon,
  title
}: {
    icon: IconType
    title: string
}) {
  return (
    <div className='flex items-center gap-3'>
      <span className='flex items-center justify-center w-9 h-9 rounded-full bg-main-light shrink-0'>
        <Icon
          className='text-main-dark'
          size={18}
        />
      </span>
      <h2 className='text-xl md:text-2xl font-medium text-main-dark'>
        {title}
      </h2>
    </div>
  )
}

async function PortfolioHomePage({
  params
}: PortfolioHomePageProps) {
  const { id } = await params
  const userProfileResponse = await getUserProfileById(id)

  if (!userProfileResponse.success) {
    return <div>Error: {userProfileResponse.error}</div>
  }

  const user: IUser = userProfileResponse.data

  const skillsResponse: any = await getSkillsByUserId(id)
  let skills: ISkill[] = []

  if (skillsResponse.success) {
    skills = skillsResponse.data
  }

  return (
    <main className='w-full flex flex-col gap-16 md:gap-24 py-10 md:py-16'>
      <section className='flex flex-col-reverse md:flex-row items-center gap-10 md:gap-14 max-w-5xl mx-auto w-full'>
        <div className='flex flex-col items-center text-center md:items-start md:text-left gap-4 flex-1'>
          <span className='text-sm font-medium text-grey-1 tracking-wide'>
            Hello, I&apos;m
          </span>

          <h1 className='text-3xl md:text-5xl font-semibold text-main-dark leading-tight'>
            {user.name}
          </h1>

          {user.tag_line && (
            <p className='text-sm md:text-base text-grey-1 max-w-md'>
              {user.tag_line}
            </p>
          )}

          <div className='flex flex-wrap justify-center md:justify-start gap-3 mt-2'>
            <Button variant='outline' className='flex items-center gap-2'>
              <RiMailLine size={18} />
              Contact Me
            </Button>

            <Button className='flex items-center gap-2'>
              <RiDownload2Line size={18} />
              Download Resume
            </Button>
          </div>
        </div>

        {user.hero_image && (
          <div className='shrink-0'>
            <img
              src={user.hero_image}
              alt={user.name}
              className='w-36 h-36 md:w-48 md:h-48 object-cover rounded-full shadow-md ring-4 ring-main-light'
            />
          </div>
        )}
      </section>

      <PortfolioSection>
        <SectionHeading
          icon={RiUser6Line}
          title='About Me'
        />
        <div
          className='text-grey-1 text-sm leading-6'
          dangerouslySetInnerHTML={{ __html: user.bio }}
        />
      </PortfolioSection>

      <PortfolioSection>
        <SectionHeading
          icon={RiAwardLine}
          title='Skills'
        />

        {skills.length === 0 ? (
          <p className='text-sm text-grey-1'>No skills added yet.</p>
        ) : (
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
            {skills.map((skill) => (
              <div
                key={skill.id}
                className='border border-main rounded-lg shadow-sm p-3 flex items-center gap-3 hover:shadow-md hover-transition'
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className='h-9 w-9 object-contain shrink-0'
                />
                <p className='text-sm font-medium text-dark truncate'>
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        )}
      </PortfolioSection>
    </main>
  )
}

export default PortfolioHomePage
