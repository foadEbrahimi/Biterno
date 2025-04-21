import React from "react";

import connectLine from "@assets/imgs/landing/how/connect-line.svg";
import step1 from "@assets/imgs/landing/how/step1.svg";
import step2 from "@assets/imgs/landing/how/step2.svg";
import step3 from "@assets/imgs/landing/how/step3.svg";

import Slider from "./components/Slider";

export default function HowWork() {
  return (
    <div className="flex h-[70dvh] dark:mb-10 items-center justify-center rounded-b-[50px] rounded-t-[50px] bg-[#F4F5F6] py-20 dark:bg-[#141416] lg:h-[80dvh] lg:py-0">
      <div>
        <div className="~px-5/32">
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-center font-bold ~text-2xl/5xl dark:text-white">
              شروع کار در بیترنو
            </span>
            <p className="mt-3 max-w-[30rem] text-center font-vazirDemiBold text-sm !leading-[2rem] text-[#353945] dark:text-white/80">
              فرایند ساده و سریع برای شروع فعالیت شما
            </p>
          </div>
          <div className="mx-auto mt-10 hidden items-center justify-center gap-9 lg:flex">
            <img src={step3} className="w-10 lg:w-40" alt="step1 svg" />
            <img
              src={connectLine}
              className="w-20 lg:w-fit xl:w-20 2xl:w-40"
              alt="connectLine svg"
            />
            <img src={step2} className="w-10 lg:w-40 xl:w-36" alt="step2 svg" />
            <img
              src={connectLine}
              className="w-20 lg:w-fit xl:w-20 2xl:w-44"
              alt="connectLine svg"
            />
            <img src={step1} className="w-10 lg:w-32" alt="step3 svg" />
          </div>
          <div className="mt-10">
            <Slider />
          </div>
        </div>
      </div>
    </div>
  );
}
