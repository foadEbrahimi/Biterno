import React from "react";

import chart from "@assets/imgs/common/chart.svg";
import chart2 from "@assets/imgs/common/chart2.svg";

import { formatToTomanWithCommas } from "@/utils/helper";

export default function Card({ image, name, price, change24h }) {
  return (
    <div
      className="group/hover flex !w-fit cursor-pointer items-start gap-5"
      dir="rtl"
    >
      <div className="flex items-center gap-1">
        <div className="flex gap-3">
          <div className="flex w-6 flex-col">
            <img src={image} className="" alt="bitcoin svg" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-sans font-semibold text-[#777E90] dark:text-white lg:text-sm">
                {name}
              </span>
              <span
                dir="ltr"
                className={`flex items-center justify-center rounded-full py-0.5 font-vazirDemiBold text-sm ${
                  change24h > 0 ? "text-green-600" : "text-red-600"
                } px-2`}
              >
                {" "}
                {change24h}
              </span>
            </div>
          </div>
        </div>
        <span className="mt-1 flex items-center gap-2 font-vazirBold text-[16px] transition-all duration-200 group-hover/hover:text-primary dark:text-white lg:text-lg xl:text-[16px] 2xl:text-xl">
          {formatToTomanWithCommas(price.slice(0, -1))} <span>تومان</span>
        </span>
      </div>
      <img
        src={change24h > 0 ? chart : chart2}
        className="hidden w-[5rem] xl:flex xl:w-[4rem] 2xl:w-[5.5rem]"
        alt="chart svg"
      />
    </div>
  );
}
