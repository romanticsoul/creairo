import Link from "next/link";
import { Logo } from "@entities/logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-6 border-t">
      <div className="container flex items-end justify-between py-8">
        <div>
          <Logo />
          <div>
            <p className="text-sm font-medium">© {year} Все права защищены.</p>
          </div>
        </div>
        <div className="flex gap-2 font-medium">
          <Link href="mailto:support@creairo.ru">support@creairo.ru</Link>
          <span>/</span>
          <Link href="tel:+79069573483">+7 (906) 957-34-83</Link>
        </div>
      </div>
    </footer>
  );
}
