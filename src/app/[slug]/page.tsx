import Image from "next/image";
import { notFound } from "next/navigation";

import { getRestaurantBySlug } from "@/data/get-restaurant-by-slug";

import ConsumptionMethodSelect from "./components/consumption-method-select";

interface RestaurantPageProps {
  params: Promise<{ slug: string }>;
}

const RestaurantPage = async ({ params }: RestaurantPageProps) => {
  const { slug } = await params;

  const restaurant = await getRestaurantBySlug(slug);

  if (!restaurant) {
    return notFound();
  }

  return (
    <div className="relative flex flex-col items-center justify-center px-6 py-12">
      <div className="flex flex-col items-center justify-center gap-4">
        <Image
          src={restaurant.avatarImageUrl}
          alt=""
          width={82}
          height={82}
          className="rounded-lg"
        />
        <div className="space-y-4 text-center">
          <h2>{restaurant.name}</h2>
          <p>{restaurant.description}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <ConsumptionMethodSelect
            buttonText="Comer aqui"
            imageAlt="Comer aqui"
            imageUrl="/lanche.png"
            option="DINE_IN"
            slug={slug}
          />
          <ConsumptionMethodSelect
            buttonText="Para levar"
            imageAlt="Para levar"
            imageUrl="/sacola.png"
            option="TAKEAWAY"
            slug={slug}
          />
        </div>
      </div>
    </div>
  );
};
export default RestaurantPage;
