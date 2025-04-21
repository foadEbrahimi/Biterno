import React from "react";

export default function Card({ height, vertical, img, max = false }) {
  return (
    <div
      className={`group w-full cursor-pointer space-y-3 overflow-hidden dark:bg-[#141416] ${
        vertical === true
          ? "flex flex-row-reverse items-center gap-5"
          : "flex flex-col"
      }`}
    >
      <div className="flex w-full justify-center overflow-hidden rounded-2xl bg-gray-100 p-1 dark:border dark:bg-[#141416]">
        <img
          src={img}
          alt="img"
          className={`h-[7rem] transition-all duration-700 group-hover:scale-110 sm:~h-40/72 lg:h-fit ${height}`}
        />
      </div>
      <div
        className={`flex flex-col items-end space-y-2 lg:items-start ${max && "max-w-[15rem]"}`}
      >
        <span
          className={`text-[#23262F] ${vertical ? "" : "text-lg lg:text-2xl"} text-right font-bold transition-all duration-300 ~text-xs/lg group-hover:text-primary dark:text-white`}
        >
          توکن های اهرمی اکنون در دسترس هستند
        </span>
        <p className="hidden max-w-[20rem] text-right text-xs font-semibold leading-6 text-[#777E90] lg:flex lg:!min-w-full lg:text-sm">
          چیزهای خوب در 3 ثانیه می آیند. اکنون 3 برابر توکن اهرمی دریافت
          کنید.{" "}
        </p>
      </div>
    </div>
  );
}
