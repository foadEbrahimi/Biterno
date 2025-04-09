import React from "react";

import chart from "../../assets/imgs/chart.svg";
import bitcoin from "../../assets/imgs/coin symbol (2).svg";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

export default function CardSlider() {
  return (
    <Swiper
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      slidesPerView={1.2}
      loop
      spaceBetween={10}
      modules={[Navigation, Autoplay]}
      navigation={{
        nextEl: ".nextSlide",
        prevEl: ".prevSlide",
      }}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      className="mySwiper"
    >
      <SwiperSlide>
        <div
          className="group/hover flex w-fit cursor-pointer items-start gap-5"
          dir="ltr"
        >
          <div className="flex items-start gap-3">
            <img src={bitcoin} alt="bitcoin svg" />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-sans font-semibold text-[#777E90]">
                  BTC/USDT
                </span>
                <span
                  dir="ltr"
                  className="flex items-center justify-center rounded-full bg-[#58BD7D] px-2 text-white"
                >
                  {" "}
                  +0.79%
                </span>
              </div>
              <span className="mt-1 text-3xl font-bold transition-all duration-200 group-hover/hover:text-[#3772FF]">
                36,641.20
              </span>
              <span className="text-lg font-light">36,641.20</span>
            </div>
          </div>
          <img src={chart} className="hidden xl:flex" alt="chart svg" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="group/hover flex w-fit cursor-pointer items-start gap-5"
          dir="ltr"
        >
          <div className="flex items-start gap-3">
            <img src={bitcoin} alt="bitcoin svg" />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-sans font-semibold text-[#777E90]">
                  BTC/USDT
                </span>
                <span
                  dir="ltr"
                  className="flex items-center justify-center rounded-full bg-[#58BD7D] px-2 text-white"
                >
                  {" "}
                  +0.79%
                </span>
              </div>
              <span className="mt-1 text-3xl font-bold transition-all duration-200 group-hover/hover:text-[#3772FF]">
                36,641.20
              </span>
              <span className="text-lg font-light">36,641.20</span>
            </div>
          </div>
          <img src={chart} className="hidden xl:flex" alt="chart svg" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="group/hover flex w-fit cursor-pointer items-start gap-5"
          dir="ltr"
        >
          <div className="flex items-start gap-3">
            <img src={bitcoin} alt="bitcoin svg" />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-sans font-semibold text-[#777E90]">
                  BTC/USDT
                </span>
                <span
                  dir="ltr"
                  className="flex items-center justify-center rounded-full bg-[#58BD7D] px-2 text-white"
                >
                  {" "}
                  +0.79%
                </span>
              </div>
              <span className="mt-1 text-3xl font-bold transition-all duration-200 group-hover/hover:text-[#3772FF]">
                36,641.20
              </span>
              <span className="text-lg font-light">36,641.20</span>
            </div>
          </div>
          <img src={chart} className="hidden xl:flex" alt="chart svg" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
