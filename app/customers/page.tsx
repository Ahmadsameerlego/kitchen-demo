import Link from 'next/link'
import { MessageCircle, Phone, Search } from 'lucide-react'
import { customers } from '../../src/lib/mock'

export default function CustomersPage() {
  return (
    <div className="page">
      <div className="section-head">
        <div>
          <div className="eyebrow">قاعدة العملاء</div>
          <h1 className="page-title">العملاء</h1>
          <p className="page-subtitle">ملفات بسيطة توضح بيانات التواصل، آخر طلب، وحالة العلاقة مع العميل.</p>
        </div>
      </div>

      <div className="panel mb-5 p-4">
        <div className="relative max-w-xl">
          <Search className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-stone-400" size={17} />
          <input placeholder="بحث باسم العميل أو رقم الموبايل" className="input pr-10" />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {customers.map(customer => (
          <Link key={customer.id} href={`/customers/${customer.id}`} className="card block transition hover:-translate-y-0.5 hover:shadow-panel">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-ink-900">{customer.name}</h3>
                <p className="ltr mt-1 text-right text-sm text-ink-500">{customer.phone}</p>
              </div>
              <span className="badge-green">عميل نشط</span>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2">
              <div className="stat-tile">
                <div className="text-xs text-ink-500">منذ</div>
                <div className="mt-1 font-bold text-ink-900">{customer.since}</div>
              </div>
              <div className="stat-tile">
                <div className="text-xs text-ink-500">آخر طلب</div>
                <div className="ltr mt-1 font-bold text-ink-900">{customer.lastOrder}</div>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <button className="btn-secondary flex-1 px-3" type="button">
                <MessageCircle size={15} />
                واتساب
              </button>
              <button className="btn-secondary flex-1 px-3" type="button">
                <Phone size={15} />
                اتصال
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
