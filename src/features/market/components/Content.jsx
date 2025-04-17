import React from "react";

import market from "@assets/imgs/market/chart.svg";

export default function Content() {
  return (
    <div className="mt-20 flex flex-col gap-5 sm:flex-row sm:items-center lg:mb-24 lg:mt-0 xl:mb-32">
      <div className="flex flex-col ~gap-5/9 sm:flex-1">
        <h1 className="font-bold !leading-[3rem] ~text-4xl/6xl xl:!leading-[4.5rem]">
          قیمت لحظه ای <br /> ارزهای دیجیتال
        </h1>
        <span className="text-[#353945] ~text-sm/2xl">
          ارزش بازار جهانی کریپتو{" "}
          <span className="font-extrabold text-primary">1.86 تریلیون دلار</span>{" "}
          است
        </span>
      </div>
      <div className="w-full pt-5 sm:flex-[1.5] xl:flex-1 xl:pt-24">
        <img src={market} alt="market img" />
      </div>
    </div>
  );
}
