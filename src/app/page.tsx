import { Button } from '@/components/ui/button'
import React from 'react'

function HomePage() {
  return (
    <>
      <div className='bg-dark p-10'>
        <h1 className='logo text-main text-4xl'>Visionary</h1>
      </div>
      <div className='p-10 mt-10'>
        <Button className='uppercase'>Login</Button>
      </div>
    </>
    
  )
}

export default HomePage
