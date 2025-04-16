import React, { useEffect, useState } from "react";
import TableRow, { TableRowSkeleton } from "./components/TableRow";

import Layout from "@/components/layout/landing/Layout";

import img from "@assets/imgs/hero/object.png";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/shadcn/select";

import { COIN_MAPPING } from "@/constants/coins";

// ثابت‌های API از فایل env
const API_ENDPOINTS = {
  NOBITEX: import.meta.env.VITE_NOBITEX_API_URL,
  COINGECKO: import.meta.env.VITE_COINGECKO_API_URL,
  COINGECKO_API_KEY: import.meta.env.VITE_COINGECKO_API_KEY,
};

export default function MarketTrend() {
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
      `${API_ENDPOINTS.COINGECKO}?vs_currency=usd&ids=${ids}`,
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
    <div className="mt-10 flex items-center rounded-t-[50px] bg-[#F4F5F6]">
      <Layout className="relative py-10">
        <div className="absolute left-0 top-0 h-full w-full">
          <img src={img} alt="" />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">روند بازار</span>
          <button className="hidden rounded-full border-2 px-4 py-2 text-sm font-semibold text-black transition-all duration-200 hover:border-primary hover:bg-primary hover:text-[#FCFCFD] sm:flex lg:text-base">
            مشاهده بیشتر
          </button>
        </div>

        <div className="mt-7">
          <ul className="text-md hidden font-semibold text-[#777E90] [&>*]:min-w-fit [&>*]:rounded-full [&>*]:px-4 [&>*]:py-0.5 [&>*]:hover:bg-[#353945] [&>*]:hover:text-white">
            <li className="rounded-full bg-[#353945] px-3 py-0.5 text-white">
              همه
            </li>
          </ul>
          <div className="sm:hidden">
            <Select dir="rtl">
              <SelectTrigger>
                <SelectValue placeholder="همه" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="all">همه</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="relative mt-10 overflow-x-auto lg:mt-20">
          <table className="w-full text-left text-sm text-gray-500 rtl:text-right">
            <thead className="border-b uppercase text-gray-700">
              <tr className="xl:text-[15px]">
                <th
                  scope="col"
                  className="hidden w-[3rem] px-1 py-3 sm:table-cell"
                >
                  #
                </th>
                <th scope="col" className="w-[10rem] px-1 py-3">
                  نام
                </th>
                <th scope="col" className="w-[8rem] px-1 py-3">
                  قیمت
                </th>
                <th scope="col" className="w-[8rem] px-1 py-3">
                  تغییر 24 ساعته
                </th>
                <th
                  scope="col"
                  className="hidden w-[12rem] px-1 py-3 md:table-cell 2xl:w-[8rem]"
                >
                  نمودار
                </th>
                <th
                  scope="col"
                  className="hidden w-[8rem] px-1 py-3 sm:table-cell"
                >
                  ترید
                </th>
              </tr>
            </thead>
            <tbody className="overflow-visible">
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

        <button className="mt-5 w-full rounded-full border-2 p-3 font-semibold text-black transition-all duration-200 hover:border-[#23262F] hover:bg-[#23262F] hover:text-[#FCFCFD] sm:hidden lg:text-base">
          مشاهده بیشتر
        </button>
      </Layout>
    </div>
  );
}
