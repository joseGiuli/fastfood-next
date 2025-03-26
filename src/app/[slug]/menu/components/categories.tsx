"use client";

import { Prisma } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import MenuCategoryProducts from "./product";

interface RestaurantCategoriesProps {
  restaurant: Prisma.RestaurantGetPayload<{
    include: { menuCategories: { include: { products: true } } };
  }>;
}

type MenuCategoryWithProducts = Prisma.MenuCategoryGetPayload<{
  include: { products: true };
}>;

const RestaurantCategories = ({ restaurant }: RestaurantCategoriesProps) => {
  const [selectedCategory, setSelectedCategory] =
    useState<MenuCategoryWithProducts>(restaurant.menuCategories[0]);

  const handleCategoryClick = (category: MenuCategoryWithProducts) => {
    setSelectedCategory(category);
  };

  const getCategoryVariant = (category: MenuCategoryWithProducts) => {
    return selectedCategory.id === category.id ? "default" : "secondary";
  };

  return (
    <div className="relative z-50 mt-[-1.5rem] rounded-t-3xl border bg-white">
      <div className="flex items-center gap-3 p-6">
        <Image
          src={restaurant.avatarImageUrl}
          alt={restaurant.name}
          height={45}
          width={45}
        />
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold">{restaurant.name}</h2>
          <p className="text-sm text-gray-500">{restaurant.description}</p>
        </div>
      </div>
      <ScrollArea className="w-full">
        <div className="flex w-max space-x-4 p-4 pt-0">
          {restaurant.menuCategories.map((category) => (
            <Button
              key={category.id}
              variant={getCategoryVariant(category)}
              size="sm"
              className="rounded-full"
              onClick={() => handleCategoryClick(category)}
            >
              {category.name}
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <h3 className="mt-2 px-5 font-bold uppercase">{selectedCategory.name}</h3>
      <MenuCategoryProducts products={selectedCategory.products} />
    </div>
  );
};

export default RestaurantCategories;
