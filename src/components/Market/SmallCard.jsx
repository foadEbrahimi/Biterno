import React from "react";

import img from "../../assets/imgs/coin symbol.svg";

export default function SmallCard() {
  return (
    <div dir="ltr" className="mt-5">
      <div className="flex items-center gap-3">
        <img src={img} alt="coin svg" />
        <div className="space-x-3 font-sans">
          <span className="text-lg font-bold text-[#23262F]">Bitcoin</span>
          <span className="text-[#777E90]">BTC</span>
        </div>
      </div>
      <div className="mt-3 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="font-bold text-[#23262F]">36,641.20</span>
          <span className="font-semibold text-[#777E90]">قیمت</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-bold text-[#58BD7D]">+6.04%</span>
          <span className="font-semibold text-[#777E90]">24 ساعت</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-bold text-[#FF6838]">-1.71%</span>
          <span className="font-semibold text-[#777E90]">7 روز</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-bold text-[#23262F]">$328,564,656,654</span>
          <span className="font-semibold text-[#777E90]">بازار</span>
        </div>
      </div>
    </div>
  );
}
