import React from "react";

import Content from "./components/Content";
import Navbar from "@/components/layout/landing/Navbar";

import object from "@assets/imgs/landing/hero/object.png";

export default function Hero() {
  return (
    <div>
      <div className="relative">
        <div className="absolute right-0 top-0 !-z-10 h-full w-full">
          <img src={object} alt="object png" />
        </div>
        <div className="absolute -left-20 -top-20 !-z-20 h-[326px] w-[322px] rounded-full bg-primary/40 blur-[100px]"></div>
        <Navbar />
        <Content />
      </div>
    </div>
  );
}
