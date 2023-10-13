"use client";
import { useRouter } from "next/navigation";

interface Categorycardprops {
  card_items: string[];
  card_title: string;
}

const Catgory_card: React.FC<Categorycardprops> = ({
  card_items,
  card_title,
}) => {
  const router = useRouter();
  return (
    <>
      <span className="text-xl font-semibold">{card_title}</span>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
        {card_items.map((card, key) => (
          <div
            key={key}
            className=" min-h-[100px] flex items-center justify-center
         bg-neutral-300 shadow-lg rounded-lg text-lg font-semibold p-2  hover:scale-105 cursor-pointer transition-all "
            onClick={() => router.push(`/category/${card}`)}
          >
            {card}
          </div>
        ))}
      </div>
    </>
  );
};

export default Catgory_card;
