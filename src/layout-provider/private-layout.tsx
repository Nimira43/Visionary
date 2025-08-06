import { useEffect, useState } from 'react'
import PrivateLayoutHeader from './_components/header'
import { IUser } from '@/app/interfaces'
import { getCurrentUser } from '@/actions/users'

function PrivateLayout({children} : {
  children: React.ReactNode
}) {
  const [user, setUser] = useState<IUser | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const fetchUser = async () => {
    try {
      setLoading(true)
      const response: any = await getCurrentUser()

      if (response.success) {
        setUser(response.data)
      } else {
        throw new Error('Error fetching user data.')
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

  if (loading) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (!loading && !user) {
    return (
      <div>
        <h1>Error fetching user data</h1>
      </div>
    )
  }

  return (
    <div>
      <PrivateLayoutHeader 
        user={user}
      />
      {children}
    </div>
  )
}

export default PrivateLayout
