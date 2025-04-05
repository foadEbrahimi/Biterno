import React from "react";
import { Outlet } from "react-router";

import logo from "../../assets/imgs/logo.svg";

export default function Layout() {
  return (
    <div className="grid h-screen lg:grid-cols-12">
      <div className="hidden bg-[#23262F] p-5 lg:col-span-4 lg:block">
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
