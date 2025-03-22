import { FiMenu } from 'react-icons/fi'

function PrivateLayoutHeader() {
  return (
    <div className='bg-primary-light p-5 flex justify-between items-center'>
      <h1 className='text-primary-dark text-3xl logo'>Visionary</h1>
      <div className='flex gap-5 items-center'>
        <span className='text-sm text-primary-dark hover:text-dark cursor-pointer'>Placeholder</span>
        <FiMenu className='text-3xl text-primary-dark hover:text-dark cursor-pointer'/>
      </div>
    </div>
  )
}

export default PrivateLayoutHeader
