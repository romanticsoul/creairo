import { ProductList } from "@entities/product";
import { prisma } from "@/shared/lib/prisma";

export async function Catalog() {
  const products = await prisma.product.findMany();

  return (
    <section className="container">
      <h2 className="text-h2 font-semibold">Каталог картин</h2>
      <p className="mb-6 mt-2 max-w-lg">
        Каждая картина в нашей коллекции — это единственный в своём роде шедевр.
        Мы гарантируем эксклюзивность и безупречное качество
      </p>
      <ProductList products={products} />
    </section>
  );
}
