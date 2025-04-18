import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { AiOutlineHome } from 'react-icons/ai'
import { RiUser6Line } from 'react-icons/ri'
import { MdOutlineSchool } from 'react-icons/md'
import { GiAtom } from 'react-icons/gi'
import { LiaProjectDiagramSolid } from 'react-icons/lia'
import { VscChecklist } from "react-icons/vsc"
import { usePathname, useRouter } from 'next/navigation'

function PrivateLayoutSidebar({
  onClose, openSidebar
}: { onClose: () => void, openSidebar: boolean }) {

  const pathname = usePathname()
  const router = useRouter()
  const menuItems = [
    {
      title: 'Home',
      path: '/account',
      icon: <AiOutlineHome size={14} />
    },
    {
      title: 'Profile',
      path: '/account/profile',
      icon: <RiUser6Line size={14} />
    },
    {
      title: 'Education',
      path: '/account/education',
      icon: <MdOutlineSchool size={14} />
    },
    {
      title: 'Skills',
      path: '/account/skills',
      icon: <GiAtom size={14} />
    },
    {
      title: 'Projects',
      path: '/account/projects',
      icon: <LiaProjectDiagramSolid size={14} />
    },
    {
      title: 'Experiences',
      path: '/account/experiences',
      icon: <VscChecklist size={14} />
    }
  ]

  return (
    <Sheet
      open={openSidebar}
      onOpenChange={onClose}
    >
      <SheetContent className='min-w-[300px] bg-primary-light'>
        <SheetHeader>
          <SheetTitle></SheetTitle>
        </SheetHeader>
        <div className='flex flex-col gap-7 mt-10'>
          {menuItems.map((item) => (
            <div
              key={item.title}
              className={`flex gap-4 items-center p-3 cursor-pointer ${
                pathname === item.path
                  ? 'border-b border-b-primary-medium cursor-pointer'
                  : ''
                }`
              }
              onClick={() => {
                router.push(item.path)
                onClose()
              }}
            >
              {item.icon}
              <span className='text-sm font-medium text-dark hover:text-primary-dark uppercase'>
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
