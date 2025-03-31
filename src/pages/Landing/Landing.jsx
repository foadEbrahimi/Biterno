import React from 'react';

import Hero from '../../pages/Landing/Hero';
import Arz from '../../pages/Landing/Arz';
import Crypto from './Crypto';

export default function Landing() {
  return (
    <div className="relative">
      <Hero />
      <Arz />
      <Crypto />
    </div>
  );
}
