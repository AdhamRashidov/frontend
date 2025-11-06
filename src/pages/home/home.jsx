import { Banner } from "./components/banner";
import { Hero } from "../../components/hero/hero";

import spark from "../../assets/icons/spark.svg";
import qalqon from "../../assets/icons/qalqon.svg";
import like from "../../assets/icons/like.svg";
import star from "../../assets/icons/star.svg";
import { category, products1, products2 } from "../../data";


export const Home = () => {
  return (
    <>
      <Banner />
      <section>
        <div className="container">
          <div className="flex justify-between pb-10">
            <div className="flex gap-5 items-center">
              <div className="flex w-12 h-12 bg-blue-100 rounded-2xl justify-center items-center">
                <img src={spark} alt="spark" />
              </div>
              <div className="w-[212px]">
                <h4 className="mb-2 font-semibold">Тезкор етказиш</h4>
                <p className="text-[10px] text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <div className="flex w-12 h-12 bg-blue-100 rounded-2xl justify-center items-center">
                <img src={qalqon} alt="qalqon" />
              </div>
              <div className="w-[212px]">
                <h4 className="mb-2 font-semibold">Тўлов химояси</h4>
                <p className="text-[10px] text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <div className="flex w-12 h-12 bg-blue-100 rounded-2xl justify-center items-center">
                <img src={like} alt="like" />
              </div>
              <div className="w-[212px]">
                <h4 className="mb-2 font-semibold">Юқори сифат</h4>
                <p className="text-[10px] text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <div className="flex w-12 h-12 bg-blue-100 rounded-2xl justify-center items-center">
                <img src={star} alt="star" />
              </div>
              <div className="w-[212px]">
                <h4 className="mb-2 font-semibold">Энг сара китоблар</h4>
                <p className="text-[10px] text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-[63px]">
        <div className="container">
          <h2 className="text-[32px] mb-[30px] font-semibold">Рукнлар</h2>
          <div className="grid grid-cols-6 gap-4">
            {category.map((item) => (
              <CategoryCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      <Hero />
    </>
  );
};
