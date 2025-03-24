import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import ProductsHero from "./components/products-hero";

interface ProductPageProps {
  params: Promise<{ slug: string; productId: string }>;
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { slug, productId } = await params;

  const product = await db.product.findUnique({ where: { id: productId } });

  if (!product) {
    return notFound();
  }

  return (
    <div>
      <h2>{slug}</h2>
      <ProductsHero products={product} />
    </div>
  );
};

export default ProductPage;
