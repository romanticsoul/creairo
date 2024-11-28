import type { Product } from "@prisma/client";
import Image from "next/image";

export function ProductGallery({ product }: { product: Product }) {
  return (
    <Image
      src={product.url}
      alt={product.name}
      width={556}
      height={556}
      quality={100}
      priority={true}
      className="aspect-square w-full"
    />
  );
}
