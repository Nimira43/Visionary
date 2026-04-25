'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { useSearchParams } from 'next/navigation'
import { SignIn, SignUp } from '@clerk/nextjs'
import { Menu } from 'lucide-react'

const menuItems = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
]

export default function HomePage() {
  const [openSheet, setOpenSheet] = useState(false)
  const [openMobileMenu, setOpenMobileMenu] = useState(false)
  const searchParams = useSearchParams()
  const formType = searchParams.get('formType')

  return (
    <div className='flex flex-col min-h-screen bg-main-light'>
      
      <nav className='w-full border-b border-main-dark/10 bg-main-light'>
        <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
          <h1 className='logo text-main-dark text-3xl md:text-4xl'>
            Visionary
          </h1>

          <div className='hidden md:flex items-center gap-8'>
            {menuItems.map((item) => (
              <span
                key={item.title}
                className='text-sm text-dark hover:text-main-dark cursor-pointer uppercase'
              >
                {item.title}
              </span>
            ))}
            <Button
              onClick={() => setOpenSheet(true)}
              className='main-button'
            >
              Login
            </Button>
          </div>

          <button
            className='md:hidden'
            onClick={() => setOpenMobileMenu(true)}
          >
            <Menu size={28} className='text-main-dark' />
          </button>
        </div>
      </nav>

      {openMobileMenu && (
        <Sheet
          open={openMobileMenu}
          onOpenChange={setOpenMobileMenu}
        >
          <SheetContent side='left' className='bg-main-light'>
            <SheetHeader>
              <SheetTitle></SheetTitle>
            </SheetHeader>

            <div className='flex flex-col gap-6 mt-6'>
              {menuItems.map((item) => (
                <span
                  key={item.title}
                  className='text-lg text-dark hover:text-main-dark cursor-pointer uppercase'
                >
                  {item.title}
                </span>
              ))}

              <Button
                onClick={() => {
                  setOpenMobileMenu(false)
                  setOpenSheet(true)
                }}
                className='main-button mt-4'
              >
                Login
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      )}

      <section className='flex flex-col md:grid md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto px-6 mt-20'>
        
        <div className='flex flex-col justify-center'>
          <h1 className='text-4xl md:text-5xl text-main-dark logo leading-tight'>
            Visionary Solutions
          </h1>
          <p className='text-grey-1 mt-4 text-base md:text-lg max-w-md'>
            Unlock your potential with our cutting-edge portfolio builder.
            Showcase your skills, achievements, and projects in a visually
            stunning and professional manner. Take control of your career and
            visualise your future today.
          </p>

          <Button
            onClick={() => setOpenSheet(true)}
            className='main-button mt-6 w-fit'
          >
            Get Started
          </Button>
        </div>

        <div className='flex justify-center '>
          <img
            src='/images/homepage.svg'
            alt='Visionary homepage illustration'
            className='w-full max-w-md md:max-w-lg'
          />
        </div>
      </section>

      {openSheet && (
        <Sheet open={openSheet} onOpenChange={setOpenSheet}>
          <SheetContent className='min-w-[400px] md:min-w-[500px] flex justify-center items-center bg-main-light'>
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
