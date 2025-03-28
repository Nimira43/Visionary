import React, { useEffect } from 'react'
import PrivateLayoutHeader from './components/header'
import { IUser } from '@/interfaces'
import { getCurrentUser } from '@/actions/users'

function PrivateLayout({ children }: {
  children: React.ReactNode
}) {
  const [user, setUser] = React.useState<IUser | null>(null)
  const [loading, setLoading] = React.useState<boolean>(true)

  const fetchUser = async () => {
    try {
      setLoading(true)
      const response = await getCurrentUser()
      if (response.success) {
        setUser(response.data)
      } else {
        throw new Error('Error fetching user data')
      }
    } catch (error: any) {
      console.error(error.message)
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
