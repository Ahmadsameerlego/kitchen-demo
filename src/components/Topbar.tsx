import Link from 'next/link'
import { Bell, Menu, Plus, Search } from 'lucide-react'

export default function Topbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-stone-200 bg-white/75 backdrop-blur-xl">
      <div className="flex min-h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <button className="icon-btn lg:hidden" aria-label="فتح القائمة">
            <Menu size={18} />
          </button>
          <div className="hidden sm:block">
            <div className="text-sm font-bold text-ink-900">فرع مدينة نصر</div>
            <div className="text-xs text-ink-500">الخميس، متابعة تشغيل المعرض</div>
          </div>
        </div>

        <div className="hidden min-w-0 flex-1 justify-center md:flex">
          <div className="relative w-full max-w-xl">
            <Search className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-stone-400" size={17} />
            <input className="input pr-10" placeholder="بحث باسم العميل، رقم الموبايل، أو رقم الطلب" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/visitors/new" className="btn-primary hidden sm:inline-flex">
            <Plus size={17} />
            زائر جديد
          </Link>
          <button className="icon-btn" aria-label="التنبيهات">
            <Bell size={18} />
          </button>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-900 text-sm font-bold text-white">
            أ
          </div>
        </div>
      </div>
    </header>
  )
}
