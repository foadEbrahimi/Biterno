import React from "react";

import Contact from "./contact/Contact";
import Crypto from "./crypto/Crypto";
import Hero from "./hero/Hero";
import HowWork from "./howWork/HowWork";
import MarketTrend from "./marketTrend/MarketTrend";
import Subs from "./subs/Subs";
import Trade from "./trade/Trade";

import news2 from "@assets/imgs/news2.png";

export default function Landing() {
  return (
    <div className="relative overflow-hidden">
      <Hero />
      <Crypto />
      <MarketTrend maxCrypto={5} />
      <Trade />
      <Contact />
      <Subs />
      <HowWork />
      <div className="order-1 mx-auto mt-6 max-w-[13rem] lg:order-2">
        <img
          src={news2}
          alt=""
          className="mr-auto h-[10rem] w-full xl:w-[70%]"
        />
      </div>
    </div>
  );
}
