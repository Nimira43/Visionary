import React, { useEffect } from 'react'
import PrivateLayoutHeader from './components/header'
import { IUser } from '@/interfaces'
import { getCurrentUser } from '@/actions/users'
import Spinner from './components/spinner'
import toast from 'react-hot-toast'

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
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
      fetchUser()
  }, [])

  if (loading) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <Spinner />
      </div>
    )
  }

  if (!loading && !user) {
    return (
      <div>Error fetching user data</div>
    )
  }

  return (
    <div>
      <PrivateLayoutHeader user={user!}/>
      <div className='p-5'>
        {children}
      </div>
    </div>
  )
} 

export default PrivateLayout
