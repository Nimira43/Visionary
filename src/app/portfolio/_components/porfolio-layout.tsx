'use client'

import { useParams, usePathname, useRouter } from 'next/navigation'

function PortfolioLayout({
  children
}: {
  children: React.ReactNode
}) {
  const params = useParams()
  const pathname = usePathname()
  const router = useRouter()

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
