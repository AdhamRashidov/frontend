import React from "react";
import { Link } from "react-router-dom";

export const AudioCard = ({ id, img, title, sub_title, icon }) => {
  return (
    <div>
      <Link to={`/product/${id}`}>
      <img className="w-[239px] h-[336px]" src={img} alt="img" />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="font-normal text-sm">{sub_title}</p>
      <img src={icon} alt="icon" />
      </Link>
    </div>
  );
};
