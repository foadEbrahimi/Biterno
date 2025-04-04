import React from "react";

import cards from "../../../assets/imgs/cards.png";

export default function Content() {
  return (
    <div className="~px-5/40">
      <div className="z-10 mt-10 flex flex-col items-center justify-between md:flex-row">
        <div className="flex flex-col items-center gap-5 md:flex md:flex-1 md:items-start">
          <h1 className="text-center font-bold leading-[3.5rem] text-[#23262F] ~text-4xl/6xl md:text-right xl:leading-[5rem]">
            خرید و فروش <br /> رمزنگاری در چند دقیقه
          </h1>
          <p className="text-center font-semibold text-[#777E90] md:text-right lg:max-w-[25rem]">
            بیت کوین، اتریوم، USDT و توپالت کوین ها را در صرافی افسانه ای دارایی
            های کریپتو معامله کنید.
          </p>
          <div className="flex items-center gap-5 md:hidden">
            <button className="rounded-full border-2 px-4 py-2 font-bold">
              ورود
            </button>
            <button className="rounded-full bg-[#3772FF] px-5 py-2 font-semibold text-white">
              ثبت نام
            </button>
          </div>
          <button className="hidden rounded-full bg-[#3772FF] px-5 py-2 font-semibold text-white md:flex">
            همین الان شروع کنید
          </button>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <img src={cards} alt="card hero img" className="max-h-[39rem]" />
        </div>
      </div>
    </div>
  );
}
