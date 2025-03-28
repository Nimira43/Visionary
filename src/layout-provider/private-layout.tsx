import React from 'react'
import PrivateLayoutHeader from './components/header'
import { IUser } from '@/interfaces'

function PrivateLayout({ children }: {
  children: React.ReactNode
}) {
  const [user, setUser] = React.useState<IUser | null>(null)

  const fetchUser = async () => {}

  return (
    <div>
      <PrivateLayoutHeader />
      {children}
    </div>
  )
} 

export default PrivateLayout
