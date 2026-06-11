export type Branch = { id: string; name: string; visitorsToday: number; activeOrders: number; openFollowUps: number; address?: string }
export type Visitor = { id: string; name: string; phone: string; branchId: string; interestedIn: string; lastFollowUp?: string; status: string }
export type Customer = { id: string; name: string; phone: string; since: string; lastOrder?: string }
export type Deal = { id: string; customerName: string; stage: string; value?: number; lastActivity?: string }
export type Order = { id: string; orderNumber: string; customerName: string; branchId: string; status: string }

export const branches: Branch[] = [
  { id: 'nasr', name: 'فرع مدينة نصر', visitorsToday: 7, activeOrders: 12, openFollowUps: 4, address: 'شارع النصر' },
  { id: 'cairo', name: 'فرع القاهرة الجديدة', visitorsToday: 5, activeOrders: 8, openFollowUps: 3, address: 'الحي السادس' }
]

export const visitors: Visitor[] = [
  { id: 'v1', name: 'أحمد علي', phone: '01001234567', branchId: 'nasr', interestedIn: 'مطبخ مودرن أبيض', lastFollowUp: 'اليوم 10:00', status: 'NEW' },
  { id: 'v2', name: 'مريم حسين', phone: '01007654321', branchId: 'cairo', interestedIn: 'مطبخ كلاسيك خشب', lastFollowUp: 'أمس', status: 'CONTACTED' },
  { id: 'v3', name: 'سامي مصطفى', phone: '01005556677', branchId: 'nasr', interestedIn: 'مطبخ L شكل', lastFollowUp: '٢ أيام', status: 'QUALIFIED' }
]

export const customers: Customer[] = [
  { id: 'c1', name: 'عائلة عبدالله', phone: '01009998877', since: '2023-03-12', lastOrder: 'ORD-2024-001' },
  { id: 'c2', name: 'شركة النور', phone: '01112223344', since: '2022-09-01', lastOrder: 'ORD-2023-054' }
]

export const deals: Deal[] = [
  { id: 'd1', customerName: 'أحمد علي', stage: 'NEW_LEAD', value: 25000, lastActivity: 'تم التسجيل اليوم' },
  { id: 'd2', customerName: 'مريم حسين', stage: 'QUOTATION_SENT', value: 48000, lastActivity: 'ارسال عرض السعر' },
  { id: 'd3', customerName: 'سامي مصطفى', stage: 'SHOWROOM_VISIT', value: 32000, lastActivity: 'موعد زيارة الغد' }
]

export const orders: Order[] = [
  { id: 'o1', orderNumber: 'ORD-2024-001', customerName: 'عائلة عبدالله', branchId: 'nasr', status: 'MANUFACTURING' },
  { id: 'o2', orderNumber: 'ORD-2024-012', customerName: 'شركة النور', branchId: 'cairo', status: 'READY_FOR_DELIVERY' }
]

export function getBranch(id: string) { return branches.find(b => b.id === id) }
