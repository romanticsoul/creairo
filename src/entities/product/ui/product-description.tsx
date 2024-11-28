import type { Product } from "@prisma/client";
import { Separator } from "@/shared/ui/separator";
import { Text } from "@/shared/ui/text";

export function ProductDescription({ product }: { product: Product }) {
  return (
    <div className="grid gap-4">
      <div className="flex justify-between gap-6">
        <Text variant="h1">Картина «{product.name}»</Text>
      </div>

      <Text className="text-lg">{product.description}</Text>

      <div className="grid gap-2 text-sm font-medium dark:font-normal">
        <div className="flex justify-between">
          <p className="text-muted-foreground">Автор</p>
          <Text>{product.author}</Text>
        </div>
        <Separator />
        <div className="flex justify-between">
          <p className="text-muted-foreground">Размер</p>
          <Text>100x100 см</Text>
        </div>
        <Separator />
        <div className="flex justify-between">
          <p className="text-muted-foreground">Цена</p>
          <Text>{product.price} ₽</Text>
        </div>
      </div>

      <div className="rounded-lg border bg-secondary p-4">
        <Text className="text-pretty text-sm">
          Данный товар уникален и продаётся в единственном экземпляре
        </Text>
      </div>
    </div>
  );
}
