import React, { useEffect, useState } from "react";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import Card from "./Card";
import { Skeleton } from "@/components/ui/Skeleton";

const API_ENDPOINTS = {
  NOBITEX: import.meta.env.VITE_NOBITEX_API_URL,
  COINGECKO: import.meta.env.VITE_COINGECKO_API_URL,
  COINGECKO_API_KEY: import.meta.env.VITE_COINGECKO_API_KEY,
};

export default function CardSlider() {
  const [cryptos, setCryptos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getCrypto() {
      try {
        // Fetch data from Nobitex API
        const nobitexRes = await fetch(API_ENDPOINTS.NOBITEX);
        const nobitexData = await nobitexRes.json();

        // Define the top 5 cryptocurrencies
        const cryptos = [
          { name: "USDT", flag: "usdt-rls", id: "tether" },
          { name: "BTC", flag: "btc-rls", id: "bitcoin" },
          { name: "ETH", flag: "eth-rls", id: "ethereum" },
        ];

        // Fetch additional data from CoinGecko API
        const ids = cryptos.map((crypto) => crypto.id).join(",");
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
        const combinedData = cryptos.map((crypto) => {
          const nobitexStats = nobitexData.stats[crypto.flag] || {};
          const coingeckoStats =
            coingeckoData.find((c) => c.id === crypto.id) || {};

          return {
            name: crypto.name,
            flag: crypto.flag,
            image: coingeckoStats.image,
            price: nobitexStats.latest || 0,
            change24h: nobitexStats.dayChange || 0,
          };
        });
        setCryptos(combinedData);
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
      spaceBetween={20}
      initialSlide={0}
      modules={[Autoplay]}
      className="!h-fit pt-5"
    >
      {cryptos.slice(0, 3).map((crypto) => (
        <SwiperSlide className="!w-full !bg-transparent lg:!w-fit">
          <Card key={crypto.id} {...crypto} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
