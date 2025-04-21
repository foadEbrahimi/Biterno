import React from "react";
import { Outlet } from "react-router";

import bgImg from "@assets/imgs/auth/mobile.svg";
import object from "@assets/imgs/landing/hero/object.png";

export default function Layout() {
  return (
    <div className="grid h-screen lg:grid-cols-12 dark:bg-black">
      <div
        id="layoutBg"
        className="relative z-30 hidden bg-[#23262fc6] dark:bg-black p-5 lg:col-span-4 lg:block"
      >
        <img
          src={bgImg}
          draggable={false}
          alt="mobile img"
          className="absolute -right-10 top-0 h-full !min-w-[30rem] xl:!min-w-[35rem] 2xl:!min-w-[40rem]"
        />
        <div className="absolute -left-[22%] bottom-40 !-z-20 h-[326px] w-[422px] rounded-full bg-primary/30 blur-[40px]"></div>
      </div>
      <div className="z-30 p-5 lg:col-span-8">
        <Outlet />
      </div>
      <img
        src={object}
        className="absolute left-0 top-0 z-20 h-full !min-w-[250%] scale-x-[-1] lg:!min-w-[110%]"
        alt=""
      />
    </div>
  );
}
