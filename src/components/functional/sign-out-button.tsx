'use-client'

import { useAuth } from '@clerk/nextjs'
import { Button } from '../ui/button'

function SignOutButton() {
  return (
    const { signOut } = useAuth

    <div>
      <Button>Logout</Button>
    </div>
  )
}

export default SignOutButton
