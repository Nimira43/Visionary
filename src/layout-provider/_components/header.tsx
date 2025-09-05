import { IUser } from '@/app/interfaces'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { TbAlignCenter } from 'react-icons/tb'
import PrivateLayoutSidebar from './sidebar'
import usersGlobalStore, { IUsersGlobalStore } from '@/global-store/users-store'

function PrivateLayoutHeader() {
  const { user } = usersGlobalStore() as IUsersGlobalStore
  const [openSidebar, setOpenSidebar] = useState(false)
  return (
    <div className='bg-main-light p-5 flex justify-between items-center'>
      <h1 className='text-main-dark text-4xl logo'>Visionary</h1>
      <div className='flex gap-5 items-center'>
        <span className='text-sm text-main-dark'>
          {user.name}
        </span>
        <Button
        onClick={() => setOpenSidebar(true)}
          variant='special'
        >
          <TbAlignCenter              
          size={15}
        />
        </Button>
      </div>
      {openSidebar && (
        <PrivateLayoutSidebar 
          openSidebar={openSidebar}
          onClose={()=> setOpenSidebar(false)}
        />
      )}
    </div>
  )
}

export default PrivateLayoutHeader