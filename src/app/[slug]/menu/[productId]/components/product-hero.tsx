"use client";

import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface ProductHeroProps {
  products: { imageUrl: string; name: string };
}

const ProductHero = ({ products }: ProductHeroProps) => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className="relative min-h-[300px] w-full">
      <Button
        variant="secondary"
        onClick={handleBackClick}
        size="icon"
        className="absolute left-4 top-4 z-50 rounded-full"
      >
        <ChevronLeftIcon />
      </Button>

      <Image
        src={products.imageUrl}
        alt={products.name}
        fill
        className="object-contain"
      />

      <Button
        variant="secondary"
        size="icon"
        className="absolute right-4 top-4 z-50 rounded-full"
      >
        <ScrollTextIcon />
      </Button>
    </div>
  );
};

export default ProductHero;
