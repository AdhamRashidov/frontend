
import { Link } from "react-router-dom";
import { products1 } from "../../../data/index.js";
import opa from "../../../assets/opa.png";
import rasm from "../../../assets/screen.png";
import heart from "../../../assets/heart.svg";
import leftPointer from "../../../assets/left-pointer.svg";
import rigthPointer from "../../../assets/right-pointer.svg";

export const Banner = () => {
  return (
    <section className="pt-4 pb-14">
      <div className="container">
        <div className="flex gap-6 ">
          <div className="relative flex justify-between items-center gap-[47px] bg-blue-100 rounded-2xl pr-[72px]">
            <div className="text-center w-[287px] mt-auto">
              <h3 className="font-bold text-gray-900 text-[20px]">
                Кўп ўқилаётганлар
              </h3>
              <img src={opa} alt="opa" />
            </div>

            <div className="flex gap-3 mt-[30px]">
              {products1.slice(0, 3).map((item) => (
                <Link to={`/product/${item.id}`} key={item.id}>
                  <div className="w-[190px] text-center">
                    <img src={item.image} alt="img" />
                    <h3 className="mt-4 text-gray-700 font-semibold">{item.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
            <button className="flex justify-center items-center absolute w-8 h-8 bg-blue-600 rounded-full right-[25px]">
              <img src={rigthPointer} alt="rightPointer" />
            </button>
            <button className="flex justify-center items-center absolute w-8 h-8 bg-blue-600 rounded-full left-[285px]">
              <img src={leftPointer} alt="leftPointer" />
            </button>
          </div>

          <div
            className="flex flex-col w-[261px] h-[351px] bg-cover bg-center rounded-2xl text-center"
            style={{ backgroundImage: `url(${rasm})` }}
          >
            <h3 className="text-gray-200 text-[20px] font-bold mt-8 mb-[19px]">
              Китоб ўқишни ёқтирасизми?
            </h3>
            <p className="text-gray-200 mb-[76px]">
              Унда пулингизни тежаш учун ўзингиз йоқтирган рукнга обуна бўлинг
            </p>
            <button
              className="flex bg-white justify-center items-center mx-auto
              py-2.5 px-5 gap-2.5 rounded-xl font-semibold"
            >
              <img src={heart} alt="heart" />
              <p>Обуна бўлиш</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};