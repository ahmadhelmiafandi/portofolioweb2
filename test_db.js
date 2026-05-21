const { PrismaClient } = require('./src/generated/client');
require('dotenv').config();
const prisma = new PrismaClient();

async function main() {
  const p = await prisma.project.findUnique({ where: { id: "cmoflsx5l00079w5or30azoat" } });
  console.log(p);
}
main();
