import { currentUser } from '@clerk/nextjs/server'
import ProfilePage from './profile/page'

async function AccountPage() {
  const loggedInUser = await currentUser()
  
  return (
    <ProfilePage />
  )
}

export default AccountPage
