import { currentUser } from '@clerk/nextjs/server'

async function AccountPage() {
  const loggedInUser = await currentUser()

  return (
    <div className='flex flex-col gap-5'>
      <h1>Account Page</h1>
      <hr />
      <h1>First Name: {loggedInUser?.firstName}</h1>
      <h1>Last Name: {loggedInUser?.lastName}</h1>
      <h1>Email: {loggedInUser?.emailAddresses[0].emailAddress}</h1>
    </div>
  )
}

export default AccountPage
