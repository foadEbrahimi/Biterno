import React from "react";

import img from "@assets/imgs/discover/01.png";

export default function Card() {
  return (
    <div className="flex flex-col gap-3">
      <div className="relative">
        <img src={img} alt="" className="max-h-[20rem] w-full rounded-2xl" />
        <span className="absolute left-2 top-2 rounded-lg bg-[#9757D7] px-3 py-1 text-white">
          به زودی
        </span>
      </div>
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gray-400"></div>
          <div>
            <h3 className="text-lg font-bold text-[#23262F]">
              مجسمه سازی قدرت یوگا
            </h3>
            <span className="text-sm text-[#777E90]">علی هاشمی</span>
          </div>
        </div>
        <div className="rounded-lg border-2 border-[#58BD7D] px-3 py-1 text-sm font-semibold text-[#58BD7D]">
          پرطرفدار
        </div>
      </div>
    </div>
  );
}
