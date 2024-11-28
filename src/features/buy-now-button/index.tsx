import type { Product } from "@prisma/client";
import { Button } from "@/shared/ui/button";

export function BuyNowButton({}: { productId: Product["id"] }) {
  return (
    <Button size="lg" variant="outline">
      Заказать сейчас
    </Button>
  );
}
