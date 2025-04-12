import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'

function PrivateLayoutSidebar() {
  return (
    <Sheet
      open={openSheet}
      onOpenChange={setOpenSheet}
    >
      <SheetContent className='min-w-[500px] flex justify-center items-center bg-primary-light'>
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
