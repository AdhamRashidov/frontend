import { useEffect, useState } from "react";
import { ProductCard } from "../components/product-card";

export const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://market-backend-zeta.vercel.app/phones")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="container">
      <div className="grid grid-cols-4 gap-2">
        {products.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
