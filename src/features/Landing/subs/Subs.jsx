import React from "react";

import Layout from "@/components/layout/landing/Layout";

import arrow from "@assets/imgs/common/arrow-long.svg";
import logo from "@assets/imgs/logo/biterno-b.svg";
import Slider from "./components/Slider";

export default function Subs() {
  return (
    <div className="pb-20 pt-10">
      <Layout>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <img src={logo} className="w-7" alt="bitCloud logo" />
            <span className="font-iranSansDemiBold text-lg text-textColor">
              بیترنو
            </span>
          </div>
          <span className="mt-5 text-center font-semibold !leading-[2.5rem] ~text-2xl/5xl dark:text-white">
            با بیترنو از اخرین تحولات بازار رمز ارزها مطلع باشید
          </span>
          <p className="mt-4 text-[#777E90]">دسترسی لحظه ای به اطلاعات بازار</p>
        </div>
        <div className="relative !mx-auto ~mt-10/16 md:mx-10 md:max-w-[80%] xl:h-[30rem]">
          <button className="nextSlide absolute -bottom-8 left-[38%] flex h-10 w-10 translate-x-[-50%] translate-y-[50%] items-center justify-center rounded-full border-2 md:-left-10 md:bottom-[50%]">
            <img src={arrow} alt="arrow svg" className="w-4 scale-x-[-1]" />
          </button>
          <button className="prevSlide absolute -bottom-8 right-[38%] flex h-10 w-10 translate-x-[50%] translate-y-[50%] items-center justify-center rounded-full border-2 md:-right-10 md:bottom-[50%]">
            <img src={arrow} alt="arrow svg" className="w-4" />
          </button>
          <Slider />
        </div>
      </Layout>
    </div>
  );
}
