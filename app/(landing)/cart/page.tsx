import { CartBreadcrumbs, CartList } from "@entities/cart";
import { Text } from "@/shared/ui/text";

export default function CartPage() {
  return (
    <>
      <section className="container my-6">
        <CartBreadcrumbs />
      </section>
      <div className="container grid grid-cols-12 gap-6">
        <section className="col-span-8">
          <Text variant="h1" className="mb-6">
            Ваша корзина
          </Text>
          <CartList />
        </section>
        <aside className="col-span-4 border"></aside>
      </div>
    </>
  );
}
