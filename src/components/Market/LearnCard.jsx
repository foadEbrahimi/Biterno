import React from "react";
import img from "../../assets/imgs/lessons-pic-1.jpg";

export default function LearnCard() {
  return (
    <div className="group cursor-pointer lg:border-b lg:pb-12">
      <div className="overflow-hidden rounded-xl">
        <img
          src={img}
          className="h-[14rem] w-full transition-all duration-700 group-hover:scale-110"
          alt="learn img"
        />
      </div>
      <div className="mt-4 flex flex-col gap-3">
        <div className="w-fit rounded-lg bg-[#FF6838] px-3 py-1 font-semibold text-white">
          جدید
        </div>
        <span className="text-lg font-bold text-[#23262F] transition-all duration-200 group-hover:text-[#3772FF]">
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
