import React from "react";

export default function Card({ title, desc, img, link }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-2xl p-4 dark:border lg:flex-row lg:px-10">
      <div className="order-2 mt-5 flex w-full flex-1 flex-col items-center justify-center gap-2 rounded-2xl lg:order-1 lg:items-start lg:gap-5">
        <span className="text-sm font-semibold text-[#777E90]">
          کانال های اطلاع رسانی
        </span>
        <span className="text-center font-bold !leading-[2.5rem] ~text-2xl/4xl dark:text-white lg:text-right">
          {title}
        </span>
        <span className="max-w-[15rem] text-center font-iranSansDemiBold text-sm text-[#777E90] lg:min-w-fit lg:text-right">
          {desc}
        </span>
        <a
          aria-label="Subscribe the channel"
          href={link}
          className="mt-10 w-fit rounded-full border-2 px-4 py-2.5 font-iranSansDemiBold text-[16px] text-black transition-all duration-200 hover:border-primary hover:bg-primary hover:text-[#FCFCFD] dark:text-white"
        >
          اکنون عضو شوید
        </a>
      </div>
      <img
        src={img}
        alt=""
        className="order-1 mx-auto mr-auto mt-6 h-[5rem] w-[10rem] flex-1 object-cover lg:order-2 lg:h-full lg:!max-w-[14rem] xl:h-fit xl:!max-w-[16rem]"
      />
    </div>
  );
}
