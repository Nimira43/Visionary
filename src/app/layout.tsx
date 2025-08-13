import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import LayoutProvider from '@/layout-provider'
import { Toaster} from 'react-hot-toast'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Visionary',
  description: 'Portfolio application using Next JS, Tailwind, TypeScript, Clerk, Shadcn and Supabase.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={poppins.className}>
          <LayoutProvider>
            {children}
          </LayoutProvider>
          <Toaster 
            position='top-right' 
            reverseOrder={false}
          />
        </body>
      </html>
    </ClerkProvider>
  )
}
