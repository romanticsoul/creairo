"use server";

import type { Product } from "@prisma/client";
import { prisma } from "@/shared/lib/prisma";

export async function getRandomProducts(count: number) {
  const randomRecords: Product[] = await prisma.$queryRaw`
    SELECT * 
    FROM "Product" 
    ORDER BY RANDOM() 
    LIMIT ${count};
  `;

  return randomRecords;
}
