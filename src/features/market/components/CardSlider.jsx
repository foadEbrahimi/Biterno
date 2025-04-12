import React from "react";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import Card from "./Card";
import { Skeleton } from "@/components/ui/Skeleton";

export default function CardSlider({ isLoading, cryptos }) {
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
      {isLoading
        ? [1, 2, 3].map((i) => (
            <SwiperSlide key={i}>
              <Skeleton className="h-[136px] w-full max-w-[312px] rounded-2xl" />
            </SwiperSlide>
          ))
        : cryptos.map((crypto) => (
            <SwiperSlide key={crypto.id}>
              <Card {...crypto} />
            </SwiperSlide>
          ))}
    </Swiper>
  );
}
