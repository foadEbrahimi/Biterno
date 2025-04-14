import React, { useEffect, useState } from "react";
import { Link } from "react-router";

import cards from "@assets/imgs/hero/investing.svg";

import CardArz, {
  ArzCardSkeleton,
} from "@features/Landing/arz/components/Card";

import { Autoplay, EffectCards, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Content() {
  // const scrollToSection = () => {
  //   const section = document.getElementById("cryptoSection");
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  const [topCryptos, setTopCryptos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getCrypto() {
      try {
        // Fetch data from Nobitex API
        const nobitexRes = await fetch("https://api.nobitex.ir/market/stats");
        const nobitexData = await nobitexRes.json();
        // Define the top 5 cryptocurrencies
        const cryptos = [
          { name: "BTC", flag: "btc-rls", id: "bitcoin" },
          { name: "ETH", flag: "eth-rls", id: "ethereum" },
          { name: "USDT", flag: "usdt-rls", id: "tether" },
          { name: "BNB", flag: "bnb-rls", id: "binancecoin" },
          { name: "ADA", flag: "ada-rls", id: "cardano" },
        ];

        // Fetch additional data from CoinGecko API
        const ids = cryptos.map((crypto) => crypto.id).join(",");
        const coingeckoRes = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              "x-cg-demo-api-key": "CG-SCsCc7mgtupipxaW77AuUR2W",
            },
          },
        );
        const coingeckoData = await coingeckoRes.json();
        // Combine data from both APIs
        const combinedData = cryptos.map((crypto) => {
          const nobitexStats = nobitexData.stats[crypto.flag] || {};
          const coingeckoStats =
            coingeckoData.find((c) => c.id === crypto.id) || {};

          return {
            name: crypto.name,
            flag: crypto.flag,
            image: coingeckoStats.image, // Image from CoinGecko
            price: nobitexStats.latest || 0, // Price from Nobitex
            change24h: nobitexStats.dayChange || 0, // 24h change from Nobitex
            // marketCap: coingeckoStats.market_cap || 0, // Market Cap from CoinGecko
            // change7d:
            //   coingeckoStats.price_change_percentage_7d_in_currency || 0, // 7d change from CoinGecko
          };
        });
        setTopCryptos(combinedData);
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      } finally {
        setIsLoading(false);
      }
    }
    getCrypto();
  }, []);

  return (
    <div id="heroSection" className="pt-20 ~px-5/40 md:!pl-0">
      <div className="flex h-full flex-col items-center gap-10 pt-10 md:flex-row md:justify-between">
        <div className="flex flex-1 flex-col items-center gap-5 md:flex md:items-start">
          <h1 className="text-center font-bold !leading-[3.5rem] text-[#23262F] ~text-4xl/5xl md:text-right lg:!leading-[4.4rem] xl:!leading-[4rem] 2xl:!leading-[4.5rem]">
            خرید و فروش <br /> <span className="text-blue-600"> رمزنگاری</span>{" "}
            در چند دقیقه
          </h1>
          <p className="px-10 text-center text-sm font-semibold leading-7 text-[#777E90] md:px-0 md:text-right lg:max-w-[25rem]">
            بیت کوین، اتریوم، USDT و توپالت کوین ها را در صرافی افسانه ای دارایی
            های کریپتو معامله کنید.
          </p>
          <div className="flex items-center gap-5 md:hidden">
            <Link to="/auth/login">
              <button className="rounded-full border-2 px-5 py-2 font-bold">
                ورود
              </button>
            </Link>
            <Link to="/auth/register">
              <button className="rounded-full bg-[#3772FF] px-5 py-2 font-semibold text-white">
                ثبت نام
              </button>
            </Link>
          </div>
          <Link to="/auth/login">
            <button className="hidden gap-2 rounded-xl bg-blue-200 px-5 py-3 font-vazirBold text-sm text-blue-700 transition-all duration-500 hover:bg-blue-600 hover:text-white md:flex">
              همین الان شروع کنید
              <svg
                ariaHidden="true"
                dataPrefix="fal"
                dataIcon="arrow-left"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-3 rotate-45"
              >
                <path
                  fill="currentColor"
                  d="M231.536 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113L238.607 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"
                  class=""
                ></path>
              </svg>
            </button>
          </Link>
          <div>
            <div className="relative h-[18rem] w-[25rem] gap-2 py-5 sm:w-[39rem] md:w-fit lg:w-[29rem]">
              <Swiper
                direction="vertical"
                grabCursor={true}
                effect="cards"
                centeredSlides={true}
                slidesPerView={1.7}
                initialSlide={1}
                // autoplay={{
                //   delay: 1500,
                //   disableOnInteraction: false,
                // }}
                loop={true}
                loopedSlides={3}
                speed={500}
                on={{
                  transitionEnd: function () {
                    if (this.isEnd) {
                      this.slideTo(0);
                    }
                  },
                }}
                cardsEffect={{
                  rotate: false,
                  slideShadows: false,
                  perSlideOffset: 95,
                }}
                modules={[EffectCards, Autoplay]}
                className="arzSlider hidden md:block"
              >
                {isLoading
                  ? Array(4)
                      .fill(0)
                      .map((_, index) => (
                        <SwiperSlide className="!w-full !bg-transparent ~mr-9/7">
                          <ArzCardSkeleton key={index} />
                        </SwiperSlide>
                      ))
                  : topCryptos.map((crypto) => (
                      <SwiperSlide
                        className="!w-full !bg-transparent pb-6 ~mr-9/7"
                        style={{
                          filter: "grayscale(100)",
                        }}
                      >
                        <CardArz key={crypto.id} {...crypto} />
                      </SwiperSlide>
                    ))}
              </Swiper>
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"2.4"}
                loop={true}
                loopedslides={3}
                speed={800}
                // autoplay={{
                //   delay: 1000,
                //   disableOnInteraction: false,
                // }}
                on={{
                  transitionEnd: function () {
                    if (this.isEnd) {
                      this.slideTo(0);
                    }
                  },
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2.5,
                  },
                }}
                spaceBetween={20}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 50,
                  modifier: 1,
                  slideShadows: false,
                }}
                modules={[EffectCoverflow, Autoplay]}
                className="arzSlider !h-fit pt-10 md:hidden"
              >
                {isLoading
                  ? Array(4)
                      .fill(0)
                      .map((_, index) => (
                        <SwiperSlide className="!bg-transparent">
                          <ArzCardSkeleton key={index} />
                        </SwiperSlide>
                      ))
                  : topCryptos.slice(0, 4).map((crypto) => (
                      <SwiperSlide
                        style={{
                          filter: "blur(2px)",
                        }}
                        className="!bg-transparent"
                      >
                        <CardArz key={crypto.id} {...crypto} />
                      </SwiperSlide>
                    ))}
              </Swiper>
            </div>
          </div>
          {/* <button
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
          </button> */}
        </div>
        <div className="hidden h-full w-full flex-[1.5] md:flex md:items-center md:justify-center">
          <img
            src={cards}
            draggable={false}
            alt="card hero img"
            className="w-full scale-x-[-1]"
          />
        </div>
      </div>
    </div>
  );
}
