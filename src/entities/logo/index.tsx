import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="shrink-0 select-none text-2xl font-bold">
      creairo <span className="text-sm">/ искусство</span>
    </Link>
  );
}
