import React from "react";

import Card from "./components/Card";
import Layout from "@/components/layout/landing/Layout";

import arrow from "@assets/imgs/arrow-long.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { contact } from "@/constants/contact";

export default function Contact() {
  return (
    <div className="relative mt-20 flex min-h-[100dvh] items-center bg-[#F4F5F6] py-20">
      <Layout>
        <div className="flex flex-col items-center">
          <span className="mb-4 max-w-[23rem] font-bold !leading-[3rem] ~text-3xl/4xl md:text-center">
            چرا بیترنو ؟{" "}
          </span>
          <p className="text-sm font-semibold text-[#777E90]">
            خرید و فروش ارزهای دیجیتال به صورت آنی و با نقد شوندگی بالا و کمترین
            کارمزد
          </p>
        </div>
        <div className="mt-16">
          <Swiper
            dir="ltr"
            slidesPerView={"auto"}
            spaceBetween={40}
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".nextSlide",
              prevEl: ".prevSlide",
            }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            className="mySwiper p-3"
          >
            {contact.map((item, index) => (
              <SwiperSlide className="rounded-2xl !bg-transparent">
                <Card {...item} key={index + 1} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-8 flex items-center justify-center gap-3 text-white/50 lg:hidden">
          <button className="nextSlide flex h-10 w-10 items-center justify-center rounded-full hover:border-2">
            <img src={arrow} alt="" className="w-4" />
          </button>
          <button className="prevSlide flex h-10 w-10 items-center justify-center rounded-full hover:border-2">
            <img src={arrow} alt="" className="w-4 scale-x-[-1]" />
          </button>
        </div>
        <button className="mx-auto mt-7 flex w-full items-center justify-center rounded-full bg-primary/20 px-7 py-2.5 text-center text-lg font-semibold text-black transition-all duration-300 hover:bg-primary hover:text-white lg:w-fit xl:mt-14">
          ارتباط با ما{" "}
        </button>
      </Layout>
    </div>
  );
}
