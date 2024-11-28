import { ProductList } from "@entities/product";
import { prisma } from "@/shared/lib/prisma";
import { Text } from "@/shared/ui/text";

export async function Catalog() {
  const products = await prisma.product.findMany();

  return (
    <section className="container">
      <Text variant="h2" className="mb-2">
        Каталог картин
      </Text>
      <p className="mb-6 max-w-lg font-medium dark:font-normal">
        Каждая картина в нашей коллекции — это единственный в своём роде шедевр.
        Мы гарантируем эксклюзивность и безупречное качество
      </p>
      <ProductList products={products} />
    </section>
  );
}
