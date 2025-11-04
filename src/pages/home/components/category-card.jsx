import React from "react";

export const CategoryCard = ({ title, img }) => {
  return (
    <div className="relative">
      <img src={img} alt="img" />
      <h3 className="absolute text-white bottom-2 left-5">{title}</h3>
    </div>
  );
};
