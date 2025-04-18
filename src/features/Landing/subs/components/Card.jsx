import React from "react";

export default function Card({ title, desc, img }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-2xl p-4 lg:flex-row lg:px-10">
      <div className="order-2 mt-5 flex w-full flex-1 flex-col items-center justify-center gap-2 rounded-2xl lg:order-1 lg:items-start lg:gap-5">
        <span className="text-sm font-semibold text-[#777E90]">
          کانال های اطلاع رسانی
        </span>
        <span className="text-center font-bold !leading-[2.5rem] ~text-2xl/4xl lg:text-right">
          {title}
        </span>
        <span className="max-w-[15rem] text-center font-vazirDemiBold text-sm text-[#777E90] lg:min-w-fit lg:text-right">
          {desc}
        </span>
        <button className="mt-10 w-fit rounded-full border-2 px-4 py-2.5 font-vazirDemiBold text-[16px] text-black transition-all duration-200 hover:border-primary hover:bg-primary hover:text-[#FCFCFD]">
          اکنون عضو شوید
        </button>
      </div>
      <div className="order-1 mt-6 flex-1 lg:order-2">
        <img
          src={img}
          alt=""
          className="mr-auto max-h-[7rem] w-full object-cover lg:max-h-fit xl:w-[70%]"
        />
      </div>
    </div>
  );
}
