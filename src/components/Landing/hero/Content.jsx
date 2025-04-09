import React from "react";
import { Link } from "react-router";

import cards from "../../../assets/imgs/cards@2x.png";

import arrow from "../../../assets/imgs/arrow-long.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Content() {
  const scrollToSection = () => {
    const section = document.getElementById("cryptoSection");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="heroSection" className="~px-5/40">
      {/* <Swiper
        modules={[Navigation, Pagination]}
        pagination={true}
        slidesPerView={"auto"}
        className="mySwiper"
      >
        <SwiperSlide className="!relative !h-full !w-fit py-10">
          <div className="z-10 flex h-full flex-col items-center gap-10 md:flex-row md:justify-between">
            <div className="flex flex-col items-center gap-5 md:flex md:w-[100rem] md:items-start">
              <h1 className="text-center font-bold leading-[3.5rem] text-[#23262F] ~text-4xl/6xl md:text-right xl:leading-[5rem]">
                خرید و فروش <br /> رمزنگاری در چند دقیقه
              </h1>
              <p className="text-center font-semibold text-[#777E90] md:text-right lg:max-w-[25rem]">
                بیت کوین، اتریوم، USDT و توپالت کوین ها را در صرافی افسانه ای
                دارایی های کریپتو معامله کنید.
              </p>
              <div className="flex items-center gap-5 md:hidden">
                <Link to="/market">
                  <button className="rounded-full border-2 px-4 py-2 font-bold">
                    ورود
                  </button>
                </Link>
                <button className="rounded-full bg-[#3772FF] px-5 py-2 font-semibold text-white">
                  ثبت نام
                </button>
              </div>
              <button className="hidden rounded-full bg-[#3772FF] px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#0045ea] md:flex">
                همین الان شروع کنید
              </button>
              <button
                onClick={scrollToSection}
                className="hidden h-[32px] w-[32px] items-center justify-center overflow-hidden rounded-full border-2 border-[#E6E8EC] transition-all duration-200 lg:mt-10 lg:flex"
              >
                <div
                  id="scroll_line"
                  className="flex translate-y-[-23px] flex-col"
                >
                  <img
                    src={arrow}
                    className="mb-[24px] rotate-90"
                    alt="arrow svg"
                  />
                  <img src={arrow} className="rotate-90" alt="arrow svg" />
                </div>
              </button>
            </div>
            <div className="hidden md:flex md:items-center md:justify-center">
              <img
                src={cards}
                draggable={false}
                alt="card hero img"
                className="lg:absolute lg:-top-10 lg:left-0 lg:-z-10 lg:w-[55%] 2xl:-top-32"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper> */}
      <div className="z-10 mt-10 flex h-full flex-col items-center gap-10 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-5 md:flex md:w-[100rem] md:items-start">
          <h1 className="text-center font-bold leading-[3.5rem] text-[#23262F] ~text-4xl/6xl md:text-right xl:leading-[5rem]">
            خرید و فروش <br /> رمزنگاری در چند دقیقه
          </h1>
          <p className="text-center font-semibold text-[#777E90] md:text-right lg:max-w-[25rem]">
            بیت کوین، اتریوم، USDT و توپالت کوین ها را در صرافی افسانه ای دارایی
            های کریپتو معامله کنید.
          </p>
          <div className="flex items-center gap-5 md:hidden">
            <Link to="/market">
              <button className="rounded-full border-2 px-4 py-2 font-bold">
                ورود
              </button>
            </Link>
            <button className="rounded-full bg-[#3772FF] px-5 py-2 font-semibold text-white">
              ثبت نام
            </button>
          </div>
          <button className="hidden rounded-full bg-[#3772FF] px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#0045ea] md:flex">
            همین الان شروع کنید
          </button>
          <button
            onClick={scrollToSection}
            className="hidden h-[32px] w-[32px] items-center justify-center overflow-hidden rounded-full border-2 border-[#E6E8EC] transition-all duration-200 lg:mt-10 lg:flex"
          >
            <div id="scroll_line" className="flex translate-y-[-23px] flex-col">
              <img
                src={arrow}
                className="mb-[24px] rotate-90"
                alt="arrow svg"
              />
              <img src={arrow} className="rotate-90" alt="arrow svg" />
            </div>
          </button>
        </div>
        <div className="hidden md:flex md:items-center md:justify-center">
          <img
            src={cards}
            draggable={false}
            alt="card hero img"
            className="lg:absolute lg:-top-10 lg:left-0 lg:-z-10 lg:w-[55%] 2xl:-top-32"
          />
        </div>
      </div>
    </div>
  );
}
