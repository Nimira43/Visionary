import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'

function PrivateLayoutSidebar({ 
  onClose,
  openSidebar 
} : {
  onClose: () => void,
  openSidebar: boolean
}) {
  return (
    <Sheet
      open={openSidebar}
      onOpenChange={onClose}
    >
      <SheetContent className='min-w-[500px] flex justify-center items-center bg-main-light'>
        <SheetHeader>
          <SheetTitle></SheetTitle>
        </SheetHeader>

        {formType === 'sign-in' ? (
          <SignIn
            routing='hash'
            signUpUrl='/?formType=sign-up'
            fallbackRedirectUrl='/account'
          />
        ) : (
          <SignUp
            routing='hash'
            signInUrl='/?formType=sign-in'
            fallbackRedirectUrl='/account'  
          />
        )}

      </SheetContent>
    </Sheet>
  )
}

export default PrivateLayoutSidebar