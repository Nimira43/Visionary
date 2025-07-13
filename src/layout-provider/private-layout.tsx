function PrivateLayout({children} : {
  children: React.ReactNode
}) {
  return (
    <div>
      <h1>Header</h1>
      {children}
    </div>
  )
}

export default PrivateLayout
