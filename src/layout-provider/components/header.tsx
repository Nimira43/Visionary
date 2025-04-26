import { IUser } from '../../interfaces/index'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { FiMenu } from 'react-icons/fi'
import PrivateLayoutSidebar from './sidebar'

function PrivateLayoutHeader() {
  const [openSidebar, setOpenSidebar] = useState(false)
  return (
    <div className='bg-primary-light p-5 flex justify-between items-center'>
      <h1 className='text-primary-dark text-3xl logo'>Visionary</h1>
      <div className='flex gap-5 items-center'>
        <span className='text-sm text-dark'>{user.name}</span>
        <Button
          onClick={() => setOpenSidebar(true)}
        >
          <FiMenu size={15} className='text-light' />
        </Button>
      </div>
      {openSidebar && (
        <PrivateLayoutSidebar
          openSidebar={openSidebar}
          onClose={() => setOpenSidebar(false)}
        />
      )}
    </div>
  )
}

export default PrivateLayoutHeader
