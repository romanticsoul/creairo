import { ProductList, getRandomProducts } from "@/entities/product";
import { Text } from "@/shared/ui/text";

export async function ProductRecommendations() {
  const recommendations = await getRandomProducts(4);

  return (
    <section className="container">
      <Text variant="h2" className="mb-2 font-semibold">
        Рекомендации
      </Text>
      <ProductList products={recommendations} />
    </section>
  );
}
