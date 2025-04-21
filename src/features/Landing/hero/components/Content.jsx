import React from "react";
import { Link } from "react-router";

import investing from "@assets/imgs/landing/hero/investing.svg";

import Slider from "./Slider";

export default function Content() {
  return (
    <div id="heroSection" className="pt-12 ~px-5/40 md:!pl-0 md:pt-36 xl:pt-24">
      <div className="flex h-full flex-col items-center gap-10 pt-10 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-1 flex-col items-center gap-2.5 md:flex md:items-start">
          <h1 className="text-center font-bold !leading-[3.5rem] text-textColor ~text-4xl/5xl md:text-right lg:!leading-[4.4rem] xl:!leading-[4rem] 2xl:!leading-[4.5rem]">
            <span className="text-primary">بیترنو</span> نسل نوین <br /> معاملات
            هوشمند
          </h1>
          <p className="px-10 text-center text-sm font-semibold leading-7 text-[#777E90] dark:text-[#666] md:px-0 md:text-right lg:max-w-[25rem]">
            با قدم در آینده دارایی های دیجیتال و با ایجاد امنیت در دل تکنولوژی
            اعتماد می آفرینیم
          </p>
          <div className="flex items-center gap-5 md:hidden">
            <Link to="/auth/login">
              <button className="rounded-full border-2 px-6 py-2 font-bold transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white">
                ورود
              </button>
            </Link>
            <Link to="/auth/register">
              <button className="rounded-full bg-primary px-5 py-2 font-semibold text-white transition-all duration-300 hover:bg-primary">
                ثبت نام
              </button>
            </Link>
          </div>
          <Link to="/auth/login">
            <button className="hidden gap-2 rounded-xl bg-primary px-5 py-3 font-vazirBold text-sm text-white transition-all duration-500 hover:text-black md:flex">
              همین الان شروع کنید
              <svg
                aria-hidden="true"
                dataprefix="fal"
                dataicon="arrow-left"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-3 rotate-45"
              >
                <path
                  fill="currentColor"
                  d="M231.536 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113L238.607 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"
                  className=""
                ></path>
              </svg>
            </button>
          </Link>
          <Slider />
        </div>
        <div className="hidden h-full w-full flex-[1.5] md:mt-3 md:flex md:items-center md:justify-center">
          <img
            src={investing}
            draggable={false}
            alt="card hero img"
            className="w-full scale-x-[-1]"
          />
        </div>
      </div>
    </div>
  );
}
