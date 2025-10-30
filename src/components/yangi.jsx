import React from "react";
import { products1 } from "../data/index.js";

const Yangi = () => {
  return (
    <div className="flex justify-between mb-[63px]">
      {products1.map((item) => (
        <div className="w-[239px]">
          <img className="mb-[27px]" key={item.id} src={item.image} alt="image" />
          <h2 className="font-bold text-[20px] text-[#11142d]">{item.title}</h2>
          <p className="mt-2.5 text-blue-500">{item.janr}</p>
          <div className="flex justify-between">
            <div className="flex items-center gap-2.5 ml-[5px]">
              <img src={item.ratingIcon} alt="ratingIcon" />
              <p className="text-orange-500 text-[21px]">{item.rating}</p>
            </div>

            <div className="flex gap-5 mr-5">
              <img src={item.audioIcon} alt="audio" />
              <img src={item.bookIconL} alt="book" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Yangi;
