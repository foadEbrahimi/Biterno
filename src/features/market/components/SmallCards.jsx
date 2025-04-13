import React, { useEffect, useState } from "react";
import SmallCard, { SmallCardSkeleton } from "./SmallCard";

export default function SmallCards() {
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
          { name: "ltc", flag: "ltc-rls", id: "litecoin" },
          { name: "xrp", flag: "xrp-rls", id: "ripple" },
          { name: "bnb", flag: "bnb-rls", id: "binancecoin" },
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
        console.log(coingeckoData);

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
            change7d: nobitexStats.weekChange || 0,
            marketCap: coingeckoStats.market_cap || 0,
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
    <div>
      <div className="flex flex-col">
        {isLoading
          ? [1, 2, 3].map((i) => <SmallCardSkeleton key={i} />)
          : cryptos.map((item, index) => <SmallCard key={index} {...item} />)}
      </div>
    </div>
  );
}
