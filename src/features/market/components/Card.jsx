import React from "react";

import chart from "@assets/imgs/chart.svg";
import chart2 from "@assets/imgs/chart2.svg";
import { formatToTomanWithCommas } from "@/utils/helper";

export default function Card({ image, name, price, change24h }) {
  return (
    <div
      className="group/hover flex w-fit cursor-pointer items-start gap-5"
      dir="rtl"
    >
      <div className="flex items-start gap-3">
        <img src={image} className="w-10" alt="bitcoin svg" />
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="font-sans font-semibold text-[#777E90]">
              {name}
            </span>
            <span
              dir="ltr"
              className={`flex items-center justify-center rounded-full py-0.5 text-sm ${
                change24h > 0 ? "bg-green-600" : "bg-red-600"
              } px-2 text-white`}
            >
              {" "}
              {change24h}
            </span>
          </div>
          <span className="mt-1 font-vazirBold text-2xl transition-all duration-200 group-hover/hover:text-[#3772FF]">
            {formatToTomanWithCommas(price.slice(0, -1))}
          </span>
        </div>
      </div>
      <img
        src={change24h > 0 ? chart : chart2}
        className="hidden xl:flex"
        alt="chart svg"
      />
    </div>
  );
}
