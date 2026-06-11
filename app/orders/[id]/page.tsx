import { CalendarDays, CreditCard, Ruler } from 'lucide-react'
import ProgressStepper from '../../../src/components/ProgressStepper'
import Timeline from '../../../src/components/Timeline'
import { orders } from '../../../src/lib/mock'

export default function OrderDetail({ params }: { params: { id: string } }) {
  const order = orders.find(o => o.id === params.id) || orders[0]
  const steps = ['المعاينة', 'التصميم', 'اعتماد العرض', 'التصنيع', 'جاهز للتسليم', 'التركيب', 'مكتمل']
  const activity = [
    { text: 'تم تحديث الحالة إلى التصنيع', time: 'اليوم 11:20' },
    { text: 'تم اعتماد التصميم النهائي', time: 'أمس' },
    { text: 'تم تسجيل المقاسات داخل النظام', time: 'قبل 3 أيام' }
  ]

  return (
    <div className="page">
      <div className="section-head">
        <div>
          <div className="eyebrow">تفاصيل الطلب</div>
          <h1 className="page-title">
            <span className="ltr">{order.orderNumber}</span> - {order.customerName}
          </h1>
          <p className="page-subtitle">متابعة تشغيلية واضحة للفريق والعميل بدون تفاصيل زائدة.</p>
        </div>
        <span className={order.status === 'MANUFACTURING' ? 'badge-amber' : 'badge-green'}>
          {order.status === 'MANUFACTURING' ? 'قيد التصنيع' : 'جاهز للتسليم'}
        </span>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
        <main className="space-y-6">
          <ProgressStepper steps={steps} current={3} />

          <section className="grid gap-4 md:grid-cols-3">
            <div className="card">
              <Ruler className="text-brand-600" size={22} />
              <div className="mt-3 text-sm text-ink-500">نوع المطبخ</div>
              <div className="mt-1 text-lg font-bold text-ink-900">مودرن L Shape</div>
            </div>
            <div className="card">
              <CreditCard className="text-brand-600" size={22} />
              <div className="mt-3 text-sm text-ink-500">المدفوع</div>
              <div className="mt-1 text-lg font-bold text-ink-900">35,000 / 60,000 ج.م</div>
            </div>
            <div className="card">
              <CalendarDays className="text-brand-600" size={22} />
              <div className="mt-3 text-sm text-ink-500">التسليم المتوقع</div>
              <div className="mt-1 text-lg font-bold text-ink-900">بعد 12 يوم</div>
            </div>
          </section>

          <section className="card">
            <h2 className="font-bold text-ink-900">ملاحظات التشغيل</h2>
            <p className="mt-2 text-sm leading-6 text-ink-500">
              اللون المعتمد أوف وايت مع سطح رمادي. يجب تأكيد موعد التركيب مع العميل قبل التسليم بيومين.
            </p>
          </section>
        </main>

        <aside className="space-y-4">
          <div className="card">
            <h2 className="font-bold text-ink-900">معلومات العميل</h2>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <span className="text-ink-500">الاسم</span>
                <span className="font-semibold text-ink-900">{order.customerName}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-ink-500">الفرع</span>
                <span className="font-semibold text-ink-900">{order.branchId === 'nasr' ? 'مدينة نصر' : 'القاهرة الجديدة'}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-ink-500">المسؤول</span>
                <span className="font-semibold text-ink-900">أحمد سمير</span>
              </div>
            </div>
          </div>
          <Timeline items={activity} title="سجل الطلب" />
        </aside>
      </div>
    </div>
  )
}
