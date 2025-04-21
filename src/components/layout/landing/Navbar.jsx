import React from "react";
import { Link, NavLink } from "react-router";

import chevronBottom from "@assets/imgs/landing/hero/chevronBottom.svg";
import englandFlag from "@assets/imgs/landing/hero/england-flag.webp";
import iranFlag from "@assets/imgs/landing/hero/iran-flag.png";
import logo from "@assets/imgs/logo/logo.png";

import facebook from "@assets/imgs/landing/socialIcons/facebook.svg";
import instagram from "@assets/imgs/landing/socialIcons/instagram.svg";
import linkedin from "@assets/imgs/landing/socialIcons/linkedin.svg";
import telegram from "@assets/imgs/landing/socialIcons/telegram.svg";
import twitter from "@assets/imgs/landing/socialIcons/twitter.svg";
import youtube from "@assets/imgs/landing/socialIcons/youtube.svg";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/shadcn/dropdown-menu";

import { useLocalState } from "@/store/context/LocalStateProvider";

export default function Navbar() {
  const { showNav, toggleNav } = useLocalState();
  return (
    <div className={`flex w-full justify-center`}>
      <div className="!fixed !top-0 z-40 w-full rounded-b-2xl bg-white p-[18px] shadow md:!max-w-[95%] lg:!max-w-[85%] xl:!max-w-[85%] 2xl:!max-w-[80%]">
        <div>
          <div className="flex items-center md:justify-between">
            <div className="flex items-center justify-between ~gap-3/7">
              <Link to="/">
                <div className="flex cursor-pointer items-center gap-2">
                  <img src={logo} className="w-20" alt="bitCloud logo" />
                </div>
              </Link>
            </div>
            <div>
              <ul className="hidden items-center gap-5 divide-x-2 divide-x-reverse font-bold text-[#777E90] md:flex [&>*]:cursor-pointer">
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
                      : "pr-4 transition-all duration-300 hover:text-[#23262F]"
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
                      ? "pr-4 text-[#23262F]"
                      : "pr-4 transition-all duration-300 hover:text-[#23262F]"
                  }
                >
                  <li>بازار</li>
                </NavLink>
                <NavLink
                  end
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "pr-4 text-[#23262F]"
                      : "pr-4 transition-all duration-300 hover:text-[#23262F]"
                  }
                >
                  <li>ارتباط باما</li>
                </NavLink>
              </ul>
            </div>
            <div className="mr-auto flex items-center md:mr-0">
              <DropdownMenu>
                <DropdownMenuTrigger className="ml-1" asChild>
                  <button className="flex items-center gap-1 font-bold uppercase">
                    <img
                      src={iranFlag}
                      className="h-6 w-6 rounded-full object-fill"
                      alt="iran flag"
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
                      className="h-8 w-8 scale-75 rounded-full"
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
              <div className="mr-2 hidden md:flex md:items-center md:gap-3">
                <button className="group flex items-center gap-2 rounded-lg bg-primary p-2.5 px-4 font-vazirBold text-white transition-all duration-500 hover:text-black">
                  <svg
                    style={{
                      width: "1.5rem",
                      height: "1.5rem",
                      verticalAlign: "middle",
                      overflow: "hidden",
                    }}
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    className="w-6 fill-white transition-colors duration-500 group-hover:!fill-black"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M843.282963 870.115556c-8.438519-140.515556-104.296296-257.422222-233.908148-297.14963C687.881481 536.272593 742.4 456.533333 742.4 364.088889c0-127.241481-103.158519-230.4-230.4-230.4S281.6 236.847407 281.6 364.088889c0 92.444444 54.518519 172.183704 133.12 208.877037-129.611852 39.727407-225.46963 156.634074-233.908148 297.14963-0.663704 10.903704 7.964444 20.195556 18.962963 20.195556l0 0c9.955556 0 18.299259-7.774815 18.962963-17.73037C227.745185 718.506667 355.65037 596.385185 512 596.385185s284.254815 122.121481 293.357037 276.195556c0.568889 9.955556 8.912593 17.73037 18.962963 17.73037C835.318519 890.311111 843.946667 881.019259 843.282963 870.115556zM319.525926 364.088889c0-106.287407 86.186667-192.474074 192.474074-192.474074s192.474074 86.186667 192.474074 192.474074c0 106.287407-86.186667 192.474074-192.474074 192.474074S319.525926 470.376296 319.525926 364.088889z" />
                  </svg>
                  <span className="transition-all duration-500">
                    حساب کاربری
                  </span>
                </button>
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
      <div
        id="navSide"
        className={`fixed mt-14 transition-all duration-300 ${showNav ? "!z-40 opacity-100" : "!-z-40 opacity-0"} left-0 top-0 flex h-screen w-full flex-col bg-white pb-5 pt-5 md:hidden`}
      >
        <ul className="flex flex-col text-2xl font-bold [&>*]:cursor-pointer [&>*]:text-[#777E90]">
          <Link onClick={() => toggleNav()} to="/market">
            <li className="border-r-primary py-5 pr-5 transition-all duration-300 hover:border-r-2 hover:pr-8 hover:text-[#23262F]">
              بازار
            </li>
          </Link>
          <Link onClick={() => toggleNav()} to="/auth/login">
            <li className="border-r-primary py-5 pr-5 transition-all duration-300 hover:border-r-2 hover:pr-8 hover:text-[#23262F]">
              تبدیل
            </li>
          </Link>
          <Link onClick={() => toggleNav()} to="/auth/login">
            <li className="flex items-center gap-1 border-r-primary py-5 pr-5 transition-all duration-300 hover:border-r-2 hover:pr-8 hover:text-[#23262F]">
              خرید کریپتو
              <img
                src={chevronBottom}
                className="w-7"
                alt="chevronBottom svg"
              />
            </li>
          </Link>
          <Link onClick={() => toggleNav()} to="/contact">
            <li className="border-r-primary py-5 pr-5 transition-all duration-300 hover:border-r-2 hover:pr-8 hover:text-[#23262F]">
              ارتباط با ما
            </li>
          </Link>
        </ul>
        <div className="flex w-full flex-col items-center gap-3 px-5">
          <Link to="/auth/login" className="w-full">
            <button className="w-full rounded-full border-2 px-5 py-2 font-bold transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white">
              ورود
            </button>
          </Link>
          <Link className="w-full" to="/auth/register">
            <button className="w-full rounded-full bg-primary px-5 py-2.5 font-bold text-white transition-all duration-500 hover:text-black">
              ثبت نام
            </button>
          </Link>
        </div>
        <div className="mt-auto flex items-center justify-between border-t-2 px-5 pt-3">
          <img src={linkedin} className="w-7" alt="linkedin svg" />
          <img src={twitter} className="w-7" alt="twitter svg" />
          <img src={youtube} className="w-7" alt="youtube svg" />
          <img src={telegram} className="w-7" alt="telegram svg" />
          <img src={facebook} className="w-7" alt="telegram svg" />
          <img src={instagram} className="w-7" alt="telegram svg" />
        </div>
      </div>
    </div>
  );
}
