import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { SearchBar } from "./search-bar";
import { Navbar } from "./navbar";

import flag from "../../assets/flag.svg";
import userIcon from "../../assets/userIcon.svg";
import bottomPointer from "../../assets/bottom-pointer.svg";

export const Header = () => {
  return (
    <header className="py-[21px]">
      <div className="container flex justify-between gap-5 items-center pb-[21px]">
        <div className="flex gap-[46px] grow">
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
          <SearchBar />
        </div>
        <div className="flex w-[276px] h-[52px] items-center justify-between">
          <button className="flex bg-blue-100 p-[17px] gap-2.5 rounded-[15px]">
            <img src={flag} alt="uzb-flag" />
            <h3 className="text-(--primary) font-semibold">Ўз</h3>
            <img src={bottomPointer} alt="bottomPointer" />
          </button>

          <button className="flex bg-(--primary) px-[26px] py-4 rounded-[15px] gap-[17px]">
            <img src={userIcon} alt="userIcon" />
            <h3 className="text-white  font-semibold">Кириш</h3>
          </button>
        </div>
      </div>
      <Navbar />
    </header>
  );
};
