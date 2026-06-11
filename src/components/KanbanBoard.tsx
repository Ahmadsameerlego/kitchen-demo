'use client'

import { MessageCircle, MoveLeft, Phone } from 'lucide-react'

export default function KanbanBoard({ columns }: { columns: any[] }) {
  return (
    <div className="overflow-x-auto pb-3">
      <div className="flex min-w-max gap-4">
        {columns.map((column: any) => (
          <section key={column.id} className="w-80 rounded-lg border border-stone-200 bg-stone-50/80 p-3">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-ink-900">{column.title}</h3>
                <p className="text-xs text-ink-500">{column.items.length} فرصة</p>
              </div>
              <span className="rounded-full bg-white px-2.5 py-1 text-xs font-bold text-ink-500 shadow-sm">
                {column.total || '0 ج.م'}
              </span>
            </div>

            <div className="space-y-3">
              {column.items.length ? (
                column.items.map((item: any) => (
                  <article key={item.id} className="rounded-lg border border-stone-200 bg-white p-4 shadow-sm">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="font-bold text-ink-900">{item.customerName}</h4>
                        <p className="mt-1 text-xs text-ink-500">{item.lastActivity}</p>
                      </div>
                      <span className="badge-green">{item.value ? `${item.value.toLocaleString()} ج.م` : 'بدون قيمة'}</span>
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <button className="btn-secondary flex-1 px-3">
                        <MessageCircle size={15} />
                        واتساب
                      </button>
                      <button className="icon-btn" aria-label="اتصال">
                        <Phone size={15} />
                      </button>
                      <button className="icon-btn" aria-label="نقل المرحلة">
                        <MoveLeft size={15} />
                      </button>
                    </div>
                  </article>
                ))
              ) : (
                <div className="rounded-lg border border-dashed border-stone-300 bg-white/60 p-6 text-center text-sm text-ink-500">
                  لا توجد فرص في هذه المرحلة
                </div>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
