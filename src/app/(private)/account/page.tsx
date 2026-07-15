import Link from "next/link"

async function AccountPage() {
  return (
    <div>
      <h1>Account Page</h1>
      
      <Link href='/portfolio/1'>
        See Portfolio
      </Link>
    </div>
  )
}

export default AccountPage
