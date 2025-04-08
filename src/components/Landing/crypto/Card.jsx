import React from "react";

export default function Card({ height, vertical, img, max = false }) {
  return (
    <div
      className={`group w-full cursor-pointer space-y-3 overflow-hidden ${
        vertical === true
          ? "flex flex-row-reverse items-center gap-5"
          : "flex flex-col"
      }`}
    >
      <div className="w-full overflow-hidden rounded-2xl">
        <img
          src={img}
          alt="img"
          className={`rounded-2xl transition-all duration-700 group-hover:scale-110 ${height} w-full`}
        />
      </div>
      <div
        className={`flex flex-col items-end space-y-2 lg:items-start ${max && "max-w-[15rem]"}`}
      >
        <span
          className={`text-[#23262F] ${vertical ? "" : "text-lg lg:text-2xl"} text-right font-bold transition-all duration-300 group-hover:text-[#3772FF]`}
        >
          توکن های اهرمی اکنون در دسترس هستند
        </span>
        <p className="max-w-[20rem] text-right text-xs font-semibold leading-6 text-[#777E90] lg:!min-w-full lg:text-sm">
          چیزهای خوب در 3 ثانیه می آیند. اکنون 3 برابر توکن اهرمی دریافت
          کنید.{" "}
        </p>
      </div>
    </div>
  );
}
