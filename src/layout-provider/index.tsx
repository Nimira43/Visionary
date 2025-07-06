'use client'

import { usePathname } from 'next/navigation'
import PrivateLayout from './private-layout'
import PublicLayout from './public-layout'

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

  return (
    <PublicLayout>
      {children}
    </PublicLayout>
  )
}

export default LayoutProvider
