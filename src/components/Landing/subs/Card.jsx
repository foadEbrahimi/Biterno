import React from "react";

import img from "../../../assets/imgs/news-pic-2.png";

export default function Card() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-2xl p-4 lg:flex-row lg:bg-white lg:px-10">
      <div className="order-2 mt-5 flex w-full flex-col items-center justify-center gap-2 rounded-2xl lg:order-1 lg:items-start lg:gap-5">
        <span className="font-semibold text-[#777E90]">اخبار دیزاین</span>
        <span className="text-center font-bold !leading-[2.5rem] ~text-3xl/4xl lg:text-right">
          بخشی از جامعه جهانی ما باشید
        </span>
        <span className="max-w-[15rem] text-center font-semibold text-[#777E90] lg:min-w-fit lg:text-right">
          Stack مشکلات کسب و کار را از ساده تا پیچیده حل می کند.
        </span>
        <button className="mt-10 w-fit rounded-full border-2 px-4 py-2.5 font-semibold text-black transition-all duration-200 hover:border-[#23262F] hover:bg-[#23262F] hover:text-[#FCFCFD]">
          اکنون عضو شوید
        </button>
      </div>
      <div className="order-1 lg:order-2">
        <img
          src={img}
          alt=""
          className="mx-auto w-[50%] object-cover xl:w-[70%]"
        />
      </div>
    </div>
  );
}
