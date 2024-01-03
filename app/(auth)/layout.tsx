
'use client'
import PageIllustration from '@/components/page-illustration'
import { AuthContextProvider } from '../context/AuthContext'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <main className="grow">
        <AuthContextProvider>

      <PageIllustration />

      {children}
      </AuthContextProvider>

    </main>
  )
}
