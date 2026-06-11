import Link from 'next/link'
import { CalendarClock, ClipboardCheck, MessageCircle, PackageCheck, TrendingUp, UserPlus } from 'lucide-react'
import KpiCard from '../../src/components/KpiCard'
import Timeline from '../../src/components/Timeline'
import VisitorCard from '../../src/components/VisitorCard'
import { branches, orders, visitors } from '../../src/lib/mock'

export default function Dashboard() {
  const activity = [
    { text: 'تم تسجيل زائر جديد: أحمد علي', time: 'قبل 10 دقائق' },
    { text: 'تم تجهيز متابعة واتساب لمريم حسين', time: 'اليوم 09:00' },
    { text: 'تم تحديث طلب ORD-2024-001 إلى مرحلة التصنيع', time: 'أمس' }
  ]

  return (
    <div className="page">
      <div className="section-head">
        <div>
          <div className="eyebrow">تشغيل المعرض اليوم</div>
          <h1 className="page-title">صباح الخير، أحمد</h1>
          <p className="page-subtitle">
            شاشة واحدة لمتابعة الزوار، فرص البيع، وطلبات المطابخ بين فرعي مدينة نصر والقاهرة الجديدة.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link href="/visitors/new" className="btn-primary">
            <UserPlus size={17} />
            تسجيل زائر
          </Link>
          <Link href="/orders" className="btn-secondary">
            <PackageCheck size={17} />
            متابعة الطلبات
          </Link>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard title="زوار اليوم" value="12" hint="+4 عن أمس" icon={UserPlus} tone="green" />
        <KpiCard title="متابعات مستحقة" value="7" hint="3 واتساب + 4 مكالمات" icon={MessageCircle} tone="amber" />
        <KpiCard title="عروض نشطة" value="5" hint="إجمالي 185,000 ج.م" icon={TrendingUp} tone="blue" />
        <KpiCard title="طلبات في التنفيذ" value="20" hint="طلبان جاهزان للتسليم" icon={ClipboardCheck} tone="rose" />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_.9fr]">
        <section className="panel overflow-hidden">
          <div className="border-b border-stone-200 p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-ink-900">نظرة الفروع</h2>
                <p className="text-sm text-ink-500">أرقام تشغيل سريعة بدون تعقيد</p>
              </div>
              <span className="badge-green">فرعين نشطين</span>
            </div>
          </div>
          <div className="grid gap-4 p-5 md:grid-cols-2">
            {branches.map(branch => (
              <div key={branch.id} className="rounded-lg border border-stone-200 bg-stone-50 p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-ink-900">{branch.name}</h3>
                    <p className="text-sm text-ink-500">{branch.address}</p>
                  </div>
                  <span className="badge-blue">مفتوح</span>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="stat-tile">
                    <div className="text-xs text-ink-500">زوار</div>
                    <div className="mt-1 text-xl font-bold">{branch.visitorsToday}</div>
                  </div>
                  <div className="stat-tile">
                    <div className="text-xs text-ink-500">طلبات</div>
                    <div className="mt-1 text-xl font-bold">{branch.activeOrders}</div>
                  </div>
                  <div className="stat-tile">
                    <div className="text-xs text-ink-500">متابعات</div>
                    <div className="mt-1 text-xl font-bold">{branch.openFollowUps}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Timeline items={activity} />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.35fr_1fr]">
        <section>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-ink-900">زوار يحتاجون متابعة</h2>
              <p className="text-sm text-ink-500">إجراءات سريعة للاتصال والواتساب والتحويل</p>
            </div>
            <Link href="/visitors" className="btn-secondary">كل الزوار</Link>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {visitors.map(visitor => (
              <VisitorCard key={visitor.id} v={visitor} />
            ))}
          </div>
        </section>

        <section className="card">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="font-bold text-ink-900">طلبات قريبة</h2>
              <p className="text-sm text-ink-500">حالات تحتاج متابعة تشغيلية</p>
            </div>
            <CalendarClock className="text-brand-600" size={22} />
          </div>
          <div className="space-y-3">
            {orders.map(order => (
              <div key={order.id} className="flex items-center justify-between rounded-md border border-stone-200 bg-stone-50 p-3">
                <div>
                  <div className="font-bold text-ink-900">{order.customerName}</div>
                  <div className="ltr text-sm text-ink-500">{order.orderNumber}</div>
                </div>
                <span className={order.status === 'MANUFACTURING' ? 'badge-amber' : 'badge-green'}>
                  {order.status === 'MANUFACTURING' ? 'تصنيع' : 'جاهز'}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
