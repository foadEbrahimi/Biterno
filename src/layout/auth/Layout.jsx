import React from "react";
import { Outlet } from "react-router";

import logo from "../../assets/imgs/logo.svg";
import bgImg from "../../assets/imgs/auth/bg-login.png";

export default function Layout() {
  return (
    <div className="grid h-screen lg:grid-cols-12">
      <div
        id="layoutBg"
        className="relative hidden bg-[#23262F] p-5 lg:col-span-4 lg:block"
      >
        <img
          src={bgImg}
          alt="bg img "
          className="absolute left-0 top-0 h-full scale-x-[-1]"
        />
        <div className="flex cursor-pointer items-center gap-1">
          <img src={logo} alt="bitCloud logo" className="w-10" />
          <span className="text-3xl text-white">بیتکلود</span>
        </div>
      </div>
      <div className="bg-white p-5 lg:col-span-8">
        <Outlet />
      </div>
    </div>
  );
}
