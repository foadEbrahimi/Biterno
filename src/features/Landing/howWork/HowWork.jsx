import React from "react";

import Card from "./components/Card";

import { howItWork } from "@/constants/howItWork";

import connectLine from "@assets/imgs/connect-line.svg";
import step1 from "@assets/imgs/step-1.png";
import step2 from "@assets/imgs/step-2.png";
import step3 from "@assets/imgs/step-3.png";
import step4 from "@assets/imgs/step-4.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function HowWork() {
  return (
    <div className="mt-20 flex items-center pb-20 lg:h-[100dvh]">
      <div>
        {/* <Layout> */}
        <div className="~px-5/32">
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-center font-bold ~text-4xl/5xl">
              چگونه کار می کند
            </span>
            <p className="font-vazirDemiBold mt-4 max-w-[30rem] text-center !leading-[2rem] text-[#353945]">
              Stacks یک کتابخانه آماده تولید از بلوک های محتوای stackable است که
              در React Native ساخته شده است.
            </p>
          </div>
          <div className="mx-auto mt-10 hidden items-center justify-center gap-9 xl:flex">
            <img src={step1} className="w-10 lg:w-20" alt="step1 svg" />
            <img
              src={connectLine}
              className="w-20 lg:w-fit xl:w-28 2xl:w-40"
              alt="connectLine svg"
            />
            <img src={step2} className="w-10 lg:w-20" alt="step2 svg" />
            <img
              src={connectLine}
              className="w-20 lg:w-fit xl:w-28 2xl:w-44"
              alt="connectLine svg"
            />
            <img src={step3} className="w-10 lg:w-20" alt="step3 svg" />
            <img
              src={connectLine}
              className="w-20 lg:w-fit xl:w-28 2xl:w-44"
              alt="connectLine svg"
            />
            <img src={step4} className="w-10 lg:w-20" alt="step4 svg" />
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
                1285: {
                  spaceBetween: 30,
                },
                1520: {
                  spaceBetween: 30,
                },
              }}
              className="mySwiper"
            >
              {howItWork.map((item, index) => (
                <SwiperSlide className="!w-fit">
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
