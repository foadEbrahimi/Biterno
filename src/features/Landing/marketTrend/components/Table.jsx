import React, { useEffect, useState } from "react";

import TableRow, { TableRowSkeleton } from "./TableRow";

import { COIN_MAPPING } from "@/constants/coins";

const API_ENDPOINTS = {
  COINGECKO: import.meta.env.VITE_COINGECKO_API_URL,
  COINGECKO_API_KEY: import.meta.env.VITE_COINGECKO_API_KEY,
};

export default function Table({ maxCrypto }) {
  const [topCryptos, setTopCryptos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // دریافت داده‌های کوین‌گکو
  const fetchCoinGeckoData = async () => {
    const response = await fetch(
      `${API_ENDPOINTS.COINGECKO}?vs_currency=usd&per_page=5`,
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

  // ترکیب داده‌های نوبیتکس و کوین‌گکو
  const finalResualt = (coingeckoData) => {
    return coingeckoData.map((crypto) => {
      return {
        name: crypto.name,
        image: crypto.image || "",
        price: crypto.current_price,
        change24h: crypto.price_change_percentage_24h,
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const coingeckoData = await fetchCoinGeckoData();
        const finalData = finalResualt(coingeckoData);
        setTopCryptos(finalData);
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative mt-10 overflow-x-visible lg:mt-20 xl:pl-12">
      <table className="w-full text-left text-sm rtl:text-right">
        <thead className="border-b uppercase text-gray-700 dark:text-white">
          <tr className="xl:text-[15px]">
            <th className="hidden w-[3rem] px-3 py-3 sm:table-cell">#</th>
            <th className="w-[10rem] px-1 py-3">نام</th>
            <th className="w-[8rem] px-1 py-3">قیمت</th>
            <th className="w-[8rem] px-1 py-3 2xl:pr-5">درصد تغییرات</th>
            <th className="hidden w-[12rem] px-1 py-3 md:table-cell 2xl:w-[8rem]">
              نمودار
            </th>
            <th className="hidden w-[8rem] px-1 py-3 sm:table-cell">ترید</th>
          </tr>
        </thead>
        <tbody className="overflow-visible">
          {isLoading
            ? Array(5)
                .fill(0)
                .map((_, index) => <TableRowSkeleton key={index} />)
            : topCryptos
                .slice(0, maxCrypto)
                .map((crypto, index) => (
                  <TableRow key={crypto.id} index={index} crypto={crypto} />
                ))}
        </tbody>
      </table>
    </div>
  );
}
