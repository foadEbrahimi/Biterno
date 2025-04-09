import React from "react";

import Card from "../../components/Landing/arz/Card";
import Layout from "../../layout/landing/Layout";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Arz() {
  return (
    // <Layout>
    <div className="mb-36 mt-10 gap-2 p-3 py-5 md:mt-5 lg:mt-0">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"1.5"}
        breakpoints={{
          768: {
            slidesPerView: 2.3,
          },
          1024: {
            slidesPerView: 3.3,
          },
          1285: {
            slidesPerView: 3.7,
          },
          1520: {
            slidesPerView: 4.5,
          },
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 50,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
      </Swiper>
    </div>
    // </Layout>
  );
}
