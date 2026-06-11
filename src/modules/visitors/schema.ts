import { z } from 'zod'

export const createVisitorSchema = z.object({
  name: z.string().min(1),
  phone: z.string().min(4),
  whatsappPhone: z.string().optional(),
  branchId: z.string(),
  interestedIn: z.string().optional(),
  notes: z.string().optional(),
  assignedToId: z.string().optional(),
  nextFollowUpAt: z.string().optional(),
})

export type CreateVisitorInput = z.infer<typeof createVisitorSchema>
