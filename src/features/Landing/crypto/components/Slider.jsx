import React from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Card from "./Card";

import blog1 from "@assets/imgs/landing/crypto/img1.svg";
import blog2 from "@assets/imgs/landing/crypto/img2.svg";
import blog3 from "@assets/imgs/landing/crypto/img3.svg";

export default function Slider() {
  return (
    <div>
      <Swiper
        dir="ltr"
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        on={{
          transitionEnd: function () {
            if (this.isEnd) {
              this.slideTo(0);
            }
          },
        }}
        loop={true}
        loopedslides={3}
        speed={800}
        slidesPerView={2}
        spaceBetween={10}
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".nextSlide",
          prevEl: ".prevSlide",
        }}
        breakpoints={{}}
        className="blogSlider"
      >
        <SwiperSlide>
          <Card height="lg:!h-[20rem] h-[5rem] w-fit" img={blog1} />
        </SwiperSlide>
        <SwiperSlide>
          <Card height="lg:!h-[20rem] h-[5rem] w-fit" img={blog2} />
        </SwiperSlide>
        <SwiperSlide>
          <Card height="lg:!h-[20rem] h-[5rem] w-fit" img={blog3} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
