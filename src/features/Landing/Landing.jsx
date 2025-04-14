import React from "react";

import Contact from "./contact/Contact";
import Crypto from "./crypto/Crypto";
import Hero from "./hero/Hero";
import HowWork from "./howWork/HowWork";
import MarketTrend from "./marketTrend/MarketTrend";
import Subs from "./subs/Subs";
import Trade from "./trade/Trade";

export default function Landing() {
  return (
    <div className="relative">
      <Hero />
      <Crypto />
      <MarketTrend />
      <Trade />
      <Contact />
      <Subs />
      <HowWork />
    </div>
  );
}
