import React, { useEffect, useState } from "react";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import Card, { CardSkeleton } from "./Card";

const API_ENDPOINTS = {
  COINGECKO: import.meta.env.VITE_COINGECKO_API_URL,
  COINGECKO_API_KEY: import.meta.env.VITE_COINGECKO_API_KEY,
};
const cryptosIDS = [
  { name: "USDT", id: "tether" },
  { name: "BTC", id: "bitcoin" },
  { name: "ETH", id: "ethereum" },
];

export default function CardSlider() {
  const [cryptos, setCryptos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getCrypto() {
      try {
        const ids = cryptosIDS.map((crypto) => crypto.id).join(",");
        const coingeckoRes = await fetch(
          `${API_ENDPOINTS.COINGECKO}?vs_currency=usd&ids=${ids}`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              "x-cg-demo-api-key": API_ENDPOINTS.COINGECKO_API_KEY,
            },
          },
        );
        const coingeckoData = await coingeckoRes.json();

        // Combine data from both APIs
        const finalResualt = cryptosIDS.map((crypto) => {
          const coingeckoStats =
            coingeckoData.find((c) => c.id === crypto.id) || {};
          return {
            name: crypto.name,
            flag: crypto.flag,
            image: coingeckoStats.image,
            price: coingeckoStats.current_price || 0,
            change24h: coingeckoStats.price_change_percentage_24h || 0,
          };
        });

        setCryptos(finalResualt);
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      } finally {
        setIsLoading(false);
      }
    }
    getCrypto();
  }, []);

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
      initialSlide={0}
      modules={[Autoplay]}
      className="!h-fit pt-5"
    >
      {isLoading
        ? Array.from({ length: 3 }).map((_, index) => (
            <SwiperSlide className="!w-full lg:!w-fit">
              <CardSkeleton key={index} />
            </SwiperSlide>
          ))
        : cryptos.map((crypto) => (
            <SwiperSlide className="!w-full lg:!w-2/6">
              <Card key={crypto.id} {...crypto} />
            </SwiperSlide>
          ))}
    </Swiper>
  );
}
