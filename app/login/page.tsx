import Link from 'next/link'
import { ArrowLeft, Building2, CheckCircle2 } from 'lucide-react'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-stone-950 lg:grid lg:grid-cols-[1.05fr_.95fr]">
      <section className="relative hidden overflow-hidden lg:block">
        <div className="absolute inset-0 bg-[url('/kitchen.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/55 to-stone-950/15" />
        <div className="relative flex h-full flex-col justify-end p-12 text-white">
          <div className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">
            <Building2 size={16} />
            Demo جاهز لفرعين
          </div>
          <h1 className="max-w-xl text-5xl font-bold leading-tight">إدارة صالة مطابخ بشكل بسيط وشيك</h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-white/80">
            سجل الزوار، تابع العروض، وافتح حالة طلب المطبخ في ثواني من واجهة واحدة مناسبة لفريق المبيعات والتشغيل.
          </p>
          <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
            {['زوار', 'Pipeline', 'طلبات'].map(item => (
              <div key={item} className="rounded-lg border border-white/15 bg-white/10 p-4 backdrop-blur">
                <CheckCircle2 size={18} />
                <div className="mt-2 text-sm font-semibold">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex min-h-screen items-center justify-center bg-[#f6f4ef] p-6">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-brand-600 text-white">
              <Building2 size={28} />
            </div>
            <h2 className="mt-5 text-3xl font-bold text-ink-900">مرحبًا بعودتك</h2>
            <p className="mt-2 text-sm text-ink-500">ادخل للوحة تشغيل المعرض أو افتح الديمو مباشرة.</p>
          </div>

          <form className="panel p-5">
            <div className="space-y-4">
              <label className="space-y-2">
                <span className="text-sm font-semibold text-ink-700">البريد الإلكتروني</span>
                <input placeholder="admin@showroom.com" className="input ltr text-right" />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-ink-700">كلمة المرور</span>
                <input placeholder="••••••••" type="password" className="input ltr text-right" />
              </label>
            </div>

            <div className="mt-6 space-y-3">
              <Link href="/dashboard" className="btn-primary w-full">
                دخول لوحة التشغيل
                <ArrowLeft size={17} />
              </Link>
              <Link href="/branch-selection" className="btn-secondary w-full">
                تجربة الديمو بدون تسجيل
              </Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
