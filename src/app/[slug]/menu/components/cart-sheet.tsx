import { useContext } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import FormatCurrency from "@/helpers/format-currency";

import { CartContext } from "../contexts/cart";
import CartProductItem from "./cart-product-item";
import FinishOrderButton from "./finish-order-button";

const CartSheet = () => {
  const { isOpen, toggleCart, products, orderTotal } = useContext(CartContext);

  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent className="">
        <SheetTitle className="text-left">Carrinho</SheetTitle>
        <div className="flex h-full flex-col py-5">
          <div className="flex-auto">
            {products.map((product) => (
              <CartProductItem product={product} key={product.id} />
            ))}
          </div>
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex justify-between">
                <p className="text-sm text-muted-foreground">Total do pedido</p>
                <p className="text-base font-semibold">
                  {FormatCurrency({ value: orderTotal })}
                </p>
              </div>
            </CardContent>
          </Card>

          <FinishOrderButton />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
