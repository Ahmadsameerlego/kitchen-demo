import { Building2, ListChecks, Package, Users } from 'lucide-react'

const settings = [
  { title: 'الفروع', desc: 'بيانات فرعي المعرض وأرقام التواصل', icon: Building2, badge: '2 فروع' },
  { title: 'الموظفين والصلاحيات', desc: 'إضافة موظف وربطه بفرع ودور بسيط', icon: Users, badge: '4 أدوار' },
  { title: 'أنواع المطابخ', desc: 'مودرن، كلاسيك، L shape، U shape', icon: Package, badge: 'قابل للتعديل' },
  { title: 'حالات الطلب', desc: 'مراحل تشغيل ثابتة وسهلة للفريق', icon: ListChecks, badge: '7 مراحل' }
]

export default function SettingsPage() {
  return (
    <div className="page">
      <div className="section-head">
        <div>
          <div className="eyebrow">إعدادات بسيطة</div>
          <h1 className="page-title">الإعدادات</h1>
          <p className="page-subtitle">بدون شاشات معقدة. فقط البيانات التي يحتاجها فريق معرض مطابخ صغير.</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {settings.map(item => {
          const Icon = item.icon
          return (
            <div key={item.title} className="card">
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-50 text-brand-700">
                    <Icon size={21} />
                  </div>
                  <div>
                    <h2 className="font-bold text-ink-900">{item.title}</h2>
                    <p className="mt-1 text-sm text-ink-500">{item.desc}</p>
                  </div>
                </div>
                <span className="badge-blue">{item.badge}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
