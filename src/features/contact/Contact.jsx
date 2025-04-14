import React, { useState } from "react";

import arrow from "../../assets/imgs/arrow-long.svg";
import contactImg from "../../assets/imgs/contact-pic.png";

import Layout from "../../components/layout/landing/Layout";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./components/Card";

export default function Contact() {
  const [state, setState] = useState("general");

  return (
    <div className="py-20 2xl:my-0">
      <Layout>
        <div className="flex w-full flex-col items-start gap-5 md:flex-row">
          <div className="flex w-full flex-1 flex-col ~gap-6/10 lg:pt-10 xl:pt-20">
            <h1 className="~text-4xl/6xl">سوالات متداول</h1>
            <ul className="flex items-center gap-2 text-sm [&>*]:rounded-full [&>*]:px-4 [&>*]:py-1.5">
              <li
                onClick={() => setState("general")}
                className={`cursor-pointer ${state === "general" ? "bg-[#353945] font-semibold text-white" : "text-[#777E90] hover:text-[#353945]"}`}
              >
                عمومی
              </li>
              <li
                onClick={() => setState("support")}
                className={`cursor-pointer ${state === "support" ? "bg-[#353945] font-semibold text-white" : "text-[#777E90] hover:text-[#353945]"}`}
              >
                پشتیبانی
              </li>
              <li
                onClick={() => setState("hosting")}
                className={`cursor-pointer ${state === "hosting" ? "bg-[#353945] font-semibold text-white" : "text-[#777E90] hover:text-[#353945]"}`}
              >
                میزبانی
              </li>
              <li
                onClick={() => setState("product")}
                className={`cursor-pointer ${state === "product" ? "bg-[#353945] font-semibold text-white" : "text-[#777E90] hover:text-[#353945]"}`}
              >
                محصول
              </li>
            </ul>
            <div className="mt-5 flex flex-col gap-5">
              <div className="group flex cursor-pointer items-center gap-3 border-b pb-5">
                <span className="text-lg text-[#777E90] transition-all duration-300 group-hover:text-[#3772FF]">
                  01
                </span>
                <span className="font-bold transition-all duration-300 group-hover:text-[#3772FF]">
                  چگونه کار می کند؟
                </span>
              </div>
              <div className="group flex cursor-pointer items-center gap-3 border-b pb-5">
                <span className="text-lg text-[#777E90] transition-all duration-300 group-hover:text-[#3772FF]">
                  01
                </span>
                <span className="font-bold transition-all duration-300 group-hover:text-[#3772FF]">
                  چگونه کار می کند؟
                </span>
              </div>
              <div className="group flex cursor-pointer items-center gap-3 border-b pb-5">
                <span className="text-lg text-[#777E90] transition-all duration-300 group-hover:text-[#3772FF]">
                  01
                </span>
                <span className="font-bold transition-all duration-300 group-hover:text-[#3772FF]">
                  چگونه کار می کند؟
                </span>
              </div>
              <div className="group flex cursor-pointer items-center gap-3 pb-5">
                <span className="text-lg text-[#777E90] transition-all duration-300 group-hover:text-[#3772FF]">
                  01
                </span>
                <span className="font-bold transition-all duration-300 group-hover:text-[#3772FF]">
                  چگونه کار می کند؟
                </span>
              </div>
            </div>
          </div>
          <div className="flex-[2]">
            <img src={contactImg} alt="contact png" />
          </div>
        </div>
      </Layout>
      <div className="mt-20 w-full">
        <span className="flex justify-center text-center font-bold leading-8 text-[#777E90] ~px-5/40">
          قبل از درخواست پاسخ، ممکن است آن را در مرکز یادگیری رمزنگاری ما بیابید
        </span>
        <div className="lg:px-6">
          <Swiper
            slidesPerView={"1"}
            modules={[Navigation]}
            navigation={{
              nextEl: ".prevSlide",
              prevEl: ".nextSlide",
            }}
            breakpoints={{
              768: {
                slidesPerView: 2, // For md screens
              },
              1280: {
                slidesPerView: 3, // For lg screens
              },
              1536: {
                slidesPerView: 4, // For 2xl screens
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide className="!w-full sm:!w-fit">
              <Card />
            </SwiperSlide>
            <SwiperSlide className="!w-full sm:!w-fit">
              <Card />
            </SwiperSlide>
            <SwiperSlide className="!w-full sm:!w-fit">
              <Card />
            </SwiperSlide>
            <SwiperSlide className="!w-full sm:!w-fit">
              <Card />
            </SwiperSlide>
            <SwiperSlide className="!w-full sm:!w-fit">
              <Card />
            </SwiperSlide>
            <div className="flex items-center justify-center gap-3">
              <button className="nextSlide flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:border-2">
                <img src={arrow} alt="" className="w-4" />
              </button>
              <button className="prevSlide flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:border-2">
                <img src={arrow} alt="" className="w-4 scale-x-[-1]" />
              </button>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
