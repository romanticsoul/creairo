import Image from "next/image";
import Link from "next/link";
import type { Product } from "@entities/product";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/collection/${product.slug}`}
      className="group focus:outline-none"
    >
      <article className="bg-card text-card-foreground transition-colors group-hover:bg-card-foreground group-hover:text-card group-focus:bg-card-foreground group-focus:text-card">
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            width={500}
            height={500}
            src={product.url}
            alt={product.name}
            className="size-full transition-transform group-hover:scale-95 group-focus:scale-95"
          />
        </div>
        <div className="flex justify-between gap-2 p-2">
          <h4 className="text-sm font-semibold uppercase dark:font-medium">
            {product.name}
          </h4>
        </div>
      </article>
    </Link>
    // <Link href={`/p/${product.slug}`} className="group focus:outline-none">
    //   <article className="bg-card ring-ring transition-all group-hover:scale-95 group-focus:scale-95 group-focus:ring-2">
    //     <div className="relative aspect-square w-full overflow-hidden">
    //       <Image
    //         width={500}
    //         height={500}
    //         src={product.url}
    //         alt={product.name}
    //         className="size-full"
    //       />
    //     </div>
    //     <div className="flex justify-between gap-2 p-2">
    //       <h4 className="text-sm font-semibold uppercase dark:font-medium">
    //         {product.name}
    //       </h4>
    //     </div>
    //   </article>
    // </Link>
  );
}
