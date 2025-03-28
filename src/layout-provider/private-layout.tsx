import React, { useEffect } from 'react'
import PrivateLayoutHeader from './components/header'
import { IUser } from '@/interfaces'

function PrivateLayout({ children }: {
  children: React.ReactNode
}) {
  const [user, setUser] = React.useState<IUser | null>(null)
  const [loading, setLoading] = React.useState<boolean>(true)

  const fetchUser = async () => {
    try {
      setLoading(true)
    } catch (error: any) {

    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
      fetchUser()
  }, [])
  return (
    <div>
      <PrivateLayoutHeader />
      {children}
    </div>
  )
} 

export default PrivateLayout
