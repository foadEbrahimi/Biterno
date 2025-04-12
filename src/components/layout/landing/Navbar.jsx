import React, { useState } from "react";
import { Link, NavLink } from "react-router";

import chevronBottom from "@assets/imgs/chevronBottom.svg";
import englandFlag from "@assets/imgs/england-flag.webp";
import iranFlag from "@assets/imgs/iran-flag.png";
import list from "@assets/imgs/list.svg";
import logo from "@assets/imgs/logo.svg";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/shadcn/dropdown-menu";

import { useLocalState } from "@/store/context/LocalStateProvider";

export default function Navbar() {
  const [showLanguage, setShowLanguage] = useState(false);
  const { showNav, toggleNav } = useLocalState();
  return (
    <div className="!z-20 border-b bg-white py-3">
      <div className="~px-5/20">
        <div className="flex items-center">
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
          <div className="ml-4 mr-auto flex items-center gap-3">
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
                className="ml-5 mt-4 w-56 bg-white p-3 shadow-xl lg:ml-0"
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
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="hidden cursor-pointer fill-[#777E90] transition-all duration-200 hover:fill-[#23262F] md:flex"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C11.4477 2 11 2.44772 11 3C11 3.55228 11.4477 4 12 4C12.5523 4 13 3.55228 13 3C13 2.44772 12.5523 2 12 2Z" />
              <path d="M12 20C11.4477 20 11 20.4477 11 21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21C13 20.4477 12.5523 20 12 20Z" />
              <path d="M21 11C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13C20.4477 13 20 12.5523 20 12C20 11.4477 20.4477 11 21 11Z" />
              <path d="M4 12C4 11.4477 3.55228 11 3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13C3.55228 13 4 12.5523 4 12Z" />
              <path d="M17.6569 4.92903C18.0474 4.53851 18.6806 4.53851 19.0711 4.92903C19.4616 5.31955 19.4616 5.95272 19.0711 6.34324C18.6806 6.73377 18.0474 6.73377 17.6569 6.34324C17.2664 5.95272 17.2664 5.31955 17.6569 4.92903Z" />
              <path d="M6.34309 17.6568C5.95257 17.2663 5.3194 17.2663 4.92888 17.6568C4.53836 18.0473 4.53836 18.6805 4.92888 19.071C5.3194 19.4616 5.95257 19.4616 6.34309 19.071C6.73362 18.6805 6.73362 18.0473 6.34309 17.6568Z" />
              <path d="M19.0711 17.6569C19.4616 18.0474 19.4616 18.6806 19.0711 19.0711C18.6806 19.4616 18.0474 19.4616 17.6569 19.0711C17.2664 18.6806 17.2664 18.0474 17.6569 17.6569C18.0474 17.2664 18.6806 17.2664 19.0711 17.6569Z" />
              <path d="M6.34319 6.34309C6.73371 5.95257 6.73371 5.3194 6.34319 4.92888C5.95266 4.53836 5.3195 4.53836 4.92897 4.92888C4.53845 5.3194 4.53845 5.95257 4.92897 6.34309C5.3195 6.73362 5.95266 6.73362 6.34319 6.34309Z" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
              />
            </svg>
            <img
              src={list}
              className="hidden cursor-pointer fill-[#777E90] transition-all duration-200 hover:fill-[#23262F] md:flex"
              alt="list svg"
            />
            <div className="hidden md:flex md:items-center md:gap-2">
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
      <div
        id="navSide"
        className={`absolute mt-14 transition-all duration-300 ${showNav ? "z-10 opacity-100" : "-z-10 opacity-0"} left-0 top-0 flex h-screen w-full flex-col bg-white pb-5 pt-5 md:hidden`}
      >
        <ul className="flex flex-col text-2xl font-bold [&>*]:cursor-pointer [&>*]:text-[#777E90]">
          <Link onClick={() => toggleNav()} to="/auth/login">
            <li className="border-r-blue-600 py-5 pr-5 transition-all duration-300 hover:border-r-2 hover:pr-8 hover:text-[#23262F]">
              تبدیل
            </li>
          </Link>
          <Link onClick={() => toggleNav()} to="/auth/login">
            <li className="flex items-center gap-1 border-r-blue-600 py-5 pr-5 transition-all duration-300 hover:border-r-2 hover:pr-8 hover:text-[#23262F]">
              خرید کریپتو
              <img
                src={chevronBottom}
                className="w-7"
                alt="chevronBottom svg"
              />
            </li>
          </Link>
          <Link onClick={() => toggleNav()} to="/market">
            <li className="border-r-blue-600 py-5 pr-5 transition-all duration-300 hover:border-r-2 hover:pr-8 hover:text-[#23262F]">
              بازار
            </li>
          </Link>
          <Link onClick={() => toggleNav()} to="/contact">
            <li className="border-r-blue-600 py-5 pr-5 transition-all duration-300 hover:border-r-2 hover:pr-8 hover:text-[#23262F]">
              ارتباط با ما
            </li>
          </Link>
        </ul>
        <div className="mt-auto flex w-full items-center gap-3 px-5">
          <Link to="/auth/login" className="w-full">
            <button className="w-full rounded-full border-2 px-5 py-2 font-bold transition-all duration-200 hover:border-[#23262F] hover:bg-[#23262F] hover:text-[#FCFCFD]">
              ورود
            </button>
          </Link>
          <Link className="w-full" to="/auth/register">
            <button className="w-full rounded-full bg-[#3772FF] px-5 py-2 font-bold text-white transition-all duration-200 hover:bg-[#0045ea]">
              ثبت نام
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
