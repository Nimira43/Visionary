import SignOutButton from '@/components/functional/sign-out-button'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { usePathname, useRouter } from 'next/navigation'
import { RiHome9Line, RiUser6Line, RiSchoolLine, RiListUnordered, RiAwardLine, RiBookShelfLine, RiSettings4Line, RiQuestionLine } from "react-icons/ri"

function PrivateLayoutSidebar({ 
  onClose,
  openSidebar 
} : {
  onClose: () => void,
  openSidebar: boolean
}) {
  const pathname = usePathname()
  const router = useRouter()

  const menuItems = [
    {
      title: 'Home',
      path: '/account',
      icon: <RiHome9Line size={14} />
    },
    {
      title: 'Profile',
      path: '/account/profile',
      icon: <RiUser6Line size={14} />
    },
    {
      title: 'Education',
      path: '/account/education',
      icon: < RiSchoolLine size={14}/>
    },
    {
      title: 'Projects',
      path: '/account/projects',
      icon: <RiListUnordered size={14} />
    },
    {
      title: 'Skills',
      path: '/account/skills',
      icon: <RiAwardLine size={14} />
    },
    {
      title: 'Experiences',
      path: '/account/experiences',
      icon: <RiBookShelfLine size={14} />
    },
    {
      title: 'Configurations',
      path: '/account/configurations',
      icon: <RiSettings4Line size={14} />
    },
    {
      title: 'Queries',
      path: '/account/queries',
      icon: <RiQuestionLine size={14} />
    },
  ]
  
  return (
    <Sheet
      open={openSidebar}
      onOpenChange={onClose}
    >
      <SheetContent className='min-w-[300px] flex justify-center items-center bg-light'>
        <SheetHeader>
          <SheetTitle className='sr-only'>Menu</SheetTitle>
          <SheetDescription className='sr-only'>Sidebar menu</SheetDescription>
        </SheetHeader>
        <div className='flex flex-col gap-5'>
          {menuItems.map((item) => (
            <div
              key={item.title}
              className={
                `flex gap-4 p-2 items-center font-medium hover:text-main-dark hover-transition cursor-pointer ${
                  pathname === item.path
                    ? 'bg-main-light rounded'
                    : ''
                }
              `}
              onClick={() => {
                router.push(item.path)
                onClose()
              }}
            >
              {item.icon}
              <span
                className='text-lg'
              >
                {item.title}
              </span>
            </div>
          ))}
          <SignOutButton />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default PrivateLayoutSidebar