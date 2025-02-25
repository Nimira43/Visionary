'use-client'

import { useAuth } from '@clerk/nextjs'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

function SignOutButton() {
  const { signOut } = useAuth()
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const onSignOut = async () => {
    try {
      setLoading(true)
      await signOut()
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <Button>Logout</Button>
    </div>
  )
}

export default SignOutButton
