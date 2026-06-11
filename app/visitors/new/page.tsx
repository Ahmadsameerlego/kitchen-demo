import { MessageCircle, Save, UserPlus } from 'lucide-react'
import { branches } from '../../../src/lib/mock'

export default function NewVisitorPage() {
  return (
    <div className="page">
      <div className="section-head">
        <div>
          <div className="eyebrow">تسجيل سريع</div>
          <h1 className="page-title">زائر جديد</h1>
          <p className="page-subtitle">
            فورم مختصر للموظف داخل المعرض. رقم الموبايل والاهتمام أهم من أي بيانات إضافية.
          </p>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
        <form className="panel p-5">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-semibold text-ink-700">اسم الزائر</span>
              <input placeholder="مثال: أحمد علي" name="name" className="input" />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-semibold text-ink-700">رقم الموبايل</span>
              <input placeholder="01001234567" name="phone" className="input ltr text-right" />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-semibold text-ink-700">رقم واتساب</span>
              <input placeholder="نفس رقم الموبايل أو رقم آخر" name="whatsappPhone" className="input ltr text-right" />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-semibold text-ink-700">الفرع</span>
              <select name="branchId" className="select">
                {branches.map(branch => (
                  <option key={branch.id} value={branch.id}>{branch.name}</option>
                ))}
              </select>
            </label>
            <label className="space-y-2">
              <span className="text-sm font-semibold text-ink-700">مهتم بـ</span>
              <input placeholder="مطبخ مودرن، كلاسيك، L shape..." name="interestedIn" className="input" />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-semibold text-ink-700">ميزانية تقريبية</span>
              <select className="select">
                <option>لم يحدد بعد</option>
                <option>أقل من 50,000 ج.م</option>
                <option>50,000 - 100,000 ج.م</option>
                <option>أكثر من 100,000 ج.م</option>
              </select>
            </label>
            <label className="space-y-2 md:col-span-2">
              <span className="text-sm font-semibold text-ink-700">ملاحظات الموظف</span>
              <textarea placeholder="اكتب تفاصيل المقاس، لون مفضل، موعد متابعة..." name="notes" className="textarea" />
            </label>
          </div>

          <div className="mt-6 flex flex-wrap justify-end gap-2 border-t border-stone-200 pt-5">
            <button className="btn-secondary" type="button">
              <MessageCircle size={17} />
              حفظ وفتح واتساب
            </button>
            <button className="btn-primary">
              <Save size={17} />
              حفظ الزائر
            </button>
          </div>
        </form>

        <aside className="space-y-4">
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-50 text-brand-700">
                <UserPlus size={22} />
              </div>
              <div>
                <div className="font-bold text-ink-900">خطوة الديمو</div>
                <div className="text-sm text-ink-500">بعد الحفظ يظهر الزائر في شاشة المتابعات.</div>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-5">
            <div className="font-bold text-amber-900">نصيحة تشغيلية</div>
            <p className="mt-2 text-sm leading-6 text-amber-800">
              اجعل الموظف يسجل الاسم والموبايل والاهتمام أثناء وجود العميل في المعرض، وباقي التفاصيل يمكن إضافتها لاحقًا.
            </p>
          </div>
        </aside>
      </div>
    </div>
  )
}
