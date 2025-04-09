import React from "react";
import TableRow from "../../components/Landing/marketTrend/TableRow";
import Layout from "../../layout/landing/Layout";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/shadcn/select";

export default function MarketTrend() {
  return (
    <div className="my-40 flex items-center">
      <Layout>
        <div className="flex items-center justify-between">
          <span className="text-4xl font-bold">روند بازار</span>
          <button className="hidden rounded-full border-2 px-4 py-2 text-sm font-semibold text-black transition-all duration-200 hover:border-[#23262F] hover:bg-[#23262F] hover:text-[#FCFCFD] sm:flex lg:text-base">
            مشاهده بیشتر
          </button>
        </div>
        <div className="mt-7">
          <ul className="text-md hidden font-semibold text-[#777E90] sm:flex sm:items-center sm:gap-5 [&>*]:min-w-fit [&>*]:rounded-full [&>*]:px-4 [&>*]:py-0.5 [&>*]:hover:bg-[#353945] [&>*]:hover:text-white">
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
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
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
