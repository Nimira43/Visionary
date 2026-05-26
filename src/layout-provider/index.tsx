'use client'

import { usePathname } from 'next/navigation'
import PrivateLayout from './private-layout'
import PublicLayout from './public-layout'
import PortfolioLayout from '@/app/portfolio/_components/porfolio-layout'

function LayoutProvider({children} : {
  children : React.ReactNode
}) {
  const pathname = usePathname()

  if (pathname.startsWith('/account')) {
    return (
      <PrivateLayout>
        {children}
      </PrivateLayout>
    )
  }
  
  if (pathname.startsWith('/porfolio')) {
    return (
      <PortfolioLayout>
        {children}
      </PortfolioLayout>
    )
  }

  return (
    <PublicLayout>
      {children}
    </PublicLayout>
  )
}

export default LayoutProvider
