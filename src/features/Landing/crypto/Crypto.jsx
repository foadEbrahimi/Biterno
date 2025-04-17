import React from "react";

import Layout from "@/components/layout/landing/Layout";
import Card from "./components/Card";

import arrow from "@assets/imgs/arrow-long.svg";
import blog1 from "@assets/imgs/crypto/img1.svg";
import blog2 from "@assets/imgs/crypto/img2.svg";
import blog3 from "@assets/imgs/crypto/img3.svg";
import blog4 from "@assets/imgs/crypto/img4.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Crypto() {
  return (
    <div id="cryptoSection" className="pb-5 md:mt-10 xl:mt-14">
      <Layout>
        <div>
          <div className="flex items-center justify-between">
            <span className="font-bold ~text-xl/4xl">اخبار بازار</span>
            <button className="hidden rounded-full border-2 px-4 py-2.5 text-sm font-semibold text-black transition-all duration-200 hover:border-primary hover:bg-primary hover:text-[#FCFCFD] md:flex lg:text-base">
              مشاهده بیشتر
            </button>
          </div>
        </div>
        <div className="mt-2 space-y-5">
          <div className="lg:hidden">
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
              className="mySwiper"
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
          <div className="hidden items-start gap-20 lg:flex">
            <div className="flex-1 lg:max-w-[50rem]">
              <Card height="h-[31rem]" img={blog4} />
            </div>
            <div className="space-y-5">
              <Card
                max
                vertical={true}
                height="!h-[10rem] !w-[10rem]"
                img={blog2}
              />
              <Card
                max
                vertical={true}
                height="!h-[10rem] !w-[10rem]"
                img={blog1}
              />
              <Card
                max
                vertical={true}
                height="!h-[10rem] !w-[10rem]"
                img={blog3}
              />
            </div>
          </div>
          <div className="!mt-1 flex items-center justify-center gap-3 md:justify-start lg:hidden">
            <button className="nextSlide flex h-10 w-10 items-center justify-center rounded-full hover:border-2">
              <img src={arrow} alt="" className="w-4" />
            </button>
            <button className="prevSlide flex h-10 w-10 items-center justify-center rounded-full hover:border-2">
              <img src={arrow} alt="" className="w-4 scale-x-[-1]" />
            </button>
          </div>
          <button className="hover:pri !mt-4 w-full rounded-full border-2 p-3 font-bold text-black transition-all duration-200 hover:bg-[#23262F] hover:text-[#FCFCFD] md:hidden lg:hidden">
            مشاهده بیشتر
          </button>
        </div>
      </Layout>
    </div>
  );
}
