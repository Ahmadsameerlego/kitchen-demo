'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BarChart3, Building2, Columns, Home, PackageCheck, Settings, UserPlus, Users } from 'lucide-react'

const navItems = [
  { href: '/dashboard', label: 'لوحة التشغيل', icon: Home },
  { href: '/visitors', label: 'الزوار والمتابعات', icon: UserPlus },
  { href: '/customers', label: 'العملاء', icon: Users },
  { href: '/pipeline', label: 'خط المبيعات', icon: Columns },
  { href: '/orders', label: 'طلبات المطابخ', icon: PackageCheck },
  { href: '/users', label: 'الموظفين', icon: Building2 },
  { href: '/settings', label: 'الإعدادات', icon: Settings }
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="sticky top-0 hidden h-screen w-72 shrink-0 border-l border-stone-200 bg-white/80 p-4 backdrop-blur-xl lg:block">
      <Link href="/dashboard" className="mb-6 flex items-center gap-3 rounded-lg border border-stone-200 bg-stone-50 p-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-600 text-white">
          <BarChart3 size={22} />
        </div>
        <div>
          <div className="font-bold text-ink-900">Kitchen Flow</div>
          <div className="text-xs text-ink-500">إدارة صالة المطابخ</div>
        </div>
      </Link>

      <nav className="space-y-1">
        {navItems.map(item => {
          const Icon = item.icon
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`)

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-semibold transition ${
                active
                  ? 'bg-brand-50 text-brand-700 shadow-sm'
                  : 'text-ink-500 hover:bg-stone-100 hover:text-ink-900'
              }`}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      <div className="absolute inset-x-4 bottom-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
        <div className="text-sm font-bold text-amber-900">وضع الديمو</div>
        <p className="mt-1 text-xs leading-5 text-amber-800">
          بيانات تجريبية جاهزة لعرض رحلة الزائر من التسجيل حتى الطلب.
        </p>
        <Link href="/visitors/new" className="btn-brass mt-3 w-full">
          تسجيل زائر
        </Link>
      </div>
    </aside>
  )
}
