import Image from "next/image";
import Link from "next/link";
import type { Product } from "@entities/product";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/p/${product.slug}`} className="group focus:outline-none">
      <article className="bg-card ring-ring transition-all group-hover:scale-105 group-focus:scale-105 group-focus:ring-2">
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            width={500}
            height={500}
            src={product.url}
            alt={product.name}
            className="size-full"
          />
        </div>
        <div className="flex justify-between gap-2 p-2">
          <h4 className="text-sm font-medium uppercase">{product.name}</h4>
          <span className="text-xs font-medium">{product.price}₽</span>
        </div>
      </article>
    </Link>
  );
}
