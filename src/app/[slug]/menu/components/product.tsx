"use client";

import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";

import FormatCurrency from "@/helpers/format-currency";

interface ProductsProps {
  products: Product[];
}

const MenuCategoryProducts = ({ products }: ProductsProps) => {
  const { slug } = useParams();

  const searchParams = useSearchParams();

  const consumptionMethod = searchParams.get("consumptionMethod");

  return (
    <div className="py-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {products.map((product) => (
          <Link
            href={`/${slug}/menu/${product.id}?consumptionMethod=${consumptionMethod}`}
            key={product.id}
            className="mx-2 flex items-center justify-between gap-6 rounded-lg border p-4 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex w-full justify-between gap-4 p-2">
              <div className="w-full">
                <h4 className="font-bold">{product.name}</h4>
                <p className="line-clamp-2 text-sm text-muted-foreground">
                  {product.description}
                </p>
                <p className="pt-3 text-sm font-semibold">
                  <FormatCurrency value={product.price} />
                </p>
              </div>
              <div className="relative min-h-[82px] min-w-[120px]">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="rounded-lg object-contain"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuCategoryProducts;
