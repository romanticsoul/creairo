import Image from "next/image";
import { Text } from "@/shared/ui/text";
import { Button } from "@shared/ui/button";

export function MainBanner() {
  return (
    <section className="py-12">
      <div className="container grid grid-cols-12 items-center gap-6">
        <div className="col-span-5 max-md:col-span-12">
          <Image
            width={1000}
            height={1000}
            quality={100}
            src="https://lltmlhymhumiwxfzcobg.supabase.co/storage/v1/object/public/products/img-ASroNR3dNhSiNek5JAy2iZ4s_1.webp"
            alt="main-banner"
            className="m-auto aspect-square w-full max-md:w-3/5 max-sm:w-full"
            priority={true}
          />
        </div>
        <div className="col-span-7 max-md:col-span-12">
          <span className="block text-xl font-medium">Аукцион недели</span>
          <Text variant="h1">Картина «Liberté»</Text>
          <p className="mb-3 mt-2 text-pretty font-medium dark:font-normal">
            Свобода и величие природы, в которой человек всегда ищет равновесие
            и вдохновение. «Liberté» станет настоящей жемчужиной коллекции и
            источником размышлений для истинных ценителей искусства.
          </p>
          <Button size="lg">Участвовать</Button>
        </div>
      </div>
    </section>
  );
}
