import { ShieldCheck, UserPlus } from 'lucide-react'

const staff = [
  { name: 'أحمد سمير', role: 'مدير النظام', branch: 'كل الفروع', status: 'نشط' },
  { name: 'منى خالد', role: 'مبيعات', branch: 'مدينة نصر', status: 'نشط' },
  { name: 'كريم محمود', role: 'تشغيل', branch: 'القاهرة الجديدة', status: 'نشط' }
]

export default function UsersPage() {
  return (
    <div className="page">
      <div className="section-head">
        <div>
          <div className="eyebrow">الفريق</div>
          <h1 className="page-title">الموظفين</h1>
          <p className="page-subtitle">إدارة بسيطة للمستخدمين حسب الدور والفرع بدون permission matrix معقد.</p>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[420px_1fr]">
        <section className="panel p-5">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-50 text-brand-700">
              <UserPlus size={21} />
            </div>
            <div>
              <h2 className="font-bold text-ink-900">إضافة موظف</h2>
              <p className="text-sm text-ink-500">بيانات أساسية فقط</p>
            </div>
          </div>
          <div className="space-y-4">
            <input placeholder="الاسم" className="input" />
            <input placeholder="البريد الإلكتروني" className="input ltr text-right" />
            <select className="select">
              <option>مبيعات</option>
              <option>مدير فرع</option>
              <option>تشغيل</option>
            </select>
            <select className="select">
              <option>مدينة نصر</option>
              <option>القاهرة الجديدة</option>
              <option>كل الفروع</option>
            </select>
            <button className="btn-primary w-full">حفظ الموظف</button>
          </div>
        </section>

        <section className="panel overflow-hidden">
          <div className="border-b border-stone-200 p-5">
            <h2 className="font-bold text-ink-900">قائمة الموظفين</h2>
            <p className="text-sm text-ink-500">الأدوار الحالية في الديمو</p>
          </div>
          <div className="divide-y divide-stone-200">
            {staff.map(member => (
              <div key={member.name} className="grid gap-3 p-5 md:grid-cols-[1fr_140px_160px_90px] md:items-center">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 font-bold text-ink-700">
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-ink-900">{member.name}</div>
                    <div className="text-sm text-ink-500">{member.role}</div>
                  </div>
                </div>
                <div className="text-sm font-semibold text-ink-700">{member.branch}</div>
                <div className="flex items-center gap-2 text-sm text-ink-500">
                  <ShieldCheck size={16} />
                  صلاحيات بسيطة
                </div>
                <span className="badge-green w-fit">{member.status}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
