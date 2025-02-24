import { currentUser } from '@clerk/nextjs/server'


async function AccountPage() {
  const loggedInUser = await currentUser()
  console.log(loggedInUser)
  return (
    <div>
      <h1>Account Page</h1>
    </div>
  )
}

export default AccountPage
