//const { PrismaClient } = require('@prisma/client');
//const { PrismaClient } = require('../../../../prisma/node_modules/.prisma/client');
//import { PrismaClient } from "../node_modules/@prisma/client";
import { PrismaClient } from '../../node_modules/.prisma/client';

const prisma = new PrismaClient()

async function main() {
    const allUsers = await prisma.post.findMany()
    console.log(allUsers)
  }

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })