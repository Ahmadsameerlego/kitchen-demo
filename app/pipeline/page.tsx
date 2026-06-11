import { Plus, TrendingUp } from 'lucide-react'
import KanbanBoard from '../../src/components/KanbanBoard'
import KpiCard from '../../src/components/KpiCard'
import { deals } from '../../src/lib/mock'

export default function PipelinePage() {
  const cols = [
    { id: 'c1', title: 'زائر جديد', items: deals.filter(d => d.stage === 'NEW_LEAD'), total: '25,000 ج.م' },
    { id: 'c2', title: 'تم التواصل', items: deals.filter(d => d.stage === 'CONTACTED'), total: '0 ج.م' },
    { id: 'c3', title: 'زيارة المعرض', items: deals.filter(d => d.stage === 'SHOWROOM_VISIT'), total: '32,000 ج.م' },
    { id: 'c4', title: 'تم إرسال عرض', items: deals.filter(d => d.stage === 'QUOTATION_SENT'), total: '48,000 ج.م' },
    { id: 'c5', title: 'تفاوض', items: [], total: '0 ج.م' }
  ]

  return (
    <div className="page">
      <div className="section-head">
        <div>
          <div className="eyebrow">المبيعات</div>
          <h1 className="page-title">خط المبيعات</h1>
          <p className="page-subtitle">مراحل قليلة وواضحة تكفي لفريق معرض مطابخ صغير بدون CRM معقد.</p>
        </div>
        <button className="btn-primary">
          <Plus size={17} />
          فرصة جديدة
        </button>
      </div>

      <div className="mb-6 grid gap-4 md:grid-cols-3">
        <KpiCard title="إجمالي الفرص" value="105,000 ج.م" hint="3 فرص نشطة" icon={TrendingUp} tone="green" />
        <KpiCard title="عروض مرسلة" value="1" hint="في انتظار رد العميل" tone="blue" />
        <KpiCard title="زيارات قادمة" value="2" hint="موعدان هذا الأسبوع" tone="amber" />
      </div>

      <KanbanBoard columns={cols} />
    </div>
  )
}
