import React from "react";

export const Navbar = () => {
  return (
    <div
      className="container flex gap-[21px] py-[9px] font-semibold
				border-t border-b border-gray-200"
    >
      <a className="text-(--primary)" href="#">
        Аудиокитоб
      </a>
      <a className="text-(--primary)" href="#">
        Электрон китоблар
      </a>
      <a className="text-(--primary)" href="#">
        Босма китоблар
      </a>
      <a className="text-(--primary)" href="#">
        Контакт
      </a>
      <a className="text-(--primary)" href="#">
        Биз хақимизда
      </a>
    </div>
  );
};
