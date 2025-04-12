import { Button } from '@/components/ui/button'
import { FiMenu } from 'react-icons/fi'
import { IUser } from '../../interfaces/index'
import { useState } from 'react'
import PrivateLayoutSidebar from './sidebar';

function PrivateLayoutHeader({ user }: { user: IUser }) {
  const [openSidebar, setOpenSidebar] = useState(false)
  return (
    <div className='bg-primary-light p-5 flex justify-between items-center'>
      <h1 className='text-primary-dark text-3xl logo'>Visionary</h1>
      <div className='flex gap-5 items-center'>
        [openSidebar && (
        <PrivateLayoutSidebar
          onClose={() => setOpenSidebar(false)}
        />)] 
      </div>
    </div>
  )
}

export default PrivateLayoutHeader
