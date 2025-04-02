import { useContext } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";

import { CartContext } from "../contexts/cart";
import CartProductItem from "./cart-product-item";

const CartSheet = () => {
  const { isOpen, toggleCart, products } = useContext(CartContext);
  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent className="">
        <SheetTitle className="text-left">Carrinho</SheetTitle>
        <SheetDescription>
          <div className="py-5">
            {products.map((product) => (
              <CartProductItem product={product} key={product.id} />
            ))}
          </div>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
