import { useEffect, useState } from 'react'
import PrivateLayoutHeader from './_components/header'
import { IUser } from '@/app/interfaces'

function PrivateLayout({children} : {
  children: React.ReactNode
}) {
  const [user, setUser] = useState<IUser | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const fetchUser = async () => {
    try {
      
    } catch (error: any) {
      
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
