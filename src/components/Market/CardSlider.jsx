import React from "react";

import chart from "../../assets/imgs/chart.svg";
import bitcoin from "../../assets/imgs/coin symbol (2).svg";
export default function CardSlider() {
  return (
    <div className="flex w-fit items-start gap-5" dir="ltr">
      <div className="flex items-start gap-3">
        <img src={bitcoin} alt="svg" />
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="font-sans font-semibold text-[#777E90]">
              BTC/USDT
            </span>
            <span
              dir="ltr"
              className="flex items-center justify-center rounded-full bg-[#58BD7D] px-2 text-white"
            >
              {" "}
              +0.79%
            </span>
          </div>
          <span className="mt-1 text-3xl font-bold">36,641.20</span>
          <span className="text-lg font-light">36,641.20</span>
        </div>
      </div>
      <img src={chart} className="hidden xl:flex" alt="chart svg" />
    </div>
  );
}
