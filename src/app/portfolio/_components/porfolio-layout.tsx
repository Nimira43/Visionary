'use client'

import { getConfiguration } from '@/actions/configurations'
import Spinner from '@/components/ui/spinner'
import { useParams, usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

function PortfolioLayout({
  children
}: {
  children: React.ReactNode
  }) {
  const [loading, setLoading] = useState(false)
  
  const [config, setConfig] = useState({
    show_education: true,
    show_percentage_in_education: true,
    show_icons_in_skills: true,
    show_levels_in_skills: true
  })
  
  const params = useParams()
  const pathname = usePathname()
  const router = useRouter()
  const userId: any = params?.id

  const fetchConfiguration = async () => {
    try {
      setLoading(true)
      const response = await getConfiguration(userId)

      if (response.success && response.data) {
        setConfig(response.data)
      }

    } catch (error: any) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchConfiguration()
  }, [])

  let menuItems = [
    {
      name: 'Home',
      path: `/portfolio/${params.id}`
    },
    {
      name: 'Education',
      path: `/portfolio/${params.id}/education`
    },
    {
      name: 'Experience',
      path: `/portfolio/${params.id}/experiences`
    },
    {
      name: 'Projects',
      path: `/portfolio/${params.id}/projects`
    },
    {
      name: 'Contact',
      path: `/portfolio/${params.id}/contactus`
    },
  ]

  if (config.show_education === false) {
    menuItems = menuItems.filter((item) => item.name !== 'Education')
  }

  if (loading) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <Spinner />
      </div>
    )
  }

  return (
    <div className='lg:px-24 px-5'>
      <div className='bg-main-light text-dark flex items-center justify-center p-5 gap-7 rounded-b'>
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={
              `p-3 text-sm font-medium hover:text-main-dark hover-transition cursor-pointer ${pathname === item.path
                ? 'text-main-dark'
                
                : 'text-dark'
              }`
            }
            onClick={() => {
              router.push(item.path)
            }}
          >
            {item.name}
          </div>
        ))}
      </div>
      <div className='p-5'>
        {children}  
      </div>
    </div>
  )
}

export default PortfolioLayout
