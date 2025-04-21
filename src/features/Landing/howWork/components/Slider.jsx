import React from "react";

import Card from "./Card";

import { howItWork } from "@/constants/howItWork";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Slider() {
  return (
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
  );
}
