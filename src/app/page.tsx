import { Button } from "@/components/ui/button"

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
        <h1 className='logo text-main-dark text-4xl'>Visionary</h1>
        <div className='flex justify-end gap-5 items-center'>
          {menuItems.map((item) => (
              <span
                key={item.title}
                className='text-sm text-dark hover:text-main-dark cursor-pointer uppercase font-normal'
              >
                {item.title}
              </span>
          ))}
          <Button className='uppercase'>
            Login
          </Button>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-10 mt-20 h-[70vh] px-20 '>
          <div className='flex flex-col justify-center'>
            <div>
              <h1 className='text-4xl text-main-dark logo pb-5'>Visionary Solutions</h1>
              <p className='text-grey-dark mt-2 text-sm font-normal'>Unlock your potential with our cutting-edge portfolio builder. Showcase your skills, achievements, and projects in a visually stunning and professional manner. Take control of your career and make your mark with ease. Visualise Your Future today.</p>
            </div>
          </div>
          <div className='flex justify-center'>
            <img src="/images/homepage.svg" alt="Home page image" />
          </div>
      </div>
    </div>     
  )
}

export default HomePage
