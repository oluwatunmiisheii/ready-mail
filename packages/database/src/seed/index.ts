import { prisma } from "../client";
import { collections } from "./collections.seed";

(async () => {
  try {
    await Promise.all([
      prisma.collection.createMany({
        data: collections,
      }),
    ]);
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
