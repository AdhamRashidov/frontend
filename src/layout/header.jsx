import { Link } from "react-router-dom";
import { Logo } from "../assets/icons/logo";
import { Menu } from "../assets/icons/menu";
import { Moon } from "../assets/icons/moon";

export const Header = () => {
  return (
    <header className="border-b border-gray-300">
      <div
        className="container flex justify-between items-center py-5
	  				tablet:py-7
					laptop:py-[18px]"
      >
        <div className="flex justify-between items-center gap-8">
          <Link to={"/"}>
            <Logo />
          </Link>
          <div className="hidden laptop:flex gap-7">
            <Link to={"category"}>Categories</Link>
            <Link to={"about"}>About Us</Link>
            <Link to={"help"}>Help center</Link>
          </div>
        </div>

        <div className="flex gap-5 justify-between items-center">
          <div className="laptop:hidden">
            <Link to={"menu"}>
              <Menu />
            </Link>
          </div>

          <a
            className="hidden laptop:block font-semibold"
            href="tel:+18554200000"
          >
            +1 855 420 0000
          </a>
          <span className="hidden laptop:inline-flex w-[58px] h-[58px] bg-gray-100 justify-center items-center rounded-full">
            <Moon />
          </span>

          <button className="hidden laptop:block text-white bg-[#299764] w-[142px] h-[58px] rounded-full">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};
