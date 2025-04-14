import React from "react";

import Content from "./components/Content";

import img from "@assets/imgs/hero/object.png";

export default function Hero() {
  return (
    <div>
      <div className="relative h-[100dvh]">
        <div className="absolute right-0 top-0 !-z-10 h-full w-full">
          <img src={img} alt="" />
        </div>
        <div className="absolute -left-20 -top-20 !-z-20 h-[326px] w-[322px] rounded-full bg-[#1195ff7f] blur-[100px]"></div>
        <Content />
      </div>
    </div>
  );
}
