"use client";
import React, { useEffect, useState } from "react";
import Button from "../Buttons";
import { useCartStore } from "@/app/hooks/cartfunction";

interface listingbuyprops {
  detailurl: string;
  makerName: string;
  productId: string;
}

const Listingbuy: React.FC<listingbuyprops> = ({
  detailurl,
  makerName,
  productId,
}) => {
  const cartstore = useCartStore();
  const [carttile, setcarttitle] = useState("");
  const handledetailclick = () => {
    window.open(detailurl, "_blank");
  };
  const handlecartsubmit = () => {
    if (carttile === "Add to cart") {
      cartstore.addToCart(productId);
      setcarttitle("Delete from cart");
    } else {
      cartstore.removeFromCart(productId);
      setcarttitle("Add to cart");
    }
  };

  useEffect(() => {
    if (cartstore.cart.indexOf(productId) === -1) {
      setcarttitle("Add to cart");
    } else {
      setcarttitle("Delete from cart");
    }
  }, [cartstore.cart, productId]);

  return (
    <div className="flex gap-4 p-2 flex-col">
      <div className="text-xl font-bold  gap-2">Maker Name : {makerName}</div>
      <Button label="More Information" onClick={handledetailclick} />
      <Button label={carttile} onClick={handlecartsubmit} />
    </div>
  );
};

export default Listingbuy;
