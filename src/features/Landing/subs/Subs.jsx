import React from "react";

import Layout from "@/components/layout/landing/Layout";
import Card from "./components/Card";

import arrow from "@assets/imgs/arrow-long.svg";
import logo from "@assets/imgs/logo.png";

// Import Swiper styles
import { subs } from "@/constants/subs";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Subs() {
  return (
    <div className="pb-20 pt-10">
      <Layout>
        {/* <div className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <img src={logo} alt="logo svg" className="w-20" />
          </div>
          <span className="mt-5 text-center font-semibold !leading-[2.5rem] ~text-2xl/5xl">
            با بیترنو از اخرین تحولات بازار رمز ارزها مطلع باشید
          </span>
          <p className="mt-4 text-[#777E90]">دسترسی لحظه ای به اطلاعات بازار</p>
        </div> */}
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
            loop={true}
            loopedslides={3}
            speed={800}
            // autoplay={{
            //   delay: 1500,
            //   disableOnInteraction: false,
            // }}
            modules={[Navigation, Autoplay]}
            on={{
              transitionEnd: function () {
                if (this.isEnd) {
                  this.slideTo(0);
                }
              },
            }}
            navigation={{
              nextEl: ".nextSlide",
              prevEl: ".prevSlide",
            }}
            className="mySwiper w-full"
          >
            {subs.map((item, index) => (
              <SwiperSlide className="!w-full !bg-transparent">
                <Card {...item} key={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Layout>
    </div>
  );
}
