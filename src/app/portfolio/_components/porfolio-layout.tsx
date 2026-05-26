function PortfolioLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <h1>Portfolio Header</h1>
      {children}      
    </div>
  )
}

export default PortfolioLayout
