'use client'

import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { useSearchParams } from 'next/navigation'
import { SignIn, SignUp } from '@clerk/nextjs'

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
  const formType = searchParams.get('formType')

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
          <Button 
            onClick={() => setOpenSheet(true)}
            className='uppercase'
          >
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
      {openSheet && (
        <Sheet
          open={openSheet}
          onOpenChange={setOpenSheet}
        >
          <SheetContent className='min-w-[500px] flex justify-center items-center bg-main-light'>
            <SheetHeader>
              <SheetTitle></SheetTitle>
            </SheetHeader>

            {formType === 'sign-in' ? (
              <SignIn
                routing='hash'
                signUpUrl='/?formType=sign-up'
                fallbackRedirectUrl='/account'
              />
            ) : (
              <SignUp
                routing='hash'
                signInUrl='/?formType=sign-in'
                fallbackRedirectUrl='/account'  
              />
            )}
 
          </SheetContent>
        </Sheet>
      )}
    </div>    
  )
}

export default HomePage
