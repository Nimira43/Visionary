import { Button } from '@/components/ui/button'
import { FiMenu } from 'react-icons/fi'
import { IUser } from '../../interfaces/index'

function PrivateLayoutHeader({ user }: { user: IUser }) {
  return (
    <div className='bg-primary-light p-5 flex justify-between items-center'>
      <h1 className='text-primary-dark text-3xl logo'>Visionary</h1>
      <div className='flex gap-5 items-center'>
        <span className='text-sm text-primary-dark hover:text-dark cursor-pointer'>Placeholder</span>
        <Button>
          <FiMenu
            size={15}
            className='text-primary-light'
          />
        </Button>
      </div>
    </div>
  )
}

export default PrivateLayoutHeader
