import { getCurrentUser } from '@/actions/users'
import SignOutButton from '@/components/functional/sign-out-button'
import { UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'

async function AccountPage() {
  const loggedInUser = await currentUser()
  const superbaseUserResponse = await getCurrentUser()
  console.log(superbaseUserResponse)

  return (
    <div className='flex flex-col gap-5 p-5'>
      <h1>Account Page</h1>
      <hr />
      <h1>Clerk User ID: {loggedInUser?.id}</h1>
      <h1>First Name: {loggedInUser?.firstName}</h1>
      <h1>Last Name: {loggedInUser?.lastName}</h1>
      <h1>Email: {loggedInUser?.emailAddresses[0].emailAddress}</h1>
      <UserButton />
      <SignOutButton />
    </div>
  )
}

export default AccountPage
