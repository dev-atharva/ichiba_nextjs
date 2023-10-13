import React from "react";
import Catgory_card from "./Catgory_card";

const Newlife = () => {
  return (
    <div className="flex flex-col gap-2 max-w-[100vw] min-h-[40vh] shadow-md m-2 p-2">
      <span className=" text-2xl font-bold ">
        New life goods Recommendations
      </span>
      <div className="flex flex-col gap-2 justify-start ">
        <Catgory_card
          card_title="Interior"
          card_items={["冷蔵庫", "テレビ", "洗濯機"]}
        />
        <Catgory_card
          card_title="Health and Wellness"
          card_items={["トレッドミル", "ダンベル"]}
        />
        <Catgory_card
          card_title="Home Office"
          card_items={["デスク", "椅子", "ラップトップ", "プリンター"]}
        />
        <Catgory_card
          card_title="Electronics and Gadgets"
          card_items={["スマートフォン", "カメラ", "アクセサリー"]}
        />
      </div>
    </div>
  );
};

export default Newlife;
