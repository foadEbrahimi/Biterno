import React from "react";

import Application from "./application/Application";
import Crypto from "./crypto/Crypto";
import Hero from "./hero/Hero";
import HowWork from "./howWork/HowWork";
import MarketTrend from "./marketTrend/MarketTrend";
import Subs from "./subs/Subs";
import WhyUs from "./whyUs/WhyUs";

export default function Landing() {
  return (
    <div className="relative overflow-hidden">
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
