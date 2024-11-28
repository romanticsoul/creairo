import type { Product } from "@prisma/client";
import Form from "next/form";
import { getCartItem, addToCartAction } from "@entities/cart";
import { Button } from "@shared/ui/button";

export async function CartActionButton({
  productId,
}: {
  productId: Product["id"];
}) {
  const cartItem = await getCartItem(productId);

  if (cartItem) return <Button size="lg">Товар уже в корзине</Button>;

  return (
    <Form action={addToCartAction}>
      <input type="hidden" name="productId" value={productId} />
      <Button size="lg" type="submit">
        Добавить в корзину
      </Button>
    </Form>
  );
}
