import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import RestaurantCategories from "./components/categories";
import RestaurantHero from "./components/hero";

interface RestaurantMenuPageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    consumptionMethod: string;
  }>;
}

const isConsumptionMethodValid = (value: string) => {
  return ["DINE_IN", "TAKEAWAY"].includes(value.toUpperCase());
};

const RestaurantMenuPage = async ({
  params,
  searchParams,
}: RestaurantMenuPageProps) => {
  const { slug } = await params;
  const { consumptionMethod } = await searchParams;

  const restaurant = await db.restaurant.findUnique({
    where: { slug },
    include: {
      menuCategories: {
        include: { products: true },
      },
    },
  });

  if (!isConsumptionMethodValid(consumptionMethod)) {
    return notFound();
  }

  if (!restaurant) {
    return notFound();
  }

  return (
    <div className="mx-auto">
      <RestaurantHero restaurant={restaurant} />
      <RestaurantCategories restaurant={restaurant} />
    </div>
  );
};

export default RestaurantMenuPage;
