import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const catalog = await prisma.category.create({
    data: {
      name: "Картины",
      slug: "paintings",
      description:
        "Мгновения, запечатленные на холсте, становятся окнами в иные миры, где время замирает, а душа находит гармонию",
    },
    select: {
      id: true,
    },
  });

  const products = await prisma.product.createMany({
    data: [
      {
        name: "le Nouveau Monde",
        slug: "le-nouveau-monde",
        url: "https://lltmlhymhumiwxfzcobg.supabase.co/storage/v1/object/public/products/img-7JY6NZv1pdgdbKWk5Hr8sMuZ.webp",
        author: "DALL-E",
        price: 11390,
        categoryId: catalog.id,
      },
      {
        name: "Incendium",
        slug: "incendium",
        url: "https://lltmlhymhumiwxfzcobg.supabase.co/storage/v1/object/public/products/img-Ajj2l6CGDe1iNn7WQxx5Hyi0.webp",
        author: "DALL-E",
        price: 20990,
        categoryId: catalog.id,
      },
      {
        name: "Poseidon",
        slug: "poseidon",
        url: "https://lltmlhymhumiwxfzcobg.supabase.co/storage/v1/object/public/products/img-ASroNR3dNhSiNek5JAy2iZ4s_1.webp",
        author: "DALL-E",
        price: 17290,
        categoryId: catalog.id,
      },
      {
        name: "Rivage propre",
        slug: "rivage-propre",
        url: "https://lltmlhymhumiwxfzcobg.supabase.co/storage/v1/object/public/products/img-CgokpRPLQ1h22hUoFYGRKumO.webp",
        author: "DALL-E",
        price: 10190,
        categoryId: catalog.id,
      },
      {
        name: "Baie",
        slug: "baie",
        url: "https://lltmlhymhumiwxfzcobg.supabase.co/storage/v1/object/public/products/img-DR67GxFK2S2IVhuK4vBCAjjx.webp",
        author: "DALL-E",
        price: 14290,
        categoryId: catalog.id,
      },
      {
        name: "Schlachtschiff",
        slug: "schlachtschiff",
        url: "https://lltmlhymhumiwxfzcobg.supabase.co/storage/v1/object/public/products/img-Empf21NnEjxfMUYOJzyCNDKs.webp",
        author: "DALL-E",
        price: 15690,
        categoryId: catalog.id,
      },
      {
        name: "The old Admiral",
        slug: "the-old-admiral",
        url: "https://lltmlhymhumiwxfzcobg.supabase.co/storage/v1/object/public/products/img-HifXog4RnQyqwuYufHiRl21v.webp",
        author: "DALL-E",
        price: 11790,
        categoryId: catalog.id,
      },
      {
        name: "Maestro",
        slug: "maestro",
        url: "https://lltmlhymhumiwxfzcobg.supabase.co/storage/v1/object/public/products/img-hyTmfuYXfXT7U6VMaezV7eP7.webp",
        author: "DALL-E",
        price: 10990,
        categoryId: catalog.id,
      },
      {
        name: "Blàr",
        slug: "blar",
        url: "https://lltmlhymhumiwxfzcobg.supabase.co/storage/v1/object/public/products/img-iqJwO3i45OSisNVZRDXSUU9L.webp",
        author: "DALL-E",
        price: 21890,
        categoryId: catalog.id,
      },
      {
        name: "Valor",
        slug: "valor",
        url: "https://lltmlhymhumiwxfzcobg.supabase.co/storage/v1/object/public/products/img-JQp00g3s0rANv0T2MbLYItro.webp",
        author: "DALL-E",
        price: 13490,
        categoryId: catalog.id,
      },
      {
        name: "Cielo sangriento",
        slug: "cielo-sangriento",
        url: "https://lltmlhymhumiwxfzcobg.supabase.co/storage/v1/object/public/products/img-kMJhM4KCZEeqlQ83XVjFYMBp.webp",
        author: "DALL-E",
        price: 8990,
        categoryId: catalog.id,
      },
      {
        name: "Ángel",
        slug: "angel",
        url: "https://lltmlhymhumiwxfzcobg.supabase.co/storage/v1/object/public/products/img-KtApTkRF9tlntSOLS8h82WkC.webp",
        author: "DALL-E",
        price: 12890,
        categoryId: catalog.id,
      },
      {
        name: "Hölynpöly",
        slug: "holynpoly",
        url: "https://lltmlhymhumiwxfzcobg.supabase.co/storage/v1/object/public/products/img-LKw8FjaarDhDkUXeAvZcglKQ.webp",
        author: "DALL-E",
        price: 17290,
        categoryId: catalog.id,
      },
      {
        name: "Liberté",
        slug: "liberte",
        url: "https://lltmlhymhumiwxfzcobg.supabase.co/storage/v1/object/public/products/img-llaITZWfwWvBtbVXXUUsphEx.webp",
        author: "DALL-E",
        price: 19890,
        categoryId: catalog.id,
      },
      {
        name: "Fin de journée",
        slug: "fin-de-journee",
        url: "https://lltmlhymhumiwxfzcobg.supabase.co/storage/v1/object/public/products/img-mUi7B2ERcRMdLe2KuwbHClYC.webp",
        author: "DALL-E",
        price: 32490,
        categoryId: catalog.id,
      },
      {
        name: "Le monde entier est l'amour",
        slug: "le-monde-entier-est-lamour",
        url: "https://lltmlhymhumiwxfzcobg.supabase.co/storage/v1/object/public/products/img-nqstD6AlAMBrPgx1kGAgUSth.webp",
        author: "DALL-E",
        price: 43900,
        categoryId: catalog.id,
      },
      {
        name: "Volonté",
        slug: "volonte",
        url: "https://lltmlhymhumiwxfzcobg.supabase.co/storage/v1/object/public/products/img-NWskEplamf9Li6uEqs8Y2B1T.webp",
        author: "DALL-E",
        price: 12590,
        categoryId: catalog.id,
      },
      {
        name: "Hunter",
        slug: "hunter",
        url: "https://lltmlhymhumiwxfzcobg.supabase.co/storage/v1/object/public/products/img-sCUlKnkDeZnAQb3QLVk0y2bV.webp",
        author: "DALL-E",
        price: 17390,
        categoryId: catalog.id,
      },
      {
        name: "Vera",
        slug: "vera",
        url: "https://lltmlhymhumiwxfzcobg.supabase.co/storage/v1/object/public/products/img-VjixZHpNNI7vEIbOF7strxM9.webp",
        author: "DALL-E",
        price: 27990,
        categoryId: catalog.id,
      },
    ],
  });

  console.log(products);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
