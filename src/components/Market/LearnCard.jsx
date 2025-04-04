import React from "react";
import img from "../../assets/imgs/blog/media container.png";

export default function LearnCard() {
  return (
    <div>
      <img src={img} className="w-full" alt="" />
      <div className="mt-4 flex flex-col gap-3">
        <div className="w-fit rounded-lg bg-[#FF6838] px-3 py-1 font-semibold text-white">
          جدید
        </div>
        <span className="text-lg font-bold text-[#23262F]">
          درباره سکه UI8 بیاموزید و یک گذرنامه All-Access کسب کنید
        </span>
      </div>
      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <div className="h-5 w-5 rounded-full bg-[#58BD7D]"> </div>
          <span className="font-semibold">علی هاشمی</span>
        </div>
        <span className="font-semibold">13 فروردین</span>
      </div>
    </div>
  );
}
