'use client'

import { usePathname } from 'next/navigation'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

const publicScreens = ['/login', '/branch-selection']

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isPublicScreen = publicScreens.some(path => pathname === path || pathname.startsWith(`${path}/`))

  if (isPublicScreen) return <>{children}</>

  return (
    <div className="min-h-screen lg:flex">
      <Sidebar />
      <div className="min-w-0 flex-1">
        <main>
          <Topbar />
          {children}
        </main>
      </div>
    </div>
  )
}
