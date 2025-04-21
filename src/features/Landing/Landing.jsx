import React from "react";

import Application from "./application/Application";
import Crypto from "./crypto/Crypto";
import Hero from "./hero/Hero";
import HowWork from "./howWork/HowWork";
import MarketTrend from "./marketTrend/MarketTrend";
import Subs from "./subs/Subs";
import WhyUs from "./whyUs/WhyUs";

import object from "@assets/imgs/landing/hero/object.png";

export default function Landing() {
  return (
    <div className="bg-bg relative overflow-hidden">
      <div className="!-z-40">
        <div className="absolute right-0 top-0 h-full w-full">
          <img src={object} alt="object png" />
        </div>
        <div className="absolute -left-20 -top-20 h-[326px] w-[322px] rounded-full bg-primary/40 blur-[100px]"></div>
      </div>
      <Hero />
      <Crypto />
      <MarketTrend maxCrypto={5} />
      <Application />
      <WhyUs />
      <Subs />
      <HowWork />
    </div>
  );
}
