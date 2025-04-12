import React from "react";

import Arz from "./arz/Arz";
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
      <Arz />
      <Crypto />
      <MarketTrend />
      <Contact />
      <Trade />
      <Subs />
      <HowWork />
    </div>
  );
}
