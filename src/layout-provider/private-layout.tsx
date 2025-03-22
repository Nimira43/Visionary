import PrivateLayoutHeader from './components/header'

function PrivateLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <div>
      <PrivateLayoutHeader />
      {children}
    </div>
  )
} 

export default PrivateLayout
