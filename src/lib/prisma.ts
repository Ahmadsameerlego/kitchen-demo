// Frontend-only mock shim for Prisma imports in the demo.
// Any accidental server calls will throw early.

type Shim = Record<string, any>

export const prisma: Shim = new Proxy({}, {
  get() {
    return new Proxy(() => { throw new Error('Prisma is not available in the frontend demo') }, { apply: () => { throw new Error('Prisma is not available in the frontend demo') }})
  }
})
