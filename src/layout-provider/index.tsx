'use client'

import { usePathname } from 'next/navigation'
import PrivateLayout from './private-layout'

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
    <div>
      
    </div>
  )
}

export default LayoutProvider
