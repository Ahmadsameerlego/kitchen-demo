import { MessageCircle, Phone, Plus } from 'lucide-react'
import Timeline from '../../../src/components/Timeline'
import { customers, orders } from '../../../src/lib/mock'

export default function CustomerDetail({ params }: { params: { id: string } }) {
  const customer = customers.find(c => c.id === params.id) || customers[0]
  const activity = [
    { text: 'تم إنشاء طلب جديد: ORD-2024-001', time: '2024-05-02' },
    { text: 'مكالمة متابعة بخصوص لون الخشب', time: '2024-04-20' },
    { text: 'تم تحويل الزائر إلى عميل', time: customer.since }
  ]

  return (
    <div className="page">
      <div className="section-head">
        <div>
          <div className="eyebrow">ملف العميل</div>
          <h1 className="page-title">{customer.name}</h1>
          <p className="page-subtitle">كل ما يحتاجه موظف المبيعات أو التشغيل للتعامل مع العميل بسرعة.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="btn-secondary">
            <Phone size={17} />
            اتصال
          </button>
          <button className="btn-primary">
            <MessageCircle size={17} />
            واتساب
          </button>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
        <main className="space-y-6">
          <section className="panel p-5">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="stat-tile">
                <div className="text-xs text-ink-500">رقم الموبايل</div>
                <div className="ltr mt-1 text-right text-lg font-bold text-ink-900">{customer.phone}</div>
              </div>
              <div className="stat-tile">
                <div className="text-xs text-ink-500">عميل منذ</div>
                <div className="mt-1 text-lg font-bold text-ink-900">{customer.since}</div>
              </div>
              <div className="stat-tile">
                <div className="text-xs text-ink-500">آخر طلب</div>
                <div className="ltr mt-1 text-lg font-bold text-ink-900">{customer.lastOrder}</div>
              </div>
            </div>
          </section>

          <section className="panel overflow-hidden">
            <div className="flex items-center justify-between border-b border-stone-200 p-5">
              <div>
                <h2 className="text-lg font-bold text-ink-900">طلبات العميل</h2>
                <p className="text-sm text-ink-500">متابعة حالة المطابخ المرتبطة بهذا العميل</p>
              </div>
              <button className="btn-primary">
                <Plus size={16} />
                طلب جديد
              </button>
            </div>
            <div className="divide-y divide-stone-200">
              {orders.map(order => (
                <div key={order.id} className="flex items-center justify-between gap-4 p-5">
                  <div>
                    <div className="font-bold text-ink-900">{order.customerName}</div>
                    <div className="ltr text-sm text-ink-500">{order.orderNumber}</div>
                  </div>
                  <span className={order.status === 'MANUFACTURING' ? 'badge-amber' : 'badge-green'}>
                    {order.status === 'MANUFACTURING' ? 'تصنيع' : 'جاهز للتسليم'}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="card">
            <h2 className="font-bold text-ink-900">ملاحظات مهمة</h2>
            <p className="mt-2 text-sm leading-6 text-ink-500">
              العميل مهتم بمطبخ مودرن، يفضل ألوان هادئة، ويريد متابعة بعد تجهيز عرض السعر النهائي.
            </p>
          </section>
        </main>

        <Timeline items={activity} title="تاريخ التعامل" />
      </div>
    </div>
  )
}
