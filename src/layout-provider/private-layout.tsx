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
