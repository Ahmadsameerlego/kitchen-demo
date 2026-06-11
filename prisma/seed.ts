import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding...')

  const nasr = await prisma.branch.upsert({
    where: { name: 'Nasr City Branch' },
    update: {},
    create: {
      name: 'Nasr City Branch',
      address: 'Nasr City, Cairo',
      phone: '+201000000001'
    }
  })

  const newCairo = await prisma.branch.upsert({
    where: { name: 'New Cairo Branch' },
    update: {},
    create: {
      name: 'New Cairo Branch',
      address: 'New Cairo, Cairo',
      phone: '+201000000002'
    }
  })

  const passwordHash = await bcrypt.hash('password123', 10)

  await prisma.user.upsert({
    where: { email: 'admin@showroom.local' },
    update: {},
    create: {
      name: 'Admin User',
      email: 'admin@showroom.local',
      passwordHash,
      role: 'OWNER',
      branchId: nasr.id
    }
  })

  console.log('Seed finished.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
