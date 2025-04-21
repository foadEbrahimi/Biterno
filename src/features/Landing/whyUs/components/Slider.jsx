import React from "react";

import Card from "./Card";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { contact } from "@/constants/contact";

export default function Slider() {
  return (
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
        <SwiperSlide className="min-h-full rounded-2xl !bg-transparent">
          <Card {...item} key={index + 1} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
