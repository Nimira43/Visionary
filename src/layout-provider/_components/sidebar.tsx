import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'

function PrivateLayoutSidebar({ 
  onClose,
  openSidebar 
} : {
  onClose: () => void,
  openSidebar: boolean
}) {

  const menuItems = [
    {
      
    }
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