'use client'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { SignUp, SignIn } from '@clerk/nextjs'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

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

function HomePage() {
  const [openSheet, setOpenSheet] = useState(false)
  const searchParams = useSearchParams()

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex justify-between items-center bg-primary-light px-20 py-5'>
        <h1 className='text-primary-dark logo text-3xl'>Visionary</h1>
        <div className='flex justify-end gap-5 items-center'>
          {menuItems.map((item) => (
            <span
              key={item.title}
              className='text-sm font-light text-primary-dark hover:text-dark cursor-pointer'
            >
              {item.title}
            </span>
          ))}
          <Button
            onClick={() => setOpenSheet(true)}
            className='font-light uppercase'
          >
            Login
          </Button>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-10 mt-20 h-[70vh] px-20 items-center'>
        <div className='flex flex-col justify-center'>
          <h1 className='text-4xl text-primary-medium logo pb-5'>Visualise Your Future</h1>
          <p className='text-grey-dark font-light'>Unlock your potential with our cutting-edge portfolio builder. Showcase your skills, achievements, and projects in a visually stunning and professional manner. Take control of your career and make your mark with ease. Visualise Your Future today.</p>
        </div>
        <div className='flex justify-center'>
          <img src='/images/hero.png' alt='Hero image' />
        </div>
      </div>

      {openSheet && (
        <Sheet
          open={openSheet}
          onOpenChange={setOpenSheet}
        >
          <SheetContent className='min-w-[500px] flex justify-center items-center bg-primary-light'>
            <SheetHeader>
              <SheetTitle></SheetTitle>
            </SheetHeader>
            <SignUp
              routing='hash'
              signInUrl='/?formType=sign-in'
            />
          </SheetContent>
        </Sheet>
      )}
    </div>
  )
}

export default HomePage


