import { UserRole } from '@prisma/client'

export type CurrentUser = {
  id: string
  role: UserRole
  branchId?: string | null
}

export function getBranchFilter(user: CurrentUser | null) {
  if (!user) return { branchId: undefined }

  if (user.role === 'OWNER') return {}

  return { branchId: user.branchId }
}
