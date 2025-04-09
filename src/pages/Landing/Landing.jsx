import React from "react";

import Hero from "../../pages/Landing/Hero";
import Arz from "../../pages/Landing/Arz";
import Crypto from "./Crypto";
import MarketTrend from "./MarketTrend";
import Contact from "./Contact";
import Subs from "./Subs";
import HowWork from "./HowWork";
import Trade from "./Trade";

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
