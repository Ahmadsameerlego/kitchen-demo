import { ArrowUpLeft, MessageCircle, Phone, UserPlus } from 'lucide-react'

const statusMap: Record<string, { label: string; className: string }> = {
  NEW: { label: 'جديد', className: 'badge-blue' },
  CONTACTED: { label: 'تم التواصل', className: 'badge-amber' },
  QUALIFIED: { label: 'مهتم', className: 'badge-green' }
}

export default function VisitorCard({ v }: { v: any }) {
  const status = statusMap[v.status] || { label: v.status, className: 'badge' }

  return (
    <div className="card flex h-full flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="truncate text-base font-bold text-ink-900">{v.name}</h3>
            <span className={status.className}>{status.label}</span>
          </div>
          <p className="mt-1 text-sm text-ink-500">{v.interestedIn}</p>
        </div>
        <span className="rounded-md bg-stone-100 px-2 py-1 text-xs font-semibold text-ink-500">
          {v.branchId === 'nasr' ? 'مدينة نصر' : 'القاهرة الجديدة'}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 text-sm">
        <div className="stat-tile">
          <div className="text-xs text-ink-500">رقم الموبايل</div>
          <div className="ltr mt-1 font-semibold text-ink-900">{v.phone}</div>
        </div>
        <div className="stat-tile">
          <div className="text-xs text-ink-500">آخر متابعة</div>
          <div className="mt-1 font-semibold text-ink-900">{v.lastFollowUp}</div>
        </div>
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-2">
        <button className="btn-secondary flex-1 px-3">
          <MessageCircle size={15} />
          واتساب
        </button>
        <button className="btn-secondary px-3" aria-label="اتصال">
          <Phone size={15} />
        </button>
        <button className="btn-primary flex-1 px-3">
          <UserPlus size={15} />
          تحويل
        </button>
        <button className="icon-btn" aria-label="فتح التفاصيل">
          <ArrowUpLeft size={15} />
        </button>
      </div>
    </div>
  )
}
