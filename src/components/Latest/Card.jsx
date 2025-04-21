import React from "react";

import arrow from "../../assets/imgs/common/arrow-long.svg";
import img from "../../assets/imgs/discover/img.png";

export default function Card() {
  return (
    <div className="flex flex-col items-start gap-3 md:flex-row-reverse md:gap-5">
      <img src={img} className="max-h-[17rem] w-full md:flex-1" alt="img" />
      <div className="flex flex-col items-start ~gap-3/7 md:flex-1">
        <span className="rounded-lg bg-[#23262F] px-3 py-1 text-sm font-semibold text-white">
          پیشفرض
        </span>
        <h2 className="font-bold ~text-xl/3xl">
          راهنمای مبتدیان برای TradingView
        </h2>
        <span className="text-[#353945] ~text-sm/lg">تولید، طراحی UI</span>
        <p className="max-w-[30rem] text-[#777E90] ~text-sm/lg">
          یک کیت صفحه فرود با ویژگی های کامل، شامل فایل های طراحی و تصاویر سه
          بعدی زیبا قابل ویرایش.
        </p>
        <img src={arrow} alt="svg" className="w-6 scale-x-[-1]" />
      </div>
    </div>
  );
}
