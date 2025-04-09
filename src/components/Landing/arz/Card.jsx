import React from "react";

import arz from "../../../assets/imgs/coin symbol.svg";
import chart from "../../../assets/imgs/chart.svg";

export default function Card() {
  return (
    <div
      className="flex w-full cursor-pointer items-center justify-between gap-5 rounded-2xl border p-5 py-6 transition-all duration-300 hover:bg-white"
      dir="ltr"
    >
      <div className="flex flex-1 flex-col gap-1">
        <img src={arz} alt="" className="w-fit" />
        <div>
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[#777E90] font-sans">BTC/USDT</span>
              <span className="rounded-full bg-[#FF6838] px-2 py-0.5 text-sm font-semibold text-white">
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
      <div className="hidden flex-1 items-center justify-center md:flex">
        <img src={chart} alt="" />
      </div>
    </div>
  );
}
