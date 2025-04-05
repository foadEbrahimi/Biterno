import React from "react";

import { Link, NavLink } from "react-router";
import chevronBottom from "../../../assets/imgs/chevronBottom.svg";
import list from "../../../assets/imgs/list.svg";
import logo from "../../../assets/imgs/logo.svg";

export default function Navbar() {
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
                <li>تبدیل</li>
                <li className="flex items-center gap-1">
                  خرید کریپتو
                  <img src={chevronBottom} alt="line svg" className="w-5" />
                </li>
                <NavLink
                  to="/market"
                  className={({ isActive }) => isActive && "text-black"}
                >
                  <li>بازار</li>
                </NavLink>
                <NavLink
                  end
                  to="/discover"
                  className={({ isActive }) => isActive && "text-black"}
                >
                  <li>کشف کنید</li>
                </NavLink>
              </ul>
            </div>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <div className="flex items-center gap-2">
              <button className="rounded-full border-2 px-4 py-2 font-bold">
                ورود
              </button>
              <button className="rounded-full bg-[#3772FF] p-2 px-4 font-bold text-white">
                ثبت نام
              </button>
            </div>
            <button className="flex items-center gap-1 font-bold uppercase">
              انگلیسی/دلار
              <img src={chevronBottom} alt="line svg" className="w-5" />
            </button>
          </div>
          <div className="md:hidden">
            <img src={list} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
