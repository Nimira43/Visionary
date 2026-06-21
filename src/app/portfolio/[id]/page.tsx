import { getUserProfileById } from '@/actions/users'
import { Button } from '@/components/ui/button'
import { IUser } from '@/interfaces'
import { FiMail, FiDownload } from 'react-icons/fi'
import { FaUser } from 'react-icons/fa'

interface PortfolioHomePageProps {
  params: {
    id: string
  }
}

async function PortfolioHomePage({ params }: PortfolioHomePageProps) {
  const { id } = params
  const userProfileResponse = await getUserProfileById(id)

  if (!userProfileResponse.success) {
    return <div>Error: {userProfileResponse.error}</div>
  }

  const user: IUser = userProfileResponse.data

  return (
    <div className='w-full flex flex-col gap-20 mt-20'>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-xl font-medium'>Hello I'm</h1>

          <h1 className='text-4xl font-semibold text-main-dark'>
            {user.name}
          </h1>

          <p className='text-sm text-grey-1'>
            {user.tag_line}
          </p>

          <div className='flex gap-4 mt-4'>
            <Button variant='outline' className='flex items-center gap-2'>
              <FiMail size={18} />
              Contact Me
            </Button>

            <Button className='flex items-center gap-2'>
              <FiDownload size={18} />
              Download Resume
            </Button>
          </div>
        </div>

        <div className='flex justify-center'>
          {user.hero_image && (
            <img
              src={user.hero_image}
              alt={user.name}
              className='w-44 h-44 object-cover rounded-full shadow-md'
            />
          )}
        </div>
      </section>

      <section className='flex flex-col gap-6 max-w-3xl'>
        <div className='flex items-center gap-3'>
          <FaUser
            className='text-main-dark' size={24} />
          <h1 className='text-2xl font-medium text-main-dark'>
            About Me
          </h1>
        </div>

        <div
          className='text-grey-1 text-sm leading-6'
          dangerouslySetInnerHTML={{ __html: user.bio }}
        />
      </section>

    </div>
  )
}

export default PortfolioHomePage
