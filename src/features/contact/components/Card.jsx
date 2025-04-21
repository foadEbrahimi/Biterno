import React from "react";

import educationPic from "@assets/imgs/contact/education-pic-3.png";

export default function Card() {
  return (
    <div className="group mt-5 cursor-pointer transition-all duration-500">
      <div className="relative flex h-[296px] items-center justify-center rounded-xl bg-[#E6E8EC] px-20 sm:rounded-none">
        <img
          src={educationPic}
          className="max-h-[296px] max-w-[13rem] transition-all duration-500 group-hover:scale-110"
          alt="education png"
        />
        <span className="absolute left-3 top-3 rounded-md bg-[#9757D7] px-3 py-1.5 text-sm font-bold text-white">
          اخبار دیزاین
        </span>
      </div>
      <div className="flex flex-col items-start gap-4 p-4">
        <span className="text-lg font-bold transition-all duration-500 group-hover:text-[#3772FF]">
          تجلیل از سیستم طراحی جدید
        </span>
        <p className="max-w-[20rem] text-right text-sm text-[#777E90]">
          Stack مشکلات کسب و کار را از ساده تا پیچیده حل می کند
        </p>
      </div>
    </div>
  );
}
