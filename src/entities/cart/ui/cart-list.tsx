import { getCartProducts } from "../api";
import { CartItem } from "./cart-item";

export async function CartList() {
  const products = await getCartProducts();

  return (
    <div className="grid gap-6">
      {products.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </div>
  );
}
