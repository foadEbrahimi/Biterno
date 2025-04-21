import React from "react";

import Contact from "./contact/Contact";
import Crypto from "./crypto/Crypto";
import Hero from "./hero/Hero";
import HowWork from "./howWork/HowWork";
import MarketTrend from "./marketTrend/MarketTrend";
import Subs from "./subs/Subs";
import Application from "./application/Application";

export default function Landing() {
  return (
    <div className="relative overflow-hidden">
      <Hero />
      <Crypto />
      <MarketTrend maxCrypto={5} />
      <Application />
      <Contact />
      <Subs />
      <HowWork />
    </div>
  );
}
