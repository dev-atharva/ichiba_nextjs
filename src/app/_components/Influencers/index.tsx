import React from "react";
import { getlistofinfluencers } from "@/app/_apis/fetchinfluencerslist";
import Influncer_card from "./Influncer_card";

const Influencer = async () => {
  const influencer_data = await getlistofinfluencers();

  return (
    <div className="flex flex-col gap-2 max-w-[100vw] min-h-[40vh] shadow-md m-2 p-2">
      <span className=" text-2xl font-bold ">Influencer Recommendation</span>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {influencer_data.map((data, key) => (
          <Influncer_card
            image_url={data.image_url}
            key={key}
            title_name={data.name}
            id={data.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Influencer;
