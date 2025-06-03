function HomePage() {
  const menuItems = [
    {
      title: 'Home',
      path: '/'
    },
    {
      title: 'About',
      path: '/about'
    },
    {
      title: 'Contact',
      path: '/contact'
    },
  ]

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex justify-between items-center bg-main-light px-20 py-5'>
        <h1 className='logo text-dark text-4xl'>Visionary</h1>
        <div className='flex justify-end gap-5 items-center'>
        {menuItems.map((item) => (
            <span
              key={item.title}
              className='text-sm text-dark hover:text-main-dark cursor-pointer uppercase font-normal'
            >
              {item.title}
            </span>
        ))}
        </div>
      </div>
    </div>    
    
  )
}

export default HomePage
