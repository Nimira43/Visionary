import { currentUser } from '@clerk/nextjs/server'

async function AccountPage() {
  const loggedInUser = await currentUser()
  
  return (
    <div>Account Page</div>
  )
}

export default AccountPage
