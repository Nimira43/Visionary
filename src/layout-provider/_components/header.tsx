import { IUser } from '@/app/interfaces'
import { Button } from '@/components/ui/button'
import { TbAlignCenter } from 'react-icons/tb'

function PrivateLayoutHeader({ user } : 
  { user: IUser }
) {
  return (
    <div className='bg-main-light p-5 flex justify-between items-center'>
      <h1 className='text-main-dark text-4xl logo'>Visionary</h1>
      <div className='flex gap-5 items-center'>
        <span className='text-sm text-main-dark'>Username</span>
        <Button
          variant='special'
        >
          <TbAlignCenter              
          size={15}
        />
        </Button>
        
      </div>
    </div>
  )
}

export default PrivateLayoutHeader