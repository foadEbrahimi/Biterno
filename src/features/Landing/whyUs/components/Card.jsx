import React from "react";

export default function Card({ title, desc, img }) {
  return (
    <div className="min-h-full rounded-2xl bg-white p-3 px-5 pb-12 hover:shadow-xl dark:border dark:bg-transparent xl:max-w-[25rem]">
      <img
        src={img}
        className="mx-auto flex h-[10rem] max-w-[40%] pt-10"
        alt=""
      />
      <div className="mt-10 space-y-2 pb-12 text-center">
        <span className="text-xl font-bold dark:text-white">{title}</span>
        <p className="font-iranSansMedium !pt-3 text-center text-[16px] leading-8 text-[#777E90] md:text-[15px] lg:text-[16px] xl:text-[16.8px] 2xl:text-[18px]">
          {desc}
        </p>
      </div>
      <button className="font-iranSansDemiBold mx-auto flex rounded-full border-2 px-5 py-2 text-[16px] transition-all duration-200 hover:border-primary hover:bg-primary hover:text-[#FCFCFD] dark:text-white">
        خرید کریپتو
      </button>
    </div>
  );
}
