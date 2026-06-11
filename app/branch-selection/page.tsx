import Link from 'next/link'
import { ArrowLeft, MapPin } from 'lucide-react'
import { branches } from '../../src/lib/mock'

export default function BranchSelection() {
  return (
    <div className="min-h-screen bg-[#f6f4ef] px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <div className="eyebrow">اختيار الفرع</div>
          <h1 className="mt-2 text-3xl font-bold text-ink-900">ابدأ تشغيل اليوم من الفرع الصحيح</h1>
          <p className="mt-2 text-sm text-ink-500">الديمو يوضح عزل البيانات بين فرعين بطريقة بسيطة وواضحة.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {branches.map(branch => (
            <Link key={branch.id} href="/dashboard" className="panel block p-5 transition hover:-translate-y-0.5 hover:shadow-panel">
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-50 text-brand-700">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-ink-900">{branch.name}</h2>
                    <p className="mt-1 text-sm text-ink-500">{branch.address}</p>
                  </div>
                </div>
                <ArrowLeft className="text-ink-500" size={20} />
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="stat-tile">
                  <div className="text-xs text-ink-500">زوار اليوم</div>
                  <div className="mt-1 text-2xl font-bold text-ink-900">{branch.visitorsToday}</div>
                </div>
                <div className="stat-tile">
                  <div className="text-xs text-ink-500">طلبات نشطة</div>
                  <div className="mt-1 text-2xl font-bold text-ink-900">{branch.activeOrders}</div>
                </div>
                <div className="stat-tile">
                  <div className="text-xs text-ink-500">متابعات</div>
                  <div className="mt-1 text-2xl font-bold text-ink-900">{branch.openFollowUps}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
