import { montserrat } from "@/app/_utils/fonts";
import Image from "next/image";
import Link from "next/link";
import Persona_card from "./Persona_card";
const Persona = ({}) => {
  return (
    <div className="flex flex-col gap-2 max-w-[100vw] min-h-[40vh] shadow-md m-2 p-2 px-32">
      <span className={`text-2xl font-bold ${montserrat.className}`}>
        Recommendation for you
      </span>
      <hr className="my-2 w-20 h-[2px] bg-gray-800 rounded border-0 md:my-2 dark:bg-gray-300"></hr>
      <div className="py-1"></div>
      <div className="flex gap-2 justify-start space-y-1">
        <Persona_card
          card_title="new grads"
          card_url="/newGrads.jpg"
          list_number={1}
        />
        <Persona_card
          card_title="get married"
          card_url="/marriage.jpg"
          list_number={3}
        />
        <div className="py-1"></div>
        <Persona_card
          card_title="relocation"
          card_url="/relocation.jpg"
          list_number={2}
        />
        <div className="py-1"></div>
        <Persona_card
          card_title="Foreigners"
          card_url="/remoteWork.jpg"
          list_number={4}
        />
        <div className="py-1"></div>
      </div>
    </div>
  );
};

export default Persona;
