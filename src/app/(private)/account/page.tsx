import { getCurrentUser } from '@/actions/users'
import SignOutButton from '@/components/functional/sign-out-button'
import { UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'

async function AccountPage() {
  const loggedInUser = await currentUser()
  const supdabaseUserResponse = await getCurrentUser()
 
  console.log(supdabaseUserResponse)

  return (
    <div className='flex flex-col gap-5 p-5 text-dark'>
      <h1 className='bg-primary-light text-primary-dark uppercase text-2xl p-5 rounded-lg'>Account Page</h1>
      <hr />
      <h2>User ID: {loggedInUser?.id}</h2>
      <h2>First Name: {loggedInUser?.firstName}</h2>
      <h2>Last Name: {loggedInUser?.lastName}</h2>
      <h2>Email: {loggedInUser?.emailAddresses[0].emailAddress}</h2>
      <UserButton />
      <SignOutButton />
    </div>
  )
}

export default AccountPage
