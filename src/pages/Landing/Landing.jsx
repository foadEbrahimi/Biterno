import React from 'react';

import Hero from '../../pages/Landing/Hero';
import Arz from '../../pages/Landing/Arz';
import Crypto from './Crypto';
import MarketTrend from './MarketTrend';
import Contact from './Contact';
import Subs from './Subs';
import HowWork from './HowWork';
import Footer from './Footer';

export default function Landing() {
  return (
    <div className="relative">
      <Hero />
      <Arz />
      <Crypto />
      <MarketTrend />
      <Contact />
      <Subs />
      <HowWork />
      <Footer />
    </div>
  );
}
