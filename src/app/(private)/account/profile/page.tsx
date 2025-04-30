'use client'

import { z } from 'zod'

function ProfilePage() {
  const formSchema = z.object({
    username: z.string().min(2, {
      message: 'Username must be at least 2 characters',
    }),
  })
  
  return (
    <div>
      
    </div>
  )
}

export default ProfilePage
