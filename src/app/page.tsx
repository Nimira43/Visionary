import { Button } from '@/components/ui/button'

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
      <div className='flex justify-between items-center bg-primary-light px-20 py-5'>
        <h1 className='text-primary-dark logo text-2xl'>Visionary</h1>
        <div className='flex justify-end gap-5 items-center'>
          {menuItems.map((item) => (
            <span
              key={item.title}
              className='text-sm font-light text-primary-dark hover:text-dark cursor-pointer'
            >
              {item.title}
            </span>
          ))}
          <Button className='font-light uppercase'>Login</Button>
        </div>
      </div>
   </div>
  )  
}

export default HomePage

