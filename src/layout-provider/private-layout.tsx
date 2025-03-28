import React from 'react'
import PrivateLayoutHeader from './components/header'

function PrivateLayout({ children }: {
  children: React.ReactNode
}) {
  const [user, setUser] = React.useState(null)
  return (
    <div>
      <PrivateLayoutHeader />
      {children}
    </div>
  )
} 

export default PrivateLayout
