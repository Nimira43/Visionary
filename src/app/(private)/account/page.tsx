import SignOutButton from '@/components/functional/sign-out-button'
import { UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'

async function AccountPage() {
  const loggedInUser = await currentUser()
  
  return (
    <div className='flex flex-col gap-5 p-5 text-dark'>
      <h1 className='uppercase font-medium'>Account Page</h1>
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
