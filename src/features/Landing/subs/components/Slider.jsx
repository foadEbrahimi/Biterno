import React from "react";

import Card from "./Card";

import { subs } from "@/constants/subs";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Slider() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      loop={true}
      loopedslides={3}
      speed={800}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
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
  );
}
