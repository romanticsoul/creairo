import type { Product } from "@entities/product";
import { ProductCard } from "./product-card";

export function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-3 max-sm:grid-cols-2">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
