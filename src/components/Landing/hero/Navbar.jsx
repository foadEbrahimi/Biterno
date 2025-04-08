import React, { useState } from "react";

import { Link, NavLink } from "react-router";
import chevronBottom from "../../../assets/imgs/chevronBottom.svg";
import englandFlag from "../../../assets/imgs/england-flag.webp";
import iranFlag from "../../../assets/imgs/iran-flag.png";
import list from "../../../assets/imgs/list.svg";
import logo from "../../../assets/imgs/logo.svg";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../components/ui/shadcn/dropdown-menu";
import { useLocalState } from "../../../context/LocalStateProvider";

export default function Navbar() {
  const [showLanguage, setShowLanguage] = useState(false);
  const { showNav, toggleNav } = useLocalState();
  return (
    <div className="z-20 border-b bg-white py-3">
      <div className="~px-5/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between ~gap-3/7">
            <Link to="/">
              <div className="flex cursor-pointer items-center gap-1">
                <img src={logo} alt="bitCloud logo" />
                <span className="text-2xl">بیتکلود</span>
              </div>
            </Link>
            <div className="hidden h-10 w-0.5 bg-[#E6E8EC] md:flex"></div>
            <div>
              <ul className="hidden items-center font-bold text-[#777E90] ~gap-5/14 md:flex [&>*]:cursor-pointer">
                <NavLink
                  to="/auth/login"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#23262F]"
                      : "transition-all duration-300 hover:text-[#23262F]"
                  }
                >
                  <li>تبدیل</li>
                </NavLink>
                <NavLink
                  to="/auth/login"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#23262F]"
                      : "transition-all duration-300 hover:text-[#23262F]"
                  }
                >
                  <li className="flex items-center gap-1 transition-all duration-300 hover:text-[#23262F]">
                    خرید کریپتو
                    <img src={chevronBottom} alt="line svg" className="w-5" />
                  </li>
                </NavLink>
                <NavLink
                  to="/market"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#23262F]"
                      : "transition-all duration-300 hover:text-[#23262F]"
                  }
                >
                  <li>بازار</li>
                </NavLink>
                {/* <NavLink
                  end
                  to="/discover"
                  className={({ isActive }) => isActive
                      ? "text-[#23262F]"
                      : "transition-all duration-300 hover:text-[#23262F]"}
                >
                  <li>کشف کنید</li>
                </NavLink> */}
                <NavLink
                  end
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#23262F]"
                      : "transition-all duration-300 hover:text-[#23262F]"
                  }
                >
                  <li>ارتباط باما</li>
                </NavLink>
              </ul>
            </div>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <DropdownMenu>
              <DropdownMenuTrigger
                onClick={() => setShowLanguage((prev) => !prev)}
                asChild
              >
                <button className="flex items-center gap-1 font-bold uppercase">
                  <img
                    src={iranFlag}
                    className="w-7 rounded-sm"
                    alt="iran flag"
                  />

                  <img
                    src={chevronBottom}
                    alt="chevronBottom svg"
                    className={`w-5 transition-all duration-300 ${showLanguage ? "rotate-180" : "rotate-0"}`}
                  />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                dir="rtl"
                className="mt-4 w-56 bg-white p-3 shadow-xl"
              >
                <span className="text-sm font-bold text-[#777E90]">
                  زبان ها
                </span>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem className="cursor-pointer space-x-2">
                  <img
                    src={englandFlag}
                    className="w-7 rounded-sm"
                    alt="england flag"
                  />
                  <span className="text-[#23262F]">انگلیسی</span>
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex items-center gap-2">
              <Link to="/auth/login">
                <button className="rounded-full border-2 px-5 py-2 font-bold transition-all duration-300 hover:border-[#23262F] hover:bg-[#23262F] hover:text-white">
                  ورود
                </button>
              </Link>
              <Link to="/auth/register">
                <button className="rounded-full bg-[#3772FF] px-4 py-2 font-bold text-white transition-all duration-300 hover:bg-[#0045ea]">
                  ثبت نام
                </button>
              </Link>
            </div>
          </div>
          <button
            id="navToggle"
            onClick={() => toggleNav()}
            className={`cursor-pointer ${showNav ? "activeNavToggle" : ""} md:!hidden`}
          ></button>
        </div>
      </div>
    </div>
  );
}
