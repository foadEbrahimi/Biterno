import React from "react";

import Navbar from "@/components/layout/landing/Navbar";
import Content from "./components/Content";

import object from "@assets/imgs/landing/hero/object.png";

export default function Hero() {
  return (
    <div className="relative bg-bg">
      <div className="relative z-20">
        <Navbar />
        <Content />
      </div>
      <div className="!z-10">
        <div className="absolute right-0 top-0 h-full w-full">
          <img src={object} alt="object png" className="h-full" />
        </div>
        <div className="absolute -left-20 -top-20 h-[326px] w-[322px] rounded-full bg-primary/40 blur-[100px]"></div>
      </div>
    </div>
  );
}
