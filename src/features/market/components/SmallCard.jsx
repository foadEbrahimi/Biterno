import React from "react";

import { formatToTomanWithCommas } from "@/utils/helper";

export default function SmallCard({
  name,
  image,
  price,
  change24h,
  marketCap,
  change7d,
}) {
  return (
    <div className="border-t py-3 transition-all duration-300 hover:bg-[#F4F5F6]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={image} alt="coin svg" className="w-10" />
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-[#23262F]">{name}</span>
            <span className="font-sans uppercase text-[#777E90]">{name}</span>
          </div>
        </div>
        <button className="rounded-full bg-[#3772FF] px-5 py-1.5 font-semibold text-white transition-all duration-200 hover:bg-[#0045ea]">
          خرید
        </button>
      </div>
      <div className="mt-3 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-[#777E90]">قیمت</span>
          <span className="font-bold text-[#23262F]">
            {formatToTomanWithCommas(price.slice(0, -1))}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-[#777E90]">24 ساعت</span>
          <span
            className={`font-bold ${change24h > 0 ? "text-green-600" : "text-red-600"}`}
            dir="ltr"
          >
            {change24h}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-[#777E90]">7 روز</span>
          <span
            className={`font-bold ${change7d > 0 ? "text-green-600" : "text-red-600"}`}
            dir="ltr"
          >
            {change7d}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-[#777E90]">بازار</span>
          <span className="font-bold text-[#23262F]">
            {formatToTomanWithCommas(marketCap)}
          </span>
        </div>
      </div>
    </div>
  );
}

export function SmallCardSkeleton() {
  return (
    <div className="animate-pulse border-t py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gray-200" />
          <div className="flex flex-col gap-2">
            <div className="h-4 w-20 rounded bg-gray-200" />
            <div className="h-3 w-16 rounded bg-gray-200" />
          </div>
        </div>
        <div className="h-9 w-20 rounded-full bg-gray-200" />
      </div>
      <div className="mt-3 flex flex-col gap-3">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="h-3 w-16 rounded bg-gray-200" />
            <div className="h-4 w-24 rounded bg-gray-200" />
          </div>
        ))}
      </div>
    </div>
  );
}
