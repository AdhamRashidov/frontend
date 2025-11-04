import ruknlar from "../../assets/ruknlar.svg";
import bottomPointer from "../../assets/bottom-pointer.svg";
import search from "../../assets/search.svg";

export const SearchBar = () => {
  return (
    <div className="flex grow gap-1 items-center">
      <div className="border border-gray-200 rounded-l-[15px] flex py-[13px] pl-[26px] pr-[18px] gap-4">
        <img src={ruknlar} alt="ruknlar" />
        <div className="text-(--primary) font-semibold">Рукнлар</div>
        <img src={bottomPointer} alt="bottomPointer" />
      </div>

      <div className="flex grow border border-gray-200 rounded-r-[15px] bg-gray-100">
        <form className="flex justify-between items-stretch grow">
          <input
            className="py-[13px] outline-none px-[30px] text-(--dark-gray) w-full"
            placeholder="Қидириш"
            type="text"
          />
          <button
            className="pl-[21px] pr-[27px] border-l border-gray-200"
            type="submit"
          >
            <img src={search} alt="search" />
          </button>
        </form>
      </div>
    </div>
  );
};
