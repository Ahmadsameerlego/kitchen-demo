import { createVisitorSchema, CreateVisitorInput } from './schema'

export async function createVisitorAction(_: CreateVisitorInput) {
  // This demo is frontend-only. In a real app this would call a server action.
  throw new Error('createVisitorAction is not available in the frontend demo')
}
