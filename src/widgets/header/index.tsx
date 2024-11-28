import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Logo } from "@entities/logo";
import { Button } from "@shared/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-10 h-20 border-b bg-background/50 backdrop-blur-md">
      <div className="container flex h-full items-center justify-between">
        <Logo />
        <div className="flex gap-2">
          <Button>Войти</Button>
          <Button variant="outline" asChild>
            <Link href={"/cart"}>
              <ShoppingBag strokeWidth={2.8} />
              Корзина
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
