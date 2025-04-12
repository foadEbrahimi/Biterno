import React, { useEffect, useState } from "react";
import "swiper/css";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./components/Card";

export default function Arz() {
  const [topCryptos, setTopCryptos] = useState([]);

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
      }
    }
    getCrypto();
  }, []);

  return (
    <div className="mb-36 mt-10 gap-2 p-3 py-5 md:mt-5 lg:mt-0">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"1.3"}
        breakpoints={{
          700: {
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
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
      >
        {topCryptos.map((crypto, index) => (
          <SwiperSlide key={index}>
            <Card {...crypto} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
