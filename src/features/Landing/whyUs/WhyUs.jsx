import React from "react";

import Layout from "@/components/layout/landing/Layout";
import Slider from "./components/Slider";

import arrow from "@assets/imgs/arrow-long.svg";

export default function WhyUs() {
  return (
    <div className="relative mt-20 flex min-h-[100dvh] items-center rounded-b-[50px] rounded-t-[50px] bg-gray-100 py-20">
      <Layout>
        <div className="flex flex-col items-center">
          <span className="mb-3 max-w-[23rem] font-bold !leading-[3rem] ~text-2xl/4xl md:text-center">
            چرا بیترنو ؟{" "}
          </span>
          <p className="text-center text-sm font-semibold text-[#777E90]">
            خرید و فروش ارزهای دیجیتال به صورت آنی و با نقد شوندگی بالا و کمترین
            کارمزد
          </p>
        </div>
        <div className="mt-16">
          <Slider />
        </div>
        <div className="mt-8 flex items-center justify-center gap-3 text-white/50 lg:hidden">
          <button className="nextSlide flex h-10 w-10 items-center justify-center rounded-full hover:border-2">
            <img src={arrow} alt="" className="w-4" />
          </button>
          <button className="prevSlide flex h-10 w-10 items-center justify-center rounded-full hover:border-2">
            <img src={arrow} alt="" className="w-4 scale-x-[-1]" />
          </button>
        </div>
        <button className="mx-auto mt-7 flex w-full items-center justify-center rounded-full bg-primary px-7 py-2.5 text-center text-lg font-semibold text-white transition-all duration-300 hover:text-black lg:w-fit xl:mt-14">
          ارتباط با ما{" "}
        </button>
      </Layout>
    </div>
  );
}
