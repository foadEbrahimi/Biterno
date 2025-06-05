import React, { useEffect, useState } from "react";

import CardArz, {
  ArzCardSkeleton,
} from "@features/Landing/arz/components/Card";

import "swiper/css";
import { Autoplay, EffectCards, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const cryptos = [
  { name: "USDT", flag: "usdt-rls", id: "tether" },
  { name: "BTC", flag: "btc-rls", id: "bitcoin" },
  { name: "ETH", flag: "eth-rls", id: "ethereum" },
  { name: "BNB", flag: "bnb-rls", id: "binancecoin" },
  { name: "ADA", flag: "ada-rls", id: "cardano" },
];

export default function Slider() {
  const [topCryptos, setTopCryptos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getCrypto() {
      try {
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
        const finalResult = cryptos.map((crypto) => {
          const coingeckoStats =
            coingeckoData.find((c) => c.id === crypto.id) || {};

          return {
            name: crypto.name,
            flag: crypto.flag,
            image: coingeckoStats.image,
            price: coingeckoStats.current_price || 0,
            change24h: coingeckoStats.price_change_percentage_24h || 0,
            // marketCap: coingeckoStats.market_cap || 0, // Market Cap from CoinGecko
            // change7d:
            //   coingeckoStats.price_change_percentage_7d_in_currency || 0, // 7d change from CoinGecko
          };
        });
        setTopCryptos(finalResult);
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      } finally {
        setIsLoading(false);
      }
    }
    getCrypto();
  }, []);

  return (
    <div className="relative h-[10rem] w-[26rem] gap-2 sm:w-[39rem] md:h-[16.5rem] md:w-fit lg:h-[15rem] lg:w-[29rem] xl:mt-8 2xl:h-[16rem]">
      <Swiper
        direction="vertical"
        grabCursor={true}
        effect="cards"
        centeredSlides={true}
        slidesPerView={1.7}
        initialSlide={0}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        cardsEffect={{
          rotate: false,
          slideShadows: false,
          perSlideOffset: 95,
        }}
        modules={[EffectCards, Autoplay]}
        className="arzSlider hidden h-[20rem] md:block"
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
                className="!w-full !bg-transparent pb-6 ~mr-9/7 md:mr-12 xl:mr-9"
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
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
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
        className="arzSlider !h-fit pt-5 md:hidden"
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
  );
}
