import Link from 'next/link'
import { CalendarDays, PackageCheck } from 'lucide-react'

const orderStatus: Record<string, { label: string; className: string; progress: string }> = {
  MANUFACTURING: { label: 'تصنيع', className: 'badge-amber', progress: 'w-3/5' },
  READY_FOR_DELIVERY: { label: 'جاهز للتسليم', className: 'badge-green', progress: 'w-4/5' }
}

export default function OrderCard({ order }: { order: any }) {
  const status = orderStatus[order.status] || { label: order.status, className: 'badge-blue', progress: 'w-1/3' }

  return (
    <Link href={`/orders/${order.id}`} className="card block transition hover:-translate-y-0.5 hover:shadow-panel">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold text-ink-500">
            <PackageCheck size={16} />
            <span className="ltr">{order.orderNumber}</span>
          </div>
          <h3 className="mt-2 text-lg font-bold text-ink-900">{order.customerName}</h3>
        </div>
        <span className={status.className}>{status.label}</span>
      </div>

      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between text-xs font-semibold text-ink-500">
          <span>تقدم الطلب</span>
          <span>{order.branchId === 'nasr' ? 'مدينة نصر' : 'القاهرة الجديدة'}</span>
        </div>
        <div className="h-2 rounded-full bg-stone-100">
          <div className={`h-2 rounded-full bg-brand-600 ${status.progress}`} />
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 text-sm text-ink-500">
        <CalendarDays size={15} />
        <span>موعد متوقع: خلال 12 يوم</span>
      </div>
    </Link>
  )
}
