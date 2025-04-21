import React, { useEffect, useState } from "react";

import marketplace from "@assets/imgs/market/marketplace.svg";

import { COIN_MAPPING } from "@/constants/coins";
import TableRow, { TableRowSkeleton } from "./TableRow";

const API_ENDPOINTS = {
  NOBITEX: import.meta.env.VITE_NOBITEX_API_URL,
  COINGECKO: import.meta.env.VITE_COINGECKO_API_URL,
  COINGECKO_API_KEY: import.meta.env.VITE_COINGECKO_API_KEY,
};

export default function Table() {
  const [topCryptos, setTopCryptos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // دریافت داده‌های نوبیتکس
  const fetchNobitexData = async () => {
    const response = await fetch(API_ENDPOINTS.NOBITEX);
    const data = await response.json();
    return data;
  };

  // دریافت داده‌های کوین‌گکو
  const fetchCoinGeckoData = async (ids) => {
    const response = await fetch(
      `${API_ENDPOINTS.COINGECKO}?vs_currency=usd&ids=${ids}&price_change_percentage=7d`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          "x-cg-demo-api-key": API_ENDPOINTS.COINGECKO_API_KEY,
        },
      },
    );
    return await response.json();
  };

  // پردازش داده‌های نوبیتکس
  const processNobitexData = (stats) => {
    return Object.entries(stats)
      .filter(([key]) => key.endsWith("rls"))
      .slice(0, 10)
      .map(([flag, stats]) => {
        const coinName = flag.split("-")[0].toLowerCase();
        return {
          name: coinName.toUpperCase(),
          flag,
          id: COIN_MAPPING[coinName] || coinName,
          price: stats.latest || 0,
          change24h: stats.dayChange || 0,
        };
      });
  };

  // ترکیب داده‌های نوبیتکس و کوین‌گکو
  const combineData = (cryptos, coingeckoData) => {
    return cryptos.map((crypto) => {
      const coingeckoInfo = coingeckoData.find((c) => c.id === crypto.id) || {};
      return {
        ...crypto,
        image: coingeckoInfo.image || "",
        marketCap: coingeckoInfo.market_cap || 0,
        volume: coingeckoInfo.total_volume || 0,
        change7d: coingeckoInfo.price_change_percentage_7d_in_currency || 0,
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // دریافت داده‌های نوبیتکس
        const nobitexData = await fetchNobitexData();
        const cryptos = processNobitexData(nobitexData.stats);

        // دریافت داده‌های کوین‌گکو
        const validCryptos = cryptos.filter(
          (crypto) => COIN_MAPPING[crypto.name.toLowerCase()],
        );
        const ids = validCryptos.map((crypto) => crypto.id).join(",");
        const coingeckoData = await fetchCoinGeckoData(ids);

        // ترکیب داده‌ها
        const combinedData = combineData(cryptos, coingeckoData);
        setTopCryptos(combinedData);
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="mt-40 hidden lg:block">
      <div className="relative mt-5 overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-500 rtl:text-right">
          <thead className="border-b uppercase text-[#777E90] dark:text-white">
            <tr>
              <th scope="col" className="px-1 py-3">
                <div className="flex items-center gap-2">
                  #
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    className="cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.14741 6.80441C5.40776 7.06476 5.82987 7.06476 6.09022 6.80441L7.95215 4.94248L9.81408 6.80441C10.0744 7.06476 10.4965 7.06476 10.7569 6.80441C11.0172 6.54406 11.0172 6.12195 10.7569 5.8616L8.42355 3.52827C8.1632 3.26792 7.74109 3.26792 7.48074 3.52827L5.14741 5.8616C4.88706 6.12195 4.88706 6.54406 5.14741 6.80441Z"
                      fill="#777E91"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.14741 9.19461C5.40776 8.93426 5.82987 8.93426 6.09022 9.19461L7.95215 11.0565L9.81408 9.19461C10.0744 8.93426 10.4965 8.93426 10.7569 9.19461C11.0172 9.45496 11.0172 9.87707 10.7569 10.1374L8.42355 12.4708C8.1632 12.7311 7.74109 12.7311 7.48074 12.4708L5.14741 10.1374C4.88706 9.87707 4.88706 9.45496 5.14741 9.19461Z"
                      fill="#777E91"
                    />
                  </svg>
                </div>
              </th>
              <th scope="col" className="px-1 py-3">
                <div className="flex items-center gap-3">
                  نام
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    className="cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.14741 6.80441C5.40776 7.06476 5.82987 7.06476 6.09022 6.80441L7.95215 4.94248L9.81408 6.80441C10.0744 7.06476 10.4965 7.06476 10.7569 6.80441C11.0172 6.54406 11.0172 6.12195 10.7569 5.8616L8.42355 3.52827C8.1632 3.26792 7.74109 3.26792 7.48074 3.52827L5.14741 5.8616C4.88706 6.12195 4.88706 6.54406 5.14741 6.80441Z"
                      fill="#777E91"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.14741 9.19461C5.40776 8.93426 5.82987 8.93426 6.09022 9.19461L7.95215 11.0565L9.81408 9.19461C10.0744 8.93426 10.4965 8.93426 10.7569 9.19461C11.0172 9.45496 11.0172 9.87707 10.7569 10.1374L8.42355 12.4708C8.1632 12.7311 7.74109 12.7311 7.48074 12.4708L5.14741 10.1374C4.88706 9.87707 4.88706 9.45496 5.14741 9.19461Z"
                      fill="#777E91"
                    />
                  </svg>
                </div>
              </th>
              <th scope="col" className="px-1 py-3">
                <div className="flex items-center gap-2">
                  قیمت
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    className="cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.14741 6.80441C5.40776 7.06476 5.82987 7.06476 6.09022 6.80441L7.95215 4.94248L9.81408 6.80441C10.0744 7.06476 10.4965 7.06476 10.7569 6.80441C11.0172 6.54406 11.0172 6.12195 10.7569 5.8616L8.42355 3.52827C8.1632 3.26792 7.74109 3.26792 7.48074 3.52827L5.14741 5.8616C4.88706 6.12195 4.88706 6.54406 5.14741 6.80441Z"
                      fill="#777E91"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.14741 9.19461C5.40776 8.93426 5.82987 8.93426 6.09022 9.19461L7.95215 11.0565L9.81408 9.19461C10.0744 8.93426 10.4965 8.93426 10.7569 9.19461C11.0172 9.45496 11.0172 9.87707 10.7569 10.1374L8.42355 12.4708C8.1632 12.7311 7.74109 12.7311 7.48074 12.4708L5.14741 10.1374C4.88706 9.87707 4.88706 9.45496 5.14741 9.19461Z"
                      fill="#777E91"
                    />
                  </svg>
                </div>
              </th>
              <th scope="col" className="px-1 py-3">
                <span className="font-sans">%</span> 24 ساعت
              </th>
              <th scope="col" className="px-1 py-3">
                <span className="font-sans">%</span> 7 روز
              </th>
              <th scope="col" className="flex items-center gap-1 px-1 py-3">
                <img src={marketplace} alt="" /> بازار
              </th>
              <th scope="col" className="hidden px-1 py-3 lg:table-cell">
                نمودار{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading
              ? Array(5)
                  .fill(0)
                  .map((_, index) => <TableRowSkeleton key={index} />)
              : topCryptos.map((crypto, index) => (
                  <TableRow key={crypto.id} index={index} crypto={crypto} />
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
