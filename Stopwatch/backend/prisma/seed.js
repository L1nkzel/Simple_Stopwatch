import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const seed = async () => {
await prisma.stoptime.deleteMany()
}
seed()

export default seed;