import React from "react";

import Card from "./components/Card";

import { howItWork } from "@/constants/howItWork";

import connectLine from "@assets/imgs/connect-line.svg";
import step1 from "@assets/imgs/how/step1.svg";
import step2 from "@assets/imgs/how/step2.svg";
import step3 from "@assets/imgs/how/step3.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function HowWork() {
  return (
    <div className="flex h-[80dvh] items-center justify-center rounded-b-[50px] rounded-t-[50px] bg-[#F4F5F6] py-20 lg:py-0">
      <div>
        {/* <Layout> */}
        <div className="~px-5/32">
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-center font-bold ~text-4xl/5xl">
              شروع کار در بیترنو
            </span>
            <p className="mt-4 max-w-[30rem] text-center font-vazirDemiBold !leading-[2rem] text-[#353945]">
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
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              slidesPerView={"auto"}
              spaceBetween={10}
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: ".nextSlide",
                prevEl: ".prevSlide",
              }}
              breakpoints={{
                1024: {
                  spaceBetween: 120,
                },
                1285: {
                  spaceBetween: 0,
                },
              }}
              className="mySwiper"
            >
              {howItWork.map((item, index) => (
                <SwiperSlide className="!w-fit !bg-transparent">
                  <Card {...item} index={index + 1} key={index + 1} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {/* </Layout> */}
      </div>
    </div>
  );
}
