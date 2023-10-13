"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

interface Influencer_card_props {
  image_url: string;
  title_name: string;
  id: number;
}

const Influncer_card: React.FC<Influencer_card_props> = ({
  image_url,
  title_name,
  id,
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/influencer/${id}`)}
      className="min-h-[100px] p-4 shadow-lg rounded-lg cursor-pointer flex items-center justify-start gap-4 hover:scale-105 transition-all"
    >
      <div className="avatar">
        <div className="w-24 rounded-full">
          <Image
            alt="Influencer image"
            src={image_url}
            width={96}
            height={80}
          />
        </div>
      </div>
      <div className="font-bold text-xl pl-2">{title_name}</div>
    </div>
  );
};

export default Influncer_card;
