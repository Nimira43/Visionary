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
      icon: <RiHome9Line />
    },
    {
      title: 'Profile',
      path: '/',
      icon: <RiUser6Line />
    },
    {
      title: 'Education',
      path: '/',
      icon: < RiSchoolLine/>
    },
    {
      title: 'Projects',
      path: '/',
      icon: <RiListUnordered />
    },
    {
      title: 'Skills',
      path: '/',
      icon: <RiAwardLine />
    },
    {
      title: 'Experience',
      path: '/',
      icon: <RiBookShelfLine />
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