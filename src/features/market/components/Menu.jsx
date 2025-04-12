import React from "react";

export default function Menu() {
  return (
    <div className="hidden lg:flex lg:items-center lg:justify-between">
      <div className="lg:flex lg:items-center lg:gap-3">
        <span className="flex h-9 items-center justify-center rounded-full bg-[#353945] px-4 pb-0.5 text-sm font-semibold text-[#FCFCFD]">
          ارزهای رمزنگاری شده
        </span>
      </div>
      <button className="rounded-full border-2 px-4 py-1.5 text-lg transition-all duration-200 hover:border-[#23262F] hover:bg-[#23262F] hover:text-[#FCFCFD]">
        معامله
      </button>
    </div>
  );
}
