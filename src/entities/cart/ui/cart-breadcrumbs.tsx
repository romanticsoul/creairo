import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@shared/ui/breadcrumb";

export function CartBreadcrumbs() {
  return (
    <Breadcrumb className="select-none font-semibold">
      <BreadcrumbList className="text-sm">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Главная</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem className="text-primary">Корзина</BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
