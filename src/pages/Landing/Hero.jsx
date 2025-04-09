import React, { useState } from "react";

import Content from "../../components/Landing/hero/Content";

import chevronBottom from "../../assets/imgs/chevronBottom.svg";
import { Link } from "react-router";
import { useLocalState } from "../../context/LocalStateProvider";

export default function Hero() {
  const { showNav } = useLocalState();

  return (
    <div className="relative">
      <Content />
      <div
      id="navSide"
        className={`absolute transition-all duration-300 ${showNav ? "z-10 opacity-100" : "-z-10 opacity-0"} left-0 top-0 flex h-screen w-full flex-col bg-white pb-5 pt-5 md:hidden`}
      >
        <ul className="flex flex-col text-2xl font-bold [&>*]:cursor-pointer [&>*]:text-[#777E90]">
          <Link to="/auth/login">
            <li className="border-r-blue-600 py-5 pr-5 transition-all duration-300 hover:border-r-2 hover:pr-8 hover:text-[#23262F]">
              تبدیل
            </li>
          </Link>
          <Link to="/auth/login">
            <li className="flex items-center gap-1 border-r-blue-600 py-5 pr-5 transition-all duration-300 hover:border-r-2 hover:pr-8 hover:text-[#23262F]">
              خرید کریپتو
              <img
                src={chevronBottom}
                className="w-7"
                alt="chevronBottom svg"
              />
            </li>
          </Link>
          <Link to="/market">
            <li className="border-r-blue-600 py-5 pr-5 transition-all duration-300 hover:border-r-2 hover:pr-8 hover:text-[#23262F]">
              بازار
            </li>
          </Link>
          <Link to="/contact">
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
