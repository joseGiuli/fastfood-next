import { ConsumptionMethod } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ConsumptionMethodSelectProps {
  slug: string;
  imageUrl: string;
  imageAlt: string;
  buttonText: string;
  option: ConsumptionMethod;
}

const ConsumptionMethodSelect = ({
  imageUrl,
  imageAlt,
  buttonText,
  option,
  slug,
}: ConsumptionMethodSelectProps) => {
  return (
    <Card>
      <CardContent className="flex flex-col gap-6 py-8">
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={250}
          height={256}
          className="max-w-[140px]"
        ></Image>
        <Button variant={"secondary"} className="rounded-full" asChild>
          <Link href={`/${slug}/menu?consumptionMethod=${option}`}>
            {buttonText}
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ConsumptionMethodSelect;
