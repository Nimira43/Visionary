'use-client'

import { useAuth } from '@clerk/nextjs'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

function SignOutButton() {
  const { signOut } = useAuth()
  const router = useRouter()
  
  const onSignOut = async () => {
    try {
      await signOut()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <Button>Logout</Button>
    </div>
  )
}

export default SignOutButton
