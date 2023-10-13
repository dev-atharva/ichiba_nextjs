"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

interface Cardprops {
  image_src: string;
  card_title: string;
  card_price: number;
  product_id: string;
  review_average?: string;
  category_name?: string;
  item_url?: string;
}

const Card: React.FC<Cardprops> = ({
  image_src,
  product_id,
  card_price,
  card_title,
  review_average,
  category_name,
  item_url,
}) => {
  const formatter = new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
  });
  const router = useRouter();
  const handleclick = (product_id: string) => {
    if (product_id === undefined || product_id === "") {
      window.open(item_url, "_blank");
      return;
    } else {
      router.push(`/product/${product_id}`);
      return;
    }
  };
  return (
    <div
      onClick={() => handleclick(product_id)}
      className="col-span-1 cursor-pointer group"
    >
      <div className="flex flex-col gap-2 w-full shadow-lg rounded-lg p-2">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <Image
            fill
            alt="Listing Image"
            src={image_src}
            className="object-cover h-full w-full group-hover:scale-110 transition"
          />
        </div>
        <div className="font-semibold text-lg ">{card_title}</div>
        <div className="font-semibold text-md">
          {review_average && <>Rating : {review_average}</>}
          {category_name && (
            <div className="w-[100%] h-[20%] text-white bg-red-500 flex items-center text-center font-bold rounded-md justify-center border-1">
              {category_name}
            </div>
          )}
        </div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold text-red-700">
            {formatter.format(card_price)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
