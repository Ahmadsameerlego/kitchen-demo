import { Filter, PackagePlus, Search } from 'lucide-react'
import OrderCard from '../../src/components/OrderCard'
import { orders } from '../../src/lib/mock'

export default function OrdersPage() {
  return (
    <div className="page">
      <div className="section-head">
        <div>
          <div className="eyebrow">التشغيل</div>
          <h1 className="page-title">طلبات المطابخ</h1>
          <p className="page-subtitle">متابعة حالة كل مطبخ من المعاينة والتصميم حتى التسليم والتركيب.</p>
        </div>
        <button className="btn-primary">
          <PackagePlus size={17} />
          طلب جديد
        </button>
      </div>

      <div className="panel mb-5 p-4">
        <div className="grid gap-3 lg:grid-cols-[1fr_190px_190px_150px]">
          <div className="relative">
            <Search className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-stone-400" size={17} />
            <input className="input pr-10" placeholder="بحث برقم الطلب أو اسم العميل" />
          </div>
          <select className="select">
            <option>جميع الحالات</option>
            <option>تصنيع</option>
            <option>جاهز للتسليم</option>
          </select>
          <select className="select">
            <option>كل الفروع</option>
            <option>مدينة نصر</option>
            <option>القاهرة الجديدة</option>
          </select>
          <button className="btn-secondary">
            <Filter size={16} />
            تطبيق
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {orders.map(order => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  )
}
