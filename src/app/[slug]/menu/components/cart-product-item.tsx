import { ChevronLeftIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import { useContext } from "react";

import { Button } from "@/components/ui/button";
import FormatCurrency from "@/helpers/format-currency";

import { CartContext, CartProduct } from "../contexts/cart";

interface CartItemProps {
  product: CartProduct;
}

const CartProductItem = ({ product }: CartItemProps) => {
  const { decreaseProductQuantity, increaseProductQuantity, removeProduct } =
    useContext(CartContext);

  return (
    <div className="mb-6 flex items-center justify-between">
      {/* ESQUERDA */}
      <div className="flex items-center gap-3">
        <div className="relative h-20 w-20 rounded-xl bg-gray-100">
          <Image src={product.imageUrl} alt={product.name} fill />
        </div>
        <div className="space-y-1">
          <p className="max-w-[90%] truncate text-ellipsis text-xs">
            {product.name}
          </p>
          <p className="text-sm font-semibold">
            <FormatCurrency value={product.price} />
          </p>

          {/* QUANTIDADE */}
          <div className="flex items-center gap-1 text-center">
            <Button
              className="h-7 w-7 rounded-lg"
              variant="outline"
              onClick={() => decreaseProductQuantity(product.id)}
            >
              <ChevronLeftIcon />
            </Button>
            <p className="w-7 text-xs">{product.quantity}</p>
            <Button
              className="h-7 w-7 rounded-lg"
              variant="destructive"
              onClick={() => increaseProductQuantity(product.id)}
            >
              <ChevronRightIcon />
            </Button>
          </div>
        </div>
      </div>

      {/* REMOVER */}
      <Button
        className="h-7 w-7 rounded-lg"
        variant="outline"
        onClick={() => removeProduct(product.id)}
      >
        <TrashIcon size={16} />
      </Button>
    </div>
  );
};

export default CartProductItem;
