"use server";

import type { Product } from "@prisma/client";
import { cookies } from "next/headers";
import { prisma } from "@/shared/lib/prisma";

type CartItem = {
  productId: Product["id"];
  count: number;
};

export async function getCartItem(productId: Product["id"]) {
  const cookieStore = await cookies();

  const cartItems: CartItem[] = JSON.parse(
    cookieStore.get("cart")?.value || "[]",
  );

  return cartItems.find((item) => item.productId === productId);
}

export async function getCartProducts() {
  const cookieStore = await cookies();
  const cookieItems = cookieStore.get("cart")?.value || "[]";
  const items: CartItem[] = JSON.parse(cookieItems);

  return prisma.product.findMany({
    where: { id: { in: items.map((item) => item.productId) } },
  });
}

export async function addToCartAction(formData: FormData) {
  const productId = formData.get("productId") as string;
  const cookieStore = await cookies();

  const cookieItems = cookieStore.get("cart")?.value || "[]";
  const items: CartItem[] = JSON.parse(cookieItems);

  const item = items.find((item) => item.productId === productId);
  if (item) item.count++;
  else items.push({ productId: productId, count: 1 });

  cookieStore.set("cart", JSON.stringify(items), { httpOnly: true });
}
