import React from "react";

import Card from "./components/Card";
import Layout from "@/components/layout/landing/Layout";

import arrow from "@assets/imgs/arrow-long.svg";
import logo from "@assets/imgs/logo.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Subs() {
  return (
    <div className="mt-20 bg-[#F4F5F6] pb-20 pt-10">
      <Layout>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <img src={logo} alt="logo svg" />
            <span className="text-2xl">بیتکلود</span>
          </div>
          <span className="mt-5 text-center font-semibold !leading-[3rem] ~text-4xl/5xl">
            با بیتکلود از کریپتو آگاه باشید
          </span>
          <p className="mt-4 text-[#777E90]">
            آژانس خلاقی که رهبری و الهام بخش است
          </p>
        </div>
        <div className="relative !mx-auto ~mt-10/16 md:mx-10 md:max-w-[80%] xl:h-[30rem]">
          <button className="nextSlide absolute -bottom-8 left-[38%] flex h-10 w-10 translate-x-[-50%] translate-y-[50%] items-center justify-center rounded-full border-2 md:-left-10 md:bottom-[50%]">
            <img src={arrow} alt="arrow svg" className="w-4 scale-x-[-1]" />
          </button>
          <button className="prevSlide absolute -bottom-8 right-[38%] flex h-10 w-10 translate-x-[50%] translate-y-[50%] items-center justify-center rounded-full border-2 md:-right-10 md:bottom-[50%]">
            <img src={arrow} alt="arrow svg" className="w-4" />
          </button>
          <Swiper
            // dir="ltr"
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".nextSlide",
              prevEl: ".prevSlide",
            }}
            className="mySwiper w-full"
          >
            <SwiperSlide className="!w-full !bg-transparent">
              <Card />
            </SwiperSlide>
            <SwiperSlide className="!w-full !bg-transparent">
              <Card />
            </SwiperSlide>
            <SwiperSlide className="!w-full !bg-transparent">
              <Card />
            </SwiperSlide>
          </Swiper>
        </div>
      </Layout>
    </div>
  );
}
