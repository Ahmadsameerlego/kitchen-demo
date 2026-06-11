import Link from 'next/link'
import { Filter, Search, UserPlus } from 'lucide-react'
import VisitorCard from '../../src/components/VisitorCard'
import { visitors } from '../../src/lib/mock'

export default function VisitorsPage() {
  return (
    <div className="page">
      <div className="section-head">
        <div>
          <div className="eyebrow">CRM بسيط</div>
          <h1 className="page-title">الزوار والمتابعات</h1>
          <p className="page-subtitle">
            سجل الزائر بسرعة، ابحث بالموبايل، وافتح واتساب أو حوّل الزائر لعميل من نفس الشاشة.
          </p>
        </div>
        <Link href="/visitors/new" className="btn-primary">
          <UserPlus size={17} />
          تسجيل زائر جديد
        </Link>
      </div>

      <div className="panel mb-5 p-4">
        <div className="grid gap-3 lg:grid-cols-[1fr_180px_160px]">
          <div className="relative">
            <Search className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-stone-400" size={17} />
            <input className="input pr-10" placeholder="بحث بالاسم أو آخر 4 أرقام من الموبايل" />
          </div>
          <select className="select">
            <option>كل الفروع</option>
            <option>مدينة نصر</option>
            <option>القاهرة الجديدة</option>
          </select>
          <button className="btn-secondary">
            <Filter size={16} />
            فلترة
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visitors.map(visitor => (
          <VisitorCard key={visitor.id} v={visitor} />
        ))}
      </div>
    </div>
  )
}
