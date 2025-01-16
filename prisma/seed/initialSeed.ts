import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.post.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: "Initial Post",
      description: "This is the initial post",
    },
  });

  await prisma.post.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: "Second Post",
      description: "This is the second post",
    },
  });

  await prisma.post.upsert({
    where: { id: 3 },
    update: {},
    create: {
      name: "The third post",
      description: "This third post is the best",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
