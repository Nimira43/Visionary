import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { RiHome9Line, RiUser6Line, RiSchoolLine, RiListUnordered, RiAwardLine, RiBookShelfLine } from "react-icons/ri"

function PrivateLayoutSidebar({ 
  onClose,
  openSidebar 
} : {
  onClose: () => void,
  openSidebar: boolean
}) {

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
      path: '/',
      icon: < RiSchoolLine size={14}/>
    },
    {
      title: 'Projects',
      path: '/',
      icon: <RiListUnordered size={14} />
    },
    {
      title: 'Skills',
      path: '/',
      icon: <RiAwardLine size={14} />
    },
    {
      title: 'Experience',
      path: '/',
      icon: <RiBookShelfLine size={14} />
    },
  ]

  return (
    <Sheet
      open={openSidebar}
      onOpenChange={onClose}
    >
      <SheetContent className='min-w-[300px] flex justify-center items-center bg-main-light'>
        <SheetHeader>
          <SheetTitle></SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default PrivateLayoutSidebar