import React from "react";
import { products1 } from "../../../data/index.js";
import { ProductCard } from "../../product-card.jsx";

const Yangi = () => {
  return (
    <div className="flex justify-between mb-[63px]">
      {products1.map((item) => (
        <ProductCard
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          janr={item.janr}
          bookIconL={item.bookIconL}
          ratingIcon={item.ratingIcon}
          rating={item.rating}
          audioIcon={item.audioIcon}
        />
      ))}
    </div>
  );
};

export default Yangi;
