// import React from "react";
// import { products2 } from "../../../data/index.js";

// const Audio = () => {
//   return (
//     <div className="flex justify-between mb-[63px]">
//       {products2.map((item) => (
//         <div className="w-[239px]">
//           <img
//             className="mb-[27px]"
//             key={item.id}
//             src={item.image}
//             alt="image"
//           />
//           <h2 className="font-bold text-[20px] text-[#11142d]">{item.title}</h2>
//           <p className="mt-2.5 text-blue-500">{item.janr}</p>
//           <div className="flex justify-between">
//             <div className="flex items-center gap-2.5 ml-[5px]">
//               <img src={item.ratingIcon} alt="ratingIcon" />
//               <p className="text-orange-500 text-[21px]">{item.rating}</p>
//             </div>

//             <div className="flex gap-5 mr-5">
//               <img src={item.audioIcon} alt="audio" />
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Audio;

import React from "react";
import { products2 } from "../../../data/index.js";
import { ProductCard } from "../../product-card.jsx";

const Audio = () => {
  return (
    <div className="flex justify-between mb-[63px]">
      {products2.map((item) => (
        <ProductCard
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          janr={item.janr}

          ratingIcon={item.ratingIcon}
          rating={item.rating}
          audioIcon={item.audioIcon}
        />
      ))}
    </div>
  );
};

export default Audio;
