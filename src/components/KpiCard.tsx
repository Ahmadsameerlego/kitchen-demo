import { LucideIcon, TrendingUp } from 'lucide-react'

export default function KpiCard({
  title,
  value,
  hint,
  icon: Icon = TrendingUp,
  tone = 'green'
}: {
  title: string
  value: string | number
  hint?: string
  icon?: LucideIcon
  tone?: 'green' | 'amber' | 'blue' | 'rose'
}) {
  const toneClass = {
    green: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    amber: 'bg-amber-50 text-amber-700 border-amber-100',
    blue: 'bg-sky-50 text-sky-700 border-sky-100',
    rose: 'bg-rose-50 text-rose-700 border-rose-100'
  }[tone]

  return (
    <div className="card">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm font-medium text-ink-500">{title}</div>
          <div className="mt-2 text-3xl font-bold text-ink-900">{value}</div>
        </div>
        <div className={`flex h-11 w-11 items-center justify-center rounded-md border ${toneClass}`}>
          <Icon size={21} />
        </div>
      </div>
      {hint ? <div className="mt-4 text-xs font-medium text-ink-500">{hint}</div> : null}
    </div>
  )
}
