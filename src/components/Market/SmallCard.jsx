import React from "react";

import img from "../../assets/imgs/coin symbol.svg";

export default function SmallCard() {
  return (
    <div className="border-t py-3 transition-all duration-300 hover:bg-[#F4F5F6]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={img} alt="coin svg" />
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-[#23262F]">بیتکوین</span>
            <span className="font-sans text-[#777E90]">BTC</span>
          </div>
        </div>
        <button className="rounded-full bg-[#3772FF] px-5 py-1.5 font-semibold text-white transition-all duration-200 hover:bg-[#0045ea]">
          خرید
        </button>
      </div>
      <div className="mt-3 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-[#777E90]">قیمت</span>
          <span className="font-bold text-[#23262F]">36,641.20</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-[#777E90]">24 ساعت</span>
          <span className="font-bold text-[#58BD7D]">6.04% +</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-[#777E90]">7 روز</span>
          <span className="font-bold text-[#FF6838]">1.71% -</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-[#777E90]">بازار</span>
          <span className="font-bold text-[#23262F]">328,564,656,654</span>
        </div>
      </div>
    </div>
  );
}
