import React from "react";

import Layout from "@/components/layout/landing/Layout";
import Card from "./components/Card";

import arrow from "@assets/imgs/common/arrow-long.svg";
import blog1 from "@assets/imgs/landing/crypto/img1.svg";
import blog2 from "@assets/imgs/landing/crypto/img2.svg";
import blog3 from "@assets/imgs/landing/crypto/img3.svg";
import blog4 from "@assets/imgs/landing/crypto/img4.svg";

import Slider from "./components/Slider";

export default function Crypto() {
  return (
    <div id="cryptoSection" className="bg-bg pb-5 md:mt-10 xl:mt-28">
      <Layout>
        <div className="flex items-center justify-between">
          <span className="font-bold ~text-xl/4xl dark:text-white">
            اخبار بازار
          </span>
          <button
            aria-label="View More"
            className="hidden rounded-full border-2 px-4 py-2.5 text-sm font-semibold text-black transition-all duration-200 hover:border-primary hover:bg-primary hover:text-[#FCFCFD] dark:text-white md:flex lg:text-base"
          >
            مشاهده بیشتر
          </button>
        </div>
        <div className="mt-2 space-y-5">
          <div className="lg:hidden">
            <Slider />
          </div>
          <div className="hidden items-start gap-20 lg:flex">
            <div className="flex-1 lg:max-w-[50rem]">
              <Card height="h-[31rem]" img={blog4} />
            </div>
            <div className="space-y-5">
              <Card
                max
                vertical={true}
                height="!h-[10rem] !w-[10rem]"
                img={blog2}
              />
              <Card
                max
                vertical={true}
                height="!h-[10rem] !w-[10rem]"
                img={blog1}
              />
              <Card
                max
                vertical={true}
                height="!h-[10rem] !w-[10rem]"
                img={blog3}
              />
            </div>
          </div>
          <div className="!mt-1 flex items-center justify-center gap-3 lg:hidden">
            <button
              aria-label="Next Slide"
              className="nextSlide flex h-10 w-10 items-center justify-center rounded-full hover:border-2"
            >
              <img src={arrow} alt="" className="w-4" />
            </button>
            <button
              aria-label="Previous Slide"
              className="prevSlide flex h-10 w-10 items-center justify-center rounded-full hover:border-2"
            >
              <img src={arrow} alt="" className="w-4 scale-x-[-1]" />
            </button>
          </div>
          <button
            aria-label="View More"
            className="hover:pri !mt-4 w-full rounded-full border-2 p-3 font-bold text-black transition-all duration-200 hover:border-primary hover:bg-primary hover:text-white dark:text-white md:hidden lg:hidden"
          >
            مشاهده بیشتر
          </button>
        </div>
      </Layout>
    </div>
  );
}
