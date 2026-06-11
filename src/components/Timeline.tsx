export default function Timeline({ items, title = 'النشاط الأخير' }: { items: any[]; title?: string }) {
  return (
    <div className="card">
      <div className="mb-4 flex items-center justify-between">
        <div className="font-bold text-ink-900">{title}</div>
        <span className="text-xs font-semibold text-ink-500">مباشر</span>
      </div>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="relative flex gap-3">
            <div className="mt-1 flex flex-col items-center">
              <div className="h-2.5 w-2.5 rounded-full bg-brand-600 ring-4 ring-brand-100" />
              {index < items.length - 1 ? <div className="mt-2 h-10 w-px bg-stone-200" /> : null}
            </div>
            <div className="min-w-0">
              <div className="text-sm font-semibold text-ink-900">{item.text}</div>
              <div className="mt-1 text-xs text-ink-500">{item.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
