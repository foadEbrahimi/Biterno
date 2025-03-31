import React from 'react';

import arz from '../../../assets/imgs/coin symbol.svg';
import chart from '../../../assets/imgs/chart.svg';

export default function Card() {
  return (
    <div
      className="hover:shadow-lg cursor-pointer flex items-center justify-between gap-5 transition-all duration-300 hover:bg-white p-5 rounded-2xl"
      dir="ltr"
    >
      <div className="flex flex-col flex-1  gap-1">
        <img src={arz} alt="" className="w-fit" />
        <div>
          <div className="flex flex-col font-sans gap-2">
            <div className="flex  items-center gap-2">
              <span className="text-[#777E90] font-semibold">BTC/USDT</span>
              <span className="px-2 py-0.5 text-white text-sm font-semibold bg-[#FF6838] rounded-full">
                -0.79%
              </span>
            </div>
            <span className="text-3xl font-semibold text-[#23262F]">
              36,641.20
            </span>
            {/* <span className="text-lg text-[#23262F]">36,641.20</span> */}
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <img src={chart} alt="" />
      </div>
    </div>
  );
}
