import { useContext } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";

import { CartContext } from "../contextx/cart";

const CartSheet = () => {
  const { isOpen, toggleCart } = useContext(CartContext);
  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent>
        <SheetTitle></SheetTitle>
        <SheetDescription></SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
