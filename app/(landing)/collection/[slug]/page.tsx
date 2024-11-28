import { notFound } from "next/navigation";
import { BuyNowButton } from "@/features/buy-now-button";
import { CartActionButton } from "@/features/cart-action-button";
import { ProductRecommendations } from "@/features/product-recommendations";
import {
  ProductBreadcrumbs,
  ProductGallery,
  ProductDescription,
} from "@entities/product";
import { prisma } from "@shared/lib/prisma";

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const product = await prisma.product.findUnique({
    where: { slug },
  });

  if (!product) notFound();

  return (
    <>
      <section className="container my-6">
        <ProductBreadcrumbs name={product.name} />
      </section>
      <section className="container mb-12">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-6">
            <ProductGallery product={product} />
          </div>
          <div className="col-span-6">
            <ProductDescription product={product} />
            <div className="mt-6 flex gap-2">
              <CartActionButton productId={product.id} />
              <BuyNowButton productId={product.id} />
            </div>
          </div>
        </div>
      </section>
      <ProductRecommendations />
    </>
  );
}
