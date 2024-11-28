import type { Product } from "@prisma/client";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";
import { Button } from "@/shared/ui/button";

export function CartItem({ product }: { product: Product }) {
  return (
    <article className="flex gap-6">
      <Image
        src={product.url}
        alt={product.name}
        width={144}
        height={144}
        className="h-36"
      />
      <div className="flex flex-col">
        <h4 className="text-xl font-semibold">{product.name}</h4>
        <p className="text-sm">{product.price} ₽</p>
        <div className="mt-auto flex items-center gap-4">
          <Button size="icon" className="size-8" variant="outline">
            <Minus />
          </Button>
          <span>1</span>
          <Button size="icon" className="size-8" variant="outline">
            <Plus />
          </Button>
        </div>
      </div>
    </article>
  );
}
