import { useState } from 'react'
import PrivateLayoutHeader from './_components/header'
import { IUser } from '@/app/interfaces'

function PrivateLayout({children} : {
  children: React.ReactNode
}) {
  const [user, setUser] = useState<IUser | null>(null)
  return (
    <div>
      <PrivateLayoutHeader />
      {children}
    </div>
  )
}

export default PrivateLayout
