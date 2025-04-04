import React from "react";

export default function Menu() {
  return (
    <div
      dir="ltr"
      className="hidden font-sans lg:flex lg:items-center lg:justify-between"
    >
      <div className="lg:flex lg:items-center lg:gap-3">
        <span className="flex h-9 items-center justify-center rounded-full bg-[#353945] px-4 pb-0.5 font-semibold text-[#FCFCFD]">
          Cryptocurrencies
        </span>
        <span className="flex h-9 items-center justify-center rounded-full px-4 pb-0.5 font-semibold text-[#353945]">
          DeFi
        </span>
        <span className="flex h-9 items-center justify-center rounded-full px-4 pb-0.5 font-semibold text-[#353945]">
          Innovation
        </span>
        <span className="flex h-9 items-center justify-center rounded-full px-4 pb-0.5 font-semibold text-[#353945]">
          POS
        </span>
        <span className="flex h-9 items-center justify-center rounded-full px-4 pb-0.5 font-semibold text-[#353945]">
          NFT
        </span>
        <span className="flex h-9 items-center justify-center rounded-full px-4 pb-0.5 font-semibold text-[#353945]">
          POW
        </span>
      </div>
      <button className="rounded-full border-2 px-3 py-1 text-lg">Trade</button>
    </div>
  );
}
