import React from "react";


export default function Card({ title, desc, img }) {
  return (
    <div className="rounded-2xl bg-white p-3 px-5 pb-12 hover:shadow-xl xl:max-w-[25rem]">
      <img src={img} className="mx-auto h-[10rem] flex max-w-[40%] pt-10" alt="" />
      <div className="mt-10 space-y-2 pb-12 text-center">
        <span className="text-xl font-bold">{title}</span>
        <p className="!pt-3 text-right font-vazirMedium text-[#777E90]">
          {desc}
        </p>
      </div>
      <button className="mx-auto flex rounded-full border-2 px-5 py-2 font-vazirDemiBold text-[16px] transition-all duration-200 hover:border-primary hover:bg-primary hover:text-[#FCFCFD]">
        خرید کریپتو
      </button>
    </div>
  );
}
