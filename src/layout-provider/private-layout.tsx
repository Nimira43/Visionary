import { useState } from 'react'
import PrivateLayoutHeader from './_components/header'

function PrivateLayout({children} : {
  children: React.ReactNode
}) {
  const [user, setUser] = useState(null)
  return (
    <div>
      <PrivateLayoutHeader />
      {children}
    </div>
  )
}

export default PrivateLayout
