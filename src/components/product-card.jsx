// import { useDispatch, useSelector } from "react-redux";
// import { formatter } from "../config/formatter.js";
// import { addProduct, toggleLike } from "../store/reducer/product-reducer";

// export const ProductCard = (product) => {
//   const price = +product?.price?.split(" ").join("");
//   const dispatch = useDispatch();

//   const likedProducts = useSelector((state) => state.product.likedProducts);
//   const isLiked = likedProducts?.some((item) => item?.id === product?.id);

//   const addStore = () => {
//     dispatch(addProduct({ ...product, price }));
//   };

//   const handleClik = () => {
//     dispatch(toggleLike({ ...product, price }));
//   };

//   return (
//     <div>
//       <div className="h-[266px] mb-[25px]">
//         <img
//           className="w-full h-full object-cover"
//           src={product.img}
//           alt="img"
//         />
//       </div>
//       <h3>{product.title}</h3>
//       <p>{formatter(price)} UZS</p>
//       <button onClick={addStore} className="bg-green-200 p-2 cursor-pointer">
//         add
//       </button>
//       <button
//         onClick={handleClik}
//         className="p-2 cursor-pointer ${isLiked ? 'bg-red-500 text-white' : 'bg-gray-200"
//       >
//         {isLiked ? "👍" : "👍🏿"}
//       </button>
//     </div>
//   );
// };




import { useDispatch, useSelector } from "react-redux";
import { formatter } from "../config/formatter.js";
import { addProduct, toggleLike } from "../store/reducer/product-reducer";

export const ProductCard = (product) => {
  const price = +product?.price?.split(" ").join("");
  const dispatch = useDispatch();

  const likedProducts = useSelector(
    (state) => state.product?.likedProducts || []
  );
  const isLiked = likedProducts?.some((item) => item.id === product.id);

  const addStore = () => {
    dispatch(addProduct({ ...product, price }));
  };

  const handleLike = () => {
    dispatch(toggleLike({ ...product, price }));
  };

  return (
    <div className="border p-4 rounded">
      <div className="h-[266px] mb-[25px]">
        <img
          className="w-full h-full object-cover"
          src={product.img}
          alt="img"
        />
      </div>
      <h3 className="font-bold">{product.title}</h3>
      <p className="my-2">{formatter(price)} UZS</p>
      <div className="flex gap-2">
        <button
          onClick={addStore}
          className="bg-green-200 p-2 cursor-pointer rounded hover:bg-green-300"
        >
          Add to Cart
        </button>
        <button
          onClick={handleLike}
          className={`p-2 cursor-pointer rounded transition-colors ${
            isLiked
              ? "bg-red-500 text-white hover:bg-red-600"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {isLiked ? "❤️ Liked" : "🤍 Like"}
        </button>
      </div>
    </div>
  );
};