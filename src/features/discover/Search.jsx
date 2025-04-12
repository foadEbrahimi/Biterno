import React from "react";

import search from "../../assets/imgs/search.svg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/shadcn/select";
import Card from "./components/Card";
export default function Search() {
  return (
    <div className="mt-32">
      <div className="flex items-center justify-between">
        <span className="font-bold text-[#353945] ~text-lg/3xl">
          هر چیزی را در مورد کریپتو جستجو کنید
        </span>
        <div className="flex items-center justify-center rounded-full bg-blue-600 ~h-8/10 ~w-8/10">
          <img src={search} className="~w-4/5" alt="search svg" />
        </div>
      </div>
      <hr className="my-5" />
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <Select className="" dir="rtl">
          <SelectTrigger className="h-12 border-2 md:max-w-[20rem]">
            <SelectValue placeholder="اخیرا اضافه شده" />
          </SelectTrigger>
          <SelectContent className="border-2 bg-white">
            <SelectItem value="DeFi">24 ساعت گذشته</SelectItem>
            <SelectItem value="Innovation">3 روز گذشته</SelectItem>
            <SelectItem value="POS">هفته پیش</SelectItem>
          </SelectContent>
        </Select>
        <div className="md:hidden">
          <Select dir="rtl">
            <SelectTrigger className="h-12 border-2">
              <SelectValue placeholder="آموزش" />
            </SelectTrigger>
            <SelectContent className="border-2 bg-white">
              <SelectItem value="DeFi">مورد استفاده</SelectItem>
              <SelectItem value="Innovation">تجارت</SelectItem>
              <SelectItem value="POS">کیف پول</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="hidden md:flex md:items-center md:gap-3">
          <span className="rounded-full bg-[#353945] px-4 py-1 font-semibold text-white">
            آموزش
          </span>
          <span className="rounded-full px-4 py-1 font-semibold text-[#777E90]">
            مورد استفاده
          </span>
          <span className="rounded-full px-4 py-1 font-semibold text-[#777E90]">
            تجارت
          </span>
          <span className="rounded-full px-4 py-1 font-semibold text-[#777E90]">
            کیف پول
          </span>
        </div>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
