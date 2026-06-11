import { Check } from 'lucide-react'

export default function ProgressStepper({ steps, current }: { steps: string[]; current: number }) {
  return (
    <div className="panel overflow-hidden p-5">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <div className="text-lg font-bold text-ink-900">مسار تنفيذ الطلب</div>
          <div className="text-sm text-ink-500">تحديث سريع لحالة المطبخ من المعاينة إلى التركيب</div>
        </div>
        <span className="badge-amber">قيد التصنيع</span>
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step, index) => {
          const done = index < current
          const active = index === current

          return (
            <div
              key={step}
              className={`rounded-md border p-3 ${
                done || active ? 'border-emerald-200 bg-emerald-50' : 'border-stone-200 bg-stone-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${
                    done ? 'bg-brand-600 text-white' : active ? 'bg-white text-brand-700 ring-2 ring-brand-200' : 'bg-white text-ink-500'
                  }`}
                >
                  {done ? <Check size={17} /> : index + 1}
                </div>
                <div>
                  <div className="font-semibold text-ink-900">{step}</div>
                  <div className="text-xs text-ink-500">{active ? 'المرحلة الحالية' : done ? 'تمت' : 'في الانتظار'}</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
