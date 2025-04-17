import React from "react";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import Card from "./Card";
import { Skeleton } from "@/components/ui/Skeleton";

export default function CardSlider({ cryptos }) {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      slidesPerView={"1"}
      breakpoints={{
        640: {
          slidesPerView: 3,
        },
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      spaceBetween={20}
      initialSlide={0}
      modules={[Autoplay]}
      className="!h-fit pt-5"
    >
      {cryptos.slice(0, 3).map((crypto) => (
        <SwiperSlide className="!w-full lg:!w-fit !bg-transparent">
          <Card key={crypto.id} {...crypto} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
