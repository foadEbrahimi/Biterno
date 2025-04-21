import React from "react";
import { Link } from "react-router";

import Layout from "@/components/layout/landing/Layout";

import object from "@assets/imgs/landing/hero/object.png";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/shadcn/select";

import Table from "./components/Table";

export default function MarketTrend({ bg = true, btn = true, maxCrypto }) {
  return (
    <div
      className={`relative mt-10 flex items-center overflow-hidden rounded-b-[50px] rounded-t-[50px]`}
    >
      <div className="absolute right-0 top-0 h-full w-[250%]">
        <img src={object} alt="object png" className="" />
      </div>
      <Layout className="relative z-10 w-full py-10">
        <div className="flex items-center justify-between">
          <span className="font-bold ~text-xl/4xl dark:text-white">
            روند بازار
          </span>
          <Link to="/market">
            <button className="hidden rounded-full border-2 px-4 py-2 text-sm font-semibold text-black transition-all duration-200 hover:border-primary hover:bg-primary hover:text-[#FCFCFD] dark:text-white sm:flex lg:text-base">
              مشاهده بیشتر
            </button>
          </Link>
        </div>

        <div className="mt-7">
          <ul className="text-md hidden font-semibold text-[#777E90] dark:text-white [&>*]:min-w-fit [&>*]:rounded-full [&>*]:px-4 [&>*]:py-0.5 [&>*]:hover:bg-[#353945] [&>*]:hover:text-white">
            <li className="rounded-full bg-[#353945] px-3 py-0.5 text-white">
              همه
            </li>
          </ul>
          <div className="sm:hidden">
            <Select dir="rtl" className="">
              <SelectTrigger className="dark:!text-white">
                <SelectValue placeholder="همه" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="all">همه</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Table maxCrypto={maxCrypto} />

        {btn && (
          <Link to="/market">
            <button className="mt-5 w-full rounded-full border-2 p-3 font-semibold text-black transition-all duration-200 hover:border-primary hover:bg-primary hover:text-white dark:text-white sm:hidden lg:text-base">
              مشاهده بیشتر
            </button>
          </Link>
        )}
      </Layout>
    </div>
  );
}
