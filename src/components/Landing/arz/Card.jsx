import React from "react";

import chart from "../../../assets/imgs/chart.svg";
import chart2 from "../../../assets/imgs/chart2.svg";

import { formatToToman } from "../../../lib/helper";

export default function Card({ name, image, price, change24h }) {
  return (
    <div
      className="flex w-full cursor-pointer items-center justify-between gap-5 rounded-2xl border p-5 py-6 transition-all duration-300 hover:bg-white"
      dir="ltr"
    >
      <div className="flex flex-1 flex-col gap-1">
        <img src={image} alt={`${name} coin img`} className="w-10" />
        <div>
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-2">
              <span className="font-sans font-semibold text-[#777E90]">
                {name}/USDT
              </span>
              <span
                className={`rounded-full ${change24h < 0 ? "bg-red-600" : "bg-green-600"} px-4 py-1 text-sm text-white`}
              >
                {change24h}%
              </span>
            </div>
            <span className="text-2xl font-semibold text-[#23262F]">
              {/* {formatToToman(stats.latest.slice(0, -1))} */}
              {price}
            </span>
          </div>
        </div>
      </div>
      <div className="hidden flex-1 items-center justify-center md:flex">
        <img src={change24h < 0 ? chart2 : chart} alt="" />
      </div>
    </div>
  );
}
