import Image from "next/image";
import Link from "next/link";

interface Personacardprops {
  card_url: string;
  card_title: string;
  list_number: number;
}

const Persona_card: React.FC<Personacardprops> = ({
  card_url,
  card_title,
  list_number,
}) => {
  return (
    // <div className="flex flex-col gap-2 max-w-[100vw] min-h-[40vh] shadow-md m-2 p-2 px-32">
    <div className="relative h-52 w-60 bg-white border rounded-md hover:scale-105 transition-all">
      <div className="">
        <Image
          alt={card_title}
          src={card_url}
          // width={300}
          // height={150}
          className=" rounded-md"
          // className="p-4"
          layout="fill"
          // objectFit="contain"
        ></Image>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-60 p-16 backdrop-blur-[2px]"></div>
      <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-medium font-serif">
        {card_title}
      </p>
      <Link
        href={`/recommendations/${list_number}`}
        className="absolute w-full h-full"
      ></Link>
    </div>
    // </div>
  );
};
export default Persona_card;
