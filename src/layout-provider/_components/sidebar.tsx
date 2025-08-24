import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'
import { RiHome9Line, RiUser6Line, RiSchoolLine, RiListUnordered, RiAwardLine, RiBookShelfLine } from "react-icons/ri"

function PrivateLayoutSidebar({ 
  onClose,
  openSidebar 
} : {
  onClose: () => void,
  openSidebar: boolean
}) {
  const pathname = usePathname()
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
      title: 'Experience',
      path: '/account/experience',
      icon: <RiBookShelfLine size={14} />
    },
  ]
  
  return (
    <Sheet
      open={openSidebar}
      onOpenChange={onClose}
    >
      <SheetContent className='min-w-[300px] flex justify-center items-center bg-light'>
        <SheetHeader>
          <SheetTitle></SheetTitle>
        </SheetHeader>
        <div className='flex flex-col gap-5'>
          {menuItems.map((item) => (
            <div
              key={item.title}
              className='flex gap-4 items-center font-medium hover:text-main-dark hover-transition cursor pointer'
            >
              {item.icon}
              <span
                className='text-lg'
              >
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default PrivateLayoutSidebar