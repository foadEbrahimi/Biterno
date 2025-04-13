import React, { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/shadcn/select";

import CardSlider from "./CardSlider";
import Menu from "./Menu";

export default function Cryptocurrencies() {
  const [cryptos, setCryptos] = useState([]);
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
            image: coingeckoStats.image,
            price: nobitexStats.latest || 0,
            change24h: nobitexStats.dayChange || 0,
          };
        });
        console.log(combinedData);

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
    <div className="absolute -bottom-[4.8rem] left-0 w-full ~px-5/32 lg:-bottom-[5rem]">
      <div className="z-10 w-full rounded-[24px] border bg-white pt-5 shadow-2xl">
        <div className="px-5 pb-[26px]">
          <CardSlider isLoading={isLoading} cryptos={cryptos} />
        </div>
        <div className="border-t px-5 py-5">
          <div className="lg:hidden">
            <Select dir="rtl">
              <SelectTrigger>
                <SelectValue placeholder="ارزهای رمزنگاری شده" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="crypto">ارزهای رمزنگاری شده</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Menu />
        </div>
      </div>
    </div>
  );
}
